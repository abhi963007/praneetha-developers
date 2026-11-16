import './about-story-redesign.css';

const STATS = [
  {
    num: '12',
    suffix: '+',
    label: 'Years of Infrastructure & Township Leadership',
  },
  {
    num: '850',
    suffix: '+',
    label: 'Happy Homeowner Families Across West Hyderabad',
  },
];

const IMAGES = [
  {
    src: '/images/portfolio-villas-completed.jpg',
    alt: 'Completed luxury villa community in West Hyderabad',
    tall: true,
  },
  {
    src: '/images/service-villa-communities.jpg',
    alt: 'Gated villa community avenue in Mokila',
    tall: false,
  },
  {
    src: '/images/service-guided-visits.jpg',
    alt: 'Sunlit luxury villa entrance in Mokila',
    tall: false,
  },
];

export function AboutStorySection() {
  return (
    <section className="section abt-story">
      <div className="abt-story__inner">

        {/* ── LEFT COLUMN ── */}
        <div className="abt-story__left">
          {/* pill */}
          <div className="abt-story__pill">
            <div className="abt-story__pill-dot">
              <img src="/images/6ac4a1873c3838069f5e8736_icon.svg" alt="" />
            </div>
            <p className="abt-story__pill-text">About Praneeta</p>
          </div>

          {/* headline */}
          <h2 className="abt-story__heading">
            Building Dreams, Creating Homes across West&nbsp;Hyderabad's Mokila &amp; Kokapet corridors
          </h2>

          {/* body */}
          <p className="abt-story__body">
            V Praneeta Developers Pvt. Ltd. delivers HMDA &amp; TG-RERA compliant villa communities
            with transparent documentation and timely quality. Every home we build is backed by over
            a decade of township expertise and a commitment to zero hidden charges.
          </p>

          {/* stat row */}
          <div className="abt-story__stats">
            {STATS.map((s) => (
              <div key={s.num} className="abt-story__stat">
                <p className="abt-story__stat-num">
                  {s.num}<span>{s.suffix}</span>
                </p>
                <p className="abt-story__stat-label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT COLUMN — image collage ── */}
        <div className="abt-story__right">
          {IMAGES.map((img) => (
            <div
              key={img.src}
              className={`abt-story__img-wrap${img.tall ? ' abt-story__img-wrap--tall' : ''}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
