import { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import './insights-section.css';

export interface InsightArticle {
  slug: string;
  readTime: string;
  date: string;
  title: string;
  summary: string;
  body: string[];
  image: string;
  srcSet: string;
}

export const INSIGHT_ARTICLES: InsightArticle[] = [
  {
    slug: 'mokila-shankarpally-2027-2028-communities',
    readTime: '5 min read',
    date: 'October 2026',
    title: 'Mokila & Shankarpally: Inside Praneeta’s 2027–2028 Gated Communities',
    summary:
      'A closer look at our active villa and apartment portfolio across Mokila, Kondakal, and Shankarpally—from May 2027 to December 2028 handovers.',
    body: [
      'Praneeta Developers is actively delivering a curated portfolio of low-density gated communities across West Hyderabad’s fastest-growing residential belt. In Mokila, Amity Villas (6.5 acres, 76 G+2 5 BHK triplex villas) is progressing toward May 2027 handover, while The Patio Villas (20.2 acres, 175 courtyard villas) and The Santorini Villas (23 acres, 231 Greek-inspired villas) target December 2027 possession.',
      'For high-rise apartment seekers in Kondakal Extension near Mokila, Praneeta Meridian brings an 11-floor residential tower with 88 spacious 3 BHK residences (1,900, 2,250, and 2,750 sq.ft), 3 high-speed passenger lifts, and 243 car parks across two basements, slated for December 2028 handover.',
      'In Shankarpally, following the complete sell-out and 2023 handover of Phase-1 (39 villas), Praneeta Singapur Town Phase-2 offers 35 HMDA & TS-RERA approved G+2 4 BHK villas on 150 Sq.Yds plots with December 2027 handover.',
    ],
    image: '/images/projects/santorini/hero-slide-1.webp',
    srcSet: '/images/projects/santorini/hero-slide-1.webp 1200w',
  },
  {
    slug: 'orr-exit-2-neopolis-kondakal-corridor',
    readTime: '5 min read',
    date: 'October 2026',
    title: 'How ORR Exit 2, Neopolis & Kondakal IT SEZ Are Shaping West Hyderabad',
    summary:
      'Why families and long-term investors are choosing Mokila and Shankarpally for cleaner air, wide roads, and 10–20 minute IT corridor connectivity.',
    body: [
      'Infrastructure around ORR Exit 2 (Kollur) and Kokapet Neopolis has transformed Mokila, Kondakal, and Shankarpally into West Hyderabad’s premier villa and residential destination. Residents enjoy 10–15 minute access to ORR Exit 2 and Neopolis, and 20–35 minutes to Financial District and Gachibowli.',
      'At Shankarpally, Praneeta Singapur Town Phase-2 sits just 5 minutes from Shankarpalli Railway Station, 10 minutes from Nagulapalli Railway Junction, 12 minutes from Kondakal IT SEZ, and 15 minutes from ICFAI Business School—surrounded by over 10 international schools.',
      'Combined with pollution-free greenery and reliable groundwater zones, the Mokila–Shankarpally corridor offers space and serenity without sacrificing daily commute convenience.',
    ],
    image: '/images/projects/pst2/street-view.png',
    srcSet: '/images/projects/pst2/street-view.png 1200w',
  },
  {
    slug: 'hmda-rera-villa-buyer-checklist',
    readTime: '6 min read',
    date: 'September 2026',
    title: 'Before You Book a Villa or Flat: HMDA & TS-RERA Checks Every Family Should Verify',
    summary:
      'Understanding layout sanctions, TS-RERA registration numbers, and transparent construction milestones before committing to your family home.',
    body: [
      'Verifying statutory approvals is the single most important step when evaluating an under-construction villa or apartment in Telangana. Buyers should always confirm both HMDA layout sanction details and active TS-RERA registration numbers on the official portal.',
      'At Praneeta Developers, key communities carry transparent registrations—including Amity Villas (TS-RERA: P02400006593) and Praneeta Singapur Town Phase-2 (TS-RERA: P02400009800 and HMDA Approval 002446/HMDA/00732/SWFL/SKP2/2025).',
      'Our Mokila site office (6-109, Mokila Village) and Gachibowli corporate office (#B-506, The Platina Building) provide complete approval dockets and stage-wise construction photo updates throughout the build.',
    ],
    image: '/images/service-rera-legal.jpg',
    srcSet: '/images/service-rera-legal.jpg 1536w',
  },
  {
    slug: 'courtyard-villas-clubhouses-deccan-living',
    readTime: '4 min read',
    date: 'August 2026',
    title: 'Why Families Choose Courtyard Villas & Resort Clubhouses in Mokila',
    summary:
      'From 40,000 sq.ft central clubhouses to dedicated in-villa home theatres, modern gated communities are designed around multi-generational living.',
    body: [
      'Today’s homebuyers want more than square footage—they want breathable open courtyards, safe pedestrian streets, and shared spaces where families connect. The Patio Villas devotes 20.2 acres to landscaped courtyards anchored by a 40,000 sq.ft central clubhouse with EV charging, guest rooms, badminton courts, and yoga zones.',
      'At The Santorini Villas and Praneeta Singapur Town Phase-2, dedicated home theatre rooms bring cinema-grade family entertainment directly inside the residence, complemented by gym, kids play area, and multipurpose banquet halls.',
      'Thoughtful East and West facing Vaastu layouts ensure abundant natural daylight and cross-ventilation year-round.',
    ],
    image: '/images/projects/patio/exterior.webp',
    srcSet: '/images/projects/patio/exterior.webp 1200w',
  },
  {
    slug: 'specifications-materials-praneeta-home',
    readTime: '5 min read',
    date: 'July 2026',
    title: 'Inside the Build: Structural & Interior Specifications of a Praneeta Home',
    summary:
      'A transparent breakdown of RCC structures, red brick masonry, Teak wood doors, Hindware, Legrand, Finolex, and RAK Ceramics finishes.',
    body: [
      'Lasting durability begins with structural integrity and trusted building materials. Every Praneeta villa is engineered with an RCC framed superstructure, 9-inch red brick external walls, 4-inch internal walls, and double-coat smooth internal plastering.',
      'Interior finishes feature 2x4 and 2x2 Varmora glazed vitrified tiles, granite staircases with SS and glass railings, kiln-dried Teak wood PU-polished door frames, and UPVC windows with mosquito mesh tracks.',
      'Wet areas and electrical systems are equipped with Hindware concealed flush tanks and CP fittings, RAK Ceramics wall and anti-skid floor tiles, Finolex/Havells concealed copper wiring, and Legrand modular switches and MCBs with inverter backup.',
    ],
    image: '/images/projects/meridian/living-room.jpeg',
    srcSet: '/images/projects/meridian/living-room.jpeg 1200w',
  },
  {
    slug: 'naredco-nri-one-expos-global-outreach',
    readTime: '4 min read',
    date: 'June 2026',
    title: 'Praneeta Developers at NAREDCO & NRI ONE EXPOS: Connecting Worldwide',
    summary:
      'Highlights from our 2023–2026 exhibitions across Hyderabad, the USA, Dubai, and Singapore serving local families and NRI investors.',
    body: [
      'Over the past several years, Praneeta Developers has actively participated in leading real estate exhibitions including NAREDCO Property Expo Hyderabad (2025 & 2026) and NRI ONE EXPO events across the USA, Dubai, and Singapore (2023 & 2026).',
      'These exhibitions allow NRI families and Hyderabad investors to review physical scale models, floor plans, HMDA/RERA approvals, and construction timelines directly with our leadership and advisory team.',
      'Whether you are based in Hyderabad or overseas, our team offers guided site visits, virtual walkthroughs, and dedicated NRE/NRO documentation support.',
    ],
    image: '/images/gallery/expo-naredco-2026-1.jpeg',
    srcSet: '/images/gallery/expo-naredco-2026-1.jpeg 1200w',
  },
];

export function BlogCard({
  article,
  variant = 'insights',
}: {
  article: InsightArticle;
  variant?: 'home' | 'insights';
}) {
  const sizes =
    variant === 'home' ? '100vw' : '(max-width: 767px) 100vw, (max-width: 991px) 727px, 939px';
  return (
    <div role="listitem" className="w-dyn-item blog-item-col">
      <Link
        data-animate="blog-slide-in-up"
        to={`/insights/${article.slug}`}
        className="blog-box w-inline-block"
      >
        <div className="blog-image-box">
          <div data-parallax="trigger" className="parallax-wrapper">
            <img
              src={article.image}
              loading="lazy"
              data-parallax="target"
              alt={article.title}
              sizes={sizes}
              srcSet={article.srcSet}
              className="parallax-image"
            />
          </div>
          <div className="blog-read-box">
            <img
              src="/images/69e7373d29fe8702ef3a3758_Vector.svg"
              loading="lazy"
              alt=""
              className="blog-read-icon"
            />
            <p className="blog-read-text">{article.readTime}</p>
          </div>
        </div>
        <div className="blog-content">
          <p className="blog-date">{article.date}</p>
          {variant === 'home' ? (
            <h3 className="blog-title">{article.title}</h3>
          ) : (
            <h2 className="blog-title">{article.title}</h2>
          )}
        </div>
        <div className="primary-button blog">
          <div className="primary-button-flex">
            <div className="primary-button-text-wrap">
              <div className="primary-button-text">Read More</div>
              <div className="primary-button-text-hover">Read More</div>
            </div>
            <div className="primary-button-arrow-wrapper">
              <div className="primary-button-arrow-wrap">
                <img
                  loading="lazy"
                  src="/images/69e723100025a4ae58731b6a_0.svg"
                  alt=""
                  className="primary-button-arrow dark"
                />
                <img
                  loading="lazy"
                  src="/images/69e723100025a4ae58731b6a_0.svg"
                  alt=""
                  className="primary-button-arrow-hover dark"
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export function InsightsGridSection() {
  const { pathname } = useLocation();
  const { slug } = useParams<{ slug?: string }>();

  const selectedArticle =
    (pathname.startsWith('/insights/') || pathname.startsWith('/blogs/')) && slug
      ? INSIGHT_ARTICLES.find((a) => a.slug === slug)
      : undefined;

  const gridArticles = selectedArticle
    ? INSIGHT_ARTICLES.filter((a) => a.slug !== selectedArticle.slug)
    : INSIGHT_ARTICLES;

  useEffect(() => {
    if (selectedArticle) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedArticle]);

  return (
    <section className="section insight">
      <div className="w-layout-blockcontainer container w-container">
        {selectedArticle && (
          <article className="ins-reader">
            <div className="ins-reader__top">
              <Link to="/insights" className="ins-reader__back">
                ← All Blogs
              </Link>
              <span className="ins-reader__pill">
                {selectedArticle.date} · {selectedArticle.readTime}
              </span>
            </div>

            <div className="ins-reader__grid">
              <div className="ins-reader__img-wrap">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="ins-reader__img"
                />
              </div>

              <div className="ins-reader__content">
                <div className="ins-reader__body">
                  {selectedArticle.body.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                <div className="ins-reader__actions">
                  <Link to="/contact-us" className="ins-reader__btn-primary">
                    <span>Schedule a Site Visit</span>
                    <span className="ins-reader__btn-arrow" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                  <Link to="/properties" className="ins-reader__btn-secondary">
                    <span>Explore Projects</span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        )}

        {selectedArticle && (
          <h2 className="ins-more-heading">More Articles &amp; Market Guides</h2>
        )}

        <div className="w-dyn-list">
          <div role="list" className="blog-cms w-dyn-items">
            {gridArticles.map((article) => (
              <BlogCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
