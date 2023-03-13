import React from 'react'
import '../../style/photoGallery.css'
import tltBdrImg from '../../images/tlt-bdr.png'
import tltBdr2Img from '../../images/tlt-bdr2.png'
import subBannerBgImg from '../../images/sub-banner-v1-bg.jpg'
import mainValRep1Img from '../../images/Main-watr-shut-off-valve-b4.jpg'
import mainValRep2Img from '../../images/20180802_181453407_iOS.jpg'
import mainValRep3Img from '../../images/20180802_193045939_iOS.jpg'
import mainValRep4Img from '../../images/Main-watr-shut-off-valve-after.jpg'
import { Link } from 'gatsby'
function MainValveRepPhoto() {
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
            <h1>Main Valve Replacement</h1>
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
            data-path="/images/photo-gallery/main-valve-replacement/Main-watr-shut-off-valve-b4.jpg"
            data-width={720}
            data-height={960}
            data-title="Main Valve Replacement Before"
            data-caption=""
            data-link="http://www.watermenplumbing.com/photo-gallery/main-valve-replacement/?item=289389/main%20valve%20replacement%20before"
            data-item="i"
            data-key={289389}
          >
            <Link
              className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
              to="javascript:void('Gallery')"
            >
              <img
                alt="Main Valve Replacement Before"
                title="Main Valve Replacement Before"
                src={mainValRep1Img}
              />
              <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
                Main Valve Replacement Before
              </strong>
            </Link>
          </li>
          <li
            className="photo fit "
            data-path="/images/photo-gallery/main-valve-replacement/20180802_181453407_iOS.jpg"
            data-width={1080}
            data-height={1080}
            data-title="Main Valve Replacement Before"
            data-caption=""
            data-link="http://www.watermenplumbing.com/photo-gallery/main-valve-replacement/?item=289390/main%20valve%20replacement%20before"
            data-item="i"
            data-key={289390}
          >
            <Link
              className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
              to="javascript:void('Gallery')"
            >
              <img
                alt="Main Valve Replacement Before"
                title="Main Valve Replacement Before"
                src={mainValRep2Img}
              />
              <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
                Main Valve Replacement Before
              </strong>
            </Link>
          </li>
          <li
            className="photo fit "
            data-path="/images/photo-gallery/main-valve-replacement/20180802_193045939_iOS.jpg"
            data-width={1080}
            data-height={1080}
            data-title="Main Valve Replacement After"
            data-caption=""
            data-link="http://www.watermenplumbing.com/photo-gallery/main-valve-replacement/?item=289391/main%20valve%20replacement%20after"
            data-item="i"
            data-key={289391}
          >
            <Link
              className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
              to="javascript:void('Gallery')"
            >
              <img
                alt="Main Valve Replacement After"
                title="Main Valve Replacement After"
                src={mainValRep3Img}
              />
              <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
                Main Valve Replacement After
              </strong>
            </Link>
          </li>
          <li
            className="photo fit "
            data-path="/images/photo-gallery/main-valve-replacement/Main-watr-shut-off-valve-after.jpg"
            data-width={720}
            data-height={960}
            data-title="Main Valve Replacement After"
            data-caption=""
            data-link="http://www.watermenplumbing.com/photo-gallery/main-valve-replacement/?item=289392/main%20valve%20replacement%20after"
            data-item="i"
            data-key={289392}
          >
            <Link
              className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
              to="javascript:void('Gallery')"
            >
              <img
                alt="Main Valve Replacement After"
                title="Main Valve Replacement After"
                src={mainValRep4Img}
              />
              <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
                Main Valve Replacement After
              </strong>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  </main>
  
  )
}

export default MainValveRepPhoto