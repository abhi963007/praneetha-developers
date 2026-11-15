import { Fragment } from 'react';

interface ProcessStep {
  icon: string;
  title: string;
  text: string;
  count: string;
  countNodeId: string;
  boxNodeId?: string;
  boxClassName?: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    icon: '/images/69e9f304f7c176e0d4ccbe2b_Mask%20group.svg',
    title: 'Explore Communities',
    text: 'Compare our Mokila–Shankarpally villas, Kokapet apartments, and upcoming plots by configuration and budget.',
    count: '02',
    countNodeId: 'w-node-fe9fe890-b9ff-09eb-1caf-83be152cc4e2-309073a9',
    boxClassName: 'process-box',
  },
  {
    icon: '/images/69e9f450af4f2776d4ef791d_2.svg',
    title: 'Visit Mokila Site',
    text: 'Walk through our completed Amity & The Patio communities and review Sovereign Villas blueprints on site.',
    count: '01',
    countNodeId: 'w-node-_4f4928c3-4b50-61dc-69b8-309b49988929-309073a9',
    boxClassName: 'process-box',
  },
  {
    icon: '/images/69e9f450ecc7379b4e0c909a_3.svg',
    title: 'Clear Handover',
    text: 'Verify HMDA & TG-RERA records, complete bank financing, and receive timely key handover with zero surprises.',
    count: '03',
    countNodeId: 'w-node-_1354456d-5f04-0ea8-512c-d3c101fa3700-309073a9',
    boxNodeId: 'w-node-_8209186e-8c29-3bba-f88a-3b09ef0cd7a6-309073a9',
    boxClassName: 'process-box last',
  },
];

export function AboutProcessSection() {
  return (
    <section className="section">
      <img
        src="/images/69e9f420baf74743fc1102db_Union.avif"
        loading="lazy"
        alt="Black and white floor plan of a multi-room apartment with labeled areas including dining room, kitchen, living room, bedrooms, and bathrooms."
        className="process-shape"
      />
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
            <p className="section-subtitle">Our Process</p>
          </div>
          <h2 className="section-title">
            A Simpler Way to<span className="sectitle-br"> </span>Move Forward
          </h2>
        </div>
        <div className="w-layout-grid process-grid">
          {PROCESS_STEPS.map((step) => (
            <Fragment key={step.countNodeId}>
              <div id={step.boxNodeId} className={step.boxClassName}>
                <div className="process-icon-box">
                  <img src={step.icon} loading="lazy" alt="" className="process-icon" />
                </div>
                <div className="process-content">
                  <h3 className="process-title">{step.title}</h3>
                  <p className="process-text">{step.text}</p>
                </div>
              </div>
              <div id={step.countNodeId} className="process-count-box">
                <p className="process-count">{step.count}</p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
