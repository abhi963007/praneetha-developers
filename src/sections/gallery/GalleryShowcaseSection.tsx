import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './gallery-page.css';

type GalleryCategory = 'All' | 'Elevations & Interiors' | 'Site Progress' | 'Events & Expos';
type GalleryProject =
  | 'All Projects'
  | 'Amity Villas'
  | 'The Patio Villas'
  | 'Santorini Villas'
  | 'Praneeta Meridian'
  | 'Singapur Town';

interface GalleryEntry {
  id: string;
  title: string;
  subtitle: string;
  category: Exclude<GalleryCategory, 'All'>;
  project?: Exclude<GalleryProject, 'All Projects'>;
  src: string;
}

const CATEGORIES: GalleryCategory[] = [
  'All',
  'Elevations & Interiors',
  'Site Progress',
  'Events & Expos',
];

const PROJECTS: GalleryProject[] = [
  'All Projects',
  'Amity Villas',
  'The Patio Villas',
  'Santorini Villas',
  'Praneeta Meridian',
  'Singapur Town',
];

const GALLERY_ENTRIES: GalleryEntry[] = [
  {
    id: 'g1',
    title: 'The Santorini Villas — Mokila Township Aerial View',
    subtitle: '23 Acres · 231 Greek-Inspired 5 BHK Villas',
    category: 'Elevations & Interiors',
    project: 'Santorini Villas',
    src: '/images/projects/santorini/hero-slide-1.webp',
  },
  {
    id: 'g2',
    title: 'Amity Villas — Dusk Triplex Elevation',
    subtitle: '6.5 Acres · 76 G+2 Triplex Villas, Mokila',
    category: 'Elevations & Interiors',
    project: 'Amity Villas',
    src: '/images/projects/amity/night-exterior.webp',
  },
  {
    id: 'g3',
    title: 'The Patio Villas — Landscaped Courtyard Avenue',
    subtitle: '20.2 Acres · 175 Courtyard Villas, Mokila',
    category: 'Elevations & Interiors',
    project: 'The Patio Villas',
    src: '/images/projects/patio/hero-slide-1.webp',
  },
  {
    id: 'g4',
    title: 'Praneeta Meridian — Kondakal High-Rise Tower',
    subtitle: '11 Floors · 88 Spacious 3 BHK Residences',
    category: 'Elevations & Interiors',
    project: 'Praneeta Meridian',
    src: '/images/projects/meridian/showcase-card.webp',
  },
  {
    id: 'g5',
    title: 'Praneeta Singapur Town Phase-2 — Street Elevation',
    subtitle: 'Shankarpally · 35 Premium 4 BHK Villas',
    category: 'Elevations & Interiors',
    project: 'Singapur Town',
    src: '/images/projects/pst2/street-view.png',
  },
  {
    id: 'g6',
    title: 'Praneeta Meridian — Contemporary Living Room',
    subtitle: 'Kondakal Extension · Interior Render',
    category: 'Elevations & Interiors',
    project: 'Praneeta Meridian',
    src: '/images/projects/meridian/living-room.jpeg',
  },
  {
    id: 'g7',
    title: 'Amity Villas — Site Construction Update',
    subtitle: 'Mokila · October 2026 Progress',
    category: 'Site Progress',
    project: 'Amity Villas',
    src: '/images/gallery/site-amity-oct-2026.webp',
  },
  {
    id: 'g8',
    title: 'Amity Villas — Villa Structure & Road Works',
    subtitle: 'Mokila · October 2026 Progress',
    category: 'Site Progress',
    project: 'Amity Villas',
    src: '/images/gallery/site-amity-oct-2026-2.webp',
  },
  {
    id: 'g9',
    title: 'The Patio Villas — Site Progress Update',
    subtitle: 'Mokila · October 2026 Progress',
    category: 'Site Progress',
    project: 'The Patio Villas',
    src: '/images/gallery/site-patio-oct-2026.jpeg',
  },
  {
    id: 'g10',
    title: 'The Patio Villas — Courtyard Construction',
    subtitle: 'Mokila · October 2026 Progress',
    category: 'Site Progress',
    project: 'The Patio Villas',
    src: '/images/gallery/site-patio-oct-2026-2.jpeg',
  },
  {
    id: 'g11',
    title: 'The Santorini Villas — Site Progress Update',
    subtitle: 'Mokila · October 2026 Progress',
    category: 'Site Progress',
    project: 'Santorini Villas',
    src: '/images/gallery/site-santorini-oct-2026.jpeg',
  },
  {
    id: 'g12',
    title: 'The Santorini Villas — Facade & Infrastructure',
    subtitle: 'Mokila · October 2026 Progress',
    category: 'Site Progress',
    project: 'Santorini Villas',
    src: '/images/gallery/site-santorini-oct-2026-2.jpeg',
  },
  {
    id: 'g13',
    title: 'NAREDCO Property Expo — Hyderabad 2026',
    subtitle: 'Flagship Villa Showcase · Hyderabad',
    category: 'Events & Expos',
    src: '/images/gallery/expo-naredco-2026-1.jpeg',
  },
  {
    id: 'g14',
    title: 'NAREDCO Property Expo — Hyderabad 2025',
    subtitle: 'Homebuyer & Investor Pavilion',
    category: 'Events & Expos',
    src: '/images/gallery/expo-naredco-2025-1.jpg',
  },
  {
    id: 'g15',
    title: 'NRI ONE EXPO — USA Showcase',
    subtitle: 'Connecting Global Telugu & NRI Buyers',
    category: 'Events & Expos',
    src: '/images/gallery/expo-nri-usa-1.jpeg',
  },
  {
    id: 'g16',
    title: 'NRI ONE EXPO — Dubai Showcase',
    subtitle: 'International Real Estate Exhibition',
    category: 'Events & Expos',
    src: '/images/gallery/expo-nri-dubai-1.jpeg',
  },
  {
    id: 'g17',
    title: 'NRI ONE EXPO — Singapore 2026',
    subtitle: 'West Hyderabad Investment Opportunities',
    category: 'Events & Expos',
    src: '/images/gallery/expo-nri-singapore-2026-1.jpeg',
  },
  {
    id: 'g18',
    title: 'NRI ONE EXPO — Singapore 2023',
    subtitle: 'Praneeta Developers Global Outreach',
    category: 'Events & Expos',
    src: '/images/gallery/expo-nri-singapore-2023-1.jpeg',
  },
];

// 6-card editorial bento pattern: [7,5], [4,8], [6,6] — zero orphan gaps
const BENTO_CLASSES = [
  'gal-card--span7',
  'gal-card--span5',
  'gal-card--span4',
  'gal-card--span8',
  'gal-card--span6',
  'gal-card--span6',
] as const;

export function GalleryShowcaseSection() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [activeProject, setActiveProject] = useState<GalleryProject>('All Projects');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = GALLERY_ENTRIES.filter((item) => {
    const catMatch = activeCategory === 'All' || item.category === activeCategory;
    const projMatch = activeProject === 'All Projects' || item.project === activeProject;
    return catMatch && projMatch;
  });

  const getCount = (cat: GalleryCategory) =>
    GALLERY_ENTRIES.filter((i) => {
      const catMatch = cat === 'All' || i.category === cat;
      const projMatch = activeProject === 'All Projects' || i.project === activeProject;
      return catMatch && projMatch;
    }).length;

  const getProjectCount = (proj: GalleryProject) =>
    GALLERY_ENTRIES.filter((i) => {
      const catMatch = activeCategory === 'All' || i.category === activeCategory;
      const projMatch = proj === 'All Projects' || i.project === proj;
      return catMatch && projMatch;
    }).length;

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % filtered.length));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev - 1 + filtered.length) % filtered.length
        );
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex, filtered.length]);

  return (
    <section className="gal-section">
      <div className="gal-container">
        {/* ── Editorial Header & Filter Pills ── */}
        <div className="gal-header">
          <div className="gal-header__left">
            <div className="gal-pill">
              <span className="gal-pill__dot">
                <img src="/images/6ac4a1873c3838069f5e8736_icon.svg" alt="" />
              </span>
              <span className="gal-pill__text">Visual Archive</span>
            </div>
            <h2 className="gal-title">Spaces Built Around Light &amp; Nature</h2>
            <p className="gal-subtitle">
              Architectural elevations, live site construction milestones, and international NRI expos across Mokila, Kondakal &amp; Shankarpally.
            </p>
          </div>

          <div className="gal-filters" role="tablist" aria-label="Filter gallery by category">
            {CATEGORIES.map((category) => {
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  className={`gal-filter-btn${active ? ' is-active' : ''}`}
                  onClick={() => {
                    setActiveCategory(category);
                    setLightboxIndex(null);
                  }}
                >
                  <span>{category}</span>
                  <span className="gal-filter-count">{getCount(category)}</span>
                </button>
              );
            })}
          </div>

          <div className="gal-filters gal-filters--projects" role="tablist" aria-label="Filter gallery by project">
            {PROJECTS.map((project) => {
              const active = activeProject === project;
              return (
                <button
                  key={project}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  className={`gal-filter-btn gal-filter-btn--sub${active ? ' is-active' : ''}`}
                  onClick={() => {
                    setActiveProject(project);
                    setLightboxIndex(null);
                  }}
                >
                  <span>{project}</span>
                  <span className="gal-filter-count">{getProjectCount(project)}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 12-Column Architectural Bento Grid ── */}
        {filtered.length > 0 ? (
          <div className="gal-bento">
            {filtered.map((item, idx) => {
              const spanClass = BENTO_CLASSES[idx % BENTO_CLASSES.length];
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`gal-card ${spanClass}`}
                  onClick={() => setLightboxIndex(idx)}
                >
                  <img src={item.src} alt={item.title} loading="lazy" className="gal-card__img" />
                  <div className="gal-card__scrim" />
                  <div className="gal-card__top">
                    <span className="gal-card__tag">
                      {item.project ? `${item.project} · ${item.category}` : item.category}
                    </span>
                    <span className="gal-card__zoom" aria-hidden="true">
                      <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M10 2H14V6M6 14H2V10M14 2L9.5 6.5M2 14L6.5 9.5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="gal-card__bottom">
                    <h3 className="gal-card__title">{item.title}</h3>
                    <p className="gal-card__sub">{item.subtitle}</p>
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="gal-empty" role="status">
            <p className="gal-empty__text">
              No media items match <strong>{activeProject}</strong> under <strong>{activeCategory}</strong>.
            </p>
            <button
              type="button"
              className="gal-filter-btn is-active"
              onClick={() => {
                setActiveCategory('All');
                setActiveProject('All Projects');
              }}
            >
              Show All Media
            </button>
          </div>
        )}

        {/* ── Dark-Forest CTA Band ── */}
        <div className="gal-cta">
          <div className="gal-cta__copy">
            <span className="gal-cta__kicker">Guided Site Tours</span>
            <h3 className="gal-cta__title">Experience Mokila &amp; Shankarpally in Person</h3>
            <p className="gal-cta__text">
              Walk through our active gated villa &amp; apartment sites—Amity, The Patio, The Santorini, Meridian, and PST-2—with our engineering team.
            </p>
          </div>
          <Link to="/contact-us" className="gal-cta__btn">
            <span>Book a Site Visit</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* ── Lightbox Modal ── */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          className="gal-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={filtered[lightboxIndex].title}
          onClick={() => setLightboxIndex(null)}
        >
          <div className="gal-lightbox__dialog" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="gal-lightbox__close"
              aria-label="Close gallery viewer"
              onClick={() => setLightboxIndex(null)}
            >
              ×
            </button>

            <div className="gal-lightbox__stage">
              {filtered.length > 1 && (
                <button
                  type="button"
                  className="gal-lightbox__nav gal-lightbox__nav--prev"
                  aria-label="Previous image"
                  onClick={() =>
                    setLightboxIndex((prev) =>
                      prev === null ? null : (prev - 1 + filtered.length) % filtered.length
                    )
                  }
                >
                  ‹
                </button>
              )}

              <img
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].title}
                className="gal-lightbox__img"
              />

              {filtered.length > 1 && (
                <button
                  type="button"
                  className="gal-lightbox__nav gal-lightbox__nav--next"
                  aria-label="Next image"
                  onClick={() =>
                    setLightboxIndex((prev) =>
                      prev === null ? null : (prev + 1) % filtered.length
                    )
                  }
                >
                  ›
                </button>
              )}
            </div>

            <div className="gal-lightbox__caption">
              <div>
                <p className="gal-lightbox__title">{filtered[lightboxIndex].title}</p>
                <p className="gal-lightbox__sub">{filtered[lightboxIndex].subtitle}</p>
              </div>
              <span className="gal-lightbox__counter">
                {lightboxIndex + 1} / {filtered.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
