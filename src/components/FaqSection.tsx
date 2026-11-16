import { Link } from 'react-router-dom';

interface FaqSectionProps {
  variant?: 'home' | 'about' | 'services';
  ptZero?: boolean;
}

const FAQ_ITEMS = [
  {
    q: 'What makes Praneeta Sovereign Villas priced at ₹1.5 Cr – ₹2.0 Cr unique in Mokila?',
    a: 'Most gated-community triplex villas along the Mokila–Kokapet belt now start upwards of ₹3 Cr. Praneeta Sovereign Villas offers independent 180–260 Sq. Yd plots with 2,250–2,850 Sq. Ft. triplex architecture, HMDA planning standards, and a 20,000+ Sq. Ft. clubhouse between ₹1.50 Cr and ₹2.00 Cr.',
  },
  {
    q: 'Are Praneeta Developers projects TG-RERA registered and bank loan approved?',
    a: 'Yes. Our ongoing and completed communities carry official TG-RERA registrations (including Santorini Villas P02400009246, Amity Villas P02400006593, and The Patio P02400009069) with HMDA-approved layouts and home loan tie-ups across SBI, HDFC, ICICI Bank, and Axis Bank.',
  },
  {
    q: 'How well connected are Mokila projects to Financial District, Neopolis & ORR?',
    a: 'Our corporate hub and flagship villa communities in Mokila sit roughly 12 minutes from ORR Exit 2 (Kollur), 18 minutes from Kokapet Neopolis SEZ, 25 minutes from Financial District / Wipro Circle, and within 8 minutes of premier international schools.',
  },
  {
    q: 'Can buyers see completed Praneeta villas before booking an ongoing unit?',
    a: 'Yes. We actively encourage prospective homeowners to walk through our completed, occupied communities—Praneeta Amity Villas and Praneeta The Patio—during your guided site visit so you can inspect construction finish, road widths, and clubhouse maintenance first-hand.',
  },
  {
    q: 'How do Channel Partners and Real Estate Consultants register with Praneeta Developers?',
    a: 'Consultants and TG-RERA registered realtors can submit their agency credentials directly via our Contact / Channel Partner desk. Our dedicated CP Desk completes empanelment within 24–48 hours with transparent brokerage slabs and milestone payouts.',
  },
];

const FAQ_WIDS = {
  home: {
    content: '978319e9-5bb3-ea7c-4102-e5582d887715',
    wrapper: '978319e9-5bb3-ea7c-4102-e5582d887728',
  },
  about: {
    content: '3deea4eb-b70a-f7ae-f25b-75f5ff2a5809',
    wrapper: '3deea4eb-b70a-f7ae-f25b-75f5ff2a5812',
  },
  services: {
    content: 'ba8c5179-4eb1-eafc-1ec0-72d8a8cb6903',
    wrapper: 'ba8c5179-4eb1-eafc-1ec0-72d8a8cb690c',
  },
};

export function FaqSection({ variant = 'home', ptZero = true }: FaqSectionProps) {
  const ids = FAQ_WIDS[variant];
  const imgSizes =
    variant === 'home'
      ? '100vw'
      : '(max-width: 479px) 48vw, (max-width: 767px) 49vw, (max-width: 991px) 356px, 462px';

  return (
    <section className={ptZero ? 'section pt-zero' : 'section'}>
      <div className="w-layout-blockcontainer container w-container">
        <div className="section-title-box">
          <div className="subtitle-box">
            <div className="subtitle-icon">
              <img
                src="/images/6ac4a1873c3838069f5e8736_icon.svg"
                loading="lazy"
                alt=""
                className="subtitle-icon-img"
              />
            </div>
            <p className="section-subtitle">FAQs</p>
          </div>
          <h2 className="section-title">
            Questions Before You<span className="sectitle-br"> </span>Make Your Move?
          </h2>
        </div>
        <div className="w-layout-grid faq-grid">
          <div data-w-id={ids.content} style={{ opacity: 0 }} className="faq-content">
            <div className="faq-title-box">
              <p className="faq-text-two">
                We've heard it all. Here's everything you need to know.
              </p>
              <Link
                to="/contact-us"
                data-wf--primary-button--variant="base"
                className="primary-button w-inline-block"
              >
                <div className="primary-button-flex">
                  <div className="primary-button-text-wrap">
                    <div className="primary-button-text">Ask your Question</div>
                    <div className="primary-button-text-hover">Ask your Question</div>
                  </div>
                  <div className="primary-button-arrow-wrapper">
                    <div className="primary-button-arrow-wrap">
                      <img
                        loading="lazy"
                        src="/images/69e723100025a4ae58731b6a_0.svg"
                        alt=""
                        className="primary-button-arrow"
                      />
                      <img
                        loading="lazy"
                        src="/images/69e723100025a4ae58731b6a_0.svg"
                        alt=""
                        className="primary-button-arrow-hover"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="faq-image-box">
              <div data-parallax="trigger" className="parallax-wrapper">
                <img
                  className="parallax-image"
                  src="/images/6ad5eeda8b091cbd04a1cc1f_Modern%20Home%20Consultation%20Meeting.avif"
                  alt="Advisor telling couple about property"
                  sizes={imgSizes}
                  data-parallax="target"
                  loading="lazy"
                  srcSet="/images/6ad5eeda8b091cbd04a1cc1f_Modern%20Home%20Consultation%20Meeting-p-500.avif 500w, /images/6ad5eeda8b091cbd04a1cc1f_Modern%20Home%20Consultation%20Meeting-p-800.avif 800w, /images/6ad5eeda8b091cbd04a1cc1f_Modern%20Home%20Consultation%20Meeting-p-1080.avif 1080w, /images/6ad5eeda8b091cbd04a1cc1f_Modern%20Home%20Consultation%20Meeting.avif 1624w"
                />
              </div>
            </div>
          </div>
          <div data-w-id={ids.wrapper} style={{ opacity: 0 }} className="faq-wrapper">
            <div className="faq-dropdown-box">
              {FAQ_ITEMS.map((item) => (
                <div key={item.q} className="faq-dropdown">
                  <div className="faq-toggle">
                    <p className="faq-title">{item.q}</p>
                    <div className="faq-icon-box">
                      <img
                        loading="lazy"
                        src="/images/69e7393ffd037b158b3c606b_Union.svg"
                        alt=""
                        className="faq-icon plus"
                      />
                      <img
                        loading="lazy"
                        src="/images/69e7393faa012b60a19851fe_Union2.svg"
                        alt=""
                        className="faq-icon minus"
                      />
                    </div>
                  </div>
                  <div className="faq-list">
                    <div className="faq-dropdown-content">
                      <p className="faq-dropdown-text">{item.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
