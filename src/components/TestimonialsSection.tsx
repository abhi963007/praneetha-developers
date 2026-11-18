import { Fragment } from 'react';

interface ReviewCardItem {
  text: string;
  avatar: string;
  avatarAlt: string;
  name: string;
  designation: string;
  sideImage: string;
  sideImageAlt: string;
}

const RTL_GROUPS: ReviewCardItem[][] = [
  [
    {
      text: 'Walking into an already-occupied Praneeta community gave our family total confidence. The structural quality, peaceful Mokila greenery, and transparent legal docket were everything promised.',
      avatar: '/images/69e9ddc2ce892cd5dab31b63_Mask%20group.avif',
      avatarAlt: 'Homeowner portrait',
      name: 'Raghavendra Rao M.',
      designation: 'Owner, Amity Villas',
      sideImage: '/images/69ec75b8d60a85ff42ffc2a6_1.avif',
      sideImageAlt: 'Praneeta homeowner portrait',
    },
    {
      text: 'We looked at 3 BHK apartments in Kokapet costing ₹1.9 Cr, then visited The Santorini Villas. Getting an independent villa on our own 222 Sq. Yd plot in Mokila was an easy decision.',
      avatar: '/images/69e9e6a7f57e9021ae28555e_5.avif',
      avatarAlt: 'Homeowner portrait',
      name: 'Deepika & Karthik V.',
      designation: 'Buyers, The Santorini Villas',
      sideImage: '/images/69ec7641aabd0693926183c3_2.avif',
      sideImageAlt: 'Praneeta homeowner portrait',
    },
  ],
  [
    {
      text: 'The courtyard design keeps the house remarkably cool even in May. Clear milestone updates and direct access to leadership made fit-outs effortless.',
      avatar: '/images/69e9ddc2ce892cd5dab31b63_Mask%20group.avif',
      avatarAlt: 'Homeowner portrait',
      name: 'Suresh Babu N.',
      designation: 'Owner, The Patio',
      sideImage: '/images/69ec75b8d60a85ff42ffc2a6_1.avif',
      sideImageAlt: 'Praneeta homeowner portrait',
    },
    {
      text: 'Clients immediately appreciate the ₹1.5–2 Cr entry price point combined with delivered proof at Amity Villas. Praneeta’s CP support and timely payouts make them effortless to recommend.',
      avatar: '/images/69e9e6a7f57e9021ae28555e_5.avif',
      avatarAlt: 'Channel partner portrait',
      name: 'Lakshmi Prasanna K.',
      designation: 'Channel Partner',
      sideImage: '/images/69ec7641aabd0693926183c3_2.avif',
      sideImageAlt: 'Channel partner portrait',
    },
  ],
];

const LTR_GROUPS: ReviewCardItem[][] = [
  [
    {
      text: 'Walking into an already-occupied Praneeta community gave our family total confidence. The structural quality, peaceful Mokila greenery, and transparent legal docket were everything promised.',
      avatar: '/images/69e9e6a7f57e9021ae28555e_5.avif',
      avatarAlt: 'Homeowner portrait',
      name: 'Raghavendra Rao M.',
      designation: 'Owner, Amity Villas',
      sideImage: '/images/69f5e1730184d2574624b2b4_Frame%2035.avif',
      sideImageAlt: 'Praneeta homeowner portrait',
    },
    {
      text: 'We looked at 3 BHK apartments in Kokapet costing ₹1.9 Cr, then visited The Santorini Villas. Getting an independent villa on our own 222 Sq. Yd plot in Mokila was an easy decision.',
      avatar: '/images/69e9ddc2ce892cd5dab31b63_Mask%20group.avif',
      avatarAlt: 'Homeowner portrait',
      name: 'Deepika & Karthik V.',
      designation: 'Buyers, The Santorini Villas',
      sideImage:
        '/images/69f5e18ba43f0976903809ac_QmaRG9f7iTt3uTnk7jYEv7JKSKY2RFNLuytqSGT21tbKse%202.avif',
      sideImageAlt: 'Praneeta homeowner portrait',
    },
  ],
  [
    {
      text: 'The courtyard design keeps the house remarkably cool even in May. Clear milestone updates and direct access to leadership made fit-outs effortless.',
      avatar: '/images/69e9e6a7f57e9021ae28555e_5.avif',
      avatarAlt: 'Homeowner portrait',
      name: 'Suresh Babu N.',
      designation: 'Owner, The Patio',
      sideImage: '/images/69f5e1730184d2574624b2b4_Frame%2035.avif',
      sideImageAlt: 'Praneeta homeowner portrait',
    },
    {
      text: 'Clients immediately appreciate the ₹1.5–2 Cr entry price point combined with delivered proof at Amity Villas. Praneeta’s CP support and timely payouts make them effortless to recommend.',
      avatar: '/images/69e9ddc2ce892cd5dab31b63_Mask%20group.avif',
      avatarAlt: 'Channel partner portrait',
      name: 'Lakshmi Prasanna K.',
      designation: 'Channel Partner',
      sideImage:
        '/images/69f5e18ba43f0976903809ac_QmaRG9f7iTt3uTnk7jYEv7JKSKY2RFNLuytqSGT21tbKse%202.avif',
      sideImageAlt: 'Channel partner portrait',
    },
  ],
];

const STAR_INDICES = [0, 1, 2, 3, 4];

function ReviewCard({ item }: { item: ReviewCardItem }) {
  return (
    <div className="review-box">
      <div className="review-content">
        <div className="star-box">
          {STAR_INDICES.map((i) => (
            <img
              key={i}
              loading="lazy"
              src="/images/69e9de6fb8731559e92829e5_star.svg"
              alt=""
              className="star"
            />
          ))}
        </div>
        <p className="review-text">{item.text}</p>
      </div>
      <div className="review-name-box">
        <img loading="lazy" src={item.avatar} alt={item.avatarAlt} className="review-author-image" />
        <div>
          <p className="review-name">{item.name}</p>
          <p className="review-designation">{item.designation}</p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection({
  variant = 'home',
}: {
  variant?: 'home' | 'properties';
}) {
  return (
    <section className="section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="section-title-box">
          <div className="subtitle-box">
            <div className="subtitle-icon">
              <img
                src="/images/6ac4a1873c3838069f5e8736_icon.svg"
                loading="lazy"
                alt=""
                className="subtitle-icon-img"
              />
            </div>
            <p className="section-subtitle">Client Stories</p>
          </div>
          <h2 className="section-title">
            {variant === 'properties' ? (
              <>
                Stories from Satisfied<span className="sectitle-br"> </span>Buyers &amp; Sellers
              </>
            ) : (
              <>
                Trusted by Buyers,<span className="sectitle-br"> </span>Sellers &amp; Investors
              </>
            )}
          </h2>
        </div>
      </div>
      <div className="marquee-box">
        <div data-animate="marquee-rtl" className="marquee-inner one">
          {RTL_GROUPS.map((group, gIdx) => (
            <div key={gIdx} className="marquee two">
              {group.map((item) => (
                <Fragment key={item.name}>
                  <ReviewCard item={item} />
                  <div className="revoew-image-box">
                    <img
                      loading="lazy"
                      src={item.sideImage}
                      alt={item.sideImageAlt}
                      className="review-image"
                    />
                  </div>
                </Fragment>
              ))}
            </div>
          ))}
        </div>
        <div data-animate="marquee-ltr" className="marquee-inner two">
          {LTR_GROUPS.map((group, gIdx) => (
            <div key={gIdx} className="marquee two">
              {group.map((item) => (
                <Fragment key={item.name}>
                  <div className="revoew-image-box">
                    <img
                      loading="lazy"
                      src={item.sideImage}
                      alt={item.sideImageAlt}
                      className="review-image"
                    />
                  </div>
                  <ReviewCard item={item} />
                </Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
