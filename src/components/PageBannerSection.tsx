import './page-banner-hero.css';

interface PageBannerSectionProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  image?: string;
  singleLine?: boolean;
}

const DEFAULT_SUBTITLES: Record<string, string> = {
  'About Us': 'Building Luxury Landmarks in West Hyderabad',
  Properties: 'Explore HMDA & TS-RERA registered luxury villas and apartments across Mokila, Kondakal & Shankarpally.',
  'Projects by Praneeta Developers':
    'Explore HMDA & TG-RERA registered luxury villas and apartments across Mokila, Kondakal & Shankarpally.',
  Gallery: 'Explore architectural renders, active site progress, and global expo highlights across Mokila & Shankarpally.',
  Insights: 'Market perspectives, HMDA & TS-RERA checklists, and architectural notes across Mokila, Kondakal & Shankarpally.',
  Blogs: 'Insights, Real Estate Trends & West Hyderabad Market Analysis.',
  'Contact Us': 'Visit our Mokila Experience Lounge or connect directly with our leadership team.',
  'Become a Partner':
    "Join Hyderabad's fastest-growing quality-delivering property developer. Access premium inventory, earn attractive payouts, and close more deals with dedicated support.",
  Disclaimer: 'Important legal disclosures, project representation terms, and TG-RERA compliance notices.',
  'Privacy Policy': 'How V Praneeta Developers Pvt. Ltd. collects, safeguards, and uses your inquiry information.',
};

const PAGE_HERO_IMAGES: Record<string, string> = {
  'About Us': '/images/hero-about.png',
  Properties: '/images/hero-properties.png',
  'Projects by Praneeta Developers': '/images/hero-properties.png',
  Gallery: '/images/hero-gallery.png',
  'Become a Partner': '/images/service-channel-partner.jpg',
  Insights: '/images/hero-insights.png',
  Blogs: '/images/hero-insights.png',
  'Contact Us': '/images/hero-contact.png',
  Disclaimer: '/images/hero-about.png',
  'Privacy Policy': '/images/hero-contact.png',
};

const FALLBACK_POSTER = '/images/hero-about.png';

export function PageBannerSection({
  title,
  subtitle,
  eyebrow,
  image,
  singleLine = false,
}: PageBannerSectionProps) {
  const resolvedSubtitle = subtitle ?? DEFAULT_SUBTITLES[title] ?? '';
  const resolvedImage = image || PAGE_HERO_IMAGES[title] || FALLBACK_POSTER;
  const isWideWrap = singleLine || title.length > 18;
  const titleModifierClass = singleLine
    ? ' page-hero__title--single'
    : title.length > 38
      ? ' page-hero__title--article'
      : title.length > 18
        ? ' page-hero__title--project'
        : '';

  return (
    <section className="page-hero">
      <div className="page-hero__box">
        <img
          className="page-hero__video"
          src={resolvedImage}
          alt={title}
          loading="eager"
        />
        <div className="page-hero__shade" />
        <div className="page-hero__content">
          <div
            key={title}
            className={`page-hero__text-wrap${
              singleLine
                ? ' page-hero__text-wrap--single'
                : isWideWrap
                  ? ' page-hero__text-wrap--wide'
                  : ''
            }`}
          >
            {eyebrow && (
              <span className={`page-hero__eyebrow${singleLine ? ' page-hero__eyebrow--single' : ''}`}>
                {eyebrow}
              </span>
            )}
            <h1
              className={`page-hero__title${titleModifierClass}`}
              style={
                singleLine
                  ? ({ '--hero-title-chars': Math.max(16, title.length) } as React.CSSProperties)
                  : undefined
              }
            >
              {title}
            </h1>
            {resolvedSubtitle && (
              <p className={`page-hero__subtitle${singleLine ? ' page-hero__subtitle--single' : ''}`}>
                {resolvedSubtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
