import './partner-logos.css';

interface PartnerLogosSectionProps {
  pZero?: boolean;
}

const PARTNER_LOGOS = [
  {
    id: 'logo-1',
    src: '/images/6ad5db1c111d86c9f493d1cf_logoipsum-354.svg',
    alt: 'Partner Brand 1',
  },
  {
    id: 'logo-2',
    src: '/images/6ad5db1c111d86c9f493d1cb_logoipsum-289.svg',
    alt: 'Partner Brand 2',
  },
  {
    id: 'logo-3',
    src: '/images/6ad5db1c111d86c9f493d1ca_logoipsum-233.svg',
    alt: 'Partner Brand 3',
  },
  {
    id: 'logo-4',
    src: '/images/6ad5db1d111d86c9f493d1d9_logoipsum-358.svg',
    alt: 'Partner Brand 4',
  },
  {
    id: 'logo-5',
    src: '/images/6ad5db1d111d86c9f493d1da_logoipsum-228.svg',
    alt: 'Partner Brand 5',
  },
  {
    id: 'logo-6',
    src: '/images/6ad5db1c111d86c9f493d1c9_logoipsum-378.svg',
    alt: 'Partner Brand 6',
  },
  {
    id: 'logo-7',
    src: '/images/6ad5db1d111d86c9f493d1d5_logoipsum-232.svg',
    alt: 'Partner Brand 7',
  },
  {
    id: 'logo-8',
    src: '/images/6ad5db1c111d86c9f493d1cd_logoipsum-323.svg',
    alt: 'Partner Brand 8',
  },
  {
    id: 'logo-9',
    src: '/images/6ad5db1d111d86c9f493d1d7_logoipsum-229.svg',
    alt: 'Partner Brand 9',
  },
  {
    id: 'logo-10',
    src: '/images/6ad5db1d111d86c9f493d1d4_logoipsum-290.svg',
    alt: 'Partner Brand 10',
  },
  {
    id: 'logo-11',
    src: '/images/6ad5db1d111d86c9f493d1d6_logoipsum-234.svg',
    alt: 'Partner Brand 11',
  },
  {
    id: 'logo-12',
    src: '/images/6ad5db1d111d86c9f493d1d8_logoipsum-338.svg',
    alt: 'Partner Brand 12',
  },
];

export function PartnerLogosSection({ pZero = true }: PartnerLogosSectionProps) {
  return (
    <section className={pZero ? 'section p-zero partner-logos-section' : 'section partner-logos-section'}>
      <div className="partner-logos-marquee" aria-label="Our Trusted Partners & Brands">
        <div className="partner-marquee-track">
          {/* Main Loop Group */}
          <div className="partner-marquee-group">
            {PARTNER_LOGOS.map((item) => (
              <div key={item.id} className="partner-marquee-card">
                <img
                  loading="lazy"
                  src={item.src}
                  alt={item.alt}
                  className="partner-marquee-img"
                />
              </div>
            ))}
          </div>

          {/* Duplicate Group for Seamless Infinite Scrolling */}
          <div className="partner-marquee-group" aria-hidden="true">
            {PARTNER_LOGOS.map((item) => (
              <div key={`dup-${item.id}`} className="partner-marquee-card">
                <img
                  loading="lazy"
                  src={item.src}
                  alt=""
                  className="partner-marquee-img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
