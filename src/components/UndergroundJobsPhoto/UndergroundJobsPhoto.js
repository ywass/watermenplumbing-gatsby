import React from 'react'
import '../../style/photoGallery.css'
import tltBdrImg from '../../images/tlt-bdr.png'
import tltBdr2Img from '../../images/tlt-bdr2.png'
import subBannerBgImg from '../../images/sub-banner-v1-bg.jpg'
import UnderJobOneImg from '../../images/20190620_174442736_iOS.jpg'
import UnderJobTwoImg from '../../images/20190618_215602649_iOS.jpg'
import UnderJobThreeImg from '../../images/20190618_221425398_iOS.jpg'
import UnderJobFourImg from '../../images/20190619_164924973_iOS.jpg'
import UnderJobFiveImg from '../../images/20190619_211553304_iOS.jpg'
import { Link } from 'gatsby'
function UndergroundJobsPhoto() {
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
              <h1>Underground Jobs</h1>
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
            data-path="/images/photo-gallery/underground-jobs/20190620_174442736_iOS.jpg"
            data-width={3024}
            data-height={4032}
            data-title=""
            data-caption=""
            data-link="http://www.watermenplumbing.com/photo-gallery/underground-jobs/?item=289302/"
            data-item="i"
            data-key={289302}
          >
            <Link
              className="img pad-height-100  box-shadow border-radius-item"
              to="javascript:void('Gallery')"
            >
              <img
               
                alt=""
                title=""
                src={UnderJobOneImg}
              />
            </Link>
          </li>
          <li
            className="photo fit scaling-img-item"
            data-path="/images/photo-gallery/underground-jobs/20190618_215602649_iOS.jpg"
            data-width={3024}
            data-height={4032}
            data-title=""
            data-caption=""
            data-link="http://www.watermenplumbing.com/photo-gallery/underground-jobs/?item=289303/"
            data-item="i"
            data-key={289303}
          >
            <Link
              className="img pad-height-100  box-shadow border-radius-item"
              to="javascript:void('Gallery')"
            >
              <img
               
                alt=""
                title=""
                src={UnderJobTwoImg}
                
              />
            </Link>
          </li>
          <li
            className="photo fit scaling-img-item"
            data-path="/images/photo-gallery/underground-jobs/20190618_221425398_iOS.jpg"
            data-width={3024}
            data-height={4032}
            data-title=""
            data-caption=""
            data-link="http://www.watermenplumbing.com/photo-gallery/underground-jobs/?item=289304/"
            data-item="i"
            data-key={289304}
          >
            <Link
              className="img pad-height-100  box-shadow border-radius-item"
              to="javascript:void('Gallery')"
            >
              <img
                
                alt=""
                title=""
                src={UnderJobThreeImg}
              />
            </Link>
          </li>
          <li
            className="photo fit scaling-img-item"
            data-path="/images/photo-gallery/underground-jobs/20190619_164924973_iOS.jpg"
            data-width={3024}
            data-height={4032}
            data-title=""
            data-caption=""
            data-link="http://www.watermenplumbing.com/photo-gallery/underground-jobs/?item=289305/"
            data-item="i"
            data-key={289305}
          >
            <Link
              className="img pad-height-100  box-shadow border-radius-item"
              to="javascript:void('Gallery')"
            >
              <img
               
                alt=""
                title=""
               src={UnderJobFourImg}
              />
            </Link>
          </li>
          <li
            className="photo fit scaling-img-item"
            data-path="/images/photo-gallery/underground-jobs/20190619_211553304_iOS.jpg"
            data-width={3024}
            data-height={4032}
            data-title=""
            data-caption=""
            data-link="http://www.watermenplumbing.com/photo-gallery/underground-jobs/?item=289306/"
            data-item="i"
            data-key={289306}
          >
            <Link
              className="img pad-height-100  box-shadow border-radius-item"
              to="javascript:void('Gallery')"
            >
              <img
               
                alt=""
                title=""
               src={UnderJobFiveImg}
              />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  </main>
  
  )
}

export default UndergroundJobsPhoto