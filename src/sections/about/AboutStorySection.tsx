import './about-story-redesign.css';

const STATS = [
  {
    num: '20',
    suffix: '+ Yrs',
    label: 'Shaping Hyderabad Luxury Living Since 2005',
  },
  {
    num: '2.5',
    suffix: 'M+ Sft',
    label: 'Active & Delivered Developments across Kardanur, Kollur & Mokila',
  },
];

const IMAGES = [
  {
    src: '/images/about/santorini-villas-exterior.webp',
    alt: 'The Santorini Villas in Mokila by Praneeta Developers',
    tall: true,
  },
  {
    src: '/images/about/amity-villas-hero.webp',
    alt: 'Amity Villas luxury triplex elevation in Mokila',
    tall: false,
  },
  {
    src: '/images/about/patio-villas-exterior.webp',
    alt: 'The Patio Villas courtyard community in Mokila',
    tall: false,
  },
];

export function AboutStorySection() {
  return (
    <section className="section abt-story">
      <div className="abt-story__inner">

        {/* ── LEFT COLUMN ── */}
        <div className="abt-story__left">
          <div className="abt-story__pill">
            <div className="abt-story__pill-dot">
              <img src="/images/6ac4a1873c3838069f5e8736_icon.svg" alt="" />
            </div>
            <p className="abt-story__pill-text">About Praneeta</p>
          </div>

          <h2 className="abt-story__heading">
            Building Dreams, Creating Homes across Kardanur, Kollur &amp; Mokila
          </h2>

          <p className="abt-story__body">
            Backed by three decades of construction visionaries—formerly delivering prestigious townships under Hareeni Developers—Praneeta Developers brings HMDA &amp; TG-RERA registered gated villa and high-rise apartment communities across West Hyderabad with transparent documentation and committed timelines.
          </p>

          <p className="abt-story__body">
            With deep land-bank strength, disciplined architectural engineering, and multi-phase execution scale across flagship Kardanur, Kollur, and Mokila developments, we create low-density luxury neighborhoods built for enduring family value.
          </p>

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
