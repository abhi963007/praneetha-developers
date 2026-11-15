import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry: (defaultProject?: string) => void;
}

export function Navbar({ onOpenEnquiry }: NavbarProps) {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<'villas' | 'apartments' | 'plots' | null>('villas');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setProjectsOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProjectsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const navLinkClass = (path: string) => {
    const active = location.pathname === path;
    return `text-[12px] uppercase tracking-[0.16em] font-medium transition-colors whitespace-nowrap ${
      active
        ? 'text-brand-green font-semibold'
        : 'text-brand-ink hover:text-brand-green'
    }`;
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-brand-dark/15 shadow-sm'
          : 'bg-white border-b border-brand-dark/12'
      }`}
    >
      {/* 3-Column True Optical Center Layout on Desktop (1fr | auto | 1fr) */}
      <div className="edge-container h-20 flex items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr] gap-4">
        {/* Left: Official Brand Lockup */}
        <div className="flex items-center justify-start">
          <Link to="/" className="flex items-center shrink-0" aria-label="Pranitha Developers Home">
            <img
              src="/logo.png"
              alt="Pranitha Developers"
              className="h-11 sm:h-12 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Center: Perfectly Centered Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center justify-center gap-7 xl:gap-9 justify-self-center"
          aria-label="Primary Navigation"
        >
          <Link to="/" className={navLinkClass('/')}>
            Home
          </Link>
          <Link to="/about" className={navLinkClass('/about')}>
            About Us
          </Link>

          {/* Multi-level Projects Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setProjectsOpen(true)}
            onMouseLeave={() => setProjectsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setProjectsOpen((prev) => !prev)}
              aria-expanded={projectsOpen}
              aria-haspopup="true"
              className={`flex items-center gap-1.5 text-[12px] uppercase tracking-[0.16em] font-medium py-2 transition-colors ${
                location.pathname.startsWith('/projects') || location.pathname.startsWith('/project/')
                  ? 'text-brand-green font-semibold'
                  : 'text-brand-ink hover:text-brand-green'
              }`}
            >
              <span>Projects</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  projectsOpen ? 'rotate-180 text-brand-green' : ''
                }`}
              />
            </button>

            {projectsOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-1 w-[460px] z-50">
                <div className="bg-white rounded-sm shadow-xl border border-brand-dark/15 overflow-hidden grid grid-cols-12">
                  {/* Level 1 Verticals */}
                  <div className="col-span-6 bg-brand-cream/80 p-3 border-r border-brand-dark/12">
                    <p className="px-2.5 pt-1 pb-2 text-[10px] uppercase tracking-[0.2em] text-brand-slate font-semibold">
                      Project Verticals
                    </p>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveSubmenu('villas')}
                      onClick={() => setActiveSubmenu('villas')}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-sm text-xs uppercase tracking-[0.12em] font-semibold transition-colors ${
                        activeSubmenu === 'villas'
                          ? 'bg-brand-dark text-white'
                          : 'text-brand-ink hover:bg-white'
                      }`}
                    >
                      <span>Villas</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveSubmenu('apartments')}
                      onClick={() => setActiveSubmenu('apartments')}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-sm text-xs uppercase tracking-[0.12em] font-semibold mt-1 transition-colors ${
                        activeSubmenu === 'apartments'
                          ? 'bg-brand-dark text-white'
                          : 'text-brand-ink hover:bg-white'
                      }`}
                    >
                      <span>Apartments</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveSubmenu('plots')}
                      onClick={() => setActiveSubmenu('plots')}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-sm text-xs uppercase tracking-[0.12em] font-semibold mt-1 transition-colors ${
                        activeSubmenu === 'plots'
                          ? 'bg-brand-dark text-white'
                          : 'text-brand-ink hover:bg-white'
                      }`}
                    >
                      <span>Residential Plots</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <Link
                      to="/projects"
                      className="block mt-3 px-2.5 py-2 text-[11px] uppercase tracking-[0.14em] font-semibold text-brand-green hover:underline border-t border-brand-dark/10"
                    >
                      View All Portfolio →
                    </Link>
                  </div>

                  {/* Level 2 Status Links */}
                  <div className="col-span-6 p-3.5 flex flex-col justify-between bg-white">
                    {activeSubmenu === 'villas' && (
                      <div>
                        <p className="px-2 pb-2 text-[10px] uppercase tracking-[0.2em] text-brand-gold font-semibold">
                          Luxury Villas
                        </p>
                        <Link
                          to="/projects/villas/ongoing"
                          className="block px-2.5 py-2.5 rounded-sm hover:bg-brand-cream transition-colors"
                        >
                          <div className="text-sm font-semibold text-brand-ink">Ongoing Projects</div>
                          <div className="text-xs text-brand-slate">₹1.50 Cr – ₹2.00 Cr Flagship</div>
                        </Link>
                        <Link
                          to="/projects/villas/completed"
                          className="block px-2.5 py-2.5 rounded-sm hover:bg-brand-cream transition-colors mt-1"
                        >
                          <div className="text-sm font-semibold text-brand-ink">Completed Projects</div>
                          <div className="text-xs text-brand-slate">Delivered Mokila Communities</div>
                        </Link>
                      </div>
                    )}

                    {activeSubmenu === 'apartments' && (
                      <div>
                        <p className="px-2 pb-2 text-[10px] uppercase tracking-[0.2em] text-brand-gold font-semibold">
                          High-Rise Apartments
                        </p>
                        <Link
                          to="/projects/apartments/ongoing"
                          className="block px-2.5 py-2.5 rounded-sm hover:bg-brand-cream transition-colors"
                        >
                          <div className="text-sm font-semibold text-brand-ink">Ongoing</div>
                          <div className="text-xs text-brand-slate">Pranitha Meridian Heights</div>
                        </Link>
                      </div>
                    )}

                    {activeSubmenu === 'plots' && (
                      <div>
                        <p className="px-2 pb-2 text-[10px] uppercase tracking-[0.2em] text-brand-gold font-semibold">
                          Plotted Developments
                        </p>
                        <Link
                          to="/projects/plots/coming-soon"
                          className="block px-2.5 py-2.5 rounded-sm hover:bg-brand-cream transition-colors"
                        >
                          <div className="text-sm font-semibold text-brand-ink">Coming Soon</div>
                          <div className="text-xs text-brand-slate">Shankarpally Pre-Launch Plots</div>
                        </Link>
                      </div>
                    )}

                    <div className="mt-3 pt-2.5 border-t border-brand-dark/10 px-2">
                      <span className="inline-block text-[11px] font-medium text-brand-green">
                        Flagship Value: ₹1.50 Cr – ₹2.00 Cr
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link to="/gallery" className={navLinkClass('/gallery')}>
            Gallery
          </Link>
          <Link to="/partner-with-us" className={navLinkClass('/partner-with-us')}>
            Partner With Us
          </Link>
          <Link to="/blogs" className={navLinkClass('/blogs')}>
            Blogs
          </Link>
          <Link to="/contact" className={navLinkClass('/contact')}>
            Contact Us
          </Link>
        </nav>

        {/* Right Edge: Single Schedule a Visit Button on Desktop + Mobile Toggle */}
        <div className="flex items-center justify-end gap-3 justify-self-end">
          <button
            type="button"
            onClick={() => onOpenEnquiry('Pranitha Sovereign Villas')}
            className="hidden md:inline-flex items-center justify-center bg-brand-dark hover:bg-brand-green text-white text-[11px] uppercase tracking-[0.18em] font-semibold px-6 py-3 rounded-sm transition-colors"
          >
            Schedule a Visit
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-sm border border-brand-dark/15 text-brand-dark hover:bg-brand-cream"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-brand-dark/12 max-h-[85vh] overflow-y-auto px-5 py-6 space-y-2 shadow-xl">
          <Link to="/" className="block py-2.5 text-sm uppercase tracking-[0.14em] font-medium text-brand-ink">
            Home
          </Link>
          <Link to="/about" className="block py-2.5 text-sm uppercase tracking-[0.14em] font-medium text-brand-ink">
            About Us
          </Link>

          <div className="border-y border-brand-dark/10 py-2">
            <button
              type="button"
              onClick={() => setMobileProjectsOpen((o) => !o)}
              className="w-full flex items-center justify-between py-2 text-sm uppercase tracking-[0.14em] font-semibold text-brand-green"
            >
              <span>Projects</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${mobileProjectsOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileProjectsOpen && (
              <div className="pl-3 space-y-3 pb-2 mt-1">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-brand-gold font-semibold mb-1">
                    Villas
                  </p>
                  <div className="flex flex-col gap-1 pl-2 border-l border-brand-green/30">
                    <Link to="/projects/villas/ongoing" className="py-1.5 text-sm text-brand-ink">
                      Ongoing Projects (₹1.50–2.00 Cr)
                    </Link>
                    <Link to="/projects/villas/completed" className="py-1.5 text-sm text-brand-ink">
                      Completed Projects
                    </Link>
                  </div>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-brand-gold font-semibold mb-1">
                    Apartments
                  </p>
                  <div className="flex flex-col gap-1 pl-2 border-l border-brand-green/30">
                    <Link to="/projects/apartments/ongoing" className="py-1.5 text-sm text-brand-ink">
                      Ongoing
                    </Link>
                  </div>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-brand-gold font-semibold mb-1">
                    Residential Plots
                  </p>
                  <div className="flex flex-col gap-1 pl-2 border-l border-brand-green/30">
                    <Link to="/projects/plots/coming-soon" className="py-1.5 text-sm text-brand-ink">
                      Coming Soon
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link to="/gallery" className="block py-2.5 text-sm uppercase tracking-[0.14em] font-medium text-brand-ink">
            Gallery
          </Link>
          <Link to="/partner-with-us" className="block py-2.5 text-sm uppercase tracking-[0.14em] font-medium text-brand-ink">
            Partner With Us
          </Link>
          <Link to="/blogs" className="block py-2.5 text-sm uppercase tracking-[0.14em] font-medium text-brand-ink">
            Blogs
          </Link>
          <Link to="/contact" className="block py-2.5 text-sm uppercase tracking-[0.14em] font-medium text-brand-ink">
            Contact Us
          </Link>

          <div className="pt-4">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenEnquiry('Pranitha Sovereign Villas');
              }}
              className="w-full bg-brand-dark text-white text-xs uppercase tracking-[0.16em] font-semibold py-3.5 px-4 rounded-sm text-center"
            >
              Schedule a Visit
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
