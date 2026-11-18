import { useState, type FormEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FOOTER_CATEGORY_LINKS, FOOTER_LINKS, isRouteActive } from '../types/site';
import './footer-custom.css';

interface FooterProps {
  variant?: 'base' | 'sticky';
  wfPageId: string;
}

export function Footer({ variant = 'base', wfPageId }: FooterProps) {
  const { pathname } = useLocation();
  const isHome = isRouteActive(pathname, '/');

  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const footerClass =
    variant === 'sticky'
      ? 'main-footer w-variant-34aafd92-ce08-b1bd-0c21-5cb229b35455'
      : 'main-footer';

  const handleNewsletterSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!email.trim()) return;
    setSubmitting(true);
    setStatus('idle');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer data-wf--main-footer--variant={variant} className={footerClass}>
      <div className="footer-widgets">
        <div className="w-layout-blockcontainer container w-container">
          <div className="w-layout-grid footer-grid">
            <div className="footer-box">
              <Link
                to="/"
                aria-current={isHome ? 'page' : undefined}
                className={`footer-brand-link w-inline-block${isHome ? ' w--current' : ''}`}
              >
                <span className="footer-brand-badge">
                  <img
                    loading="lazy"
                    src="/images/praneeta-favicon.png"
                    alt=""
                    aria-hidden="true"
                    className="footer-brand-emblem"
                  />
                </span>
                <span className="footer-brand-lockup">
                  <span className="footer-brand-name">PRANEETA</span>
                  <span className="footer-brand-sub">DEVELOPERS</span>
                </span>
              </Link>
              <p className="footer-tagline">
                Gated Villa &amp; Apartment Communities across West Hyderabad.
              </p>
              <p className="footer-title-two">Property Alerts</p>
              <div className="newsletter-form-block w-form">
                <form
                  id="wf-form-Newsletters-Form"
                  name="wf-form-Newsletters-Form"
                  data-name="Newsletters Form"
                  method="get"
                  className="newsletter-form"
                  data-wf-page-id={wfPageId}
                  data-wf-element-id="b926c413-e91d-1e1e-c954-c275f3f5f58a"
                  onSubmit={handleNewsletterSubmit}
                  style={{ display: status === 'success' ? 'none' : undefined }}
                >
                  <input
                    className="newsletter-input w-input"
                    maxLength={256}
                    name="Email"
                    data-name="Email"
                    aria-label="Email"
                    placeholder="Email Address"
                    type="email"
                    id="Email"
                    required
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                  />
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="primary-button newsletter w-button"
                    value={submitting ? 'Please wait...' : 'Subscribe'}
                    disabled={submitting}
                  />
                </form>
                <div
                  className="form-success w-form-done"
                  style={{ display: status === 'success' ? 'block' : undefined }}
                >
                  <div>Thanks! You&apos;re subscribed to Praneeta Developers updates.</div>
                </div>
                <div
                  className="form-error w-form-fail"
                  style={{ display: status === 'error' ? 'block' : undefined }}
                >
                  <div>Something went wrong. Please try again.</div>
                </div>
              </div>
            </div>
            <div className="footer-links-wrap footer-links-cols">
              <div className="footer-col-group">
                <p className="footer-title footer-col-label">Pages</p>
                <div className="footer-col-items">
                  {FOOTER_LINKS.map((item) => {
                    const active = isRouteActive(pathname, item.to);
                    return (
                      <Link
                        key={item.to}
                        to={item.to}
                        aria-current={active ? 'page' : undefined}
                        className={`footer-link${active ? ' w--current' : ''}`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="footer-col-group">
                <p className="footer-title footer-col-label">Categories</p>
                <div className="footer-col-items">
                  {FOOTER_CATEGORY_LINKS.map((cat) => {
                    const active = pathname.replace(/\/+$/, '') === cat.to;
                    return (
                      <Link
                        key={cat.to}
                        to={cat.to}
                        aria-current={active ? 'page' : undefined}
                        className={`footer-link${active ? ' w--current' : ''}`}
                      >
                        {cat.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="footer-col-group">
                <p className="footer-title footer-col-label">Follow us</p>
                <div className="footer-col-items footer-col-items--social">
                  <a href="#social-facebook" className="social-box-two w-inline-block">
                    <img
                      loading="lazy"
                      src="/images/69e86eda8b940aef2648e435_Mask%20group.svg"
                      alt=""
                      className="social-two-icon"
                    />
                    <p className="social-two-text">Facebook</p>
                  </a>
                  <a href="#social-instagram" className="social-box-two w-inline-block">
                    <img
                      loading="lazy"
                      src="/images/69e86f7166b5cd5188f17bb0_4.svg"
                      alt=""
                      className="social-two-icon"
                    />
                    <p className="social-two-text">Instagram</p>
                  </a>
                  <a href="#social-linkedin" className="social-box-two w-inline-block">
                    <img
                      loading="lazy"
                      src="/images/69e86f71baee2ca59048df17_2.svg"
                      alt=""
                      className="social-two-icon"
                    />
                    <p className="social-two-text">LinkedIn</p>
                  </a>
                  <a href="#social-youtube" className="social-box-two w-inline-block">
                    <svg
                      className="social-two-icon social-two-icon--svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="2" y="5" width="20" height="14" rx="4" />
                      <polygon points="10 9 16 12 10 15 10 9" fill="currentColor" stroke="none" />
                    </svg>
                    <p className="social-two-text">YouTube</p>
                  </a>
                  <a href="#social-twitter" className="social-box-two w-inline-block">
                    <img
                      loading="lazy"
                      src="/images/69e86f71e49fcc065c88236d_3.svg"
                      alt=""
                      className="social-two-icon"
                    />
                    <p className="social-two-text">X (Twitter)</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="w-layout-blockcontainer container w-container">
          <div className="copyright-box">
            <p className="copyright-text">
              © 2026{' '}
              <Link
                to="/"
                target="_self"
                aria-current={isHome ? 'page' : undefined}
                className={`copyright-link${isHome ? ' w--current' : ''}`}
              >
                Praneeta Developers
              </Link>
              . All Rights Reserved.
            </p>
            <nav className="footer-legal-links" aria-label="Legal">
              <Link to="/disclaimer" className="footer-legal-link">
                Disclaimer
              </Link>
              <span className="footer-legal-sep" aria-hidden="true">
                ·
              </span>
              <Link to="/privacy-policy" className="footer-legal-link">
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
