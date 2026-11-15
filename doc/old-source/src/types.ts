export interface TrustCounter {
  label: string;
  value: string;
  suffix: string;
}

export interface Pillar {
  title: string;
  description: string;
}

export interface Founder {
  name: string;
  role: string;
  experience: string;
  portrait: string;
  quote: string;
  bio: string;
}

export interface WhyInvestItem {
  title: string;
  metric: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CompanyInfo {
  brandName: string;
  legalName: string;
  tagline: string;
  positioningStatement: string;
  established: number;
  phone: string;
  phoneHref: string;
  whatsappNumber: string;
  email: string;
  address: string;
  workingHours: string;
  mapEmbedUrl: string;
  mapDirectionsUrl: string;
  trustCounters: TrustCounter[];
  pillars: Pillar[];
  founders: Founder[];
  whyInvest: WhyInvestItem[];
  reraDisclaimer: string;
  faqs: FAQItem[];
}

export interface FloorPlan {
  id: string;
  title: string;
  plotSize: string;
  builtUpArea: string;
  facing: string;
  priceIndication: string;
  image: string;
  rooms: string[];
}

export interface SpecificationItem {
  category: string;
  detail: string;
}

export interface LocationAdvantage {
  place: string;
  distance: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: 'villas' | 'apartments' | 'plots';
  status: 'ongoing' | 'completed' | 'coming-soon';
  isFlagship: boolean;
  priceRange: string;
  startingPriceLabel: string;
  location: string;
  configuration: string;
  areaRange: string;
  landArea: string;
  reraId: string;
  possession: string;
  heroImage: string;
  thumbnail: string;
  overview: string;
  highlights: string[];
  floorPlans: FloorPlan[];
  amenities: Record<string, string[]>;
  specifications: SpecificationItem[];
  locationAdvantages: LocationAdvantage[];
  galleryPreview?: GalleryItem[];
}

export interface GalleryItem {
  id: string;
  projectId: string;
  projectName: string;
  category: 'villas' | 'apartments' | 'plots';
  stage: 'elevation' | 'progress';
  title: string;
  caption: string;
  captureDate: string;
  imageUrl: string;
}

export interface GalleryResponse {
  projects: Array<{ id: string; name: string; category: string; status: string }>;
  items: GalleryItem[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  featured: boolean;
  author: string;
  publishedAt: string;
  readTime: string;
  coverImage: string;
  excerpt: string;
  content: string[];
  relatedProjectSlug: string;
}

export interface BlogsResponse {
  categories: string[];
  items: BlogPost[];
}

