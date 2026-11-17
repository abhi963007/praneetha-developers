import { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import './services-section.css';

export interface ServiceItem {
  count: string;
  title: string;
  slug: string;
  description: string;
  details: string;
  deliverables: string[];
  image: string;
  srcSet: string;
}

export const SERVICES: ServiceItem[] = [
  {
    count: '(01)',
    title: 'Gated Villa & Apartment Communities',
    slug: 'luxury-villa-communities',
    description:
      'Master-planned gated 4 & 5 BHK villa enclaves and 3 BHK high-rise towers across Mokila, Kondakal & Shankarpally.',
    details:
      'Backed by over two decades of West Hyderabad development since 2005, we build low-density villa townships (Amity, The Patio, The Santorini, PST-2) and spacious residential towers (Meridian Kondakal) featuring resort-grade clubhouses, landscaped parks, and Vaastu-compliant planning.',
    deliverables: [
      '4 & 5 BHK G+2 Villas (150–400 Sq.Yds)',
      '3 BHK High-Rise Residences (1,900–2,750 Sq.ft)',
      'Up to 40,000 Sq.ft Clubhouses & Parks',
      '24/7 Gated Security & Wide Driveways',
    ],
    image: '/images/projects/patio/hero-slide-1.webp',
    srcSet: '/images/projects/patio/hero-slide-1.webp 1200w',
  },
  {
    count: '(02)',
    title: 'Guided Site Visits',
    slug: 'guided-site-visits',
    description:
      'Tour our active Mokila (Amity, The Patio, The Santorini, Meridian) & Shankarpally (PST-2) sites with our engineering desk.',
    details:
      'Schedule a personalized walkthrough 7 days a week at our Mokila site office (6-109, Mokila Village) or Shankarpally community. Inspect ongoing RCC, brickwork, and finishing stages first-hand while reviewing floor plans and handover timelines.',
    deliverables: [
      'Guided Walkthroughs Across 5 Active Sites',
      'On-Site Floor Plan & Plot Orientation Review',
      'Live Construction Quality Inspection',
      'Direct Advisory from Mokila & Gachibowli Desks',
    ],
    image: '/images/projects/amity/night-exterior.webp',
    srcSet: '/images/projects/amity/night-exterior.webp 1200w',
  },
  {
    count: '(03)',
    title: 'HMDA & TS-RERA Clarity',
    slug: 'rera-legal-clarity',
    description:
      'Transparent HMDA layout approvals, TS-RERA registrations (P02400006593, P02400009800), and clear title documentation.',
    details:
      'Every buyer receives verified HMDA layout sanction copies, TS-RERA project registration dockets, and bank loan assistance before booking—ensuring complete peace of mind with zero hidden clauses.',
    deliverables: [
      'Amity Villas TS-RERA: P02400006593',
      'PST-2 TS-RERA: P02400009800 & HMDA Approved',
      'Clear Title & Sanction Documentation',
      'Dedicated Home Loan Coordination',
    ],
    image: '/images/service-rera-legal.jpg',
    srcSet: '/images/service-rera-legal.jpg 1536w',
  },
  {
    count: '(04)',
    title: 'Customization & Specifications',
    slug: 'villa-personalization',
    description:
      'Flexible interior customization paired with trusted brands—Hindware, Legrand, Finolex, RAK Ceramics & teak wood finishes.',
    details:
      'From East and West facing layouts to terrace home theatres and interior finish choices, our engineering team works with homeowners during construction milestones to tailor spaces around your family lifestyle.',
    deliverables: [
      'East & West Vaastu-Compliant Floor Plans',
      'RCC Framed Structure & Red Brick Masonry',
      'Varmora / RAK Tiles & Hindware CP Fittings',
      'Dedicated Terrace Home Theatre Options',
    ],
    image: '/images/projects/meridian/living-room.jpeg',
    srcSet: '/images/projects/meridian/living-room.jpeg 1200w',
  },
  {
    count: '(05)',
    title: 'NRI Concierge & Expos',
    slug: 'nri-concierge-desk',
    description:
      'Global buyer assistance across USA, Dubai & Singapore with NRI ONE EXPO outreach and monthly construction photo updates.',
    details:
      'Having connected with NRI families across the USA, Dubai, and Singapore (2023–2026), our NRI Concierge supports overseas buyers with virtual site walkthroughs, PoA guidance, NRE/NRO financing, and regular site progress galleries.',
    deliverables: [
      'NRI ONE EXPO Presence (USA · Dubai · Singapore)',
      'Live Video Tours & Monthly Site Photo Logs',
      'Power of Attorney (PoA) & NRE/NRO Support',
      'Dedicated Single-Point Relationship Manager',
    ],
    image: '/images/gallery/expo-nri-singapore-2026-1.jpeg',
    srcSet: '/images/gallery/expo-nri-singapore-2026-1.jpeg 1200w',
  },
  {
    count: '(06)',
    title: 'Channel Partner Desk',
    slug: 'channel-partner-desk',
    description:
      'Fast empanelment for registered real estate partners with verified marketing kits, floor plans, and transparent payouts.',
    details:
      'Partner with one of Mokila & Shankarpally’s most active residential developers. Empaneled channel partners receive updated inventory sheets, cropped floor plans, brochures, and dedicated co-selling support for client site visits.',
    deliverables: [
      'Quick Partner Onboarding & Empanelment',
      'Verified Brochures, Floor Plans & Site Maps',
      'Priority Client Site Visit Coordination',
      'Transparent Milestone Payout Schedule',
    ],
    image: '/images/service-channel-partner.jpg',
    srcSet: '/images/service-channel-partner.jpg 1536w',
  },
];

export function ServicesListSection() {
  const { pathname } = useLocation();
  const { slug } = useParams<{ slug?: string }>();

  const selectedService =
    pathname.startsWith('/services/') && slug
      ? SERVICES.find((s) => s.slug === slug)
      : undefined;

  useEffect(() => {
    if (selectedService) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedService]);

  return (
    <section className="section services-page-section">
      <div className="w-layout-blockcontainer container w-container">
        {selectedService && (
          <div className="svc-detail">
            <div className="svc-detail__grid">
              <div className="svc-detail__img-wrap">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="svc-detail__img"
                />
              </div>

              <div className="svc-detail__body">
                <h2 className="svc-detail__title">{selectedService.title}</h2>
                <p className="svc-detail__text">{selectedService.details}</p>

                <ul className="svc-detail__list">
                  {selectedService.deliverables.map((item) => (
                    <li key={item} className="svc-detail__list-item">
                      <span className="svc-detail__dot" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="svc-detail__actions">
                  <Link to="/contact-us" className="svc-detail__btn-primary">
                    <span>Speak with Our Team</span>
                    <span className="svc-detail__btn-arrow" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                  <Link to="/properties" className="svc-detail__btn-secondary">
                    <span>Explore Projects</span>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="services-row">
          <div className="w-dyn-list">
            <div role="list" className="service-cms-two w-dyn-items">
              {SERVICES.map((service) => (
                <div key={service.count} role="listitem" className="w-dyn-item">
                  <Link to={`/services/${service.slug}`} className="service-card w-inline-block">
                    <div className="service-card-img-box">
                      <img
                        src={service.image}
                        loading="eager"
                        alt={service.title}
                        className="service-card-img"
                      />
                    </div>
                    <div className="service-card-content">
                      <h2 className="service-card-title">{service.title}</h2>
                      <p className="service-card-desc">{service.description}</p>
                    </div>
                    <div className="primary-button card">
                      <div className="primary-button-flex property">
                        <div className="primary-button-text-wrap">
                          <div className="primary-button-text">Explore Service</div>
                          <div className="primary-button-text-hover">Explore Service</div>
                        </div>
                        <div className="primary-button-arrow-wrapper">
                          <div className="primary-button-arrow-wrap">
                            <img
                              loading="lazy"
                              src="/images/69e723100025a4ae58731b6a_0.svg"
                              alt=""
                              className="primary-button-arrow dark"
                            />
                            <img
                              loading="lazy"
                              src="/images/69e723100025a4ae58731b6a_0.svg"
                              alt=""
                              className="primary-button-arrow-hover dark"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
