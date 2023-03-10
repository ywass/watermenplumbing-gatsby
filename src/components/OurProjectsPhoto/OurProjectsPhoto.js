import React from 'react'
import '../../style/subPhotoGallery.css'
import tltBdrImg from '../../images/tlt-bdr.png'
import tltBdr2Img from '../../images/tlt-bdr2.png'
import subBannerBgImg from '../../images/sub-banner-v1-bg.jpg'
import afterShowerUpImg from '../../images/complete-tub-instalation-with-faucet-and-tile-work.jpg'
import beforeShowerUpImg from '../../images/20170417_203913966_iOS.jpg'
import tubUpImg from '../../images/Free-standing-tub.jpg'
import showerLineImg from '../../images/Shower-liner-water-proofing.jpg'
import showerValveTrimImg from '../../images/Shower-valve-trim-instalation.jpg'
import faucetInstallImg from '../../images/Shower-waterproofing-faucet-isntall-and-final.jpg'
import showerFloorImg from '../../images/Sloaped-shower-floor.jpg'
import tubInstallImg from '../../images/Tub-instalation.jpg'
import vanityDrainImg from '../../images/Vanity-drains-and-water-supply-piping-prepaired.jpg'
function OurProjectsPhoto() {
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
            <h1>Our Projects</h1>
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
          data-path="/images/photo-gallery/our-projects/20170417_203913966_iOS.jpg"
          data-width={3024}
          data-height={4032}
          data-title="Before Shower Upgrade"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/our-projects/?item=288065/before%20shower%20upgrade"
          data-item="i"
          data-key={288065}
        >
          <a
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            href="javascript:void('Gallery')"
          >
            <img
             
              alt="Before Shower Upgrade"
              title="Before Shower Upgrade"
              src={beforeShowerUpImg}
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Before Shower Upgrade
            </strong>
          </a>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/our-projects/complete-tub-instalation-with-faucet-and-tile-work.jpg"
          data-width={746}
          data-height={1000}
          data-title="After Shower Upgrade"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/our-projects/?item=288066/after%20shower%20upgrade"
          data-item="i"
          data-key={288066}
        >
          <a
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            href="javascript:void('Gallery')"
          >
            <img
             
              alt="After Shower Upgrade"
              title="After Shower Upgrade"
              src={afterShowerUpImg}
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              After Shower Upgrade
            </strong>
          </a>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/our-projects/Free-standing-tub.jpg"
          data-width={1000}
          data-height={750}
          data-title="Tub Upgrade"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/our-projects/?item=288067/tub%20upgrade"
          data-item="i"
          data-key={288067}
        >
          <a
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            href="javascript:void('Gallery')"
          >
            <img
            
              alt="Tub Upgrade"
              title="Tub Upgrade"
              src={tubUpImg}
              />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Tub Upgrade
            </strong>
          </a>
        </li>
        <li
          className="photo fit scaling-img-item"
          data-path="/images/photo-gallery/our-projects/Shower-liner-water-proofing.jpg"
          data-width={640}
          data-height={480}
          data-title=""
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/our-projects/?item=288068/"
          data-item="i"
          data-key={288068}
        >
          <a
            className="img pad-height-100  box-shadow border-radius-item"
            href="javascript:void('Gallery')"
          >
            <img
             
              alt=""
              title=""
              src={showerLineImg}
            />
          </a>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/our-projects/Shower-valve-trim-instalation.jpg"
          data-width={746}
          data-height={1000}
          data-title="After Shower Upgrade"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/our-projects/?item=288069/after%20shower%20upgrade"
          data-item="i"
          data-key={288069}
        >
          <a
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            href="javascript:void('Gallery')"
          >
            <img
              
              alt="After Shower Upgrade"
              title="After Shower Upgrade"
              src={showerValveTrimImg}
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              After Shower Upgrade
            </strong>
          </a>
        </li>
        <li
          className="photo fit scaling-img-item"
          data-path="/images/photo-gallery/our-projects/Shower-waterproofing-faucet-isntall-and-final.jpg"
          data-width={1000}
          data-height={1000}
          data-title=""
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/our-projects/?item=288070/"
          data-item="i"
          data-key={288070}
        >
          <a
            className="img pad-height-100  box-shadow border-radius-item"
            href="javascript:void('Gallery')"
          >
            <img
              
              alt=""
              title=""
              src={faucetInstallImg}
            />
          </a>
        </li>
        <li
          className="photo fit scaling-img-item"
          data-path="/images/photo-gallery/our-projects/Sloaped-shower-floor.jpg"
          data-width={746}
          data-height={1000}
          data-title=""
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/our-projects/?item=288071/"
          data-item="i"
          data-key={288071}
        >
          <a
            className="img pad-height-100  box-shadow border-radius-item"
            href="javascript:void('Gallery')"
          >
            <img
             
              alt=""
              title=""
              src={showerFloorImg}
            />
          </a>
        </li>
        <li
          className="photo fit scaling-img-item"
          data-path="/images/photo-gallery/our-projects/Tub-instalation.jpg"
          data-width={960}
          data-height={960}
          data-title=""
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/our-projects/?item=288072/"
          data-item="i"
          data-key={288072}
        >
          <a
            className="img pad-height-100  box-shadow border-radius-item"
            href="javascript:void('Gallery')"
          >
            <img
             
              alt=""
              title=""
             src={tubInstallImg}
            />
          </a>
        </li>
        <li
          className="photo fit scaling-img-item"
          data-path="/images/photo-gallery/our-projects/Vanity-drains-and-water-supply-piping-prepaired.jpg"
          data-width={1000}
          data-height={746}
          data-title=""
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/our-projects/?item=288073/"
          data-item="i"
          data-key={288073}
        >
          <a
            className="img pad-height-100  box-shadow border-radius-item"
            href="javascript:void('Gallery')"
          >
            <img
             
              alt=""
              title=""
             src={vanityDrainImg}
            />
          </a>
        </li>
      </ul>
    </div>
  </section>
</main>

  )
}

export default OurProjectsPhoto