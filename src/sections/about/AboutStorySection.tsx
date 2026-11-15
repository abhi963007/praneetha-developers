function CounterTrack({ digit, variant }: { digit: string; variant: 'one' | 'two' }) {
  const digits = [digit, '1', '2', '3', '4', '5', '6', '7', '8', digit];
  return (
    <div className="counter-inner">
      <div className={`counter ${variant}`}>
        {digits.map((num, idx) => (
          <h3 key={idx} className="count-number">
            {num}
          </h3>
        ))}
      </div>
    </div>
  );
}

export function AboutStorySection() {
  return (
    <section className="section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="section-title-box about">
          <div className="subtitle-box">
            <div className="subtitle-icon">
              <img
                src="/images/6ac4a1873c3838069f5e8736_icon.svg"
                loading="lazy"
                alt=""
                className="subtitle-icon-img"
              />
            </div>
            <p className="section-subtitle">About Pranitha</p>
          </div>
          <h2 className="section-title">
            Building Dreams, Creating Homes across West Hyderabad’s Mokila &amp; Kokapet corridors
          </h2>
        </div>
        <div className="w-layout-grid about-grid">
          <div id="w-node-_7ad14c85-c53a-cef7-ce0f-8a743883cddf-309073a9" className="about-box one">
            <p className="about-text">
              V Praneeta Developers Pvt. Ltd. delivers HMDA &amp; TG-RERA compliant villa communities with transparent documentation and timely quality.
            </p>
            <div className="about-image-box">
              <div data-parallax="trigger" className="parallax-wrapper">
                <img
                  className="parallax-image"
                  src="/images/6ac76985b8424f37ecdd00ab_0.avif"
                  alt="Two-story wooden house with large glass windows surrounded by dense green trees and shrubs, and a woman walking on a grass path nearby."
                  sizes="(max-width: 479px) 48vw, (max-width: 767px) 49vw, (max-width: 991px) 356px, 462px"
                  data-parallax="target"
                  loading="lazy"
                  srcSet="/images/6ac76985b8424f37ecdd00ab_0-p-500.avif 500w, /images/6ac76985b8424f37ecdd00ab_0.avif 640w"
                />
              </div>
            </div>
          </div>
          <div id="w-node-a29c24de-1da4-bb63-c73f-0cdb4b75dfae-309073a9" className="about-box two">
            <div className="counter-wrap two">
              <div className="count-number-wrap">
                <CounterTrack digit="1" variant="one" />
                <CounterTrack digit="2" variant="two" />
                <h3 className="count-number">+</h3>
              </div>
              <p className="counter-text two">Years of Infrastructure &amp; Township Leadership</p>
            </div>
            <div className="about-image-box">
              <div data-parallax="trigger" className="parallax-wrapper">
                <img
                  src="/images/69e9f536ffdeacfa4ede29fb_2.avif"
                  loading="lazy"
                  data-parallax="target"
                  alt="Modern two-story house with large glass windows and balconies overlooking a foggy landscape."
                  className="parallax-image"
                />
              </div>
            </div>
          </div>
          <div className="about-box three">
            <div className="about-image-box">
              <div data-parallax="trigger" className="parallax-wrapper">
                <img
                  src="/images/69e9f537f2739fb2173b9649_3.avif"
                  loading="lazy"
                  data-parallax="target"
                  alt="Two modern wooden cabin-style houses with large glass windows set in a natural, wooded area with a gray sky."
                  className="parallax-image"
                />
              </div>
            </div>
            <div className="counter-wrap two">
              <div className="count-number-wrap">
                <CounterTrack digit="8" variant="one" />
                <CounterTrack digit="5" variant="two" />
                <CounterTrack digit="0" variant="one" />
                <h3 className="count-number">+</h3>
              </div>
              <p className="counter-text two">Happy Homeowner Families Across West Hyderabad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
