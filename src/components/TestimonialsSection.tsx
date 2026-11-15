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
      text: 'Veymont made the entire home-search process feel simple and organized. The team understood what I was looking for and helped me find a property that genuinely fit my lifestyle.',
      avatar: '/images/69e9ddc2ce892cd5dab31b63_Mask%20group.avif',
      avatarAlt:
        'Man with short blond hair wearing glasses and a dark blazer over a light blue shirt, smiling against a gray background.',
      name: 'Daniel Brooks',
      designation: 'Home Buyer',
      sideImage: '/images/69ec75b8d60a85ff42ffc2a6_1.avif',
      sideImageAlt:
        'Smiling woman with long blonde hair wearing a gray blazer and light blouse against a muted background.',
    },
    {
      text: 'The market insights and property guidance gave me much more confidence when evaluating investment opportunities. The process was clear, practical, and focused on long-term value.',
      avatar: '/images/69e9e6a7f57e9021ae28555e_5.avif',
      avatarAlt:
        'Portrait of a woman with dark hair pulled back, wearing a white top and a dark blazer, smiling slightly against a gray background.',
      name: 'Sarah Mitchell',
      designation: 'Property Investor',
      sideImage: '/images/69ec7641aabd0693926183c3_2.avif',
      sideImageAlt:
        'Portrait of a man with short salt-and-pepper hair wearing a gray shirt and dark blazer, standing in front of a stone wall.',
    },
  ],
  [
    {
      text: 'As a first-time buyer, I had plenty of questions. The team took the time to explain each step clearly and made what initially felt overwhelming much easier to navigate.',
      avatar: '/images/69e9ddc2ce892cd5dab31b63_Mask%20group.avif',
      avatarAlt:
        'Man with short blond hair wearing glasses and a dark blazer over a light blue shirt, smiling against a gray background.',
      name: 'Michael Anderson',
      designation: 'First-Time Buyer',
      sideImage: '/images/69ec75b8d60a85ff42ffc2a6_1.avif',
      sideImageAlt:
        'Smiling woman with long wavy hair wearing a gray blazer and light blouse against a neutral background.',
    },
    {
      text: 'From preparing the property to handling the final details, the Veymont team kept everything moving smoothly. I always felt informed and supported throughout the sale.',
      avatar: '/images/69e9e6a7f57e9021ae28555e_5.avif',
      avatarAlt:
        'Portrait of a woman with dark hair pulled back, wearing a white top and a dark blazer, smiling slightly against a gray background.',
      name: 'Olivia Carter',
      designation: 'Home Seller',
      sideImage: '/images/69ec7641aabd0693926183c3_2.avif',
      sideImageAlt:
        'Man with short salt-and-pepper hair wearing a grey shirt and dark blazer against a grey wall background.',
    },
  ],
];

const LTR_GROUPS: ReviewCardItem[][] = [
  [
    {
      text: 'Finding a rental that matched my location and budget was surprisingly easy with Veymont. The process was straightforward, and the team was responsive whenever I needed help.',
      avatar: '/images/69e9e6a7f57e9021ae28555e_5.avif',
      avatarAlt:
        'Portrait of a woman with dark hair pulled back, wearing a white top and a dark blazer, smiling slightly against a gray background.',
      name: 'Emma Richardson',
      designation: 'Property Renter',
      sideImage: '/images/69f5e1730184d2574624b2b4_Frame%2035.avif',
      sideImageAlt:
        'Smiling woman with shoulder-length wavy brown hair wearing a navy blue blouse and a pendant necklace against a gray background.',
    },
    {
      text: 'Veymont combines a strong understanding of the market with a very personal approach. Their advice helped me compare opportunities more carefully and make a decision I felt confident about.',
      avatar: '/images/69e9ddc2ce892cd5dab31b63_Mask%20group.avif',
      avatarAlt:
        'Man with short blond hair wearing glasses and a dark blazer over a light blue shirt, smiling against a gray background.',
      name: 'James Wilson',
      designation: 'Real Estate Investor',
      sideImage:
        '/images/69f5e18ba43f0976903809ac_QmaRG9f7iTt3uTnk7jYEv7JKSKY2RFNLuytqSGT21tbKse%202.avif',
      sideImageAlt:
        'Smiling man with light brown hair and glasses wearing a navy blazer and white shirt against gray background.',
    },
  ],
  [
    {
      text: 'The Veymont team handled every stage of the sale with professionalism and clear communication. I always knew what was happening and felt confident having them guide me through the process.',
      avatar: '/images/69e9e6a7f57e9021ae28555e_5.avif',
      avatarAlt:
        'Portrait of a woman with dark hair pulled back, wearing a white top and a dark blazer, smiling slightly against a gray background.',
      name: 'Sophia Bennett',
      designation: 'Home Seller',
      sideImage: '/images/69f5e1730184d2574624b2b4_Frame%2035.avif',
      sideImageAlt:
        'Smiling woman with shoulder-length wavy light brown hair wearing a dark blouse and a pendant necklace against a plain gray background.',
    },
    {
      text: 'Veymont helped me narrow down my options quickly without making the process feel rushed. Their attention to detail and understanding of the market made finding the right property much easier.',
      avatar: '/images/69e9ddc2ce892cd5dab31b63_Mask%20group.avif',
      avatarAlt:
        'Man with short blond hair wearing glasses and a dark blazer over a light blue shirt, smiling against a gray background.',
      name: 'Ryan Thompson',
      designation: 'Property Buyer',
      sideImage:
        '/images/69f5e18ba43f0976903809ac_QmaRG9f7iTt3uTnk7jYEv7JKSKY2RFNLuytqSGT21tbKse%202.avif',
      sideImageAlt:
        'Smiling man with glasses wearing a navy blazer and white shirt against a gray background.',
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
