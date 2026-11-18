import { useEffect, useState } from 'react';
import { PROPERTIES_DATA, PropertyCard } from '../properties/PropertiesListingSection';
import './home-properties.css';

export function HomePropertiesSection() {
  const [slideIdx, setSlideIdx] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const syncCardsPerView = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 992) setCardsPerView(2);
      else setCardsPerView(3);
    };
    syncCardsPerView();
    window.addEventListener('resize', syncCardsPerView);
    return () => window.removeEventListener('resize', syncCardsPerView);
  }, []);

  const maxIdx = Math.max(0, PROPERTIES_DATA.length - cardsPerView);
  const safeIdx = Math.min(slideIdx, maxIdx);

  return (
    <section id="Properties" className="section home-properties-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="section-title-box center">
          <div className="subtitle-box">
            <div className="subtitle-icon">
              <img
                src="/images/6ac4a1873c3838069f5e8736_icon.svg"
                loading="lazy"
                alt=""
                className="subtitle-icon-img"
              />
            </div>
            <p className="section-subtitle">Our Projects</p>
          </div>
          <h2 className="section-title">
            Luxury Villas &amp; Homes in<span className="sectitle-br"> </span>West Hyderabad
          </h2>
        </div>

        <div className="home-projects-slider" aria-label="Featured projects carousel">
          <button
            type="button"
            className="home-projects-slider__arrow"
            aria-label="Previous projects"
            disabled={safeIdx === 0}
            onClick={() => setSlideIdx((i) => Math.max(0, i - 1))}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path
                d="M11.25 13.5L6.75 9L11.25 4.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="home-projects-slider__viewport">
            <div
              role="list"
              className="home-projects-slider__track"
              style={{
                transform: `translate3d(-${(safeIdx * 100) / cardsPerView}%, 0, 0)`,
              }}
            >
              {PROPERTIES_DATA.map((property) => (
                <div
                  key={property.slug}
                  className="home-projects-slider__slide"
                  style={{ flex: `0 0 ${100 / cardsPerView}%` }}
                >
                  <PropertyCard property={property} variant="home" />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="home-projects-slider__arrow"
            aria-label="Next projects"
            disabled={safeIdx >= maxIdx}
            onClick={() => setSlideIdx((i) => Math.min(maxIdx, i + 1))}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path
                d="M6.75 4.5L11.25 9L6.75 13.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
