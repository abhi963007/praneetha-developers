import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import { AdvisorsSliderSection } from '../components/AdvisorsSliderSection';
// import { FaqSection } from '../components/FaqSection';
// import { MarqueeSection } from '../components/MarqueeSection';
import { Navbar } from '../components/Navbar';
import { PartnerLogosSection } from '../components/PartnerLogosSection';
// import { TestimonialsSection } from '../components/TestimonialsSection';
import { useWebflowPage } from '../hooks/useWebflowPage';
import { HomeGallerySection } from '../sections/home/HomeGallerySection';
import { HomeHeroAndCategoriesSection } from '../sections/home/HomeHeroAndCategoriesSection';
// import { HomeHowWeWorkSection } from '../sections/home/HomeHowWeWorkSection';
import { HomeInsightsAndFooterSection } from '../sections/home/HomeInsightsAndFooterSection';
import { HomePropertiesSection } from '../sections/home/HomePropertiesSection';
// import { HomeTrackRecordSection } from '../sections/home/HomeTrackRecordSection';
import { HomeVideoSection } from '../sections/home/HomeVideoSection';
import { PAGE_META } from '../types/site';

export function HomePage() {
  const { hash } = useLocation();
  useWebflowPage(PAGE_META.home.wfPage, PAGE_META.home.title);

  useEffect(() => {
    if (hash === '#gallery') {
      const el = document.getElementById('gallery');
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 80);
      }
    }
  }, [hash]);

  return (
    <>
      <Navbar />
      <HomeHeroAndCategoriesSection />
      <PartnerLogosSection pZero={false} />
      <HomePropertiesSection />
      {/* <HomeHowWeWorkSection /> */}
      {/* <AdvisorsSliderSection variant="home" /> */}
      {/* <MarqueeSection /> */}
      {/* <HomeTrackRecordSection /> */}
      <HomeVideoSection />
      {/* <TestimonialsSection variant="home" /> */}
      {/* <FaqSection variant="home" ptZero={true} /> */}
      <HomeGallerySection />
      <HomeInsightsAndFooterSection />
    </>
  );
}
