import { FaqSection } from '../components/FaqSection';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { PartnerLogosSection } from '../components/PartnerLogosSection';
import { useWebflowPage } from '../hooks/useWebflowPage';
import { HomeHeroAndCategoriesSection } from '../sections/home/HomeHeroAndCategoriesSection';
import { HomeInsightsAndFooterSection } from '../sections/home/HomeInsightsAndFooterSection';
import { HomeLocationAdvantageSection } from '../sections/home/HomeLocationAdvantageSection';
import { HomePropertiesSection } from '../sections/home/HomePropertiesSection';
import { HomeVideoSection } from '../sections/home/HomeVideoSection';
import { HomeWhyChooseSection } from '../sections/home/HomeWhyChooseSection';
import { PAGE_META } from '../types/site';

export function HomePage() {
  useWebflowPage(PAGE_META.home.wfPage, PAGE_META.home.title);

  return (
    <>
      <Navbar />
      <HomeHeroAndCategoriesSection afterHero={<HomeWhyChooseSection />} />
      <PartnerLogosSection pZero={false} />
      <HomeLocationAdvantageSection />
      <HomePropertiesSection />
      <HomeVideoSection />
      <HomeInsightsAndFooterSection showFooter={false} />
      <FaqSection variant="home" ptZero={false} />
      <Footer variant="base" wfPageId={PAGE_META.home.wfPage} />
    </>
  );
}
