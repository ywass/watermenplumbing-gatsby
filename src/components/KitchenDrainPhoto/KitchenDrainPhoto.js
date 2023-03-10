import React from 'react'
import '../../style/photoGallery.css'
import tltBdrImg from '../../images/tlt-bdr.png'
import tltBdr2Img from '../../images/tlt-bdr2.png'
import subBannerBgImg from '../../images/sub-banner-v1-bg.jpg'
import drainBefAfImg from '../../images/IMG_5099.jpg'
import kOneImg from '../../images/k1of2.jpg'
import kTwoImg from '../../images/k2of2.jpg'
import kichenBandAImg from '../../images/kitchen-drain-b4-anf-after.jpg'
import kDrainLastImg from '../../images/kitchen-drain-replaement-and-upgrade.jpg'
function KitchenDrainPhoto() {
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
            <h1>Kitchen and Drain Replacement</h1>
           <img className="header-flair" src={tltBdrImg}/>
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
          data-path="/images/photo-gallery/kitchen-and-drain-replacement/IMG_5099.jpg"
          data-width={1280}
          data-height={1280}
          data-title="Kitchen Drain Before and After"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/kitchen-and-drain-replacement/?item=288075/kitchen%20drain%20before%20and%20after"
          data-item="i"
          data-key={288075}
        >
          <a
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            href="javascript:void('Gallery')"
          >
            <img
              
              alt="Kitchen Drain Before and After"
              title="Kitchen Drain Before and After"
              src={drainBefAfImg}
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Kitchen Drain Before and After
            </strong>
          </a>
        </li>
        <li
          className="photo fit scaling-img-item"
          data-path="/images/photo-gallery/kitchen-and-drain-replacement/k1of2.jpg"
          data-width={2016}
          data-height={1512}
          data-title=""
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/kitchen-and-drain-replacement/?item=288076/"
          data-item="i"
          data-key={288076}
        >
          <a
            className="img pad-height-100  box-shadow border-radius-item"
            href="javascript:void('Gallery')"
          >
            <img
              
              alt=""
              title=""
              src={kOneImg}
            />
          </a>
        </li>
        <li
          className="photo fit scaling-img-item"
          data-path="/images/photo-gallery/kitchen-and-drain-replacement/k2of2.jpg"
          data-width={2016}
          data-height={1512}
          data-title=""
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/kitchen-and-drain-replacement/?item=288077/"
          data-item="i"
          data-key={288077}
        >
          <a
            className="img pad-height-100  box-shadow border-radius-item"
            href="javascript:void('Gallery')"
          >
            <img
             
              alt=""
              title=""
              src={kTwoImg}
            />
          </a>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/kitchen-and-drain-replacement/kitchen-drain-b4-anf-after.jpg"
          data-width={1000}
          data-height={1000}
          data-title="Kitchen Drain Before and After"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/kitchen-and-drain-replacement/?item=288078/kitchen%20drain%20before%20and%20after"
          data-item="i"
          data-key={288078}
        >
          <a
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            href="javascript:void('Gallery')"
          >
            <img
             
              alt="Kitchen Drain Before and After"
              title="Kitchen Drain Before and After"
              src={kichenBandAImg}
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Kitchen Drain Before and After
            </strong>
          </a>
        </li>
        <li
          className="photo fit scaling-img-item"
          data-path="/images/photo-gallery/kitchen-and-drain-replacement/kitchen-drain-replaement-and-upgrade.jpg"
          data-width={3264}
          data-height={2448}
          data-title=""
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/kitchen-and-drain-replacement/?item=288079/"
          data-item="i"
          data-key={288079}
        >
          <a
            className="img pad-height-100  box-shadow border-radius-item"
            href="javascript:void('Gallery')"
          >
            <img
             
              alt=""
              title=""
            src={kDrainLastImg}
            />
          </a>
        </li>
      </ul>
    </div>
  </section>
</main>

  )
}

export default KitchenDrainPhoto