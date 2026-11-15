interface PageBannerSectionProps {
  title: string;
}

export function PageBannerSection({ title }: PageBannerSectionProps) {
  return (
    <section
      data-wf-component-id="2c7e47dd-5125-7db6-2595-21bab4d49997"
      data-wf-variant-state="base"
      className="page-section"
    >
      <div className="page-wrap">
        <div className="bg page-bg" />
        <div className="w-layout-blockcontainer container small w-container">
          <div className="page-content">
            <h1 className="page-title">{title}</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
