import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, isRouteActive } from '../types/site';

export function Navbar() {
  const { pathname } = useLocation();
  const isHome = isRouteActive(pathname, '/');

  return (
    <header className="main-header">
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
                src="/images/6ad5ed0fe45891f848d5e8ad_Group%20532.svg"
                alt=""
                className="site-logo header"
              />
            </Link>
          </div>
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
                    href="mailto:hello@veymont.com?subject=hello%40veymont.com"
                    className="navbar-details-gmail-text"
                  >
                    hello@veymont.com
                  </a>
                  <a href="tel:(808)555-01113891" className="navbar-details-number">
                    (808) 555-0111 3891
                  </a>
                </div>
                <p className="menu-text">
                  More templates from{' '}
                  <a
                    href="https://webflow.com/templates/designers/skyeflow"
                    target="_blank"
                    rel="noreferrer"
                    className="menu-text-link"
                  >
                    “Skyeflow”
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
