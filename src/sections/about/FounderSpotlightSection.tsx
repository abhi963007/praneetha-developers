import { Link } from 'react-router-dom';
import './founder-spotlight.css';

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
                What started as a vision to bring premium living spaces to life has grown into one of Mokila&apos;s most ambitious development ventures. Under his leadership—and in strategic association with TAG Projects (TAG Group)—Praneeta Developers has expanded across flagship gated communities including Amity Villas, The Patio Villas, Santorini Villas, and Praneeta Meridian, spanning over 2.5 million square feet across Mokila, Kondakal, and Shankarpally.
              </p>
              <p>
                Known for sharp business acumen, attention to design detail, and a customer-first approach, this alliance pairs institutional master planning, 30–40 ft internal avenues, and resort-grade clubhouses with clear HMDA &amp; TG-RERA compliance and reliable delivery for modern families.
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
      </div>
    </section>
  );
}
