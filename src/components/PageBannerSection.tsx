import { useEffect, useRef } from 'react';
import './page-banner-hero.css';

interface PageBannerSectionProps {
  title: string;
  subtitle?: string;
}

const DEFAULT_SUBTITLES: Record<string, string> = {
  'About Us': 'Crafting enduring gated communities across Mokila & Shankarpally since 2005.',
  Properties: 'Explore HMDA & TS-RERA registered luxury villas and apartments across Mokila, Kondakal & Shankarpally.',
  Gallery: 'A visual journey through Praneeta’s completed and ongoing villa communities in Mokila.',
  Services: 'End-to-end residential development, architecture, and turnkey home delivery.',
  Insights: 'Perspectives on luxury living, RERA transparency, and Hyderabad real estate.',
  'Contact Us': 'Visit our Mokila Experience Lounge or connect directly with our leadership team.',
};

const PAGE_HERO_MEDIA: Record<string, { image: string; videoDesktop?: string; videoMobile?: string }> = {
  'About Us': { image: '/images/hero-about.png' },
  Properties: { image: '/images/hero-properties.png' },
  Gallery: { image: '/images/hero-gallery.png' },
  Services: { image: '/images/hero-services.png' },
  Insights: { image: '/images/hero-insights.png' },
  'Contact Us': { image: '/images/hero-contact.png' },
};

const FALLBACK_POSTER = '/images/hero-about.png';
const MOBILE_QUERY = '(max-width: 767px)';

export function PageBannerSection({ title, subtitle }: PageBannerSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLVideoElement | HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

  const resolvedSubtitle = subtitle ?? DEFAULT_SUBTITLES[title] ?? '';
  const heroMedia = PAGE_HERO_MEDIA[title] ?? { image: FALLBACK_POSTER };
  const hasVideo = Boolean(heroMedia.videoDesktop);

  useEffect(() => {
    const section = sectionRef.current;
    const media = mediaRef.current;
    const content = contentRef.current;
    const hint = hintRef.current;
    if (!section || !media || !content || !hint) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let raf = 0;
    let targetTime = 0;
    let ctx: { revert: () => void } | undefined;
    let pollId = 0;
    let disposed = false;

    const videoEl = hasVideo ? (media as HTMLVideoElement) : null;
    if (videoEl) {
      videoEl.src =
        window.matchMedia(MOBILE_QUERY).matches && heroMedia.videoMobile
          ? heroMedia.videoMobile
          : heroMedia.videoDesktop!;
      videoEl.muted = true;
      videoEl.load();
    }

    const trySetup = () => {
      if (disposed || ctx) return;
      if (videoEl && !videoEl.duration) return;
      const gsap = window.gsap;
      const ST = window.ScrollTrigger;
      if (!gsap || !ST) return;

      gsap.registerPlugin(ST);
      ctx = gsap.context(() => {
        if (videoEl) {
          const startTime = videoEl.duration * 0.55;
          const endTime = videoEl.duration * 0.98;
          videoEl.currentTime = startTime;
          targetTime = startTime;

          const tick = () => {
            if (!videoEl.seeking && videoEl.readyState >= 2) {
              const diff = targetTime - videoEl.currentTime;
              if (Math.abs(diff) > 0.01) {
                videoEl.currentTime += diff * 0.14;
              }
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
        }

        gsap.to(media, {
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
    if (!videoEl || videoEl.readyState >= 1) trySetup();
    else videoEl.addEventListener('loadedmetadata', onReady, { once: true });

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
      videoEl?.play().then(() => videoEl.pause()).catch(() => {});
    };
    window.addEventListener('touchstart', unlock, { once: true, passive: true });

    return () => {
      disposed = true;
      window.clearInterval(pollId);
      window.removeEventListener('load', onWinLoad);
      cancelAnimationFrame(raf);
      videoEl?.removeEventListener('loadedmetadata', onReady);
      window.removeEventListener('touchstart', unlock);
      ctx?.revert();
    };
  }, [title, hasVideo, heroMedia.videoDesktop, heroMedia.videoMobile]);

  return (
    <section ref={sectionRef} className="page-hero">
      <div className="page-hero__box">
        {hasVideo ? (
          <video
            ref={mediaRef as React.RefObject<HTMLVideoElement>}
            className="page-hero__video"
            poster={heroMedia.image}
            muted
            playsInline
            preload="auto"
          />
        ) : (
          <img
            ref={mediaRef as React.RefObject<HTMLImageElement>}
            className="page-hero__video"
            src={heroMedia.image}
            alt={title}
            loading="eager"
          />
        )}
        <div className="page-hero__shade" />
        <div ref={contentRef} className="page-hero__content">
          <div className="page-hero__text-wrap">
            <h1 className="page-hero__title">{title}</h1>
            {resolvedSubtitle && <p className="page-hero__subtitle">{resolvedSubtitle}</p>}
          </div>
        </div>
        <div ref={hintRef} className="page-hero__hint" aria-hidden="true">
          <span>Scroll</span>
          <i />
        </div>
      </div>
    </section>
  );
}
