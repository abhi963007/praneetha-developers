import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useScrollHero } from '../hooks/useScrollHero';

interface ScrollHeroShowcaseProps {
  onOpenEnquiry: (defaultProject?: string) => void;
}

interface HeroPerspective {
  index: number;
  label: string;
  kicker: string;
  title: string;
  subtitle: string;
  specLabel: string;
  image: string;
}

const PERSPECTIVES: HeroPerspective[] = [
  {
    index: 0,
    label: 'Exterior',
    kicker: 'MOKILA – SHANKARPALLY · WEST HYDERABAD',
    title: 'Gated Triplex Villa Living.',
    subtitle: '165 Vastu-aligned luxury villas across 15 acres, starting at ₹1.50 Cr.',
    specLabel: 'Elevation · North-East Corner',
    image:
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1920&q=85',
  },
  {
    index: 1,
    label: 'Courtyard',
    kicker: '2,250 – 2,850 SQ. FT. · ZERO SHARED WALLS',
    title: 'Sunlit Double-Height Courtyards.',
    subtitle: 'Private garden decks, cantilevered terraces, and airy 3 & 4 BHK triplex layouts.',
    specLabel: 'Spatial Volume · 22 Ft Atrium',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85',
  },
  {
    index: 2,
    label: 'Clubhouse',
    kicker: '62% OPEN LANDSCAPED REALM',
    title: '20,000 Sq. Ft. Clubhouse Sanctuary.',
    subtitle: 'Resort-grade amenities just 15 minutes from Kokapet and Financial District.',
    specLabel: 'Leisure Deck · Horizon Pool',
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=85',
  },
];

export function ScrollHeroShowcase({ onOpenEnquiry }: ScrollHeroShowcaseProps) {
  const { trackRef, progress, activeChapter, jumpToChapter } = useScrollHero();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const current = PERSPECTIVES[activeChapter] ?? PERSPECTIVES[0];
  const nextPerspective = PERSPECTIVES[(activeChapter + 1) % PERSPECTIVES.length];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (!w || !h) return;

    ctx.clearRect(0, 0, w, h);

    // Subtle daylight aura synced to scroll progression
    const lightX = w * (0.72 + progress * 0.08);
    const lightY = h * (0.38 - progress * 0.06);
    const radius = Math.min(w, h) * 0.48;

    const glow = ctx.createRadialGradient(lightX, lightY, 10, lightX, lightY, radius);
    glow.addColorStop(0, 'rgba(197, 160, 89, 0.16)');
    glow.addColorStop(1, 'rgba(5, 24, 15, 0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, w, h);
  }, [progress]);

  const insetOffsetY = ((progress % 0.34) - 0.17) * 28;

  return (
    <section
      ref={trackRef}
      className="hero-scroll-track relative h-[250vh] w-full bg-brand-ink"
      aria-label="Pranitha Sovereign Villas Spatial Showcase"
    >
      <div className="sticky top-0 flex h-[calc(100vh-5rem)] min-h-[600px] w-full flex-col justify-between overflow-hidden bg-brand-ink">
        {/* Crossfading Full-Bleed Architectural Visuals */}
        {PERSPECTIVES.map((perspective) => {
          const isActive = perspective.index === activeChapter;
          const zoom = isActive ? 1.09 - (progress % 0.34) * 0.18 : 1.06;
          return (
            <div
              key={perspective.index}
              className="absolute inset-0 transition-opacity duration-1000 ease-out"
              style={{ opacity: isActive ? 1 : 0 }}
              aria-hidden={!isActive}
            >
              <img
                src={perspective.image}
                alt={perspective.title}
                className="h-full w-full object-cover transition-transform duration-300 ease-out"
                style={{ transform: `scale(${zoom.toFixed(3)})` }}
              />
            </div>
          );
        })}

        {/* Architectural Scrim */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(8, 19, 13, 0.86) 0%, rgba(8, 19, 13, 0.56) 52%, rgba(8, 19, 13, 0.22) 100%)',
          }}
        />

        <canvas
          ref={canvasRef}
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden="true"
        />

        {/* Editorial Composition + Floating Spatial Preview Inset */}
        <div className="relative z-10 flex flex-1 items-center">
          <div className="edge-container flex w-full items-center justify-between gap-10 py-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3.5">
                <span className="h-px w-8 bg-brand-gold" aria-hidden="true" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                  {current.kicker}
                </p>
              </div>

              <h1
                key={current.title}
                className="hero-headline-responsive mt-5 font-display font-normal tracking-[-0.015em] text-white"
              >
                {current.title}
              </h1>

              <p className="mt-4 max-w-lg text-sm font-light leading-relaxed text-white/85 sm:text-base">
                {current.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onOpenEnquiry('Pranitha Sovereign Villas')}
                  className="rounded-sm bg-white px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-dark transition-colors hover:bg-brand-gold hover:text-brand-ink"
                >
                  Book a Private Villa Tour
                </button>
                <Link
                  to="/project/pranitha-sovereign-villas"
                  className="awwwards-link-line py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:text-brand-gold"
                >
                  Explore Sovereign Villas ↗
                </Link>
              </div>
            </div>

            {/* Awwwards Secondary Spatial Plate Inset (Desktop) */}
            <button
              type="button"
              onClick={() => jumpToChapter(nextPerspective.index)}
              style={{ transform: `translate3d(0, ${insetOffsetY.toFixed(1)}px, 0)` }}
              className="group hidden w-72 shrink-0 overflow-hidden rounded-sm border border-white/25 bg-brand-ink/60 text-left backdrop-blur-md transition-all duration-300 hover:border-brand-gold/70 lg:block xl:w-80"
              aria-label={`Jump to ${nextPerspective.label} perspective`}
            >
              <div className="awwwards-image-frame aspect-[16/10] w-full">
                <img
                  src={nextPerspective.image}
                  alt={nextPerspective.label}
                  className="h-full w-full object-cover"
                />
                <span className="absolute right-3 top-3 rounded-sm bg-brand-ink/75 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-gold backdrop-blur-sm">
                  Next View
                </span>
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/60">
                    {nextPerspective.specLabel}
                  </p>
                  <p className="mt-0.5 font-display text-lg font-medium text-white group-hover:text-brand-gold">
                    {nextPerspective.label} Perspective
                  </p>
                </div>
                <span className="text-xs text-white/75 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-brand-gold">
                  →
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Edge-to-Edge Architectural HUD Bar */}
        <div className="relative z-10 w-full border-t border-white/15 bg-brand-ink/80 backdrop-blur-md">
          <div className="edge-container flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 py-3 text-xs tracking-wide text-white/90 sm:py-4">
              <span className="font-medium">Pranitha Sovereign Villas</span>
              <span className="text-white/35">·</span>
              <span className="font-semibold text-brand-gold">₹1.50 Cr – ₹2.00 Cr</span>
              <span className="hidden text-white/35 md:inline">·</span>
              <span className="hidden text-white/65 md:inline">4 BHK Triplex · HMDA &amp; TG-RERA Approved</span>
            </div>

            <div className="grid grid-cols-3 divide-x divide-white/15 border-t border-white/10 sm:w-auto sm:border-t-0">
              {PERSPECTIVES.map((perspective) => {
                const active = perspective.index === activeChapter;
                const chapterStart = perspective.index / PERSPECTIVES.length;
                const chapterSpan = 1 / PERSPECTIVES.length;
                const rawChapterFill = ((progress - chapterStart) / chapterSpan) * 100;
                const chapterFill = active
                  ? Math.max(8, Math.min(100, rawChapterFill))
                  : perspective.index < activeChapter
                    ? 100
                    : 0;

                return (
                  <button
                    key={perspective.index}
                    type="button"
                    onClick={() => jumpToChapter(perspective.index)}
                    className={`relative px-5 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors sm:px-7 sm:py-4 ${
                      active ? 'bg-white/[0.06] text-white' : 'text-white/55 hover:text-white'
                    }`}
                  >
                    <span
                      className="absolute left-0 top-0 h-[2px] bg-brand-gold transition-all duration-150"
                      style={{ width: `${chapterFill}%` }}
                      aria-hidden="true"
                    />
                    {perspective.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
