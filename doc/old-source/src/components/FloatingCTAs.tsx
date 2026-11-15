import { Phone, MessageCircle } from 'lucide-react';

interface FloatingCTAsProps {
  onOpenEnquiry: () => void;
}

export function FloatingCTAs({ onOpenEnquiry }: FloatingCTAsProps) {
  return (
    <>
      {/* Desktop / Tablet Floating Contact Actions */}
      <div className="hidden md:flex fixed right-5 bottom-6 z-40 flex-col gap-2.5">
        <a
          href="https://wa.me/919133637111?text=Hi%20Pranitha%20Developers,%20please%20share%20villa%20details."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-11 h-11 rounded-sm bg-[#25D366] text-white shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
        <a
          href="tel:+919133637111"
          aria-label="Call +91 9133637111"
          className="w-11 h-11 rounded-sm bg-brand-dark text-white shadow-lg hover:bg-brand-green transition-colors flex items-center justify-center"
        >
          <Phone className="w-4 h-4" />
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-brand-dark/15 px-3 py-2.5 flex items-center gap-2 shadow-[0_-6px_20px_rgba(0,0,0,0.08)]">
        <a
          href="tel:+919133637111"
          className="flex-1 py-2.5 rounded-sm border border-brand-dark/25 text-brand-dark text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5" />
          Call
        </a>
        <a
          href="https://wa.me/919133637111?text=Hi%20Pranitha%20Developers,%20please%20share%20villa%20details."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 rounded-sm bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          WhatsApp
        </a>
        <button
          type="button"
          onClick={onOpenEnquiry}
          className="flex-[1.4] py-2.5 rounded-sm bg-brand-dark text-white text-xs font-semibold uppercase tracking-wider text-center"
        >
          Site Visit
        </button>
      </div>
    </>
  );
}
