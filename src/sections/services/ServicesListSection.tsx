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
    image: '/images/6ac75f99d29b5eef5b6dbc62_1.avif',
    srcSet:
      '/images/6ac75f99d29b5eef5b6dbc62_1-p-500.avif 500w, /images/6ac75f99d29b5eef5b6dbc62_1-p-800.avif 800w, /images/6ac75f99d29b5eef5b6dbc62_1-p-1080.avif 1080w, /images/6ac75f99d29b5eef5b6dbc62_1.avif 1586w',
  },
  {
    count: '(02)',
    title: 'Guided Site Visits',
    slug: 'guided-site-visits',
    description:
      'Walk through completed Amity & The Patio communities and inspect Sovereign Villas at Mokila first-hand.',
    image: '/images/6ac7752aff63a23a7695325e_2.avif',
    srcSet:
      '/images/6ac7752aff63a23a7695325e_2-p-500.avif 500w, /images/6ac7752aff63a23a7695325e_2-p-800.avif 800w, /images/6ac7752aff63a23a7695325e_2.avif 1022w',
  },
  {
    count: '(03)',
    title: 'RERA & Legal Clarity',
    slug: 'rera-legal-clarity',
    description:
      'Complete HMDA layout permits, TG-RERA compliance, and pre-approved bank APF documentation.',
    image: '/images/6ac77544203ae939c6edc4b1_3.avif',
    srcSet:
      '/images/6ac77544203ae939c6edc4b1_3-p-500.avif 500w, /images/6ac77544203ae939c6edc4b1_3-p-800.avif 800w, /images/6ac77544203ae939c6edc4b1_3-p-1080.avif 1080w, /images/6ac77544203ae939c6edc4b1_3.avif 1200w',
  },
  {
    count: '(04)',
    title: 'Villa Personalization',
    slug: 'villa-personalization',
    description:
      'Thoughtful layout and interior finish customization options tailored to your family lifestyle.',
    image: '/images/6ac777306ec3f46c2755b88d_4.avif',
    srcSet:
      '/images/6ac777306ec3f46c2755b88d_4-p-500.avif 500w, /images/6ac777306ec3f46c2755b88d_4-p-800.avif 800w, /images/6ac777306ec3f46c2755b88d_4-p-1080.avif 1080w, /images/6ac777306ec3f46c2755b88d_4.avif 1500w',
  },
  {
    count: '(05)',
    title: 'NRI Concierge Desk',
    slug: 'nri-concierge-desk',
    description:
      'Dedicated support for global buyers with PoA guidance, NRE/NRO loans, and bi-monthly progress updates.',
    image: '/images/6ac775580b7b74424ee32bff_5.avif',
    srcSet:
      '/images/6ac775580b7b74424ee32bff_5-p-500.avif 500w, /images/6ac775580b7b74424ee32bff_5-p-800.avif 800w, /images/6ac775580b7b74424ee32bff_5-p-1080.avif 1080w, /images/6ac775580b7b74424ee32bff_5.avif 1200w',
  },
  {
    count: '(06)',
    title: 'Channel Partner Desk',
    slug: 'channel-partner-desk',
    description:
      'Fast 24–48 hour empanelment for TG-RERA registered realtors with transparent milestone payouts.',
    image: '/images/6ac77046c8354aae60b3356f_6.avif',
    srcSet:
      '/images/6ac77046c8354aae60b3356f_6-p-500.png 500w, /images/6ac77046c8354aae60b3356f_6.avif 1500w',
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
