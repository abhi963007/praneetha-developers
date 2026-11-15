import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { postJson } from '../hooks/useApi';
import { useReveal } from '../hooks/useReveal';

export function PlotsComingSoon() {
  const revealRef = useReveal<HTMLDivElement>([]);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    plotSize: '200 – 300 Sq.Yds',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setFeedback('');
    try {
      const res = await postJson<{ success: boolean; message: string }>('/api/plot-interest', form);
      setStatus('success');
      setFeedback(res.message);
      setForm({ name: '', phone: '', email: '', plotSize: '200 – 300 Sq.Yds' });
    } catch (err) {
      setStatus('error');
      setFeedback(err instanceof Error ? err.message : 'Unable to register interest.');
    }
  };

  return (
    <div ref={revealRef} className="bg-white">
      <section className="relative overflow-hidden bg-brand-dark py-16 text-white lg:py-20" data-reveal="up">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=80')",
          }}
        />
        <div className="edge-container relative">
          <nav className="text-[11px] uppercase tracking-[0.16em] text-white/75" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/projects" className="hover:text-white">
              Projects
            </Link>
            <span className="mx-2">/</span>
            <span className="text-brand-gold">Residential Plots · Coming Soon</span>
          </nav>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="inline-block rounded-sm bg-brand-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-dark">
                HMDA Plotted Layout · Pre-Launch
              </span>
              <h1 className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl">
                Pranitha Nature Enclave Plots
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
                Clear-title HMDA residential plots along the Shankarpally green belt with wide
                blacktop avenues and underground utilities.
              </p>

              <div className="mt-8 grid grid-cols-3 divide-x divide-white/15 border-y border-white/15 py-4 text-xs">
                <div className="pr-3">
                  <p className="font-semibold uppercase tracking-wider text-brand-gold">Vastu Grid</p>
                  <p className="mt-1 text-white/75">200–500 Sq.Yds</p>
                </div>
                <div className="px-3">
                  <p className="font-semibold uppercase tracking-wider text-brand-gold">Open Parks</p>
                  <p className="mt-1 text-white/75">40% Green Cover</p>
                </div>
                <div className="pl-3">
                  <p className="font-semibold uppercase tracking-wider text-brand-gold">Sanctions</p>
                  <p className="mt-1 text-white/75">HMDA &amp; RERA Track</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-sm border border-white/15 bg-white p-6 text-brand-ink sm:p-8">
                {status === 'success' ? (
                  <div className="py-8 text-center">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-green">
                      Confirmed
                    </p>
                    <p className="mt-2 text-sm text-brand-slate">{feedback}</p>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="mt-5 rounded-sm bg-brand-dark px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white"
                    >
                      Register Another
                    </button>
                  </div>
                ) : (
                  <>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-green">
                      Priority Whitelist
                    </p>
                    <h2 className="mt-1 font-display text-3xl font-semibold text-brand-dark">
                      Reserve Pre-Launch Access
                    </h2>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                      <div>
                        <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-ink">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Enter your name"
                          className="w-full rounded-sm border border-brand-dark/20 px-3.5 py-2.5 text-sm outline-none focus:border-brand-green"
                        />
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-ink">
                            Phone Number *
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
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="you@example.com"
                            className="w-full rounded-sm border border-brand-dark/20 px-3.5 py-2.5 text-sm outline-none focus:border-brand-green"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-ink">
                          Preferred Plot Dimension
                        </label>
                        <select
                          value={form.plotSize}
                          onChange={(e) => setForm({ ...form, plotSize: e.target.value })}
                          className="w-full rounded-sm border border-brand-dark/20 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-brand-green"
                        >
                          <option value="200 – 300 Sq.Yds">200 – 300 Sq.Yds (Standard)</option>
                          <option value="300 – 400 Sq.Yds">300 – 400 Sq.Yds (Corner)</option>
                          <option value="400 – 500 Sq.Yds">400 – 500 Sq.Yds (Signature)</option>
                        </select>
                      </div>

                      {status === 'error' && <p className="text-xs text-red-600">{feedback}</p>}

                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full rounded-sm bg-brand-dark py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-brand-green disabled:opacity-60"
                      >
                        {status === 'submitting' ? 'Registering...' : 'Notify Me at Launch'}
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
