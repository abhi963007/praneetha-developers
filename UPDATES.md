# Praneeta Developers — Complete Website Revamp & Design Specification

> **Source Google Doc:** [Praneeta Developers — Complete Website Revamp & Design Specification](https://docs.google.com/document/d/1w9uveOPenUSQMtb_AVoJ2DT-B9qxs-kLDCURHq8QIEQ/edit)  
> **Synced on:** 2026-11-18

This specification document outlines the complete architectural, visual, structural, and copy blueprint for revamping the official website of **Praneeta Developers**. It synthesizes all directive notes from the team lead and outcomes from the project review meeting into an actionable execution standard, followed by a file-by-file codebase gap map against the current repository.

---

## 1. Executive Overview & Brand Strategy

### Brand Identity & Leadership

- **Client:** Praneeta Developers ([praneetadevelopers.com](https://praneetadevelopers.com))
- **Managing Director:** V. Devula Nayak (Founder & MD)
- **Strategic Group Association:** Collaborating on multiple flagship gated communities across West Hyderabad in strategic association with [TAG Projects](https://tagprojects.in/) / TAG Group.

### Core Product Offerings

To ensure clear positioning, the site structure strictly enforces **three product categories only**:

1. **Villas:** Ongoing, Completed, and Upcoming
2. **Apartments:** Ongoing
3. **Residential Plots:** Coming Soon

*Strict Exclusions:* Completely eliminate "Services" from global navigation, routing, and site footers. Praneeta Developers is a luxury property builder selling real estate assets, not a service vendor. Do not list commercial office spaces or standalone non-gated independent houses.

### Growth Corridor & SEO Strategy

- **Core Development Belt:** Mokila – Shankarpally Road Corridor, West Hyderabad.
- **Flagship New Launch:** Kardanur (adjacent to the Mokila–Shankarpally belt). Internal layout features a 40 ft spinal road, 30 ft internal access roads for G+2 approvals, a grand clubhouse, and open green corridors.
- **Display Rule for Hero Section:** Always display **"Mokila"** in the Hero Section "Launching Soon" teaser card for immediate high-intent buyer recognition. Integrate Kardanur within technical project specifications and targeted SEO content body copy.
- **Target SEO Keywords:** *Villas in Mokila*, *Villas in Shankarpally*, *Villas in Kardanur*, *Luxury Villas in West Hyderabad*, *Upcoming Villa Projects in Hyderabad*, *Gated Community Villas near Financial District & Neopolis*.

### Target Buyer Personas (Ticket Size: ₹1.5 Cr – ₹2+ Cr)

- **IT Professionals & Corporate Executives:** Earning ₹20L–₹35L+ annually, eligible for home loans of ₹1 Cr to ₹2 Cr+, prioritizing stress-free commutes to Financial District, Neopolis, Kokapet, and HITEC City.
- **Business Owners & Entrepreneurs:** Seeking long-term asset appreciation and lifestyle upgrades.
- **Non-Resident Indians (NRIs):** Investing in secure, high-growth gated communities in West Hyderabad.
- **Apartment-to-Villa Upgraders:** Families transitioning from high-density apartment blocks to low-density, private G+2 gated villas.

### Visual Aesthetics, Typography & Standards

- **Typography:** Retain the website's currently active global font family across all pages, headings, and body copy. Only change the font of the **Home Page Hero Section main headline** (replacing the previous font used on 'BUILDING DREAMS IN HYDERABAD' that was disliked), keeping all other fonts across the website unchanged.
- **Palette & Logo Contrast:** Retain the clean light cream / off-white background canvas (`#FAFAFA` / `#F8FAFC`). Ensure the **"PRANEETA DEVELOPERS"** brand wordmark accompanying the logo mark features rich dark grey/navy contrast for high legibility across all display devices.
- **Visual Realism:** Exclude non-native elements like mountains or lakes in renders or media. All photography, video renders, and architectural visualizers must showcase native West Hyderabad terrain, lush manicured landscaping, and tree-lined avenues.

---

## 2. Global Navigation & Footer Specifications

### A. Sticky Header (Navbar)

- **Fixed Scroll Behavior:** The header must remain 100% fixed (`position: fixed`, `top: 0`) and fully visible during page scroll. Do NOT collapse navigation links into a hamburger icon on desktop screen sizes upon scrolling down.
- **Brand Mark:** Retain the emblem and sharp wordmark on the top left. Eliminate any floating full-screen text overlays over the hero canvas.
- **Exact Desktop Menu Order:**
  1. **Home**
  2. **About Us**
  3. **Projects** *(Interactive Dropdown Menu)*
     - **Villas** → *Ongoing | Upcoming | Completed*
       *(and **Apartments** → Ongoing)* *(note: source Google Doc renders `|---|→ Ongoing` under Villas)*
     - **Residential Plots** → *Coming Soon*
  4. **Gallery**
  5. **Blogs** *(Renamed from "Insights")*
  6. **Become a Partner** *(Replaces "Services"; modeled on [PropGo Channel Partner](https://propgo.in/channel-partner/))*
  7. **Contact Us**

### B. Global Footer

- **Brand Visibility:** Ensure high-contrast contrast ratios for the "Praneeta Developers" typography beside the logo.
- **Copyright Notice:** Clean, consolidated single line:
  `© 2026 Praneeta Developers. All Rights Reserved.`
- **Legal Links:** Provide accessible inline links to **Disclaimer** and **Privacy Policy**.
- **Social Media Icons:** Remove TikTok. Retain **Facebook, Instagram, LinkedIn, YouTube, and X (Twitter)**.
- **Footer Navigation Sync:** Ensure links mirror the global header (remove Services, add Become a Partner).

---

## 3. Home Page Blueprint (8-Section Sequence)

```text
+-----------------------------------------------------------------------+
|  SECTION 1: HERO (16:9 3D Render Video + "Launching Soon - Mokila")   |
+-----------------------------------------------------------------------+
|  SECTION 2: WHY CHOOSE US (4 Pillars + 6 Core Value Cards)            |
+-----------------------------------------------------------------------+
|  SECTION 3: OUR PORTFOLIO (3 Categories) & PROJECT LOGOS STRIP        |
+-----------------------------------------------------------------------+
|  SECTION 4: LOCATION ADVANTAGE (6 West Hyderabad IT Hub Commutes)     |
+-----------------------------------------------------------------------+
|  SECTION 5: OUR PROJECTS (Active Showcase: Amity, Patio, Santorini)  |
+-----------------------------------------------------------------------+
|  SECTION 6: BRAND EXPERIENCE VIDEO & LUXURY QUOTE BANNER              |
+-----------------------------------------------------------------------+
|  SECTION 7: NEWS & UPDATES (3 Selected Blog Cards)                    |
+-----------------------------------------------------------------------+
|  SECTION 8: FAQS (Interactive Accordion: RERA, Loans, Specs)          |
+-----------------------------------------------------------------------+
```

### Section 1: Hero Section

- **Background Visual:** Custom **8–10 second (16:9)** looping video render of the upcoming Mokila/Kardanur gated villa project. Animation sequence: camera descends through soft clouds to reveal the elevation set against green landscaping.
- **Headline Overlay:**
  - *Headline:* **Redefining Luxury Gated Communities in West Hyderabad**
  - *Subheadline:* *Crafting architectural landmarks with uncompromising quality, transparent governance, and timeless value.*
  - **Hero Headline Font Update:** Apply a refined, luxury-grade display font exclusively to the Hero Section main headline (replacing the previous font from 'BUILDING DREAMS IN HYDERABAD'), while preserving the website's existing fonts everywhere else.
- **Bottom-Right Floating Card ("Launching Soon"):**
  - **Tag / Title:** Launching Soon
  - **Location:** Mokila
  - **Description:** *A spectacular gated villa community launching soon in Mokila.*
  - **Primary CTA:** **Get in Touch** *(Triggers lead capture modal)*

### Section 2: Values / Why Choose Praneeta Developers

Structured around **4 Core Strategic Pillars** containing 6 consolidated value cards:

```text
                          [ WHY CHOOSE US ]
                                  |
    +-----------------+-----------+-----------+-----------------+
    |                 |                       |                 |
[ Value Gen ]   [ Affordability ]          [ Quality ]    [ Modern Living ]
    |                 |                       |                 |
  (Card 1)        (Card 2)                (Card 3 & 4)      (Card 5 & 6)
  Growth          Transparent             RERA & Timely     Design & Customer
  Corridors       Pricing                 Construction      Centricity
```

1. **Strategic Value Generation:** Prime land acquisition in West Hyderabad's highest appreciation corridor (Mokila–Shankarpally).
2. **Transparent Value & Affordability:** Competitive pricing structures without hidden fees or surprise clauses.
3. **Uncompromising Engineering Quality:** RERA-compliant structural design, premium material specifications, and strict quality control.
4. **Modern Suburban Living:** Low-density G+2 villa architecture, 30–40 ft internal avenues, expansive clubhouses, and green zones.

*6 Consolidated Value Cards:*

- *Customer-Centric Approach*
- *Innovative Architectural Design*
- *Superior Construction Standards*
- *Transparent Communication*
- *Timely Delivery Track Record*
- *Prime High-Growth Corridors*

### Section 3: Our Portfolio & Project Logos Strip

- **Interactive Category Selector:**
  - **Villas:** Interactive view linking to *Ongoing*, *Completed*, and *Upcoming*.
  - **Apartments:** Direct link to *Ongoing* (Praneeta Meridian).
  - **Residential Plots:** Visual state displaying *Coming Soon*.
- **Authentic Project Logos Strip:** Clean horizontal strip displaying official partner/project logos: **Praneeta Amity Villas**, **The Patio Villas**, **Santorini Villas**, **Praneeta Meridian**, **Singapore Town**, and **TAG Projects**.

### Section 4: Location Advantage (IT Corridor Connectivity)

Designed specifically for IT professionals and corporate managers commuting to major hubs.

```text
+-----------------------------------------------------------------------+
|                 MOKILA - SHANKARPALLY GROWTH BELT                     |
+-------------------+-------------------+-------------------------------+
| Destination       | Approx. Distance  | Typical Commute               |
+-------------------+-------------------+-------------------------------+
| Financial District| 18 - 20 km        | 25 - 30 Mins via Shankarpally |
| Neopolis (Kokapet)| 16 - 18 km        | 20 - 25 Mins via Trunk Road   |
| Kokapet SEZ       | 17 - 19 km        | 22 - 28 Mins                  |
| HITEC City        | 24 - 26 km        | 35 - 40 Mins                  |
| Kondapur          | 22 - 25 km        | 35 Mins                       |
| Madhapur          | 25 - 27 km        | 40 Mins                       |
+-----------------------------------------------------------------------+
```

### Section 5: Our Projects (Active Portfolio)

- **Section Title:** **Our Projects**
- **Cards Array:** Active project cards featuring real architectural renders, precise locations, unit configurations, delivery timelines, and direct **View Details** triggers.

### Section 6: Brand Experience Video & Quote Banner

- **Visual Frame:** High-definition video player showing community life, clubhouses, and green avenues.
- **Quote Copy:** *"Architecture should speak of its time and place, but yearn for timelessness. We build environments where families grow, thrive, and create lasting legacies."*
- **Call to Action:** **Get in Touch**

### Section 7: News & Updates (Blogs Preview)

Displays three curated blog post cards:

1. *Why Mokila–Shankarpally is West Hyderabad's Premier Villa Destination*
2. *The Definitive Homebuyer Checklist for TG-RERA Approved Gated Communities*
3. *Comparing Real Estate Appreciation: Apartments vs. Independent Villas in 2026*

### Section 8: Interactive FAQs

- **Q1: Are all Praneeta Developers projects TG-RERA approved?**
  - *A:* Yes. Every project is fully registered with TG-RERA before public launch. Individual RERA registration numbers are displayed on each project page and documentation.
- **Q2: Which major banks are approved for home loans across your projects?**
  - *A:* Our projects are pre-approved by major financial institutions including HDFC Bank, ICICI Bank, State Bank of India (SBI), Axis Bank, and Bajaj Housing Finance.
- **Q3: What are the typical possession timelines for ongoing villa communities?**
  - *A:* Delivery schedules range from December 2027 through 2029 depending on the specific phase and project selected. Detailed timelines are codified in buyer agreements.
- **Q4: What road infrastructure supports the upcoming Mokila/Kardanur development?**
  - *A:* The layout features a 40 ft spinal master road and 30 ft internal access roads designed to comfortably accommodate G+2 residential approvals and underground utility infrastructure.

---

## 4. Inner Pages Blueprint

### Page 2: About Us

- **Hero Banner:** Clean header with clear title **About Us** and subtitle *Building Luxury Landmarks in West Hyderabad*.
- **Leadership Profile & Story:** Detailed profile of **V. Devula Nayak (Founder & MD)** highlighting over a decade of real estate leadership. Elaborate on the strategic association with [TAG Projects](https://tagprojects.in/) in delivering large-scale gated communities.
- **Customer Testimonials Slider:** Includes verified-buyer feedback, ratings, and quotes from IT executives and NRI investors across delivered phases.
- *Note:* Removed "Our Process" 3-step section and transferred 6 value cards to the Home page to avoid redundancy.

### Page 3: Projects & Project Detail Pages

- **Main Projects Directory Page:**
  - **Hero Header:** Displays *Projects by Praneeta Developers* with brand graphics.
  - **Tabs Filter System:** `All Projects` | `Villas (Ongoing / Upcoming / Completed)` | `Apartments (Ongoing)` | `Residential Plots (Coming Soon)`.
- **Individual Project Detail View (e.g., Praneeta Meridian, Amity Villas):**
  - **Dynamic Hero Header:** Header title and hero imagery dynamically adjust to display the specific project title (e.g., **Praneeta Meridian**) and corresponding render.
  - **Structured Detail Grid:** Prominently lists RERA numbers, exact plot/villa sizes, floor plans, master layout maps, clubhouse amenity lists, construction updates, and embedded Google Maps coordinates.

### Page 4: Become a Partner (Channel Partner Portal)

Modeled on industry best practices ([PropGo Channel Partner](https://propgo.in/channel-partner/)).

```text
+-----------------------------------------------------------------------+
|             BECOME A PRANEETA DEVELOPERS CHANNEL PARTNER              |
|                                                                       |
|  Join Hyderabad's fastest-growing quality-delivering property         |
|  developer. Access premium inventory, earn attractive payouts, and    |
|  close more deals with dedicated support.                             |
+-----------------------------------------------------------------------+
|                      4 PARTNER VALUE PILLARS                          |
| 1. Premium Inventory  2. Competitive Payouts  3. Sales Kits  4. Trust  |
+-----------------------------------------------------------------------+
|                           REGISTRATION FORM                           |
| [ Full Name ]                     [ Phone Number ]                    |
| [ Email Address ]                 [ Partner Type (Individual/Firm) ]  |
| [ Preferred Project Dropdown ]                                        |
| [ Additional Notes / Message Area ]                                   |
|                              [ REGISTER NOW ]                         |
+-----------------------------------------------------------------------+
```

### Page 5: Gallery

- High-resolution visual repository featuring project milestone renders, architectural photography, interior mockups, and construction progress updates categorized by project name.

### Page 6: Blogs (Renamed from Insights)

- **Hero Header:** Standardized title **Blogs** with subtitle *Insights, Real Estate Trends & West Hyderabad Market Analysis*.
- Clean grid layout featuring pagination, search, category tags, and estimated reading times.

### Page 7: Contact Us

- Operational address details, direct telephone lines, sales inquiry email forms, interactive Google Maps office location embed, and a project selection dropdown.

---

## 5. Reference Matrix, Assets & Developer Checklist

### A. Known Projects Reference Table

| Project Name | Category | Status | Strategic Location | Key Structural & Architectural Specifications |
| :--- | :--- | :--- | :--- | :--- |
| **Upcoming Mokila Project** | Villas | Upcoming (Launching Soon) | Kardanur / Mokila Belt | G+2 Luxury Villas, 40 ft spinal road, 30 ft internal avenues, Grand Clubhouse, vast open greens. *(Display "Mokila" in Hero)* |
| **Praneeta Amity Villas** | Villas | Ongoing | Mokila, Hyderabad | Triplex 5 BHK Gated Community (~3,300 sq.ft.), 76 units across 6.5 acres, complimentary elevator, Possession: 2027–2029 |
| **Praneeta The Patio Villas** | Villas | Ongoing | Mokila, Hyderabad | Open Courtyard 5 BHK Luxury Villas (~300 sq.yds.), 9.2-acre master plan, RERA: P02400008328, Possession: Dec 2027 |
| **Praneeta Santorini Villas** | Villas | Ongoing | Mokila, Hyderabad | Mediterranean-inspired 4 & 5 BHK Luxury Villas (~300–433 sq.yds.), Possession: Dec 2027 |
| **Praneeta Meridian** | Apartments | Ongoing | West Hyderabad | Contemporary Gated Multi-Story Residential Apartments with clubhouse & lifestyle amenities |
| **Praneeta Singapore Town** | Villas / Community | Ongoing / Completed | Shankarpally / Mokila | Integrated residential community (Phases I & II), RERA: P02400001808 |

### B. Pending Production Assets

1. **Hero Section 16:9 Render Video (8–10 sec):** Clouds opening to reveal Mokila villa elevation (Ganesh / Karthik).
2. **Section 6 Lifestyle Video Asset:** High-resolution lifestyle footage for the quote banner (Karthik).
3. **About Us Copy Expansion:** Expanded corporate background text (Karthik).

### C. Developer Execution Checklist

- [ ] **Typography & Palette:** Keep the existing global website fonts unchanged across all pages and sections; upgrade the font **only** for the Home Page Hero Section main headline. Apply high-contrast CSS styling to the header/footer wordmarks.
- [ ] **Fixed Sticky Navigation:** Pin header to `position: fixed`. Ensure desktop menu links remain visible during scroll without collapsing into a drawer menu.
- [ ] **Site Menu Structure:** Update navbar links to: *Home*, *About Us*, *Projects (Dropdown)*, *Gallery*, *Blogs*, *Become a Partner*, *Contact Us*.
- [ ] **Home Page Layout:** Build sections in exact sequence: Hero (Video + "Launching Soon - Mokila" card) → Why Choose Us (4 Pillars + 6 Cards) → Portfolio + Logos Strip → Location Advantage (6 IT Hub Commute Matrix) → Our Projects → Experience Video + Quote → Blogs Preview → FAQs Accordion.
- [ ] **Content Cleanup:** Remove generic mountain/lake visual elements, delete TikTok icon, drop empty placeholder logos, and replace footer RERA lists with single copyright line and legal links.
- [ ] **Inner Page Routing:** Build the **Become a Partner** page with complete form validation. Set up dynamic title/banner binding for project detail sub-pages.
- [ ] **SEO Optimization:** Inject target keyword clusters (*Mokila*, *Shankarpally*, *Kardanur*, *West Hyderabad Luxury Villas*) across structural headers, alt text, and metadata.

---

## 6. Codebase Gap & File-by-File Update Map

This section maps every requirement in the specification above to the current files in `src/` and `server/` so implementation work has exact targets.

### A. Global Navigation, Routing & Footer

| Target Area | Current State in Repo | Required Updates & Exact Files |
| :--- | :--- | :--- |
| **Routes & Page Metadata** | `src/App.tsx` maps `/services`, `/services/:slug`, `/insights`, `/insights/:slug` and has no `/become-a-partner` or `/blogs` route. `src/types/site.ts` includes `'services'` in `PageKey`, `NAV_LINKS`, and `FOOTER_LINKS`, and labels `/insights` as `Insights` in `PAGE_META`. | Remove `/services` and `/services/:slug` from `src/App.tsx`; delete `src/pages/ServicesPage.tsx`, `src/sections/services/ServicesListSection.tsx`, and `src/sections/services/services-section.css`. Rename `Insights` → `Blogs` (`/blogs` or `/insights` with label `Blogs`). Add `/become-a-partner` (plus optional `/disclaimer` & `/privacy-policy` routes). Update `PAGE_META`, `NAV_LINKS`, `FOOTER_LINKS`, `CATEGORY_LINKS`, and `isRouteActive` in `src/types/site.ts`. |
| **Sticky Desktop Header & Projects Dropdown** | `src/components/Navbar.tsx` + `src/components/navbar-menu.css` track `isScrolled` (`window.scrollY > 80`) and pair desktop nav links with a hamburger drawer button; Projects is a plain link with no dropdown; social links in drawer point to `#social-*` without YouTube. | Keep header `position: fixed; top: 0` with desktop links visible on scroll (do not collapse desktop links into a hamburger drawer on desktop). Add interactive dropdown under **Projects**: **Villas** → *Ongoing \| Upcoming \| Completed*, **Apartments** → *Ongoing*, **Residential Plots** → *Coming Soon*. Apply high-contrast dark grey/navy styling to the `"PRANEETA DEVELOPERS"` wordmark next to the logo mark. |
| **Global Footer** | `src/components/Footer.tsx` + `src/components/footer-custom.css` list `/services` via `FOOTER_LINKS`, show TikTok (`#social-tiktok`) without YouTube, and print multi-RERA numbers (`TG-RERA: P02400009246...`) instead of Disclaimer/Privacy links. | Sync footer nav with header (remove `Services`, add `Become a Partner`, rename `Blogs`). Remove TikTok; keep **Facebook, Instagram, LinkedIn, YouTube, and X (Twitter)**. Replace the RERA bottom line with `© 2026 Praneeta Developers. All Rights Reserved.` plus inline links to **Disclaimer** and **Privacy Policy**. Ensure high-contrast wordmark beside the footer logo. |

### B. Home Page 8-Section Sequence (`src/pages/HomePage.tsx`)

`src/pages/HomePage.tsx` currently renders `Navbar`, `HomeHeroAndCategoriesSection`, `PartnerLogosSection`, `HomeServicesSection`, `HomePropertiesSection`, `HomeVideoSection`, `HomeGallerySection`, `HomeInsightsAndFooterSection` (with `AdvisorsSliderSection`, `FaqSection`, `MarqueeSection`, `TestimonialsSection`, `HomeHowWeWorkSection`, and `HomeTrackRecordSection` commented out). Reorder and update `HomePage.tsx` to follow the exact 8-section sequence below:

| # | Spec Section | Current State & Target Files | Required Changes |
| :- | :--- | :--- | :--- |
| **1** | **Hero (16:9 Render Video + "Launching Soon - Mokila")** | `src/components/ScrollHero.tsx`, `src/components/scroll-hero.css`, `src/sections/home/HomeHeroAndCategoriesSection.tsx` | Swap in the 8–10s 16:9 looping Mokila/Kardanur cloud-descent villa video (excluding non-native mountains/lakes). Remove floating full-screen overlays (`"Building Dreams in Hyderabad"` / `"Praneeta Developers"` sky text in `ScrollHero.tsx`) or replace with headline **"Redefining Luxury Gated Communities in West Hyderabad"** and subheadline *"Crafting architectural landmarks with uncompromising quality, transparent governance, and timeless value."* Upgrade the font **exclusively** on the Hero main headline while keeping all other site fonts unchanged. Replace `.hero-end-card` content with the bottom-right **"Launching Soon"** card (`Location: Mokila`, description *"A spectacular gated villa community launching soon in Mokila."*, primary CTA **Get in Touch** triggering a lead capture modal). |
| **2** | **Why Choose Praneeta Developers (4 Pillars + 6 Cards)** | Currently `WHY_CHOOSE_PILLARS` (6 cards) lives in `src/sections/about/FounderSpotlightSection.tsx` on the About page; `HomeServicesSection` is in this slot on Home. | Remove `HomeServicesSection` from Home. Create/move Why Choose Us section into `src/sections/home/` with **4 Core Strategic Pillars** (*Strategic Value Generation*, *Transparent Value & Affordability*, *Uncompromising Engineering Quality*, *Modern Suburban Living*) housing the **6 Consolidated Value Cards** (*Customer-Centric Approach*, *Innovative Architectural Design*, *Superior Construction Standards*, *Transparent Communication*, *Timely Delivery Track Record*, *Prime High-Growth Corridors*). |
| **3** | **Our Portfolio (3 Categories) & Project Logos Strip** | `src/sections/home/HomeHeroAndCategoriesSection.tsx` (`PRIMARY_CATEGORIES` has 4 cards with mismatched subtitles like `"Sovereign & Santorini"` and `"Amity & The Patio"` under Completed); `src/components/PartnerLogosSection.tsx` uses 12 `logoipsum-*.svg` placeholders. | Enforce strictly **3 product categories** (**Villas**: *Ongoing, Completed, Upcoming*; **Apartments**: *Ongoing* — Praneeta Meridian; **Residential Plots**: *Coming Soon*). Replace all `logoipsum-*.svg` placeholders in `PartnerLogosSection.tsx` with official project/partner logos: **Praneeta Amity Villas**, **The Patio Villas**, **Santorini Villas**, **Praneeta Meridian**, **Singapore Town**, and **TAG Projects**. |
| **4** | **Location Advantage (6 West Hyderabad IT Hub Commutes)** | Not implemented yet. | Create `src/sections/home/HomeLocationAdvantageSection.tsx` presenting the **Mokila – Shankarpally Growth Belt** commute matrix: Financial District (18–20 km, 25–30 Mins), Neopolis Kokapet (16–18 km, 20–25 Mins), Kokapet SEZ (17–19 km, 22–28 Mins), HITEC City (24–26 km, 35–40 Mins), Kondapur (22–25 km, 35 Mins), Madhapur (25–27 km, 40 Mins). |
| **5** | **Our Projects (Active Portfolio)** | `src/sections/home/HomePropertiesSection.tsx` maps all entries from `PROPERTIES_DATA` in `src/sections/properties/PropertiesListingSection.tsx`. | Align `PROPERTIES_DATA` with the Known Projects Reference Table: add **Upcoming Mokila Project** (*Kardanur / Mokila Belt*, Upcoming), update **Praneeta Amity Villas** (*76 units, 6.5 acres, ~3,300 sq.ft., complimentary elevator, Possession: 2027–2029*), **Praneeta The Patio Villas** (*9.2-acre master plan, ~300 sq.yds., RERA: P02400008328, Dec 2027*), **Praneeta Santorini Villas** (*4 & 5 BHK, ~300–433 sq.yds., Dec 2027*), **Praneeta Meridian**, and **Praneeta Singapore Town** (*Phases I & II, RERA: P02400001808*). |
| **6** | **Brand Experience Video & Luxury Quote Banner** | `src/sections/home/HomeVideoSection.tsx` renders `/video/serene-living.mp4` with `"Designed for Serene Living"` and `"Explore Properties"` CTA. | Update visual asset when ready, replace quote copy with *"Architecture should speak of its time and place, but yearn for timelessness. We build environments where families grow, thrive, and create lasting legacies."*, and update CTA to **Get in Touch**. |
| **7** | **News & Updates (Blogs Preview)** | `src/sections/home/HomeInsightsAndFooterSection.tsx` renders `INSIGHT_ARTICLES.slice(0, 3)` (heading `"Praneeta Journal"`) and embeds `<Footer variant="sticky" />`. | Rename section heading/eyebrow for News & Updates / Blogs and update the 3 featured blog cards to: (1) *Why Mokila–Shankarpally is West Hyderabad's Premier Villa Destination*, (2) *The Definitive Homebuyer Checklist for TG-RERA Approved Gated Communities*, (3) *Comparing Real Estate Appreciation: Apartments vs. Independent Villas in 2026*. Move `<Footer />` below Section 8 (FAQs). |
| **8** | **Interactive FAQs** | `src/components/FaqSection.tsx` is commented out in `HomePage.tsx`, uses inline `style={{ opacity: 0 }}` on `.faq-content` / `.faq-wrapper`, and contains 5 outdated "Sovereign Villas" Q&As. | Re-enable `FaqSection` as Section 8 on `HomePage.tsx`, remove inline `style={{ opacity: 0 }}` (ensure interactive React accordion toggle works without relying on Webflow IX), and replace Q&As with the 4 specification items (TG-RERA approval, pre-approved banks HDFC/ICICI/SBI/Axis/Bajaj Housing Finance, Dec 2027–2029 possession timelines, and 40 ft spinal / 30 ft internal road infrastructure). |

*(Note: `HomeGallerySection.tsx` is currently rendered between Video and Insights on `HomePage.tsx`, whereas the 8-section Home Page Blueprint places Gallery on its dedicated inner page and sequences Section 6 → Section 7 Blogs → Section 8 FAQs.)*

### C. Inner Pages & Backend (`src/pages/*`, `server/*`)

| Page / Layer | Current State in Repo | Required Updates & Exact Files |
| :--- | :--- | :--- |
| **Page 2: About Us** | `src/pages/AboutPage.tsx`, `src/sections/about/AboutStorySection.tsx`, `src/sections/about/FounderSpotlightSection.tsx`, `src/sections/about/AboutProcessSection.tsx`. Currently displays `AboutProcessSection` (3 steps) and `WHY_CHOOSE_PILLARS` (6 cards), omits `TestimonialsSection` and **TAG Projects** association. | Update `PageBannerSection` subtitle in `src/components/PageBannerSection.tsx` to *Building Luxury Landmarks in West Hyderabad*. Expand `AboutStorySection.tsx` / `FounderSpotlightSection.tsx` with V. Devula Nayak profile and strategic association with **TAG Projects** (`https://tagprojects.in/`). Remove `AboutProcessSection.tsx` and move the 6 value cards to the Home page. Mount `TestimonialsSection.tsx` on `AboutPage.tsx` with verified IT executive & NRI homeowner quotes. |
| **Page 3: Projects & Project Detail** | `src/pages/PropertiesPage.tsx`, `src/sections/properties/PropertiesListingSection.tsx`. Uses static `PageBannerSection` title `"Properties"`, 3 filter pills (`All Projects`, `Villas - Ongoing`, `Apartments`, `Villas - Completed`), and `window.history.replaceState` on filter clicks. | Update main directory hero title to *Projects by Praneeta Developers*. Add filter tabs for `All Projects`, `Villas (Ongoing / Upcoming / Completed)`, `Apartments (Ongoing)`, and `Residential Plots (Coming Soon)`. Replace `window.history.replaceState` with React Router navigation. Bind `PageBannerSection` title and hero image dynamically on `/property/:slug` to the selected project (`selectedProperty.name` and render). Fix `PropertyCard` carousel arrows to use React state rather than static `.w-slider`. |
| **Page 4: Become a Partner** | Does not exist (currently `/services` renders `ServicesPage.tsx`). | Create `src/pages/BecomePartnerPage.tsx` (and section/CSS under `src/sections/partner/`) modeled on PropGo Channel Partner: hero banner, **4 Partner Value Pillars** (*1. Premium Inventory, 2. Competitive Payouts, 3. Sales Kits, 4. Trust*), and **Registration Form** (*Full Name*, *Phone Number*, *Email Address*, *Partner Type [Individual/Firm]*, *Preferred Project Dropdown*, *Additional Notes*, *Register Now*). |
| **Page 5: Gallery** | `src/pages/GalleryPage.tsx`, `src/sections/gallery/GalleryShowcaseSection.tsx`. Filters by `'All' | 'Elevations & Interiors' | 'Site Progress' | 'Events & Expos'`. | Update gallery categorization so entries can be filtered by **project name** alongside milestone renders, architectural photography, interior mockups, and construction progress updates. |
| **Page 6: Blogs** | `src/pages/InsightsPage.tsx`, `src/sections/insights/InsightsGridSection.tsx`. Titled `Insights`, no pagination, search, or category tags. | Rename page & banner title to **Blogs** with subtitle *Insights, Real Estate Trends & West Hyderabad Market Analysis*. Add search, category tags, pagination, and update articles to match the Home Page preview posts. |
| **Page 7: Contact Us** | `src/pages/ContactPage.tsx`, `src/sections/contact/ContactFormSection.tsx`. Has inquiry form, Google Maps embed (`17.4560614,78.1985395`), and `PROPERTY_INTERESTS` dropdown. | Verify project selection dropdown includes all current portfolio projects (including Upcoming Mokila Project) and sync copy/SEO metadata (`Mokila`, `Shankarpally`, `Kardanur`). |
| **Backend API & Tests** | `server/index.js` exposes `GET /api/health`, `GET /api/site-data`, `POST /api/contact`, `POST /api/newsletter` storing to `server/data/submissions.json`. `GET /api/site-data` lists `['/','/about-us','/properties','/gallery','/services','/insights','/contact-us']`. | Add `POST /api/channel-partners` (validating Full Name, Phone Number, Email, Partner Type, Preferred Project, Notes) and persist to `submissions.json` atomically (`writeFileSync` to `.tmp` + `renameSync`). Update `/api/site-data` `pages` array (remove `/services`, add `/become-a-partner`, update `/blogs` or `/insights`) and extend `server/selfTest.js`. |
