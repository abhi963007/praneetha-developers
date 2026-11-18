import { useEffect, useRef, type ReactNode } from 'react';
import './scroll-hero.css';

/* ------------------------------------------------------------------ *
 *  Easy-to-change settings
 * ------------------------------------------------------------------ */
/** Video files (re-encoded, every frame a keyframe - see scripts/encode-hero-video.mjs). */
const VIDEO_DESKTOP = '/video/hero-scrub.mp4';
const VIDEO_MOBILE = '/video/hero-scrub-mobile.mp4';
/** First-frame image (clouds): shown while the video loads. Reduced-motion uses hero-final.jpg via CSS. */
const POSTER = '/video/hero-first.jpg';
/** Total scroll length of the hero. Bigger = slower video. */
const SCROLL_LENGTH_VH = 350;
/** Scrub smoothing in seconds (0 = instant, 0.5-1 = smooth). */
const SCRUB_SMOOTHING = 0.8;
const VIDEO_START = 0.04;
/** Sky brand ("Praneeta Developers") rises from behind the villa & hills once clouds clear. */
const FINALE_START = 0.62;
const FINALE_END = 0.88;
/** Editorial CTA card fades in at the bottom-right at the end of the reveal. */
const CONTENT_START = 0.80;
const CONTENT_END = 0.95;
const MOBILE_QUERY = '(max-width: 767px)';

type GsapLike = {
  registerPlugin: (...p: unknown[]) => void;
  context: (fn: () => void, scope?: Element | null) => { revert: () => void };
  to: (target: unknown, vars: Record<string, unknown>) => unknown;
  fromTo: (target: unknown, from: Record<string, unknown>, to: Record<string, unknown>) => unknown;
  set: (target: unknown, vars: Record<string, unknown>) => unknown;
};
type ScrollTriggerLike = {
  create: (vars: Record<string, unknown>) => unknown;
  refresh: () => void;
};
declare global {
  interface Window {
    gsap?: GsapLike;
    ScrollTrigger?: ScrollTriggerLike;
  }
}

/**
 * Scroll-scrubbed cinematic hero.
 * A tall container holds a sticky 100vh stage with the video. Scroll progress
 * (via GSAP ScrollTrigger, already loaded globally in index.html together with
 * Lenis) is mapped to video.currentTime. `children` (headline / text / CTA) fade
 * in over the final frame.
 */
export function ScrollHero({ children }: { children: ReactNode }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const finaleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const video = videoRef.current;
    const finale = finaleRef.current;
    const content = contentRef.current;
    const hint = hintRef.current;
    if (!wrap || !video || !finale || !content || !hint) return;

    // Reduced motion: static final image, finale brand & CTA visible, no video work.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.style.display = 'none';
      wrap.classList.add('scroll-hero--static');
      content.style.opacity = '1';
      content.style.transform = 'translate3d(0, 0, 0)';
      finale.style.opacity = '1';
      finale.style.transform = 'translate3d(-50%, 0, 0)';
      hint.style.opacity = '0';
      return;
    }

    video.src = window.matchMedia(MOBILE_QUERY).matches ? VIDEO_MOBILE : VIDEO_DESKTOP;
    video.muted = true;
    video.load(); // iOS Safari & hard-refresh need explicit load()

    let raf = 0;
    let target = 0;
    let latestP = 0;
    let ctx: { revert: () => void } | undefined;
    let pollId = 0;
    let disposed = false;

    const clamp01 = (v: number) => Math.min(Math.max(v, 0), 1);

    const syncTimelineLayers = (p: number) => {
      // ("Praneeta Developers"): emerges up from behind villa roof & hills into sky
      const finT = clamp01((p - FINALE_START) / (FINALE_END - FINALE_START));
      const finEase = 1 - Math.pow(1 - finT, 3);
      finale.style.opacity = String(clamp01(finT * 1.45));
      finale.style.transform = `translate3d(-50%, ${(1 - finEase) * 160}px, 0)`;
    };

    const trySetup = () => {
      if (disposed || ctx || !video.duration) return;
      const gsap = window.gsap;
      const ST = window.ScrollTrigger;
      if (!gsap || !ST) return;

      gsap.registerPlugin(ST);
      ctx = gsap.context(() => {
        // Smoothing: ease current video time toward the scroll target without aborting in-flight seeks.
        const tick = () => {
          if (!video.seeking && video.readyState >= 2) {
            const diff = target - video.currentTime;
            if (Math.abs(diff) > 0.01) {
              // ~60fps ease: larger SCRUB_SMOOTHING = slower catch-up
              video.currentTime += diff * Math.min(1, 0.12 / Math.max(SCRUB_SMOOTHING, 0.05));
            }
          }
          syncTimelineLayers(latestP);
          raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);

        const applyProgress = (p: number) => {
          latestP = p;
          const videoProgress = clamp01((p - VIDEO_START) / (1 - VIDEO_START));
          const safeMaxTime = Math.max(0, video.duration - 0.02);
          target = Math.min(videoProgress * safeMaxTime, safeMaxTime);

          const c = clamp01((p - CONTENT_START) / (CONTENT_END - CONTENT_START));
          content.style.opacity = String(c);
          content.style.transform = `translate3d(0, ${(1 - c) * 36}px, 0)`;
          content.style.pointerEvents = c > 0.5 ? 'auto' : 'none';
          hint.style.opacity = String(Math.max(1 - p * 12, 0));
          syncTimelineLayers(p);
        };

        const st = ST.create({
          trigger: wrap,
          start: 'top top',
          end: 'bottom bottom',
          onUpdate: (self: { progress: number }) => {
            applyProgress(self.progress);
          },
        }) as { progress?: number } | undefined;
        if (st && typeof st.progress === 'number') {
          applyProgress(st.progress);
        }
      }, wrap);
      ST.refresh();
    };

    const onReady = () => trySetup();
    if (video.readyState >= 1) trySetup();
    else video.addEventListener('loadedmetadata', onReady, { once: true });

    // On hard/force refresh, module scripts can run before /js/gsap.min.js finishes loading.
    if (!window.gsap || !window.ScrollTrigger) {
      let attempts = 0;
      pollId = window.setInterval(() => {
        attempts += 1;
        if (window.gsap && window.ScrollTrigger) {
          window.clearInterval(pollId);
          trySetup();
        } else if (attempts >= 100) {
          window.clearInterval(pollId);
        }
      }, 50);
    }

    const onWinLoad = () => {
      trySetup();
      window.ScrollTrigger?.refresh();
    };
    window.addEventListener('load', onWinLoad, { once: true });

    return () => {
      disposed = true;
      window.clearInterval(pollId);
      window.removeEventListener('load', onWinLoad);
      video.removeEventListener('loadedmetadata', onReady);
      cancelAnimationFrame(raf);
      ctx?.revert();
      video.removeAttribute('src');
      video.load();
    };
  }, []);

  return (
    <div ref={wrapRef} className="scroll-hero" style={{ height: `${SCROLL_LENGTH_VH}vh` }}>
      <div className="scroll-hero__stage">
        <div className="scroll-hero__box">
          <video
            ref={videoRef}
            className="scroll-hero__video"
            poster={POSTER}
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            aria-hidden="true"
          />
          <div className="scroll-hero__finale-mask" aria-hidden="true">
            <div ref={finaleRef} className="scroll-hero__finale">
              <p className="scroll-hero__finale-title">
                <span className="scroll-hero__brand-word">Praneeta</span>{' '}
                <span className="scroll-hero__brand-word">Developers</span>
              </p>
            </div>
          </div>
          <div className="scroll-hero__shade" />
          <div ref={contentRef} className="scroll-hero__content">
            {children}
          </div>
          <div ref={hintRef} className="scroll-hero__hint" aria-hidden="true">
            <span>Scroll</span>
            <i />
          </div>
        </div>
      </div>
    </div>
  );
}
