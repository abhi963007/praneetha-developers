import { Link } from 'react-router-dom';
import { SERVICES } from '../services/ServicesListSection';

export function HomeServicesSection() {
  return (
    <section
      data-wf-target='[[["69e231c0aededb9fade4ee77","89c3349c-01c9-062e-c2f8-5fbadeb28b02"],[]]]'
      className="section of-visible dark"
    >
      <div className="bg service-bg" />
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
            <p className="section-subtitle">Our Services</p>
          </div>
          <h2 className="section-title light">
            Everything You Need to<span className="sectitle-br"> </span>Move With Confidence.
          </h2>
        </div>
        <div className="service-cms w-dyn-list">
          <div role="list" className="services-flex w-dyn-items">
            {SERVICES.slice(0, 4).map((service) => (
              <div key={service.count} role="listitem" className="service-item w-dyn-item">
                <Link
                  data-animate="service-zoom-in"
                  to={`/services/${service.slug}`}
                  className="service-box w-inline-block"
                >
                  <div className="service-title-box">
                    <p className="service-count">{service.count}</p>
                    <h3 className="service-title">{service.title}</h3>
                  </div>
                  <div className="service-image-box two">
                    <img
                      src={service.image}
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet={service.srcSet}
                      className="service-image"
                    />
                  </div>
                  <p className="service-text">{service.description}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
