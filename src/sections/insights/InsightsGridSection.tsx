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
    slug: 'mokila-shankarpally-premier-villa-destination',
    readTime: '5 min read',
    date: 'October 2026',
    title: 'Why Mokila–Shankarpally is West Hyderabad’s Premier Villa Destination',
    summary:
      'From clean low-density greens and 40 ft master roads to 20–30 minute drives to Neopolis and the Financial District, explore why families are moving to the Mokila–Kardanur belt.',
    body: [
      'Infrastructure around ORR Exit 2 (Kollur) and Kokapet Neopolis has transformed Mokila, Kardanur, and Shankarpally into West Hyderabad’s premier villa and residential corridor. Homebuyers enjoy 20–25 minute commutes to Neopolis Kokapet and 25–30 minute drives to the Financial District without sacrificing breathing room.',
      'Across this corridor, Praneeta Developers delivers low-density G+2 gated communities including Amity Villas, The Patio Villas, Santorini Villas, and Praneeta Singapur Town Phase-2—complemented by upcoming Kardanur–Mokila layouts engineered with 40 ft spinal roads and 30 ft internal avenues.',
      'For IT leaders, business owners, and NRI families looking for long-term land value alongside serene everyday living, the Mokila–Shankarpally belt leads West Hyderabad’s residential expansion.',
    ],
    image: '/images/projects/santorini/hero-slide-1.webp',
    srcSet: '/images/projects/santorini/hero-slide-1.webp 1200w',
  },
  {
    slug: 'definitive-homebuyer-checklist-tg-rera-communities',
    readTime: '6 min read',
    date: 'September 2026',
    title: 'The Definitive Homebuyer Checklist for TG-RERA Approved Gated Communities',
    summary:
      'Every statutory verification step—from TG-RERA registration numbers and HMDA layout sanctions to bank APF approvals across HDFC, ICICI, SBI, and Axis Bank.',
    body: [
      'Verifying statutory approvals is the single most important step when evaluating an under-construction villa or apartment in Telangana. Buyers should always confirm both HMDA layout sanction details and active TG-RERA registration numbers directly on the official portal.',
      'At Praneeta Developers, flagship communities carry transparent registrations—including Amity Villas (TG-RERA: P02400006593), The Patio (P02400008328 / P02400009076), Santorini Villas (P02400009246), and Singapur Town Phase-2 (P02400009800)—with pre-approved home loans across HDFC Bank, ICICI Bank, SBI, Axis Bank, and Bajaj Housing Finance.',
      'Our Mokila site office and Gachibowli corporate desk provide full approval dockets, road-width plans, and transparent stage-wise construction updates.',
    ],
    image: '/images/service-rera-legal.jpg',
    srcSet: '/images/service-rera-legal.jpg 1536w',
  },
  {
    slug: 'apartments-vs-independent-villas-appreciation-2026',
    readTime: '5 min read',
    date: 'October 2026',
    title: 'Comparing Real Estate Appreciation: Apartments vs. Independent Villas in 2026',
    summary:
      'How undivided land share, G+2 expandability, and low-density clubhouse living compare between luxury apartments and independent gated villas in West Hyderabad.',
    body: [
      'As high-rise density increases across Kokapet and Kondakal, homebuyers in the ₹1.5 Cr – ₹2+ Cr range are weighing contemporary gated apartments like Praneeta Meridian against low-density G+2 triplex and courtyard villas in Mokila.',
      'While luxury apartments offer lock-and-leave convenience and compact community amenities, independent gated villas anchor a significantly larger undivided land share along high-growth corridors like Mokila–Shankarpally.',
      'With possession schedules spanning December 2027 through 2029 across our ongoing villa and apartment launches, buyers can match unit typology directly to both lifestyle priorities and multi-year capital appreciation goals.',
    ],
    image: '/images/projects/patio/exterior.webp',
    srcSet: '/images/projects/patio/exterior.webp 1200w',
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
    image: '/images/projects/patio/hero-slide-2.webp',
    srcSet: '/images/projects/patio/hero-slide-2.webp 1400w',
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
    image: '/images/blogs/blog-specifications-build.jpg',
    srcSet: '/images/blogs/blog-specifications-build.jpg 1200w',
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
