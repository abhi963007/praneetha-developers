import { Link } from 'react-router-dom';
import './services-section.css';

export interface ServiceItem {
  count: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  srcSet: string;
}

export const SERVICES: ServiceItem[] = [
  {
    count: '(01)',
    title: 'Luxury Villa Communities',
    slug: 'luxury-villa-communities',
    description:
      'Master-planned gated triplex villa enclaves in Mokila–Shankarpally with resort-grade clubhouses.',
    image: '/images/service-villa-communities.jpg',
    srcSet: '/images/service-villa-communities.jpg 1536w',
  },
  {
    count: '(02)',
    title: 'Guided Site Visits',
    slug: 'guided-site-visits',
    description:
      'Walk through completed Amity & The Patio communities and inspect Sovereign Villas at Mokila first-hand.',
    image: '/images/service-guided-visits.jpg',
    srcSet: '/images/service-guided-visits.jpg 1536w',
  },
  {
    count: '(03)',
    title: 'RERA & Legal Clarity',
    slug: 'rera-legal-clarity',
    description:
      'Complete HMDA layout permits, TG-RERA compliance, and pre-approved bank APF documentation.',
    image: '/images/service-rera-legal.jpg',
    srcSet: '/images/service-rera-legal.jpg 1536w',
  },
  {
    count: '(04)',
    title: 'Villa Personalization',
    slug: 'villa-personalization',
    description:
      'Thoughtful layout and interior finish customization options tailored to your family lifestyle.',
    image: '/images/service-villa-personalization.jpg',
    srcSet: '/images/service-villa-personalization.jpg 1536w',
  },
  {
    count: '(05)',
    title: 'NRI Concierge Desk',
    slug: 'nri-concierge-desk',
    description:
      'Dedicated support for global buyers with PoA guidance, NRE/NRO loans, and bi-monthly progress updates.',
    image: '/images/service-nri-concierge.jpg',
    srcSet: '/images/service-nri-concierge.jpg 1536w',
  },
  {
    count: '(06)',
    title: 'Channel Partner Desk',
    slug: 'channel-partner-desk',
    description:
      'Fast 24–48 hour empanelment for TG-RERA registered realtors with transparent milestone payouts.',
    image: '/images/service-channel-partner.jpg',
    srcSet: '/images/service-channel-partner.jpg 1536w',
  },
];

export function ServicesListSection() {
  return (
    <section className="section services-page-section">
      <div className="w-layout-blockcontainer container w-container">
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
