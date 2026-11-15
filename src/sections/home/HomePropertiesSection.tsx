import { PROPERTIES_DATA, PropertyCard } from '../properties/PropertiesListingSection';

export function HomePropertiesSection() {
  return (
    <section id="Properties" className="section">
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
            <p className="section-subtitle">Our Projects</p>
          </div>
          <h2 className="section-title">
            Luxury Villas &amp; Homes in<span className="sectitle-br"> </span>West Hyderabad
          </h2>
        </div>
        <div className="w-dyn-list">
          <div role="list" className="property-grid w-dyn-items">
            {PROPERTIES_DATA.map((property) => (
              <PropertyCard key={property.slug} property={property} variant="home" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
