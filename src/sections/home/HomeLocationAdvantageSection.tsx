import type { ReactNode } from 'react';
import './home-location.css';

interface CommuteItem {
  destination: string;
  distance: string;
  commute: string;
  route: string;
  icon: ReactNode;
}

const IT_CORRIDOR_COMMUTES: CommuteItem[] = [
  {
    destination: 'Financial District',
    distance: '18 – 20 km',
    commute: '25 – 30 Mins',
    route: 'via Kardanur – Kollur ORR',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V8l7-4 7 4v13" />
        <path d="M9 21v-6h6v6" />
        <path d="M9 10h.01M15 10h.01" />
      </svg>
    ),
  },
  {
    destination: 'Neopolis (Kokapet)',
    distance: '16 – 18 km',
    commute: '20 – 25 Mins',
    route: 'via Trunk Road',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="7" height="13" rx="1" />
        <rect x="13" y="3" width="7" height="18" rx="1" />
        <path d="M7.5 12h.01M7.5 16h.01M16.5 7h.01M16.5 11h.01M16.5 15h.01" />
      </svg>
    ),
  },
  {
    destination: 'Kokapet SEZ',
    distance: '17 – 19 km',
    commute: '22 – 28 Mins',
    route: 'ORR Exit 2 Corridor',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <path d="M2 13h20" />
      </svg>
    ),
  },
  {
    destination: 'HITEC City',
    distance: '24 – 26 km',
    commute: '35 – 40 Mins',
    route: 'Outer Ring Road Access',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a14.5 14.5 0 0 0 0 18 14.5 14.5 0 0 0 0-18" />
      </svg>
    ),
  },
  {
    destination: 'Kondapur',
    distance: '22 – 25 km',
    commute: '35 Mins',
    route: 'via Kollur – Gopanpally',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s-6-5.2-6-10a6 6 0 1 1 12 0c0 4.8-6 10-6 10z" />
        <circle cx="12" cy="11" r="2.2" />
      </svg>
    ),
  },
  {
    destination: 'Madhapur',
    distance: '25 – 27 km',
    commute: '40 Mins',
    route: 'Direct IT Corridor Drive',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19l4-14M20 19l-4-14" />
        <path d="M12 6v3M12 12v3M12 18v2" />
      </svg>
    ),
  },
];

export function HomeLocationAdvantageSection() {
  return (
    <section className="section home-location-section" aria-labelledby="home-location-heading">
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
            <p className="section-subtitle">Location Advantage</p>
          </div>
          <h2 id="home-location-heading" className="section-title">
            Kardanur, Kollur &amp; Mokila Growth Belt
          </h2>
          <p className="home-loc-lead">
            Anchored in Kardanur with effortless access to Kollur and Mokila—connecting low-density villa living with West Hyderabad’s prime financial and technology hubs.
          </p>
        </div>

        <div className="home-loc-matrix" role="list" aria-label="West Hyderabad IT Hub Commutes">
          {IT_CORRIDOR_COMMUTES.map((hub) => (
            <article key={hub.destination} role="listitem" className="home-loc-card">
              <div className="home-loc-card-top">
                <div className="home-loc-title-group">
                  <span className="home-loc-icon-box" aria-hidden="true">
                    {hub.icon}
                  </span>
                  <h3 className="home-loc-dest">{hub.destination}</h3>
                </div>
                <span className="home-loc-distance">{hub.distance}</span>
              </div>

              <div className="home-loc-card-bottom">
                <span className="home-loc-time">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.9" />
                    <path d="M12 7v5l3.2 2" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
                  </svg>
                  {hub.commute}
                </span>
                <span className="home-loc-route">{hub.route}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
