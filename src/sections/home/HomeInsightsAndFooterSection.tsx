import { Footer } from '../../components/Footer';
import { PAGE_META } from '../../types/site';
import { BlogCard, INSIGHT_ARTICLES } from '../insights/InsightsGridSection';

export function HomeInsightsAndFooterSection() {
  return (
    <div className="section-wrap">
      <section className="section insight">
        <div className="w-layout-blockcontainer container w-container">
          <div className="section-title-box center">
            <div className="subtitle-box">
              <div className="subtitle-icon">
                <img
                  src="/images/6ac4a1873c3838069f5e8736_icon.svg"
                  loading="lazy"
                  alt=""
                  className="subtitle-icon-img"
                />
              </div>
              <p className="section-subtitle">Praneeta Journal</p>
            </div>
            <h2 className="section-title">
              Hyderabad Real Estate, RERA<span className="sectitle-br"> </span>&amp; Design Guides
            </h2>
          </div>
          <div className="w-dyn-list">
            <div role="list" className="blog-cms w-dyn-items">
              {INSIGHT_ARTICLES.slice(0, 3).map((article) => (
                <BlogCard key={article.slug} article={article} variant="home" />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer variant="sticky" wfPageId={PAGE_META.home.wfPage} />
    </div>
  );
}
