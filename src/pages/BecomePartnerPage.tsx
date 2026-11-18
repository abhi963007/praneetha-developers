import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { useWebflowPage } from '../hooks/useWebflowPage';
import { BecomePartnerSection } from '../sections/partner/BecomePartnerSection';
import { PAGE_META } from '../types/site';

export function BecomePartnerPage() {
  useWebflowPage(PAGE_META.partner.wfPage, PAGE_META.partner.title);

  return (
    <>
      <Navbar />
      <BecomePartnerSection />
      <Footer variant="base" wfPageId={PAGE_META.partner.wfPage} />
    </>
  );
}
