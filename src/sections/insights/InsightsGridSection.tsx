import { Link } from 'react-router-dom';
import './insights-section.css';

export interface InsightArticle {
  slug: string;
  readTime: string;
  date: string;
  title: string;
  image: string;
  srcSet: string;
}

export const INSIGHT_ARTICLES: InsightArticle[] = [
  {
    slug: 'why-mokila-villas-under-2cr-are-rare',
    readTime: '6 min read',
    date: 'February 14, 2026',
    title: 'Why ₹1.5 Cr – ₹2.0 Cr Gated Villas in Mokila Are West Hyderabad’s Rarest Opportunity',
    image: '/images/6ad5e06cfa9c34ba91ba7938_Golden-Hour%20Real%20Estate%20Investment%20Desk.avif',
    srcSet:
      '/images/6ad5e06cfa9c34ba91ba7938_Golden-Hour%20Real%20Estate%20Investment%20Desk-p-500.avif 500w, /images/6ad5e06cfa9c34ba91ba7938_Golden-Hour%20Real%20Estate%20Investment%20Desk-p-800.avif 800w, /images/6ad5e06cfa9c34ba91ba7938_Golden-Hour%20Real%20Estate%20Investment%20Desk-p-1080.avif 1080w, /images/6ad5e06cfa9c34ba91ba7938_Golden-Hour%20Real%20Estate%20Investment%20Desk.avif 1536w',
  },
  {
    slug: 'orr-exit-2-kollur-neopolis-impact',
    readTime: '5 min read',
    date: 'January 28, 2026',
    title: 'How ORR Exit 2 & Neopolis Are Reshaping the Mokila – Shankarpally Villa Corridor',
    image: '/images/6ad5e08dfa9c34ba91ba8857_Stress-Free%20Move%20Checklist.avif',
    srcSet:
      '/images/6ad5e08dfa9c34ba91ba8857_Stress-Free%20Move%20Checklist-p-500.avif 500w, /images/6ad5e08dfa9c34ba91ba8857_Stress-Free%20Move%20Checklist-p-800.avif 800w, /images/6ad5e08dfa9c34ba91ba8857_Stress-Free%20Move%20Checklist-p-1080.avif 1080w, /images/6ad5e08dfa9c34ba91ba8857_Stress-Free%20Move%20Checklist.avif 1536w',
  },
  {
    slug: 'rera-hmda-villa-buyer-checklist',
    readTime: '7 min read',
    date: 'January 10, 2026',
    title: 'Before You Book a Villa in Hyderabad: 6 TG-RERA & HMDA Checks Every Family Must Verify',
    image: '/images/6ad5e0b5421632ee086c9852_Golden-Hour%20Modern%20Home%20Renovation.avif',
    srcSet:
      '/images/6ad5e0b5421632ee086c9852_Golden-Hour%20Modern%20Home%20Renovation-p-500.avif 500w, /images/6ad5e0b5421632ee086c9852_Golden-Hour%20Modern%20Home%20Renovation-p-800.avif 800w, /images/6ad5e0b5421632ee086c9852_Golden-Hour%20Modern%20Home%20Renovation-p-1080.avif 1080w, /images/6ad5e0b5421632ee086c9852_Golden-Hour%20Modern%20Home%20Renovation.avif 1536w',
  },
  {
    slug: 'courtyard-ventilation-hyderabad-climate',
    readTime: '4 min read',
    date: 'December 19, 2025',
    title: 'Natural Daylight, Double-Height Courtyards & Cross Ventilation in Modern Deccan Homes',
    image: '/images/6ad5e194d131b1b7d7013883_Your%20First%20Home_%20A%20New%20Beginning.avif',
    srcSet:
      '/images/6ad5e194d131b1b7d7013883_Your%20First%20Home_%20A%20New%20Beginning-p-500.avif 500w, /images/6ad5e194d131b1b7d7013883_Your%20First%20Home_%20A%20New%20Beginning-p-800.avif 800w, /images/6ad5e194d131b1b7d7013883_Your%20First%20Home_%20A%20New%20Beginning-p-1080.avif 1080w, /images/6ad5e194d131b1b7d7013883_Your%20First%20Home_%20A%20New%20Beginning.avif 1536w',
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
              alt=""
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
  return (
    <section className="section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="w-dyn-list">
          <div role="list" className="blog-cms w-dyn-items">
            {INSIGHT_ARTICLES.map((article) => (
              <BlogCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
