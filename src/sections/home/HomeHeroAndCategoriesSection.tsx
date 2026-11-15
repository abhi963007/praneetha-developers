import { Link } from 'react-router-dom';
import { ScrollHero } from '../../components/ScrollHero';

const PRIMARY_CATEGORIES = [
  {
    to: '/category/villas-ongoing',
    title: 'Villas — Ongoing',
    subtitle: 'Sovereign & Santorini',
    image: '/images/6ad5b06701dc21185b176929_Modern%20House%20at%20Twilight.avif',
    srcSet:
      '/images/6ad5b06701dc21185b176929_Modern%20House%20at%20Twilight-p-500.avif 500w, /images/6ad5b06701dc21185b176929_Modern%20House%20at%20Twilight.avif 640w',
  },
  {
    to: '/category/villas-completed',
    title: 'Villas — Completed',
    subtitle: 'Amity & The Patio',
    image: '/images/6ad5b19fe45891f848b20f5e_Mediterranean%20Villa%20Exterior.avif',
    srcSet:
      '/images/6ad5b19fe45891f848b20f5e_Mediterranean%20Villa%20Exterior-p-500.avif 500w, /images/6ad5b19fe45891f848b20f5e_Mediterranean%20Villa%20Exterior.avif 640w',
  },
  {
    to: '/category/apartments',
    title: 'Apartments',
    subtitle: 'Meridian Heights',
    image: '/images/6ad5ced58991dbd28755868b_Modern%20Apartment%20Living%20in%20Golden%20Light.avif',
    srcSet:
      '/images/6ad5ced58991dbd28755868b_Modern%20Apartment%20Living%20in%20Golden%20Light-p-500.avif 500w, /images/6ad5ced58991dbd28755868b_Modern%20Apartment%20Living%20in%20Golden%20Light-p-800.avif 800w, /images/6ad5ced58991dbd28755868b_Modern%20Apartment%20Living%20in%20Golden%20Light-p-1080.avif 1080w, /images/6ad5ced58991dbd28755868b_Modern%20Apartment%20Living%20in%20Golden%20Light.avif 1205w',
  },
  {
    to: '/category/plots-coming-soon',
    title: 'Plots — Coming Soon',
    subtitle: 'Singapur Town Phase II',
    image: '/images/6ad5b13d0ecb3dd59b993e4b_Serene%20Two-Story%20House%20in%20Forest%20Setting%20at%20Dusk.avif',
    srcSet:
      '/images/6ad5b13d0ecb3dd59b993e4b_Serene%20Two-Story%20House%20in%20Forest%20Setting%20at%20Dusk-p-500.avif 500w, /images/6ad5b13d0ecb3dd59b993e4b_Serene%20Two-Story%20House%20in%20Forest%20Setting%20at%20Dusk.avif 640w',
  },
];

export function HomeHeroAndCategoriesSection() {
  return (
    <div className="section-wrap">
      <ScrollHero>
          <div className="w-layout-blockcontainer container w-container">
            <div className="hero-content">
              <div className="hero-content-inner" style={{ display: 'none' }}>
                <h1 className="hero-title">Building Dreams, Creating Homes.</h1>
                <p className="hero-text">
                  Pranitha Sovereign Villas in Mokila–Shankarpally — 3 &amp; 4 BHK luxury triplex villas from ₹1.5 Cr to ₹2.0 Cr.
                </p>
                <div className="hero-btn">
                  <a
                    href="#Properties"
                    data-wf--primary-button--variant="base"
                    className="primary-button w-inline-block"
                  >
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
                  </a>
                </div>
              </div>
            </div>
          </div>
      </ScrollHero>
      <section className="section cat">
        <div className="hero-icon-box">
          <img
            src="/images/6ac4da41e6cfc9c997f6729e_svgviewer-output.svg"
            loading="lazy"
            alt=""
            className="hero-icon"
          />
          <img
            src="/images/6ac4da41e6cfc9c997f6729e_svgviewer-output.svg"
            loading="lazy"
            alt=""
            className="hero-icon two"
          />
        </div>
        <div className="w-layout-blockcontainer container w-container">
          <div className="section-title-box center">
            <div className="subtitle-box">
              <div className="subtitle-icon">
                <img
                  src="/images/6ac4a1873c3838069f5e8736_icon.svg"
                  loading="lazy"
                  alt=""
                  className="subtitle-icon-img"
                />
              </div>
              <p className="section-subtitle">Our Portfolio</p>
            </div>
            <h2 className="section-title">Communities Crafted for Hyderabad</h2>
          </div>
          <div className="w-dyn-list">
            <div role="list" className="cat-cms w-dyn-items">
              {PRIMARY_CATEGORIES.map((cat) => (
                <div key={cat.to} role="listitem" className="w-dyn-item">
                  <Link to={cat.to} className="cat-box w-inline-block">
                    <div className="cat-image-box">
                      <div data-parallax="trigger" className="parallax-wrapper">
                        <img
                          src={cat.image}
                          loading="lazy"
                          data-parallax="target"
                          alt=""
                          sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                          srcSet={cat.srcSet}
                          className="parallax-image"
                        />
                      </div>
                    </div>
                    <div className="cat-content">
                      <p className="cat-title">{cat.title}</p>
                      <p className="cat-items-text">{cat.subtitle}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
