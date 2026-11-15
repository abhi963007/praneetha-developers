import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProjectCard } from '../components/ProjectCard';
import { useApi } from '../hooks/useApi';
import { useReveal } from '../hooks/useReveal';
import type { Project } from '../types';

export function ProjectsListing() {
  const { category, status } = useParams<{ category?: string; status?: string }>();
  const { data: projects, loading } = useApi<Project[]>('/api/projects');

  const activeCategory = category || 'all';
  const activeStatus = status || 'all';

  const filtered = useMemo(() => {
    if (!projects) return [];
    return projects.filter((p) => {
      if (activeCategory !== 'all' && p.category !== activeCategory) return false;
      if (activeStatus !== 'all' && p.status !== activeStatus) return false;
      return true;
    });
  }, [projects, activeCategory, activeStatus]);

  const revealRef = useReveal<HTMLDivElement>([loading, filtered.length]);

  const titleLabel =
    activeCategory === 'villas'
      ? activeStatus === 'completed'
        ? 'Completed Luxury Villa Communities'
        : activeStatus === 'ongoing'
          ? 'Ongoing Luxury Villa Developments'
          : 'Luxury Gated Villa Communities'
      : activeCategory === 'apartments'
        ? 'Ongoing Apartments'
        : 'All Developments';

  return (
    <div ref={revealRef} className="bg-white">
      <section className="border-b border-brand-dark/12 bg-brand-cream py-12">
        <div className="edge-container">
          <nav className="text-[11px] uppercase tracking-[0.16em] text-brand-slate" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-brand-green">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="font-semibold text-brand-dark">Projects</span>
          </nav>

          <div className="mt-5 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-green">
                Portfolio
              </p>
              <h1 className="mt-1.5 font-display text-4xl font-semibold text-brand-dark sm:text-5xl">
                {titleLabel}
              </h1>
            </div>

            <Link
              to="/projects/plots/coming-soon"
              className="self-start rounded-sm border border-brand-dark/25 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-dark transition-colors hover:border-brand-green hover:text-brand-green md:self-auto"
            >
              Residential Plots (Coming Soon) →
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-6 border-t border-brand-dark/10 pt-4">
            {[
              { label: 'All Projects', to: '/projects', active: activeCategory === 'all' && activeStatus === 'all' },
              { label: 'Ongoing Villas (₹1.50 – ₹2.00 Cr)', to: '/projects/villas/ongoing', active: activeCategory === 'villas' && activeStatus === 'ongoing' },
              { label: 'Completed Villas', to: '/projects/villas/completed', active: activeCategory === 'villas' && activeStatus === 'completed' },
              { label: 'Ongoing Apartments', to: '/projects/apartments/ongoing', active: activeCategory === 'apartments' && activeStatus === 'ongoing' },
            ].map((pill) => (
              <Link
                key={pill.to}
                to={pill.to}
                className={`border-b-2 pb-1.5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                  pill.active
                    ? 'border-brand-green text-brand-dark'
                    : 'border-transparent text-brand-slate hover:text-brand-dark'
                }`}
              >
                {pill.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad py-14">
        <div className="edge-container">
          {loading ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-80 animate-pulse rounded-sm bg-brand-cream" />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="rounded-sm border border-brand-dark/12 bg-brand-cream p-10 text-center">
              <p className="font-display text-2xl font-semibold text-brand-dark">
                No developments match this filter
              </p>
              <Link
                to="/projects"
                className="mt-5 inline-block rounded-sm bg-brand-dark px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white"
              >
                View All Projects
              </Link>
            </div>
          ) : (
            <div className="tablet-two-col grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project, idx) => (
                <div key={project.id} data-reveal="up" data-reveal-delay={String((idx % 3) + 1)}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
