import { useState } from 'react';
import { Link } from 'react-router-dom';
import './faq-section.css';

interface FaqSectionProps {
  variant?: 'home' | 'about';
  ptZero?: boolean;
}

const FAQ_ITEMS = [
  {
    q: 'Are all Praneeta Developers projects TG-RERA approved?',
    a: 'Yes. Every project is fully registered with TG-RERA before public launch. Individual RERA registration numbers are displayed on each project page and documentation.',
  },
  {
    q: 'Which major banks are approved for home loans across your projects?',
    a: 'Our projects are pre-approved by major financial institutions including HDFC Bank, ICICI Bank, State Bank of India (SBI), Axis Bank, and Bajaj Housing Finance.',
  },
  {
    q: 'What are the typical possession timelines for ongoing villa communities?',
    a: 'Delivery schedules range from December 2027 through 2029 depending on the specific phase and project selected. Detailed timelines are codified in buyer agreements.',
  },
  {
    q: 'What road infrastructure supports the upcoming Mokila/Kardanur development?',
    a: 'The layout features a 40 ft spinal master road and 30 ft internal access roads designed to comfortably accommodate G+2 residential approvals and underground utility infrastructure.',
  },
];

export function FaqSection({ variant = 'home', ptZero = false }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const imgSizes =
    variant === 'home'
      ? '(max-width: 991px) 100vw, 380px'
      : '(max-width: 767px) 100vw, 380px';

  return (
    <section
      className={`section faq-sec${ptZero ? ' faq-sec--pt-zero' : ''}`}
      aria-labelledby="faq-sec-heading"
    >
      <div className="w-layout-blockcontainer container w-container">
        <div className="faq-sec__header">
          <div className="faq-sec__pill">
            <span className="faq-sec__pill-icon" aria-hidden="true">
              <img
                src="/images/6ac4a1873c3838069f5e8736_icon.svg"
                loading="lazy"
                alt=""
              />
            </span>
            <span className="faq-sec__pill-text">FAQs</span>
          </div>
          <h2 id="faq-sec-heading" className="faq-sec__title">
            Questions Before You Make Your Move?
          </h2>
          <p className="faq-sec__lead">
            Clear answers on TG-RERA approvals, home loans, handover timelines, and infrastructure across our communities.
          </p>
        </div>

        <div className="faq-sec__grid">
          <aside className="faq-sec__aside">
            <div className="faq-sec__photo-wrap">
              <img
                className="faq-sec__photo"
                src="/images/6ad5eeda8b091cbd04a1cc1f_Modern%20Home%20Consultation%20Meeting.avif"
                alt="Advisor consulting family about Praneeta villas"
                sizes={imgSizes}
                loading="lazy"
                srcSet="/images/6ad5eeda8b091cbd04a1cc1f_Modern%20Home%20Consultation%20Meeting-p-500.avif 500w, /images/6ad5eeda8b091cbd04a1cc1f_Modern%20Home%20Consultation%20Meeting-p-800.avif 800w, /images/6ad5eeda8b091cbd04a1cc1f_Modern%20Home%20Consultation%20Meeting-p-1080.avif 1080w, /images/6ad5eeda8b091cbd04a1cc1f_Modern%20Home%20Consultation%20Meeting.avif 1624w"
              />
            </div>
            <div className="faq-sec__aside-body">
              <h3 className="faq-sec__aside-title">Speak with Our Advisory Team</h3>
              <p className="faq-sec__aside-text">
                We&apos;ve heard it all. Connect with our Mokila desk for floor plans, RERA dockets, or a guided site tour.
              </p>
              <Link to="/contact-us" className="faq-sec__cta">
                <span>Ask your Question</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path
                    d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </aside>

          <div className="faq-sec__list">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={item.q} className={`faq-sec__card${isOpen ? ' is-open' : ''}`}>
                  <button
                    type="button"
                    className="faq-sec__trigger"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex((prev) => (prev === idx ? null : idx))}
                  >
                    <span className="faq-sec__q-wrap">
                      <span className="faq-sec__num">{String(idx + 1).padStart(2, '0')}</span>
                      <span className="faq-sec__q">{item.q}</span>
                    </span>
                    <span className="faq-sec__toggle-icon" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M2.5 7H11.5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                        {!isOpen && (
                          <path
                            d="M7 2.5V11.5"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                        )}
                      </svg>
                    </span>
                  </button>
                  <div className="faq-sec__panel">
                    <div className="faq-sec__panel-inner">
                      <p className="faq-sec__answer">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
