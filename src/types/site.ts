export type PageKey =
  | 'home'
  | 'about'
  | 'properties'
  | 'gallery'
  | 'partner'
  | 'insights'
  | 'contact'
  | 'disclaimer'
  | 'privacy';

export interface PageMeta {
  key: PageKey;
  path: string;
  label: string;
  title: string;
  wfPage: string;
}

export const PAGE_META: Record<PageKey, PageMeta> = {
  home: {
    key: 'home',
    path: '/',
    label: 'Home',
    title: 'Praneeta Developers — Luxury Gated Villas in Mokila, Shankarpally & Kardanur',
    wfPage: '69e231c0aededb9fade4ee77',
  },
  about: {
    key: 'about',
    path: '/about-us',
    label: 'About Us',
    title: 'About Us - Praneeta Developers - West Hyderabad Luxury Villas',
    wfPage: '69e9f117401297ec309073a9',
  },
  properties: {
    key: 'properties',
    path: '/properties',
    label: 'Properties',
    title: 'Projects in Mokila, Shankarpally & Kardanur - Praneeta Developers',
    wfPage: '69e9f808e78c220e0b094809',
  },
  gallery: {
    key: 'gallery',
    path: '/gallery',
    label: 'Gallery',
    title: 'Gallery - Villas in Mokila & Shankarpally - Praneeta Developers',
    wfPage: '69e9f808e78c220e0b094809',
  },
  partner: {
    key: 'partner',
    path: '/become-a-partner',
    label: 'Become a Partner',
    title: 'Become a Partner - Praneeta Developers - Channel Partner Portal',
    wfPage: '69eb130b0dc620c786c35d6f',
  },
  insights: {
    key: 'insights',
    path: '/blogs',
    label: 'Blogs',
    title: 'Blogs - West Hyderabad Villas & RERA Insights - Praneeta Developers',
    wfPage: '69eb11f7835e1712deb99121',
  },
  contact: {
    key: 'contact',
    path: '/contact-us',
    label: 'Contact Us',
    title: 'Contact Us - Praneeta Developers - Luxury Villas in Hyderabad',
    wfPage: '69e231c0aededb9fade4ee7e',
  },
  disclaimer: {
    key: 'disclaimer',
    path: '/disclaimer',
    label: 'Disclaimer',
    title: 'Disclaimer - Praneeta Developers - Luxury Villas in Hyderabad',
    wfPage: '69e9f117401297ec309073a9',
  },
  privacy: {
    key: 'privacy',
    path: '/privacy-policy',
    label: 'Privacy Policy',
    title: 'Privacy Policy - Praneeta Developers - Luxury Villas in Hyderabad',
    wfPage: '69e9f117401297ec309073a9',
  },
};

export interface NavLinkItem {
  label: string;
  to: string;
  itemClass: string;
  hasDropdown?: boolean;
}

export interface ProjectDropdownLink {
  label: string;
  to: string;
  badge?: string;
  hideArrow?: boolean;
}

export interface ProjectDropdownGroup {
  category: string;
  items: ProjectDropdownLink[];
}

export const PROJECTS_DROPDOWN_GROUPS: ProjectDropdownGroup[] = [
  {
    category: 'Villas',
    items: [
      { label: 'Ongoing', to: '/category/villas-ongoing' },
      { label: 'Upcoming', to: '/category/villas-upcoming', badge: 'New' },
      { label: 'Completed', to: '/category/villas-completed' },
    ],
  },
  {
    category: 'Apartments',
    items: [{ label: 'Ongoing', to: '/category/apartments' }],
  },
  {
    category: 'Residential Plots',
    items: [{ label: 'Coming Soon', to: '/category/plots-coming-soon', hideArrow: true }],
  },
];

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'Home', to: '/', itemClass: '_1' },
  { label: 'About Us', to: '/about-us', itemClass: '_2' },
  { label: 'Projects', to: '/properties', itemClass: '_3', hasDropdown: true },
  { label: 'Gallery', to: '/gallery', itemClass: '_4' },
  { label: 'Blogs', to: '/blogs', itemClass: '_5' },
  { label: 'Become a Partner', to: '/become-a-partner', itemClass: '_6' },
  { label: 'Contact Us', to: '/contact-us', itemClass: '_7' },
];

export const FOOTER_LINKS: { label: string; to: string }[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Projects', to: '/properties' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Blogs', to: '/blogs' },
  { label: 'Become a Partner', to: '/become-a-partner' },
  { label: 'Contact Us', to: '/contact-us' },
];

export const FOOTER_CATEGORY_LINKS: { label: string; to: string }[] = [
  { label: 'Villas — Ongoing', to: '/category/villas-ongoing' },
  { label: 'Villas — Upcoming', to: '/category/villas-upcoming' },
  { label: 'Villas — Completed', to: '/category/villas-completed' },
  { label: 'Apartments — Ongoing', to: '/category/apartments' },
  { label: 'Residential Plots — Coming Soon', to: '/category/plots-coming-soon' },
];

export const CATEGORY_LINKS: { label: string; to: string }[] = [
  { label: 'Villas - Ongoing', to: '/category/villas-ongoing' },
  { label: 'Villas (Upcoming)', to: '/category/villas-upcoming' },
  { label: 'Apartments', to: '/category/apartments' },
  { label: 'Villas - Completed', to: '/category/villas-completed' },
  { label: 'Residential Plots (Coming Soon)', to: '/category/plots-coming-soon' },
];

export function isRouteActive(pathname: string, to: string): boolean {
  const norm = pathname.replace(/\/+$/, '') || '/';
  if (to === '/') {
    return (
      norm === '/' ||
      norm === '/home' ||
      norm === '/licenses' ||
      norm === '/changelog' ||
      norm === '/style-guide' ||
      norm === '/instructions'
    );
  }
  if (to === '/about-us') {
    return norm === '/about-us' || norm === '/about' || norm.startsWith('/advisers/');
  }
  if (to === '/properties') {
    return norm === '/properties' || norm.startsWith('/category/') || norm.startsWith('/property/');
  }
  if (to === '/insights' || to === '/blogs') {
    return (
      norm === '/insights' ||
      norm.startsWith('/insights/') ||
      norm === '/blogs' ||
      norm.startsWith('/blogs/')
    );
  }
  if (to === '/become-a-partner') {
    return (
      norm === '/become-a-partner' ||
      norm === '/partner' ||
      norm === '/channel-partner'
    );
  }
  if (to === '/contact-us') {
    return norm === '/contact-us' || norm === '/contact';
  }
  return norm === to;
}
