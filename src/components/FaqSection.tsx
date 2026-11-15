import { Link } from 'react-router-dom';

interface FaqSectionProps {
  variant?: 'home' | 'about' | 'services';
  ptZero?: boolean;
}

const FAQ_ITEMS = [
  {
    q: 'What documents do I need to buy a property?',
    a: 'The required documents vary by location and transaction type. Our team will guide you through the paperwork and requirements before you move forward.',
  },
  {
    q: 'Are your property listings verified?',
    a: 'We review listing information regularly and work to keep property details, availability, and pricing as accurate and current as possible.',
  },
  {
    q: 'Can I schedule a property viewing?',
    a: "Yes. Select a property you're interested in and contact our team to arrange an in-person or virtual viewing.",
  },
  {
    q: 'How long does the buying process take?',
    a: "The timeline depends on the property, financing, inspections, and local requirements. We'll help you understand each step before closing.",
  },
  {
    q: 'Can I speak directly with an agent?',
    a: 'Absolutely. Our advisors can answer questions about properties, viewings, offers, and the next steps in your transaction.',
  },
  {
    q: 'Can I list my property with Veymont?',
    a: "Yes. Contact our team with your property details and we'll help you understand the listing process.",
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
