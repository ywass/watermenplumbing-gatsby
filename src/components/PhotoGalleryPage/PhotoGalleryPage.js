import React from 'react'
import '../../style/photoGallery.css'
import tltBdrImg from '../../images/tlt-bdr.png'
import tltBdr2Img from '../../images/tlt-bdr2.png'
import subBannerBgImg from '../../images/sub-banner-v1-bg.jpg'
import senoirImg from '../../images/Senoir[9].jpg'
import otherLeakyCeilingImg from "../../images/leaky-ceiling-roof-repair-hollywood-fl.jpg"
import kichenDrainImg from '../../images/kitchen-drain-replaement-and-upgrade.jpg'
import multipleLaundaryImg from '../../images/Multiple-laundry-drain-repair-2-after.jpg'
import replacingOutdoorImg from '../../images/replaceing-an-outdoor-water-heater-witha-tankless-2.jpg'
import repipeOne from '../../images/Repipe-1.jpg'
import waterSmartValveImg from '../../images/water-filtration-and-smart-valve.jpg'
import underJobImg from '../../images/20190618_215602649_iOS.jpg'
import commercialJobImg from '../../images/urinal-instal-2-of-2.jpg'
import bathPlumRenoImg from '../../images/Free-standing-tub.jpg'
import waterLineImg from '../../images/IMG_5119.jpg'
import mainWaterImg from '../../images/mgv8.jpg'
import mainValveImg from '../../images/20180802_193045939_iOS.jpg'
import laundaryRepairImg from '../../images/IMG_5137.jpg'
import kichenSinkImg from '../../images/2of2.jpg'
import cameraInspectionImg from '../../images/Aligator-in-drain.jpg'
import siliconBeforeAfterImg from '../../images/16h.jpg'
import { Link } from 'gatsby'
function PhotoGalleryPage() {
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
              <h1>Photo Gallery</h1>
              <svg role="presentation" className="header-flair">
                <use href="../includes/flair.svg#header" />
              </svg>
            </header>
            <div id="SystemBannerV1BtnCon"></div>
          </div>
        </div>
      </div>
    </section>
    <form
      id="Form_PhotoGallerySystemV2"
      method="post"
      encType="multipart/form-data"
      action="https://www.watermenplumbing.com/photo-gallery/"
      data-search={1}
    >
      <input type="hidden" name="_m_" defaultValue="PhotoGallerySystemV2" />
      <input
        type="hidden"
        className="ui-cms-input"
        id="PhotoGallerySystemV2__edit_"
        name="PhotoGallerySystemV2$_edit_"
        defaultValue=""
      />
      <input
        type="hidden"
        className="ui-cms-input"
        id="PhotoGallerySystemV2__command_"
        name="PhotoGallerySystemV2$_command_"
        defaultValue=""
      />
      <section
        className="photo-gallery v2 light-bg bg-box-unlike text-left ui-repeater ui-ajax"
        id="PhotoGallerySystemV2"
        data-onvisible="show"
        data-ajaxreplace="true"
      >
        <div className="main text-align">
          <ul className="img-list top-margin-small flex-wrap-grid-auto-size-max-4-block-500-break-1024 ps-images">
            
            <li className="photo fit" data-item="i" data-key={16441}>
              <Link
                className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
                to="/photo-gallery/our-projects"
              >
                <img
                 
                  alt="Our Projects"
                  title="Our Projects"
                src={otherLeakyCeilingImg}
                />
                <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
                  Our Projects
                </strong>
              </Link>
            </li>
            <li className="photo fit" data-item="i" data-key={16442}>
              <Link
                className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
                to="/photo-gallery/kitchen-and-drain-replacement"
              >
                <img
                
                  alt="Kitchen and Drain Replacement"
                  title="Kitchen and Drain Replacement"
                  src={kichenDrainImg}
                />
                <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
                  Kitchen and Drain Replacement
                </strong>
              </Link>
            </li>
            <li className="photo fit" data-item="i" data-key={16443}>
              <Link
                className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
                to="/photo-gallery/laundry-repair2"
              >
                <img
                 
                  alt="Laundry Repair"
                  title="Laundry Repair"
                  src={multipleLaundaryImg}
                />
                <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
                  Laundry Repair
                </strong>
              </Link>
            </li>
            <li className="photo fit" data-item="i" data-key={16499}>
              <Link
                className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
                to="/photo-gallery/water-heater-replacement"
              >
                <img
                 
                  alt="Water Heater Replacement"
                  title="Water Heater Replacement"
                  src={replacingOutdoorImg}
                />
                <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
                  Water Heater Replacement
                </strong>
              </Link>
            </li>
            <li className="photo fit" data-item="i" data-key={16500}>
              <Link
                className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
                to="/photo-gallery/whole-house-water-repipe"
              >
                <img
                 
                  alt="Whole House Water Repipe"
                  title="Whole House Water Repipe"
                  src={repipeOne}
                />
                <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
                  Whole House Water Repipe
                </strong>
              </Link>
            </li>
            <li className="photo fit" data-item="i" data-key={16501}>
              <Link
                className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
                to="/photo-gallery/water-filtration"
              >
                <img
                 
                  alt="Water Filtration"
                  title="Water Filtration"
                  src={waterSmartValveImg}
                />
                <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
                  Water Filtration
                </strong>
              </Link>
            </li>
            <li className="photo fit" data-item="i" data-key={16502}>
              <Link
                className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
                to="/photo-galleryunderground-jobs"
              >
                <img
                 
                  alt="Underground Jobs"
                  title="Underground Jobs"
                  src={underJobImg}
                />
                <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
                  Underground Jobs
                </strong>
              </Link>
            </li>
            <li className="photo fit" data-item="i" data-key={16503}>
              <Link
                className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
                to="/photo-gallery/commercial-jobs"
              >
                <img
                 
                  alt="Commercial Jobs"
                  title="Commercial Jobs"
                  src={commercialJobImg}
                />
                <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
                  Commercial Jobs
                </strong>
              </Link>
            </li>
            <li className="photo fit" data-item="i" data-key={16509}>
              <Link
                className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
                to="/photo-gallery/bathroom-plumbing-renovations"
              >
                <img
                 
                  alt="Bathroom Plumbing & Renovations"
                  title="Bathroom Plumbing & Renovations"
                  src={bathPlumRenoImg}
                />
                <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
                  Bathroom Plumbing &amp; Renovations
                </strong>
              </Link>
            </li>
            <li className="photo fit" data-item="i" data-key={16510}>
              <Link
                className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
                to="/photo-gallery/water-line-spigot-installation"
              >
                <img
                  
                  alt="Water Line & Spigot Installation"
                  title="Water Line & Spigot Installation"
                  src={waterLineImg}
                />
                <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
                  Water Line &amp; Spigot Installation
                </strong>
              </Link>
            </li>
            <li className="photo fit" data-item="i" data-key={16511}>
              <Link
                className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
                to="/photo-gallery/main-water-shut-off-valve"
              >
                <img
                 
                  alt="Main Water Shut Off Valve"
                  title="Main Water Shut Off Valve"
                  src={mainWaterImg}
                />
                <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
                  Main Water Shut Off Valve
                </strong>
              </Link>
            </li>
            <li className="photo fit" data-item="i" data-key={16512}>
              <Link
                className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
                to="/photo-gallery/main-valve-replacement"
              >
                <img
                
                  alt="Main Valve Replacement"
                  title="Main Valve Replacement"
                  src={mainValveImg}
                />
                <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
                  Main Valve Replacement
                </strong>
              </Link>
            </li>
            <li className="photo fit" data-item="i" data-key={16513}>
              <Link
                className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
                to="/photo-gallery/laundry-repair"
              >
                <img
                  
                  alt="Laundry Repair"
                  title="Laundry Repair"
                  src={laundaryRepairImg}
                />
                <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
                  Laundry Repair
                </strong>
              </Link>
            </li>
            <li className="photo fit" data-item="i" data-key={16514}>
              <Link
                className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
                to="/photo-gallery/kitchen-sink-replacement"
              >
                <img
                
                  alt="Kitchen Sink Replacement"
                  title="Kitchen Sink Replacement"
                  src={kichenSinkImg}
                />
                <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
                  Kitchen Sink Replacement
                </strong>
              </Link>
            </li>
            <li className="photo fit" data-item="i" data-key={16515}>
              <Link
                className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
                to="/photo-gallery/camera-inspections"
              >
                <img
                 
                  alt="Camera Inspections"
                  title="Camera Inspections"
                  src={cameraInspectionImg}
                />
                <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
                  Camera Inspections
                </strong>
              </Link>
            </li>
            <li className="photo fit" data-item="i" data-key={16516}>
              <Link
                className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
                to="/photo-gallery/silicone-caulking-before-afters"
              >
                <img
                 
                  alt="Silicone Caulking Before & Afters"
                  title="Silicone Caulking Before & Afters"
                  src={siliconBeforeAfterImg}
                />
                <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
                  Silicone Caulking Before &amp; Afters
                </strong>
              </Link>
            </li>
            <li
              className="cms-repeater-placeholder"
              style={{ display: "none !important" }}
            />
          </ul>
        </div>
      </section>
    </form>
  </main>
  
  )
}

export default PhotoGalleryPage