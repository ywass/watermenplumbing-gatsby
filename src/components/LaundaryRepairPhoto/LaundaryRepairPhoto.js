import React from 'react'
import '../../style/photoGallery.css'
import tltBdrImg from '../../images/tlt-bdr.png'
import tltBdr2Img from '../../images/tlt-bdr2.png'
import subBannerBgImg from '../../images/sub-banner-v1-bg.jpg'
import LROneImg from '../../images/IMG_5137.jpg'
import LRTwoImg from '../../images/Multiple-laundry-drain-repair-1.jpg'
import LRThreeImg from '../../images/Multiple-laundry-drain-repair-2-after.jpg'
import LRFourImg from '../../images/IMG_5128.jpg'
import LRFiveImg from '../../images/IMG_5129.jpg'
import LRSixImg from '../../images/IMG_5130.jpg'
import LRSevenImg from '../../images/IMG_5131.jpg'
function LaundaryRepairPhoto() {
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
            <img src={tltBdrImg}  className="header-flair"/>
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
          data-path="/images/photo-gallery/laundry-repair/IMG_5137.jpg"
          data-width={1512}
          data-height={2016}
          data-title=""
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/laundry-repair/?item=289393/"
          data-item="i"
          data-key={289393}
        >
          <a
            className="img pad-height-100  box-shadow border-radius-item"
            href="javascript:void('Gallery')"
          >
            <img
             
              alt=""
              title=""
              src={LROneImg}
            />
          </a>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/laundry-repair/Multiple-laundry-drain-repair-1.jpg"
          data-width={3024}
          data-height={4032}
          data-title="Multiple Laundry Drain Repair Before"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/laundry-repair/?item=289394/multiple%20laundry%20drain%20repair%20before"
          data-item="i"
          data-key={289394}
        >
          <a
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            href="javascript:void('Gallery')"
          >
            <img
              
              alt="Multiple Laundry Drain Repair Before"
              title="Multiple Laundry Drain Repair Before"
             src={LRTwoImg}
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Multiple Laundry Drain Repair Before
            </strong>
          </a>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/laundry-repair/Multiple-laundry-drain-repair-2-after.jpg"
          data-width={3024}
          data-height={4032}
          data-title="Multiple Laundry Drain Repair After"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/laundry-repair/?item=289395/multiple%20laundry%20drain%20repair%20after"
          data-item="i"
          data-key={289395}
        >
          <a
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            href="javascript:void('Gallery')"
          >
            <img
             
              alt="Multiple Laundry Drain Repair After"
              title="Multiple Laundry Drain Repair After"
              src={LRThreeImg}
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Multiple Laundry Drain Repair After
            </strong>
          </a>
        </li>
        <li
          className="photo fit scaling-img-item"
          data-path="/images/photo-gallery/laundry-repair/IMG_5128.jpg"
          data-width={1512}
          data-height={2016}
          data-title=""
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/laundry-repair/?item=289396/"
          data-item="i"
          data-key={289396}
        >
          <a
            className="img pad-height-100  box-shadow border-radius-item"
            href="javascript:void('Gallery')"
          >
            <img
             
              alt=""
              title=""
              src={LRFourImg}
            />
          </a>
        </li>
        <li
          className="photo fit scaling-img-item"
          data-path="/images/photo-gallery/laundry-repair/IMG_5129.jpg"
          data-width={2016}
          data-height={1512}
          data-title=""
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/laundry-repair/?item=289397/"
          data-item="i"
          data-key={289397}
        >
          <a
            className="img pad-height-100  box-shadow border-radius-item"
            href="javascript:void('Gallery')"
          >
            <img
             
              alt=""
              title=""
            src={LRFiveImg}
            />
          </a>
        </li>
        <li
          className="photo fit scaling-img-item"
          data-path="/images/photo-gallery/laundry-repair/IMG_5130.jpg"
          data-width={2016}
          data-height={1512}
          data-title=""
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/laundry-repair/?item=289398/"
          data-item="i"
          data-key={289398}
        >
          <a
            className="img pad-height-100  box-shadow border-radius-item"
            href="javascript:void('Gallery')"
          >
            <img
             
              alt=""
              title=""
              src={LRSixImg}
            />
          </a>
        </li>
        <li
          className="photo fit scaling-img-item"
          data-path="/images/photo-gallery/laundry-repair/IMG_5131.jpg"
          data-width={2016}
          data-height={1512}
          data-title=""
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/laundry-repair/?item=289399/"
          data-item="i"
          data-key={289399}
        >
          <a
            className="img pad-height-100  box-shadow border-radius-item"
            href="javascript:void('Gallery')"
          >
            <img
             
              alt=""
              title=""
              src={LRSevenImg}
            />
          </a>
        </li>
      </ul>
    </div>
  </section>
</main>

  )
}

export default LaundaryRepairPhoto