import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { PageBannerSection } from '../components/PageBannerSection';
import { useWebflowPage } from '../hooks/useWebflowPage';
import { InsightsGridSection } from '../sections/insights/InsightsGridSection';
import { PAGE_META } from '../types/site';

export function InsightsPage() {
  useWebflowPage(PAGE_META.insights.wfPage, PAGE_META.insights.title);

  return (
    <>
      <Navbar />
      <PageBannerSection title="Insights" />
      <InsightsGridSection />
      <Footer variant="base" wfPageId={PAGE_META.insights.wfPage} />
    </>
  );
}
