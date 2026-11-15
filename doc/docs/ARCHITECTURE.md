# Architecture: Pranitha Developers

> This is a living document. Update it whenever the tier, module boundaries, or layer responsibilities change.

## Tier

**Chosen tier:** Monolith (Full-Stack)

**Reasoning:** The application is a cohesive corporate real estate showcase and lead-capture platform built by a small team. All feature areas (Projects, Gallery, Blogs, Enquiries, Channel Partners) share the same core brand entities and lightweight Node.js persistence without separate billing/auth domains. A clean single-service full-stack monolith keeps boundaries clear without over-engineering into multi-module boilerplate.

## Structuring Pattern

Frontend and backend follow **separate structuring patterns** — there is no generic `/ui` layer on either side.

- **Backend:** business logic (`/server/business`) and data access (`/server/data`) are strictly separated. Route handlers in `/server/index.js` stay thin and only call into `/server/business` services, which are the only layer that talks to `/server/data/repository.js`.
- **Frontend:** organized by React + Vite conventions: `/src/pages` for route views, `/src/components` for reusable UI blocks, and `/src/hooks` for client-side API fetching and scroll-hero animation state. No `/ui` folder.

## Folder Layout

```text
d:\abhiram\Pranitha developers\
├── AGENT.md
├── SPEC.md
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── index.html
├── docs/
│   ├── PROJECT_OVERVIEW.md
│   ├── ARCHITECTURE.md
│   ├── QUICK_REFERENCE.md
│   └── WEB_RESEARCH_AND_BRAND_GUIDE.md
├── tasks/
│   ├── plan.md
│   └── todo.md
├── public/
│   ├── logo.png
│   └── favicon.svg
├── server/
│   ├── index.js
│   ├── selfTest.js
│   ├── business/
│   │   ├── projectService.js
│   │   ├── galleryService.js
│   │   ├── blogService.js
│   │   └── leadService.js
│   └── data/
│       ├── seedData.js
│       ├── leadsStore.json
│       └── repository.js
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── types.ts
    ├── hooks/
    │   ├── useApi.ts
    │   └── useScrollHero.ts
    ├── components/
    │   ├── Navbar.tsx
    │   ├── Footer.tsx
    │   ├── ScrollHeroShowcase.tsx
    │   ├── EnquiryModal.tsx
    │   ├── FloatingCTAs.tsx
    │   └── ProjectCard.tsx
    └── pages/
        ├── Home.tsx
        ├── About.tsx
        ├── ProjectsListing.tsx
        ├── ProjectDetail.tsx
        ├── PlotsComingSoon.tsx
        ├── Gallery.tsx
        ├── PartnerWithUs.tsx
        ├── Blogs.tsx
        ├── BlogPostDetail.tsx
        └── Contact.tsx
```

## Revision Log

| Date | Change | Reason |
|---|---|---|
| 2026-11-13 | Initial architecture | Project kickoff from Structure Plan Google Doc, client audio brief, and web research |

