import React from 'react'
import '../../style/photoGallery.css'
import tltBdrImg from '../../images/tlt-bdr.png'
import tltBdr2Img from '../../images/tlt-bdr2.png'
import subBannerBgImg from '../../images/sub-banner-v1-bg.jpg'
import silicon1Img from '../../images/23h.jpg'
import silicon2Img from '../../images/25h.jpg'
import silicon3Img from '../../images/4h.jpg'
import silicon4Img from '../../images/16h.jpg'
function SiliconeCaulkingBandAPhoto() {
  return (
    <main id="MainZone">
  <section
    className="system-banner v1 bg-image dark-bg bg-box-none text-left"
    id="SystemBannerV1"
    data-onvisible="show"
  >
    <picture className="img-bg bg-position" role="presentation">
      <source
        media="(max-width: 500px)"
        srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        data-src="/assets/sub-banners/sub-banner-v1-bg-mobile.jpg"
      />
      <img
        alt=""
        src={subBannerBgImg}
      />
    </picture>
    <div className="main">
      <div className="bg-box side-padding-medium vertical-padding info text-align box-flair">
        <div className="flair-border">
          <span className="flair-1" />
          <span className="flair-2" />
          <header className="no-pad center-800" id="SystemBannerV1Info">
            <h1>Silicone Caulking Before &amp; Afters</h1>
            <img src={tltBdrImg} className="header-flair"/>
          </header>
          <div id="SystemBannerV1BtnCon"></div>
        </div>
      </div>
    </div>
  </section>
  <section
    className="photo-gallery v1 light-bg bg-box-unlike ui-repeater"
    id="PhotoGallerySystemV1Gallery"
  >
    <div className="main">
      <ul className="img-list flex-wrap-grid-auto-size-max-4-block-500 ps-images">
        <li
          className="photo fit "
          data-path="/images/photo-gallery/silicone-caulking-before-afters/23h.jpg"
          data-width={1000}
          data-height={1000}
          data-title="Before & After"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/silicone-caulking-before-afters/?item=289407/before%20%26%20after"
          data-item="i"
          data-key={289407}
        >
          <a
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            href="javascript:void('Gallery')"
          >
            <img
              alt="Before & After"
              title="Before & After"
              src={silicon1Img}
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Before &amp; After
            </strong>
          </a>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/silicone-caulking-before-afters/25h.jpg"
          data-width={1000}
          data-height={1000}
          data-title="Before & After"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/silicone-caulking-before-afters/?item=289408/before%20%26%20after"
          data-item="i"
          data-key={289408}
        >
          <a
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            href="javascript:void('Gallery')"
          >
            <img
              alt="Before & After"
              title="Before & After"
              src={silicon2Img}
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Before &amp; After
            </strong>
          </a>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/silicone-caulking-before-afters/4h.jpg"
          data-width={1000}
          data-height={1000}
          data-title="Before & After"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/silicone-caulking-before-afters/?item=289409/before%20%26%20after"
          data-item="i"
          data-key={289409}
        >
          <a
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            href="javascript:void('Gallery')"
          >
            <img
              alt="Before & After"
              title="Before & After"
              src={silicon3Img}
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Before &amp; After
            </strong>
          </a>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/silicone-caulking-before-afters/16h.jpg"
          data-width={1000}
          data-height={1000}
          data-title="Before & After"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/silicone-caulking-before-afters/?item=289410/before%20%26%20after"
          data-item="i"
          data-key={289410}
        >
          <a
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            href="javascript:void('Gallery')"
          >
            <img
              alt="Before & After"
              title="Before & After"
              src={silicon4Img}
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Before &amp; After
            </strong>
          </a>
        </li>
      </ul>
    </div>
  </section>
</main>

  )
}

export default SiliconeCaulkingBandAPhoto