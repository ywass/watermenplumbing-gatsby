import React from 'react'
import '../../style/photoGallery.css'
import tltBdrImg from '../../images/tlt-bdr.png'
import tltBdr2Img from '../../images/tlt-bdr2.png'
import subBannerBgImg from '../../images/sub-banner-v1-bg.jpg'
import WholeOneImg from '../../images/Repipe-1.jpg'
import WholeTwoImg from '../../images/house-repipe.jpg'
import { Link } from 'gatsby'
function WholeHouseWaterRepipePhoto() {
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
            <h1>Whole House Water Repipe</h1>
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
          data-path="/images/photo-gallery/whole-house-water-repipe/Repipe-1.jpg"
          data-width={480}
          data-height={640}
          data-title="Whole House Water Repipe"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/whole-house-water-repipe/?item=289292/whole%20house%20water%20repipe"
          data-item="i"
          data-key={289292}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
              
              alt="Whole House Water Repipe"
              title="Whole House Water Repipe"
              src={WholeOneImg}
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Whole House Water Repipe
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/whole-house-water-repipe/house-repipe.jpg"
          data-width={4032}
          data-height={3024}
          data-title="Whole House Water Repipe"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/whole-house-water-repipe/?item=289293/whole%20house%20water%20repipe"
          data-item="i"
          data-key={289293}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
             
              alt="Whole House Water Repipe"
              title="Whole House Water Repipe"
              src={WholeTwoImg}
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Whole House Water Repipe
            </strong>
          </Link>
        </li>
      </ul>
    </div>
  </section>
</main>

  )
}

export default WholeHouseWaterRepipePhoto