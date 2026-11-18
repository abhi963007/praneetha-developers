import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from 'react';
import './become-partner.css';

const PARTNER_PILLARS = [
  {
    num: '01',
    title: 'Premium Inventory',
    desc: 'Direct access to HMDA & TG-RERA registered gated 4 & 5 BHK villas and 3 BHK luxury apartments across Mokila, Kardanur, Kondakal & Shankarpally.',
  },
  {
    num: '02',
    title: 'Competitive Payouts',
    desc: 'Attractive brokerage slabs with milestone-linked releases, transparent registration logs, and reliable settlement cycles.',
  },
  {
    num: '03',
    title: 'Sales Kits',
    desc: 'Ready-to-share architectural renders, cropped floor plans, master site layouts, RERA dockets, and priority guided site visit support.',
  },
  {
    num: '04',
    title: 'Trust',
    desc: 'Two decades of West Hyderabad delivery credibility with completed communities and strategic collaboration with TAG Projects.',
  },
] as const;

const PARTNER_TYPES = ['Individual', 'Firm'] as const;

const PREFERRED_PROJECTS = [
  'All Praneeta Communities',
  'Upcoming Mokila Project (Kardanur / Mokila Belt)',
  'Praneeta Amity Villas — Mokila (5 BHK)',
  'Praneeta The Patio Villas — Mokila (5 BHK)',
  'Praneeta Santorini Villas — Mokila (4 & 5 BHK)',
  'Praneeta Meridian — Kondakal (3 BHK)',
  'Praneeta Singapore Town — Shankarpally',
] as const;

type PartnerFieldErrors = Partial<
  Record<'fullName' | 'phone' | 'email' | 'consent', string>
>;

interface PartnerDropdownProps {
  id: string;
  labelId: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
}

function PartnerDropdown({ id, labelId, value, options, onChange }: PartnerDropdownProps) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (e: PointerEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  const handleTriggerKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const currentIndex = options.indexOf(value);
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!open) {
        setOpen(true);
      } else {
        const nextIdx = (currentIndex + 1) % options.length;
        onChange(options[nextIdx]);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!open) {
        setOpen(true);
      } else {
        const prevIdx = (currentIndex - 1 + options.length) % options.length;
        onChange(options[prevIdx]);
      }
    }
  };

  return (
    <div ref={wrapRef} className={`partner-select-wrap${open ? ' is-open' : ''}`}>
      <button
        id={id}
        type="button"
        className={`partner-input partner-select-trigger${open ? ' is-open' : ''}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={`${labelId} ${id}`}
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={handleTriggerKeyDown}
      >
        <span className="partner-select-value">{value}</span>
        <svg
          className="partner-select-chevron"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <ul className="partner-select-menu" role="listbox" aria-labelledby={labelId}>
          {options.map((opt) => {
            const selected = opt === value;
            return (
              <li key={opt} role="option" aria-selected={selected} className="partner-select-item">
                <button
                  type="button"
                  className={`partner-select-option${selected ? ' is-selected' : ''}`}
                  onClick={() => {
                    onChange(opt);
                    setOpen(false);
                  }}
                >
                  <span>{opt}</span>
                  {selected && (
                    <svg
                      className="partner-select-check"
                      width="15"
                      height="15"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3.5 8.5L6.5 11.5L12.5 4.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export function BecomePartnerSection() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [partnerType, setPartnerType] = useState<string>(PARTNER_TYPES[0]);
  const [preferredProject, setPreferredProject] = useState<string>(PREFERRED_PROJECTS[0]);
  const [notes, setNotes] = useState('');
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<PartnerFieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const clearError = (field: keyof PartnerFieldErrors) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const copy = { ...prev };
      delete copy[field];
      return copy;
    });
  };

  const validate = (): PartnerFieldErrors => {
    const next: PartnerFieldErrors = {};
    if (!fullName.trim()) next.fullName = 'Please enter your full name or agency name.';
    if (!phone.trim() || phone.replace(/\D/g, '').length < 7) {
      next.phone = 'Please enter a valid phone number.';
    }
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email.trim())) {
      next.email = 'Please enter a valid email address.';
    }
    if (!consent) {
      next.consent = 'Please confirm authorization before registering.';
    }
    return next;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (submitting) return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/channel-partners', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: fullName.trim(),
          phone: phone.trim(),
          email: email.trim(),
          partnerType,
          preferredProject,
          notes: notes.trim(),
          consent: true,
        }),
      });

      if (!response.ok) {
        setStatus('error');
      } else {
        setStatus('success');
        setFullName('');
        setPhone('');
        setEmail('');
        setPartnerType(PARTNER_TYPES[0]);
        setPreferredProject(PREFERRED_PROJECTS[0]);
        setNotes('');
        setConsent(false);
      }
    } catch {
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="partner-section">
      <div className="partner-container">
        {/* ── 1. 4 Partner Value Pillars ── */}
        <div>
          <div className="partner-pillars-header">
            <div className="partner-pill">
              <span className="partner-pill-dot" aria-hidden="true" />
              <span className="partner-pill-text">Channel Partner Portal</span>
            </div>
            <h1 className="partner-pillars-title">
              Become a Praneeta Developers Channel Partner
            </h1>
            <p className="partner-pillars-sub">
              Join Hyderabad&apos;s fastest-growing quality-delivering property developer. Access premium inventory, earn attractive payouts, and close more deals with dedicated support.
            </p>
          </div>
        </div>

        <div className="partner-pillars-grid">
          {PARTNER_PILLARS.map((pillar) => (
            <article key={pillar.num} className="partner-pillar-card">
              <span className="partner-pillar-num" aria-hidden="true">
                {pillar.num}
              </span>
              <h3 className="partner-pillar-title">{pillar.title}</h3>
              <p className="partner-pillar-desc">{pillar.desc}</p>
            </article>
          ))}
        </div>

        {/* ── 2. Split Registration Shell ── */}
        <div className="partner-shell">
          <div className="partner-aside">
            <div>
              <div className="partner-aside-pill">
                <span className="partner-aside-dot" aria-hidden="true" />
                <span className="partner-aside-pill-text">Partner Onboarding</span>
              </div>
              <h2 className="partner-aside-title">
                Partner With West Hyderabad&apos;s Leading Villa Developer
              </h2>
              <p className="partner-aside-desc">
                Submit your individual or brokerage firm details to receive our digital sales kit, updated unit availability sheets, and dedicated site-visit coordination across Mokila &amp; Shankarpally.
              </p>
            </div>

            <div className="partner-aside-highlights">
              <div>
                <span className="partner-aside-kicker">Dedicated CP Desk</span>
                <div className="partner-aside-links">
                  <a href="tel:+919133637111" className="partner-aside-link">
                    +91 91336 37111
                  </a>
                  <span style={{ color: 'rgba(255,255,255,0.35)' }} aria-hidden="true">
                    /
                  </span>
                  <a href="mailto:info@praneeta.dev" className="partner-aside-link">
                    info@praneeta.dev
                  </a>
                </div>
              </div>

              <div>
                <span className="partner-aside-kicker">Empanelment Turnaround</span>
                <p className="partner-aside-note">
                  24–48 hours with verified brochure kits, master layouts &amp; RERA documentation.
                </p>
              </div>

              <div>
                <span className="partner-aside-kicker">Active Growth Corridors</span>
                <p className="partner-aside-note">
                  Mokila · Kardanur · Kondakal · Shankarpally (10–25 mins from Neopolis &amp; Financial District)
                </p>
              </div>
            </div>
          </div>

          <div className="partner-form-panel">
            <h3 className="partner-form-heading">Channel Partner Registration</h3>
            <p className="partner-form-sub">
              Complete the form below to enroll as an authorized Praneeta Developers channel partner.
            </p>

            <form className="partner-form" onSubmit={handleSubmit} noValidate>
              <div className="partner-form-grid">
                <div className="partner-field">
                  <label htmlFor="Partner-Full-Name" className="partner-field-label">
                    Full Name
                  </label>
                  <input
                    id="Partner-Full-Name"
                    type="text"
                    autoComplete="name"
                    placeholder="e.g. Suresh Reddy / Horizon Realty"
                    className={`partner-input${errors.fullName ? ' is-error' : ''}`}
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={errors.fullName ? 'Partner-Full-Name-error' : undefined}
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      clearError('fullName');
                    }}
                    required
                  />
                  {errors.fullName && (
                    <p id="Partner-Full-Name-error" className="partner-field-error">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div className="partner-field">
                  <label htmlFor="Partner-Phone" className="partner-field-label">
                    Phone Number
                  </label>
                  <input
                    id="Partner-Phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+91 98XXX XXXXX"
                    className={`partner-input${errors.phone ? ' is-error' : ''}`}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'Partner-Phone-error' : undefined}
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      clearError('phone');
                    }}
                    required
                  />
                  {errors.phone && (
                    <p id="Partner-Phone-error" className="partner-field-error">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="partner-field">
                  <label htmlFor="Partner-Email" className="partner-field-label">
                    Email Address
                  </label>
                  <input
                    id="Partner-Email"
                    type="email"
                    autoComplete="email"
                    placeholder="partner@example.com"
                    className={`partner-input${errors.email ? ' is-error' : ''}`}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'Partner-Email-error' : undefined}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      clearError('email');
                    }}
                    required
                  />
                  {errors.email && (
                    <p id="Partner-Email-error" className="partner-field-error">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="partner-field">
                  <label id="Partner-Type-label" htmlFor="Partner-Type" className="partner-field-label">
                    Partner Type
                  </label>
                  <PartnerDropdown
                    id="Partner-Type"
                    labelId="Partner-Type-label"
                    value={partnerType}
                    options={PARTNER_TYPES}
                    onChange={setPartnerType}
                  />
                </div>
              </div>

              <div className="partner-field">
                <label id="Partner-Project-label" htmlFor="Partner-Project" className="partner-field-label">
                  Preferred Project
                </label>
                <PartnerDropdown
                  id="Partner-Project"
                  labelId="Partner-Project-label"
                  value={preferredProject}
                  options={PREFERRED_PROJECTS}
                  onChange={setPreferredProject}
                />
              </div>

              <div className="partner-field">
                <label htmlFor="Partner-Notes" className="partner-field-label">
                  Additional Notes / TG-RERA Agency ID (Optional)
                </label>
                <textarea
                  id="Partner-Notes"
                  rows={4}
                  maxLength={3000}
                  placeholder="Share your TG-RERA agent ID, operating corridor, or client requirements..."
                  className="partner-input partner-textarea"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              <div className="partner-form-footer">
                <div>
                  <label className="partner-consent-label">
                    <input
                      type="checkbox"
                      className="partner-checkbox"
                      checked={consent}
                      aria-invalid={Boolean(errors.consent)}
                      aria-describedby={errors.consent ? 'Partner-Consent-error' : undefined}
                      onChange={(e) => {
                        setConsent(e.target.checked);
                        clearError('consent');
                      }}
                    />
                    <span className="partner-consent-text">
                      I agree to let Praneeta Developers contact me regarding channel partner onboarding and inventory updates.
                    </span>
                  </label>
                  {errors.consent && (
                    <p id="Partner-Consent-error" className="partner-field-error">
                      {errors.consent}
                    </p>
                  )}
                </div>

                <button type="submit" className="partner-submit-btn" disabled={submitting}>
                  <span>{submitting ? 'Registering...' : 'Register Now'}</span>
                  {!submitting && <span aria-hidden="true">→</span>}
                </button>
              </div>
            </form>

            {status === 'success' && (
              <div className="partner-status-box partner-status-box--success" role="status">
                Thank you for registering! Our Channel Partner Desk will review your details and connect within 24–48 hours.
              </div>
            )}

            {status === 'error' && (
              <div className="partner-status-box partner-status-box--error" role="alert">
                Something went wrong while submitting your registration. Please call +91 91336 37111.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
