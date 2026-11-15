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
    title: 'Pranitha Developers - Luxury Villas in Hyderabad',
    wfPage: '69e231c0aededb9fade4ee77',
  },
  about: {
    key: 'about',
    path: '/about-us',
    label: 'About Us',
    title: 'About Us - Pranitha Developers - Luxury Villas in Hyderabad',
    wfPage: '69e9f117401297ec309073a9',
  },
  properties: {
    key: 'properties',
    path: '/properties',
    label: 'Properties',
    title: 'Properties - Pranitha Developers - Luxury Villas in Hyderabad',
    wfPage: '69e9f808e78c220e0b094809',
  },
  gallery: {
    key: 'gallery',
    path: '/gallery',
    label: 'Gallery',
    title: 'Gallery - Pranitha Developers - Luxury Villas in Hyderabad',
    wfPage: '69e9f808e78c220e0b094809',
  },
  services: {
    key: 'services',
    path: '/services',
    label: 'Services',
    title: 'Services - Pranitha Developers - Luxury Villas in Hyderabad',
    wfPage: '69eb130b0dc620c786c35d6f',
  },
  insights: {
    key: 'insights',
    path: '/insights',
    label: 'Insights',
    title: 'Insights - Pranitha Developers - Luxury Villas in Hyderabad',
    wfPage: '69eb11f7835e1712deb99121',
  },
  contact: {
    key: 'contact',
    path: '/contact-us',
    label: 'Contact Us',
    title: 'Contact Us - Pranitha Developers - Luxury Villas in Hyderabad',
    wfPage: '69e231c0aededb9fade4ee7e',
  },
};

export interface NavLinkItem {
  label: string;
  to: string;
  itemClass: string;
}

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'Home', to: '/', itemClass: '_1' },
  { label: 'About Us', to: '/about-us', itemClass: '_2' },
  { label: 'Projects', to: '/properties', itemClass: '_3' },
  { label: 'Gallery', to: '/gallery', itemClass: '_4' },
  { label: 'Services', to: '/services', itemClass: '_5' },
  { label: 'Blogs', to: '/insights', itemClass: '_6' },
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
  { label: 'Villas - Completed', to: '/category/villas-completed' },
  { label: 'Apartments', to: '/category/apartments' },
  { label: 'Plots - Coming Soon', to: '/category/plots-coming-soon' },
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
  if (to === '/insights') {
    return norm === '/insights' || norm.startsWith('/insights/');
  }
  if (to === '/contact-us') {
    return norm === '/contact-us' || norm === '/contact';
  }
  return norm === to;
}
