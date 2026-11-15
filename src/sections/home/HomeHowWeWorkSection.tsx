const WORK_STEPS = [
  {
    title: '1. Browse & Shortlist',
    text: 'Explore curated listings and shortlist the properties that match your priorities, budget, and lifestyle.',
  },
  {
    title: '2. Schedule a Visit',
    text: 'Choose a convenient time to tour your shortlisted properties in person or through a virtual walkthrough.',
  },
  {
    title: '3. Make an Offer',
    text: 'Review the details, discuss your options, and move forward with a confident offer supported by our team.',
  },
  {
    title: '4. Close the Deal',
    text: "We'll help coordinate the final steps, paperwork, and communication so you can move forward with confidence.",
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
