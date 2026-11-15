import { Link } from 'react-router-dom';

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
    slug: 'real-estate-investment-for-long-term-growth',
    readTime: '8 min read',
    date: 'October 20, 2026',
    title: 'Real estate investment for long-term growth',
    image: '/images/6ad5e06cfa9c34ba91ba7938_Golden-Hour%20Real%20Estate%20Investment%20Desk.avif',
    srcSet:
      '/images/6ad5e06cfa9c34ba91ba7938_Golden-Hour%20Real%20Estate%20Investment%20Desk-p-500.avif 500w, /images/6ad5e06cfa9c34ba91ba7938_Golden-Hour%20Real%20Estate%20Investment%20Desk-p-800.avif 800w, /images/6ad5e06cfa9c34ba91ba7938_Golden-Hour%20Real%20Estate%20Investment%20Desk-p-1080.avif 1080w, /images/6ad5e06cfa9c34ba91ba7938_Golden-Hour%20Real%20Estate%20Investment%20Desk.avif 1536w',
  },
  {
    slug: 'a-complete-checklist-for-a-stress-free-move',
    readTime: '9 min read',
    date: 'October 20, 2026',
    title: 'A Complete Checklist for a Stress-Free Move',
    image: '/images/6ad5e08dfa9c34ba91ba8857_Stress-Free%20Move%20Checklist.avif',
    srcSet:
      '/images/6ad5e08dfa9c34ba91ba8857_Stress-Free%20Move%20Checklist-p-500.avif 500w, /images/6ad5e08dfa9c34ba91ba8857_Stress-Free%20Move%20Checklist-p-800.avif 800w, /images/6ad5e08dfa9c34ba91ba8857_Stress-Free%20Move%20Checklist-p-1080.avif 1080w, /images/6ad5e08dfa9c34ba91ba8857_Stress-Free%20Move%20Checklist.avif 1536w',
  },
  {
    slug: 'how-to-increase-your-property-value-before-selling',
    readTime: '5 min read',
    date: 'October 20, 2026',
    title: 'How to increase your property value before selling',
    image: '/images/6ad5e0b5421632ee086c9852_Golden-Hour%20Modern%20Home%20Renovation.avif',
    srcSet:
      '/images/6ad5e0b5421632ee086c9852_Golden-Hour%20Modern%20Home%20Renovation-p-500.avif 500w, /images/6ad5e0b5421632ee086c9852_Golden-Hour%20Modern%20Home%20Renovation-p-800.avif 800w, /images/6ad5e0b5421632ee086c9852_Golden-Hour%20Modern%20Home%20Renovation-p-1080.avif 1080w, /images/6ad5e0b5421632ee086c9852_Golden-Hour%20Modern%20Home%20Renovation.avif 1536w',
  },
  {
    slug: 'the-ultimate-guide-to-buying-your-first-home',
    readTime: '7 min read',
    date: 'October 20, 2026',
    title: 'The ultimate guide to buying your first home',
    image: '/images/6ad5e194d131b1b7d7013883_Your%20First%20Home_%20A%20New%20Beginning.avif',
    srcSet:
      '/images/6ad5e194d131b1b7d7013883_Your%20First%20Home_%20A%20New%20Beginning-p-500.avif 500w, /images/6ad5e194d131b1b7d7013883_Your%20First%20Home_%20A%20New%20Beginning-p-800.avif 800w, /images/6ad5e194d131b1b7d7013883_Your%20First%20Home_%20A%20New%20Beginning-p-1080.avif 1080w, /images/6ad5e194d131b1b7d7013883_Your%20First%20Home_%20A%20New%20Beginning.avif 1536w',
  },
  {
    slug: '7-hidden-costs-of-home-ownership-for-every-buyer',
    readTime: '9 min read',
    date: 'October 20, 2026',
    title: '7 hidden costs of home ownership for every buyer',
    image: '/images/6ad5e107c34497c2eb6332b9_Home-Buying%20Costs%20at%20a%20Glance.avif',
    srcSet:
      '/images/6ad5e107c34497c2eb6332b9_Home-Buying%20Costs%20at%20a%20Glance-p-500.avif 500w, /images/6ad5e107c34497c2eb6332b9_Home-Buying%20Costs%20at%20a%20Glance-p-800.avif 800w, /images/6ad5e107c34497c2eb6332b9_Home-Buying%20Costs%20at%20a%20Glance-p-1080.avif 1080w, /images/6ad5e107c34497c2eb6332b9_Home-Buying%20Costs%20at%20a%20Glance.avif 1536w',
  },
  {
    slug: 'top-interior-design-that-are-shaping-modern-homes',
    readTime: '10 min read',
    date: 'October 20, 2026',
    title: 'Top interior design that are shaping modern homes',
    image: '/images/6ad5e1502e57b218a8301749_Warm%20Minimalist%20Open-Plan%20Interior.avif',
    srcSet:
      '/images/6ad5e1502e57b218a8301749_Warm%20Minimalist%20Open-Plan%20Interior-p-500.avif 500w, /images/6ad5e1502e57b218a8301749_Warm%20Minimalist%20Open-Plan%20Interior-p-800.avif 800w, /images/6ad5e1502e57b218a8301749_Warm%20Minimalist%20Open-Plan%20Interior-p-1080.avif 1080w, /images/6ad5e1502e57b218a8301749_Warm%20Minimalist%20Open-Plan%20Interior.avif 1536w',
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
    <div role="listitem" className="w-dyn-item">
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
