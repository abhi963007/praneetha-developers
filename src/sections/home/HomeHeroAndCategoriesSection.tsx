import { Link } from 'react-router-dom';
import { ScrollHero } from '../../components/ScrollHero';
import './home-portfolio.css';

const PRIMARY_CATEGORIES = [
  {
    to: '/category/villas-ongoing',
    title: 'Villas — Ongoing',
    subtitle: 'Sovereign & Santorini',
    tag: 'Ongoing',
    image: '/images/portfolio-villas-ongoing.jpg',
    srcSet: '/images/portfolio-villas-ongoing.jpg 1200w',
  },
  {
    to: '/category/villas-completed',
    title: 'Villas — Completed',
    subtitle: 'Amity & The Patio',
    tag: 'Delivered',
    image: '/images/portfolio-villas-completed.jpg',
    srcSet: '/images/portfolio-villas-completed.jpg 1200w',
  },
  {
    to: '/category/apartments',
    title: 'Apartments',
    subtitle: 'Meridian Heights',
    tag: 'Residential',
    image: '/images/portfolio-apartments.jpg',
    srcSet: '/images/portfolio-apartments.jpg 1200w',
  },
  {
    to: '/category/plots-coming-soon',
    title: 'Plots — Coming Soon',
    subtitle: 'Singapur Town Phase II',
    tag: 'Upcoming',
    image: '/images/portfolio-plots.jpg',
    srcSet: '/images/portfolio-plots.jpg 1152w',
  },
];

export function HomeHeroAndCategoriesSection() {
  return (
    <div className="section-wrap">
      <ScrollHero>
        <div className="hero-end-wrap">
          <div className="hero-end-card">
            <div className="hero-end-eyebrow">
              <span className="hero-end-dot" aria-hidden="true" />
              <span>Mokila – Shankarpally · Hyderabad</span>
            </div>
            <h1 className="hero-end-title">Building Dreams, Creating Homes.</h1>
            <p className="hero-end-desc">
              4 &amp; 5 BHK Gated Villa &amp; Luxury Apartment Communities across Mokila–Shankarpally.
            </p>
            <div className="hero-end-actions">
              <a
                href="#Properties"
                className="hero-end-btn"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('Properties')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Explore Now</span>
                <span className="hero-end-btn-circle" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
              <Link to="/contact-us" className="hero-end-secondary">
                Schedule Visit
              </Link>
            </div>
          </div>
        </div>
      </ScrollHero>
      <section className="section cat">
        <div className="hero-icon-box">
          <img
            src="/images/6ac4da41e6cfc9c997f6729e_svgviewer-output.svg"
            loading="lazy"
            alt=""
            className="hero-icon"
          />
          <img
            src="/images/6ac4da41e6cfc9c997f6729e_svgviewer-output.svg"
            loading="lazy"
            alt=""
            className="hero-icon two"
          />
        </div>
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
              <p className="section-subtitle">Our Portfolio</p>
            </div>
            <h2 className="section-title">Communities Crafted for Hyderabad</h2>
          </div>
          <div className="w-dyn-list">
            <div role="list" className="portfolio-cat-grid w-dyn-items">
              {PRIMARY_CATEGORIES.map((cat) => (
                <div key={cat.to} role="listitem" className="portfolio-card-item w-dyn-item">
                  <Link to={cat.to} className="portfolio-cat-card w-inline-block">
                    <div className="portfolio-cat-img-box">
                      <span className="portfolio-cat-badge">{cat.tag}</span>
                      <img
                        src={cat.image}
                        loading="lazy"
                        alt={cat.title}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        srcSet={cat.srcSet}
                        className="portfolio-cat-img"
                      />
                      <div className="portfolio-cat-img-overlay" />
                    </div>
                    <div className="portfolio-cat-content">
                      <div className="portfolio-cat-info">
                        <span className="portfolio-cat-subtitle">{cat.subtitle}</span>
                        <h3 className="portfolio-cat-title">{cat.title}</h3>
                      </div>
                      <div className="portfolio-cat-action" aria-label="Explore">
                        <svg
                          className="portfolio-cat-arrow-svg"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.5 11.5L11.5 2.5M11.5 2.5H4.5M11.5 2.5V9.5"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
