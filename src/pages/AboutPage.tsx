import { AdvisorsSliderSection } from '../components/AdvisorsSliderSection';
import { FaqSection } from '../components/FaqSection';
import { Footer } from '../components/Footer';
// import { MarqueeSection } from '../components/MarqueeSection';
import { Navbar } from '../components/Navbar';
import { PageBannerSection } from '../components/PageBannerSection';
import { PartnerLogosSection } from '../components/PartnerLogosSection';
import { useWebflowPage } from '../hooks/useWebflowPage';
import { AboutProcessSection } from '../sections/about/AboutProcessSection';
import { AboutStorySection } from '../sections/about/AboutStorySection';
import { PAGE_META } from '../types/site';

export function AboutPage() {
  useWebflowPage(PAGE_META.about.wfPage, PAGE_META.about.title);

  return (
    <>
      <Navbar />
      <PageBannerSection title="About Us" />
      <AboutStorySection />
      <PartnerLogosSection pZero={true} />
      <AboutProcessSection />
      {/* <MarqueeSection /> */}
      <AdvisorsSliderSection variant="about" />
      <FaqSection variant="about" ptZero={true} />
      <Footer variant="base" wfPageId={PAGE_META.about.wfPage} />
    </>
  );
}
