import { Link } from 'react-router-dom';
import './advisors-section.css';

interface AdvisorsSliderSectionProps {
  variant?: 'home' | 'about';
}

interface AdvisorItem {
  name: string;
  role: string;
  to: string;
  src: string;
  srcSet: string;
  homeSizes: string;
  homeBoxId: string;
  homeFloatId: string;
  aboutBoxId: string;
  aboutFloatId: string;
}

const ADVISORS: AdvisorItem[] = [
  {
    name: 'Varthya Devula Nayak',
    role: 'Managing Director & Founder',
    to: '/advisers/varthya-devula-nayak',
    src: '/images/6ac747fc4fa22554357fa881_1.avif',
    srcSet:
      '/images/6ac747fc4fa22554357fa881_1-p-500.avif 500w, /images/6ac747fc4fa22554357fa881_1-p-800.avif 800w, /images/6ac747fc4fa22554357fa881_1-p-1080.avif 1080w, /images/6ac747fc4fa22554357fa881_1.avif 1138w',
    homeSizes: '(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px',
    homeBoxId: 'a4c2b56e-4ca0-1c19-13f5-72c0241b9fcd',
    homeFloatId: 'a4c2b56e-4ca0-1c19-13f5-72c0241b9fcf',
    aboutBoxId: 'b4feb20e-4235-a603-bb33-8ac16397854e',
    aboutFloatId: 'b4feb20e-4235-a603-bb33-8ac163978550',
  },
  {
    name: 'Kavitha Varthya',
    role: 'Director — Design & Client Relations',
    to: '/advisers/kavitha-varthya',
    src: '/images/6ac7480a6ec3f46c27319938_2.avif',
    srcSet:
      '/images/6ac7480a6ec3f46c27319938_2-p-500.avif 500w, /images/6ac7480a6ec3f46c27319938_2-p-800.avif 800w, /images/6ac7480a6ec3f46c27319938_2-p-1080.avif 1080w, /images/6ac7480a6ec3f46c27319938_2.avif 1138w',
    homeSizes: '(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px',
    homeBoxId: '21f0e890-25b4-e812-cc26-d87bab4bd749',
    homeFloatId: '21f0e890-25b4-e812-cc26-d87bab4bd74b',
    aboutBoxId: 'b4feb20e-4235-a603-bb33-8ac16397855e',
    aboutFloatId: 'b4feb20e-4235-a603-bb33-8ac163978560',
  },
  {
    name: 'Srinivas Reddy K.',
    role: 'Chief Structural Engineer',
    to: '/advisers/srinivas-reddy',
    src: '/images/6ac74815ff63a23a76724796_3.avif',
    srcSet:
      '/images/6ac74815ff63a23a76724796_3-p-500.avif 500w, /images/6ac74815ff63a23a76724796_3-p-800.avif 800w, /images/6ac74815ff63a23a76724796_3.avif 920w',
    homeSizes: '(max-width: 767px) 100vw, (max-width: 991px) 728px, 920px',
    homeBoxId: 'c31a5b7a-6d4a-2253-5798-64f66d9fae3b',
    homeFloatId: 'c31a5b7a-6d4a-2253-5798-64f66d9fae3d',
    aboutBoxId: 'b4feb20e-4235-a603-bb33-8ac16397856e',
    aboutFloatId: 'b4feb20e-4235-a603-bb33-8ac163978570',
  },
  {
    name: 'Ananya Deshmukh',
    role: 'Principal Architect',
    to: '/advisers/ananya-deshmukh',
    src: '/images/6ac7482875f59687c0774035_4.avif',
    srcSet:
      '/images/6ac7482875f59687c0774035_4-p-500.avif 500w, /images/6ac7482875f59687c0774035_4-p-800.avif 800w, /images/6ac7482875f59687c0774035_4.avif 920w',
    homeSizes: '(max-width: 767px) 100vw, (max-width: 991px) 728px, 920px',
    homeBoxId: '2efb747c-b3b4-eb55-d2e7-890116ba8dd5',
    homeFloatId: '2efb747c-b3b4-eb55-d2e7-890116ba8dd7',
    aboutBoxId: 'b4feb20e-4235-a603-bb33-8ac16397857e',
    aboutFloatId: 'b4feb20e-4235-a603-bb33-8ac163978580',
  },
  {
    name: 'Mokila Site Desk',
    role: 'Guided Villa Tours',
    to: '/contact-us',
    src: '/images/6ac74835360b88b7de180583_5.avif',
    srcSet:
      '/images/6ac74835360b88b7de180583_5-p-500.avif 500w, /images/6ac74835360b88b7de180583_5-p-800.avif 800w, /images/6ac74835360b88b7de180583_5.avif 920w',
    homeSizes: '(max-width: 767px) 100vw, (max-width: 991px) 728px, 920px',
    homeBoxId: 'fad251bc-6c2a-492c-f9f9-8ed548f53b0d',
    homeFloatId: 'fad251bc-6c2a-492c-f9f9-8ed548f53b0f',
    aboutBoxId: 'b4feb20e-4235-a603-bb33-8ac16397858e',
    aboutFloatId: 'b4feb20e-4235-a603-bb33-8ac163978590',
  },
  {
    name: 'RERA & Legal Desk',
    role: 'HMDA & Bank APF Support',
    to: '/services',
    src: '/images/6ac7485be32302908cbc1fcb_6.avif',
    srcSet:
      '/images/6ac7485be32302908cbc1fcb_6-p-500.avif 500w, /images/6ac7485be32302908cbc1fcb_6-p-800.avif 800w, /images/6ac7485be32302908cbc1fcb_6.avif 920w',
    homeSizes: '(max-width: 767px) 100vw, (max-width: 991px) 728px, 920px',
    homeBoxId: '8ed0b3ae-7c5a-882a-d207-73b3ad1a2e17',
    homeFloatId: '8ed0b3ae-7c5a-882a-d207-73b3ad1a2e19',
    aboutBoxId: 'b4feb20e-4235-a603-bb33-8ac16397859e',
    aboutFloatId: 'b4feb20e-4235-a603-bb33-8ac1639785a0',
  },
  {
    name: 'NRI Concierge',
    role: 'Global Buyer Assistance',
    to: '/contact-us',
    src: '/images/6ac7495aef17ffc941efc77e_7.avif',
    srcSet:
      '/images/6ac7495aef17ffc941efc77e_7-p-500.avif 500w, /images/6ac7495aef17ffc941efc77e_7-p-800.avif 800w, /images/6ac7495aef17ffc941efc77e_7.avif 920w',
    homeSizes: '(max-width: 767px) 100vw, (max-width: 991px) 728px, 920px',
    homeBoxId: 'd015844d-ee51-b303-78da-ff2f50b26642',
    homeFloatId: 'd015844d-ee51-b303-78da-ff2f50b26644',
    aboutBoxId: 'b4feb20e-4235-a603-bb33-8ac1639785ae',
    aboutFloatId: 'b4feb20e-4235-a603-bb33-8ac1639785b0',
  },
  {
    name: 'Channel Partner Desk',
    role: 'Realtor Empanelment',
    to: '/contact-us',
    src: '/images/6ac74963ea4b76796290d00f_8.avif',
    srcSet:
      '/images/6ac74963ea4b76796290d00f_8-p-500.avif 500w, /images/6ac74963ea4b76796290d00f_8-p-800.avif 800w, /images/6ac74963ea4b76796290d00f_8.avif 920w',
    homeSizes: '(max-width: 767px) 100vw, (max-width: 991px) 728px, 920px',
    homeBoxId: '44c03b4e-8133-3ebd-a117-0cc5f5b0872d',
    homeFloatId: '44c03b4e-8133-3ebd-a117-0cc5f5b0872f',
    aboutBoxId: 'b4feb20e-4235-a603-bb33-8ac1639785be',
    aboutFloatId: 'b4feb20e-4235-a603-bb33-8ac1639785c0',
  },
];

const FLOAT_STYLE = {
  WebkitTransform:
    'translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  transform:
    'translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  opacity: 0,
};

export function AdvisorsSliderSection({ variant = 'home' }: AdvisorsSliderSectionProps) {
  const isHome = variant === 'home';

  return (
    <section className="section advisors-section">
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
            <p className="section-subtitle">Our Leadership</p>
          </div>
          <h2 className="section-title">
            Meet the Leaders Behind<span className="sectitle-br"> </span>Pranitha Developers
          </h2>
        </div>
        <div
          data-delay="4000"
          data-animation="slide"
          className="team-slider w-slider"
          data-autoplay="false"
          data-easing="ease"
          data-hide-arrows="false"
          data-disable-swipe="false"
          data-autoplay-limit="0"
          data-nav-spacing="3"
          data-duration="1000"
          data-infinite="true"
        >
          <div className="team-mask w-slider-mask">
            {ADVISORS.map((advisor) => (
              <div key={advisor.to} className="team-slide w-slide">
                <div className="w-dyn-list">
                  <div role="list" className="w-dyn-items">
                    <div role="listitem" className="w-dyn-item">
                      <Link to={advisor.to} className="team-box w-inline-block">
                        <div
                          data-w-id={isHome ? advisor.homeBoxId : advisor.aboutBoxId}
                          className="team-image-box"
                        >
                          <img
                            src={advisor.src}
                            loading="lazy"
                            alt=""
                            sizes={isHome ? advisor.homeSizes : '100vw'}
                            srcSet={advisor.srcSet}
                            className="team-image"
                          />
                          <div
                            data-w-id={isHome ? advisor.homeFloatId : advisor.aboutFloatId}
                            className="team-float-text-box"
                          >
                            <p style={FLOAT_STYLE} className="team-float-text">
                              Meet Our Real Estate Expert
                            </p>
                          </div>
                        </div>
                        <div className="team-content">
                          <h3 className="team-title">{advisor.name}</h3>
                          <p className="team-des">{advisor.role}</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="team-arrow w-slider-arrow-left">
            <div className="w-icon-slider-left" />
          </div>
          <div className="team-arrow w-slider-arrow-right">
            <div className="w-icon-slider-right" />
          </div>
          <div className="team-dots w-slider-nav w-round" />
          <div className="w-embed">
            <style>{`
              .w-slider-dot {
                width: 12px;
                height: 12px;
                border: 1px solid black;
                border-radius: 50%;
                background: transparent;
                transition: all 0.3s ease;
                cursor: pointer;
              }
              .w-slider-dot.w-active {
                background: black;
                border-radius: 10px !important;
                width: 24px;
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}
