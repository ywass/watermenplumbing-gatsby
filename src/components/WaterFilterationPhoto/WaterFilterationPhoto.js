import React from 'react'
import '../../style/photoGallery.css'
import tltBdrImg from '../../images/tlt-bdr.png'
import tltBdr2Img from '../../images/tlt-bdr2.png'
import subBannerBgImg from '../../images/sub-banner-v1-bg.jpg'
import waterFOneImg from '../../images/Flow-tech-watersoftner-alternative-descaler.jpg'
import waterFTwoImg from '../../images/ion-exchange-water-softener.jpg'
import waterFThreeImg from '../../images/reverse-osmosis-system.jpg'
import waterFFourImg from '../../images/uv-filter.jpg'
import waterFFiveImg from '../../images/water-filtration-and-smart-valve.jpg'
import waterFSixImg from '../../images/Basic-point-of-use-water-filtration.jpg'
import waterFSevenImg from '../../images/CX-Carbon-Whole-house-filter.jpg'
import waterFEightImg from '../../images/dual-function-softener-filter.jpg'
import { Link } from 'gatsby'
function WaterFilterationPhoto() {
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
            <h1>Water Filtration</h1>
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
          data-path="/images/photo-gallery/water-filtration/Flow-tech-watersoftner-alternative-descaler.jpg"
          data-width={300}
          data-height={300}
          data-title="Flow-Tech Water Softener"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/water-filtration/?item=289294/flow-tech%20water%20softener"
          data-item="i"
          data-key={289294}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
              
              alt="Flow-Tech Water Softener"
              title="Flow-Tech Water Softener"
              src={waterFOneImg}
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Flow-Tech Water Softener
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/water-filtration/ion-exchange-water-softener.jpg"
          data-width={300}
          data-height={300}
          data-title="Ion Exchange Water Softener"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/water-filtration/?item=289295/ion%20exchange%20water%20softener"
          data-item="i"
          data-key={289295}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
              src={waterFTwoImg}
              alt="Ion Exchange Water Softener"
              title="Ion Exchange Water Softener"
              
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Ion Exchange Water Softener
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/water-filtration/reverse-osmosis-system.jpg"
          data-width={300}
          data-height={300}
          data-title="Reverse Osmosis System"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/water-filtration/?item=289296/reverse%20osmosis%20system"
          data-item="i"
          data-key={289296}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
             
              alt="Reverse Osmosis System"
              title="Reverse Osmosis System"
              src={waterFThreeImg}
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Reverse Osmosis System
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/water-filtration/uv-filter.jpg"
          data-width={760}
          data-height={600}
          data-title="UV Filter"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/water-filtration/?item=289297/uv%20filter"
          data-item="i"
          data-key={289297}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
            
              alt="UV Filter"
              title="UV Filter"
             src={waterFFourImg}
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              UV Filter
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/water-filtration/water-filtration-and-smart-valve.jpg"
          data-width={640}
          data-height={640}
          data-title="Water Filtration and Smart Valve"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/water-filtration/?item=289298/water%20filtration%20and%20smart%20valve"
          data-item="i"
          data-key={289298}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
             
              alt="Water Filtration and Smart Valve"
              title="Water Filtration and Smart Valve"
              src={waterFFiveImg}
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Water Filtration and Smart Valve
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/water-filtration/Basic-point-of-use-water-filtration.jpg"
          data-width={300}
          data-height={300}
          data-title="Basic Point of Use Water Filtration"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/water-filtration/?item=289299/basic%20point%20of%20use%20water%20filtration"
          data-item="i"
          data-key={289299}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
             
              alt="Basic Point of Use Water Filtration"
              title="Basic Point of Use Water Filtration"
              src={waterFSixImg}
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Basic Point of Use Water Filtration
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/water-filtration/CX-Carbon-Whole-house-filter.jpg"
          data-width={300}
          data-height={300}
          data-title="CX Carbon Whole House Filter"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/water-filtration/?item=289300/cx%20carbon%20whole%20house%20filter"
          data-item="i"
          data-key={289300}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
              
              alt="CX Carbon Whole House Filter"
              title="CX Carbon Whole House Filter"
              src={waterFSevenImg}
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              CX Carbon Whole House Filter
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/water-filtration/dual-function-softener-filter.jpg"
          data-width={300}
          data-height={300}
          data-title="Dual Function Softener Filter"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/water-filtration/?item=289301/dual%20function%20softener%20filter"
          data-item="i"
          data-key={289301}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
             
              alt="Dual Function Softener Filter"
              title="Dual Function Softener Filter"
              src={waterFEightImg}
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Dual Function Softener Filter
            </strong>
          </Link>
        </li>
      </ul>
    </div>
  </section>
</main>

  )
}

export default WaterFilterationPhoto