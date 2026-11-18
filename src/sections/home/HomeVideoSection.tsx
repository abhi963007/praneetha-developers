import { Link } from 'react-router-dom';
import './home-video.css';

export function HomeVideoSection() {
  return (
    <section className="section p-zero home-video-sec">
      <div className="cta-wrap">
        <div className="cta-image-box">
          <div className="parallax-wrapper">
            <video
              className="parallax-image"
              src="/video/timeless-architecture.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
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
              <Link to="/properties" className="home-video-btn">
                <span>Explore Our Projects</span>
                <span className="home-video-btn-circle" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
