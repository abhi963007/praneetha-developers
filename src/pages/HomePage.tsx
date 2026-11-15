import { AdvisorsSliderSection } from '../components/AdvisorsSliderSection';
import { FaqSection } from '../components/FaqSection';
import { MarqueeSection } from '../components/MarqueeSection';
import { Navbar } from '../components/Navbar';
import { PartnerLogosSection } from '../components/PartnerLogosSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { useWebflowPage } from '../hooks/useWebflowPage';
import { HomeGallerySection } from '../sections/home/HomeGallerySection';
import { HomeHeroAndCategoriesSection } from '../sections/home/HomeHeroAndCategoriesSection';
import { HomeHowWeWorkSection } from '../sections/home/HomeHowWeWorkSection';
import { HomeInsightsAndFooterSection } from '../sections/home/HomeInsightsAndFooterSection';
import { HomePropertiesSection } from '../sections/home/HomePropertiesSection';
import { HomeServicesSection } from '../sections/home/HomeServicesSection';
import { HomeTrackRecordSection } from '../sections/home/HomeTrackRecordSection';
import { HomeVideoSection } from '../sections/home/HomeVideoSection';
import { PAGE_META } from '../types/site';

export function HomePage() {
  useWebflowPage(PAGE_META.home.wfPage, PAGE_META.home.title);

  return (
    <>
      <Navbar />
      <HomeHeroAndCategoriesSection />
      <HomeServicesSection />
      <HomePropertiesSection />
      <HomeHowWeWorkSection />
      <AdvisorsSliderSection variant="home" />
      <MarqueeSection />
      <HomeTrackRecordSection />
      <PartnerLogosSection pZero={false} />
      <HomeVideoSection />
      <TestimonialsSection variant="home" />
      <FaqSection variant="home" ptZero={true} />
      <HomeGallerySection />
      <HomeInsightsAndFooterSection />
    </>
  );
}
