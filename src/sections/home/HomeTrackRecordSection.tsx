interface CounterTrackConfig {
  start: string;
  end: string;
  variant: 'one' | 'two';
}

interface StatCardConfig {
  label: string;
  tracks: CounterTrackConfig[];
  suffix?: string;
  description: string;
}

const AUTHOR_AVATARS = [
  { src: '/images/69e9e6a61da2aa74ab52d370_1.avif', className: 'hero-author-img first' },
  { src: '/images/69e9e6a68973da2b114ca9d3_2.avif', className: 'hero-author-img' },
  { src: '/images/69e9e6a9e0392815c0a32cca_3.avif', className: 'hero-author-img' },
  { src: '/images/69e9e6a6782c6deb7cb4d09d_4.avif', className: 'hero-author-img' },
  { src: '/images/69e9e6a7f57e9021ae28555e_5.avif', className: 'hero-author-img' },
];

const STAT_CARDS: StatCardConfig[] = [
  {
    label: 'Years of Leadership',
    tracks: [
      { start: '1', end: '1', variant: 'one' },
      { start: '2', end: '2', variant: 'two' },
    ],
    suffix: '+',
    description: 'Over a decade of civil infrastructure and residential township experience.',
  },
  {
    label: 'Happy Families',
    tracks: [
      { start: '8', end: '8', variant: 'one' },
      { start: '5', end: '5', variant: 'two' },
      { start: '0', end: '0', variant: 'one' },
    ],
    suffix: '+',
    description: 'Homeowner families across our Mokila and West Hyderabad communities.',
  },
  {
    label: 'Landmark Projects',
    tracks: [
      { start: '0', end: '0', variant: 'one' },
      { start: '6', end: '6', variant: 'two' },
    ],
    suffix: '+',
    description: 'Completed and ongoing gated villa, apartment, and plotted enclaves.',
  },
  {
    label: 'Sovereign Villas',
    tracks: [
      { start: '1', end: '1', variant: 'one' },
      { start: '6', end: '6', variant: 'two' },
      { start: '5', end: '5', variant: 'one' },
    ],
    description: 'Exclusive 3 & 4 BHK triplex villas on 15 acres in Mokila (₹1.5–2.0 Cr).',
  },
];

function DigitTrack({ start, end, variant }: CounterTrackConfig) {
  const digits = [start, '1', '2', '3', '4', '5', '6', '7', '8', end];
  return (
    <div className="counter-inner">
      <div className={`counter ${variant}`}>
        {digits.map((digit, i) => (
          <h3 key={i} className="count-number">
            {digit}
          </h3>
        ))}
      </div>
    </div>
  );
}

export function HomeTrackRecordSection() {
  return (
    <section
      data-wf-target='[[["69e231c0aededb9fade4ee77","2643e822-f8d0-a42c-b4fe-78c38b13f116"],[]]]'
      className="section pb-zero"
    >
      <img
        src="/images/69e9e5be5cf71b73608b601a_Union.avif"
        loading="lazy"
        alt="Black and white icon of a human hand palm facing outward with a small globe symbol near the thumb."
        className="funfact-shape"
      />
      <div className="w-layout-blockcontainer container w-container">
        <div className="w-layout-grid funfact-grid">
          <div className="funfact-content">
            <div className="section-title-box mb-zero">
              <div className="subtitle-box">
                <div className="subtitle-icon">
                  <img
                    src="/images/6ac4a1873c3838069f5e8736_icon.svg"
                    loading="lazy"
                    alt=""
                    className="subtitle-icon-img"
                  />
                </div>
                <p className="section-subtitle">Our Track Record</p>
              </div>
              <h2 className="section-title">
                Communities, Families,<span className="sectitle-br"> </span>and Delivery Proof
              </h2>
            </div>
            <div className="hero-rating-wrap">
              <div className="hero-author-box">
                {AUTHOR_AVATARS.map((avatar, i) => (
                  <img
                    key={i}
                    src={avatar.src}
                    loading="lazy"
                    alt=""
                    className={avatar.className}
                  />
                ))}
              </div>
              <div className="hero-rating-box">
                <div className="rating-box-two">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src="/images/69e9e7366a4e8d4313fe7d7f_star.svg"
                      loading="lazy"
                      alt=""
                      className="rating-star"
                    />
                  ))}
                  <p className="rating-count">850+ Families</p>
                </div>
                <p className="hero-rating-text">Trusted Across West Hyderabad</p>
              </div>
            </div>
          </div>
          <div className="funfact-wrapper">
            {STAT_CARDS.map((card) => (
              <div key={card.label} data-animate="counter-slide-in-up" className="counter-box">
                <div className="counter-year-box">
                  <p className="counter-year-text">{card.label}</p>
                </div>
                <div className="counter-wrap">
                  <div className="count-number-wrap">
                    {card.tracks.map((track, i) => (
                      <DigitTrack key={i} {...track} />
                    ))}
                    {card.suffix ? <h3 className="count-number">{card.suffix}</h3> : null}
                  </div>
                  <p className="counter-text">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
