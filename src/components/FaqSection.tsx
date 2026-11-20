import { useState } from 'react';
import { Link } from 'react-router-dom';
import './faq-section.css';

interface FaqSectionProps {
  variant?: 'home' | 'about';
  ptZero?: boolean;
}

const FAQ_ITEMS = [
  {
    q: "Where is Pranitha's Lakshmi Nivas located and how well is Kardanur connected?",
    a: "Pranitha's Lakshmi Nivas is located in Kardanur, West Hyderabad—positioned right along the fast-growing Kardanur, Kollur, and Mokila belt with quick access to ORR Exit 2, Kokapet Neopolis, and the Financial District.",
  },
  {
    q: "What are the key highlights and road infrastructure of Pranitha's Lakshmi Nivas?",
    a: "Pranitha's Lakshmi Nivas is a master-planned G+2 luxury gated villa community featuring a 40 ft spinal master road, 30 ft internal residential avenues, underground utilities, landscaped green corridors, and a grand residents clubhouse.",
  },
  {
    q: "Is Pranitha's Lakshmi Nivas HMDA and TG-RERA compliant with home loan options?",
    a: "Yes. Pranitha's Lakshmi Nivas follows strict HMDA and TG-RERA compliance standards with clear documentation, and buyers can avail home loans through leading banks including HDFC Bank, ICICI Bank, SBI, Axis Bank, and Bajaj Housing Finance.",
  },
  {
    q: "Why is Kardanur considered a high-potential villa destination near Kollur and Mokila?",
    a: "Kardanur offers low-density greenery and peaceful suburban living while sitting minutes away from Kollur ORR Exit 2, Mokila's social infrastructure, international schools, and West Hyderabad's major IT corridors—making Pranitha's Lakshmi Nivas ideal for both end-use and long-term appreciation.",
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
            Clear answers on Kardanur connectivity, road infrastructure, approvals, and home loans for Pranitha&apos;s Lakshmi Nivas.
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
                We&apos;ve heard it all. Connect with our Kardanur &amp; Mokila advisory desk for Lakshmi Nivas floor plans, approvals, or a guided site tour.
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
