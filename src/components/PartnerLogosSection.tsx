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
  { id: 'tag', name: 'TAG Projects', logo: '/images/logos/tag-projects.png', to: 'https://tagprojects.in/', external: true },
];

export function PartnerLogosSection({ pZero = true }: PartnerLogosSectionProps) {
  return (
    <section className={pZero ? 'section p-zero partner-logos-section' : 'section partner-logos-section'}>
      <div className="partner-logos-strip" aria-label="Our Projects & Partners">
        {PROJECT_LOGOS.map((item) => {
          const img = (
            <img
              src={item.logo}
              alt={item.name}
              title={item.name}
              loading="lazy"
              className="partner-marquee-img"
            />
          );
          return item.external ? (
            <a
              key={item.id}
              href={item.to}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="partner-marquee-card"
            >
              {img}
            </a>
          ) : (
            <Link key={item.id} to={item.to} aria-label={item.name} className="partner-marquee-card">
              {img}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
