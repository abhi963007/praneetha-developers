import { useEffect, useRef } from 'react';
import './page-banner-hero.css';

interface PageBannerSectionProps {
  title: string;
  subtitle?: string;
}

const DEFAULT_SUBTITLES: Record<string, string> = {
  'About Us': 'Crafting enduring gated communities across West Hyderabad since 2014.',
  Properties: 'Explore TG-RERA approved luxury villas, apartments, and plotted enclaves in Mokila.',
  Services: 'End-to-end residential development, architecture, and turnkey home delivery.',
  Insights: 'Perspectives on luxury living, RERA transparency, and Hyderabad real estate.',
  'Contact Us': 'Visit our Mokila Experience Lounge or connect directly with our leadership team.',
};

const VIDEO_DESKTOP = '/video/hero-scrub.mp4';
const VIDEO_MOBILE = '/video/hero-scrub-mobile.mp4';
const POSTER = '/video/hero-final.jpg';
const MOBILE_QUERY = '(max-width: 767px)';

export function PageBannerSection({ title, subtitle }: PageBannerSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

  const resolvedSubtitle = subtitle ?? DEFAULT_SUBTITLES[title] ?? '';

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    const content = contentRef.current;
    const hint = hintRef.current;
    if (!section || !video || !content || !hint) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    video.src = window.matchMedia(MOBILE_QUERY).matches ? VIDEO_MOBILE : VIDEO_DESKTOP;
    video.muted = true;
    video.load();

    let raf = 0;
    let targetTime = 0;
    let ctx: { revert: () => void } | undefined;
    let pollId = 0;
    let disposed = false;

    const trySetup = () => {
      if (disposed || ctx || !video.duration) return;
      const gsap = window.gsap;
      const ST = window.ScrollTrigger;
      if (!gsap || !ST) return;

      gsap.registerPlugin(ST);
      const startTime = video.duration * 0.55;
      const endTime = video.duration * 0.98;
      video.currentTime = startTime;
      targetTime = startTime;

      ctx = gsap.context(() => {
        const tick = () => {
          const diff = targetTime - video.currentTime;
          if (Math.abs(diff) > 0.01) {
            video.currentTime += diff * 0.14;
          }
          raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);

        ST.create({
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          onUpdate: (self: { progress: number }) => {
            targetTime = startTime + (endTime - startTime) * self.progress;
          },
        });

        gsap.to(video, {
          scale: 1.12,
          ease: 'none',
          scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: true },
        });

        gsap.to(content, {
          y: -36,
          opacity: 0.15,
          ease: 'none',
          scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: true },
        });

        gsap.to(hint, {
          opacity: 0,
          scrollTrigger: { trigger: section, start: 'top top', end: '22% top', scrub: true },
        });
      }, section);

      ST.refresh();
    };

    const onReady = () => trySetup();
    if (video.readyState >= 1) trySetup();
    else video.addEventListener('loadedmetadata', onReady, { once: true });

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

    const unlock = () => {
      video.play().then(() => video.pause()).catch(() => {});
    };
    window.addEventListener('touchstart', unlock, { once: true, passive: true });

    return () => {
      disposed = true;
      window.clearInterval(pollId);
      window.removeEventListener('load', onWinLoad);
      cancelAnimationFrame(raf);
      video.removeEventListener('loadedmetadata', onReady);
      window.removeEventListener('touchstart', unlock);
      ctx?.revert();
    };
  }, [title]);

  return (
    <section ref={sectionRef} className="page-hero">
      <div className="page-hero__box">
        <video
          ref={videoRef}
          className="page-hero__video"
          poster={POSTER}
          muted
          playsInline
          preload="auto"
        />
        <div className="page-hero__shade" />
        <div ref={contentRef} className="page-hero__content">
          <span className="page-hero__eyebrow">Pranitha Developers</span>
          <h1 className="page-hero__title">{title}</h1>
          {resolvedSubtitle && <p className="page-hero__subtitle">{resolvedSubtitle}</p>}
        </div>
        <div ref={hintRef} className="page-hero__hint" aria-hidden="true">
          <span>Scroll</span>
          <i />
        </div>
      </div>
    </section>
  );
}
