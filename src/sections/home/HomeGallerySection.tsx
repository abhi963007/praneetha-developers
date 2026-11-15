interface GalleryLightboxItem {
  _id: string;
  origFileName: string;
  fileName: string;
  fileSize: number;
  height: number;
  width: number;
  src: string;
  srcSet: string;
  alt: string;
}

const GALLERY_ITEMS: GalleryLightboxItem[] = [
  {
    _id: '6ad70f6cbf6c8f380548ade8',
    origFileName: '1.avif',
    fileName: '1.avif',
    fileSize: 124468,
    height: 1024,
    width: 1536,
    src: '/images/6ad70f6cbf6c8f380548ade8_1.avif',
    srcSet:
      '/images/6ad70f6cbf6c8f380548ade8_1-p-500.avif 500w, /images/6ad70f6cbf6c8f380548ade8_1-p-800.avif 800w, /images/6ad70f6cbf6c8f380548ade8_1-p-1080.avif 1080w, /images/6ad70f6cbf6c8f380548ade8_1.avif 1536w',
    alt: 'Gallery Image 01',
  },
  {
    _id: '6ad70f6d2110973c436530e7',
    origFileName: '2.avif',
    fileName: '2.avif',
    fileSize: 130530,
    height: 1254,
    width: 1254,
    src: '/images/6ad70f6d2110973c436530e7_2.avif',
    srcSet:
      '/images/6ad70f6d2110973c436530e7_2-p-500.avif 500w, /images/6ad70f6d2110973c436530e7_2-p-800.avif 800w, /images/6ad70f6d2110973c436530e7_2-p-1080.avif 1080w, /images/6ad70f6d2110973c436530e7_2.avif 1254w',
    alt: 'Gallery Image 02',
  },
  {
    _id: '6ad70f6c7b0fe08ed373b688',
    origFileName: '3.avif',
    fileName: '3.avif',
    fileSize: 146981,
    height: 1024,
    width: 1536,
    src: '/images/6ad70f6c7b0fe08ed373b688_3.avif',
    srcSet:
      '/images/6ad70f6c7b0fe08ed373b688_3-p-500.avif 500w, /images/6ad70f6c7b0fe08ed373b688_3-p-800.avif 800w, /images/6ad70f6c7b0fe08ed373b688_3-p-1080.avif 1080w, /images/6ad70f6c7b0fe08ed373b688_3.avif 1536w',
    alt: 'Gallery Image 03',
  },
  {
    _id: '6ad70f6d57aa3fae32906ffe',
    origFileName: '4.avif',
    fileName: '4.avif',
    fileSize: 148817,
    height: 1254,
    width: 1254,
    src: '/images/6ad70f6d57aa3fae32906ffe_4.avif',
    srcSet:
      '/images/6ad70f6d57aa3fae32906ffe_4-p-500.avif 500w, /images/6ad70f6d57aa3fae32906ffe_4-p-800.avif 800w, /images/6ad70f6d57aa3fae32906ffe_4-p-1080.avif 1080w, /images/6ad70f6d57aa3fae32906ffe_4.avif 1254w',
    alt: 'Modern two-story house with large windows, wooden shutters, and green landscaping under a clear sky.',
  },
  {
    _id: '6ad70f6d3591600dcf626ac6',
    origFileName: '5.avif',
    fileName: '5.avif',
    fileSize: 76318,
    height: 686,
    width: 1200,
    src: '/images/6ad70f6d3591600dcf626ac6_5.avif',
    srcSet:
      '/images/6ad70f6d3591600dcf626ac6_5-p-500.avif 500w, /images/6ad70f6d3591600dcf626ac6_5-p-800.avif 800w, /images/6ad70f6d3591600dcf626ac6_5-p-1080.avif 1080w, /images/6ad70f6d3591600dcf626ac6_5.avif 1200w',
    alt: 'Gallery Image 05',
  },
  {
    _id: '6ad70f6f491f17f6faf2b8e4',
    origFileName: '6.avif',
    fileName: '6.avif',
    fileSize: 106151,
    height: 1254,
    width: 1254,
    src: '/images/6ad70f6f491f17f6faf2b8e4_6.avif',
    srcSet:
      '/images/6ad70f6f491f17f6faf2b8e4_6-p-500.avif 500w, /images/6ad70f6f491f17f6faf2b8e4_6-p-800.avif 800w, /images/6ad70f6f491f17f6faf2b8e4_6-p-1080.avif 1080w, /images/6ad70f6f491f17f6faf2b8e4_6.avif 1254w',
    alt: 'Gallery Image 06',
  },
  {
    _id: '6ad70f71155418fc235fcc8e',
    origFileName: '7.png',
    fileName: '7.png',
    fileSize: 3314732,
    height: 1024,
    width: 1536,
    src: '/images/6ad70f71155418fc235fcc8e_7.avif',
    srcSet:
      '/images/6ad70f71155418fc235fcc8e_7-p-500.avif 500w, /images/6ad70f71155418fc235fcc8e_7-p-800.avif 800w, /images/6ad70f71155418fc235fcc8e_7-p-1080.avif 1080w, /images/6ad70f71155418fc235fcc8e_7.avif 1536w',
    alt: 'Gallery Image 07',
  },
  {
    _id: '6ad70f713e5340244632b712',
    origFileName: '8.png',
    fileName: '8.png',
    fileSize: 3199057,
    height: 1254,
    width: 1254,
    src: '/images/6ad70f713e5340244632b712_8.avif',
    srcSet:
      '/images/6ad70f713e5340244632b712_8-p-500.avif 500w, /images/6ad70f713e5340244632b712_8-p-800.avif 800w, /images/6ad70f713e5340244632b712_8-p-1080.avif 1080w, /images/6ad70f713e5340244632b712_8.avif 1254w',
    alt: 'Modern two-story house with large glass windows, light green exterior wall, and lush surrounding plants under clear sky.',
  },
];

const REVERSED_GALLERY_ITEMS = [...GALLERY_ITEMS].reverse();

function buildLightboxJson(item: GalleryLightboxItem): string {
  return JSON.stringify({
    items: [
      {
        _id: item._id,
        origFileName: item.origFileName,
        fileName: item.fileName,
        fileSize: item.fileSize,
        height: item.height,
        url: item.src,
        width: item.width,
        type: 'image',
      },
    ],
    group: 'Gallery',
  });
}

function GalleryTrack({ items }: { items: GalleryLightboxItem[] }) {
  return (
    <div className="marquee three">
      {items.map((item) => (
        <div key={item._id} className="gallery-box">
          <a
            href="#gallery-preview"
            onClick={(e) => e.preventDefault()}
            className="gallery-lightbox w-inline-block w-lightbox"
          >
            <img
              sizes="100vw"
              srcSet={item.srcSet}
              alt={item.alt}
              src={item.src}
              loading="lazy"
              className="gallery-image"
            />
            <script
              type="application/json"
              className="w-json"
              dangerouslySetInnerHTML={{ __html: buildLightboxJson(item) }}
            />
          </a>
        </div>
      ))}
    </div>
  );
}

export function HomeGallerySection() {
  return (
    <section className="section dark">
      <img
        sizes="100vw"
        srcSet="/images/69e9e029ef7ec186491f95f8_Group%20531-p-500.png 500w, /images/69e9e029ef7ec186491f95f8_Group%20531-p-800.avif 800w, /images/69e9e029ef7ec186491f95f8_Group%20531.avif 1920w"
        alt="Abstract pattern of intersecting white outlined squares of various sizes on a black background."
        src="/images/69e9e029ef7ec186491f95f8_Group%20531.avif"
        loading="lazy"
        className="gallery-shape"
      />
      <div className="w-layout-blockcontainer container w-container">
        <div className="sectitle-wrap">
          <div className="section-title-box mb-zero">
            <div className="subtitle-box light">
              <div className="subtitle-icon">
                <img
                  src="/images/6ac4a1873c3838069f5e8736_icon.svg"
                  loading="lazy"
                  alt=""
                  className="subtitle-icon-img"
                />
              </div>
              <p className="section-subtitle light">Property Gallery</p>
            </div>
            <h2 className="section-title light">
              Property moments<span className="sectitle-br"> </span>captured beautifully
            </h2>
          </div>
          <p className="section-text three">
            Explore interiors, architecture, and spaces that bring each property to life.
          </p>
        </div>
      </div>
      <div className="marquee-box two">
        <div className="gallery-shadow" />
        <div className="gallery-shadow right" />
        <div data-animate="marquee-rtl" className="marquee-inner one">
          <GalleryTrack items={GALLERY_ITEMS} />
          <GalleryTrack items={GALLERY_ITEMS} />
        </div>
        <div data-animate="marquee-ltr" className="marquee-inner two">
          <GalleryTrack items={REVERSED_GALLERY_ITEMS} />
          <GalleryTrack items={REVERSED_GALLERY_ITEMS} />
        </div>
      </div>
    </section>
  );
}
