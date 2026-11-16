import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './gallery-page.css';

type GalleryCategory = 'All' | 'Villa Exteriors' | 'Interiors & Courtyards' | 'Clubhouse & Amenities' | 'Landscapes';

interface GalleryEntry {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, 'All'>;
  src: string;
  wide?: boolean;
}

const CATEGORIES: GalleryCategory[] = [
  'All',
  'Villa Exteriors',
  'Interiors & Courtyards',
  'Clubhouse & Amenities',
  'Landscapes',
];

const GALLERY_ENTRIES: GalleryEntry[] = [
  {
    id: 'g1',
    title: 'Praneeta Sovereign Villas — Dusk Elevation, Mokila',
    category: 'Villa Exteriors',
    src: '/images/6ad70f6cbf6c8f380548ade8_1.avif',
    wide: true,
  },
  {
    id: 'g2',
    title: 'The Patio — Sunlit Central Courtyard',
    category: 'Interiors & Courtyards',
    src: '/images/6ad70f6d2110973c436530e7_2.avif',
  },
  {
    id: 'g3',
    title: 'Contemporary Triplex Facade & Stone Cladding',
    category: 'Villa Exteriors',
    src: '/images/6ad70f6c7b0fe08ed373b688_3.avif',
  },
  {
    id: 'g4',
    title: 'Private Garden & Timber-Louvered Living Deck',
    category: 'Landscapes',
    src: '/images/6ad70f6d57aa3fae32906ffe_4.avif',
  },
  {
    id: 'g5',
    title: 'Double-Height Foyer & Natural Ventilation Lounge',
    category: 'Interiors & Courtyards',
    src: '/images/6ad70f6d3591600dcf626ac6_5.avif',
  },
  {
    id: 'g6',
    title: 'Clubhouse Poolside Pavilion & Evening Deck',
    category: 'Clubhouse & Amenities',
    src: '/images/6ad70f6f491f17f6faf2b8e4_6.avif',
    wide: true,
  },
  {
    id: 'g7',
    title: 'Avenue Plantation & Pedestrian Boulevards',
    category: 'Landscapes',
    src: '/images/6ad70f71155418fc235fcc8e_7.avif',
  },
  {
    id: 'g8',
    title: 'Mokila Enclave Aerial Masterplan View',
    category: 'Clubhouse & Amenities',
    src: '/video/hero-final.jpg',
  },
];

export function GalleryShowcaseSection() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === 'All'
      ? GALLERY_ENTRIES
      : GALLERY_ENTRIES.filter((item) => item.category === activeCategory);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % filtered.length));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + filtered.length) % filtered.length));
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex, filtered.length]);

  return (
    <section className="gallery-page-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="gallery-page-header">
          <div className="section-title-box">
            <div className="subtitle-box">
              <div className="subtitle-icon-box">
                <img
                  src="/images/6ac73b9bf7b64a6c276227a3_Home%20Icon.svg"
                  loading="lazy"
                  alt=""
                  className="subtitle-icon"
                />
              </div>
              <div className="section-subtitle">Visual Archive</div>
            </div>
            <h2 className="section-title">Spaces Built Around Light &amp; Nature</h2>
          </div>

          <div className="gallery-filter-bar" role="tablist" aria-label="Filter gallery">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                className={`gallery-filter-btn${activeCategory === category ? ' is-active' : ''}`}
                onClick={() => {
                  setActiveCategory(category);
                  setLightboxIndex(null);
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="gallery-masonry-grid">
          {filtered.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              className={`gallery-card${item.wide && activeCategory === 'All' ? ' is-wide' : ''}`}
              onClick={() => setLightboxIndex(idx)}
            >
              <img src={item.src} alt={item.title} loading="lazy" className="gallery-card__img" />
              <div className="gallery-card__overlay">
                <span className="gallery-card__tag">{item.category}</span>
                <h3 className="gallery-card__title">{item.title}</h3>
              </div>
            </button>
          ))}
        </div>

        <div className="gallery-cta-band">
          <div>
            <h3 className="gallery-cta-band__title">Experience Mokila in Person</h3>
            <p className="gallery-cta-band__text">
              Walk through our ready-to-experience model villas, courtyard layouts, and landscaped avenues with our team.
            </p>
          </div>
          <Link to="/contact-us" className="primary-button w-inline-block">
            <div className="primary-button-flex">
              <div className="primary-button-text-wrap">
                <div className="primary-button-text">Book a Site Visit</div>
                <div className="primary-button-text-hover">Book a Site Visit</div>
              </div>
              <div className="primary-button-arrow-wrap">
                <div className="primary-button-arrow-wrapper">
                  <img
                    src="/images/69e723100025a4ae58731b6a_0.svg"
                    loading="lazy"
                    alt=""
                    className="primary-button-arrow"
                  />
                  <img
                    src="/images/69e723100025a4ae58731b6a_0.svg"
                    loading="lazy"
                    alt=""
                    className="primary-button-arrow-hover"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          className="gallery-modal"
          role="dialog"
          aria-modal="true"
          aria-label={filtered[lightboxIndex].title}
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            className="gallery-modal__btn"
            aria-label="Close gallery viewer"
            onClick={() => setLightboxIndex(null)}
          >
            &times;
          </button>
          <button
            type="button"
            className="gallery-modal__nav prev"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
            }}
          >
            &#8249;
          </button>
          <div className="gallery-modal__inner" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].title}
              className="gallery-modal__img"
            />
            <div className="gallery-modal__caption">
              {filtered[lightboxIndex].category} — {filtered[lightboxIndex].title}
            </div>
          </div>
          <button
            type="button"
            className="gallery-modal__nav next"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % filtered.length);
            }}
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  );
}
