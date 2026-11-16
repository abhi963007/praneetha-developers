import { useState, type FormEvent } from 'react';
import { PAGE_META } from '../../types/site';
import './contact-cards.css';

const PROPERTY_INTERESTS = [
  'Pranitha Sovereign Villas (₹1.5–2.0 Cr)',
  'Pranitha Santorini Villas',
  'Pranitha Amity / The Patio Villas',
  'Pranitha Meridian Heights Apartments',
  'Pranitha Singapur Town Plots (Coming Soon)',
  'Channel Partner Registration',
] as const;

export function ContactFormSection() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState<string>(PROPERTY_INTERESTS[0]);
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (submitting) return;
    setSubmitting(true);
    setStatus('idle');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          interest,
          message,
          consent,
        }),
      });
      if (!response.ok) {
        setStatus('error');
      } else {
        setStatus('success');
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setInterest(PROPERTY_INTERESTS[0]);
        setMessage('');
        setConsent(false);
      }
    } catch {
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section contact-page-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="contact-info-wrapper">
          <div className="contact-info-box">
            <div className="contact-info-icon">
              <img
                src="/images/69e9c15cade62629db29e938_1.svg"
                loading="lazy"
                alt=""
                className="contact-info-icon-img"
              />
            </div>
            <p className="contact-info-title">Phone &amp; WhatsApp</p>
            <a href="tel:+919133637111" className="contact-info-text link">
              +91 91336 37111
            </a>
            <a
              href="https://wa.me/919133637111"
              target="_blank"
              rel="noreferrer"
              className="contact-info-text link"
            >
              WhatsApp Site Desk
            </a>
          </div>
          <div className="contact-info-box">
            <div className="contact-info-icon">
              <img
                src="/images/69e9c15c96fb895d66f6ac3d_2.svg"
                loading="lazy"
                alt=""
                className="contact-info-icon-img"
              />
            </div>
            <p className="contact-info-title">Email Id</p>
            <a href="mailto:info@praneeta.dev" className="contact-info-text link">
              info@praneeta.dev
            </a>
            <a
              href="https://www.google.com/maps?q=17.4264796,78.1912362"
              target="_blank"
              rel="noreferrer"
              className="contact-info-text link"
            >
              Open in Google Maps
            </a>
          </div>
          <div className="contact-info-box">
            <div className="contact-info-icon">
              <img
                src="/images/69e9c15c4fbf278956b902d1_3.svg"
                loading="lazy"
                alt=""
                className="contact-info-icon-img"
              />
            </div>
            <p className="contact-info-title">Corporate Office</p>
            <p className="contact-info-text">
              6-109, Mokila Village, Shankarpally Mandal, Hyderabad – 501203
            </p>
          </div>
        </div>
        <div className="w-layout-grid contact-grid">
          <div className="contact-content">
            <div className="contact-title-box">
              <h2 className="section-title contact">Tell Us What You're Looking For</h2>
              <p className="section-text contact">
                Share a few details about your property needs and our team will get back to you with the right next steps.
              </p>
            </div>
            <div className="social-box-three">
              {[
                '/images/69e9c2dd6c30ecf541ac4e73_1.svg',
                '/images/69e9c2ddcc1e0dae195ecb03_2.svg',
                '/images/69e9c2dd29fa8e3712f37cf5_3.svg',
                '/images/69e9c2dde049fa499ad9b3f2_4.svg',
              ].map((iconSrc, idx) => (
                <a key={idx} href="#social" onClick={(e) => e.preventDefault()} className="social-two w-inline-block">
                  <img src={iconSrc} loading="lazy" alt="" className="social-icon-two" />
                </a>
              ))}
            </div>
          </div>
          <div className="contact-form-box">
            <div className="contact-form-block w-form">
              <form
                id="wf-form-Contact-Form"
                name="wf-form-Contact-Form"
                data-name="Contact Form"
                method="post"
                className="contact-form"
                data-wf-page-id={PAGE_META.contact.wfPage}
                data-wf-element-id="28975aec-f662-f86c-cca1-9cfa601829ea"
                onSubmit={handleSubmit}
              >
                <div className="w-layout-grid contact-form-grid">
                  <input
                    className="contact-input w-input"
                    maxLength={256}
                    name="First-Name"
                    data-name="First Name"
                    placeholder="First Name"
                    type="text"
                    id="First-Name"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input
                    className="contact-input w-input"
                    maxLength={256}
                    name="Last-Name"
                    data-name="Last Name"
                    placeholder="Last Name"
                    type="text"
                    id="Last-Name"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <input
                    className="contact-input w-node-_28975aec-f662-f86c-cca1-9cfa601829ee-ade4ee7e w-input"
                    maxLength={256}
                    name="Email"
                    data-name="Email"
                    placeholder="Email Address"
                    type="email"
                    id="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="contact-input w-node-_28975aec-f662-f86c-cca1-9cfa601829ef-ade4ee7e w-input"
                    maxLength={256}
                    name="Phone"
                    data-name="Phone"
                    placeholder="Phone"
                    type="tel"
                    id="Phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <select
                  id="Slect-Property"
                  name="Slect-Property"
                  data-name="Slect Property"
                  required
                  className="contact-input w-select"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                >
                  {PROPERTY_INTERESTS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <textarea
                  id="Message"
                  name="Message"
                  maxLength={5000}
                  data-name="Message"
                  placeholder="Message"
                  required
                  className="contact-input textarea w-input"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <label className="w-checkbox checkbox-field">
                  <input
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                    data-name="Checkbox"
                    required
                    className="w-checkbox-input checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                  />
                  <span className="checkbox-label w-form-label">
                    I agree to let Pranitha Developers securely store and use my information
                  </span>
                </label>
                <input
                  type="submit"
                  data-wait="Sending Inquiry..."
                  className="primary-button w-button"
                  value={submitting ? 'Sending Inquiry...' : 'Send Inquiry'}
                  disabled={submitting}
                />
              </form>
              <div
                className="form-success w-form-done"
                style={{ display: status === 'success' ? 'block' : undefined }}
              >
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div
                className="form-error w-form-fail"
                style={{ display: status === 'error' ? 'block' : undefined }}
              >
                <div className="text-block">
                  Oops! Something went wrong while submitting the form.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
