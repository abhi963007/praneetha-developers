import { Link } from 'react-router-dom';
import './founder-spotlight.css';

const LEADERSHIP_EXPERTISE = [
  '20 Years of Experience',
  'Land Investments',
  'Land Trading',
  'Land Procurement',
  'Property Advisor',
  'Corporate Bulk Lands',
] as const;

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
                Real Estate Developer · Entrepreneur
                <br />
                Urban Infrastructure Enthusiast
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
                Meet V. Devula Nayak — the driving force behind Praneeta Developers with 20 years of experience shaping Hyderabad&apos;s residential and land development landscape since 2005. Over two decades, he has built deep domain expertise across land investments, land trading, land procurement, and corporate bulk lands.
              </p>
              <p>
                What started as a vision to create enduring residential landmarks has grown into one of West Hyderabad&apos;s most trusted development ventures—leading flagship communities including Pranitha&apos;s Lakshmi Nivas in Kardanur alongside Amity Villas, The Patio Villas, Santorini Villas, and Praneeta Meridian across Kardanur, Kollur, and Mokila.
              </p>
              <p>
                Widely respected as a strategic Property Advisor, he combines sharp market foresight, transparent HMDA &amp; TG-RERA compliance, and end-to-end execution discipline to deliver lasting asset value for homeowners, landowners, and investors alike.
              </p>
            </div>

            <div className="abt-founder__expertise" aria-label="Core areas of expertise">
              <div className="abt-founder__expertise-header">
                <span className="abt-founder__expertise-dot" aria-hidden="true" />
                <p className="abt-founder__expertise-label">Core Expertise</p>
              </div>
              <ul className="abt-founder__expertise-grid">
                {LEADERSHIP_EXPERTISE.map((item, idx) => (
                  <li key={item} className="abt-founder__expertise-item">
                    <span className="abt-founder__expertise-num" aria-hidden="true">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="abt-founder__expertise-text">{item}</span>
                  </li>
                ))}
              </ul>
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
