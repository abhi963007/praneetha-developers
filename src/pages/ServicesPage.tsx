// import { FaqSection } from '../components/FaqSection';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { PageBannerSection } from '../components/PageBannerSection';
import { PartnerLogosSection } from '../components/PartnerLogosSection';
import { useWebflowPage } from '../hooks/useWebflowPage';
import { ServicesListSection } from '../sections/services/ServicesListSection';
import { PAGE_META } from '../types/site';

export function ServicesPage() {
  useWebflowPage(PAGE_META.services.wfPage, PAGE_META.services.title);

  return (
    <>
      <Navbar />
      <PageBannerSection title="Services" />
      <ServicesListSection />
      <PartnerLogosSection pZero={true} />
      {/* <FaqSection variant="services" ptZero={false} /> */}
      <Footer variant="base" wfPageId={PAGE_META.services.wfPage} />
    </>
  );
}
