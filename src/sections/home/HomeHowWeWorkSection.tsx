import './home-howwework.css';

const WORK_STEPS = [
  {
    title: '1. Explore Communities',
    text: 'Browse our Mokila and Kokapet villa, apartment, and plotted communities tailored to your family budget and timeline.',
  },
  {
    title: '2. Guided Site Visit',
    text: 'Tour our completed Amity & The Patio communities and walk the Sovereign Villas site at 6-109, Mokila Village.',
  },
  {
    title: '3. RERA & Legal Review',
    text: 'Inspect HMDA layout approvals, TG-RERA records, and bank APF dockets with full transparency and zero hidden charges.',
  },
  {
    title: '4. Allotment & Handover',
    text: 'Move through milestone-linked payments, interior personalization, and on-time key handover with our dedicated team.',
  },
];

export function HomeHowWeWorkSection() {
  return (
    <section className="section subscribe">
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
              <div className="work-wrap">
                {WORK_STEPS.map((step) => (
                  <div
                    key={step.title}
                    data-hover="false"
                    data-delay="0"
                    className="work-dropdown w-dropdown"
                  >
                    <div className="work-toggle w-dropdown-toggle">
                      <p className="work-title">{step.title}</p>
                      <div className="work-icon-box">
                        <img
                          src="/images/69e9eb3ebad0308668113a2e_Arrow%204.svg"
                          loading="lazy"
                          alt=""
                          className="work-icon"
                        />
                      </div>
                    </div>
                    <nav className="work-nav w-dropdown-list">
                      <p className="work-text">{step.text}</p>
                    </nav>
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
              src="/images/how-we-work-villa.jpg"
              loading="lazy"
              data-parallax="target"
              alt="Pranitha Luxury Villa in Mokila"
              className="parallax-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
