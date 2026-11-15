import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, X } from 'lucide-react';

export function Footer() {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-10 mobile-bottom-spacer">
      <div className="edge-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/15">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-block bg-white px-4 py-2 rounded-sm">
              <img src="/logo.png" alt="Pranitha Developers" className="h-10 w-auto" />
            </div>
            <p className="text-brand-gold text-[11px] uppercase tracking-[0.2em] font-semibold">
              Building Dreams, Creating Homes
            </p>
            <p className="text-sm text-white/75 leading-relaxed max-w-sm">
              V Praneeta Developers Private Limited crafts gated-community luxury villas, modern
              apartments, and HMDA-planned residential plots across West Hyderabad’s Mokila–Shankarpally corridor.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-sm border border-white/20 hover:bg-brand-green flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-sm border border-white/20 hover:bg-brand-green flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-sm border border-white/20 hover:bg-brand-green flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-xl font-semibold text-white mb-4">Directory</h4>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li><Link to="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-brand-gold transition-colors">Gallery</Link></li>
              <li><Link to="/partner-with-us" className="hover:text-brand-gold transition-colors">Partner With Us</Link></li>
              <li><Link to="/blogs" className="hover:text-brand-gold transition-colors">Blogs</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Project Categories */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-xl font-semibold text-white mb-4">Developments</h4>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>
                <Link to="/projects/villas/ongoing" className="hover:text-brand-gold transition-colors">
                  Villas — Ongoing (₹1.50 Cr – ₹2.00 Cr)
                </Link>
              </li>
              <li>
                <Link to="/projects/villas/completed" className="hover:text-brand-gold transition-colors">
                  Villas — Completed Communities
                </Link>
              </li>
              <li>
                <Link to="/projects/apartments/ongoing" className="hover:text-brand-gold transition-colors">
                  Apartments — Ongoing
                </Link>
              </li>
              <li>
                <Link to="/projects/plots/coming-soon" className="hover:text-brand-gold transition-colors">
                  Residential Plots — Coming Soon
                </Link>
              </li>
            </ul>
          </div>

          {/* Corporate Office & Helpline */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-xl font-semibold text-white mb-4">Corporate Office</h4>
            <div className="flex items-start gap-2.5 text-sm text-white/75">
              <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-1" />
              <span>6-109, Mokila Village, Shankarpally Mandal, RR District, Hyderabad - 501203</span>
            </div>
            <a
              href="tel:+919133637111"
              className="flex items-center gap-2.5 text-sm text-white/75 hover:text-brand-gold transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-gold shrink-0" />
              <span>+91 9133637111</span>
            </a>
            <a
              href="mailto:info@praneeta.dev"
              className="flex items-center gap-2.5 text-sm text-white/75 hover:text-brand-gold transition-colors"
            >
              <Mail className="w-4 h-4 text-brand-gold shrink-0" />
              <span>info@praneeta.dev</span>
            </a>
          </div>
        </div>

        {/* Centrally Aligned & Justified RERA Disclaimer and Legal Bar */}
        <div className="pt-8 max-w-4xl mx-auto text-center space-y-4">
          <p className="text-xs text-white/65 leading-relaxed text-center">
            <strong className="text-brand-gold uppercase tracking-wider">RERA Disclaimer:</strong>{' '}
            Architectural renders, floor plans, dimensions, and pricing ranges (₹1.50 Cr – ₹2.00 Cr
            for flagship villas) are indicative and subject to sanctioned TG-RERA / HMDA approvals.
            Active TG-RERA project references include P02400009246, P02400006593, and P02400009069.
          </p>

          <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs text-white/70">
            <span>
              © {new Date().getFullYear()} Pranitha Developers (V Praneeta Developers Pvt. Ltd.). All rights reserved.
            </span>
            <div className="flex items-center justify-center gap-5">
              <button
                type="button"
                onClick={() => setLegalModal('privacy')}
                className="hover:text-brand-gold underline-offset-4 hover:underline"
              >
                Privacy Policy
              </button>
              <span className="text-white/30">·</span>
              <button
                type="button"
                onClick={() => setLegalModal('terms')}
                className="hover:text-brand-gold underline-offset-4 hover:underline"
              >
                Terms &amp; Conditions
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Policy Modal */}
      {legalModal && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="bg-white text-brand-ink max-w-lg w-full rounded-sm p-6 shadow-2xl relative border border-brand-dark/15"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLegalModal(null)}
              aria-label="Close legal dialog"
              className="absolute right-4 top-4 p-1.5 rounded-sm hover:bg-brand-cream"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-serif text-2xl font-bold text-brand-dark mb-3">
              {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>
            <p className="text-sm text-brand-slate leading-relaxed">
              {legalModal === 'privacy'
                ? 'Pranitha Developers collects contact details submitted via our enquiry, site visit, and channel partner registration forms solely to share requested project brochures, schedule site visits, and provide authorized real estate consultation. We never sell personal contact information to third-party marketers.'
                : 'All visual elevations, specifications, and starting prices published on this website are for informational guidance. Final unit allotments, payment schedules, and specifications are governed strictly by the registered Agreement of Sale and TG-RERA sanctioned plans.'}
            </p>
          </div>
        </div>
      )}
    </footer>
  );
}
