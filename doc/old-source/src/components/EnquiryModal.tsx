import { useState, FormEvent } from 'react';
import { X } from 'lucide-react';
import { postJson } from '../hooks/useApi';

interface EnquiryModalProps {
  isOpen: boolean;
  defaultProject?: string;
  onClose: () => void;
}

export function EnquiryModal({
  isOpen,
  defaultProject = 'Pranitha Sovereign Villas',
  onClose,
}: EnquiryModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredProject, setPreferredProject] = useState(defaultProject);
  const [visitDate, setVisitDate] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmation, setConfirmation] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await postJson<{ message: string; record: { id: string } }>('/api/enquiries', {
        name,
        phone,
        email,
        preferredProject,
        visitDate,
        inquiryType: 'Schedule Site Visit',
        message,
      });
      setConfirmation(`${res.message} Ref: ${res.record.id}`);
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to submit enquiry');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-sm max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-brand-dark/15"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-5 top-5 w-9 h-9 rounded-sm bg-brand-cream hover:bg-brand-sand flex items-center justify-center text-brand-ink"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <p className="text-[11px] uppercase tracking-[0.2em] text-brand-green font-semibold mb-1.5">
            Private Guided Site Visit
          </p>
          <h3 id="enquiry-modal-title" className="font-serif text-3xl font-bold text-brand-dark">
            Enquire &amp; Book Your Visit
          </h3>
          <p className="text-sm text-brand-slate mt-1.5">
            Receive floor plans, ₹1.50 Cr – ₹2.00 Cr pricing sheets, and a private tour.
          </p>
        </div>

        {confirmation ? (
          <div className="bg-brand-cream border border-brand-green/30 rounded-sm p-6 text-center space-y-4">
            <p className="text-[11px] uppercase tracking-[0.18em] text-brand-green font-semibold">
              Request Confirmed
            </p>
            <p className="font-semibold text-brand-dark text-sm">{confirmation}</p>
            <button
              type="button"
              onClick={() => {
                setConfirmation(null);
                onClose();
              }}
              className="bg-brand-dark hover:bg-brand-green text-white px-7 py-2.5 rounded-sm text-xs uppercase tracking-[0.16em] font-semibold"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-2.5 rounded-sm">
                {error}
              </div>
            )}
            <div>
              <label htmlFor="modal-name" className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-brand-ink mb-1">
                Full Name *
              </label>
              <input
                id="modal-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full px-3.5 py-2.5 rounded-sm border border-brand-dark/20 focus:outline-none focus:border-brand-green text-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label htmlFor="modal-phone" className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-brand-ink mb-1">
                  Mobile / WhatsApp *
                </label>
                <input
                  id="modal-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98XXXXXXXX"
                  className="w-full px-3.5 py-2.5 rounded-sm border border-brand-dark/20 focus:outline-none focus:border-brand-green text-sm"
                />
              </div>
              <div>
                <label htmlFor="modal-email" className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-brand-ink mb-1">
                  Email Address *
                </label>
                <input
                  id="modal-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className="w-full px-3.5 py-2.5 rounded-sm border border-brand-dark/20 focus:outline-none focus:border-brand-green text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label htmlFor="modal-project" className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-brand-ink mb-1">
                  Preferred Project
                </label>
                <select
                  id="modal-project"
                  value={preferredProject}
                  onChange={(e) => setPreferredProject(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-sm border border-brand-dark/20 focus:outline-none focus:border-brand-green text-sm bg-white"
                >
                  <option value="Pranitha Sovereign Villas">Pranitha Sovereign Villas (₹1.50–2.00 Cr)</option>
                  <option value="Pranitha Santorini Villas">Pranitha Santorini Villas</option>
                  <option value="Pranitha Meridian Heights">Pranitha Meridian Heights (Apartments)</option>
                  <option value="Pranitha Singapur Town Phase II">Singapur Town Phase II (Plots)</option>
                </select>
              </div>
              <div>
                <label htmlFor="modal-date" className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-brand-ink mb-1">
                  Preferred Visit Date
                </label>
                <input
                  id="modal-date"
                  type="date"
                  value={visitDate}
                  onChange={(e) => setVisitDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-sm border border-brand-dark/20 focus:outline-none focus:border-brand-green text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="modal-msg" className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-brand-ink mb-1">
                Notes (Optional)
              </label>
              <textarea
                id="modal-msg"
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Looking for 3 BHK or 4 BHK East-facing triplex..."
                className="w-full px-3.5 py-2 rounded-sm border border-brand-dark/20 focus:outline-none focus:border-brand-green text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-brand-dark hover:bg-brand-green disabled:opacity-60 text-white text-xs uppercase tracking-[0.18em] font-semibold py-3.5 rounded-sm transition-colors"
            >
              {submitting ? 'Submitting Request...' : 'Confirm Site Visit & Request Brochure'}
            </button>

            <p className="text-center text-[11px] text-brand-slate pt-1">
              Direct Developer Sales Desk · Zero Brokerage
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
