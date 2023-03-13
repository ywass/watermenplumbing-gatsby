import React from 'react'
import '../../style/photoGallery.css'
import tltBdrImg from '../../images/tlt-bdr.png'
import tltBdr2Img from '../../images/tlt-bdr2.png'
import subBannerBgImg from '../../images/sub-banner-v1-bg.jpg'
import cJobOneImg from '../../images/Mixing-valve-replacement-b4-and-after-2.jpg'
import cJobTwoImg from '../../images/urinal-instal-1-of-2.jpg'
import cJobThreeImg from '../../images/urinal-instal-2-of-2.jpg'
import cJobFourImg from '../../images/Water-leak-repair-3.jpg'
import cJobFiveImg from '../../images/Water-main-spot-repair.jpg'
import { Link } from 'gatsby'
function CommercialJobsPhoto() {
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
              <h1>Commercial Jobs</h1>
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
            data-path="/images/photo-gallery/commercial-jobs/Mixing-valve-replacement-b4-and-after-2.jpg"
            data-width={828}
            data-height={828}
            data-title="Mixing Valve Replacement Before and After"
            data-caption=""
            data-link="http://www.watermenplumbing.com/photo-gallery/commercial-jobs/?item=289307/mixing%20valve%20replacement%20before%20and%20after"
            data-item="i"
            data-key={289307}
          >
            <Link
              className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
              to="javascript:void('Gallery')"
            >
              <img
              
                alt="Mixing Valve Replacement Before and After"
                title="Mixing Valve Replacement Before and After"
                src={cJobOneImg}
              />
              <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
                Mixing Valve Replacement Before and After
              </strong>
            </Link>
          </li>
          <li
            className="photo fit "
            data-path="/images/photo-gallery/commercial-jobs/urinal-instal-1-of-2.jpg"
            data-width={1150}
            data-height={2048}
            data-title="Urinal Install Before"
            data-caption=""
            data-link="http://www.watermenplumbing.com/photo-gallery/commercial-jobs/?item=289309/urinal%20install%20before"
            data-item="i"
            data-key={289309}
          >
            <Link
              className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
              to="javascript:void('Gallery')"
            >
              <img
               
                alt="Urinal Install Before"
                title="Urinal Install Before"
                src={cJobTwoImg}
              />
              <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
                Urinal Install Before
              </strong>
            </Link>
          </li>
          <li
            className="photo fit "
            data-path="/images/photo-gallery/commercial-jobs/urinal-instal-2-of-2.jpg"
            data-width={1150}
            data-height={2048}
            data-title="Urinal Install After"
            data-caption=""
            data-link="http://www.watermenplumbing.com/photo-gallery/commercial-jobs/?item=289310/urinal%20install%20after"
            data-item="i"
            data-key={289310}
          >
            <Link
              className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
              to="javascript:void('Gallery')"
            >
              <img
                
                alt="Urinal Install After"
                title="Urinal Install After"
                src={cJobThreeImg}
              />
              <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
                Urinal Install After
              </strong>
            </Link>
          </li>
          <li
            className="photo fit "
            data-path="/images/photo-gallery/commercial-jobs/Water-leak-repair-3.jpg"
            data-width={1560}
            data-height={2080}
            data-title="Water Leak Repair"
            data-caption=""
            data-link="http://www.watermenplumbing.com/photo-gallery/commercial-jobs/?item=289311/water%20leak%20repair"
            data-item="i"
            data-key={289311}
          >
            <Link
              className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
              to="javascript:void('Gallery')"
            >
              <img
              
                alt="Water Leak Repair"
                title="Water Leak Repair"
                src={cJobFourImg}
              />
              <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
                Water Leak Repair
              </strong>
            </Link>
          </li>
          <li
            className="photo fit "
            data-path="/images/photo-gallery/commercial-jobs/Water-main-spot-repair.jpg"
            data-width={828}
            data-height={828}
            data-title="Water Main Spot Repair"
            data-caption=""
            data-link="http://www.watermenplumbing.com/photo-gallery/commercial-jobs/?item=289312/water%20main%20spot%20repair"
            data-item="i"
            data-key={289312}
          >
            <Link
              className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
              to="javascript:void('Gallery')"
            >
              <img
                
                alt="Water Main Spot Repair"
                title="Water Main Spot Repair"
                src={cJobFiveImg}
              />
              <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
                Water Main Spot Repair
              </strong>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  </main>
  
  )
}

export default CommercialJobsPhoto