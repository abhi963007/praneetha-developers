# PRD: Pranitha Developers — Corporate & Flagship Villas Showcase

> This is a living document. Update it as scope changes across iterations — don't treat it as written-once-and-frozen.

## Summary

A modern, high-converting full-stack corporate and project showcase web application for **Pranitha Developers** (V Praneeta Developers Private Limited, Hyderabad), centered around the flagship launch of luxury gated-community villas in Hyderabad priced between **₹1.5 Cr and ₹2.0 Cr**.

## Goals

- Position Pranitha Developers above baseline regional competitors (Green Mark Developers, Sark Projects) with enterprise-grade real estate UX (inspired by Urbanrise, My Home Group, Aparna Constructions) and a **modified Zuper-style scroll-triggered hero showcase**.
- Spotlight the rare **₹1.5 Cr – ₹2.0 Cr luxury villa** value proposition in the Mokila–Shankarpally corridor of West Hyderabad.
- Provide clear multi-level navigation across **Villas** (Completed & Ongoing), **Apartments** (Ongoing), and **Residential Plots** (Coming Soon).
- Deliver a dual-level **Gallery** (Project-wise tabs + Elevation vs. Date-Stamped Construction Progress), a **Channel Partner Onboarding** portal (`Partner With Us`), **Blogs**, **About Us** (with Leadership & RERA compliance), and **Contact Us** with live lead persistence.
- Ensure crisp responsiveness with dedicated media-query handling across Mobile (`<768px`), iPad/Tablet (`768px–1024px`), and Desktop (`>1024px`).

## Non-Goals

- Heavy CMS or full-blown Admin Dashboard (explicitly ruled out by client audio brief for Phase 1; structured seed data + lightweight JSON lead store is used instead).
- Online payment gateway or booking checkout (real estate conversions happen via Site Visit bookings, Enquiry modals, WhatsApp, and Click-to-Call).

## Feature Areas

| Feature Area | Description | Owns which data | Depends on |
|---|---|---|---|
| Showcase & Flagship Hero | Scroll-driven 3-chapter hero canvas, flagship metrics, company overview, FAQs | `companyInfo`, `faqs` | Projects |
| Projects Portfolio | Multi-level dropdown filtering, project cards, detail pages (floor plans, specs, amenities, map), plots teaser | `projects` | Gallery |
| Dual-Level Gallery | Project-wise tabs + Elevation vs. Date-stamped Current Progress photos + Lightbox | `galleryItems` | Projects |
| Lead & Channel Partner Capture | Site visit requests, general/contact enquiries, plot pre-launch interest, channel partner RERA registration | `leadsStore.json` (`enquiries`, `channelPartners`, `plotInterests`) | Projects |
| Editorial Blogs | Featured article, category filtering, full article view with embedded project CTA | `blogs` | — |

## Users & Scale

- Expected users: Public homebuyers, NRI investors, and Hyderabad real estate channel partners / brokers.
- Expected traffic: Marketing campaign and organic search traffic across mobile, iPad, and desktop viewports.
- Team size building this: Small agile web engineering & creative team.

## Stack

- Frontend: React 18 + TypeScript + Vite + Tailwind CSS + React Router + Lucide Icons
- Backend: Node.js + Express (`server/`)
- Data: Structured domain seed data (`server/data/seedData.js`) + file-backed JSON persistence (`server/data/leadsStore.json`)
- Integration targets: Google Maps Embed (`17.4264796, 78.1912362`), WhatsApp Deep Links (`+91 9133637111`), Click-to-Call.

## Constraints

- **Design Palette**: Clean architectural White (`#FFFFFF` / `#F7F8F5`) paired with Pranitha Brand Forest Emerald (`#007B3E` / `#053B20`), Olive Sage (`#8AB238`), and Luxury Gold (`#C5A059`).
- **Regulatory**: TG-RERA IDs and RERA disclaimers must be transparently surfaced in the footer, project pages, and channel partner form.
- **Responsive Media Queries**: Must cleanly adapt across Mobile (`320px–767px`), iPad (`768px–1024px`), and Desktop (`1025px+`).

## Open Questions

- Client to supply high-resolution MP4 walkthrough clips, final brochure PDFs, and high-res portraits of Managing Director Varthya Devula Nayak & Director Kavitha Varthya to swap into the ready media slots.

