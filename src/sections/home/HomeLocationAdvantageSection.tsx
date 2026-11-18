import './home-location.css';

interface CommuteItem {
  destination: string;
  distance: string;
  commute: string;
  route: string;
}

const IT_CORRIDOR_COMMUTES: CommuteItem[] = [
  {
    destination: 'Financial District',
    distance: '18 – 20 km',
    commute: '25 – 30 Mins',
    route: 'via Shankarpally',
  },
  {
    destination: 'Neopolis (Kokapet)',
    distance: '16 – 18 km',
    commute: '20 – 25 Mins',
    route: 'via Trunk Road',
  },
  {
    destination: 'Kokapet SEZ',
    distance: '17 – 19 km',
    commute: '22 – 28 Mins',
    route: 'ORR Exit 2 Corridor',
  },
  {
    destination: 'HITEC City',
    distance: '24 – 26 km',
    commute: '35 – 40 Mins',
    route: 'Outer Ring Road Access',
  },
  {
    destination: 'Kondapur',
    distance: '22 – 25 km',
    commute: '35 Mins',
    route: 'Shankarpally – Gopanpally',
  },
  {
    destination: 'Madhapur',
    distance: '25 – 27 km',
    commute: '40 Mins',
    route: 'Direct IT Corridor Drive',
  },
];

export function HomeLocationAdvantageSection() {
  return (
    <section className="section home-location-section" aria-labelledby="home-location-heading">
      <div className="w-layout-blockcontainer container w-container">
        <div className="home-loc-header">
          <div className="home-loc-title-col">
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
              Mokila – Shankarpally Growth Belt
            </h2>
          </div>
          <p className="home-loc-lead">
            Effortless daily commutes for IT professionals and families connecting low-density villa living with West Hyderabad’s financial and technology hubs.
          </p>
        </div>

        <div className="home-loc-matrix" role="list" aria-label="West Hyderabad IT Hub Commutes">
          {IT_CORRIDOR_COMMUTES.map((hub) => (
            <article key={hub.destination} role="listitem" className="home-loc-card">
              <div className="home-loc-card-top">
                <h3 className="home-loc-dest">{hub.destination}</h3>
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
