import { useEffect, useRef } from 'react';
import './page-banner-hero.css';

interface PageBannerSectionProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  image?: string;
  singleLine?: boolean;
}

const DEFAULT_SUBTITLES: Record<string, string> = {
  'About Us': 'Crafting enduring gated communities across Mokila & Shankarpally since 2005.',
  Properties: 'Explore HMDA & TS-RERA registered luxury villas and apartments across Mokila, Kondakal & Shankarpally.',
  'Projects by Praneeta Developers':
    'Explore HMDA & TG-RERA registered luxury villas and apartments across Mokila, Kondakal & Shankarpally.',
  Gallery: 'Explore architectural renders, active site progress, and global expo highlights across Mokila & Shankarpally.',
  Services: 'End-to-end gated community development, guided site visits, HMDA/TS-RERA clarity, and NRI advisory.',
  Insights: 'Market perspectives, HMDA & TS-RERA checklists, and architectural notes across Mokila, Kondakal & Shankarpally.',
  Blogs: 'Insights, Real Estate Trends & West Hyderabad Market Analysis.',
  'Contact Us': 'Visit our Mokila Experience Lounge or connect directly with our leadership team.',
  'Become a Partner':
    "Join Hyderabad's fastest-growing quality-delivering property developer. Access premium inventory, earn attractive payouts, and close more deals with dedicated support.",
  Disclaimer: 'Important legal disclosures, project representation terms, and TG-RERA compliance notices.',
  'Privacy Policy': 'How V Praneeta Developers Pvt. Ltd. collects, safeguards, and uses your inquiry information.',
};

const PAGE_HERO_MEDIA: Record<string, { image: string; videoDesktop?: string; videoMobile?: string }> = {
  'About Us': { image: '/images/hero-about.png' },
  Properties: { image: '/images/hero-properties.png' },
  'Projects by Praneeta Developers': { image: '/images/hero-properties.png' },
  Gallery: { image: '/images/hero-gallery.png' },
  Services: { image: '/images/hero-services.png' },
  'Become a Partner': { image: '/images/service-channel-partner.jpg' },
  Insights: { image: '/images/hero-insights.png' },
  Blogs: { image: '/images/hero-insights.png' },
  'Contact Us': { image: '/images/hero-contact.png' },
  Disclaimer: { image: '/images/hero-about.png' },
  'Privacy Policy': { image: '/images/hero-contact.png' },
};

const FALLBACK_POSTER = '/images/hero-about.png';
const MOBILE_QUERY = '(max-width: 767px)';

export function PageBannerSection({
  title,
  subtitle,
  eyebrow,
  image,
  singleLine = false,
}: PageBannerSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLVideoElement | HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

  const resolvedSubtitle = subtitle ?? DEFAULT_SUBTITLES[title] ?? '';
  const heroMedia = PAGE_HERO_MEDIA[title] ?? { image: FALLBACK_POSTER };
  const resolvedImage = image || heroMedia.image;
  const hasVideo = Boolean(heroMedia.videoDesktop);
  const isWideWrap = singleLine || title.length > 18;
  const titleModifierClass = singleLine
    ? ' page-hero__title--single'
    : title.length > 38
      ? ' page-hero__title--article'
      : title.length > 18
        ? ' page-hero__title--project'
        : '';

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
  }, [title, resolvedImage, hasVideo, heroMedia.videoDesktop, heroMedia.videoMobile]);

  return (
    <section ref={sectionRef} className="page-hero">
      <div className="page-hero__box">
        {hasVideo ? (
          <video
            ref={mediaRef as React.RefObject<HTMLVideoElement>}
            className="page-hero__video"
            poster={resolvedImage}
            muted
            playsInline
            preload="auto"
          />
        ) : (
          <img
            ref={mediaRef as React.RefObject<HTMLImageElement>}
            className="page-hero__video"
            src={resolvedImage}
            alt={title}
            loading="eager"
          />
        )}
        <div className="page-hero__shade" />
        <div ref={contentRef} className="page-hero__content">
          <div
            key={title}
            className={`page-hero__text-wrap${
              singleLine
                ? ' page-hero__text-wrap--single'
                : isWideWrap
                  ? ' page-hero__text-wrap--wide'
                  : ''
            }`}
          >
            {eyebrow && (
              <span className={`page-hero__eyebrow${singleLine ? ' page-hero__eyebrow--single' : ''}`}>
                {eyebrow}
              </span>
            )}
            <h1
              className={`page-hero__title${titleModifierClass}`}
              style={
                singleLine
                  ? ({ '--hero-title-chars': Math.max(16, title.length) } as React.CSSProperties)
                  : undefined
              }
            >
              {title}
            </h1>
            {resolvedSubtitle && (
              <p className={`page-hero__subtitle${singleLine ? ' page-hero__subtitle--single' : ''}`}>
                {resolvedSubtitle}
              </p>
            )}
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
