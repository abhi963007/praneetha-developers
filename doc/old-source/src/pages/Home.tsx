import { FormEvent, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ScrollHeroShowcase } from '../components/ScrollHeroShowcase';
import { ProjectCard } from '../components/ProjectCard';
import { postJson, useApi } from '../hooks/useApi';
import { useReveal } from '../hooks/useReveal';
import type { CompanyInfo, Project } from '../types';

interface HomeProps {
  onOpenEnquiry: (defaultProject?: string) => void;
}

export function Home({ onOpenEnquiry }: HomeProps) {
  const { data: company } = useApi<CompanyInfo>('/api/company');
  const { data: projects, loading: loadingProjects } = useApi<Project[]>('/api/projects');
  const revealRef = useReveal<HTMLDivElement>([projects?.length, company?.brandName]);
  const [portfolioFilter, setPortfolioFilter] = useState<'all' | 'villas' | 'apartments' | 'plots'>(
    'all',
  );
  const [openFaq, setOpenFaq] = useState<number>(0);

  const [leadForm, setLeadForm] = useState({
    name: '',
    phone: '',
    email: '',
    preferredProject: 'Pranitha Sovereign Villas',
  });
  const [leadStatus, setLeadStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [leadFeedback, setLeadFeedback] = useState('');

  const flagship = useMemo(
    () => projects?.find((p) => p.isFlagship) || projects?.[0] || null,
    [projects],
  );

  const visibleProjects = useMemo(() => {
    if (!projects) return [];
    if (portfolioFilter === 'all') return projects;
    return projects.filter((p) => p.category === portfolioFilter);
  }, [projects, portfolioFilter]);

  const topFaqs = useMemo(() => (company?.faqs || []).slice(0, 4), [company?.faqs]);

  const handleLeadSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLeadStatus('submitting');
    setLeadFeedback('');
    try {
      const res = await postJson<{ success: boolean; message: string }>('/api/enquiries', {
        ...leadForm,
        inquiryType: 'Private Site Visit',
      });
      setLeadStatus('success');
      setLeadFeedback(res.message);
      setLeadForm({
        name: '',
        phone: '',
        email: '',
        preferredProject: 'Pranitha Sovereign Villas',
      });
    } catch (err) {
      setLeadStatus('error');
      setLeadFeedback(err instanceof Error ? err.message : 'Unable to submit enquiry.');
    }
  };

  return (
    <div ref={revealRef} className="bg-white">
      {/* 1. Pinned Spatial Walkthrough Hero */}
      <ScrollHeroShowcase onOpenEnquiry={onOpenEnquiry} />

      {/* 2. Flagship Architectural Monograph */}
      <section id="flagship-snapshot" className="section-pad border-b border-brand-dark/12 bg-white">
        <div className="edge-container">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="relative lg:col-span-7" data-reveal="scale">
              <div className="awwwards-image-frame rounded-sm border border-brand-dark/12 bg-brand-cream">
                <img
                  src={
                    flagship?.heroImage ||
                    'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=85'
                  }
                  alt={flagship?.name || 'Pranitha Sovereign Villas'}
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>

              {/* Overlapping Awwwards Architectural Detail Plate */}
              <div
                className="mt-4 flex items-center justify-between border border-brand-dark/12 bg-brand-cream px-5 py-4 lg:absolute lg:-bottom-6 lg:right-6 lg:mt-0 lg:w-72 lg:shadow-xl"
                data-reveal="up"
                data-reveal-delay="2"
              >
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-green">
                    Clubhouse &amp; Realm
                  </p>
                  <p className="mt-0.5 font-display text-xl font-semibold text-brand-dark">
                    20,000 Sq. Ft. Sanctuary
                  </p>
                </div>
                <span className="text-xs font-medium uppercase tracking-[0.14em] text-brand-slate">
                  East / West
                </span>
              </div>
            </div>

            <div className="lg:col-span-5" data-reveal="up" data-reveal-delay="1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-green">
                Flagship Monograph · Mokila
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.04] text-brand-dark sm:text-5xl xl:text-[3.4rem]">
                {flagship?.name || 'Pranitha Sovereign Villas'}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-brand-slate sm:text-base">
                An exclusive 15-acre gated community of 165 East &amp; West facing triplex villas in
                West Hyderabad’s premier growth corridor.
              </p>

              <div className="my-7 grid grid-cols-3 divide-x divide-brand-dark/12 border-y border-brand-dark/12 py-4 text-xs">
                <div className="pr-3">
                  <span className="block font-display text-2xl font-semibold text-brand-dark sm:text-3xl">
                    15 Acres
                  </span>
                  <span className="text-brand-slate">165 Triplexes</span>
                </div>
                <div className="px-3">
                  <span className="block font-display text-2xl font-semibold text-brand-dark sm:text-3xl">
                    2,250–2,850
                  </span>
                  <span className="text-brand-slate">Sq. Ft. Area</span>
                </div>
                <div className="pl-3">
                  <span className="block font-display text-2xl font-semibold text-brand-green sm:text-3xl">
                    ₹1.50–2.00 Cr
                  </span>
                  <span className="text-brand-slate">Launch Price</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-5">
                <Link
                  to={`/project/${flagship?.slug || 'pranitha-sovereign-villas'}`}
                  className="rounded-sm bg-brand-dark px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-brand-green"
                >
                  Explore Flagship Details
                </Link>
                <button
                  type="button"
                  onClick={() => onOpenEnquiry(flagship?.name || 'Pranitha Sovereign Villas')}
                  className="awwwards-link-line py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-dark hover:text-brand-green"
                >
                  Request Price Sheet →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Selected Works / Portfolio Showcase */}
      <section className="section-pad bg-brand-cream/45">
        <div className="edge-container">
          <div
            className="flex flex-col justify-between gap-5 border-b border-brand-dark/12 pb-6 md:flex-row md:items-end"
            data-reveal="up"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-green">
                Selected Works
              </p>
              <h2 className="mt-1.5 font-display text-4xl font-semibold text-brand-dark sm:text-5xl">
                Our Developments
              </h2>
            </div>

            <div className="no-scrollbar flex gap-6 overflow-x-auto pb-1">
              {(
                [
                  { id: 'all', label: 'All' },
                  { id: 'villas', label: 'Villas' },
                  { id: 'apartments', label: 'Apartments' },
                  { id: 'plots', label: 'Plots' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setPortfolioFilter(tab.id)}
                  className={`shrink-0 border-b-2 pb-1.5 text-xs font-semibold uppercase tracking-[0.16em] transition-colors ${
                    portfolioFilter === tab.id
                      ? 'border-brand-green text-brand-dark'
                      : 'border-transparent text-brand-slate hover:text-brand-dark'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {loadingProjects ? (
            <div className="mt-9 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-80 animate-pulse rounded-sm bg-brand-cream" />
              ))}
            </div>
          ) : (
            <div className="tablet-two-col mt-9 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {visibleProjects.map((project, idx) => (
                <div
                  key={project.id}
                  data-reveal="up"
                  data-reveal-delay={String((idx % 3) + 1)}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. Monumental Provenance Strip */}
      <section className="section-pad border-y border-brand-dark/12 bg-white">
        <div className="edge-container">
          <div
            className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
            data-reveal="up"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-green">
                Provenance
              </p>
              <h2 className="mt-2 font-display text-4xl font-semibold text-brand-dark sm:text-5xl">
                {company?.tagline || 'Building Dreams, Creating Homes'}
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-relaxed text-brand-slate">
              V Praneeta Developers delivers transparent, HMDA &amp; TG-RERA compliant communities
              across West Hyderabad.
            </p>
            <Link
              to="/about"
              className="awwwards-link-line shrink-0 self-start pb-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-dark hover:text-brand-green lg:self-auto"
            >
              About Us →
            </Link>
          </div>

          <div
            className="mt-12 grid divide-y divide-brand-dark/12 border border-brand-dark/12 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4"
            data-reveal="up"
            data-reveal-delay="1"
          >
            {(company?.trustCounters || []).map((counter) => (
              <div
                key={counter.label}
                className="p-7 transition-colors hover:bg-brand-cream/40 lg:p-9"
              >
                <p className="font-display text-5xl font-semibold tracking-tight text-brand-dark xl:text-6xl">
                  {counter.value}
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-brand-slate">
                  {counter.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Architectural Materiality & Engineering (Dark Editorial Matrix) */}
      <section className="section-pad bg-[#051810] text-white">
        <div className="edge-container">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end" data-reveal="up">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                Architectural Discipline
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                Crafted for Enduring Value
              </h2>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-white/65 sm:text-sm">
              Every elevation, foundation, and green corridor is engineered for generational longevity.
            </p>
          </div>

          <div
            className="tablet-two-col grid divide-y divide-white/15 border-y border-white/15 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-y-0"
            data-reveal="up"
            data-reveal-delay="1"
          >
            {(company?.whyInvest || []).map((item) => (
              <div
                key={item.title}
                className="py-7 transition-colors hover:bg-white/[0.04] lg:px-7 lg:first:pl-0 lg:last:pr-0"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-gold">
                  {item.metric}
                </p>
                <h3 className="mt-2.5 font-display text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2.5 line-clamp-2 text-xs leading-relaxed text-white/75">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Buyer Essentials (Horizontal 2-Column Accordion) */}
      <section className="section-pad border-b border-brand-dark/12 bg-white">
        <div className="edge-container">
          <div
            className="flex flex-col justify-between gap-4 border-b border-brand-dark/12 pb-6 sm:flex-row sm:items-end"
            data-reveal="up"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-green">
                Buyer Essentials
              </p>
              <h2 className="mt-1.5 font-display text-3xl font-semibold text-brand-dark sm:text-4xl lg:text-5xl">
                Frequently Asked Questions
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onOpenEnquiry('Buyer Diligence Query')}
              className="awwwards-link-line self-start pb-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-dark hover:text-brand-green sm:self-auto"
            >
              Ask Our Legal Desk →
            </button>
          </div>

          <div className="mt-8 grid gap-x-12 md:grid-cols-2" data-reveal="up" data-reveal-delay="1">
            {topFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={faq.question} className="border-b border-brand-dark/15">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="flex w-full items-start justify-between gap-4 py-5 text-left text-sm font-semibold text-brand-dark transition-colors hover:text-brand-green sm:text-base"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className="shrink-0 font-display text-xl leading-none text-brand-green">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-5 text-sm leading-relaxed text-brand-slate">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Unified Equal-Height Mokila Experience Lounge Block */}
      <section className="section-pad bg-brand-cream">
        <div className="edge-container">
          <div
            className="grid items-stretch overflow-hidden rounded-sm border border-brand-dark/15 bg-white lg:grid-cols-12"
            data-reveal="up"
          >
            <div className="flex flex-col justify-between bg-[#061c14] p-8 text-white lg:col-span-5 lg:p-11">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                  Private Viewing
                </p>
                <h2 className="mt-2.5 font-display text-3xl font-semibold text-white sm:text-4xl">
                  Visit Our Mokila Lounge
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  Tour our sample triplex villas and inspect sanctioned HMDA &amp; TG-RERA records
                  with our senior property advisor.
                </p>
              </div>
              <p className="mt-8 border-t border-white/15 pt-5 text-xs text-white/80">
                6-109, Mokila Village ·{' '}
                <span className="font-semibold text-brand-gold">
                  {company?.phone || '+91 9133637111'}
                </span>
              </p>
            </div>

            <div className="flex flex-col justify-center bg-white p-8 lg:col-span-7 lg:p-11">
              {leadStatus === 'success' ? (
                <div className="py-6 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">
                    Confirmed
                  </p>
                  <p className="mt-2 text-sm text-brand-slate">{leadFeedback}</p>
                  <button
                    type="button"
                    onClick={() => setLeadStatus('idle')}
                    className="mt-5 rounded-sm bg-brand-dark px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white"
                  >
                    New Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleLeadSubmit} className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-ink">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={leadForm.name}
                      onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full rounded-sm border border-brand-dark/20 px-3.5 py-2.5 text-sm outline-none focus:border-brand-green"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-ink">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={leadForm.phone}
                      onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                      placeholder="+91 91336 XXXXX"
                      className="w-full rounded-sm border border-brand-dark/20 px-3.5 py-2.5 text-sm outline-none focus:border-brand-green"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-ink">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={leadForm.email}
                      onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                      placeholder="you@domain.com"
                      className="w-full rounded-sm border border-brand-dark/20 px-3.5 py-2.5 text-sm outline-none focus:border-brand-green"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-ink">
                      Preferred Project
                    </label>
                    <select
                      value={leadForm.preferredProject}
                      onChange={(e) =>
                        setLeadForm({ ...leadForm, preferredProject: e.target.value })
                      }
                      className="w-full rounded-sm border border-brand-dark/20 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-brand-green"
                    >
                      <option value="Pranitha Sovereign Villas">
                        Pranitha Sovereign Villas (₹1.50 – ₹2.00 Cr)
                      </option>
                      <option value="Pranitha Santorini Villas">Pranitha Santorini Villas</option>
                      <option value="Pranitha Meridian Heights">
                        Pranitha Meridian Heights (Apartments)
                      </option>
                    </select>
                  </div>

                  <div className="flex items-center justify-end pt-2 sm:col-span-2">
                    <button
                      type="submit"
                      disabled={leadStatus === 'submitting'}
                      className="w-full rounded-sm bg-brand-dark px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-brand-green disabled:opacity-60 sm:w-auto"
                    >
                      {leadStatus === 'submitting' ? 'Scheduling...' : 'Schedule Visit'}
                    </button>
                  </div>
                  {leadStatus === 'error' && (
                    <p className="text-xs text-red-600 sm:col-span-2">{leadFeedback}</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
