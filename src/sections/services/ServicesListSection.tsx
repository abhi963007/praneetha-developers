import { Link } from 'react-router-dom';

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
    title: 'Property Buying',
    slug: 'property-buying',
    description:
      'Find the right property with expert guidance from your first search through the final decision.',
    image: '/images/6ac75f99d29b5eef5b6dbc62_1.avif',
    srcSet:
      '/images/6ac75f99d29b5eef5b6dbc62_1-p-500.avif 500w, /images/6ac75f99d29b5eef5b6dbc62_1-p-800.avif 800w, /images/6ac75f99d29b5eef5b6dbc62_1-p-1080.avif 1080w, /images/6ac75f99d29b5eef5b6dbc62_1.avif 1586w',
  },
  {
    count: '(02)',
    title: 'Property Selling',
    slug: 'property-selling',
    description:
      'Position your property effectively and connect with qualified buyers through a focused sales strategy.',
    image: '/images/6ac7752aff63a23a7695325e_2.avif',
    srcSet:
      '/images/6ac7752aff63a23a7695325e_2-p-500.avif 500w, /images/6ac7752aff63a23a7695325e_2-p-800.avif 800w, /images/6ac7752aff63a23a7695325e_2.avif 1022w',
  },
  {
    count: '(03)',
    title: 'Property Leasing',
    slug: 'property-leasing',
    description:
      'Find flexible rental opportunities that match your location, lifestyle, and budget.',
    image: '/images/6ac77544203ae939c6edc4b1_3.avif',
    srcSet:
      '/images/6ac77544203ae939c6edc4b1_3-p-500.avif 500w, /images/6ac77544203ae939c6edc4b1_3-p-800.avif 800w, /images/6ac77544203ae939c6edc4b1_3-p-1080.avif 1080w, /images/6ac77544203ae939c6edc4b1_3.avif 1200w',
  },
  {
    count: '(04)',
    title: 'Property Management',
    slug: 'property-management',
    description:
      'Keep your property running smoothly with reliable support for tenants, maintenance, and daily operations.',
    image: '/images/6ac777306ec3f46c2755b88d_4.avif',
    srcSet:
      '/images/6ac777306ec3f46c2755b88d_4-p-500.avif 500w, /images/6ac777306ec3f46c2755b88d_4-p-800.avif 800w, /images/6ac777306ec3f46c2755b88d_4-p-1080.avif 1080w, /images/6ac777306ec3f46c2755b88d_4.avif 1500w',
  },
  {
    count: '(05)',
    title: 'Investment Guidance',
    slug: 'investment-guidance',
    description:
      'Identify opportunities and build a real estate portfolio aligned with your long-term goals.',
    image: '/images/6ac775580b7b74424ee32bff_5.avif',
    srcSet:
      '/images/6ac775580b7b74424ee32bff_5-p-500.avif 500w, /images/6ac775580b7b74424ee32bff_5-p-800.avif 800w, /images/6ac775580b7b74424ee32bff_5-p-1080.avif 1080w, /images/6ac775580b7b74424ee32bff_5.avif 1200w',
  },
  {
    count: '(06)',
    title: 'Market Advisory',
    slug: 'market-advisory',
    description:
      'Make informed property decisions with practical insights into market conditions and local trends.',
    image: '/images/6ac77046c8354aae60b3356f_6.avif',
    srcSet:
      '/images/6ac77046c8354aae60b3356f_6-p-500.png 500w, /images/6ac77046c8354aae60b3356f_6.avif 1500w',
  },
];

export function ServicesListSection() {
  return (
    <section className="section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="services-row">
          <div className="w-dyn-list">
            <div role="list" className="service-cms-two w-dyn-items">
              {SERVICES.map((service) => (
                <div key={service.count} role="listitem" className="w-dyn-item">
                  <Link to={`/services/${service.slug}`} className="service-box-two w-inline-block">
                    <div className="service-title-box">
                      <p className="service-count">{service.count}</p>
                      <h2 className="service-title two">{service.title}</h2>
                    </div>
                    <div className="service-image-box">
                      <div data-parallax="trigger" className="parallax-wrapper">
                        <img
                          src={service.image}
                          loading="lazy"
                          data-parallax="target"
                          alt=""
                          sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 939px"
                          srcSet={service.srcSet}
                          className="parallax-image"
                        />
                      </div>
                    </div>
                    <p className="service-text">{service.description}</p>
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
