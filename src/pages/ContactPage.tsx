import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { PageBannerSection } from '../components/PageBannerSection';
import { useWebflowPage } from '../hooks/useWebflowPage';
import { ContactFormSection } from '../sections/contact/ContactFormSection';
import { PAGE_META } from '../types/site';

export function ContactPage() {
  useWebflowPage(PAGE_META.contact.wfPage, PAGE_META.contact.title);

  return (
    <>
      <Navbar />
      <PageBannerSection title="Contact Us" />
      <ContactFormSection />
      <Footer variant="base" wfPageId={PAGE_META.contact.wfPage} />
    </>
  );
}
