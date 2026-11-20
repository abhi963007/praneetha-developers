import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { PageBannerSection } from '../components/PageBannerSection';
import { useWebflowPage } from '../hooks/useWebflowPage';
import { PAGE_META, type PageMeta } from '../types/site';
import './legal-page.css';

interface LegalClause {
  num: string;
  title: string;
  body: string;
}

interface LegalPageConfig {
  meta: PageMeta;
  bannerTitle: 'Disclaimer' | 'Privacy Policy';
  eyebrow: string;
  heading: string;
  intro: string;
  clauses: LegalClause[];
}

const DISCLAIMER_CONFIG: LegalPageConfig = {
  meta: PAGE_META.disclaimer,
  bannerTitle: 'Disclaimer',
  eyebrow: 'Legal & Regulatory Disclosure',
  heading: 'Website Content, Architectural Visuals & RERA Notice',
  intro:
    'This website is operated by V Praneeta Developers Pvt. Ltd. (Praneeta Developers) to present general project information regarding our gated villa, apartment, and residential community developments across Kardanur, Kollur, and Mokila in West Hyderabad.',
  clauses: [
    {
      num: '01',
      title: 'General Informational Purpose Only',
      body: 'All specifications, layouts, dimensions, brochures, commute estimates, and project summaries published on this website are provided solely for general guidance. Nothing contained herein constitutes an offer, invitation to offer, solicitation, or legally binding commitment.',
    },
    {
      num: '02',
      title: 'Architectural Renders & Visual Representations',
      body: '3D elevations, walkthrough animations, courtyard mockups, landscaping visuals, and interior photographs are artistic impressions prepared to illustrate the conceptual design intent of our communities. Actual finished elevations, hardscape, flora, and fixtures may vary within approved engineering tolerances.',
    },
    {
      num: '03',
      title: 'TG-RERA & HMDA Statutory Compliance',
      body: 'Praneeta Developers develops residential communities in compliance with applicable HMDA layout approvals and Telangana Real Estate Regulatory Authority (TG-RERA) registrations. Prospective buyers are encouraged to verify official project registration numbers, sanctioned layout copies, and milestone schedules directly with our legal desk prior to booking.',
    },
    {
      num: '04',
      title: 'Pricing, Area & Specifications Subject to Buyer Agreement',
      body: 'Unit pricing, built-up areas, plot dimensions, possession timelines, clubhouse amenities, and payment schedules are subject to revision without prior notice and are governed exclusively by the terms recorded in the signed Allotment Letter and Agreement of Sale.',
    },
    {
      num: '05',
      title: 'Limitation of Liability & External Links',
      body: 'While we take care to keep project updates current, V Praneeta Developers Pvt. Ltd. shall not be liable for any direct or indirect loss arising from reliance on website material, third-party map embeds, or external links.',
    },
  ],
};

const PRIVACY_CONFIG: LegalPageConfig = {
  meta: PAGE_META.privacy,
  bannerTitle: 'Privacy Policy',
  eyebrow: 'Data Protection & User Trust',
  heading: 'How Praneeta Developers Collects & Protects Your Information',
  intro:
    'V Praneeta Developers Pvt. Ltd. (Praneeta Developers) respects your privacy and is committed to protecting the personal contact details you share when enquiring about our residential communities, subscribing to property alerts, or submitting a direct collaboration proposal.',
  clauses: [
    {
      num: '01',
      title: 'Information We Collect',
      body: 'When you submit an enquiry form, schedule a guided site visit, submit a direct collaboration inquiry, or subscribe to Property Alerts, we collect the contact details you voluntarily provide—such as your name, email address, phone number, preferred project, collaboration opportunity, and project details.',
    },
    {
      num: '02',
      title: 'How We Use Your Information',
      body: 'Your details are used strictly to respond to project enquiries, share verified floor plans, brochures, and RERA dockets, coordinate guided visits to our Kardanur, Kollur, and Mokila sites, evaluate joint development or stalled project collaboration proposals, and deliver requested project updates.',
    },
    {
      num: '03',
      title: 'Information Sharing & Loan / Statutory Coordination',
      body: 'We do not sell or rent your personal contact details to third-party marketers. Information may be shared only with authorized internal advisory teams, partner financial institutions when you request home loan assistance, or regulatory authorities when required by law.',
    },
    {
      num: '04',
      title: 'Data Security & Retention',
      body: 'We maintain reasonable administrative and technical safeguards to protect submitted enquiry and subscription records against unauthorized access, alteration, or disclosure, retaining records only as long as necessary to service your request or comply with statutory obligations.',
    },
    {
      num: '05',
      title: 'Your Privacy Rights & Opt-Out',
      body: 'You may request access to, correction of, or deletion of your personal contact details—or unsubscribe from Property Alerts communications at any time—by emailing our compliance desk with your registered email or phone number.',
    },
  ],
};

function LegalPageLayout({ config }: { config: LegalPageConfig }) {
  useWebflowPage(config.meta.wfPage, config.meta.title);
  const isDisclaimer = config.meta.key === 'disclaimer';

  return (
    <>
      <Navbar />
      <PageBannerSection title={config.bannerTitle} />
      <section className="legal-page-section">
        <div className="legal-container">
          <div className="legal-topbar">
            <nav className="legal-switcher" aria-label="Legal documents">
              <Link
                to="/disclaimer"
                aria-current={isDisclaimer ? 'page' : undefined}
                className={`legal-switch-pill${isDisclaimer ? ' is-active' : ''}`}
              >
                Disclaimer
              </Link>
              <Link
                to="/privacy-policy"
                aria-current={!isDisclaimer ? 'page' : undefined}
                className={`legal-switch-pill${!isDisclaimer ? ' is-active' : ''}`}
              >
                Privacy Policy
              </Link>
            </nav>
            <p className="legal-updated">Effective: November 2026 · Hyderabad, India</p>
          </div>

          <div className="legal-intro-card">
            <span className="legal-intro-eyebrow">{config.eyebrow}</span>
            <h2 className="legal-intro-heading">{config.heading}</h2>
            <p className="legal-intro-text">{config.intro}</p>
          </div>

          <div className="legal-clauses">
            {config.clauses.map((clause) => (
              <article key={clause.num} className="legal-clause-card">
                <div className="legal-clause-num" aria-hidden="true">
                  {clause.num}
                </div>
                <div>
                  <h3 className="legal-clause-title">{clause.title}</h3>
                  <p className="legal-clause-body">{clause.body}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="legal-contact-card">
            <div>
              <span className="legal-contact-kicker">Official Compliance Desk</span>
              <h3 className="legal-contact-title">V Praneeta Developers Pvt. Ltd.</h3>
              <p className="legal-contact-meta">
                Email: <a href="mailto:info@praneeta.dev">info@praneeta.dev</a> · Phone:{' '}
                <a href="tel:+919133637111">+91 91336 37111</a>
                <br />
                Corporate Office: #B-506, The Platina Building, Jayabheri Enclave, Gachibowli, Hyderabad – 500032
                <br />
                Site Office: 6-109, Mokila Village, Shankarpally Mandal, Hyderabad – 501203
              </p>
            </div>
            <Link to="/contact-us" className="legal-contact-btn">
              <span>Contact Our Desk</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
      <Footer variant="base" wfPageId={config.meta.wfPage} />
    </>
  );
}

export function DisclaimerPage() {
  return <LegalPageLayout config={DISCLAIMER_CONFIG} />;
}

export function PrivacyPolicyPage() {
  return <LegalPageLayout config={PRIVACY_CONFIG} />;
}
