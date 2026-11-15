import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { postJson } from '../hooks/useApi';
import { useReveal } from '../hooks/useReveal';

export function PartnerWithUs() {
  const revealRef = useReveal<HTMLDivElement>([]);
  const [form, setForm] = useState({
    fullName: '',
    agencyName: '',
    phone: '',
    email: '',
    reraNumber: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setFeedback('');
    try {
      const res = await postJson<{ success: boolean; message: string }>(
        '/api/channel-partners',
        { ...form, operatingCity: 'Hyderabad — West Corridor' },
      );
      setStatus('success');
      setFeedback(res.message);
      setForm({
        fullName: '',
        agencyName: '',
        phone: '',
        email: '',
        reraNumber: '',
      });
    } catch (err) {
      setStatus('error');
      setFeedback(err instanceof Error ? err.message : 'Unable to register partner application.');
    }
  };

  return (
    <div ref={revealRef} className="bg-white">
      <section className="border-b border-brand-dark/12 bg-brand-cream py-14" data-reveal="up">
        <div className="edge-container">
          <nav className="text-[11px] uppercase tracking-[0.16em] text-brand-slate" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-brand-green">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="font-semibold text-brand-dark">Partner With Us</span>
          </nav>

          <div className="mt-6 grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-green">
                Channel Partner Program
              </p>
              <h1 className="mt-2 font-display text-4xl font-semibold text-brand-dark sm:text-5xl">
                Partner With Pranitha Developers
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-brand-slate sm:text-base">
                Collaborate with our Hyderabad advisory desk on luxury villa launches with clear
                commission payouts and priority inventory access.
              </p>

              <div className="mt-8 divide-y divide-brand-dark/12 border-y border-brand-dark/12 bg-white">
                {[
                  {
                    title: '15-Day Brokerage Settlement',
                    desc: 'Milestone-linked payouts processed promptly after agreement registration.',
                  },
                  {
                    title: 'Dedicated Relationship Manager',
                    desc: 'Single-point coordination for site tours, RERA files, and client closures.',
                  },
                  {
                    title: 'Co-Branded Marketing Kit',
                    desc: 'Instant access to digital brochures, villa floor plans, and progress renders.',
                  },
                ].map((item) => (
                  <div key={item.title} className="p-5">
                    <h2 className="font-display text-xl font-semibold text-brand-dark">
                      {item.title}
                    </h2>
                    <p className="mt-1 text-xs text-brand-slate">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-sm border border-brand-dark/15 bg-white p-6 sm:p-8">
                {status === 'success' ? (
                  <div className="py-10 text-center">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-green">
                      Application Logged
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-semibold text-brand-dark">
                      Onboarding Submitted
                    </h2>
                    <p className="mt-2 text-sm text-brand-slate">{feedback}</p>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="mt-6 rounded-sm bg-brand-dark px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white"
                    >
                      Register Another Partner
                    </button>
                  </div>
                ) : (
                  <>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-green">
                      Partner Registration
                    </p>
                    <h2 className="mt-1 font-display text-3xl font-semibold text-brand-dark">
                      Apply Now
                    </h2>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-ink">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={form.fullName}
                            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                            placeholder="Your full name"
                            className="w-full rounded-sm border border-brand-dark/20 px-3.5 py-2.5 text-sm outline-none focus:border-brand-green"
                          />
                        </div>
                        <div>
                          <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-ink">
                            Agency Name
                          </label>
                          <input
                            type="text"
                            value={form.agencyName}
                            onChange={(e) => setForm({ ...form, agencyName: e.target.value })}
                            placeholder="Consultancy / Firm"
                            className="w-full rounded-sm border border-brand-dark/20 px-3.5 py-2.5 text-sm outline-none focus:border-brand-green"
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-ink">
                            Phone *
                          </label>
                          <input
                            type="tel"
                            required
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            placeholder="+91 91336 XXXXX"
                            className="w-full rounded-sm border border-brand-dark/20 px-3.5 py-2.5 text-sm outline-none focus:border-brand-green"
                          />
                        </div>
                        <div>
                          <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-ink">
                            Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="partner@agency.in"
                            className="w-full rounded-sm border border-brand-dark/20 px-3.5 py-2.5 text-sm outline-none focus:border-brand-green"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-ink">
                          TG-RERA Agent Number (Optional)
                        </label>
                        <input
                          type="text"
                          value={form.reraNumber}
                          onChange={(e) => setForm({ ...form, reraNumber: e.target.value })}
                          placeholder="A024000XXXXX"
                          className="w-full rounded-sm border border-brand-dark/20 px-3.5 py-2.5 text-sm outline-none focus:border-brand-green"
                        />
                      </div>

                      {status === 'error' && <p className="text-xs text-red-600">{feedback}</p>}

                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full rounded-sm bg-brand-dark py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-brand-green disabled:opacity-60"
                      >
                        {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
