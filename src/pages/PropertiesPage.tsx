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
  ongoing: {
    title: 'Ongoing Projects',
    subtitle:
      "Active gated villa and luxury apartment communities led by Pranitha's Lakshmi Nivas across Kardanur, Kollur & Mokila.",
  },
  upcoming: {
    title: 'Upcoming Projects',
    subtitle:
      'Next-generation commercial, gated villa, high-rise apartment, and plotted developments across Mokila & West Hyderabad.',
  },
  completed: {
    title: 'Completed Projects',
    subtitle: 'Delivered and occupied gated communities crafted by Praneeta Developers.',
  },
  'villas-ongoing': {
    title: 'Ongoing Projects',
    subtitle:
      "Active gated villa and luxury apartment communities led by Pranitha's Lakshmi Nivas across Kardanur, Kollur & Mokila.",
  },
  apartments: {
    title: 'Ongoing Projects',
    subtitle:
      "Active gated villa and luxury apartment communities led by Pranitha's Lakshmi Nivas across Kardanur, Kollur & Mokila.",
  },
  'villas-upcoming': {
    title: 'Upcoming Projects',
    subtitle:
      'Next-generation commercial, gated villa, high-rise apartment, and plotted developments across Mokila & West Hyderabad.',
  },
  'plots-coming-soon': {
    title: 'Upcoming Projects',
    subtitle:
      'Next-generation commercial, gated villa, high-rise apartment, and plotted developments across Mokila & West Hyderabad.',
  },
  'villas-completed': {
    title: 'Completed Projects',
    subtitle: 'Delivered and occupied gated communities crafted by Praneeta Developers.',
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
