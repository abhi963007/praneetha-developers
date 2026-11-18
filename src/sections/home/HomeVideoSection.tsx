import { Link } from 'react-router-dom';
import './home-video.css';

export function HomeVideoSection() {
  return (
    <section className="section p-zero home-video-sec">
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
          <div className="home-video-scrim" aria-hidden="true" />
        </div>
        <div className="cta-content-box">
          <div className="cta-content">
            <h2 className="cta-title">Relax Today. Grow Tomorrow.</h2>
            <p className="cta-text _2">
              Sit back, unwind, and watch your investments flourish. With Praneeta Developers, every investment is a step towards a brighter, more rewarding future.
            </p>
            <div className="cta-button">
              <Link to="/properties" data-wf--primary-button--variant="base" className="primary-button w-inline-block">
                <div className="primary-button-flex">
                  <div className="primary-button-text-wrap">
                    <div className="primary-button-text">Explore Our Projects</div>
                    <div className="primary-button-text-hover">Explore Our Projects</div>
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
