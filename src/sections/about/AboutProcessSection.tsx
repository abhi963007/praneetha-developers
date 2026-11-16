import { Link } from 'react-router-dom';
import './about-process-redesign.css';

interface ProcessStep {
  num: string;
  badge: string;
  title: string;
  text: string;
  feature: string;
  actionText: string;
  actionLink: string;
  icon: JSX.Element;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    num: '01',
    badge: 'Step 01',
    title: 'Visit Mokila Site',
    text: 'Walk through our completed Amity & The Patio communities and review Sovereign Villas blueprints in person at our Mokila lounge.',
    feature: 'Guided Villa Tour & Masterplan',
    actionText: 'Book Site Visit',
    actionLink: '/contact-us',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="abt-process__svg"
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    num: '02',
    badge: 'Step 02',
    title: 'Explore Communities',
    text: 'Compare our Mokila–Shankarpally villas, Kokapet luxury residences, and upcoming plotted developments by configuration and budget.',
    feature: 'Transparent Pricing & Options',
    actionText: 'Explore Projects',
    actionLink: '/properties',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="abt-process__svg"
      >
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 10h1v2H9z" />
        <path d="M14 10h1v2h-1z" />
        <path d="M10 21v-5h4v5" />
      </svg>
    ),
  },
  {
    num: '03',
    badge: 'Step 03',
    title: 'Clear Handover',
    text: 'Verify HMDA & TG-RERA records, finalize bank financing with preferred lenders, and receive timely key handover with zero surprises.',
    feature: 'HMDA & TG-RERA Approved',
    actionText: 'Handover Process',
    actionLink: '/contact-us',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="abt-process__svg"
      >
        <path d="m21 2-2 2m-1.5 1.5L16 7l-1.5-1.5M19 4l-4 4" />
        <path d="m14 9-6 6" />
        <circle cx="6" cy="17" r="3" />
      </svg>
    ),
  },
];

export function AboutProcessSection() {
  return (
    <section className="section abt-process">
      <div className="abt-process__inner">

        {/* ── Prominent Luxury Split Header ── */}
        <div className="abt-process__header">
          <div className="abt-process__header-left">
            <div className="abt-process__pill">
              <div className="abt-process__pill-dot">
                <img src="/images/6ac4a1873c3838069f5e8736_icon.svg" alt="" />
              </div>
              <p className="abt-process__pill-text">Our Process</p>
            </div>
            <h2 className="abt-process__heading">
              A Simpler Way to Move Forward.
            </h2>
          </div>

          <div className="abt-process__header-right">
            <div className="abt-process__highlight-card">
              <div className="abt-process__highlight-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2c3a2e"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>
              <div className="abt-process__highlight-content">
                <span className="abt-process__highlight-tag">Transparency Guarantee</span>
                <p className="abt-process__highlight-text">
                  Three transparent steps from first visit to final key — zero hidden charges, no surprises.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Step Journey Track ── */}
        <div className="abt-process__progress-line" aria-hidden="true">
          <div className="abt-process__progress-node">
            <span className="abt-process__node-num">01</span>
            <span className="abt-process__node-label">First Visit</span>
          </div>
          <div className="abt-process__progress-bar" />
          <div className="abt-process__progress-node">
            <span className="abt-process__node-num">02</span>
            <span className="abt-process__node-label">Community Selection</span>
          </div>
          <div className="abt-process__progress-bar" />
          <div className="abt-process__progress-node">
            <span className="abt-process__node-num">03</span>
            <span className="abt-process__node-label">Key Handover</span>
          </div>
        </div>

        {/* ── Step Cards Grid ── */}
        <div className="abt-process__steps">
          {PROCESS_STEPS.map((step) => (
            <div key={step.num} className="abt-process__card">
              {/* Card Header */}
              <div className="abt-process__card-top">
                <div className="abt-process__step-badge-wrap">
                  <span className="abt-process__step-badge">{step.badge}</span>
                  <span className="abt-process__step-watermark">{step.num}</span>
                </div>
                {/* 100% Crisp, High-Contrast Solid Icon Ring */}
                <div className="abt-process__icon-ring" aria-label={step.title}>
                  {step.icon}
                </div>
              </div>

              {/* Card Body */}
              <div className="abt-process__card-body">
                <h3 className="abt-process__card-title">{step.title}</h3>
                <p className="abt-process__card-text">{step.text}</p>
                <div className="abt-process__feature-chip">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2c3a2e"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{step.feature}</span>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="abt-process__card-footer">
                <Link to={step.actionLink} className="abt-process__card-btn">
                  <span className="abt-process__card-link">{step.actionText}</span>
                  <div className="abt-process__arrow-circle">
                    <svg viewBox="0 0 14 14" aria-hidden="true">
                      <path d="M1 7h12M8 2l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
