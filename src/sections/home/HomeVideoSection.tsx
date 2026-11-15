import { Link } from 'react-router-dom';

export function HomeVideoSection() {
  return (
    <section className="section p-zero">
      <div className="cta-wrap">
        <div className="cta-image-box">
          <div data-parallax="trigger" className="parallax-wrapper">
            <img
              className="parallax-image"
              src="/images/6ad5e7d57c024b24c5f257fb_Moody%20Green-Gray%20Sunset%20Villa.avif"
              alt="Moody Green Gray Sunset Villa"
              sizes="100vw"
              data-parallax="target"
              loading="lazy"
              srcSet="/images/6ad5e7d57c024b24c5f257fb_Moody%20Green-Gray%20Sunset%20Villa-p-500.avif 500w, /images/6ad5e7d57c024b24c5f257fb_Moody%20Green-Gray%20Sunset%20Villa-p-800.avif 800w, /images/6ad5e7d57c024b24c5f257fb_Moody%20Green-Gray%20Sunset%20Villa-p-1080.avif 1080w, /images/6ad5e7d57c024b24c5f257fb_Moody%20Green-Gray%20Sunset%20Villa-p-1600.avif 1600w, /images/6ad5e7d57c024b24c5f257fb_Moody%20Green-Gray%20Sunset%20Villa.avif 1659w"
            />
          </div>
        </div>
        <div className="cta-content-box">
          <div className="cta-content">
            <h2 className="cta-title">Designed for Serene Living</h2>
            <p className="cta-text _2">Gated Mokila villas crafted for daylight, greenery, and family life.</p>
            <div className="cta-button">
              <Link to="/properties" data-wf--primary-button--variant="base" className="primary-button w-inline-block">
                <div className="primary-button-flex">
                  <div className="primary-button-text-wrap">
                    <div className="primary-button-text">Explore Properties</div>
                    <div className="primary-button-text-hover">Explore Properties</div>
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
