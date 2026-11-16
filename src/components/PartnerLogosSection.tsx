interface PartnerLogosSectionProps {
  pZero?: boolean;
}

const PARTNER_LOGOS = [
  {
    wrapperClass: '_01',
    front: '/images/6ad5db1c111d86c9f493d1cf_logoipsum-354.svg',
    back: '/images/6ad5db1d111d86c9f493d1d7_logoipsum-229.svg',
  },
  {
    wrapperClass: '_02',
    front: '/images/6ad5db1c111d86c9f493d1cb_logoipsum-289.svg',
    back: '/images/6ad5db1d111d86c9f493d1d4_logoipsum-290.svg',
  },
  {
    wrapperClass: '_03',
    front: '/images/6ad5db1c111d86c9f493d1ca_logoipsum-233.svg',
    back: '/images/6ad5db1d111d86c9f493d1d6_logoipsum-234.svg',
  },
  {
    wrapperClass: '_04',
    front: '/images/6ad5db1d111d86c9f493d1d9_logoipsum-358.svg',
    back: '/images/6ad5db1d111d86c9f493d1d8_logoipsum-338.svg',
  },
  {
    wrapperClass: '_05',
    front: '/images/6ad5db1d111d86c9f493d1da_logoipsum-228.svg',
    back: '/images/6ad5db1c111d86c9f493d1ce_logoipsum-280.svg',
  },
  {
    wrapperClass: '_06',
    front: '/images/6ad5db1c111d86c9f493d1c9_logoipsum-378.svg',
    back: '/images/6ad5db1d111d86c9f493d1d3_logoipsum-371.svg',
  },
  {
    wrapperClass: '_07',
    front: '/images/6ad5db1d111d86c9f493d1d5_logoipsum-232.svg',
    back: '/images/6ad5db1d111d86c9f493d1db_logoipsum-340.svg',
  },
  {
    wrapperClass: '_08',
    front: '/images/6ad5db1c111d86c9f493d1cd_logoipsum-323.svg',
    back: '/images/6ad5db1d111d86c9f493d1d0_logoipsum-352.svg',
  },
];

export function PartnerLogosSection({ pZero = true }: PartnerLogosSectionProps) {
  return (
    <section className={pZero ? 'section p-zero partner-logos-section' : 'section partner-logos-section'}>
      <div className="w-layout-blockcontainer container w-container">
        <div
          data-w-id="65c9f529-2a6c-90f5-c5ce-f58584cb349d"
          className="w-layout-grid partner-grid"
        >
          {PARTNER_LOGOS.map((item) => (
            <div key={item.wrapperClass} className="partner-card">
              <div className="card-container">
                <div className={`card-wrapper ${item.wrapperClass}`}>
                  <div className="card-side">
                    <div className="front-logo">
                      <img
                        loading="lazy"
                        src={item.front}
                        alt="Partner Logo - Unusually Webflow Template"
                        className="partner-logo"
                      />
                    </div>
                  </div>
                  <div className="card-side is-back">
                    <div className="back-logo">
                      <img
                        loading="lazy"
                        src={item.back}
                        alt="Partner Logo - Unusually Webflow Template"
                        className="partner-logo back"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
