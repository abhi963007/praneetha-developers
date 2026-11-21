import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, PROJECTS_DROPDOWN_GROUPS, isRouteActive } from '../types/site';
import './navbar-menu.css';

export function Navbar() {
  const { pathname } = useLocation();
  const isHome = isRouteActive(pathname, '/');
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isDrawerProjectsOpen, setIsDrawerProjectsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(() =>
    typeof window !== 'undefined' ? window.scrollY > 80 : false,
  );
  const [isPastHero, setIsPastHero] = useState(false);

  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const projectsWrapRef = useRef<HTMLDivElement>(null);
  const closeDropdownTimerRef = useRef<number | null>(null);

  // Track scroll for subtle shadow and switch header cream -> white once past the hero section
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 80);
      const heroEl = document.querySelector('.scroll-hero, .page-hero');
      setIsPastHero(heroEl ? heroEl.getBoundingClientRect().bottom <= 84 : window.scrollY > 120);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [pathname]);

  // Close drawer and dropdowns on route change
  useEffect(() => {
    setIsOpen(false);
    setIsProjectsOpen(false);
    setIsDrawerProjectsOpen(false);
  }, [pathname]);

  // Close desktop Projects dropdown on outside click or Escape key
  useEffect(() => {
    if (!isProjectsOpen) return;

    const handlePointerDown = (e: PointerEvent) => {
      if (projectsWrapRef.current && !projectsWrapRef.current.contains(e.target as Node)) {
        setIsProjectsOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsProjectsOpen(false);
      }
    };

    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isProjectsOpen]);

  useEffect(() => {
    return () => {
      if (closeDropdownTimerRef.current !== null) {
        window.clearTimeout(closeDropdownTimerRef.current);
      }
    };
  }, []);

  // Lock body scroll and compensate scrollbar width when mobile drawer is open
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

  // ESC key and focus trapping inside mobile drawer
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

  const openProjectsDropdown = () => {
    if (closeDropdownTimerRef.current !== null) {
      window.clearTimeout(closeDropdownTimerRef.current);
      closeDropdownTimerRef.current = null;
    }
    setIsProjectsOpen(true);
  };

  const scheduleCloseProjectsDropdown = () => {
    if (closeDropdownTimerRef.current !== null) {
      window.clearTimeout(closeDropdownTimerRef.current);
    }
    closeDropdownTimerRef.current = window.setTimeout(() => {
      setIsProjectsOpen(false);
      closeDropdownTimerRef.current = null;
    }, 130);
  };

  // Capture-phase click handler prevents Webflow runtime from intercepting hamburger clicks
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
      <header
        className={`main-header${isScrolled ? ' is-scrolled' : ''}${isPastHero ? ' is-past-hero' : ''}${isOpen ? ' is-menu-open' : ''}`}
      >
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
                  loading="eager"
                  src="/images/praneeta-logo.png"
                  alt="Praneeta Developers"
                  className="site-logo-img"
                />
              </Link>
            </div>

            <div className="header-right-morph">
              <nav className="desktop-nav-links" aria-label="Main navigation">
                {NAV_LINKS.map((item) => {
                  const active = isRouteActive(pathname, item.to);
                  if (item.hasDropdown) {
                    return (
                      <div
                        key={item.to}
                        ref={projectsWrapRef}
                        className={`nav-dropdown-wrap${isProjectsOpen ? ' is-open' : ''}`}
                        onMouseEnter={openProjectsDropdown}
                        onMouseLeave={scheduleCloseProjectsDropdown}
                      >
                        <Link
                          to={item.to}
                          aria-current={active ? 'page' : undefined}
                          className={`desktop-nav-link nav-dropdown-trigger${active ? ' w--current' : ''}${isProjectsOpen ? ' is-open' : ''}`}
                          aria-expanded={isProjectsOpen}
                          aria-haspopup="true"
                          aria-controls="desktop-projects-dropdown"
                          onClick={() => setIsProjectsOpen(false)}
                        >
                          <span>{item.label}</span>
                          <svg
                            className="nav-dropdown-chevron"
                            width="11"
                            height="11"
                            viewBox="0 0 12 12"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M2.5 4.5L6 8L9.5 4.5"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>

                        <div
                          id="desktop-projects-dropdown"
                          className={`nav-dropdown-panel${isProjectsOpen ? ' is-open' : ''}`}
                          role="region"
                          aria-label="Project categories"
                        >
                          <div className="nav-dropdown-sections">
                            {PROJECTS_DROPDOWN_GROUPS.map((group) => (
                              <div key={group.category} className="nav-dropdown-group">
                                <span className="nav-dropdown-cat">{group.category}</span>
                                <ul className="nav-dropdown-list">
                                  {group.items.map((sub) => (
                                    <li key={sub.to} className="nav-dropdown-item">
                                      <Link
                                        to={sub.to}
                                        className={`nav-dropdown-sublink${pathname === sub.to ? ' is-active' : ''}`}
                                        onClick={() => setIsProjectsOpen(false)}
                                      >
                                        <span className="nav-dropdown-sublabel">{sub.label}</span>
                                        {(sub.badge || !sub.hideArrow) && (
                                          <span className="nav-dropdown-right">
                                            {sub.badge && (
                                              <span className="nav-dropdown-badge">{sub.badge}</span>
                                            )}
                                            {!sub.hideArrow && (
                                              <svg
                                                className="nav-dropdown-item-arrow"
                                                width="12"
                                                height="12"
                                                viewBox="0 0 12 12"
                                                fill="none"
                                                aria-hidden="true"
                                              >
                                                <path
                                                  d="M4.5 2.5L8 6L4.5 9.5"
                                                  stroke="currentColor"
                                                  strokeWidth="1.5"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                />
                                              </svg>
                                            )}
                                          </span>
                                        )}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                          <div className="nav-dropdown-footer">
                            <span className="nav-dropdown-hint">Kardanur · Kollur · Mokila</span>
                            <Link
                              to="/properties"
                              className="nav-dropdown-all"
                              onClick={() => setIsProjectsOpen(false)}
                            >
                              <span>All Projects</span>
                              <span aria-hidden="true">→</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      aria-current={active ? 'page' : undefined}
                      className={`desktop-nav-link${active ? ' w--current' : ''}`}
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

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="header-icon"
            >
              <path d="M24 24C24 10.7452 13.2548 0 0 0H24V24Z" fill="currentColor" />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="header-icon right"
            >
              <path d="M0 24C0 10.7452 10.7452 0 24 0H0V24Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </header>

      {/* Backdrop overlay */}
      <div
        className={`mega-menu-backdrop${isOpen ? ' is-open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Slide-in navigation drawer for tablet & mobile viewports */}
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
                if (item.hasDropdown) {
                  return (
                    <li key={item.to} className="drawer-menu-item">
                      <div className="drawer-link-mask">
                        <div className={`drawer-nav-link drawer-nav-split${active ? ' is-active' : ''}`}>
                          <Link
                            to={item.to}
                            aria-current={active ? 'page' : undefined}
                            className="drawer-nav-split-link"
                            onClick={closeMenu}
                          >
                            <span className="drawer-link-left">
                              <span className="drawer-nav-index">
                                {String(idx + 1).padStart(2, '0')}
                              </span>
                              <span className="drawer-nav-label">{item.label}</span>
                            </span>
                          </Link>
                          <button
                            type="button"
                            aria-expanded={isDrawerProjectsOpen}
                            aria-label="Toggle project categories"
                            className="drawer-projects-toggle"
                            onClick={() => setIsDrawerProjectsOpen((prev) => !prev)}
                          >
                            {active && <span className="drawer-active-dot" aria-label="Current page" />}
                            <svg
                              className={`drawer-projects-chevron${isDrawerProjectsOpen ? ' is-open' : ''}`}
                              width="18"
                              height="18"
                              viewBox="0 0 16 16"
                              fill="none"
                              aria-hidden="true"
                            >
                              <path
                                d="M4 6L8 10L12 6"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {isDrawerProjectsOpen && (
                        <div className="drawer-projects-sub">
                          {PROJECTS_DROPDOWN_GROUPS.map((group) => (
                            <div key={group.category} className="drawer-projects-group">
                              <span className="drawer-projects-cat">{group.category}</span>
                              <div className="drawer-projects-pills">
                                {group.items.map((sub) => (
                                  <Link
                                    key={sub.to}
                                    to={sub.to}
                                    className={`drawer-projects-pill${pathname === sub.to ? ' is-active' : ''}`}
                                    onClick={closeMenu}
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                          <Link
                            to="/properties"
                            className="drawer-projects-all"
                            onClick={closeMenu}
                          >
                            View All Projects →
                          </Link>
                        </div>
                      )}
                    </li>
                  );
                }

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

          {/* Bottom Zone: Praneeta Developers Contact Card */}
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
                      href="#social-youtube"
                      className="drawer-social-btn"
                      aria-label="YouTube"
                    >
                      <svg
                        className="drawer-social-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#191d19"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect x="2" y="5" width="20" height="14" rx="4" />
                        <polygon points="10 9 16 12 10 15 10 9" fill="#191d19" stroke="none" />
                      </svg>
                    </a>
                    <a
                      href="#social-twitter"
                      className="drawer-social-btn"
                      aria-label="X (Twitter)"
                    >
                      <img
                        src="/images/69e9c2dd29fa8e3712f37cf5_3.svg"
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
