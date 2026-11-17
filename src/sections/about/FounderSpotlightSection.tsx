import { Link } from 'react-router-dom';
import './founder-spotlight.css';

const WHY_CHOOSE_PILLARS = [
  {
    num: '01',
    title: 'Customer-Centric Approach',
    text: 'Prioritizing homeowner needs and preferences at every stage for a personalized home-buying experience.',
  },
  {
    num: '02',
    title: 'Innovative Design & Amenities',
    text: 'Contemporary architecture, spacious layouts, courtyard living, dedicated home theatres, and resort-grade clubhouses.',
  },
  {
    num: '03',
    title: 'Quality Construction',
    text: 'RCC framed superstructures, red brick masonry, Hindware, Legrand, Finolex, RAK Ceramics, and teak wood finishes.',
  },
  {
    num: '04',
    title: 'Timely Delivery Schedule',
    text: 'Dedicated project execution with clear handover targets across May 2027, December 2027, and December 2028.',
  },
  {
    num: '05',
    title: 'Transparent Communication',
    text: 'Regular site construction progress photos, HMDA & TS-RERA documentation, and direct support from our team.',
  },
  {
    num: '06',
    title: 'Prime Growth Corridors',
    text: 'Strategically situated in Mokila, Kondakal & Shankarpally—10–20 mins from ORR Exit 2, Neopolis, and Financial District.',
  },
];

export function FounderSpotlightSection() {
  return (
    <section className="section abt-founder">
      <div className="abt-founder__inner">
        {/* ── Founder Editorial Card ── */}
        <div className="abt-founder__card">
          <div className="abt-founder__photo-col">
            <div className="abt-founder__photo-frame">
              <img
                src="/images/about/v-devula-nayak.webp"
                alt="V. Devula Nayak — Founder & Managing Director, Praneeta Developers"
                className="abt-founder__photo"
                loading="lazy"
              />
            </div>
            <div className="abt-founder__badge-box">
              <span className="abt-founder__role-chip">Hyderabad · Since 2005</span>
              <p className="abt-founder__tagline">
                Real Estate Developer · Entrepreneur · Urban Infrastructure Enthusiast
              </p>
            </div>
          </div>

          <div className="abt-founder__bio-col">
            <div className="abt-story__pill">
              <div className="abt-story__pill-dot">
                <img src="/images/6ac4a1873c3838069f5e8736_icon.svg" alt="" />
              </div>
              <p className="abt-story__pill-text">Founder &amp; Leadership</p>
            </div>

            <h2 className="abt-founder__name">V. Devula Nayak</h2>
            <p className="abt-founder__subtitle">
              Founder &amp; Managing Director – Praneeta Developers
            </p>

            <div className="abt-founder__paragraphs">
              <p>
                Meet V. Devula Nayak — the driving force behind Praneeta Developers and a passionate real estate entrepreneur who has been shaping Hyderabad&apos;s luxury living landscape since 2005. With nearly 20 years of experience, he has built a solid reputation for creating thoughtfully designed residential communities that blend comfort, elegance, and functionality.
              </p>
              <p>
                What started as a vision to bring premium living spaces to life has grown into one of Mokila&apos;s most ambitious development ventures. Under his leadership, Praneeta Developers has successfully delivered five upscale villa projects with major gated developments spanning over 2.5 million square feet across Mokila and Shankarpally.
              </p>
              <p>
                Known for sharp business acumen, attention to design detail, and a customer-first approach, his communities stand out for modern aesthetics, sustainable master planning, and lifestyle-driven amenities built for today&apos;s families.
              </p>
            </div>

            <div className="abt-founder__actions">
              <Link to="/properties" className="abt-founder__btn-primary">
                Explore Active Projects
              </Link>
              <Link to="/contact-us" className="abt-founder__btn-secondary">
                Connect with Our Team
              </Link>
            </div>
          </div>
        </div>

        {/* ── Why Choose Praneeta Developers ── */}
        <div className="abt-why">
          <div className="abt-why__header">
            <div className="abt-story__pill">
              <div className="abt-story__pill-dot">
                <img src="/images/6ac4a1873c3838069f5e8736_icon.svg" alt="" />
              </div>
              <p className="abt-story__pill-text">Why Choose Praneeta</p>
            </div>
            <h2 className="abt-why__heading">Crafted Around Clarity, Quality &amp; Livability</h2>
          </div>

          <div className="abt-why__grid">
            {WHY_CHOOSE_PILLARS.map((item) => (
              <div key={item.num} className="abt-why__card">
                <span className="abt-why__num">{item.num}</span>
                <h3 className="abt-why__title">{item.title}</h3>
                <p className="abt-why__text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
