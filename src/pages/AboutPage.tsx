import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { PageBannerSection } from '../components/PageBannerSection';
import { useWebflowPage } from '../hooks/useWebflowPage';
import { AboutStorySection } from '../sections/about/AboutStorySection';
import { FounderSpotlightSection } from '../sections/about/FounderSpotlightSection';
import { PAGE_META } from '../types/site';
import './about-page.css';

export function AboutPage() {
  useWebflowPage(PAGE_META.about.wfPage, PAGE_META.about.title);

  return (
    <div className="about-page-wrapper">
      <Navbar />
      <PageBannerSection title="About Us" />
      <AboutStorySection />
      <FounderSpotlightSection />
      <Footer variant="base" wfPageId={PAGE_META.about.wfPage} />
    </div>
  );
}
