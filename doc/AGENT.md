# AGENT.md — Pranitha Developers (root)

> This file is a living document. Update it as the project evolves — don't let it drift from reality.

## What this project is

A full-stack React + Node.js corporate and luxury real estate showcase website for **Pranitha Developers** (Hyderabad), spotlighting their flagship **₹1.5 Cr – ₹2.0 Cr** villa launch with a scroll-triggered hero showcase, multi-level project portfolio, dual-level gallery, channel partner onboarding, blogs, and enquiry capture.

## Tier

Monolith (Full-Stack) — see `/docs/ARCHITECTURE.md` for full reasoning.

## Structuring pattern (read this before touching any layer)

Frontend and backend use **separate patterns** — there is no `/ui` folder on either side.

- **Backend:** `/server/business` (logic/validation) is separate from `/server/data` (queries/persistence). Express handlers in `/server/index.js` stay thin and only call into `/server/business`.
- **Frontend:** React + Vite structure (`/src/pages`, `/src/components`, `/src/hooks`). Route/page components stay thin and call shared hooks in `/src/hooks`.

## Folder map

```text
/public         (logo.png, favicon.svg)
/docs           (PROJECT_OVERVIEW.md, ARCHITECTURE.md, QUICK_REFERENCE.md, WEB_RESEARCH_AND_BRAND_GUIDE.md)
/tasks          (plan.md, todo.md)
/server
  index.js      (Express server & API endpoints)
  selfTest.js   (Backend verification suite)
  /business     (projectService.js, galleryService.js, blogService.js, leadService.js)
  /data         (seedData.js, repository.js, leadsStore.json)
/src
  main.tsx, App.tsx, index.css, types.ts
  /hooks        (useApi.ts, useScrollHero.ts)
  /components   (Navbar, Footer, ScrollHeroShowcase, EnquiryModal, FloatingCTAs, ProjectCard)
  /pages        (Home, About, ProjectsListing, ProjectDetail, PlotsComingSoon, Gallery, PartnerWithUs, Blogs, BlogPostDetail, Contact)
```

## Conventions

- Filename for agent context: `AGENT.md`.
- Brand colors: White primary surfaces (`#FFFFFF`, `#F7F8F5`), Emerald Green (`#007B3E`, `#053B20`), Olive Accent (`#8AB238`), Luxury Gold (`#C5A059`).
- All form submissions (`POST /api/enquiries`, `POST /api/channel-partners`, `POST /api/plot-interest`) must validate required fields in `/server/business/leadService.js` before persisting via `/server/data/repository.js`.
- Responsive design must preserve clean layouts across Mobile (`<768px`), iPad (`768px–1024px`), and Desktop (`>=1025px`).

## Where things live

- PRD: `/docs/PROJECT_OVERVIEW.md`
- Full architecture + reasoning: `/docs/ARCHITECTURE.md`
- Quick reference: `/docs/QUICK_REFERENCE.md`
- Web research & brand guide: `/docs/WEB_RESEARCH_AND_BRAND_GUIDE.md`

