import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { ScrollHero } from '../../components/ScrollHero';
import './home-portfolio.css';

const PRIMARY_CATEGORIES = [
  {
    to: '/category/villas-ongoing',
    title: 'Villas',
    subtitle: 'Amity · The Patio · Santorini · Singapur Town',
    tag: 'Ongoing · Completed · Upcoming',
    image: '/images/portfolio-villas-ongoing.jpg',
    links: [
      { label: 'Ongoing', to: '/category/villas-ongoing' },
      { label: 'Completed', to: '/category/villas-completed' },
      { label: 'Upcoming', to: '/category/villas-upcoming' },
    ],
  },
  {
    to: '/category/apartments',
    title: 'Apartments',
    subtitle: 'Praneeta Meridian',
    tag: 'Ongoing',
    image: '/images/portfolio-apartments.jpg',
    links: [{ label: 'Ongoing', to: '/category/apartments' }],
  },
  {
    to: '/category/plots-coming-soon',
    title: 'Residential Plots',
    subtitle: 'Plotted communities',
    tag: 'Coming Soon',
    image: '/images/portfolio-plots.jpg',
    links: [{ label: 'Coming Soon', to: '/category/plots-coming-soon' }],
  },
];

interface HomeHeroAndCategoriesSectionProps {
  afterHero?: ReactNode;
}

export function HomeHeroAndCategoriesSection({ afterHero }: HomeHeroAndCategoriesSectionProps = {}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!modalOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusId = window.setTimeout(() => nameInputRef.current?.focus(), 40);
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.clearTimeout(focusId);
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [modalOpen]);

  const openModal = () => {
    setStatus('idle');
    setErrorMsg('');
    setModalOpen(true);
  };

  const handleLeadSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedName = fullName.trim();
    const trimmedPhone = phone.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName || !trimmedPhone || !/^\S+@\S+\.\S+$/.test(trimmedEmail) || !consent) {
      setStatus('error');
      setErrorMsg('Please enter your name, phone number, a valid email, and accept consent.');
      return;
    }

    const parts = trimmedName.split(/\s+/);
    const firstName = parts[0];
    const lastName = parts.slice(1).join(' ') || '-';

    setSubmitting(true);
    setStatus('idle');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email: trimmedEmail,
          phone: trimmedPhone,
          interest: 'Upcoming Mokila Villa Project',
          message:
            message.trim() || 'Interested in the upcoming gated villa community in Mokila.',
          consent: true,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || 'Could not submit inquiry. Please try again.');
      }
      setStatus('success');
      setFullName('');
      setPhone('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.',
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="section-wrap">
      <ScrollHero>
        <div className="hero-end-wrap">
          <div className="hero-luxury-overlay" aria-label="Luxury Living Coming Soon">
            <div className="hero-luxury-eyebrow">
              <span className="hero-luxury-rule hero-luxury-rule--left" aria-hidden="true" />
              <span>LUXURY LIVING</span>
              <span className="hero-luxury-rule hero-luxury-rule--right" aria-hidden="true" />
            </div>
            <p className="hero-luxury-headline">COMING SOON</p>
            <div className="hero-luxury-divider" aria-hidden="true">
              <span className="hero-luxury-div-line hero-luxury-div-line--left" />
              <svg className="hero-luxury-diamond" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect
                  x="2.9"
                  y="2.9"
                  width="8.2"
                  height="8.2"
                  transform="rotate(45 7 7)"
                  stroke="#8d682a"
                  strokeWidth="1.2"
                />
                <rect
                  x="5.1"
                  y="5.1"
                  width="3.8"
                  height="3.8"
                  transform="rotate(45 7 7)"
                  fill="#a67c33"
                />
              </svg>
              <span className="hero-luxury-div-line hero-luxury-div-line--right" />
            </div>
            <p className="hero-luxury-subtitle">
              A premium lifestyle, crafted for
              <br />
              the extraordinary.
            </p>
          </div>
          <div className="hero-end-card">
            <div className="hero-end-info">
              <div className="hero-end-eyebrow">
                <span className="hero-end-dot" aria-hidden="true" />
                <span>Launching Soon</span>
              </div>
              <h1 className="hero-end-title">Mokila</h1>
              <p className="hero-end-desc">
                A spectacular gated villa community launching soon in Mokila.
              </p>
            </div>
            <div className="hero-end-actions">
              <button type="button" className="hero-end-btn" onClick={openModal}>
                <span>Get in Touch</span>
                <span className="hero-end-btn-circle" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </ScrollHero>
      {modalOpen &&
        createPortal(
          <div
            className="hero-lead-backdrop"
            role="presentation"
            onClick={(e) => {
              if (e.target === e.currentTarget) setModalOpen(false);
            }}
          >
            <div
              className="hero-lead-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="hero-lead-modal-title"
            >
              <button
                type="button"
                className="hero-lead-close"
                aria-label="Close modal"
                onClick={() => setModalOpen(false)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <div className="hero-lead-header">
                <div className="hero-end-eyebrow">
                  <span className="hero-end-dot" aria-hidden="true" />
                  <span>Launching Soon · Mokila</span>
                </div>
                <h2 id="hero-lead-modal-title" className="hero-lead-title">
                  Get in Touch
                </h2>
                <p className="hero-lead-subtitle">
                  Register your interest for our upcoming gated villa community in Mokila.
                </p>
              </div>

              {status === 'success' ? (
                <div className="hero-lead-success">
                  <p className="hero-lead-success-title">Thank you for your interest!</p>
                  <p className="hero-lead-success-desc">
                    Our Mokila advisory team has received your details and will reach out shortly.
                  </p>
                  <button
                    type="button"
                    className="hero-end-btn"
                    onClick={() => setModalOpen(false)}
                  >
                    <span>Done</span>
                  </button>
                </div>
              ) : (
                <form className="hero-lead-form" onSubmit={handleLeadSubmit} noValidate>
                  <div className="hero-lead-field">
                    <label htmlFor="hero-lead-name">Full Name *</label>
                    <input
                      ref={nameInputRef}
                      id="hero-lead-name"
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div className="hero-lead-row">
                    <div className="hero-lead-field">
                      <label htmlFor="hero-lead-phone">Phone Number *</label>
                      <input
                        id="hero-lead-phone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="hero-lead-field">
                      <label htmlFor="hero-lead-email">Email Address *</label>
                      <input
                        id="hero-lead-email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="hero-lead-field">
                    <label htmlFor="hero-lead-note">Message (Optional)</label>
                    <textarea
                      id="hero-lead-note"
                      rows={3}
                      placeholder="Preferred villa configuration or callback time..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <label className="hero-lead-consent">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                    />
                    <span>I authorize Praneeta Developers to contact me regarding this project.</span>
                  </label>
                  {status === 'error' && errorMsg && (
                    <p className="hero-lead-error" role="alert">
                      {errorMsg}
                    </p>
                  )}
                  <button type="submit" className="hero-end-btn hero-lead-submit" disabled={submitting}>
                    <span>{submitting ? 'Submitting...' : 'Submit Inquiry'}</span>
                    <span className="hero-end-btn-circle" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>,
          document.body,
        )}
      {afterHero}
      <section className="section cat">
        <div className="hero-icon-box">
          <img
            src="/images/6ac4da41e6cfc9c997f6729e_svgviewer-output.svg"
            loading="lazy"
            alt=""
            className="hero-icon"
          />
          <img
            src="/images/6ac4da41e6cfc9c997f6729e_svgviewer-output.svg"
            loading="lazy"
            alt=""
            className="hero-icon two"
          />
        </div>
        <div className="w-layout-blockcontainer container w-container">
          <div className="section-title-box center">
            <div className="subtitle-box">
              <div className="subtitle-icon">
                <img
                  src="/images/6ac4a1873c3838069f5e8736_icon.svg"
                  loading="lazy"
                  alt=""
                  className="subtitle-icon-img"
                />
              </div>
              <p className="section-subtitle">Our Portfolio</p>
            </div>
            <h2 className="section-title">Communities Crafted for Hyderabad</h2>
          </div>
          <div className="w-dyn-list">
            <div role="list" className="portfolio-cat-grid w-dyn-items">
              {PRIMARY_CATEGORIES.map((cat) => (
                <div key={cat.title} role="listitem" className="portfolio-card-item w-dyn-item">
                  <div className="portfolio-cat-card">
                    <Link to={cat.to} className="portfolio-cat-img-box">
                      <span className="portfolio-cat-badge">{cat.tag}</span>
                      <img
                        src={cat.image}
                        loading="lazy"
                        alt={cat.title}
                        className="portfolio-cat-img"
                      />
                      <div className="portfolio-cat-img-overlay" />
                    </Link>
                    <div className="portfolio-cat-content">
                      <div className="portfolio-cat-info">
                        <span className="portfolio-cat-subtitle">{cat.subtitle}</span>
                        <h3 className="portfolio-cat-title">{cat.title}</h3>
                        <div className="portfolio-cat-links">
                          {cat.links.map((l) => (
                            <Link key={l.to} to={l.to} className="portfolio-cat-link">
                              {l.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <Link to={cat.to} className="portfolio-cat-action" aria-label={`Explore ${cat.title}`}>
                        <svg className="portfolio-cat-arrow-svg" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.5 11.5L11.5 2.5M11.5 2.5H4.5M11.5 2.5V9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
