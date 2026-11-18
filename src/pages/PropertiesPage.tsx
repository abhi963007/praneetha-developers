import { useLocation, useParams } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { PageBannerSection } from '../components/PageBannerSection';
import { useWebflowPage } from '../hooks/useWebflowPage';
import {
  PROPERTIES_DATA,
  PropertiesListingSection,
} from '../sections/properties/PropertiesListingSection';
import { PAGE_META } from '../types/site';

const CATEGORY_BANNER_META: Record<string, { title: string; subtitle: string }> = {
  'villas-ongoing': {
    title: 'Villas Ongoing',
    subtitle:
      'Under-construction 4 & 5 BHK gated luxury villa communities across Mokila & Shankarpally.',
  },
  'villas-upcoming': {
    title: 'Villas Upcoming',
    subtitle:
      'Launching soon in the Mokila–Kardanur growth corridor with 40 ft spinal roads and grand clubhouse.',
  },
  'villas-completed': {
    title: 'Villas Completed',
    subtitle: 'Delivered and occupied gated villa enclaves crafted by Praneeta Developers.',
  },
  apartments: {
    title: 'Apartments Ongoing',
    subtitle: 'Spacious 3 BHK high-rise residences in Kondakal Extension near Mokila.',
  },
  'plots-coming-soon': {
    title: 'Residential Plots Coming Soon',
    subtitle:
      'Upcoming HMDA-planned residential plotted communities along the Mokila–Shankarpally corridor.',
  },
};

export function PropertiesPage() {
  const { pathname } = useLocation();
  const { slug } = useParams<{ slug?: string }>();

  const selectedProperty =
    pathname.startsWith('/property/') && slug
      ? PROPERTIES_DATA.find((p) => p.slug === slug)
      : undefined;

  const categoryMeta =
    pathname.startsWith('/category/') && slug ? CATEGORY_BANNER_META[slug] : undefined;

  const bannerTitle = selectedProperty
    ? selectedProperty.name
    : categoryMeta
      ? categoryMeta.title
      : 'Projects by Praneeta Developers';

  const bannerEyebrow = selectedProperty
    ? `${selectedProperty.location} · ${selectedProperty.rooms}`
    : categoryMeta
      ? 'Praneeta Portfolio'
      : undefined;

  const bannerSubtitle = selectedProperty
    ? `${selectedProperty.scale} · ${selectedProperty.rera || selectedProperty.handover}`
    : categoryMeta?.subtitle;

  const bannerImage = selectedProperty
    ? selectedProperty.slides[0]?.src
    : categoryMeta
      ? '/images/hero-properties.png'
      : undefined;

  const docTitle = selectedProperty
    ? `${selectedProperty.name} - Praneeta Developers`
    : categoryMeta
      ? `${categoryMeta.title} - Praneeta Developers`
      : PAGE_META.properties.title;

  useWebflowPage(PAGE_META.properties.wfPage, docTitle);

  return (
    <>
      <Navbar />
      <PageBannerSection
        title={bannerTitle}
        eyebrow={bannerEyebrow}
        subtitle={bannerSubtitle}
        image={bannerImage}
        singleLine
      />
      <PropertiesListingSection />
      <Footer variant="base" wfPageId={PAGE_META.properties.wfPage} />
    </>
  );
}
