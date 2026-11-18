export type PageKey = 'home' | 'about' | 'properties' | 'gallery' | 'services' | 'insights' | 'contact';

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
    title: 'Praneeta Developers - Luxury Villas in Hyderabad',
    wfPage: '69e231c0aededb9fade4ee77',
  },
  about: {
    key: 'about',
    path: '/about-us',
    label: 'About Us',
    title: 'About Us - Praneeta Developers - Luxury Villas in Hyderabad',
    wfPage: '69e9f117401297ec309073a9',
  },
  properties: {
    key: 'properties',
    path: '/properties',
    label: 'Properties',
    title: 'Properties - Praneeta Developers - Luxury Villas in Hyderabad',
    wfPage: '69e9f808e78c220e0b094809',
  },
  gallery: {
    key: 'gallery',
    path: '/gallery',
    label: 'Gallery',
    title: 'Gallery - Praneeta Developers - Luxury Villas in Hyderabad',
    wfPage: '69e9f808e78c220e0b094809',
  },
  services: {
    key: 'services',
    path: '/services',
    label: 'Services',
    title: 'Services - Praneeta Developers - Luxury Villas in Hyderabad',
    wfPage: '69eb130b0dc620c786c35d6f',
  },
  insights: {
    key: 'insights',
    path: '/insights',
    label: 'Insights',
    title: 'Insights - Praneeta Developers - Luxury Villas in Hyderabad',
    wfPage: '69eb11f7835e1712deb99121',
  },
  contact: {
    key: 'contact',
    path: '/contact-us',
    label: 'Contact Us',
    title: 'Contact Us - Praneeta Developers - Luxury Villas in Hyderabad',
    wfPage: '69e231c0aededb9fade4ee7e',
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
    items: [{ label: 'Coming Soon', to: '/category/plots-coming-soon', badge: 'Soon' }],
  },
];

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'Home', to: '/', itemClass: '_1' },
  { label: 'About Us', to: '/about-us', itemClass: '_2' },
  { label: 'Projects', to: '/properties', itemClass: '_3', hasDropdown: true },
  { label: 'Gallery', to: '/gallery', itemClass: '_4' },
  { label: 'Blogs', to: '/insights', itemClass: '_5' },
  { label: 'Become a Partner', to: '/become-a-partner', itemClass: '_6' },
  { label: 'Contact Us', to: '/contact-us', itemClass: '_7' },
];

export const FOOTER_LINKS: { label: string; to: string }[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Projects', to: '/properties' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Services', to: '/services' },
  { label: 'Blogs', to: '/insights' },
  { label: 'Contact Us', to: '/contact-us' },
];

export const CATEGORY_LINKS: { label: string; to: string }[] = [
  { label: 'Villas - Ongoing', to: '/category/villas-ongoing' },
  { label: 'Apartments', to: '/category/apartments' },
  { label: 'Villas - Completed', to: '/category/villas-completed' },
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
  if (to === '/services') {
    return norm === '/services' || norm.startsWith('/services/');
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
    return norm === '/become-a-partner';
  }
  if (to === '/contact-us') {
    return norm === '/contact-us' || norm === '/contact';
  }
  return norm === to;
}
