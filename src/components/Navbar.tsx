import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, isRouteActive } from '../types/site';
import './navbar-menu.css';

export function Navbar() {
  const { pathname } = useLocation();
  const isHome = isRouteActive(pathname, '/');
  const [isScrolled, setIsScrolled] = useState(() =>
    typeof window !== 'undefined' ? window.scrollY > 80 : false,
  );

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`main-header${isScrolled ? ' is-scrolled' : ''}`}>
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
                src="/images/pranitha-logo.png"
                alt="Pranitha Developers"
                className="site-logo header site-logo-full"
                style={{ filter: 'none', height: 'auto' }}
              />
              <img
                loading="lazy"
                src="/images/pranitha-favicon.png"
                alt="Pranitha Developers"
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
              <div data-w-id="852defd0-ddd4-4a2b-97f2-b45445b02d51" className="hamburger-wrap">
                <div data-w-id="5c3f749e-b134-36a6-4507-875f232a09be" className="burger-btn-wrapper">
                  <div data-w-id="5c3f749e-b134-36a6-4507-875f232a09bf" className="burger-line" />
                  <div data-w-id="5c3f749e-b134-36a6-4507-875f232a09c0" className="burger-line" />
                  <div data-w-id="5c3f749e-b134-36a6-4507-875f232a09c1" className="burger-line" />
                </div>
              </div>
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
      <div className="mega-menu-wrapper">
        <div className="mega-menu-content">
          <div className="menu-wrapper">
            <div className="nav-container">
              <div className="menu-list-wrapper">
                <ul role="list" className="nav-menu-list">
                  {NAV_LINKS.map((item) => {
                    const active = isRouteActive(pathname, item.to);
                    return (
                      <li key={item.to} className={`nav-menu-list-item ${item.itemClass}`}>
                        <Link
                          to={item.to}
                          aria-current={active ? 'page' : undefined}
                          className={`nav-menu-list-text-link${active ? ' w--current' : ''}`}
                          onClick={() => {
                            const menu = document.querySelector<HTMLElement>('.mega-menu-wrapper');
                            const toggle = document.querySelector<HTMLElement>('.hamburger-wrap');
                            if (menu && toggle && getComputedStyle(menu).display !== 'none') {
                              toggle.click();
                            }
                          }}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="navbar-details-wrapper">
            <div className="nav-container">
              <div className="navbar-details-content">
                <div className="navbar-details-gmail-number">
                  <a
                    href="mailto:info@praneeta.dev"
                    className="navbar-details-gmail-text"
                  >
                    info@praneeta.dev
                  </a>
                  <a href="tel:+919133637111" className="navbar-details-number">
                    +91 91336 37111
                  </a>
                </div>
                <p className="menu-text">
                  Mokila Experience Lounge —{' '}
                  <a
                    href="https://www.google.com/maps?q=17.4264796,78.1912362"
                    target="_blank"
                    rel="noreferrer"
                    className="menu-text-link"
                  >
                    Hyderabad
                  </a>
                </p>
                <div className="social-box">
                  <a href="#social-facebook" className="social-link w-inline-block">
                    <img
                      src="/images/69e9c2dd6c30ecf541ac4e73_1.svg"
                      loading="lazy"
                      alt=""
                      className="social-icon"
                    />
                  </a>
                  <a href="#social-linkedin" className="social-link w-inline-block">
                    <img
                      src="/images/69e9c2ddcc1e0dae195ecb03_2.svg"
                      loading="lazy"
                      alt=""
                      className="social-icon"
                    />
                  </a>
                  <a href="#social-twitter" className="social-link w-inline-block">
                    <img
                      src="/images/69e9c2dd29fa8e3712f37cf5_3.svg"
                      loading="lazy"
                      alt=""
                      className="social-icon"
                    />
                  </a>
                  <a href="#social-instagram" className="social-link w-inline-block">
                    <img
                      src="/images/69e9c2dde049fa499ad9b3f2_4.svg"
                      loading="lazy"
                      alt=""
                      className="social-icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
