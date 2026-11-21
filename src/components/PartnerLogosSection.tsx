import { Link } from 'react-router-dom';
import './partner-logos.css';

interface PartnerLogosSectionProps {
  pZero?: boolean;
}

const PROJECT_LOGOS = [
  { id: 'amity', name: 'Praneeta Amity Villas', logo: '/images/logos/amity-villas.png', to: '/property/amity-villas-mokila' },
  { id: 'patio', name: 'The Patio Villas', logo: '/images/logos/the-patio.png', to: '/property/the-patio-mokila' },
  { id: 'santorini', name: 'Santorini Villas', logo: '/images/logos/santorini-villas.png', to: '/property/santorini-villas-mokila' },
  { id: 'meridian', name: 'Praneeta Meridian', logo: '/images/logos/praneeta-meridian.svg', to: '/property/meridian-kondakal' },
  { id: 'singapore', name: 'Singapore Town', logo: '/images/logos/singapore-town.png', to: '/property/singapur-town-phase-2' },
];

export function PartnerLogosSection({ pZero = true }: PartnerLogosSectionProps) {
  const renderCards = (isClone = false) =>
    PROJECT_LOGOS.map((item) => (
      <Link
        key={isClone ? `${item.id}-clone` : item.id}
        to={item.to}
        aria-label={isClone ? undefined : item.name}
        tabIndex={isClone ? -1 : undefined}
        className="partner-marquee-card"
      >
        <img
          src={item.logo}
          alt={isClone ? '' : item.name}
          title={isClone ? undefined : item.name}
          loading="lazy"
          className="partner-marquee-img"
        />
      </Link>
    ));

  return (
    <section className={pZero ? 'section p-zero partner-logos-section' : 'section partner-logos-section'}>
      <div className="partner-logos-track" aria-label="Our Projects">
        <div className="partner-logos-strip">{renderCards(false)}</div>
        <div className="partner-logos-strip partner-logos-strip--clone" aria-hidden="true">
          {renderCards(true)}
        </div>
      </div>
    </section>
  );
}
