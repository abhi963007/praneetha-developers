import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { useApi } from '../hooks/useApi';
import { useReveal } from '../hooks/useReveal';
import type { GalleryItem, GalleryResponse } from '../types';

export function Gallery() {
  const { data, loading } = useApi<GalleryResponse>('/api/gallery');
  const [selectedProjectId, setSelectedProjectId] = useState<string>('all');
  const [selectedStage, setSelectedStage] = useState<'all' | 'elevation' | 'progress'>('all');
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (!data?.items) return [];
    return data.items.filter((item) => {
      if (selectedProjectId !== 'all' && item.projectId !== selectedProjectId) return false;
      if (selectedStage !== 'all' && item.stage !== selectedStage) return false;
      return true;
    });
  }, [data, selectedProjectId, selectedStage]);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIdx(null);
      if (e.key === 'ArrowRight') {
        setLightboxIdx((prev) =>
          prev === null ? null : (prev + 1) % Math.max(1, filteredItems.length),
        );
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIdx((prev) =>
          prev === null
            ? null
            : (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length),
        );
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIdx, filteredItems.length]);

  const activePhoto: GalleryItem | null =
    lightboxIdx !== null ? filteredItems[lightboxIdx] || null : null;

  const revealRef = useReveal<HTMLDivElement>([loading, filteredItems.length]);

  return (
    <div ref={revealRef} className="bg-white">
      {/* Compact Header & Filter Bar */}
      <section className="border-b border-brand-dark/12 bg-brand-cream py-12">
        <div className="edge-container">
          <nav className="text-[11px] uppercase tracking-[0.16em] text-brand-slate" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-brand-green">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="font-semibold text-brand-dark">Gallery</span>
          </nav>

          <div className="mt-5 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h1 className="font-display text-4xl font-semibold text-brand-dark sm:text-5xl">
                Elevations &amp; Site Progress
              </h1>
            </div>

            {/* Stage Filter Toggle */}
            <div className="inline-flex flex-wrap gap-2">
              {(
                [
                  { id: 'all', label: 'All' },
                  { id: 'elevation', label: 'Elevations' },
                  { id: 'progress', label: 'Progress' },
                ] as const
              ).map((stage) => (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => {
                    setSelectedStage(stage.id);
                    setLightboxIdx(null);
                  }}
                  className={`rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                    selectedStage === stage.id
                      ? 'bg-brand-dark text-white'
                      : 'border border-brand-dark/15 bg-white text-brand-slate hover:text-brand-dark'
                  }`}
                >
                  {stage.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project Tabs */}
          <div className="mt-6 flex flex-wrap gap-5 border-t border-brand-dark/10 pt-4">
            <button
              type="button"
              onClick={() => {
                setSelectedProjectId('all');
                setLightboxIdx(null);
              }}
              className={`border-b-2 pb-1 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                selectedProjectId === 'all'
                  ? 'border-brand-green text-brand-dark'
                  : 'border-transparent text-brand-slate hover:text-brand-dark'
              }`}
            >
              All Projects
            </button>
            {(data?.projects || []).map((proj) => (
              <button
                key={proj.id}
                type="button"
                onClick={() => {
                  setSelectedProjectId(proj.id);
                  setLightboxIdx(null);
                }}
                className={`border-b-2 pb-1 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                  selectedProjectId === proj.id
                    ? 'border-brand-green text-brand-dark'
                    : 'border-transparent text-brand-slate hover:text-brand-dark'
                }`}
              >
                {proj.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Clean Visual Grid */}
      <section className="section-pad py-14">
        <div className="edge-container">
          {loading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-64 animate-pulse rounded-sm bg-brand-cream" />
              ))}
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="rounded-sm border border-brand-dark/12 bg-brand-cream p-10 text-center">
              <p className="font-display text-2xl font-semibold text-brand-dark">
                No images found for this selection
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedProjectId('all');
                  setSelectedStage('all');
                }}
                className="mt-4 rounded-sm bg-brand-dark px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="tablet-two-col grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item, idx) => (
                <article
                  key={item.id}
                  data-reveal="up"
                  data-reveal-delay={String((idx % 3) + 1)}
                  className="architectural-card group overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setLightboxIdx(idx)}
                    className="awwwards-image-frame block aspect-[16/10] w-full text-left"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span
                      className={`absolute left-3 top-3 rounded-sm px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] ${
                        item.stage === 'elevation'
                          ? 'bg-brand-dark/90 text-white'
                          : 'bg-brand-green text-white'
                      }`}
                    >
                      {item.stage === 'elevation' ? 'Elevation' : `Progress · ${item.captureDate}`}
                    </span>
                    <span className="absolute bottom-3 right-3 rounded-sm bg-black/60 p-2 text-white opacity-0 transition group-hover:opacity-100">
                      <Expand className="h-4 w-4" />
                    </span>
                  </button>
                  <div className="p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-green">
                      {item.projectName}
                    </p>
                    <h2 className="mt-1 font-display text-xl font-semibold text-brand-dark">
                      {item.title}
                    </h2>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal (Full Caption Preserved Here) */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setLightboxIdx(null)}
            aria-label="Close lightbox"
            className="absolute right-5 top-5 rounded-sm bg-white/15 p-2.5 text-white hover:bg-brand-green"
          >
            <X className="h-5 w-5" />
          </button>

          {filteredItems.length > 1 && (
            <>
              <button
                type="button"
                onClick={() =>
                  setLightboxIdx(
                    ((lightboxIdx ?? 0) - 1 + filteredItems.length) % filteredItems.length,
                  )
                }
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-sm bg-white/15 p-3 text-white hover:bg-brand-green"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setLightboxIdx(((lightboxIdx ?? 0) + 1) % filteredItems.length)
                }
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-sm bg-white/15 p-3 text-white hover:bg-brand-green"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <div className="max-w-5xl text-center">
            <img
              src={activePhoto.imageUrl}
              alt={activePhoto.title}
              className="max-h-[75vh] rounded-sm object-contain shadow-2xl"
            />
            <div className="mt-4 text-white">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold">
                {activePhoto.projectName} · {activePhoto.captureDate}
              </p>
              <h3 className="mt-1 font-display text-2xl font-semibold">{activePhoto.title}</h3>
              <p className="mt-1 text-sm text-white/75">{activePhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
