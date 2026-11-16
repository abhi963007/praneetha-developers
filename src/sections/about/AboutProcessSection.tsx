import './about-process-redesign.css';

const PROCESS_STEPS = [
  {
    num: '01',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: 'Visit Mokila Site',
    text: 'Walk through our completed Amity & The Patio communities and review Sovereign Villas blueprints on site.',
  },
  {
    num: '02',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Explore Communities',
    text: 'Compare our Mokila–Shankarpally villas, Kokapet apartments, and upcoming plots by configuration and budget.',
  },
  {
    num: '03',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 2l-2 2m-1.5 1.5L16 7l-1.5-1.5M19 4l-4 4" />
        <circle cx="8" cy="16" r="5" />
        <path d="M11.5 12.5L19 5" />
        <circle cx="8" cy="16" r="2" fill="currentColor" />
      </svg>
    ),
    title: 'Clear Handover',
    text: 'Verify HMDA & TG-RERA records, complete bank financing, and receive timely key handover with zero surprises.',
  },
];

export function AboutProcessSection() {
  return (
    <section className="section abt-process">
      <div className="abt-process__inner">

        {/* ── Header ── */}
        <div className="abt-process__header">
          <div className="abt-process__pill">
            <div className="abt-process__pill-dot">
              <img src="/images/6ac4a1873c3838069f5e8736_icon.svg" alt="" />
            </div>
            <p className="abt-process__pill-text">Our Process</p>
          </div>
          <h2 className="abt-process__heading">
            A Simpler Way to Move Forward.
          </h2>
          <p className="abt-process__sub">
            Three transparent steps from first visit to final key — no hidden charges, no surprises.
          </p>
        </div>

        {/* ── Step Cards ── */}
        <div className="abt-process__steps">
          {PROCESS_STEPS.map((step) => (
            <div key={step.num} className="abt-process__card">
              <div className="abt-process__card-top">
                <span className="abt-process__step-badge">Step {step.num}</span>
                <div className="abt-process__icon-ring">
                  {step.icon}
                </div>
              </div>

              <div className="abt-process__card-body">
                <h3 className="abt-process__card-title">{step.title}</h3>
                <p className="abt-process__card-text">{step.text}</p>
              </div>

              <div className="abt-process__card-footer">
                <span className="abt-process__card-link">Explore Step</span>
                <div className="abt-process__arrow-circle">
                  <svg viewBox="0 0 14 14" aria-hidden="true">
                    <path d="M1 7h12M8 2l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
