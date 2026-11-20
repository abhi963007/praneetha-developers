import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { CATEGORY_LINKS } from '../../types/site';
import '../home/home-properties.css';
import './property-detail-panel.css';

export interface PropertySlide {
  src: string;
  srcSet: string;
}

export interface PropertyFloorPlan {
  label: string;
  src: string;
}

export interface PropertyItem {
  slug: string;
  categorySlug: 'ongoing' | 'upcoming' | 'completed';
  badge: string;
  isNewLaunch?: boolean;
  rooms: string;
  sqft: string;
  location: string;
  name: string;
  price: string;
  sublabel: string;
  scale: string;
  handover: string;
  rera?: string;
  overview: string;
  highlights: string[];
  mapUrl?: string;
  slides: PropertySlide[];
  floorPlans?: PropertyFloorPlan[];
}

const LEGACY_CATEGORY_MAP: Record<string, string> = {
  'villas-ongoing': 'ongoing',
  apartments: 'ongoing',
  'villas-upcoming': 'upcoming',
  'plots-coming-soon': 'upcoming',
  'villas-completed': 'completed',
};

function normalizeCategorySlug(raw: string): string {
  return LEGACY_CATEGORY_MAP[raw] ?? raw;
}

export const PROPERTIES_DATA: PropertyItem[] = [
  {
    slug: 'lakshmi-nivas-kardanur',
    categorySlug: 'ongoing',
    badge: 'New Launch',
    isNewLaunch: true,
    rooms: 'G+2 Luxury Villas',
    sqft: '40 ft Spinal · 30 ft Avenues',
    location: 'Kardanur, West Hyderabad',
    name: "Pranitha's Lakshmi Nivas",
    price: 'New Launch · Kardanur',
    sublabel: 'Near Kollur & Mokila · Clubhouse',
    scale: 'Master-Planned G+2 Gated Villa Community',
    handover: 'Ongoing (New Launch)',
    rera: 'HMDA & TG-RERA Compliant',
    overview:
      "Pranitha's Lakshmi Nivas is our flagship newly launched G+2 luxury gated villa community in Kardanur, strategically positioned along the Kardanur–Kollur–Mokila growth belt of West Hyderabad. Designed around a 40 ft spinal master road, 30 ft internal residential avenues, landscaped green corridors, underground utilities, and a grand residents clubhouse, it brings low-density villa living minutes from ORR Exit 2, Kokapet Neopolis, and the Financial District.",
    highlights: [
      'New Launch · Kardanur',
      'G+2 Luxury Villas',
      '40 ft Spinal & 30 ft Internal Roads',
      'Grand Clubhouse & Open Greens',
      'Quick Access to Kollur & Mokila',
    ],
    slides: [
      { src: '/video/hero-final.jpg', srcSet: '/video/hero-final.jpg 1200w' },
      { src: '/images/how-we-work-villa.jpg', srcSet: '/images/how-we-work-villa.jpg 1200w' },
      { src: '/images/portfolio-villas-ongoing.jpg', srcSet: '/images/portfolio-villas-ongoing.jpg 1200w' },
    ],
  },
  {
    slug: 'amity-villas-mokila',
    categorySlug: 'ongoing',
    badge: 'May 2027 · RERA P02400006593',
    rooms: '5 BHK · 76 Villas',
    sqft: '3,300 sqft',
    location: 'Mokila, West Hyderabad',
    name: 'Praneeta Amity Villas',
    price: 'May 2027 Handover',
    sublabel: '6.5 Acres · 200 Sq.Yds',
    scale: '6.5 Acres · 76 Triplex Villas',
    handover: 'May 2027 (Under-Construction)',
    rera: 'TG-RERA: P02400006593',
    overview:
      'Located in the heart of Mokila, Amity Villas is an exclusive gated community of 76 G+2 5 BHK luxury triplex villas designed for modern families—combining contemporary architecture, curated amenities, and 10–15 minute access to ORR Exit 2 and Neopolis.',
    highlights: ['G+2 5 BHK Triplex', '200 Sq.Yds Plot', '3,300 Sft Built-up', '10 Min to ORR Exit 2', '15 Min to Neopolis'],
    mapUrl: 'https://www.google.com/maps?q=17.4432784,78.197134',
    slides: [
      { src: '/images/projects/amity/night-exterior.webp', srcSet: '/images/projects/amity/night-exterior.webp 1200w' },
      { src: '/images/projects/amity/showcase-card.webp', srcSet: '/images/projects/amity/showcase-card.webp 1200w' },
      { src: '/images/projects/amity/hero-banner.webp', srcSet: '/images/projects/amity/hero-banner.webp 1200w' },
    ],
    floorPlans: [
      { label: 'Amity Villas — Site Master Layout', src: '/images/projects/amity/site-layout.avif' },
    ],
  },
  {
    slug: 'the-patio-mokila',
    categorySlug: 'ongoing',
    badge: 'Dec 2027 · RERA P02400009076',
    rooms: '5 BHK · 175 Villas',
    sqft: '4,254–4,615 sqft',
    location: 'Mokila, West Hyderabad',
    name: 'Praneeta The Patio Villas',
    price: 'Dec 2027 Handover',
    sublabel: '20.2 Acres (Ph-I: 9.2 Ac) · Clubhouse',
    scale: '20.2 Acres (Phase-I: 9.2 Acres) · 175 Courtyard Villas',
    handover: 'December 2027 (Under-Construction)',
    rera: 'TG-RERA: P02400009076 / P02400008328',
    overview:
      'A 20.2-acre luxury villa township (9.2-acre Phase-I layout) focused on open spaces, landscaped courtyards, and seamless indoor-outdoor living—anchored by a 40,000 sq.ft central clubhouse, EV charging, guest rooms, and badminton courts.',
    highlights: ['300 & 400 Sq.Yds', '4,254–4,615 Sft', '40,000 Sft Central Clubhouse', 'EV Charging & Guest Rooms', 'Badminton & Yoga Park'],
    mapUrl: 'https://www.google.com/maps?q=17.445401,78.194656',
    slides: [
      { src: '/images/projects/patio/hero-slide-1.webp', srcSet: '/images/projects/patio/hero-slide-1.webp 1200w' },
      { src: '/images/projects/patio/exterior.webp', srcSet: '/images/projects/patio/exterior.webp 1200w' },
      { src: '/images/projects/patio/hero-slide-2.webp', srcSet: '/images/projects/patio/hero-slide-2.webp 1200w' },
    ],
    floorPlans: [
      { label: 'Master Site Layout', src: '/images/projects/patio/master-layout.webp' },
      { label: 'East Facing Villa Plan', src: '/images/projects/patio/floor-plan-east.webp' },
      { label: 'West Facing Villa Plan', src: '/images/projects/patio/floor-plan-west.webp' },
    ],
  },
  {
    slug: 'santorini-villas-mokila',
    categorySlug: 'ongoing',
    badge: 'Dec 2027 · Under-Construction',
    rooms: '5 BHK · 231 Villas',
    sqft: '3,277–4,051 sqft',
    location: 'Mokila, West Hyderabad',
    name: 'Praneeta The Santorini Villas',
    price: 'Dec 2027 Handover',
    sublabel: '23 Acres · Home Theatre',
    scale: '23 Acres · 231 Villas',
    handover: 'December 2027 (Under-Construction)',
    overview:
      'Inspired by the iconic Greek architecture of Santorini, this 23-acre Mokila community offers whitewashed facades, blue accents, landscaped parks, and dedicated in-villa home theatre rooms.',
    highlights: ['222 & 267 Sq.Yds', '3,277 & 4,051 Sft', 'Dedicated Home Theatre', 'EV Charging & Clubhouse', '10 Min to ORR Exit 2'],
    mapUrl: 'https://www.google.com/maps/place/Santorini+Villas,+Mokila,+Hyderabad/@17.4264796,78.1886613,17z',
    slides: [
      { src: '/images/projects/santorini/hero-slide-1.webp', srcSet: '/images/projects/santorini/hero-slide-1.webp 1200w' },
      { src: '/images/projects/santorini/exterior.webp', srcSet: '/images/projects/santorini/exterior.webp 1200w' },
      { src: '/images/projects/santorini/courtyard-1.webp', srcSet: '/images/projects/santorini/courtyard-1.webp 1200w' },
    ],
    floorPlans: [
      { label: 'Santorini Villas — Master Plan', src: '/images/projects/santorini/master-plan.webp' },
    ],
  },
  {
    slug: 'meridian-kondakal',
    categorySlug: 'ongoing',
    badge: 'Dec 2028 · Under-Construction',
    rooms: '3 BHK · 88 Flats',
    sqft: '1,900 / 2,250 / 2,750 sqft',
    location: 'Kondakal, Near Mokila, Hyderabad',
    name: 'Praneeta Meridian',
    price: 'Dec 2028 Handover',
    sublabel: '11 Floors · 243 Parks',
    scale: '0.98 Acre · 1 Tower · 11 Floors · 88 Units',
    handover: 'December 2028 (Under-Construction)',
    overview:
      'An 11-floor luxury 3 BHK residential tower in Kondakal Extension near Mokila featuring 8 spacious flats per floor, 3 high-speed passenger lifts + 1 fire lift, exclusive clubhouse, 7m perimeter driveway, and 243 car parks across 2 basements.',
    highlights: ['8 Flats / Floor', '3 High-Speed + 1 Fire Lift', '1,900 / 2,250 / 2,750 Sft', '243 Basement Car Parks', 'Exclusive Clubhouse'],
    mapUrl: 'https://maps.app.goo.gl/NThjHwjhG3vtiV83A?g_st=ic',
    slides: [
      { src: '/images/projects/meridian/showcase-card.webp', srcSet: '/images/projects/meridian/showcase-card.webp 1200w' },
      { src: '/images/projects/meridian/exterior-render.jpeg', srcSet: '/images/projects/meridian/exterior-render.jpeg 1200w' },
      { src: '/images/projects/meridian/living-room.jpeg', srcSet: '/images/projects/meridian/living-room.jpeg 1200w' },
    ],
    floorPlans: [
      { label: 'Master Floor Plan (8 Flats / Floor)', src: '/images/projects/meridian/master-plan.png' },
      { label: 'Unit 01 — 2,750 Sq.ft (3 BHK)', src: '/images/projects/meridian/unit-01-2750.png' },
      { label: 'Unit 02 & 03 — 1,900 Sq.ft (3 BHK)', src: '/images/projects/meridian/unit-02-03-1900.png' },
      { label: 'Unit 06 & 07 — 2,250 Sq.ft (3 BHK)', src: '/images/projects/meridian/unit-06-07-2250.png' },
    ],
  },
  {
    slug: 'singapur-town-phase-2',
    categorySlug: 'ongoing',
    badge: 'Dec 2027 · RERA P02400009800',
    rooms: '4 BHK · 35 Villas',
    sqft: '2,290–2,323 sqft',
    location: 'West Hyderabad',
    name: 'Praneeta Singapur Town — Phase II',
    price: 'Dec 2027 Handover',
    sublabel: '2.25 Acres · 150 Sq.Yds',
    scale: '2 Acres 10 Guntas · 35 Luxury Villas',
    handover: 'December 2027 (Ongoing)',
    rera: 'TS RERA: P02400009800 · HMDA Approved',
    overview:
      'Crafted in association with Tricore Projects Pvt Ltd in West Hyderabad, Phase-2 features 35 HMDA & TS-RERA approved G+2 4 BHK villas on 150 Sq.Yds plots with terrace home theatre, gym, banquet hall, yoga area, and convenient connectivity to the Kondakal IT SEZ and Mokila corridor.',
    highlights: ['G+2 4 BHK (150 Sq.Yds)', 'East 2,290 / West 2,323 Sft', 'Home Theatre on Terrace', 'Gym & Banquet Hall', '12 Min to Kondakal IT SEZ'],
    slides: [
      { src: '/images/projects/pst2/street-view.png', srcSet: '/images/projects/pst2/street-view.png 1200w' },
      { src: '/images/projects/pst2/villa-09.png', srcSet: '/images/projects/pst2/villa-09.png 1200w' },
      { src: '/images/projects/pst2/amenity-gym.png', srcSet: '/images/projects/pst2/amenity-gym.png 1200w' },
      { src: '/images/projects/pst2/amenity-banquet.png', srcSet: '/images/projects/pst2/amenity-banquet.png 1200w' },
    ],
    floorPlans: [
      { label: 'Approved Site Layout (35 Plots)', src: '/images/projects/pst2/master-layout.png' },
      { label: 'East Facing — 2,290 Sq.ft (G+2)', src: '/images/projects/pst2/floor-plan-east.png' },
      { label: 'West Facing — 2,323 Sq.ft (G+2)', src: '/images/projects/pst2/floor-plan-west.png' },
    ],
  },
  {
    slug: 'upcoming-mall-multiplex-mokila',
    categorySlug: 'upcoming',
    badge: 'Upcoming · Mokila',
    rooms: 'Retail · Multiplex',
    sqft: 'Landmark Commercial Hub',
    location: 'Mokila, West Hyderabad',
    name: 'Upcoming Mall & Multiplex in Mokila',
    price: 'Upcoming Development',
    sublabel: 'Retail · Dining · Multiplex',
    scale: 'Integrated Retail, Entertainment & Multiplex Destination',
    handover: 'Upcoming (Planning Stage)',
    rera: 'HMDA Planning Under Process',
    overview:
      'Set to become Mokila’s premier lifestyle and entertainment landmark, our upcoming Mall & Multiplex brings curated retail stores, family dining, and multi-screen cinema experiences right to the heart of West Hyderabad’s booming villa belt.',
    highlights: ['Multi-Screen Multiplex', 'Curated Retail & Dining', 'Prime Mokila Frontage', 'Ample Multi-Level Parking', 'Serving Mokila, Kardanur & Kollur'],
    slides: [
      { src: '/images/hero-properties.png', srcSet: '/images/hero-properties.png 1200w' },
      { src: '/images/projects/meridian/exterior-render.jpeg', srcSet: '/images/projects/meridian/exterior-render.jpeg 1200w' },
    ],
  },
  {
    slug: 'villa-project-kodikal-sariguda',
    categorySlug: 'upcoming',
    badge: 'Upcoming · Villas',
    rooms: 'Luxury Gated Villas',
    sqft: 'Master-Planned Enclave',
    location: 'Kodikal / Sariguda, West Hyderabad',
    name: 'Villa Project in Kodikal / Sariguda',
    price: 'Upcoming Launch',
    sublabel: 'Low-Density Gated Villas',
    scale: 'Upcoming Luxury Gated Villa Community',
    handover: 'Upcoming (Pre-Launch)',
    rera: 'Approvals Under Process',
    overview:
      'An upcoming low-density gated villa community planned in the Kodikal / Sariguda belt of West Hyderabad—designed with wide tree-lined avenues, Vaastu-compliant independent villas, landscaped parks, and a full-scale residents clubhouse.',
    highlights: ['Independent Gated Villas', 'Vaastu-Compliant Layouts', 'Clubhouse & Landscaped Parks', 'Wide Internal Avenues', 'High-Growth West Hyderabad Belt'],
    slides: [
      { src: '/images/portfolio-villas-ongoing.jpg', srcSet: '/images/portfolio-villas-ongoing.jpg 1200w' },
      { src: '/images/how-we-work-villa.jpg', srcSet: '/images/how-we-work-villa.jpg 1200w' },
    ],
  },
  {
    slug: 'upcoming-high-rise-apartment-mokila',
    categorySlug: 'upcoming',
    badge: 'Upcoming · High-Rise',
    rooms: 'Luxury Apartments',
    sqft: 'High-Rise Residences',
    location: 'Mokila, West Hyderabad',
    name: 'Upcoming High-Rise Apartment in Mokila',
    price: 'Upcoming Launch',
    sublabel: 'Modern Clubhouse · Sky Views',
    scale: 'Contemporary High-Rise Residential Community',
    handover: 'Upcoming (Pre-Launch)',
    rera: 'Approvals Under Process',
    overview:
      'A contemporary high-rise residential apartment community coming up in Mokila, engineered for abundant natural light, cross-ventilation, spacious balconies, podium greens, and seamless connectivity to Kollur ORR Exit 2, Neopolis, and the Financial District.',
    highlights: ['Contemporary High-Rise Living', 'Resort-Style Clubhouse', 'Podium Landscaping', '10–15 Min to ORR Exit 2', 'Prime Mokila Location'],
    slides: [
      { src: '/images/portfolio-apartments.jpg', srcSet: '/images/portfolio-apartments.jpg 1200w' },
      { src: '/images/projects/meridian/living-room.jpeg', srcSet: '/images/projects/meridian/living-room.jpeg 1200w' },
    ],
  },
  {
    slug: 'residential-plots',
    categorySlug: 'upcoming',
    badge: 'Upcoming · Plots',
    rooms: 'HMDA Villa Plots',
    sqft: 'Clear-Title Plotted Enclave',
    location: 'Kardanur · Kollur · Mokila Belt',
    name: 'Residential Plots',
    price: 'Upcoming Launch',
    sublabel: 'Wide Roads · Underground Utilities',
    scale: 'HMDA-Planned Residential Plotted Communities',
    handover: 'Upcoming (Pre-Launch)',
    rera: 'HMDA Layout Planning',
    overview:
      'Upcoming HMDA-planned residential plotted communities positioned across the Kardanur, Kollur, and Mokila growth corridor—featuring clear titles, blacktop avenues, underground utilities, avenue plantation, and gated security for custom villa construction or long-term land investment.',
    highlights: ['HMDA-Planned Layouts', '100% Clear Titles', 'Wide Internal Roads', 'Underground Utilities & Parks', 'Kardanur · Kollur · Mokila Belt'],
    slides: [
      { src: '/images/portfolio-plots.jpg', srcSet: '/images/portfolio-plots.jpg 1200w' },
      { src: '/images/hero-properties.png', srcSet: '/images/hero-properties.png 1200w' },
    ],
  },
  {
    slug: 'singapur-town-phase-1',
    categorySlug: 'completed',
    badge: 'Completed · 2023 Handover',
    rooms: '3 BHK · 39 Villas',
    sqft: '2.5 Acres Gated Enclave',
    location: 'West Hyderabad',
    name: 'Singapore Town Phase 1',
    price: 'Sold Out (2023)',
    sublabel: '2.5 Acres · Handed Over',
    scale: '2.5 Acres · 39 Completed Gated Villas',
    handover: '2023 Handover (100% Sold Out)',
    rera: 'HMDA Approved · Delivered Community',
    overview:
      'Delivered on schedule in 2023 and 100% occupied, Singapore Town Phase 1 is a thriving 2.5-acre gated community of 39 thoughtfully designed 3 BHK villas in West Hyderabad. Featuring wide internal avenues, landscaped common zones, dependable community infrastructure, and clear documentation, Phase 1 stands as a benchmark of Praneeta Developers’ build quality and timely execution.',
    highlights: [
      '39 Completed 3 BHK Villas',
      '2.5 Acres Gated Enclave',
      'Delivered in 2023',
      '100% Sold Out & Occupied',
      'HMDA Approved Community',
    ],
    slides: [
      { src: '/images/projects/pst1/showcase-card.png', srcSet: '/images/projects/pst1/showcase-card.png 1200w' },
      { src: '/images/projects/pst1/hero-banner.webp', srcSet: '/images/projects/pst1/hero-banner.webp 1200w' },
      { src: '/images/projects/pst1/villa-overview.webp', srcSet: '/images/projects/pst1/villa-overview.webp 1200w' },
      { src: '/images/projects/pst1/gallery-1.webp', srcSet: '/images/projects/pst1/gallery-1.webp 1200w' },
    ],
  },
];

const COMING_SOON_CATEGORIES: Record<
  string,
  {
    status: string;
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    specs: { label: string; value: string }[];
  }
> = {
  'villas-upcoming': {
    status: 'Upcoming · Coming Soon',
    eyebrow: 'Kardanur / Mokila Growth Corridor',
    title: 'Upcoming Mokila Villa Enclave',
    description:
      'A landmark gated community of G+2 luxury villas along the Mokila–Kardanur corridor, master-planned around expansive open greens, wide internal avenues, and a grand residents clubhouse.',
    image: '/images/how-we-work-villa.jpg',
    specs: [
      { label: 'Typology', value: 'G+2 Luxury Villas' },
      { label: 'Road Network', value: '40 ft Spinal · 30 ft Avenues' },
      { label: 'Master Plan', value: 'Grand Clubhouse & Open Greens' },
      { label: 'Status', value: 'Pre-Launch · Coming Soon' },
    ],
  },
  'plots-coming-soon': {
    status: 'Residential Plots · Coming Soon',
    eyebrow: 'Kardanur · Kollur · Mokila Corridor',
    title: 'Residential Plotted Communities',
    description:
      'Upcoming HMDA-planned residential plotted enclaves along the Kardanur, Kollur, and Mokila growth belt, crafted with clear titles, wide internal roads, and green avenues.',
    image: '/images/portfolio-plots.jpg',
    specs: [
      { label: 'Development', value: 'HMDA-Planned Villa Plots' },
      { label: 'Location', value: 'Kardanur · Kollur · Mokila Belt' },
      { label: 'Documentation', value: 'Clear Titles & Approvals' },
      { label: 'Status', value: 'Pre-Launch · Coming Soon' },
    ],
  },
};

export function PropertyCard({
  property,
  variant = 'properties',
}: {
  property: PropertyItem;
  variant?: 'home' | 'properties';
}) {
  const [slideIdx, setSlideIdx] = useState(0);
  const totalSlides = property.slides.length;
  const safeIdx = totalSlides > 0 ? slideIdx % totalSlides : 0;
  const sizes =
    variant === 'home' ? '100vw' : '(max-width: 767px) 100vw, (max-width: 991px) 727px, 939px';
  const detailPath = `/property/${property.slug}`;

  const showPrevSlide = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (totalSlides <= 1) return;
    setSlideIdx((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const showNextSlide = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (totalSlides <= 1) return;
    setSlideIdx((prev) => (prev + 1) % totalSlides);
  };

  return (
    <div role="listitem" className="w-dyn-item">
      <div className="property-box">
        <div className="property-image-box">
          <div className={`property-badge${property.isNewLaunch ? ' property-badge--new-launch' : ''}`}>
            {property.badge}
          </div>
          <div className="prop-card-slider">
            <div
              className="prop-card-slider__track"
              style={{ transform: `translate3d(-${safeIdx * 100}%, 0, 0)` }}
            >
              {property.slides.map((slide, idx) => (
                <div key={slide.src + idx} className="prop-card-slider__slide">
                  <img
                    loading="lazy"
                    src={slide.src}
                    alt={`${property.name} — view ${idx + 1}`}
                    sizes={sizes}
                    srcSet={slide.srcSet}
                    className="property-gallery-image"
                  />
                </div>
              ))}
            </div>
            {totalSlides > 1 && (
              <>
                <button
                  type="button"
                  aria-label={`Previous image of ${property.name}`}
                  className="property-arrow left prop-card-slider__arrow prop-card-slider__arrow--left"
                  onClick={showPrevSlide}
                >
                  <span className="property-arrow-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8L2 8" stroke="currentColor" strokeWidth="2" />
                      <path d="M9 15L2 8L9 1" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </span>
                </button>
                <button
                  type="button"
                  aria-label={`Next image of ${property.name}`}
                  className="property-arrow right prop-card-slider__arrow prop-card-slider__arrow--right"
                  onClick={showNextSlide}
                >
                  <span className="property-arrow-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 8H14" stroke="currentColor" strokeWidth="2" />
                      <path d="M7 1L14 8L7 15" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </span>
                </button>
              </>
            )}
          </div>
        </div>
        <div className="property-content">
          <div className="property-room-wrap">
            <div className="property-specs-row">
              <div className="property-spec-item property-spec-item--rooms">
                <img
                  loading="lazy"
                  src="/images/6849015224030513cdc67ac9_Property%20Icon-3.svg"
                  alt=""
                  className="property-icon"
                />
                <p className="property-room-count">{property.rooms}</p>
              </div>
              <div className="property-spec-item property-spec-item--sqft">
                <img
                  loading="lazy"
                  src="/images/6849015224030513cdc67ac5_Property%20Icon-1.svg"
                  alt=""
                  className="property-icon"
                />
                <p className="property-room-count">{property.sqft}</p>
              </div>
            </div>
            <div className="property-location-row">
              <img
                loading="lazy"
                src="/images/6ad5f0689b764b5bab687967_maps-and-flags.png"
                alt=""
                className="property-icon property-icon--loc"
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
              <p className="property-price-info">{`/\u00a0\u00a0${property.sublabel}`}</p>
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
  const navigate = useNavigate();

  const isDetailRoute = pathname.startsWith('/property/') && Boolean(slug);
  const selectedProperty = isDetailRoute
    ? PROPERTIES_DATA.find((p) => p.slug === slug)
    : undefined;

  const initialCat =
    !isDetailRoute && (slug || pathname.startsWith('/category/'))
      ? normalizeCategorySlug(slug || pathname.replace('/category/', ''))
      : 'all';
  const [activeCategory, setActiveCategory] = useState<string>(initialCat);
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const [lightbox, setLightbox] = useState<{
    items: { src: string; label: string }[];
    index: number;
  } | null>(null);

  useEffect(() => {
    const updatePerView = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 992) setCardsPerView(2);
      else setCardsPerView(3);
    };
    updatePerView();
    window.addEventListener('resize', updatePerView);
    return () => window.removeEventListener('resize', updatePerView);
  }, []);

  useEffect(() => {
    setCarouselIdx(0);
    setActiveSlideIdx(0);
    setLightbox(null);
    if (isDetailRoute) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (slug) {
      setActiveCategory(normalizeCategorySlug(slug));
    } else if (pathname === '/properties') {
      setActiveCategory('all');
    }
  }, [slug, pathname, isDetailRoute]);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') {
        setLightbox((prev) =>
          prev ? { ...prev, index: (prev.index + 1) % prev.items.length } : null
        );
      }
      if (e.key === 'ArrowLeft') {
        setLightbox((prev) =>
          prev ? { ...prev, index: (prev.index - 1 + prev.items.length) % prev.items.length } : null
        );
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  const handleFilterClick = (categorySlug: string) => {
    setActiveCategory(categorySlug);
    const newPath = categorySlug === 'all' ? '/properties' : `/category/${categorySlug}`;
    navigate(newPath);
  };

  const isAll = activeCategory === 'all';
  const visibleProperties = isAll
    ? PROPERTIES_DATA
    : PROPERTIES_DATA.filter((p) => p.categorySlug === activeCategory);

  const otherProperties = selectedProperty
    ? PROPERTIES_DATA.filter((p) => p.slug !== selectedProperty.slug)
    : [];
  const maxCarouselIdx = Math.max(0, otherProperties.length - cardsPerView);
  const safeCarouselIdx = Math.min(carouselIdx, maxCarouselIdx);

  const detailGalleryItems = selectedProperty
    ? selectedProperty.slides.map((s, idx) => ({
        src: s.src,
        label: `${selectedProperty.name} — View ${idx + 1}`,
      }))
    : [];
  const safeSlideIdx = selectedProperty
    ? Math.min(activeSlideIdx, selectedProperty.slides.length - 1)
    : 0;

  return (
    <section className="section home-properties-section">
      <div className="w-layout-blockcontainer container w-container">
        {selectedProperty && (
          <div className="prop-detail">
            <div className="prop-detail__top">
              <Link to="/properties" className="prop-detail__back">
                ← All Projects
              </Link>
              <span className="prop-detail__status">{selectedProperty.handover}</span>
            </div>

            <div className="prop-detail__hero-grid">
              <div className="prop-detail__gallery-wrap">
                <button
                  type="button"
                  className="prop-detail__main-stage"
                  onClick={() => setLightbox({ items: detailGalleryItems, index: safeSlideIdx })}
                  aria-label={`Zoom ${selectedProperty.name} image`}
                >
                  <img
                    src={selectedProperty.slides[safeSlideIdx].src}
                    alt={`${selectedProperty.name} view ${safeSlideIdx + 1}`}
                    className="prop-detail__main-img"
                  />
                  <span className="prop-detail__zoom-pill">Click to Zoom</span>
                </button>
                <div className="prop-detail__thumbs">
                  {selectedProperty.slides.map((s, i) => (
                    <button
                      key={s.src}
                      type="button"
                      onClick={() => setActiveSlideIdx(i)}
                      className={`prop-detail__thumb${i === safeSlideIdx ? ' is-active' : ''}`}
                      aria-label={`Show image ${i + 1}`}
                    >
                      <img
                        src={s.src}
                        alt={`${selectedProperty.name} thumbnail ${i + 1}`}
                        className="prop-detail__thumb-img"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="prop-detail__info">
                <p className="prop-detail__loc">Project Overview &amp; Specifications</p>
                <p className="prop-detail__overview">{selectedProperty.overview}</p>

                <div className="prop-detail__specs">
                  <div>
                    <span className="prop-detail__spec-label">Configuration</span>
                    <span className="prop-detail__spec-val">{selectedProperty.rooms}</span>
                  </div>
                  <div>
                    <span className="prop-detail__spec-label">Area / Size</span>
                    <span className="prop-detail__spec-val">{selectedProperty.sqft}</span>
                  </div>
                  <div>
                    <span className="prop-detail__spec-label">Project Scale</span>
                    <span className="prop-detail__spec-val">{selectedProperty.scale}</span>
                  </div>
                  <div>
                    <span className="prop-detail__spec-label">Approvals / Handover</span>
                    <span className="prop-detail__spec-val">
                      {selectedProperty.rera || selectedProperty.handover}
                    </span>
                  </div>
                </div>

                <div className="prop-detail__chips">
                  {selectedProperty.highlights.map((h) => (
                    <span key={h} className="prop-detail__chip">
                      {h}
                    </span>
                  ))}
                </div>

                <div className="prop-detail__actions">
                  <Link to="/contact-us" className="prop-detail__btn-primary">
                    Schedule a Site Visit →
                  </Link>
                  {selectedProperty.mapUrl && (
                    <a
                      href={selectedProperty.mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="prop-detail__btn-secondary"
                    >
                      Open in Google Maps
                    </a>
                  )}
                </div>
              </div>
            </div>

            {selectedProperty.floorPlans && selectedProperty.floorPlans.length > 0 && (
              <div className="prop-detail__plans">
                <div className="prop-detail__plans-header">
                  <h3 className="prop-detail__plans-title">Floor Plans &amp; Master Layout</h3>
                  <span className="prop-detail__plans-hint">Click any plan to view full size</span>
                </div>
                <div
                  className={`prop-detail__plans-grid${
                    selectedProperty.floorPlans.length === 1
                      ? ' prop-detail__plans-grid--single'
                      : selectedProperty.floorPlans.length === 2
                        ? ' prop-detail__plans-grid--double'
                        : ''
                  }`}
                >
                  {selectedProperty.floorPlans.map((plan, idx) => (
                    <button
                      key={plan.src}
                      type="button"
                      className="prop-detail__plan-card"
                      onClick={() =>
                        setLightbox({
                          items: selectedProperty.floorPlans ?? [],
                          index: idx,
                        })
                      }
                    >
                      <div className="prop-detail__plan-img-box">
                        <img
                          src={plan.src}
                          alt={plan.label}
                          className="prop-detail__plan-img"
                          loading="lazy"
                        />
                        <span className="prop-detail__plan-zoom">Zoom Plan</span>
                      </div>
                      <p className="prop-detail__plan-label">{plan.label}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {selectedProperty ? (
          <div className="prop-carousel">
            <div className="prop-carousel__header">
              <div>
                <p className="prop-detail__loc">Continue Exploring</p>
                <h3 className="prop-carousel__title">Other Praneeta Communities</h3>
              </div>
              <div className="prop-carousel__arrows">
                <button
                  type="button"
                  aria-label="Previous projects"
                  className="prop-carousel__arrow-btn"
                  disabled={safeCarouselIdx === 0}
                  onClick={() => setCarouselIdx((i) => Math.max(0, i - 1))}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path d="M11.25 13.5L6.75 9L11.25 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Next projects"
                  className="prop-carousel__arrow-btn"
                  disabled={safeCarouselIdx >= maxCarouselIdx}
                  onClick={() => setCarouselIdx((i) => Math.min(maxCarouselIdx, i + 1))}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path d="M6.75 4.5L11.25 9L6.75 13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="prop-carousel__viewport">
              <div
                role="list"
                className="prop-carousel__track"
                style={{
                  transform: `translate3d(-${(safeCarouselIdx * 100) / cardsPerView}%, 0, 0)`,
                }}
              >
                {otherProperties.map((property) => (
                  <div
                    key={property.slug}
                    className="prop-carousel__slide"
                    style={{ flex: `0 0 ${100 / cardsPerView}%` }}
                  >
                    <PropertyCard property={property} variant="properties" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="prop-filters" role="navigation" aria-label="Filter projects by category">
              <Link
                to="/properties"
                aria-current={isAll ? 'page' : undefined}
                className={`prop-filter-btn${isAll ? ' is-active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleFilterClick('all');
                }}
              >
                <span>All Projects</span>
                <span className="prop-filter-count">{PROPERTIES_DATA.length}</span>
              </Link>
              {CATEGORY_LINKS.map((cat) => {
                const catSlug = cat.to.replace('/category/', '');
                const active = activeCategory === catSlug;
                const count = PROPERTIES_DATA.filter((p) => p.categorySlug === catSlug).length;
                return (
                  <Link
                    key={cat.to}
                    to={cat.to}
                    aria-current={active ? 'page' : undefined}
                    className={`prop-filter-btn${active ? ' is-active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleFilterClick(catSlug);
                    }}
                  >
                    <span>{cat.label}</span>
                    <span className="prop-filter-count">{count}</span>
                  </Link>
                );
              })}
            </div>
            {visibleProperties.length > 0 ? (
              <div className="w-dyn-list">
                <div role="list" className="property-grid w-dyn-items">
                  {visibleProperties.map((property) => (
                    <PropertyCard key={property.slug} property={property} variant="properties" />
                  ))}
                </div>
              </div>
            ) : (
              (() => {
                const comingSoon = COMING_SOON_CATEGORIES[activeCategory] ?? {
                  status: 'Upcoming · Coming Soon',
                  eyebrow: 'Praneeta Portfolio',
                  title: 'New Community Launching Soon',
                  description:
                    'Architectural master plans for this community are currently underway. Connect with our advisory team for pre-launch details or explore our active gated enclaves.',
                  image: '/images/hero-properties.png',
                  specs: [
                    { label: 'Location', value: 'Kardanur · Kollur · Mokila Belt' },
                    { label: 'Standards', value: 'HMDA & TG-RERA Compliant' },
                    { label: 'Status', value: 'Pre-Launch · Coming Soon' },
                    { label: 'Advisory', value: 'Early Access Open' },
                  ],
                };
                return (
                  <div className="prop-detail prop-detail--upcoming" role="status" aria-live="polite">
                    <div className="prop-detail__top">
                      <Link to="/properties" className="prop-detail__back">
                        ← All Projects
                      </Link>
                      <span className="prop-detail__status">{comingSoon.status}</span>
                    </div>

                    <div className="prop-detail__hero-grid">
                      <div className="prop-detail__main-stage prop-detail__main-stage--static">
                        <img
                          src={comingSoon.image}
                          alt={comingSoon.title}
                          className="prop-detail__main-img"
                        />
                      </div>

                      <div className="prop-detail__info">
                        <div>
                          <p className="prop-detail__loc">{comingSoon.eyebrow}</p>
                          <h2 className="prop-detail__title prop-detail__title--upcoming">
                            {comingSoon.title}
                          </h2>
                        </div>
                        <p className="prop-detail__overview">{comingSoon.description}</p>

                        <div className="prop-detail__specs">
                          {comingSoon.specs.map((spec) => (
                            <div key={spec.label}>
                              <span className="prop-detail__spec-label">{spec.label}</span>
                              <span className="prop-detail__spec-val">{spec.value}</span>
                            </div>
                          ))}
                        </div>

                        <div className="prop-detail__actions">
                          <Link to="/contact-us" className="prop-detail__btn-primary">
                            Enquire for Pre-Launch →
                          </Link>
                          <Link to="/properties" className="prop-detail__btn-secondary">
                            Explore Active Projects
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()
            )}
          </>
        )}

        {lightbox && lightbox.items[lightbox.index] && (
          <div
            className="prop-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.items[lightbox.index].label}
            onClick={() => setLightbox(null)}
          >
            <div className="prop-lightbox__dialog" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="prop-lightbox__close"
                aria-label="Close zoom view"
                onClick={() => setLightbox(null)}
              >
                ×
              </button>

              <div className="prop-lightbox__stage">
                {lightbox.items.length > 1 && (
                  <button
                    type="button"
                    className="prop-lightbox__nav prop-lightbox__nav--prev"
                    aria-label="Previous image"
                    onClick={() =>
                      setLightbox((prev) =>
                        prev
                          ? { ...prev, index: (prev.index - 1 + prev.items.length) % prev.items.length }
                          : null
                      )
                    }
                  >
                    ‹
                  </button>
                )}

                <img
                  src={lightbox.items[lightbox.index].src}
                  alt={lightbox.items[lightbox.index].label}
                  className="prop-lightbox__img"
                />

                {lightbox.items.length > 1 && (
                  <button
                    type="button"
                    className="prop-lightbox__nav prop-lightbox__nav--next"
                    aria-label="Next image"
                    onClick={() =>
                      setLightbox((prev) =>
                        prev ? { ...prev, index: (prev.index + 1) % prev.items.length } : null
                      )
                    }
                  >
                    ›
                  </button>
                )}
              </div>

              <div className="prop-lightbox__caption">
                <span>{lightbox.items[lightbox.index].label}</span>
                {lightbox.items.length > 1 && (
                  <span className="prop-lightbox__counter">
                    {lightbox.index + 1} / {lightbox.items.length}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
