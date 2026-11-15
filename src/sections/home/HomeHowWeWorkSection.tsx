import './home-howwework.css';

const WORK_STEPS = [
  {
    num: '01',
    title: 'Explore Communities',
    text: 'Browse our Mokila and Kokapet villa, apartment, and plotted communities tailored to your family budget and timeline.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Guided Site Visit',
    text: 'Tour our completed Amity & The Patio communities and walk the Sovereign Villas site at 6-109, Mokila Village.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'RERA & Legal Review',
    text: 'Inspect HMDA layout approvals, TG-RERA records, and bank APF dockets with full transparency and zero hidden charges.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <polyline points="10 9 9 9 8 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Allotment & Handover',
    text: 'Move through milestone-linked payments, interior personalization, and on-time key handover with our dedicated team.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
        <path d="M21 10H3M16 2l5 8-5 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export function HomeHowWeWorkSection() {
  return (
    <section className="section subscribe how-we-work-section">
      <div className="sub-wrapper">
        <div className="w-layout-blockcontainer container w-container">
          <div className="w-layout-grid work-grid">
            <div id="w-node-cc485aa2-3f3c-4a88-559e-d06b00089a16-ade4ee77" className="work-content">
              <div className="section-title-box work">
                <div className="subtitle-box">
                  <div className="subtitle-icon">
                    <img
                      src="/images/6ac4a1873c3838069f5e8736_icon.svg"
                      loading="lazy"
                      alt=""
                      className="subtitle-icon-img"
                    />
                  </div>
                  <p className="section-subtitle">How We Work</p>
                </div>
                <h2 className="section-title">Find Your Next Home in Four Steps.</h2>
              </div>
              <div className="hww-steps-grid">
                {WORK_STEPS.map((step, idx) => (
                  <div key={step.num} className="hww-step-card">
                    <div className="hww-step-header">
                      <span className="hww-step-num">{step.num}</span>
                      <span className="hww-step-icon">{step.icon}</span>
                      {idx < WORK_STEPS.length - 1 && (
                        <div className="hww-connector" />
                      )}
                    </div>
                    <h3 className="hww-step-title">{step.title}</h3>
                    <p className="hww-step-text">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="empty-div" />
          </div>
        </div>
        <div className="work-image-box">
          <div data-parallax="trigger" className="parallax-wrapper">
            <img
              src="/images/6ad5d62409c44abef30fded5_Mediterranean%20Mansion.avif"
              loading="lazy"
              data-parallax="target"
              alt="Mediterranean Mansion"
              className="parallax-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
