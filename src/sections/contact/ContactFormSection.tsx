import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from 'react';
import { PAGE_META } from '../../types/site';
import './contact-cards.css';

const PROPERTY_INTERESTS = [
  "Pranitha's Lakshmi Nivas — Kardanur (New Launch)",
  'Amity Villas — Mokila (5 BHK)',
  'The Patio Villas — Mokila (5 BHK)',
  'The Santorini Villas — Mokila (5 BHK)',
  'Meridian Apartments — Kondakal (3 BHK)',
  'Singapur Town Phase-2 (4 BHK)',
  'Direct Collaboration / Joint Development',
] as const;

type FieldErrors = Partial<
  Record<'firstName' | 'lastName' | 'email' | 'phone' | 'message' | 'consent', string>
>;

function ArrowIcon() {
  return (
    <svg
      className="contact-link-arrow"
      width="15"
      height="15"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface ContactDropdownProps {
  id: string;
  labelId: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
}

function ContactDropdown({ id, labelId, value, options, onChange }: ContactDropdownProps) {
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
        onChange(options[(currentIndex + 1) % options.length]);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!open) {
        setOpen(true);
      } else {
        onChange(options[(currentIndex - 1 + options.length) % options.length]);
      }
    }
  };

  return (
    <div ref={wrapRef} className={`contact-select-wrap${open ? ' is-open' : ''}`}>
      <button
        id={id}
        type="button"
        className={`contact-input contact-select-trigger${open ? ' is-open' : ''}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={`${labelId} ${id}`}
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={handleTriggerKeyDown}
      >
        <span className="contact-select-value">{value}</span>
        <svg
          className="contact-select-chevron"
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
        <ul className="contact-select-menu" role="listbox" aria-labelledby={labelId}>
          {options.map((opt) => {
            const selected = opt === value;
            return (
              <li key={opt} role="option" aria-selected={selected} className="contact-select-item">
                <button
                  type="button"
                  className={`contact-select-option${selected ? ' is-selected' : ''}`}
                  onClick={() => {
                    onChange(opt);
                    setOpen(false);
                  }}
                >
                  <span>{opt}</span>
                  {selected && (
                    <svg
                      className="contact-select-check"
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

export function ContactFormSection() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState<string>(PROPERTY_INTERESTS[0]);
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      typeof IntersectionObserver === 'undefined'
    ) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.06 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const validateFields = (): FieldErrors => {
    const next: FieldErrors = {};
    if (!firstName.trim()) next.firstName = 'Please enter your first name.';
    if (!lastName.trim()) next.lastName = 'Please enter your last name.';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = 'Please enter a valid email address.';
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 7) {
      next.phone = 'Please enter a valid phone number.';
    }
    if (!message.trim()) next.message = 'Please share a brief message.';
    if (!consent) next.consent = 'Please confirm consent before submitting.';
    return next;
  };

  const clearError = (field: keyof FieldErrors) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const copy = { ...prev };
      delete copy[field];
      return copy;
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (submitting) return;

    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);
    setStatus('idle');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          interest,
          message,
          consent,
        }),
      });
      if (!response.ok) {
        setStatus('error');
      } else {
        setStatus('success');
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setInterest(PROPERTY_INTERESTS[0]);
        setMessage('');
        setConsent(false);
      }
    } catch {
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`section contact-page-section${isVisible ? ' is-in-view' : ''}`}
    >
      <div className="contact-section-container">
        {/* ── 1. Elevated Architectural Enquiry Card ── */}
        <div
          className="contact-shell contact-reveal"
          style={{ '--reveal-delay': '0ms' } as React.CSSProperties}
        >
          <div className="contact-aside">
            <div>
              <div className="contact-pill">
                <span className="contact-pill-dot" aria-hidden="true" />
                <span className="contact-pill-text">Private Consultation</span>
              </div>
              <h2 className="contact-aside-title">
                Tell Us What You&apos;re Looking For
              </h2>
              <p className="contact-aside-desc">
                Share your preferred community, villa configuration, or timeline. Our advisory desk at Mokila &amp; Gachibowli responds promptly with brochures, floor plans, and guided tour slots.
              </p>
            </div>

            <div className="contact-aside-highlights">
              <div className="contact-aside-item">
                <span className="contact-aside-kicker">Direct Sales Desk</span>
                <div className="contact-aside-links">
                  <a href="tel:+919133637111" className="contact-aside-link">
                    +91 91336 37111
                  </a>
                  <span style={{ color: 'rgba(255,255,255,0.35)' }} aria-hidden="true">/</span>
                  <a href="tel:+917673929211" className="contact-aside-link">
                    +91 76739 29211
                  </a>
                </div>
              </div>

              <div className="contact-aside-item">
                <span className="contact-aside-kicker">Email &amp; Instant Chat</span>
                <div className="contact-aside-links">
                  <a href="mailto:info@praneeta.dev" className="contact-aside-link">
                    info@praneeta.dev
                  </a>
                  <a
                    href="https://wa.me/919133637111"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-aside-wa"
                  >
                    <span>Chat on WhatsApp</span>
                    <ArrowIcon />
                  </a>
                </div>
              </div>

              <div className="contact-aside-item">
                <span className="contact-aside-kicker">Site Visits · 7 Days a Week</span>
                <p className="contact-aside-note">
                  Amity Villas · The Patio · The Santorini · Meridian · PST-2 Shankarpally
                </p>
              </div>
            </div>
          </div>

          <div className="contact-form-panel w-form">
            <form
              id="wf-form-Contact-Form"
              name="wf-form-Contact-Form"
              data-name="Contact Form"
              method="post"
              className="contact-form"
              data-wf-page-id={PAGE_META.contact.wfPage}
              data-wf-element-id="28975aec-f662-f86c-cca1-9cfa601829ea"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="contact-form-grid">
                <div className="contact-field">
                  <label htmlFor="First-Name" className="contact-field-label">
                    First Name
                  </label>
                  <input
                    className={`contact-input w-input${errors.firstName ? ' is-error' : ''}`}
                    maxLength={256}
                    name="First-Name"
                    data-name="First Name"
                    placeholder="e.g. Rajesh"
                    type="text"
                    id="First-Name"
                    autoComplete="given-name"
                    required
                    aria-invalid={Boolean(errors.firstName)}
                    aria-describedby={errors.firstName ? 'First-Name-error' : undefined}
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                      clearError('firstName');
                    }}
                  />
                  {errors.firstName && (
                    <p id="First-Name-error" className="contact-field-error">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div className="contact-field">
                  <label htmlFor="Last-Name" className="contact-field-label">
                    Last Name
                  </label>
                  <input
                    className={`contact-input w-input${errors.lastName ? ' is-error' : ''}`}
                    maxLength={256}
                    name="Last-Name"
                    data-name="Last Name"
                    placeholder="e.g. Reddy"
                    type="text"
                    id="Last-Name"
                    autoComplete="family-name"
                    required
                    aria-invalid={Boolean(errors.lastName)}
                    aria-describedby={errors.lastName ? 'Last-Name-error' : undefined}
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                      clearError('lastName');
                    }}
                  />
                  {errors.lastName && (
                    <p id="Last-Name-error" className="contact-field-error">
                      {errors.lastName}
                    </p>
                  )}
                </div>

                <div className="contact-field">
                  <label htmlFor="Email" className="contact-field-label">
                    Email Address
                  </label>
                  <input
                    className={`contact-input w-input${errors.email ? ' is-error' : ''}`}
                    maxLength={256}
                    name="Email"
                    data-name="Email"
                    placeholder="you@example.com"
                    type="email"
                    id="Email"
                    autoComplete="email"
                    required
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'Email-error' : undefined}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      clearError('email');
                    }}
                  />
                  {errors.email && (
                    <p id="Email-error" className="contact-field-error">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="contact-field">
                  <label htmlFor="Phone" className="contact-field-label">
                    Phone Number
                  </label>
                  <input
                    className={`contact-input w-input${errors.phone ? ' is-error' : ''}`}
                    maxLength={256}
                    name="Phone"
                    data-name="Phone"
                    placeholder="+91 98XXX XXXXX"
                    type="tel"
                    id="Phone"
                    autoComplete="tel"
                    required
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'Phone-error' : undefined}
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      clearError('phone');
                    }}
                  />
                  {errors.phone && (
                    <p id="Phone-error" className="contact-field-error">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="contact-field">
                <label id="Slect-Property-label" htmlFor="Slect-Property" className="contact-field-label">
                  Community / Project Interest
                </label>
                <ContactDropdown
                  id="Slect-Property"
                  labelId="Slect-Property-label"
                  value={interest}
                  options={PROPERTY_INTERESTS}
                  onChange={setInterest}
                />
              </div>

              <div className="contact-field">
                <label htmlFor="Message" className="contact-field-label">
                  Message &amp; Preferred Visit Time
                </label>
                <textarea
                  id="Message"
                  name="Message"
                  rows={4}
                  maxLength={5000}
                  data-name="Message"
                  placeholder="Share preferred villa/unit size, budget range, or when you would like to visit..."
                  required
                  className={`contact-input textarea w-input${errors.message ? ' is-error' : ''}`}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'Message-error' : undefined}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    clearError('message');
                  }}
                />
                {errors.message && (
                  <p id="Message-error" className="contact-field-error">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="contact-form-footer">
                <div className="contact-consent-wrap">
                  <label className="w-checkbox checkbox-field">
                    <input
                      type="checkbox"
                      name="checkbox"
                      id="checkbox"
                      data-name="Checkbox"
                      required
                      className="w-checkbox-input checkbox"
                      aria-invalid={Boolean(errors.consent)}
                      aria-describedby={errors.consent ? 'Consent-error' : undefined}
                      checked={consent}
                      onChange={(e) => {
                        setConsent(e.target.checked);
                        clearError('consent');
                      }}
                    />
                    <span className="checkbox-label w-form-label">
                      I agree to let Praneeta Developers contact me regarding this inquiry.
                    </span>
                  </label>
                  {errors.consent && (
                    <p id="Consent-error" className="contact-field-error">
                      {errors.consent}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  data-wait="Sending Inquiry..."
                  className="contact-submit-btn"
                  disabled={submitting}
                >
                  {submitting && <span className="contact-btn-spinner" aria-hidden="true" />}
                  <span>{submitting ? 'Sending Inquiry...' : 'Send Inquiry'}</span>
                  {!submitting && <ArrowIcon />}
                </button>
              </div>
            </form>

            <div
              className="form-success w-form-done"
              role="status"
              style={{ display: status === 'success' ? 'block' : undefined }}
            >
              <div>Thank you! Your inquiry has been received. Our team will contact you shortly.</div>
            </div>
            <div
              className="form-error w-form-fail"
              role="alert"
              style={{ display: status === 'error' ? 'block' : undefined }}
            >
              <div className="text-block">
                Oops! Something went wrong while submitting the form. Please call +91 91336 37111.
              </div>
            </div>
          </div>
        </div>

        {/* ── 2. Full-Width Landscape Google Map ── */}
        <div
          className="contact-map-card contact-reveal"
          style={{ '--reveal-delay': '80ms' } as React.CSSProperties}
        >
          <div className="contact-map-header">
            <div className="contact-map-heading-wrap">
              <span className="contact-map-eyebrow">Location &amp; Directions</span>
              <h3 className="contact-map-title">Explore Mokila – Shankarpally Corridor</h3>
              <p className="contact-map-subtitle">
                10–15 min from ORR Exit 2 (Kollur) &amp; Kokapet Neopolis · Pin: 17.4560614, 78.1985395
              </p>
            </div>
            <a
              href="https://maps.app.goo.gl/NThjHwjhG3vtiV83A?g_st=ic"
              target="_blank"
              rel="noreferrer"
              className="contact-map-cta"
            >
              <span>Open in Google Maps</span>
              <ArrowIcon />
            </a>
          </div>
          <div className="contact-map-iframe-wrap">
            <iframe
              title="Praneeta Developers Location Map"
              src="https://www.google.com/maps?q=17.4560614,78.1985395&z=16&output=embed"
              className="contact-map-iframe"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        {/* ── 3. Refined Contact Directory Cards (Below Map) ── */}
        <div
          className="contact-directory contact-reveal"
          style={{ '--reveal-delay': '140ms' } as React.CSSProperties}
        >
          <div className="contact-directory-card">
            <div className="contact-directory-icon" aria-hidden="true">
              <img
                src="/images/69e9c15cade62629db29e938_1.svg"
                loading="lazy"
                alt=""
                className="contact-directory-icon-img"
              />
            </div>
            <span className="contact-directory-kicker">Phone &amp; WhatsApp</span>
            <div className="contact-directory-body">
              <a href="tel:+919133637111" className="contact-directory-primary">
                +91 91336 37111
              </a>
              <a href="tel:+917673929211" className="contact-directory-secondary">
                +91 76739 29211
              </a>
              <a
                href="https://wa.me/919133637111"
                target="_blank"
                rel="noreferrer"
                className="contact-directory-action"
              >
                <span>WhatsApp Site Desk</span>
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="contact-directory-card">
            <div className="contact-directory-icon" aria-hidden="true">
              <img
                src="/images/69e9c15c96fb895d66f6ac3d_2.svg"
                loading="lazy"
                alt=""
                className="contact-directory-icon-img"
              />
            </div>
            <span className="contact-directory-kicker">Email &amp; Online Desk</span>
            <div className="contact-directory-body">
              <a href="mailto:info@praneeta.dev" className="contact-directory-primary">
                info@praneeta.dev
              </a>
              <p className="contact-directory-note">
                Request project brochures, floor plans &amp; RERA documentation.
              </p>
              <a
                href="https://www.google.com/maps?q=17.4264796,78.1912362"
                target="_blank"
                rel="noreferrer"
                className="contact-directory-action"
              >
                <span>Santorini / Mokila Pin</span>
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="contact-directory-card">
            <div className="contact-directory-icon" aria-hidden="true">
              <img
                src="/images/69e9c15c4fbf278956b902d1_3.svg"
                loading="lazy"
                alt=""
                className="contact-directory-icon-img"
              />
            </div>
            <span className="contact-directory-kicker">Offices</span>
            <div className="contact-directory-body">
              <p className="contact-directory-office-title">Corporate Office (Gachibowli)</p>
              <p className="contact-directory-note">
                #B-506, The Platina Building, Jayabheri Enclave, Beside Radisson Hotel, Hyderabad – 500032
              </p>
              <p className="contact-directory-office-title">Site Office (Mokila)</p>
              <a
                href="https://www.google.com/maps?q=17.4264796,78.1912362"
                target="_blank"
                rel="noreferrer"
                className="contact-directory-action"
              >
                <span>6-109, Mokila Village – 501203</span>
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
