import { Footer } from '../components/Footer';
import { MarqueeSection } from '../components/MarqueeSection';
import { Navbar } from '../components/Navbar';
import { PageBannerSection } from '../components/PageBannerSection';
// import { TestimonialsSection } from '../components/TestimonialsSection';
import { useWebflowPage } from '../hooks/useWebflowPage';
import { PropertiesListingSection } from '../sections/properties/PropertiesListingSection';
import { PAGE_META } from '../types/site';

export function PropertiesPage() {
  useWebflowPage(PAGE_META.properties.wfPage, PAGE_META.properties.title);

  return (
    <>
      <Navbar />
      <PageBannerSection title="Properties" />
      <PropertiesListingSection />
      <MarqueeSection />
      {/* <TestimonialsSection variant="properties" /> */}
      <Footer variant="base" wfPageId={PAGE_META.properties.wfPage} />
    </>
  );
}
