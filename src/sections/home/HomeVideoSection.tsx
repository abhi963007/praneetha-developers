import { Link } from 'react-router-dom';

export function HomeVideoSection() {
  return (
    <section className="section p-zero">
      <div className="cta-wrap">
        <div className="cta-image-box">
          <div data-parallax="trigger" className="parallax-wrapper">
            <video
              className="parallax-image"
              src="/video/timeless-architecture.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
        <div className="cta-content-box">
          <div className="cta-content">
            <h2 className="cta-title">Timeless Architecture</h2>
            <p className="cta-text _2">
              &ldquo;Architecture should speak of its time and place, but yearn for timelessness. We build environments where families grow, thrive, and create lasting legacies.&rdquo;
            </p>
            <div className="cta-button">
              <Link to="/contact-us" data-wf--primary-button--variant="base" className="primary-button w-inline-block">
                <div className="primary-button-flex">
                  <div className="primary-button-text-wrap">
                    <div className="primary-button-text">Get in Touch</div>
                    <div className="primary-button-text-hover">Get in Touch</div>
                  </div>
                  <div className="primary-button-arrow-wrapper">
                    <div className="primary-button-arrow-wrap">
                      <img
                        loading="lazy"
                        src="/images/69e723100025a4ae58731b6a_0.svg"
                        alt=""
                        className="primary-button-arrow"
                      />
                      <img
                        loading="lazy"
                        src="/images/69e723100025a4ae58731b6a_0.svg"
                        alt=""
                        className="primary-button-arrow-hover"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
