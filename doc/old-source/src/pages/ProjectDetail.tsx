import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Maximize2, X } from 'lucide-react';
import { useApi } from '../hooks/useApi';
import { useReveal } from '../hooks/useReveal';
import type { CompanyInfo, FloorPlan, Project } from '../types';

interface ProjectDetailProps {
  onOpenEnquiry: (defaultProject?: string) => void;
}

export function ProjectDetail({ onOpenEnquiry }: ProjectDetailProps) {
  const { slug } = useParams<{ slug: string }>();
  const { data: project, loading, error } = useApi<Project>(slug ? `/api/projects/${slug}` : null);
  const { data: company } = useApi<CompanyInfo>('/api/company');
  const revealRef = useReveal<HTMLDivElement>([loading, project?.id]);

  const [selectedPlanIdx, setSelectedPlanIdx] = useState(0);
  const [zoomPlan, setZoomPlan] = useState<FloorPlan | null>(null);
  const [selectedAmenityGroup, setSelectedAmenityGroup] = useState<string>('');

  useEffect(() => {
    setSelectedPlanIdx(0);
    if (project?.amenities) {
      const firstKey = Object.keys(project.amenities)[0] || '';
      setSelectedAmenityGroup(firstKey);
    }
  }, [project]);

  if (loading) {
    return (
      <div className="edge-container pb-20 pt-14">
        <div className="h-[50vh] animate-pulse rounded-sm bg-brand-cream" />
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-32 text-center">
        <h1 className="font-display text-4xl font-semibold text-brand-dark">Project Not Found</h1>
        <Link
          to="/projects"
          className="mt-6 inline-block rounded-sm bg-brand-dark px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white"
        >
          ← Back to Projects
        </Link>
      </div>
    );
  }

  const activePlan = project.floorPlans[selectedPlanIdx] || project.floorPlans[0] || null;
  const amenityGroups = Object.keys(project.amenities || {});
  const activeAmenities = selectedAmenityGroup
    ? project.amenities[selectedAmenityGroup] || []
    : amenityGroups[0]
      ? project.amenities[amenityGroups[0]]
      : [];

  return (
    <div ref={revealRef} className="bg-white">
      {/* 1. Hero Banner + 4-Col Key Facts Bar */}
      <section className="relative overflow-hidden bg-brand-ink text-white">
        <div className="absolute inset-0">
          <img
            src={project.heroImage}
            alt={project.name}
            className="h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/70 to-transparent" />
        </div>

        <div className="edge-container relative py-14 lg:py-20">
          <nav className="text-[11px] uppercase tracking-[0.16em] text-white/75" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/projects" className="hover:text-white">
              Projects
            </Link>
            <span className="mx-2">/</span>
            <span className="text-brand-gold">{project.name}</span>
          </nav>

          <div className="mt-8 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em]">
                <span className="rounded-sm bg-brand-green px-2.5 py-1 text-white">
                  {project.status}
                </span>
                <span className="text-brand-gold">{project.reraId}</span>
              </div>
              <h1 className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
                {project.name}
              </h1>
              <p className="mt-2.5 text-sm text-white/85 sm:text-base">{project.subtitle}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold">
                {project.location} · {project.priceRange}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onOpenEnquiry(project.name)}
                className="rounded-sm bg-white px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-dark transition-colors hover:bg-brand-gold"
              >
                Schedule Visit
              </button>
              <button
                type="button"
                onClick={() => onOpenEnquiry(`${project.name} — Brochure`)}
                className="rounded-sm border border-white/40 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white/10"
              >
                Download Brochure
              </button>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 divide-x divide-white/15 border-t border-white/15 pt-5 text-xs lg:grid-cols-4">
            <div className="pr-4">
              <span className="block uppercase tracking-[0.14em] text-white/55">Configuration</span>
              <span className="mt-1 block font-semibold text-white">{project.configuration}</span>
            </div>
            <div className="px-4">
              <span className="block uppercase tracking-[0.14em] text-white/55">Unit Area</span>
              <span className="mt-1 block font-semibold text-white">{project.areaRange}</span>
            </div>
            <div className="px-4 pt-3 lg:pt-0">
              <span className="block uppercase tracking-[0.14em] text-white/55">Land Extent</span>
              <span className="mt-1 block font-semibold text-white">{project.landArea}</span>
            </div>
            <div className="pl-4 pt-3 lg:pt-0">
              <span className="block uppercase tracking-[0.14em] text-white/55">Possession</span>
              <span className="mt-1 block font-semibold text-brand-gold">{project.possession}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overview & Top 4 Highlights */}
      <section className="section-pad border-b border-brand-dark/12" data-reveal="up">
        <div className="edge-container">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-green">
                Overview
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-brand-dark sm:text-4xl">
                Designed Around Light &amp; Privacy
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-slate sm:text-base">
                {project.overview}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {project.highlights.slice(0, 4).map((h) => (
                <div
                  key={h}
                  className="flex items-center rounded-sm border border-brand-dark/12 bg-brand-cream/55 p-4 text-sm text-brand-ink"
                >
                  {h}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Floor Plans */}
      {project.floorPlans.length > 0 && (
        <section className="section-pad border-b border-brand-dark/12 bg-brand-cream" data-reveal="up">
          <div className="edge-container">
            <div className="flex flex-col justify-between gap-4 border-b border-brand-dark/12 pb-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-green">
                  Spatial Layouts
                </p>
                <h2 className="mt-1.5 font-display text-3xl font-semibold text-brand-dark sm:text-4xl">
                  Floor Plans
                </h2>
              </div>

              <div className="flex flex-wrap gap-5">
                {project.floorPlans.map((fp, idx) => (
                  <button
                    key={fp.id}
                    type="button"
                    onClick={() => setSelectedPlanIdx(idx)}
                    className={`border-b-2 pb-1.5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                      selectedPlanIdx === idx
                        ? 'border-brand-green text-brand-dark'
                        : 'border-transparent text-brand-slate hover:text-brand-dark'
                    }`}
                  >
                    {fp.title}
                  </button>
                ))}
              </div>
            </div>

            {activePlan && (
              <div className="mt-8 grid items-center gap-8 rounded-sm border border-brand-dark/12 bg-white p-6 lg:grid-cols-12">
                <div className="relative overflow-hidden rounded-sm border border-brand-dark/12 bg-brand-cream lg:col-span-7">
                  <img
                    src={activePlan.image}
                    alt={activePlan.title}
                    className="aspect-[16/10] w-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => setZoomPlan(activePlan)}
                    className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-sm bg-brand-dark/90 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white hover:bg-brand-green"
                  >
                    <Maximize2 className="h-3.5 w-3.5" /> Enlarge
                  </button>
                </div>

                <div className="lg:col-span-5">
                  <h3 className="font-display text-3xl font-semibold text-brand-dark">
                    {activePlan.title}
                  </h3>
                  <p className="mt-1 text-lg font-bold text-brand-green">
                    {activePlan.priceIndication}
                  </p>
                  <dl className="mt-5 divide-y divide-brand-dark/10 border-y border-brand-dark/10 text-sm">
                    <div className="flex justify-between py-2.5">
                      <dt className="text-brand-slate">Plot / Land Share</dt>
                      <dd className="font-semibold text-brand-dark">{activePlan.plotSize}</dd>
                    </div>
                    <div className="flex justify-between py-2.5">
                      <dt className="text-brand-slate">Built-up Area</dt>
                      <dd className="font-semibold text-brand-dark">{activePlan.builtUpArea}</dd>
                    </div>
                    <div className="flex justify-between py-2.5">
                      <dt className="text-brand-slate">Vastu Facing</dt>
                      <dd className="font-semibold text-brand-dark">{activePlan.facing}</dd>
                    </div>
                  </dl>
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry(`${project.name} — ${activePlan.title}`)}
                    className="mt-6 w-full rounded-sm bg-brand-dark py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-brand-green"
                  >
                    Enquire for This Plan
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 4. Amenities & Top 4 Specifications (Clean 2-Col Side-by-Side) */}
      <section className="section-pad border-b border-brand-dark/12 bg-white" data-reveal="up">
        <div className="edge-container">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-green">
                Amenities
              </p>
              <h2 className="mt-1.5 font-display text-3xl font-semibold text-brand-dark">
                Clubhouse &amp; Grounds
              </h2>
              <div className="mt-4 flex flex-wrap gap-4 border-b border-brand-dark/10 pb-2">
                {amenityGroups.map((group) => (
                  <button
                    key={group}
                    type="button"
                    onClick={() => setSelectedAmenityGroup(group)}
                    className={`border-b-2 pb-1 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                      selectedAmenityGroup === group
                        ? 'border-brand-green text-brand-dark'
                        : 'border-transparent text-brand-slate hover:text-brand-dark'
                    }`}
                  >
                    {group}
                  </button>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {activeAmenities.map((item) => (
                  <span
                    key={item}
                    className="rounded-sm border border-brand-dark/12 bg-brand-cream/60 px-3.5 py-2 text-xs font-medium text-brand-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-green">
                Specifications
              </p>
              <h2 className="mt-1.5 font-display text-3xl font-semibold text-brand-dark">
                Core Engineering Standards
              </h2>
              <div className="mt-4 divide-y divide-brand-dark/12 border-y border-brand-dark/12">
                {project.specifications.slice(0, 4).map((spec) => (
                  <div key={spec.category} className="py-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-green">
                      {spec.category}
                    </p>
                    <p className="mt-0.5 text-sm text-brand-ink">{spec.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Location Advantages & Map */}
      <section className="section-pad bg-brand-cream" data-reveal="up">
        <div className="edge-container">
          <div className="grid items-stretch gap-8 lg:grid-cols-12">
            <div className="flex flex-col justify-between lg:col-span-5">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-green">
                  Location
                </p>
                <h2 className="mt-1.5 font-display text-3xl font-semibold text-brand-dark">
                  Key Distances
                </h2>
                <div className="mt-5 divide-y divide-brand-dark/12 border border-brand-dark/12 bg-white px-4">
                  {project.locationAdvantages.slice(0, 4).map((loc) => (
                    <div
                      key={loc.place}
                      className="flex items-center justify-between py-3.5 text-sm"
                    >
                      <span className="font-medium text-brand-dark">{loc.place}</span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-brand-green">
                        {loc.distance}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {company?.mapDirectionsUrl && (
                <a
                  href={company.mapDirectionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-block self-start border-b border-brand-dark pb-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-dark hover:border-brand-green hover:text-brand-green"
                >
                  Open in Google Maps →
                </a>
              )}
            </div>

            <div className="lg:col-span-7">
              <div className="h-full min-h-[320px] overflow-hidden rounded-sm border border-brand-dark/15 bg-white">
                <iframe
                  title={`${project.name} Location Map`}
                  src={
                    company?.mapEmbedUrl ||
                    'https://www.google.com/maps?q=17.4264796,78.1912362&z=14&output=embed'
                  }
                  className="h-full min-h-[320px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enlarged Floor Plan Modal */}
      {zoomPlan && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-4xl overflow-hidden rounded-sm bg-white p-4 sm:p-6">
            <button
              type="button"
              onClick={() => setZoomPlan(null)}
              aria-label="Close floor plan"
              className="absolute right-4 top-4 rounded-sm bg-brand-cream p-2 text-brand-dark hover:bg-brand-green hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="font-display text-2xl font-semibold text-brand-dark">
              {zoomPlan.title}
            </h3>
            <p className="text-xs text-brand-slate">
              {zoomPlan.builtUpArea} · {zoomPlan.facing} · {zoomPlan.priceIndication}
            </p>
            <img
              src={zoomPlan.image}
              alt={zoomPlan.title}
              className="mt-4 max-h-[70vh] w-full rounded-sm object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}
