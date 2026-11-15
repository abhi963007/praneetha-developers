const MARQUEE_WORDS = ['Luxury living', 'Home Find', 'Trusted agents', 'guidance'];

function MarqueeStrip() {
  return (
    <div className="marquee one">
      {[0, 1].map((dup) =>
        MARQUEE_WORDS.map((word) => (
          <span key={`${dup}-${word}`} style={{ display: 'contents' }}>
            <p className="marquee-text">{word}</p>
            <img
              loading="lazy"
              src="/images/69e9e24971865829de0ed4cd_Mask%20group.svg"
              alt=""
              className="marquee-icon"
            />
          </span>
        ))
      )}
    </div>
  );
}

export function MarqueeSection() {
  return (
    <section className="marquee-section">
      <div className="marquee-box three">
        <div data-animate="marquee-rtl" className="marquee-inner three">
          <MarqueeStrip />
          <MarqueeStrip />
        </div>
      </div>
      <div className="marquee-box four">
        <div data-animate="marquee-ltr" className="marquee-inner four">
          <MarqueeStrip />
          <MarqueeStrip />
        </div>
      </div>
    </section>
  );
}
