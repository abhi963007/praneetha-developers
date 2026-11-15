import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { PageBannerSection } from '../components/PageBannerSection';
import { useWebflowPage } from '../hooks/useWebflowPage';
import { GalleryShowcaseSection } from '../sections/gallery/GalleryShowcaseSection';
import { PAGE_META } from '../types/site';

export function GalleryPage() {
  useWebflowPage(PAGE_META.gallery.wfPage, PAGE_META.gallery.title);

  return (
    <>
      <Navbar />
      <PageBannerSection
        title="Gallery"
        subtitle="A visual journey through Pranitha’s completed and ongoing villa communities in Mokila."
      />
      <GalleryShowcaseSection />
      <Footer variant="base" wfPageId={PAGE_META.gallery.wfPage} />
    </>
  );
}
