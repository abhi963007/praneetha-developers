import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { postJson, useApi } from '../hooks/useApi';
import { useReveal } from '../hooks/useReveal';
import type { CompanyInfo } from '../types';

export function Contact() {
  const { data: company } = useApi<CompanyInfo>('/api/company');
  const revealRef = useReveal<HTMLDivElement>([company?.phone]);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setFeedback('');
    try {
      const res = await postJson<{ success: boolean; message: string }>('/api/enquiries', {
        ...form,
        inquiryType: 'Contact Desk Enquiry',
      });
      setStatus('success');
      setFeedback(res.message);
      setForm({
        name: '',
        phone: '',
        email: '',
        message: '',
      });
    } catch (err) {
      setStatus('error');
      setFeedback(err instanceof Error ? err.message : 'Unable to send message.');
    }
  };

  return (
    <div ref={revealRef} className="bg-white">
      <section className="border-b border-brand-dark/12 bg-brand-cream py-12">
        <div className="edge-container">
          <nav className="text-[11px] uppercase tracking-[0.16em] text-brand-slate" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-brand-green">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="font-semibold text-brand-dark">Contact Us</span>
          </nav>

          <h1 className="mt-4 font-display text-4xl font-semibold text-brand-dark sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-2 max-w-xl text-sm text-brand-slate">
            Reach our Mokila advisory desk for villa pricing, RERA documents, or private tours.
          </p>
        </div>
      </section>

      <section className="section-pad py-14" data-reveal="up">
        <div className="edge-container">
          <div className="grid items-stretch gap-8 lg:grid-cols-12">
            {/* Left Office & Map Column */}
            <div className="flex flex-col justify-between gap-6 lg:col-span-5">
              <div className="rounded-sm border border-brand-dark/15 bg-brand-cream p-6">
                <dl className="divide-y divide-brand-dark/10 text-sm">
                  <div className="pb-3.5">
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-slate">
                      Site Lounge Address
                    </dt>
                    <dd className="mt-1 text-xs leading-relaxed text-brand-dark">
                      {company?.address ||
                        '6-109, Mokila Village, Shankarpally Mandal, RR District, Hyderabad - 501203'}
                    </dd>
                  </div>
                  <div className="py-3.5">
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-slate">
                      Phone &amp; Timings
                    </dt>
                    <dd className="mt-1 flex flex-wrap items-center justify-between gap-2">
                      <a
                        href={company?.phoneHref || 'tel:+919133637111'}
                        className="text-sm font-semibold text-brand-green hover:underline"
                      >
                        {company?.phone || '+91 9133637111'}
                      </a>
                      <span className="text-xs text-brand-slate">Mon–Sun · 9:30 AM – 6:30 PM</span>
                    </dd>
                  </div>
                  <div className="pt-3.5">
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-slate">
                      Email
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${company?.email || 'info@praneeta.dev'}`}
                        className="text-xs font-semibold text-brand-dark hover:text-brand-green hover:underline"
                      >
                        {company?.email || 'info@praneeta.dev'}
                      </a>
                    </dd>
                  </div>
                </dl>

                <a
                  href={
                    company?.mapDirectionsUrl ||
                    'https://www.google.com/maps/dir/?api=1&destination=17.4264796,78.1912362'
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-brand-dark hover:text-brand-green hover:underline"
                >
                  Open in Google Maps →
                </a>
              </div>

              <div className="flex-1 min-h-[220px] overflow-hidden rounded-sm border border-brand-dark/15">
                <iframe
                  title="Pranitha Developers Hyderabad Location"
                  src={
                    company?.mapEmbedUrl ||
                    'https://www.google.com/maps?q=17.4264796,78.1912362&z=14&output=embed'
                  }
                  className="h-full min-h-[220px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right Clean 4-Field Contact Form */}
            <div className="lg:col-span-7">
              <div className="flex h-full flex-col justify-center rounded-sm border border-brand-dark/15 bg-white p-6 sm:p-9">
                {status === 'success' ? (
                  <div className="py-10 text-center">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-green">
                      Enquiry Logged
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-semibold text-brand-dark">
                      Message Received
                    </h2>
                    <p className="mt-2 text-sm text-brand-slate">{feedback}</p>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="mt-6 rounded-sm bg-brand-dark px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-green">
                      Direct Enquiry
                    </p>
                    <h2 className="mt-1 font-display text-3xl font-semibold text-brand-dark">
                      Get in Touch
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
                          placeholder="Your full name"
                          className="w-full rounded-sm border border-brand-dark/20 px-3.5 py-2.5 text-sm outline-none focus:border-brand-green"
                        />
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-ink">
                            Phone / WhatsApp *
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
                            placeholder="you@domain.com"
                            className="w-full rounded-sm border border-brand-dark/20 px-3.5 py-2.5 text-sm outline-none focus:border-brand-green"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-ink">
                          Message
                        </label>
                        <textarea
                          rows={4}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Tell us about your preferred villa configuration or site visit date..."
                          className="w-full rounded-sm border border-brand-dark/20 px-3.5 py-2.5 text-sm outline-none focus:border-brand-green"
                        />
                      </div>

                      {status === 'error' && <p className="text-xs text-red-600">{feedback}</p>}

                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full rounded-sm bg-brand-dark py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-brand-green disabled:opacity-60"
                      >
                        {status === 'submitting' ? 'Sending...' : 'Send Message'}
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
