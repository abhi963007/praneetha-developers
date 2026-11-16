import { useEffect, useRef, useState, type FormEvent } from 'react';
import { PAGE_META } from '../../types/site';
import './contact-cards.css';

const PROPERTY_INTERESTS = [
  'Praneeta Sovereign Villas (₹1.5–2.0 Cr)',
  'Praneeta Santorini Villas',
  'Praneeta Amity / The Patio Villas',
  'Praneeta Meridian Heights Apartments',
  'Praneeta Singapur Town Plots (Coming Soon)',
  'Channel Partner Registration',
] as const;

const SOCIAL_LINKS = [
  { label: 'Facebook', icon: '/images/69e9c2dd6c30ecf541ac4e73_1.svg' },
  { label: 'LinkedIn', icon: '/images/69e9c2ddcc1e0dae195ecb03_2.svg' },
  { label: 'X (Twitter)', icon: '/images/69e9c2dd29fa8e3712f37cf5_3.svg' },
  { label: 'Instagram', icon: '/images/69e9c2dde049fa499ad9b3f2_4.svg' },
] as const;

type FieldErrors = Partial<
  Record<'firstName' | 'lastName' | 'email' | 'phone' | 'message' | 'consent', string>
>;

function ArrowIcon() {
  return (
    <svg
      className="contact-link-arrow"
      width="14"
      height="14"
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
      { threshold: 0.08 }
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
        {/* ── Three Contact Info Cards ── */}
        <div className="contact-info-wrapper">
          <div className="contact-info-box contact-reveal" style={{ '--reveal-delay': '0ms' } as React.CSSProperties}>
            <div className="contact-info-icon" aria-hidden="true">
              <img
                src="/images/69e9c15cade62629db29e938_1.svg"
                loading="lazy"
                alt=""
                className="contact-info-icon-img"
              />
            </div>
            <h3 className="contact-info-title">Phone &amp; WhatsApp</h3>
            <div className="contact-info-links">
              <a
                href="tel:+919133637111"
                className="contact-info-text contact-card-primary-link"
              >
                +91 91336 37111
              </a>
              <a
                href="https://wa.me/919133637111"
                target="_blank"
                rel="noreferrer"
                className="contact-info-text link contact-action-link"
              >
                <span>WhatsApp Site Desk</span>
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="contact-info-box contact-reveal" style={{ '--reveal-delay': '70ms' } as React.CSSProperties}>
            <div className="contact-info-icon" aria-hidden="true">
              <img
                src="/images/69e9c15c96fb895d66f6ac3d_2.svg"
                loading="lazy"
                alt=""
                className="contact-info-icon-img"
              />
            </div>
            <h3 className="contact-info-title">Email Id</h3>
            <div className="contact-info-links">
              <a
                href="mailto:info@praneeta.dev"
                className="contact-info-text contact-card-primary-link"
              >
                info@praneeta.dev
              </a>
              <a
                href="https://www.google.com/maps?q=17.4264796,78.1912362"
                target="_blank"
                rel="noreferrer"
                className="contact-info-text link contact-action-link"
              >
                <span>Open in Google Maps</span>
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="contact-info-box contact-reveal" style={{ '--reveal-delay': '140ms' } as React.CSSProperties}>
            <div className="contact-info-icon" aria-hidden="true">
              <img
                src="/images/69e9c15c4fbf278956b902d1_3.svg"
                loading="lazy"
                alt=""
                className="contact-info-icon-img"
              />
            </div>
            <h3 className="contact-info-title">Corporate Office</h3>
            <div className="contact-info-links">
              <a
                href="https://www.google.com/maps?q=17.4264796,78.1912362"
                target="_blank"
                rel="noreferrer"
                className="contact-info-text contact-card-primary-link"
              >
                6-109, Mokila Village, Shankarpally Mandal, Hyderabad – 501203
              </a>
            </div>
          </div>
        </div>

        {/* ── Two-Column Inquiry Block ── */}
        <div
          className="contact-grid contact-reveal"
          style={{ '--reveal-delay': '210ms' } as React.CSSProperties}
        >
          <div className="contact-content">
            <div className="contact-title-box">
              <h2 className="section-title contact">Tell Us What You're Looking For</h2>
              <p className="section-text contact">
                Share a few details about your property needs and our team will get back to you with the right next steps.
              </p>

              <ul className="contact-trust-list" aria-label="Contact highlights">
                <li className="contact-trust-item">
                  <span className="contact-trust-dot" aria-hidden="true" />
                  <span>Direct Site Desk: +91 91336 37111</span>
                </li>
                <li className="contact-trust-item">
                  <span className="contact-trust-dot" aria-hidden="true" />
                  <span>Mokila Village, Shankarpally Mandal, Hyderabad</span>
                </li>
                <li className="contact-trust-item">
                  <span className="contact-trust-dot" aria-hidden="true" />
                  <span>Villas, Apartments &amp; Plotted Inquiries</span>
                </li>
              </ul>
            </div>

            <div className="contact-social-footer">
              <span className="contact-social-label">Follow us</span>
              <div className="social-box-three">
                {SOCIAL_LINKS.map((item) => (
                  <a
                    key={item.label}
                    href="#social"
                    onClick={(e) => e.preventDefault()}
                    className="social-two w-inline-block"
                    aria-label={item.label}
                  >
                    <img src={item.icon} loading="lazy" alt="" className="social-icon-two" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-box">
            <div className="contact-form-block w-form">
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
                      placeholder="First Name"
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
                      placeholder="Last Name"
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
                      placeholder="Email Address"
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
                      Phone
                    </label>
                    <input
                      className={`contact-input w-input${errors.phone ? ' is-error' : ''}`}
                      maxLength={256}
                      name="Phone"
                      data-name="Phone"
                      placeholder="Phone"
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
                  <label htmlFor="Slect-Property" className="contact-field-label">
                    Property Interest
                  </label>
                  <select
                    id="Slect-Property"
                    name="Slect-Property"
                    data-name="Slect Property"
                    required
                    className="contact-input contact-select w-select"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                  >
                    {PROPERTY_INTERESTS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="contact-field">
                  <label htmlFor="Message" className="contact-field-label">
                    Message
                  </label>
                  <textarea
                    id="Message"
                    name="Message"
                    rows={5}
                    maxLength={5000}
                    data-name="Message"
                    placeholder="Message"
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
                      I agree to let Praneeta Developers securely store and use my information
                    </span>
                  </label>
                  {errors.consent && (
                    <p id="Consent-error" className="contact-field-error">
                      {errors.consent}
                    </p>
                  )}
                </div>

                <div className="contact-submit-row">
                  <button
                    type="submit"
                    data-wait="Sending Inquiry..."
                    className="contact-submit-btn"
                    disabled={submitting}
                  >
                    {submitting && <span className="contact-btn-spinner" aria-hidden="true" />}
                    <span>{submitting ? 'Sending Inquiry...' : 'Send Inquiry'}</span>
                  </button>
                </div>
              </form>

              <div
                className="form-success w-form-done"
                role="status"
                style={{ display: status === 'success' ? 'block' : undefined }}
              >
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div
                className="form-error w-form-fail"
                role="alert"
                style={{ display: status === 'error' ? 'block' : undefined }}
              >
                <div className="text-block">
                  Oops! Something went wrong while submitting the form.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
