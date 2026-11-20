import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from 'react';
import './become-partner.css';

const COLLABORATION_PILLARS = [
  {
    num: '01',
    title: 'Land Procurement & Joint Development',
    desc: 'Direct joint-development partnerships with landowners across Kardanur, Kollur, Mokila, and high-growth West Hyderabad corridors—unlocking full residential or commercial potential.',
  },
  {
    num: '02',
    title: 'Stalled Project Revival',
    desc: 'Structured takeover and turnaround for ongoing developments where construction or sales have halted midway—restoring buyer confidence and project momentum.',
  },
  {
    num: '03',
    title: 'Approvals, Construction & Sales',
    desc: 'Pranitha Group takes complete ownership of regulatory HMDA & TG-RERA approvals, end-to-end engineering execution, marketing, sales strategy, and final handover.',
  },
  {
    num: '04',
    title: 'Rightful Share & Maximum Value',
    desc: 'Transparent terms built to protect the landowner’s rightful share while maximizing long-term asset value appreciation through disciplined execution and timely delivery.',
  },
] as const;

const COLLABORATION_OPPORTUNITIES = [
  'Joint Development (Landowner Collaboration)',
  'Stalled Project Revival / Takeover',
  'Land Sale / Land Procurement',
  'Corporate Bulk Land Collaboration',
  'Other Strategic Collaboration',
] as const;

type PartnerFieldErrors = Partial<
  Record<'fullName' | 'phone' | 'email' | 'projectDetails' | 'consent', string>
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
  const [opportunity, setOpportunity] = useState<string>(COLLABORATION_OPPORTUNITIES[0]);
  const [projectDetails, setProjectDetails] = useState('');
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
    if (!fullName.trim()) next.fullName = 'Please enter your full name or organization name.';
    if (!phone.trim() || phone.replace(/\D/g, '').length < 7) {
      next.phone = 'Please enter a valid phone number.';
    }
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email.trim())) {
      next.email = 'Please enter a valid email address.';
    }
    if (!projectDetails.trim()) {
      next.projectDetails = 'Please share brief details about your land parcel or project.';
    }
    if (!consent) {
      next.consent = 'Please confirm authorization before submitting your collaboration inquiry.';
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
          opportunity,
          projectDetails: projectDetails.trim(),
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
        setOpportunity(COLLABORATION_OPPORTUNITIES[0]);
        setProjectDetails('');
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
        {/* ── 1. Direct Collaboration Positioning & Value Pillars ── */}
        <div>
          <div className="partner-pillars-header">
            <div className="partner-pill">
              <span className="partner-pill-dot" aria-hidden="true" />
              <span className="partner-pill-text">Joint Development &amp; Landowner Collaboration</span>
            </div>
            <h1 className="partner-pillars-title">
              Direct Collaboration with Pranitha Group
            </h1>
            <p className="partner-pillars-sub">
              Whether you own prime land ready for development or hold a project where construction or sales have stalled midway, Pranitha Group takes complete ownership of regulatory approvals, construction execution, sales strategy, and final delivery—securing your rightful share and maximum asset appreciation.
            </p>
          </div>
        </div>

        <div className="partner-pillars-grid">
          {COLLABORATION_PILLARS.map((pillar) => (
            <article key={pillar.num} className="partner-pillar-card">
              <span className="partner-pillar-num" aria-hidden="true">
                {pillar.num}
              </span>
              <h3 className="partner-pillar-title">{pillar.title}</h3>
              <p className="partner-pillar-desc">{pillar.desc}</p>
            </article>
          ))}
        </div>

        {/* ── 2. Split Collaboration Proposal Shell ── */}
        <div className="partner-shell">
          <div className="partner-aside">
            <div>
              <div className="partner-aside-pill">
                <span className="partner-aside-dot" aria-hidden="true" />
                <span className="partner-aside-pill-text">Direct Developer Desk</span>
              </div>
              <h2 className="partner-aside-title">
                Turn Your Land or Stalled Project Into a Landmark Community
              </h2>
              <p className="partner-aside-desc">
                Backed by 20 years of leadership in land procurement, corporate bulk lands, and residential execution across Kardanur, Kollur, and Mokila, Pranitha Group handles every stage from approvals to handover with complete transparency.
              </p>
            </div>

            <div className="partner-aside-highlights">
              <div>
                <span className="partner-aside-kicker">Direct Leadership Desk</span>
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
                <span className="partner-aside-kicker">End-to-End Scope</span>
                <p className="partner-aside-note">
                  HMDA &amp; TG-RERA approvals, architectural planning, construction execution, sales velocity, and final project delivery.
                </p>
              </div>

              <div>
                <span className="partner-aside-kicker">Primary Focus Corridors</span>
                <p className="partner-aside-note">
                  Kardanur · Kollur · Mokila &amp; West Hyderabad growth corridors.
                </p>
              </div>
            </div>
          </div>

          <div className="partner-form-panel">
            <h3 className="partner-form-heading">Start a Direct Collaboration</h3>
            <p className="partner-form-sub">
              Share your land parcel or project details directly with Pranitha Group for a confidential feasibility evaluation.
            </p>

            <form className="partner-form" onSubmit={handleSubmit} noValidate>
              <div className="partner-form-grid">
                <div className="partner-field">
                  <label htmlFor="Partner-Full-Name" className="partner-field-label">
                    Full Name / Organization
                  </label>
                  <input
                    id="Partner-Full-Name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your full name"
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
              </div>

              <div className="partner-field">
                <label htmlFor="Partner-Email" className="partner-field-label">
                  Email Address
                </label>
                <input
                  id="Partner-Email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
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
                <label id="Partner-Opportunity-label" htmlFor="Partner-Opportunity" className="partner-field-label">
                  What is the opportunity you are looking for collaboration?
                </label>
                <PartnerDropdown
                  id="Partner-Opportunity"
                  labelId="Partner-Opportunity-label"
                  value={opportunity}
                  options={COLLABORATION_OPPORTUNITIES}
                  onChange={setOpportunity}
                />
              </div>

              <div className="partner-field">
                <label htmlFor="Partner-Project-Details" className="partner-field-label">
                  Do you have a land or a project that you want the developer to look into?
                </label>
                <textarea
                  id="Partner-Project-Details"
                  rows={4}
                  maxLength={3000}
                  placeholder="Share location, land extent (acres/sq.yds), current approval or construction status, and how you would like Pranitha Group to collaborate..."
                  className={`partner-input partner-textarea${errors.projectDetails ? ' is-error' : ''}`}
                  aria-invalid={Boolean(errors.projectDetails)}
                  aria-describedby={errors.projectDetails ? 'Partner-Project-Details-error' : undefined}
                  value={projectDetails}
                  onChange={(e) => {
                    setProjectDetails(e.target.value);
                    clearError('projectDetails');
                  }}
                  required
                />
                {errors.projectDetails && (
                  <p id="Partner-Project-Details-error" className="partner-field-error">
                    {errors.projectDetails}
                  </p>
                )}
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
                      I authorize Pranitha Group to contact me directly regarding this land or project collaboration opportunity.
                    </span>
                  </label>
                  {errors.consent && (
                    <p id="Partner-Consent-error" className="partner-field-error">
                      {errors.consent}
                    </p>
                  )}
                </div>

                <button type="submit" className="partner-submit-btn" disabled={submitting}>
                  <span>{submitting ? 'Submitting...' : 'Submit Collaboration Inquiry'}</span>
                  {!submitting && <span aria-hidden="true">→</span>}
                </button>
              </div>
            </form>

            {status === 'success' && (
              <div className="partner-status-box partner-status-box--success" role="status">
                Thank you! Our Land &amp; Joint Development team has received your collaboration details and will connect with you directly.
              </div>
            )}

            {status === 'error' && (
              <div className="partner-status-box partner-status-box--error" role="alert">
                Something went wrong while submitting your inquiry. Please call +91 91336 37111.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
