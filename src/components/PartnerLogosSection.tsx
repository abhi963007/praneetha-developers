import { Link } from 'react-router-dom';
import './partner-logos.css';

interface PartnerLogosSectionProps {
  pZero?: boolean;
}

// shortcut: text wordmarks, no official logo files in repo yet; swap `name` for <img> when assets arrive
const PROJECT_LOGOS = [
  { id: 'amity', name: 'Praneeta Amity Villas', to: '/property/amity-villas-mokila' },
  { id: 'patio', name: 'The Patio Villas', to: '/property/the-patio-mokila' },
  { id: 'santorini', name: 'Santorini Villas', to: '/property/santorini-villas-mokila' },
  { id: 'meridian', name: 'Praneeta Meridian', to: '/property/meridian-kondakal' },
  { id: 'singapore', name: 'Singapore Town', to: '/property/singapur-town-phase-2' },
  { id: 'tag', name: 'TAG Projects', to: 'https://tagprojects.in/', external: true },
];

export function PartnerLogosSection({ pZero = true }: PartnerLogosSectionProps) {
  return (
    <section className={pZero ? 'section p-zero partner-logos-section' : 'section partner-logos-section'}>
      <div className="partner-logos-strip" aria-label="Our Projects & Partners">
        {PROJECT_LOGOS.map((item) =>
          item.external ? (
            <a key={item.id} href={item.to} target="_blank" rel="noopener noreferrer" className="partner-marquee-card">
              <span className="partner-logo-name">{item.name}</span>
            </a>
          ) : (
            <Link key={item.id} to={item.to} className="partner-marquee-card">
              <span className="partner-logo-name">{item.name}</span>
            </Link>
          ),
        )}
      </div>
    </section>
  );
}
