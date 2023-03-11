import React from 'react'
import '../../style/photoGallery.css'
import tltBdrImg from '../../images/tlt-bdr.png'
import tltBdr2Img from '../../images/tlt-bdr2.png'
import subBannerBgImg from '../../images/sub-banner-v1-bg.jpg'
import kitchenSink1Img from '../../images/20200515_002210830_iOS.jpg'
import kitchenSink2Img from '../../images/1of2.jpg'
import kitchenSink3Img from '../../images/2of2.jpg'
function KitchenSinkReplacePhoto() {
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
            <h1>Kitchen Sink Replacement</h1>
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
          data-path="/images/photo-gallery/kitchen-sink-replacement/20200515_002210830_iOS.jpg"
          data-width={828}
          data-height={828}
          data-title="Kitchen Sink Replacement Before & After"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/kitchen-sink-replacement/?item=289400/kitchen%20sink%20replacement%20before%20%26%20after"
          data-item="i"
          data-key={289400}
        >
          <a
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            href="javascript:void('Gallery')"
          >
            <img
              alt="Kitchen Sink Replacement Before & After"
              title="Kitchen Sink Replacement Before & After"
              src={kitchenSink1Img}
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Kitchen Sink Replacement Before &amp; After
            </strong>
          </a>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/kitchen-sink-replacement/1of2.jpg"
          data-width={960}
          data-height={720}
          data-title="Kitchen Sink Replacement Before"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/kitchen-sink-replacement/?item=289401/kitchen%20sink%20replacement%20before"
          data-item="i"
          data-key={289401}
        >
          <a
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            href="javascript:void('Gallery')"
          >
            <img
              alt="Kitchen Sink Replacement Before"
              title="Kitchen Sink Replacement Before"
              src={kitchenSink2Img}
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Kitchen Sink Replacement Before
            </strong>
          </a>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/kitchen-sink-replacement/2of2.jpg"
          data-width={960}
          data-height={720}
          data-title="Kitchen Sink Replacement After"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/kitchen-sink-replacement/?item=289402/kitchen%20sink%20replacement%20after"
          data-item="i"
          data-key={289402}
        >
          <a
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            href="javascript:void('Gallery')"
          >
            <img
              alt="Kitchen Sink Replacement After"
              title="Kitchen Sink Replacement After"
              src={kitchenSink3Img}
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Kitchen Sink Replacement After
            </strong>
          </a>
        </li>
      </ul>
    </div>
  </section>
</main>

  )
}

export default KitchenSinkReplacePhoto