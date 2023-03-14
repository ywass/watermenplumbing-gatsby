import React from 'react'
import '../../style/photoGallery.css'
import tltBdrImg from '../../images/tlt-bdr.png'
import tltBdr2Img from '../../images/tlt-bdr2.png'
import subBannerBgImg from '../../images/sub-banner-v1-bg.jpg'
import waterHROneImg from '../../images/20190902_120841894_iOS.jpg'
import waterHRTwoImg from '../../images/20190902_120600875_iOS.jpg'
import waterHRThreeImg from '../../images/20201029_214453793_iOS.jpg'
import waterHRFourImg from '../../images/after-1.jpg'
import waterHRFiveImg from '../../images/before-1.jpg'
import waterHRSixImg from '../../images/replaceing-an-outdoor-water-heater-witha-tankless-1.jpg'
import waterHRSevenImg from '../../images/replaceing-an-outdoor-water-heater-witha-tankless-2.jpg'
import waterHREightImg from '../../images/Water-fountain-replacement.jpg'
import waterHRNineImg from '../../images/20180209_225118498_iOS.jpg'
import waterHRTenImg from '../../images/20190824_184559590_iOS.jpg'
import { Link } from 'gatsby'
function WaterHeaterReplacePhoto() {
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
            <h1>Water Heater Replacement</h1>
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
          data-path="/images/photo-gallery/water-heater-replacement/20190902_120841894_iOS.jpg"
          data-width={750}
          data-height={563}
          data-title="Water Heater Replacement Before"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/water-heater-replacement/?item=289283/water%20heater%20replacement%20before"
          data-item="i"
          data-key={289283}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
             
              alt="Water Heater Replacement Before"
              title="Water Heater Replacement Before"
              src={waterHROneImg}
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Water Heater Replacement Before
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/water-heater-replacement/20190902_120600875_iOS.jpg"
          data-width={750}
          data-height={563}
          data-title="Water Heater Replacement After"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/water-heater-replacement/?item=289282/water%20heater%20replacement%20after"
          data-item="i"
          data-key={289282}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
             
              alt="Water Heater Replacement After"
              title="Water Heater Replacement After"
              src={waterHRTwoImg}
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Water Heater Replacement After
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/water-heater-replacement/20201029_214453793_iOS.jpg"
          data-width={828}
          data-height={828}
          data-title="Water Heater Replacement Before & After"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/water-heater-replacement/?item=289284/water%20heater%20replacement%20before%20%26%20after"
          data-item="i"
          data-key={289284}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
             
              alt="Water Heater Replacement Before & After"
              title="Water Heater Replacement Before & After"
              src={waterHRThreeImg}
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Water Heater Replacement Before &amp; After
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/water-heater-replacement/after-1.jpg"
          data-width={1000}
          data-height={1000}
          data-title="Water Heater Replacement"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/water-heater-replacement/?item=289285/water%20heater%20replacement"
          data-item="i"
          data-key={289285}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
             
              alt="Water Heater Replacement"
              title="Water Heater Replacement"
              src={waterHRFourImg}
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Water Heater Replacement
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/water-heater-replacement/before-1.jpg"
          data-width={526}
          data-height={701}
          data-title="Water Heater Replacement"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/water-heater-replacement/?item=289286/water%20heater%20replacement"
          data-item="i"
          data-key={289286}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
             
              alt="Water Heater Replacement"
              title="Water Heater Replacement"
              src={waterHRFiveImg}
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Water Heater Replacement
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/water-heater-replacement/replaceing-an-outdoor-water-heater-witha-tankless-1.jpg"
          data-width={1512}
          data-height={2016}
          data-title="Water Heater Replacement Before"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/water-heater-replacement/?item=289287/water%20heater%20replacement%20before"
          data-item="i"
          data-key={289287}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
             
              alt="Water Heater Replacement Before"
              title="Water Heater Replacement Before"
              src={waterHRSixImg}
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Water Heater Replacement Before
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/water-heater-replacement/replaceing-an-outdoor-water-heater-witha-tankless-2.jpg"
          data-width={1512}
          data-height={2016}
          data-title="Water Heater Replacement After"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/water-heater-replacement/?item=289288/water%20heater%20replacement%20after"
          data-item="i"
          data-key={289288}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
              
              alt="Water Heater Replacement After"
              title="Water Heater Replacement After"
              src={waterHRSevenImg}
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Water Heater Replacement After
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/water-heater-replacement/Water-fountain-replacement.jpg"
          data-width={2048}
          data-height={2048}
          data-title="Water Heater Replacement Before & After"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/water-heater-replacement/?item=289289/water%20heater%20replacement%20before%20%26%20after"
          data-item="i"
          data-key={289289}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
              
              alt="Water Heater Replacement Before & After"
              title="Water Heater Replacement Before & After"
              src={waterHREightImg}
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Water Heater Replacement Before &amp; After
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/water-heater-replacement/20190517_212047254_iOS.jpg"
          data-width={3024}
          data-height={4032}
          data-title="Water Heater Replacement"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/water-heater-replacement/?item=289291/water%20heater%20replacement"
          data-item="i"
          data-key={289291}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              alt="Water Heater Replacement"
              title="Water Heater Replacement"
              data-bg="../../cms/thumbnails/34/350x350/images/photo-gallery/water-heater-replacement/20190517_212047254_iOS.jpg"
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Water Heater Replacement
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/water-heater-replacement/20180209_225118498_iOS.jpg"
          data-width={4032}
          data-height={3024}
          data-title="Water Heater Replacement After"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/water-heater-replacement/?item=289290/water%20heater%20replacement%20after"
          data-item="i"
          data-key={289290}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
              
              alt="Water Heater Replacement After"
              title="Water Heater Replacement After"
              src={waterHRNineImg}
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Water Heater Replacement After
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/water-heater-replacement/20190824_184559590_iOS.jpg"
          data-width={750}
          data-height={1000}
          data-title="Water Heater Replacement After"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/water-heater-replacement/?item=289281/water%20heater%20replacement%20after"
          data-item="i"
          data-key={289281}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
             
              alt="Water Heater Replacement After"
              title="Water Heater Replacement After"
              src={waterHRTenImg}
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Water Heater Replacement After
            </strong>
          </Link>
        </li>
      </ul>
    </div>
  </section>
</main>

  )
}

export default WaterHeaterReplacePhoto