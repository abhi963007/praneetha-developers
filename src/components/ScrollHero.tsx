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
/** Text fades in between these scroll progress values (0-1). */
const CONTENT_START = 0.7;
const CONTENT_END = 1;
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
  const contentRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const video = videoRef.current;
    const content = contentRef.current;
    const hint = hintRef.current;
    const gsap = window.gsap;
    const ST = window.ScrollTrigger;
    if (!wrap || !video || !content || !hint || !gsap || !ST) return;

    // Reduced motion: static final image, content visible, no video work.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.style.display = 'none';
      wrap.classList.add('scroll-hero--static');
      gsap.set(content, { opacity: 1, y: 0 });
      gsap.set(hint, { opacity: 0 });
      return;
    }

    gsap.registerPlugin(ST);
    video.src = window.matchMedia(MOBILE_QUERY).matches ? VIDEO_MOBILE : VIDEO_DESKTOP;
    video.muted = true;
    video.load(); // iOS Safari needs an explicit load()

    let raf = 0;
    let target = 0;
    let ctx: { revert: () => void } | undefined;

    const setup = () => {
      if (ctx || !video.duration) return;
      ctx = gsap.context(() => {
        // Smoothing: ease current video time toward the scroll target (rAF, one write per frame).
        const tick = () => {
          const diff = target - video.currentTime;
          if (Math.abs(diff) > 0.01) {
            // ~60fps ease: larger SCRUB_SMOOTHING = slower catch-up
            video.currentTime += diff * Math.min(1, 0.12 / Math.max(SCRUB_SMOOTHING, 0.05));
          }
          raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);

        ST.create({
          trigger: wrap,
          start: 'top top',
          end: 'bottom bottom',
          onUpdate: (self: { progress: number }) => {
            target = self.progress * video.duration;
            const p = self.progress;
            const c = Math.min(Math.max((p - CONTENT_START) / (CONTENT_END - CONTENT_START), 0), 1);
            content.style.opacity = String(c);
            content.style.transform = `translate3d(0, ${(1 - c) * 40}px, 0)`;
            content.style.pointerEvents = c > 0.5 ? 'auto' : 'none';
            hint.style.opacity = String(Math.max(1 - p * 12, 0));
          },
        });
      }, wrap);
      ST.refresh();
    };

    if (video.readyState >= 1) setup();
    else video.addEventListener('loadedmetadata', setup, { once: true });

    return () => {
      video.removeEventListener('loadedmetadata', setup);
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
