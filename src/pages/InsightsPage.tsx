import { useLocation, useParams } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { PageBannerSection } from '../components/PageBannerSection';
import { useWebflowPage } from '../hooks/useWebflowPage';
import { INSIGHT_ARTICLES, InsightsGridSection } from '../sections/insights/InsightsGridSection';
import { PAGE_META } from '../types/site';

export function InsightsPage() {
  const { pathname } = useLocation();
  const { slug } = useParams<{ slug?: string }>();

  const selectedArticle =
    (pathname.startsWith('/insights/') || pathname.startsWith('/blogs/')) && slug
      ? INSIGHT_ARTICLES.find((a) => a.slug === slug)
      : undefined;

  const bannerTitle = selectedArticle ? selectedArticle.title : 'Blogs';
  const bannerEyebrow = selectedArticle
    ? `${selectedArticle.date} · ${selectedArticle.readTime}`
    : undefined;
  const bannerSubtitle = selectedArticle
    ? selectedArticle.summary
    : 'Insights, Real Estate Trends & West Hyderabad Market Analysis';
  const bannerImage = selectedArticle ? selectedArticle.image : undefined;
  const docTitle = selectedArticle
    ? `${selectedArticle.title} - Praneeta Developers`
    : 'Blogs - Praneeta Developers - Luxury Villas in Hyderabad';

  useWebflowPage(PAGE_META.insights.wfPage, docTitle);

  return (
    <>
      <Navbar />
      <PageBannerSection
        title={bannerTitle}
        eyebrow={bannerEyebrow}
        subtitle={bannerSubtitle}
        image={bannerImage}
      />
      <InsightsGridSection />
      <Footer variant="base" wfPageId={PAGE_META.insights.wfPage} />
    </>
  );
}
