import { useEffect, useState } from 'react';
import './testimonials-redesign.css';

interface TestimonialItem {
  id: string;
  projectTag: string;
  text: string;
  name: string;
  initials: string;
  designation: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'amity-owner',
    projectTag: 'Amity Villas',
    text: 'Walking into an active Praneeta community gave our family total confidence. The structural build quality, calm Mokila greenery, and transparent HMDA & TG-RERA documentation matched every promise.',
    name: 'Raghavendra Rao M.',
    initials: 'RR',
    designation: 'Homeowner · Amity Villas, Mokila',
  },
  {
    id: 'santorini-buyers',
    projectTag: 'The Santorini',
    text: 'We evaluated 3 BHK apartments in Kokapet costing ₹1.9 Cr before visiting The Santorini Villas. Choosing an independent gated villa on our own 222 Sq. Yd plot in Mokila was an effortless upgrade.',
    name: 'Deepika & Karthik V.',
    initials: 'DK',
    designation: 'IT Executives · The Santorini Villas',
  },
  {
    id: 'patio-owner',
    projectTag: 'The Patio',
    text: 'The open courtyard architecture keeps interiors naturally ventilated even through peak summer. Direct leadership access and consistent construction updates made planning our interiors seamless.',
    name: 'Suresh Babu N.',
    initials: 'SB',
    designation: 'Homeowner · The Patio Villas, Mokila',
  },
  {
    id: 'meridian-nri',
    projectTag: 'Praneeta Meridian',
    text: 'Investing from overseas requires trust and clear milestones. Praneeta’s transparent execution, structured bank approvals, and rapid Kardanur–Kollur–Mokila corridor growth gave us complete peace of mind.',
    name: 'Ananya & Siddharth R.',
    initials: 'AS',
    designation: 'NRI Investors · Praneeta Meridian',
  },
  {
    id: 'pst1-family',
    projectTag: 'Singapore Town',
    text: 'Living in our completed villa at Singapore Town Phase 1 has been rewarding in every sense—wide internal avenues, dependable community upkeep, and fast connectivity toward ORR Exit 2 and Financial District.',
    name: 'Venkatramana P.',
    initials: 'VP',
    designation: 'Resident · Singapore Town Phase 1',
  },
  {
    id: 'partner-review',
    projectTag: 'Landowner Partner',
    text: 'Collaborating with Praneeta Developers gave us complete confidence—from approvals and construction execution to sales strategy across Kardanur, Kollur, and Mokila, backed by a delivered track record and transparent governance.',
    name: 'Lakshmi Prasanna K.',
    initials: 'LP',
    designation: 'Development Partner · West Hyderabad',
  },
];

const STAR_INDICES = [0, 1, 2, 3, 4];

export function TestimonialsSection({
  variant = 'home',
}: {
  variant?: 'home' | 'properties';
}) {
  const [pageIdx, setPageIdx] = useState(0);
  const [perPage, setPerPage] = useState(3);

  useEffect(() => {
    const syncPerPage = () => {
      if (window.innerWidth < 640) setPerPage(1);
      else if (window.innerWidth <= 1024) setPerPage(2);
      else setPerPage(3);
    };
    syncPerPage();
    window.addEventListener('resize', syncPerPage);
    return () => window.removeEventListener('resize', syncPerPage);
  }, []);

  const totalPages = Math.ceil(TESTIMONIALS.length / perPage);
  const safePageIdx = Math.min(pageIdx, Math.max(0, totalPages - 1));
  const start = safePageIdx * perPage;
  const visibleItems = TESTIMONIALS.slice(start, start + perPage);

  return (
    <section className="section abt-testimonials" aria-label="Client testimonials">
      <div className="abt-testimonials__inner">
        <div className="abt-testimonials__header">
          <div className="abt-testimonials__title-col">
            <div className="abt-testimonials__pill">
              <div className="abt-testimonials__pill-dot">
                <img src="/images/6ac4a1873c3838069f5e8736_icon.svg" alt="" />
              </div>
              <p className="abt-testimonials__pill-text">Client Stories</p>
            </div>
            <h2 className="abt-testimonials__heading">
              {variant === 'properties'
                ? 'Stories from Satisfied Buyers & Partners'
                : 'Trusted by Homeowners, NRI Investors & Partners'}
            </h2>
            <p className="abt-testimonials__sub">
              Verified voices from IT professionals, families, NRI buyers, and landowner partners across our Kardanur, Kollur, and Mokila communities.
            </p>
          </div>
        </div>

        <div className="abt-testimonials__grid" role="list">
          {visibleItems.map((item) => (
            <article key={item.id} className="abt-testimonials__card" role="listitem">
              <div>
                <div className="abt-testimonials__card-top">
                  <div className="abt-testimonials__stars" aria-label="5 out of 5 stars">
                    {STAR_INDICES.map((i) => (
                      <svg
                        key={i}
                        width="15"
                        height="15"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10 1.5l2.58 5.23 5.77.84-4.17 4.07.98 5.75L10 14.68l-5.16 2.71.98-5.75-4.17-4.07 5.77-.84L10 1.5z" />
                      </svg>
                    ))}
                  </div>
                  <span className="abt-testimonials__tag">{item.projectTag}</span>
                </div>
              </div>

              <p className="abt-testimonials__quote">&ldquo;{item.text}&rdquo;</p>

              <footer className="abt-testimonials__author">
                <span className="abt-testimonials__avatar" aria-hidden="true">
                  {item.initials}
                </span>
                <div className="abt-testimonials__author-meta">
                  <p className="abt-testimonials__name">{item.name}</p>
                  <p className="abt-testimonials__designation">{item.designation}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="abt-testimonials__nav" aria-label="Testimonial pagination">
            <button
              type="button"
              className="abt-testimonials__arrow"
              aria-label="Previous testimonials"
              disabled={safePageIdx === 0}
              onClick={() => setPageIdx((p) => Math.max(0, p - 1))}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path
                  d="M11.25 13.5L6.75 9L11.25 4.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="abt-testimonials__dots" role="tablist" aria-label="Testimonial slides">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === safePageIdx}
                  aria-label={`Show testimonial set ${i + 1}`}
                  className={`abt-testimonials__dot${i === safePageIdx ? ' is-active' : ''}`}
                  onClick={() => setPageIdx(i)}
                />
              ))}
            </div>

            <button
              type="button"
              className="abt-testimonials__arrow"
              aria-label="Next testimonials"
              disabled={safePageIdx >= totalPages - 1}
              onClick={() => setPageIdx((p) => Math.min(totalPages - 1, p + 1))}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path
                  d="M6.75 4.5L11.25 9L6.75 13.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
