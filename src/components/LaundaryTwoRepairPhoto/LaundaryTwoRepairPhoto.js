import React from 'react'
import '../../style/photoGallery.css'
import tltBdrImg from '../../images/tlt-bdr.png'
import tltBdr2Img from '../../images/tlt-bdr2.png'
import subBannerBgImg from '../../images/sub-banner-v1-bg.jpg'
import LTROneImg from '../../images/Multiple-laundry-drain-repair-1.jpg'
import LTRTwoImg from '../../images/Multiple-laundry-drain-repair-2-after.jpg'
function LaundaryTwoRepairPhoto() {
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
            <h1>Laundry Repair</h1>
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
          className="photo fit scaling-img-item"
          data-path="/images/photo-gallery/Multiple-laundry-drain-repair-1.jpg"
          data-width={3024}
          data-height={4032}
          data-title=""
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/laundry-repair2/?item=288080/"
          data-item="i"
          data-key={288080}
        >
          <a
            className="img pad-height-100  box-shadow border-radius-item"
            href="javascript:void('Gallery')"
          >
            <img
             
              alt=""
              title=""
              src={LTROneImg}
            />
          </a>
        </li>
        <li
          className="photo fit scaling-img-item"
          data-path="/images/photo-gallery/Multiple-laundry-drain-repair-2-after.jpg"
          data-width={3024}
          data-height={4032}
          data-title=""
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/laundry-repair2/?item=288081/"
          data-item="i"
          data-key={288081}
        >
          <a
            className="img pad-height-100  box-shadow border-radius-item"
            href="javascript:void('Gallery')"
          >
            <img
             
              alt=""
              title=""
              src={LTRTwoImg}
            />
          </a>
        </li>
      </ul>
    </div>
  </section>
</main>

  )
}

export default LaundaryTwoRepairPhoto