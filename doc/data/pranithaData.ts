export type ProjectCategoryKey =
  | 'all'
  | 'villas-ongoing'
  | 'villas-completed'
  | 'apartments-ongoing'
  | 'plots-coming-soon';

export interface FloorPlanSpec {
  id: string;
  label: string;
  facing: string;
  builtUpArea: string;
  plotArea: string;
  price: string;
  highlights: string[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  name: string;
  category: Exclude<ProjectCategoryKey, 'all'>;
  categoryLabel: string;
  status: string;
  reraNumber: string;
  location: string;
  priceRange: string;
  configuration: string;
  plotSize: string;
  totalArea: string;
  possessionDate: string;
  summary: string;
  image: string;
  highlights: string[];
  floorPlans?: FloorPlanSpec[];
  amenities?: string[];
  specifications?: { title: string; detail: string }[];
  locationAdvantages?: { place: string; distance: string }[];
}

export interface GalleryItem {
  id: string;
  projectSlug: string;
  projectName: string;
  stage: 'elevation' | 'progress';
  stageLabel: string;
  captureDate: string;
  title: string;
  caption: string;
  image: string;
}

export interface BlogArticle {
  id: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
  image: string;
  paragraphs: string[];
  keyTakeaways: string[];
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export const COMPANY_INFO = {
  brandName: 'Pranitha Developers',
  shortName: 'pranitha',
  legalName: 'V Praneeta Developers Private Limited',
  tagline: 'Building Dreams, Creating Homes',
  established: '2014',
  locationBadge: 'Est. 2014 — Mokila, Hyderabad',
  phoneDisplay: '+91 9133637111',
  phoneHref: 'tel:+919133637111',
  whatsappHref: 'https://wa.me/919133637111',
  email: 'info@praneeta.dev',
  emailHref: 'mailto:info@praneeta.dev',
  addressLine1: '6-109, Mokila Village, Shankarpally Mandal',
  addressLine2: 'Ranga Reddy District, Hyderabad, Telangana – 501203',
  fullAddress:
    '6-109, Mokila Village, Shankarpally Mandal, Ranga Reddy District, Hyderabad, Telangana – 501203',
  workingHours: 'Monday – Sunday: 9:30 AM – 6:30 PM',
  mapCoords: { lat: 17.4264796, lng: 78.1912362 },
  mapDirectionsUrl: 'https://www.google.com/maps?q=17.4264796,78.1912362',
  mapEmbedUrl: 'https://www.google.com/maps?q=17.4264796,78.1912362&z=16&output=embed',
  stats: [
    { number: '12+', label: 'Years of Leadership' },
    { number: '6+', label: 'Landmark Communities' },
    { number: '850+', label: 'Happy Homeowner Families' },
    { number: '1.8M+', label: 'Sq. Ft. Under Development' },
  ],
  directors: [
    {
      id: 'varthya-devula-nayak',
      name: 'Varthya Devula Nayak',
      role: 'Managing Director & Founder',
      experience: '12+ Years in Civil Infrastructure & Residential Townships',
      image: '/images/6aec0a59c4d2d6970a71c1a8_6aec03e674dd489a2504d27b_team-daniel-wu.webp',
    },
    {
      id: 'kavitha-varthya',
      name: 'Kavitha Varthya',
      role: 'Director — Design & Client Relations',
      experience: '10+ Years in Architectural Planning & Customer Experience',
      image: '/images/6aec0a59c4d2d6970a71c1b1_6aec03e7797aac98d2c19e0f_team-claire-dubois.webp',
    },
  ],
  team: [
    {
      id: 'varthya-devula-nayak',
      name: 'Varthya Devula Nayak',
      role: 'Managing Director & Founder',
      image: '/images/6aec0a59c4d2d6970a71c1a8_6aec03e674dd489a2504d27b_team-daniel-wu.webp',
    },
    {
      id: 'kavitha-varthya',
      name: 'Kavitha Varthya',
      role: 'Director — Design & Client Relations',
      image: '/images/6aec0a59c4d2d6970a71c1b1_6aec03e7797aac98d2c19e0f_team-claire-dubois.webp',
    },
    {
      id: 'srinivas-reddy',
      name: 'Srinivas Reddy K.',
      role: 'Chief Structural Engineer',
      image: '/images/6aec0a59c4d2d6970a71c1ab_6aec03e70db3b8d2a6c8b3b5_team-arjun-mehta.webp',
    },
    {
      id: 'ananya-deshmukh',
      name: 'Ananya Deshmukh',
      role: 'Principal Architect — Villa Townships',
      image: '/images/6aec107cf523d58a5f3ab208_6aec0f8aff9d28e26c8f3298_team-amara-osei.webp',
    },
  ],
};

export const PROJECT_CATEGORIES: { key: ProjectCategoryKey; label: string }[] = [
  { key: 'all', label: 'All Projects' },
  { key: 'villas-ongoing', label: 'Villas — Ongoing' },
  { key: 'villas-completed', label: 'Villas — Completed' },
  { key: 'apartments-ongoing', label: 'Apartments — Ongoing' },
  { key: 'plots-coming-soon', label: 'Residential Plots — Coming Soon' },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'sovereign-villas-mokila',
    slug: 'sovereign-villas-mokila',
    name: 'Pranitha Sovereign Villas',
    category: 'villas-ongoing',
    categoryLabel: 'Villas — Ongoing',
    status: 'Ongoing — Flagship Launch',
    reraNumber: 'HMDA Approved Layout · TG-RERA in Final Stage',
    location: 'Mokila – Shankarpally Road, West Hyderabad',
    priceRange: '₹1.50 Cr – ₹2.00 Cr',
    configuration: '3 & 4 BHK Triplex Villas (2,250 – 2,850 Sq. Ft.)',
    plotSize: '180 – 260 Sq. Yds',
    totalArea: '15 Acres · 165 Exclusive Villas',
    possessionDate: 'December 2027',
    summary:
      "Hyderabad's rare attainable gated-community luxury triplex villa enclave in Mokila, delivering independent land ownership, double-height foyers, and a 20,000+ Sq. Ft. clubhouse between ₹1.50 Cr and ₹2.00 Cr.",
    image: '/images/6aebeddf2eff78b8f04509bb_meadow-house.webp',
    highlights: [
      'Price band ₹1.50 Cr – ₹2.00 Cr (All-Inclusive base launch pricing)',
      '100% Vaastu-compliant East & West facing corner/avenue plots',
      '45% open landscaped green belt, avenues & subterranean utilities',
      'Pre-approved financing options with SBI, HDFC, ICICI & Axis Bank',
    ],
    floorPlans: [
      {
        id: 'sovereign-3bhk-east',
        label: '3 BHK East-Facing Villa',
        facing: 'East Facing · 180 Sq. Yds Plot',
        builtUpArea: '2,250 Sq. Ft. (G + 2 Floors)',
        plotArea: '180 Sq. Yds',
        price: '₹1.50 Cr*',
        highlights: [
          'Double-height living foyer & private front lawn',
          'Covered car parking with dedicated EV charging point',
          'Home office / guest suite on ground level + family lounge upstairs',
        ],
      },
      {
        id: 'sovereign-4bhk-west',
        label: '4 BHK West-Facing Triplex Villa',
        facing: 'West Facing · 215 Sq. Yds Plot',
        builtUpArea: '2,580 Sq. Ft. (G + 2 Floors)',
        plotArea: '215 Sq. Yds',
        price: '₹1.75 Cr*',
        highlights: [
          'Expansive puja room, formal & family living zones',
          'Private terrace deck with pergola provision for evening entertaining',
          'Walk-in wardrobe in primary master suite',
        ],
      },
      {
        id: 'sovereign-4bhk-corner',
        label: '4 BHK Corner Signature Villa',
        facing: 'East / North Corner · 260 Sq. Yds Plot',
        builtUpArea: '2,850 Sq. Ft. (G + 2 Floors)',
        plotArea: '260 Sq. Yds',
        price: '₹2.00 Cr*',
        highlights: [
          'Wrap-around landscaped setback garden & two-car porch',
          'Home theatre / recreation loft on second floor',
          'Direct promenade view overlooking central parkland',
        ],
      },
    ],
    amenities: [
      '20,000+ Sq. Ft. Multi-Level Clubhouse',
      'Temperature-Controlled Swimming Pool & Kids Deck',
      'Indoor Badminton & Pickleball Courts',
      'Co-Working Business Lounge & Guest Suites',
      'Landscaped Amphitheatre & Reflexology Park',
      '100% Underground Power, Fiber & Water Network',
      '24/7 Three-Tier CCTV & Boom-Barrier Security',
      'EV Charging Bays & Solar Street Lighting',
    ],
    specifications: [
      { title: 'Structure', detail: 'RCC Framed Seismic Zone II Compliant with Fly-Ash / AAC Thermal Blocks' },
      { title: 'Main Door', detail: 'Engineered Burma Teakwood Frame with Designer Shutter & Digital Lock' },
      { title: 'Flooring', detail: '800x1600mm Italian Marble-Finish Vitrified Tiles; Wooden Flooring in Master Bedroom' },
      { title: 'Windows', detail: '3-Track UPVC Sound-Insulated Sliding Shutters with Toughened Glass & Mosquito Mesh' },
      { title: 'Sanitary & CP', detail: 'Kohler / Grohe / Jaguar Concealed Cisterns & Single-Lever Diverters' },
      { title: 'Power Backup', detail: '100% DG Power Backup for Villa Lighting, Clubhouse & Common Areas' },
    ],
    locationAdvantages: [
      { place: 'Outer Ring Road (ORR) Exit 2 – Kollur', distance: '12 Mins' },
      { place: 'Kokapet Neopolis & SEZ Hubs', distance: '18 Mins' },
      { place: 'Financial District & Wipro Circle', distance: '25 Mins' },
      { place: 'Indus International & Samashti Schools', distance: '8 Mins' },
      { place: 'Continental & AIG Hospitals (Gachibowli)', distance: '24 Mins' },
      { place: 'Rajiv Gandhi International Airport', distance: '38 Mins' },
    ],
  },
  {
    id: 'santorini-villas-mokila',
    slug: 'santorini-villas-mokila',
    name: 'Pranitha Santorini Villas',
    category: 'villas-ongoing',
    categoryLabel: 'Villas — Ongoing',
    status: 'Ongoing · TG-RERA P02400009246',
    reraNumber: 'P02400009246',
    location: 'Mokila, Shankarpally Mandal, Hyderabad',
    priceRange: '₹3.82 Cr Onwards',
    configuration: '4 BHK Mediterranean Triplex Villas (3,820 – 4,900 Sq. Ft.)',
    plotSize: '300 – 450 Sq. Yds',
    totalArea: '20 Acres · 194 Villas',
    possessionDate: 'August 2028',
    summary:
      'Mediterranean-inspired ultra-luxury triplex villa community in Mokila featuring sunlit whitewashed facades, private plunge-pool provisions, and an expansive 35,000 Sq. Ft. Santorini Clubhouse.',
    image: '/images/6aebeddff10a750ce2a9feef_garden-house.webp',
    highlights: [
      'TG-RERA Registered: P02400009246',
      'Private elevator pit provision & sky terrace lounge in every villa',
      '35,000 Sq. Ft. Grand Clubhouse with banquet hall & squash courts',
      'Zero shared walls with wide 40 ft & 60 ft internal CC avenues',
    ],
  },
  {
    id: 'amity-villas-mokila',
    slug: 'amity-villas-mokila',
    name: 'Pranitha Amity Villas',
    category: 'villas-completed',
    categoryLabel: 'Villas — Completed',
    status: 'Completed — Handed Over (OC Received)',
    reraNumber: 'P02400006593',
    location: 'Mokila, Near Shankarpally Road, Hyderabad',
    priceRange: '₹2.96 Cr Onwards',
    configuration: '4 BHK Gated Community Villas (2,960 – 3,399 Sq. Ft.)',
    plotSize: '240 – 320 Sq. Yds',
    totalArea: '10.17 Acres · 136 Villas',
    possessionDate: 'Delivered & Occupied',
    summary:
      'A thriving, occupied gated community in Mokila showcasing Pranitha Developers’ delivery commitment—complete with a functional clubhouse, tree-lined walkways, and active resident association.',
    image: '/images/6aebfc57f10a750ce2ad8134_6aebfb947c6e6640c79f14a8_project-casa-lumen.webp',
    highlights: [
      'TG-RERA Registered: P02400006593 (Completed)',
      '136 families welcomed with operational water & solar backup infrastructure',
      '15,000 Sq. Ft. Clubhouse, swimming pool & landscaped community lawns',
      'Proof of on-time structural & legal handover across all units',
    ],
  },
  {
    id: 'the-patio-mokila',
    slug: 'the-patio-mokila',
    name: 'Pranitha The Patio',
    category: 'villas-completed',
    categoryLabel: 'Villas — Completed',
    status: 'Completed — Ready for Interiors',
    reraNumber: 'P02400009069',
    location: 'Mokila – Shankarpally Corridor, Hyderabad',
    priceRange: '₹4.32 Cr Onwards',
    configuration: '4 BHK Spanish Courtyard Villas (4,320 – 4,800 Sq. Ft.)',
    plotSize: '350 – 480 Sq. Yds',
    totalArea: '9.16 Acres · 90 Boutique Villas',
    possessionDate: 'Ready for Fit-Outs',
    summary:
      'Low-density boutique Spanish courtyard villa enclave built around central tranquil patios, terracotta arches, double-height natural skylights, and bespoke landscaped lawns.',
    image: '/images/6aebede031e8502a78d0f558_gate-house.webp',
    highlights: [
      'TG-RERA Registered: P02400009069',
      'Just 90 ultra-spacious villas spread across 9.16 acres',
      'Central sunlit Spanish patio core inside every residence',
      'Ready-to-register clear-title inventory for immediate occupancy',
    ],
  },
  {
    id: 'meridian-heights-kokapet',
    slug: 'meridian-heights-kokapet',
    name: 'Pranitha Meridian Heights',
    category: 'apartments-ongoing',
    categoryLabel: 'Apartments — Ongoing',
    status: 'Ongoing — High-Rise Bookings Open',
    reraNumber: 'P02400008412',
    location: 'Kondakal – Kokapet Corridor, West Hyderabad',
    priceRange: '₹88 Lakhs – ₹1.35 Cr',
    configuration: '2.5 & 3 BHK Sky Residences (1,450 – 2,150 Sq. Ft.)',
    plotSize: 'High-Rise G+14 Towers',
    totalArea: '4.5 Acres · 340 Residences',
    possessionDate: 'March 2028',
    summary:
      'Contemporary high-rise community minutes from Kokapet Neopolis featuring corner ventilation, wrap-around sit-out balconies, no common wall between apartments, and a rooftop sky lounge.',
    image: '/images/6aebf3288d23c90a1bb8c2c9_lake-pavilion.webp',
    highlights: [
      'Zero common wall design ensuring maximum daylight & acoustic privacy',
      '100% Vaastu compliant floor plans with dedicated utility balconies',
      '15 minutes drive to Neopolis, Financial District & Narsingi ORR Junction',
      'Clubhouse, rooftop jogging loop, creche & co-working pod',
    ],
  },
  {
    id: 'singapur-town-plots',
    slug: 'singapur-town-plots',
    name: 'Pranitha Singapur Town — Phase II',
    category: 'plots-coming-soon',
    categoryLabel: 'Residential Plots — Coming Soon',
    status: 'Coming Soon — Pre-Launch Registration',
    reraNumber: 'HMDA Layout Approval in Progress',
    location: 'Shankarpally – Chevella Highway, West Hyderabad',
    priceRange: 'Pre-Launch Priority Pricing on Request',
    configuration: 'HMDA Villa Open Plots (200 – 500 Sq. Yds)',
    plotSize: '200 – 500 Sq. Yds',
    totalArea: '28 Acres · 240 Plots',
    possessionDate: 'Infrastructure Handover 2027',
    summary:
      'Upcoming HMDA-planned gated villa plotted development on the high-growth Shankarpally corridor featuring 60 ft avenue roads, underground drainage, overhead tanks, and avenue plantations.',
    image: '/images/6aebf54f74d687080341af68_6aebf4bea78e0b27348d587a_service-planning.webp',
    highlights: [
      'Register early for priority plot allocation & pre-launch benefits',
      '40 ft & 60 ft internal blacktop roads with avenue plantation',
      'Compound wall around entire 28-acre layout with grand entrance arch',
      'Clear 100% passbook & link documents ready for buyer legal scrutiny',
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-sov-elev-1',
    projectSlug: 'sovereign-villas-mokila',
    projectName: 'Pranitha Sovereign Villas',
    stage: 'elevation',
    stageLabel: '3D Elevation',
    captureDate: 'Architectural Master Render',
    title: 'East-Facing Triplex Facade',
    caption: 'Warm lime plaster fins, pergola sit-out and double-height glazing for Sovereign Villas.',
    image: '/images/6aebeddf2eff78b8f04509bb_meadow-house.webp',
  },
  {
    id: 'gal-sov-prog-1',
    projectSlug: 'sovereign-villas-mokila',
    projectName: 'Pranitha Sovereign Villas',
    stage: 'progress',
    stageLabel: 'Site Progress',
    captureDate: 'February 2026',
    title: 'Main Entrance Plaza & CC Roads',
    caption: '40 ft internal concrete avenue laying and avenue drainage infrastructure near East Block.',
    image: '/images/6aebfe4bfac6e007cd49e71d_process-develop.webp',
  },
  {
    id: 'gal-sant-elev-1',
    projectSlug: 'santorini-villas-mokila',
    projectName: 'Pranitha Santorini Villas',
    stage: 'elevation',
    stageLabel: '3D Elevation',
    captureDate: 'Architectural Master Render',
    title: 'Mediterranean Villa Cluster',
    caption: 'Signature whitewashed colonnade geometry and terraced landscaped gardens.',
    image: '/images/6aebeddff10a750ce2a9feef_garden-house.webp',
  },
  {
    id: 'gal-sant-prog-1',
    projectSlug: 'santorini-villas-mokila',
    projectName: 'Pranitha Santorini Villas',
    stage: 'progress',
    stageLabel: 'Site Progress',
    captureDate: 'January 2026',
    title: 'Phase I Superstructure & Slab Cure',
    caption: 'Second-floor slab shuttering and curing completed for initial cluster villas.',
    image: '/images/6aebfe4b0568759fb5e63a81_process-build.webp',
  },
  {
    id: 'gal-amity-elev-1',
    projectSlug: 'amity-villas-mokila',
    projectName: 'Pranitha Amity Villas',
    stage: 'elevation',
    stageLabel: 'Completed Elevation',
    captureDate: 'Handover Archive',
    title: 'Occupied Streetscape at Dusk',
    caption: 'Delivered gated villas in Mokila surrounded by mature avenues and street lighting.',
    image: '/images/6aebfc57f10a750ce2ad8134_6aebfb947c6e6640c79f14a8_project-casa-lumen.webp',
  },
  {
    id: 'gal-amity-prog-1',
    projectSlug: 'amity-villas-mokila',
    projectName: 'Pranitha Amity Villas',
    stage: 'progress',
    stageLabel: 'Site Progress',
    captureDate: 'October 2025',
    title: 'Clubhouse & Lawn Finishing',
    caption: 'Operational clubhouse deck, stone pathway landscaping, and community handover.',
    image: '/images/6aebf54e74d687080341af37_6aebf4be79c1629fc7fbeff7_service-landscape-card.webp',
  },
  {
    id: 'gal-patio-elev-1',
    projectSlug: 'the-patio-mokila',
    projectName: 'Pranitha The Patio',
    stage: 'elevation',
    stageLabel: 'Completed Elevation',
    captureDate: 'Ready for Fit-Outs',
    title: 'Spanish Courtyard & Stone Portal',
    caption: 'Natural stone entrance archway leading to internal open-to-sky living courts.',
    image: '/images/6aebede031e8502a78d0f558_gate-house.webp',
  },
  {
    id: 'gal-patio-prog-1',
    projectSlug: 'the-patio-mokila',
    projectName: 'Pranitha The Patio',
    stage: 'progress',
    stageLabel: 'Site Progress',
    captureDate: 'December 2025',
    title: 'Model Villa Interior Daylight Court',
    caption: 'Completed timber staircase and lime plaster finishes inside the ready model villa.',
    image: '/images/6aebf10dee1fb68b5bedd21c_about-studio-interior.webp',
  },
  {
    id: 'gal-mer-elev-1',
    projectSlug: 'meridian-heights-kokapet',
    projectName: 'Pranitha Meridian Heights',
    stage: 'elevation',
    stageLabel: '3D Elevation',
    captureDate: 'Architectural Master Render',
    title: 'Kondakal – Kokapet High-Rise Towers',
    caption: 'Biophilic facade with recessed decks overlooking west Hyderabad lake corridors.',
    image: '/images/6aebf3288d23c90a1bb8c2c9_lake-pavilion.webp',
  },
  {
    id: 'gal-mer-prog-1',
    projectSlug: 'meridian-heights-kokapet',
    projectName: 'Pranitha Meridian Heights',
    stage: 'progress',
    stageLabel: 'Site Progress',
    captureDate: 'February 2026',
    title: 'Podium & Basement Raft Casting',
    caption: 'Excavation, soil stabilization, and basement footing reinforcement on Tower A.',
    image: '/images/6aec3e3a21161e0096d0d804_project-fog-island.webp',
  },
  {
    id: 'gal-plot-elev-1',
    projectSlug: 'singapur-town-plots',
    projectName: 'Pranitha Singapur Town — Phase II',
    stage: 'elevation',
    stageLabel: 'Master Layout',
    captureDate: 'Upcoming Launch',
    title: '28-Acre Master Plan Boulevard',
    caption: 'Planned 60 ft palm-lined entry axis, central park & underground utility trenches.',
    image: '/images/6aebf54f74d687080341af68_6aebf4bea78e0b27348d587a_service-planning.webp',
  },
  {
    id: 'gal-plot-prog-1',
    projectSlug: 'singapur-town-plots',
    projectName: 'Pranitha Singapur Town — Phase II',
    stage: 'progress',
    stageLabel: 'Site Progress',
    captureDate: 'January 2026',
    title: 'Site Levelling & Perimeter Fencing',
    caption: 'Topographic surveying, demarcation pillars, and boundary wall erection across Phase II.',
    image: '/images/6aebfe4a0568759fb5e63a27_process-listen.webp',
  },
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'blog-1',
    slug: 'why-mokila-villas-under-2cr-are-rare',
    category: 'Hyderabad Real Estate',
    date: 'Feb 14, 2026',
    readTime: '6 min read',
    title: 'Why ₹1.5 Cr – ₹2.0 Cr Gated Villas in Mokila Are West Hyderabad’s Rarest Opportunity',
    excerpt:
      'As Kokapet and Financial District apartment prices cross ₹1.8 Cr, independent triplex villa ownership in Mokila delivers superior land value and lifestyle headroom.',
    authorName: 'Varthya Devula Nayak',
    authorRole: 'Managing Director, Pranitha Developers',
    authorAvatar: '/images/6aec0a59c4d2d6970a71c1a8_6aec03e674dd489a2504d27b_team-daniel-wu.webp',
    image: '/images/6aec02397b1a88ec807118f1_6aec018fa7c676e605b65121_blog-curves-library.webp',
    paragraphs: [
      'Over the past thirty-six months, West Hyderabad has witnessed an extraordinary shift in residential pricing. A standard 3 BHK high-rise apartment in Kokapet or Nallagandla today routinely costs between ₹1.65 Cr and ₹2.30 Cr, leaving families with minimal undivided land share and shared corridor living.',
      'Just 12 minutes west of ORR Exit 2 at Kollur, the Mokila–Shankarpally corridor offers an entirely different proposition. Supported by lush green conservation zones, premier international schools, and widened radial links to Neopolis SEZ, Mokila has matured into Hyderabad’s preferred villa destination.',
      'Pranitha Sovereign Villas was purposefully master-planned to bridge this exact market gap: offering independent 180 to 260 Sq. Yd plots with 2,250 to 2,850 Sq. Ft. triplex architecture priced transparently between ₹1.50 Cr and ₹2.00 Cr. Buyers gain full land equity, private gardens, solar readiness, and a 20,000 Sq. Ft. clubhouse without over-leveraging.',
    ],
    keyTakeaways: [
      'Full 180–260 Sq. Yd plot ownership vs. limited UDS in high-rise towers.',
      '12 mins to ORR Exit 2 and 18 mins to Kokapet Neopolis IT & Global Capability Centres.',
      'Strong long-term capital appreciation driven by scarcity of sub-₹2 Cr gated HMDA villas.',
    ],
  },
  {
    id: 'blog-2',
    slug: 'orr-exit-2-kollur-neopolis-impact',
    category: 'Infrastructure',
    date: 'Jan 28, 2026',
    readTime: '5 min read',
    title: 'How ORR Exit 2 & Neopolis Are Reshaping the Mokila – Shankarpally Villa Corridor',
    excerpt:
      'A deep look at signal-free arterial roads, metro extensions, and international school clusters propelling residential demand west of Gachibowli.',
    authorName: 'Kavitha Varthya',
    authorRole: 'Director — Design & Client Relations',
    authorAvatar: '/images/6aec0a59c4d2d6970a71c1b1_6aec03e7797aac98d2c19e0f_team-claire-dubois.webp',
    image: '/images/6aec023a7b1a88ec80711964_6aec018e74dd489a2504245c_blog-daylight.webp',
    paragraphs: [
      'Infrastructure velocity defines real estate resilience. With Neopolis Kokapet auctioning commercial land at benchmark records and IT campuses expanding along the Wipro–Financial District belt, executive families are actively trading congested city lanes for low-density villa communities.',
      'Mokila benefits uniquely from direct access via Kollur Exit 2 on the Outer Ring Road alongside widened Shankarpally radial highways, keeping daily commutes under 25 minutes to major workplaces while preserving clean air, groundwater recharge, and tranquil horizons.',
    ],
    keyTakeaways: [
      'Signal-free ORR connectivity cut airport travel to under 40 minutes.',
      'Over 12 international IB/CBSE campuses operate within a 10–15 minute radius.',
    ],
  },
  {
    id: 'blog-3',
    slug: 'rera-hmda-villa-buyer-checklist',
    category: 'Homebuyer Guide',
    date: 'Jan 10, 2026',
    readTime: '7 min read',
    title: 'Before You Book a Villa in Hyderabad: 6 TG-RERA & HMDA Checks Every Family Must Verify',
    excerpt:
      'From link-document chains to HMDA LP final layout sanctions and bank APF codes—what true legal peace of mind looks like.',
    authorName: 'Srinivas Reddy K.',
    authorRole: 'Chief Structural Engineer',
    authorAvatar: '/images/6aec0a59c4d2d6970a71c1ab_6aec03e70db3b8d2a6c8b3b5_team-arjun-mehta.webp',
    image: '/images/6aec023b7b1a88ec807119e7_6aec018e79c1629fc7000219_blog-concrete.webp',
    paragraphs: [
      'Purchasing a villa is as much a legal commitment as a lifestyle milestone. Before signing an allotment letter, always verify HMDA layout permit numbers, TG-RERA registration status, 30-year encumbrance certificates, and mortgage releases.',
      'At Pranitha Developers, every community—whether delivered like Amity Villas (P02400006593) and The Patio (P02400009069), or ongoing like Santorini Villas (P02400009246)—comes with complete bank legal docket transparency across SBI, HDFC, ICICI, and Axis Bank.',
    ],
    keyTakeaways: [
      'Insist on HMDA final layout compliance and 40 ft internal road widths.',
      'Verify APF (Approved Project Financial) numbers from nationalized & private banks.',
    ],
  },
  {
    id: 'blog-4',
    slug: 'courtyard-ventilation-hyderabad-climate',
    category: 'Architecture & Craft',
    date: 'Dec 19, 2025',
    readTime: '4 min read',
    title: 'Natural Daylight, Double-Height Courtyards & Cross Ventilation in Modern Deccan Homes',
    excerpt:
      'How passive cooling geometry, deep overhangs, and AAC thermal blocks cut peak summer heat load inside Pranitha villas.',
    authorName: 'Ananya Deshmukh',
    authorRole: 'Principal Architect',
    authorAvatar: '/images/6aec107cf523d58a5f3ab208_6aec0f8aff9d28e26c8f3298_team-amara-osei.webp',
    image: '/images/6aec023c7b1a88ec80711a6a_6aec018e010159c61073febb_blog-timber.webp',
    paragraphs: [
      'Deccan summers demand intelligent architectural responses rather than relying purely on oversized air-conditioning tonnage. By recessing West-facing glazing behind pergola balconies and stacking bedrooms around vertical thermal chimneys, warm air naturally rises and vents out.',
      'Combined with thermally insulating AAC blocks and landscaped perimeter setbacks, our villas stay noticeably cooler during April and May afternoons while welcoming winter morning sun into family kitchens.',
    ],
    keyTakeaways: [
      'AAC masonry walls reduce indoor heat gain compared to solid brick alone.',
      'Cross-ventilated bedrooms lower daytime artificial lighting & HVAC usage.',
    ],
  },
];

export const HOME_FAQS: FaqEntry[] = [
  {
    question: 'What makes Pranitha Sovereign Villas priced at ₹1.5 Cr – ₹2.0 Cr unique in Mokila?',
    answer:
      'Most gated-community triplex villas along the Mokila–Kokapet belt now start upwards of ₹3 Cr. Pranitha Sovereign Villas offers independent 180–260 Sq. Yd plots with 2,250–2,850 Sq. Ft. triplex architecture, HMDA planning standards, and a 20,000+ Sq. Ft. clubhouse between ₹1.50 Cr and ₹2.00 Cr.',
  },
  {
    question: 'Are Pranitha Developers projects TG-RERA registered and bank loan approved?',
    answer:
      'Yes. Our ongoing and completed communities carry official TG-RERA registrations (including Santorini Villas P02400009246, Amity Villas P02400006593, and The Patio P02400009069) with HMDA-approved layouts and home loan tie-ups across SBI, HDFC, ICICI Bank, and Axis Bank.',
  },
  {
    question: 'How well connected are Mokila projects to Financial District, Neopolis & ORR?',
    answer:
      'Our corporate hub and flagship villa communities in Mokila sit roughly 12 minutes from ORR Exit 2 (Kollur), 18 minutes from Kokapet Neopolis SEZ, 25 minutes from Financial District / Wipro Circle, and within 8 minutes of premier international schools.',
  },
  {
    question: 'Can buyers see completed Pranitha villas before booking an ongoing unit?',
    answer:
      'Yes. We actively encourage prospective homeowners to walk through our completed, occupied communities—Pranitha Amity Villas and Pranitha The Patio—during your guided site visit so you can inspect construction finish, road widths, and clubhouse maintenance first-hand.',
  },
  {
    question: 'How do Channel Partners and Real Estate Consultants register with Pranitha Developers?',
    answer:
      'Consultants and TG-RERA registered realtors can submit their agency credentials directly on our Partner With Us page. Our dedicated CP Desk completes empanelment within 24–48 hours with transparent brokerage slabs and milestone payouts.',
  },
];

export const CONTACT_FAQS: FaqEntry[] = [
  {
    question: 'How do I schedule a guided site visit to Mokila or Kokapet projects?',
    answer:
      'Submit the form on this page or call/WhatsApp +91 9133637111. Our sales team is available Monday through Sunday, 9:30 AM to 6:30 PM, and can arrange complimentary pickup from Financial District or Kokapet upon prior request.',
  },
  {
    question: 'What documents should I review when visiting the Experience Lounge?',
    answer:
      'During your site tour at 6-109, Mokila Village, our legal desk walks you through HMDA layout sanctions, TG-RERA certificates, soil test reports, floor plan blueprints, and cost-sheet breakdowns with zero hidden charges.',
  },
  {
    question: 'Are NRIs eligible to purchase villas or register pre-launch plot interest?',
    answer:
      'Yes. We have a dedicated NRI concierge desk assisting buyers across the US, UK, UAE, and Singapore with Power of Attorney guidance, NRE/NRO home loan processing, and bi-monthly video progress updates.',
  },
  {
    question: 'What is the booking amount and payment schedule for Sovereign Villas?',
    answer:
      'Allotment starts with a standard booking token followed by transparent RERA-compliant construction-linked milestones synced to your bank disbursement schedule.',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Raghavendra Rao M.',
    role: 'Homeowner, Pranitha Amity Villas — Mokila',
    quote:
      '“Walking into an already-occupied Pranitha community gave our family total confidence. The structural quality, peaceful Mokila greenery, and transparent legal docket were everything promised.”',
    image: '/images/6aebff93adb211e47b911dd1_client-samuel-okafor.webp',
  },
  {
    name: 'Deepika & Karthik V.',
    role: 'Buyers, Pranitha Sovereign Villas (₹1.75 Cr)',
    quote:
      '“We looked at 3 BHK apartments in Kokapet costing ₹1.9 Cr, then visited Sovereign Villas. Getting an independent triplex villa on our own 215 Sq. Yd plot at ₹1.75 Cr was an easy decision.”',
    image: '/images/6aebff94a7c676e605b56732_client-elena-marsh.webp',
  },
  {
    name: 'Suresh Babu N.',
    role: 'Villa Owner, Pranitha The Patio',
    quote:
      '“The courtyard design keeps the house remarkably cool even in May. Clear milestone updates and direct access to leadership made fit-outs effortless.”',
    image: '/images/6aebff94adb211e47b911e92_client-henry-vale.webp',
  },
  {
    name: 'Lakshmi Prasanna K.',
    role: 'Senior Channel Partner, West Hyderabad',
    quote:
      '“Clients immediately appreciate the ₹1.5–2 Cr entry price point combined with delivered proof at Amity Villas. Pranitha’s CP support and timely payouts make them effortless to recommend.”',
    image: '/images/6aebff945193f559d20912d9_client-ines-laurent.webp',
  },
];
