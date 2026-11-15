# Architecture Essentials: Pranitha Developers

> One-page quick reference. Keep this short — full detail lives in ARCHITECTURE.md.

**Tier:** Monolith (Full-Stack)

**Stack:** React 18 + TypeScript + Vite + Tailwind CSS + Node.js/Express + JSON/Seed Data

**Golden rule:** Frontend and backend use separate patterns — no `/ui` folder on either side.
- Backend: `server/business` and `server/data` are separate; Express handlers in `server/index.js` stay thin.
- Frontend: `/src/pages` stay thin and compose `/src/components` and `/src/hooks`.

**Layout at a glance:**
```text
/src
  /pages        (Home, About, ProjectsListing, ProjectDetail, PlotsComingSoon, Gallery, PartnerWithUs, Blogs, BlogPostDetail, Contact)
  /components   (Navbar, Footer, ScrollHeroShowcase, EnquiryModal, FloatingCTAs, ProjectCard)
  /hooks        (useApi, useScrollHero)
/server
  index.js      (thin Express API routes + static serving)
  /business     (validation & service logic)
  /data         (seedData + JSON file repository)
/docs           (PROJECT_OVERVIEW.md, ARCHITECTURE.md, QUICK_REFERENCE.md, WEB_RESEARCH_AND_BRAND_GUIDE.md)
```

**Where does new code go?**
- New page or component → `/src/pages/` or `/src/components/`
- New frontend data hook → `/src/hooks/`
- New business validation/rule → `/server/business/`
- New data query or storage → `/server/data/`
- Not sure if the monolith should go modular? → rerun Step 2 scope check in `project-architecture` skill.

