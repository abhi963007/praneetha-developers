import './home-why-choose.css';

const STRATEGIC_PILLARS = [
  {
    num: '01',
    title: 'Strategic Value Generation',
    text: 'Prime land acquisition across West Hyderabad’s highest-appreciation corridor spanning Kardanur, Kollur, and Mokila.',
  },
  {
    num: '02',
    title: 'Transparent Value & Affordability',
    text: 'Clear, competitive pricing structures built with full cost clarity and zero hidden fees or surprise clauses.',
  },
  {
    num: '03',
    title: 'Uncompromising Engineering Quality',
    text: 'RERA-compliant structural engineering, trusted material brands, and stage-wise quality supervision throughout execution.',
  },
  {
    num: '04',
    title: 'Modern Suburban Living',
    text: 'Low-density G+2 villa master plans with 30–40 ft internal avenues, grand clubhouses, and lush green landscapes.',
  },
];

const CONSOLIDATED_VALUES = [
  {
    title: 'Customer-Centric Approach',
    text: 'Personalized guidance from first site walk through documentation and key handover.',
  },
  {
    title: 'Innovative Architectural Design',
    text: 'Spacious East & West Vaastu-compliant courtyard villas and contemporary high-rise residences.',
  },
  {
    title: 'Superior Construction Standards',
    text: 'RCC framed structures, red brick masonry, Teak wood doors, Hindware, Legrand & Finolex finishes.',
  },
  {
    title: 'Transparent Communication',
    text: 'Verified HMDA & TG-RERA filings paired with regular milestone site progress updates.',
  },
  {
    title: 'Timely Delivery Track Record',
    text: 'Proven handovers across Singapur Town Phase I alongside scheduled 2027–2029 project completions.',
  },
  {
    title: 'Prime High-Growth Corridors',
    text: '10–25 minute connectivity across Kardanur, Kollur, Mokila, Kokapet Neopolis, and the Financial District.',
  },
];

export function HomeWhyChooseSection() {
  return (
    <section className="section home-why-section" aria-labelledby="home-why-heading">
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
            <p className="section-subtitle">Why Choose Us</p>
          </div>
          <h2 id="home-why-heading" className="section-title">
            Why Choose Praneeta Developers
          </h2>
          <p className="home-why-lead">
            Built on four core pillars that pair long-term corridor growth with everyday livability across West Hyderabad.
          </p>
        </div>

        <div className="home-pillars-grid">
          {STRATEGIC_PILLARS.map((pillar) => (
            <article key={pillar.num} className="home-pillar-card">
              <div className="home-pillar-top">
                <span className="home-pillar-num">{pillar.num}</span>
                <span className="home-pillar-line" aria-hidden="true" />
              </div>
              <h3 className="home-pillar-title">{pillar.title}</h3>
              <p className="home-pillar-text">{pillar.text}</p>
            </article>
          ))}
        </div>

        <div className="home-values-grid" aria-label="Core Values">
          {CONSOLIDATED_VALUES.map((item) => (
            <div key={item.title} className="home-value-card">
              <span className="home-value-check" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3.5 8.5L6.5 11.5L12.5 4.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div className="home-value-body">
                <h4 className="home-value-title">{item.title}</h4>
                <p className="home-value-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
