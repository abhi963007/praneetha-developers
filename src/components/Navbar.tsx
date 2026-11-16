import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, isRouteActive } from '../types/site';
import './navbar-menu.css';

export function Navbar() {
  const { pathname } = useLocation();
  const isHome = isRouteActive(pathname, '/');
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(() =>
    typeof window !== 'undefined' ? window.scrollY > 80 : false,
  );

  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Scroll detection for header morph
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll and compensate scrollbar width to prevent layout shift
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;

      document.body.style.overflow = 'hidden';
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
      };
    }
  }, [isOpen]);

  // ESC key and focus trapping inside drawer
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        toggleBtnRef.current?.focus();
        return;
      }

      if (e.key === 'Tab' && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
    toggleBtnRef.current?.focus();
  };

  // Robust capture-phase click handler to prevent Webflow from intercepting button clicks
  useEffect(() => {
    const btn = toggleBtnRef.current;
    if (!btn) return;

    const handleCaptureClick = (e: MouseEvent) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      setIsOpen((prev) => !prev);
    };

    btn.addEventListener('click', handleCaptureClick, { capture: true });
    return () => btn.removeEventListener('click', handleCaptureClick, { capture: true });
  }, []);

  useEffect(() => {
    (window as unknown as { __toggleNavDrawer?: (open?: boolean) => void }).__toggleNavDrawer = (
      open?: boolean,
    ) => {
      setIsOpen((prev) => (open !== undefined ? open : !prev));
    };
    return () => {
      delete (window as unknown as { __toggleNavDrawer?: unknown }).__toggleNavDrawer;
    };
  }, []);

  return (
    <>
      <header className={`main-header${isScrolled ? ' is-scrolled' : ''}${isOpen ? ' is-menu-open' : ''}`}>
        <div className="header-line" />
        <div className="header-wrap">
          <div className="header-main-box">
            <div
              id="w-node-_852defd0-ddd4-4a2b-97f2-b45445b02d3f-45b02d3b"
              className="site-logo-box"
            >
              <Link
                to="/"
                aria-current={isHome ? 'page' : undefined}
                className={`site-logo-link w-inline-block${isHome ? ' w--current' : ''}`}
              >
                <img
                  loading="lazy"
                  src="/images/praneeta-logo.png"
                  alt="Praneeta Developers"
                  className="site-logo header site-logo-full"
                  style={{ filter: 'none', height: 'auto' }}
                />
                <img
                  loading="lazy"
                  src="/images/praneeta-favicon.png"
                  alt="Praneeta Developers"
                  className="site-logo header site-logo-mark"
                  style={{ filter: 'none', height: 'auto' }}
                />
              </Link>
            </div>

            <div className="header-right-morph">
              <nav className="desktop-nav-links" aria-label="Main navigation">
                {NAV_LINKS.map((item) => {
                  const active = isRouteActive(pathname, item.to);
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      aria-current={active ? 'page' : undefined}
                      className={`desktop-nav-link${active ? ' w--current' : ''}`}
                      onClick={() => {
                        if (item.to === '/#gallery' && pathname === '/') {
                          document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div
                id="w-node-_852defd0-ddd4-4a2b-97f2-b45445b02d4d-45b02d3b"
                className="header-btn-box"
              >
                <button
                  ref={toggleBtnRef}
                  type="button"
                  className={`hamburger-wrap${isOpen ? ' is-open' : ''}`}
                  onClick={toggleMenu}
                  aria-expanded={isOpen}
                  aria-controls="main-navigation-drawer"
                  aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                >
                  <span className="burger-btn-wrapper">
                    <span className="burger-line burger-line--1" />
                    <span className="burger-line burger-line--2" />
                    <span className="burger-line burger-line--3" />
                  </span>
                </button>
              </div>
            </div>

            <img
              src="/images/6ac627443e8b494eb0c9b93b_svgviewer-output.svg"
              loading="lazy"
              alt=""
              className="header-icon"
            />
            <img
              src="/images/6ac627a047901d062b32216d_svgviewer-output%20%281%29.svg"
              loading="lazy"
              alt=""
              className="header-icon right"
            />
          </div>
        </div>
      </header>

      {/* Backdrop overlay */}
      <div
        className={`mega-menu-backdrop${isOpen ? ' is-open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Full-height slide-in navigation drawer */}
      <aside
        id="main-navigation-drawer"
        ref={drawerRef}
        className={`mega-menu-drawer${isOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site Navigation"
      >
        <div className="drawer-inner">
          {/* Drawer Top Bar */}
          <div className="drawer-top-bar">
            <span className="drawer-eyebrow">Navigation</span>
            <button
              type="button"
              className="drawer-close-btn"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Navigation Links List */}
          <nav className="drawer-nav" aria-label="Expanded site navigation">
            <ul className="drawer-menu-list">
              {NAV_LINKS.map((item, idx) => {
                const active = isRouteActive(pathname, item.to);
                return (
                  <li key={item.to} className="drawer-menu-item">
                    <div className="drawer-link-mask">
                      <Link
                        to={item.to}
                        aria-current={active ? 'page' : undefined}
                        className={`drawer-nav-link${active ? ' is-active' : ''}`}
                        onClick={closeMenu}
                      >
                        <span className="drawer-link-left">
                          <span className="drawer-nav-index">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <span className="drawer-nav-label">{item.label}</span>
                        </span>
                        {active && <span className="drawer-active-dot" aria-label="Current page" />}
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Bottom Zone: Praneeta Developers Contact Card — Compact & 100% Viewport Fit */}
          <div className="drawer-contact-block">
            <div className="drawer-contact-card">
              <div className="drawer-contact-top-row">
                <div className="drawer-contact-brand">
                  <span className="drawer-contact-eyebrow">Praneeta Developers</span>
                  <a href="tel:+919133637111" className="drawer-contact-phone">
                    +91 91336 37111
                  </a>
                  <a href="mailto:info@praneeta.dev" className="drawer-contact-email">
                    info@praneeta.dev
                  </a>
                </div>

                <div className="drawer-contact-meta">
                  <a
                    href="https://www.google.com/maps?q=17.4264796,78.1912362"
                    target="_blank"
                    rel="noreferrer"
                    className="drawer-maps-link"
                  >
                    <span>Mokila Lounge — Maps</span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 7h12M8 2l5 5-5 5" />
                    </svg>
                  </a>

                  <div className="drawer-social-row">
                    <a
                      href="#social-facebook"
                      className="drawer-social-btn"
                      aria-label="Facebook"
                    >
                      <img
                        src="/images/69e9c2dd6c30ecf541ac4e73_1.svg"
                        loading="lazy"
                        alt=""
                        className="drawer-social-icon"
                      />
                    </a>
                    <a
                      href="#social-linkedin"
                      className="drawer-social-btn"
                      aria-label="LinkedIn"
                    >
                      <img
                        src="/images/69e9c2ddcc1e0dae195ecb03_2.svg"
                        loading="lazy"
                        alt=""
                        className="drawer-social-icon"
                      />
                    </a>
                    <a
                      href="#social-twitter"
                      className="drawer-social-btn"
                      aria-label="Twitter / X"
                    >
                      <img
                        src="/images/69e9c2dd29fa8e3712f37cf5_3.svg"
                        loading="lazy"
                        alt=""
                        className="drawer-social-icon"
                      />
                    </a>
                    <a
                      href="#social-instagram"
                      className="drawer-social-btn"
                      aria-label="Instagram"
                    >
                      <img
                        src="/images/69e9c2dde049fa499ad9b3f2_4.svg"
                        loading="lazy"
                        alt=""
                        className="drawer-social-icon"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <Link
                to="/contact-us"
                className="drawer-cta-btn"
                onClick={closeMenu}
              >
                Schedule a Site Visit
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
