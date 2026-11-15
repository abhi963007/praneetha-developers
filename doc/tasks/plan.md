# Implementation Plan: Pranitha Developers

## Overview
Full-stack Monolith React + Vite + TypeScript + Tailwind CSS + Node.js/Express corporate and luxury villa showcase website for Pranitha Developers (Hyderabad).

## Architecture Decisions
- **Monolith Full-Stack** per `/project-architecture`: Separate `/src` frontend and `/server/business` + `/server/data` backend layers, no `/ui` folder.
- **Scroll-Triggered Hero**: Custom `useScrollHero` hook + HTML5 Canvas architectural viewport rendering real-time lighting transitions, blueprint overlays, and 3 scroll chapters (`0%–35%`, `35%–70%`, `70%–100%`) inspired by the Zuper benchmark.
- **Responsive Media Queries**: Explicit breakpoints in `src/index.css` and Tailwind utilities targeting Mobile (`<768px`), iPad (`768px–1024px`), and Desktop (`>=1025px`).

## Task List

### Phase 1: Docs & Scaffolding
- [x] Task 1: Create PRD, Architecture, Quick Reference, Web Research, `AGENT.md`, `SPEC.md`, and `public/logo.png`
- [x] Task 2: Configure `package.json`, `vite.config.ts`, `tailwind.config.js`, `tsconfig.json`, and `index.html`

### Phase 2: Node.js Backend
- [x] Task 3: Build `server/data/seedData.js` and `server/data/repository.js`
- [x] Task 4: Build `server/business/` services and `server/index.js` API routes
- [x] Task 5: Write and run `server/selfTest.js`

### Phase 3: Frontend Core & Navigation
- [x] Task 6: Define `src/types.ts`, `src/index.css` (responsive media queries & typography), and `src/hooks/`
- [x] Task 7: Build `Navbar.tsx` (multi-level Projects dropdown), `Footer.tsx`, `EnquiryModal.tsx`, `FloatingCTAs.tsx`, `ProjectCard.tsx`
- [x] Task 8: Build `ScrollHeroShowcase.tsx` (Zuper-style scroll-triggered architectural hero)

### Phase 4: All Pages & Integration
- [x] Task 9: Build `Home.tsx` (7 sections) and `About.tsx` (story, founders, RERA)
- [x] Task 10: Build `ProjectsListing.tsx`, `ProjectDetail.tsx`, and `PlotsComingSoon.tsx`
- [x] Task 11: Build `Gallery.tsx` (dual-level filter + lightbox) and `PartnerWithUs.tsx`
- [x] Task 12: Build `Blogs.tsx`, `BlogPostDetail.tsx`, `Contact.tsx`, and wire `App.tsx`

### Checkpoint: Complete Verification
- [x] `npm run build` succeeds with zero TypeScript/Vite errors
- [x] `npm test` passes all backend & API assertions
- [x] Live server responds 200 on frontend & `/api/health`
