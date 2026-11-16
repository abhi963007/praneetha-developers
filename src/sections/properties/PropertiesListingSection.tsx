import { Link, useLocation, useParams } from 'react-router-dom';
import { CATEGORY_LINKS } from '../../types/site';
import '../home/home-properties.css';

export interface PropertySlide {
  src: string;
  srcSet: string;
}

export interface PropertyItem {
  slug: string;
  categorySlug: string;
  badge: string;
  rooms: string;
  sqft: string;
  location: string;
  name: string;
  price: string;
  slides: PropertySlide[];
}

export const PROPERTIES_DATA: PropertyItem[] = [
  {
    slug: 'sovereign-villas-mokila',
    categorySlug: 'villas-ongoing',
    badge: 'Flagship Launch',
    rooms: '3 & 4 BHK',
    sqft: '2,250–2,850 sqft',
    location: 'Mokila–Shankarpally, Hyderabad',
    name: 'Pranitha Sovereign Villas',
    price: '₹1.50 Cr – ₹2.00 Cr',
    slides: [
      {
        src: '/images/project-sovereign-villas.jpg',
        srcSet: '/images/project-sovereign-villas.jpg 1200w',
      },
      {
        src: '/images/6ad5c70c369770e5b7b22486_2.avif',
        srcSet:
          '/images/6ad5c70c369770e5b7b22486_2-p-500.avif 500w, /images/6ad5c70c369770e5b7b22486_2-p-800.avif 800w, /images/6ad5c70c369770e5b7b22486_2-p-1080.avif 1080w, /images/6ad5c70c369770e5b7b22486_2.avif 1520w',
      },
      {
        src: '/images/6ad5c86e09c44abef3062622_Sunlit%20Modern%20Interior%20with%20Pool%20Views.avif',
        srcSet:
          '/images/6ad5c86e09c44abef3062622_Sunlit%20Modern%20Interior%20with%20Pool%20Views-p-500.avif 500w, /images/6ad5c86e09c44abef3062622_Sunlit%20Modern%20Interior%20with%20Pool%20Views-p-800.avif 800w, /images/6ad5c86e09c44abef3062622_Sunlit%20Modern%20Interior%20with%20Pool%20Views-p-1080.avif 1080w, /images/6ad5c86e09c44abef3062622_Sunlit%20Modern%20Interior%20with%20Pool%20Views.avif 1519w',
      },
      {
        src: '/images/6ad5c895b3e3cd3cf90aab98_Sunset%20Waterfront%20Luxury%20Bedroom.avif',
        srcSet:
          '/images/6ad5c895b3e3cd3cf90aab98_Sunset%20Waterfront%20Luxury%20Bedroom-p-500.avif 500w, /images/6ad5c895b3e3cd3cf90aab98_Sunset%20Waterfront%20Luxury%20Bedroom-p-800.avif 800w, /images/6ad5c895b3e3cd3cf90aab98_Sunset%20Waterfront%20Luxury%20Bedroom-p-1080.avif 1080w, /images/6ad5c895b3e3cd3cf90aab98_Sunset%20Waterfront%20Luxury%20Bedroom.avif 1518w',
      },
    ],
  },
  {
    slug: 'santorini-villas-mokila',
    categorySlug: 'villas-ongoing',
    badge: 'TG-RERA P02400009246',
    rooms: '4 BHK',
    sqft: '3,820–4,900 sqft',
    location: 'Mokila, Hyderabad',
    name: 'Pranitha Santorini Villas',
    price: '₹3.82 Cr+',
    slides: [
      {
        src: '/images/project-santorini-villas.jpg',
        srcSet: '/images/project-santorini-villas.jpg 1200w',
      },
      {
        src: '/images/6ad5c9cece283b927f0c5395_Warm%20Minimalist%20Open-Plan%20Retreat.avif',
        srcSet:
          '/images/6ad5c9cece283b927f0c5395_Warm%20Minimalist%20Open-Plan%20Retreat-p-500.avif 500w, /images/6ad5c9cece283b927f0c5395_Warm%20Minimalist%20Open-Plan%20Retreat-p-800.avif 800w, /images/6ad5c9cece283b927f0c5395_Warm%20Minimalist%20Open-Plan%20Retreat-p-1080.avif 1080w, /images/6ad5c9cece283b927f0c5395_Warm%20Minimalist%20Open-Plan%20Retreat.avif 1518w',
      },
      {
        src: '/images/6ad5ca0e6ddbb8d7751d3967_Sunlit%20Modern%20Luxury%20Bedroom.avif',
        srcSet:
          '/images/6ad5ca0e6ddbb8d7751d3967_Sunlit%20Modern%20Luxury%20Bedroom-p-500.avif 500w, /images/6ad5ca0e6ddbb8d7751d3967_Sunlit%20Modern%20Luxury%20Bedroom-p-800.avif 800w, /images/6ad5ca0e6ddbb8d7751d3967_Sunlit%20Modern%20Luxury%20Bedroom-p-1080.avif 1080w, /images/6ad5ca0e6ddbb8d7751d3967_Sunlit%20Modern%20Luxury%20Bedroom.avif 1518w',
      },
      {
        src: '/images/6ad5ca38ce283b927f0c798e_Warm%20Modern%20Kitchen%20and%20Garden%20Dining.avif',
        srcSet:
          '/images/6ad5ca38ce283b927f0c798e_Warm%20Modern%20Kitchen%20and%20Garden%20Dining-p-500.avif 500w, /images/6ad5ca38ce283b927f0c798e_Warm%20Modern%20Kitchen%20and%20Garden%20Dining-p-800.avif 800w, /images/6ad5ca38ce283b927f0c798e_Warm%20Modern%20Kitchen%20and%20Garden%20Dining-p-1080.avif 1080w, /images/6ad5ca38ce283b927f0c798e_Warm%20Modern%20Kitchen%20and%20Garden%20Dining.avif 1518w',
      },
    ],
  },
  {
    slug: 'amity-villas-mokila',
    categorySlug: 'villas-completed',
    badge: 'Completed',
    rooms: '4 BHK',
    sqft: '2,960–3,399 sqft',
    location: 'Mokila, Hyderabad',
    name: 'Pranitha Amity Villas',
    price: '₹2.96 Cr+',
    slides: [
      {
        src: '/images/project-amity-villas.jpg',
        srcSet: '/images/project-amity-villas.jpg 1200w',
      },
      {
        src: '/images/6ad5ca9e2e57b218a8207223_Sunlit%20Modern%20Living%20Space.avif',
        srcSet:
          '/images/6ad5ca9e2e57b218a8207223_Sunlit%20Modern%20Living%20Space-p-500.avif 500w, /images/6ad5ca9e2e57b218a8207223_Sunlit%20Modern%20Living%20Space-p-800.avif 800w, /images/6ad5ca9e2e57b218a8207223_Sunlit%20Modern%20Living%20Space-p-1080.avif 1080w, /images/6ad5ca9e2e57b218a8207223_Sunlit%20Modern%20Living%20Space.avif 1586w',
      },
      {
        src: '/images/6ad5cb0df82c8cedee293857_Sunlit%20Luxury%20Living%20Room%20by%20the%20Pool.avif',
        srcSet:
          '/images/6ad5cb0df82c8cedee293857_Sunlit%20Luxury%20Living%20Room%20by%20the%20Pool-p-500.avif 500w, /images/6ad5cb0df82c8cedee293857_Sunlit%20Luxury%20Living%20Room%20by%20the%20Pool-p-800.avif 800w, /images/6ad5cb0df82c8cedee293857_Sunlit%20Luxury%20Living%20Room%20by%20the%20Pool-p-1080.avif 1080w, /images/6ad5cb0df82c8cedee293857_Sunlit%20Luxury%20Living%20Room%20by%20the%20Pool.avif 1586w',
      },
      {
        src: '/images/6ad5cae588e811ebd07752ea_Sunlit%20Luxury%20Bedroom%20Retreat.avif',
        srcSet:
          '/images/6ad5cae588e811ebd07752ea_Sunlit%20Luxury%20Bedroom%20Retreat-p-500.avif 500w, /images/6ad5cae588e811ebd07752ea_Sunlit%20Luxury%20Bedroom%20Retreat-p-800.avif 800w, /images/6ad5cae588e811ebd07752ea_Sunlit%20Luxury%20Bedroom%20Retreat-p-1080.avif 1080w, /images/6ad5cae588e811ebd07752ea_Sunlit%20Luxury%20Bedroom%20Retreat.avif 1585w',
      },
    ],
  },
  {
    slug: 'the-patio-mokila',
    categorySlug: 'villas-completed',
    badge: 'Completed',
    rooms: '4 BHK',
    sqft: '4,320–4,800 sqft',
    location: 'Mokila–Shankarpally, Hyderabad',
    name: 'Pranitha The Patio',
    price: '₹4.32 Cr+',
    slides: [
      {
        src: '/images/project-the-patio.jpg',
        srcSet: '/images/project-the-patio.jpg 1200w',
      },
      {
        src: '/images/6ad5cb5bd747f3fbbe658b02_Airy%20Modern%20Tropical%20Home%20Interior.avif',
        srcSet:
          '/images/6ad5cb5bd747f3fbbe658b02_Airy%20Modern%20Tropical%20Home%20Interior-p-500.avif 500w, /images/6ad5cb5bd747f3fbbe658b02_Airy%20Modern%20Tropical%20Home%20Interior-p-800.avif 800w, /images/6ad5cb5bd747f3fbbe658b02_Airy%20Modern%20Tropical%20Home%20Interior-p-1080.avif 1080w, /images/6ad5cb5bd747f3fbbe658b02_Airy%20Modern%20Tropical%20Home%20Interior.avif 1585w',
      },
      {
        src: '/images/6ad5cba0bbd6c56e8979dea3_Luxurious%20Tropical%20Gallery%20Overlooking%20Living%20Space.avif',
        srcSet:
          '/images/6ad5cba0bbd6c56e8979dea3_Luxurious%20Tropical%20Gallery%20Overlooking%20Living%20Space-p-500.avif 500w, /images/6ad5cba0bbd6c56e8979dea3_Luxurious%20Tropical%20Gallery%20Overlooking%20Living%20Space-p-800.avif 800w, /images/6ad5cba0bbd6c56e8979dea3_Luxurious%20Tropical%20Gallery%20Overlooking%20Living%20Space-p-1080.avif 1080w, /images/6ad5cba0bbd6c56e8979dea3_Luxurious%20Tropical%20Gallery%20Overlooking%20Living%20Space.avif 1586w',
      },
      {
        src: '/images/6ad5cba3b3e3cd3cf90cb16a_Tropical%20Modern%20Luxury%20Bedroom.avif',
        srcSet:
          '/images/6ad5cba3b3e3cd3cf90cb16a_Tropical%20Modern%20Luxury%20Bedroom-p-500.avif 500w, /images/6ad5cba3b3e3cd3cf90cb16a_Tropical%20Modern%20Luxury%20Bedroom-p-800.avif 800w, /images/6ad5cba3b3e3cd3cf90cb16a_Tropical%20Modern%20Luxury%20Bedroom-p-1080.avif 1080w, /images/6ad5cba3b3e3cd3cf90cb16a_Tropical%20Modern%20Luxury%20Bedroom.avif 1585w',
      },
    ],
  },
  {
    slug: 'meridian-heights-kokapet',
    categorySlug: 'apartments',
    badge: 'Ongoing',
    rooms: '2.5 & 3 BHK',
    sqft: '1,450–2,150 sqft',
    location: 'Kondakal–Kokapet, Hyderabad',
    name: 'Pranitha Meridian Heights',
    price: '₹88L – ₹1.35 Cr',
    slides: [
      {
        src: '/images/project-meridian-heights.jpg',
        srcSet: '/images/project-meridian-heights.jpg 1200w',
      },
      {
        src: '/images/service-villa-personalization.jpg',
        srcSet: '/images/service-villa-personalization.jpg 1536w',
      },
      {
        src: '/images/6ad5c9cece283b927f0c5395_Warm%20Minimalist%20Open-Plan%20Retreat.avif',
        srcSet:
          '/images/6ad5c9cece283b927f0c5395_Warm%20Minimalist%20Open-Plan%20Retreat-p-500.avif 500w, /images/6ad5c9cece283b927f0c5395_Warm%20Minimalist%20Open-Plan%20Retreat-p-800.avif 800w, /images/6ad5c9cece283b927f0c5395_Warm%20Minimalist%20Open-Plan%20Retreat-p-1080.avif 1080w, /images/6ad5c9cece283b927f0c5395_Warm%20Minimalist%20Open-Plan%20Retreat.avif 1518w',
      },
      {
        src: '/images/service-nri-concierge.jpg',
        srcSet: '/images/service-nri-concierge.jpg 1536w',
      },
    ],
  },
  {
    slug: 'singapur-town-plots',
    categorySlug: 'plots-coming-soon',
    badge: 'Coming Soon',
    rooms: 'Plots',
    sqft: '200–500 Sq. Yds',
    location: 'Shankarpally, Hyderabad',
    name: 'Pranitha Singapur Town — Phase II',
    price: 'Pre-Launch',
    slides: [
      {
        src: '/images/project-singapur-town.jpg',
        srcSet: '/images/project-singapur-town.jpg 1200w',
      },
      {
        src: '/images/hero-about.png',
        srcSet: '/images/hero-about.png 1536w',
      },
      {
        src: '/images/service-rera-legal.jpg',
        srcSet: '/images/service-rera-legal.jpg 1536w',
      },
      {
        src: '/images/hero-properties.png',
        srcSet: '/images/hero-properties.png 1536w',
      },
    ],
  },
];

export function PropertyCard({
  property,
  variant = 'properties',
}: {
  property: PropertyItem;
  variant?: 'home' | 'properties';
}) {
  const sizes =
    variant === 'home' ? '100vw' : '(max-width: 767px) 100vw, (max-width: 991px) 727px, 939px';
  const detailPath = `/property/${property.slug}`;

  return (
    <div role="listitem" className="w-dyn-item">
      <div className="property-box">
        <div className="property-image-box">
          <div className="property-badge">{property.badge}</div>
          <div
            data-delay="4000"
            data-animation="slide"
            className="property-slider w-slider"
            data-autoplay="false"
            data-easing="ease"
            data-hide-arrows="false"
            data-disable-swipe="false"
            data-autoplay-limit="0"
            data-nav-spacing="3"
            data-duration="500"
            data-infinite="true"
          >
            <div className="property-slider-mask w-slider-mask">
              {property.slides.map((slide, idx) => (
                <div key={idx} className="property-slide w-slide">
                  <div className="property-gallery-image-box">
                    <img
                      loading="lazy"
                      src={slide.src}
                      alt=""
                      sizes={sizes}
                      srcSet={slide.srcSet}
                      className="property-gallery-image"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="property-arrow left w-slider-arrow-left">
              <div className="property-arrow-icon w-embed">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8L2 8" stroke="currentColor" strokeWidth="2" />
                  <path d="M9 15L2 8L9 1" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <div className="property-arrow right w-slider-arrow-right">
              <div className="property-arrow-icon w-embed">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 8H14" stroke="currentColor" strokeWidth="2" />
                  <path d="M7 1L14 8L7 15" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <div className="property-nav w-slider-nav w-round" />
          </div>
        </div>
        <div className="property-content">
          <div className="property-room-wrap">
            <div className="property-room-info">
              <div className="property-room">
                <img
                  loading="lazy"
                  src="/images/6849015224030513cdc67ac9_Property%20Icon-3.svg"
                  alt=""
                  className="property-icon"
                />
                <p className="property-room-count">{property.rooms}</p>
              </div>
              <div className="property-room">
                <img
                  loading="lazy"
                  src="/images/6849015224030513cdc67ac5_Property%20Icon-1.svg"
                  alt=""
                  className="property-icon"
                />
                <p className="property-room-count">{property.sqft}</p>
              </div>
            </div>
            <div className="property-room">
              <img
                loading="lazy"
                src="/images/6ad5f0689b764b5bab687967_maps-and-flags.png"
                alt=""
                className="property-icon"
              />
              <p className="property-loc">{property.location}</p>
            </div>
          </div>
          <div className="property-name-box">
            <Link to={detailPath} className="property-name-link w-inline-block">
              {variant === 'home' ? (
                <h3 className="property-name">{property.name}</h3>
              ) : (
                <h2 className="property-name">{property.name}</h2>
              )}
            </Link>
            <div className="property-price-box">
              <p className="property-price">{property.price}</p>
              <p className="property-price-info">{'/\u00a0\u00a0Guide price'}</p>
            </div>
          </div>
        </div>
        <Link to={detailPath} className="primary-button card w-inline-block">
          <div className="primary-button-flex property">
            <div className="primary-button-text-wrap">
              <div className="primary-button-text">View Details</div>
              <div className="primary-button-text-hover">View Details</div>
            </div>
            <div className="primary-button-arrow-wrapper">
              <div className="primary-button-arrow-wrap">
                <img
                  loading="lazy"
                  src="/images/69e723100025a4ae58731b6a_0.svg"
                  alt=""
                  className="primary-button-arrow"
                />
                <img
                  loading="lazy"
                  src="/images/69e723100025a4ae58731b6a_0.svg"
                  alt=""
                  className="primary-button-arrow-hover"
                />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export function PropertiesListingSection() {
  const { pathname } = useLocation();
  const { slug } = useParams<{ slug?: string }>();
  const isAll = !slug || pathname === '/properties';

  const matching = slug
    ? PROPERTIES_DATA.filter((p) => p.categorySlug === slug)
    : PROPERTIES_DATA;
  const visibleProperties = matching.length > 0 ? matching : PROPERTIES_DATA;

  return (
    <section className="section home-properties-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="categories-wrap">
          <div className="catergories-filter two">
            <div className="view-all-button w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <Link
                    to="/properties"
                    aria-current={isAll ? 'page' : undefined}
                    className={`cat-box two w-inline-block${isAll ? ' w--current' : ''}`}
                  >
                    <div className="cat-content two">
                      <p className="cat-title two">Explore Properties</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-dyn-list">
              <div role="list" className="cat-cms two w-dyn-items">
                {CATEGORY_LINKS.map((cat) => {
                  const active = pathname === cat.to;
                  return (
                    <div key={cat.to} role="listitem" className="w-dyn-item">
                      <Link
                        to={cat.to}
                        aria-current={active ? 'page' : undefined}
                        className={`cat-filter-list w-inline-block${active ? ' w--current' : ''}`}
                      >
                        <div className="cat-content two">
                          <p className="cat-title two">{cat.label}</p>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="w-dyn-list">
          <div role="list" className="property-grid w-dyn-items">
            {visibleProperties.map((property) => (
              <PropertyCard key={property.slug} property={property} variant="properties" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
