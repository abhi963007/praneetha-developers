import { Link } from 'react-router-dom';
import { useApi } from '../hooks/useApi';
import { useReveal } from '../hooks/useReveal';
import type { CompanyInfo } from '../types';

interface AboutProps {
  onOpenEnquiry: (defaultProject?: string) => void;
}

export function About({ onOpenEnquiry }: AboutProps) {
  const { data: company, loading } = useApi<CompanyInfo>('/api/company');
  const revealRef = useReveal<HTMLDivElement>([loading, company?.brandName]);
  const coreValues = (company?.pillars || []).slice(2, 5).length
    ? [
        {
          title: 'Transparent RERA Governance',
          description:
            '100% HMDA and TG-RERA registered titles with clear legal documentation and milestone-linked updates.',
        },
        {
          title: 'Architectural Craftsmanship',
          description:
            'Spacious triplex and courtyard configurations with double-height living volumes and resort-grade clubhouses.',
        },
        {
          title: 'Timely Delivery',
          description:
            'Multi-stage structural audits, earthquake-resistant RCC frames, and disciplined project handover schedules.',
        },
      ]
    : [];

  return (
    <div ref={revealRef} className="bg-white">
      {/* 1. Minimal Header + 4 Inline Key Facts */}
      <section className="border-b border-brand-dark/12 bg-brand-cream py-14">
        <div className="edge-container">
          <nav className="text-[11px] uppercase tracking-[0.16em] text-brand-slate" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-brand-green">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="font-semibold text-brand-dark">About Us</span>
          </nav>

          <div className="mt-6 max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-green">
              {company?.legalName || 'V Praneeta Developers Private Limited'}
            </p>
            <h1 className="mt-2 font-display text-4xl font-semibold text-brand-dark sm:text-5xl">
              Engineering Timeless Homes in West Hyderabad
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-brand-slate sm:text-base">
              Built on clear land titles, disciplined civil engineering, and low-density green living
              across the Mokila–Shankarpally corridor.
            </p>
          </div>

          <div className="mt-8 grid divide-y divide-brand-dark/12 border border-brand-dark/12 bg-white sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            <div className="p-4">
              <span className="block text-[10px] uppercase tracking-[0.16em] text-brand-slate">Entity</span>
              <span className="mt-1 block text-xs font-semibold text-brand-dark">V Praneeta Developers Pvt Ltd</span>
            </div>
            <div className="p-4">
              <span className="block text-[10px] uppercase tracking-[0.16em] text-brand-slate">Established</span>
              <span className="mt-1 block text-xs font-semibold text-brand-dark">{company?.established || 2022}</span>
            </div>
            <div className="p-4">
              <span className="block text-[10px] uppercase tracking-[0.16em] text-brand-slate">Flagship Value</span>
              <span className="mt-1 block text-xs font-semibold text-brand-green">₹1.50 – ₹2.00 Cr Villas</span>
            </div>
            <div className="p-4">
              <span className="block text-[10px] uppercase tracking-[0.16em] text-brand-slate">Focus Region</span>
              <span className="mt-1 block text-xs font-semibold text-brand-dark">Mokila &amp; Shankarpally</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Vision & Mission */}
      <section className="section-pad bg-white" data-reveal="up">
        <div className="edge-container">
          <div className="grid divide-y divide-brand-dark/12 border border-brand-dark/12 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
            <div className="bg-brand-cream p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-green">
                Our Vision
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-brand-dark">
                Benchmark Low-Density Living Across Telangana
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-brand-slate">
                To set the standard for gated villa living where sustainable architecture, community
                harmony, and clear RERA governance meet.
              </p>
            </div>
            <div className="bg-brand-dark p-8 text-white">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold">
                Our Mission
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-white">
                Disciplined Engineering &amp; On-Schedule Handovers
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-white/80">
                To deliver enduring residences in Hyderabad’s highest-growth corridors with strict
                quality audits and punctual possession.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Leadership */}
      <section className="section-pad border-y border-brand-dark/12 bg-brand-cream" data-reveal="up">
        <div className="edge-container">
          <div className="mb-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-green">
              Leadership
            </p>
            <h2 className="mt-1.5 font-display text-4xl font-semibold text-brand-dark">
              Guided by Hands-On Builders
            </h2>
          </div>

          {loading ? (
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="h-44 animate-pulse rounded-sm bg-white" />
              <div className="h-44 animate-pulse rounded-sm bg-white" />
            </div>
          ) : (
            <div className="grid gap-6 lg:grid-cols-2">
              {(company?.founders || []).map((founder) => (
                <div
                  key={founder.name}
                  className="architectural-card bg-white p-6"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                    <img
                      src={founder.portrait}
                      alt={founder.name}
                      className="h-24 w-24 shrink-0 rounded-sm border border-brand-dark/15 object-cover"
                    />
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-green">
                        {founder.experience}
                      </p>
                      <h3 className="mt-1 font-display text-2xl font-semibold text-brand-dark">
                        {founder.name}
                      </h3>
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
                        {founder.role}
                      </p>
                    </div>
                  </div>
                  <blockquote className="mt-4 border-l-2 border-brand-green pl-4 text-sm italic text-brand-slate">
                    “{founder.quote}”
                  </blockquote>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. 3 Core Values & Compact RERA CTA Bar */}
      <section className="section-pad bg-white" data-reveal="up">
        <div className="edge-container space-y-12">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-green">
              Core Values
            </p>
            <h2 className="mt-1.5 font-display text-4xl font-semibold text-brand-dark">
              How We Build
            </h2>
            <div className="mt-6 grid divide-y divide-brand-dark/12 border border-brand-dark/12 md:grid-cols-3 md:divide-x md:divide-y-0">
              {coreValues.map((val) => (
                <div key={val.title} className="p-6">
                  <h3 className="font-display text-2xl font-semibold text-brand-dark">
                    {val.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-slate">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 rounded-sm bg-brand-dark p-7 text-white sm:flex-row sm:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-gold">
                HMDA &amp; TG-RERA Compliance
              </p>
              <p className="mt-1 font-display text-2xl font-semibold">
                Verify our 32-Point Structural &amp; Title Documentation
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenEnquiry('Corporate / RERA Verification')}
              className="shrink-0 rounded-sm bg-brand-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-dark transition-colors hover:bg-white"
            >
              Request Legal Dossier
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
