import { useState, type FormEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CATEGORY_LINKS, FOOTER_LINKS, isRouteActive } from '../types/site';

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
                className={`site-logo-link w-inline-block${isHome ? ' w--current' : ''}`}
              >
                <img
                  loading="lazy"
                  src="/images/pranitha-logo.png"
                  alt="Pranitha Developers"
                  className="site-logo"
                  style={{ width: '280px', maxWidth: '100%', height: 'auto', display: 'block' }}
                />
              </Link>
              <p className="footer-title-two">Stay Updated! Subscribe to Property Alerts</p>
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
                  <div>Thanks! You're subscribed to Pranitha Developers updates.</div>
                </div>
                <div
                  className="form-error w-form-fail"
                  style={{ display: status === 'error' ? 'block' : undefined }}
                >
                  <div>Something went wrong. Please try again.</div>
                </div>
              </div>
              <div className="footer-info-box">
                <p className="footer-info-text">Visit Us</p>
                <p className="footer-info-text two">6-109, Mokila Village, Shankarpally Mandal, Ranga Reddy District, Hyderabad, Telangana - 501203</p>
              </div>
            </div>
            <div className="footer-links-wrap">
              <div className="footer-box-two">
                <p className="footer-title">Pages</p>
                <div className="footer-links-box">
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
              <div className="footer-box-two">
                <p className="footer-title">Categories</p>
                <div>
                  <div className="w-dyn-list">
                    <div role="list" className="footer-links-box w-dyn-items">
                      {CATEGORY_LINKS.map((cat) => (
                        <div key={cat.to} role="listitem" className="w-dyn-item">
                          <Link to={cat.to} className="footer-link">
                            {cat.label}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-box-two">
                <p className="footer-title">Follow us</p>
                <div className="footer-links-box">
                  <a href="#social-facebook" className="social-box-two w-inline-block">
                    <img
                      loading="lazy"
                      src="/images/69e86eda8b940aef2648e435_Mask%20group.svg"
                      alt=""
                      className="social-two-icon"
                    />
                    <p className="social-two-text">Facebook</p>
                  </a>
                  <a href="#social-linkedin" className="social-box-two w-inline-block">
                    <img
                      loading="lazy"
                      src="/images/69e86f71baee2ca59048df17_2.svg"
                      alt=""
                      className="social-two-icon"
                    />
                    <p className="social-two-text">Linkedin</p>
                  </a>
                  <a href="#social-twitter" className="social-box-two w-inline-block">
                    <img
                      loading="lazy"
                      src="/images/69e86f71e49fcc065c88236d_3.svg"
                      alt=""
                      className="social-two-icon"
                    />
                    <p className="social-two-text">Twitter</p>
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
                  <a href="#social-tiktok" className="social-box-two w-inline-block">
                    <img
                      loading="lazy"
                      src="/images/69e86f71f099b0c3b971bf0b_5.svg"
                      alt=""
                      className="social-two-icon"
                    />
                    <p className="social-two-text">Tiktok</p>
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
              © Copyright -{' '}
              <Link
                to="/"
                target="_self"
                aria-current={isHome ? 'page' : undefined}
                className={`copyright-link${isHome ? ' w--current' : ''}`}
              >
                Pranitha Developers
              </Link>{' '}
              · TG-RERA: P02400009246 | P02400006593 | P02400009069
            </p>
            <div className="footer-links-box two">
              <Link to="/licenses" className="footer-link">
                License
              </Link>
              <Link to="/changelog" className="footer-link">
                Changelog
              </Link>
              <Link to="/style-guide" className="footer-link">
                Style Guide
              </Link>
              <Link to="/instructions" className="footer-link">
                Instructions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
