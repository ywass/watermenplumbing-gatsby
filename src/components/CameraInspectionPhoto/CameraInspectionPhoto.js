import React from 'react'
import '../../style/photoGallery.css'
import tltBdrImg from '../../images/tlt-bdr.png'
import tltBdr2Img from '../../images/tlt-bdr2.png'
import subBannerBgImg from '../../images/sub-banner-v1-bg.jpg'
import cameraIns1Img from '../../images/Camera-inspection-Levi.jpg'
import cameraIns2Img from '../../images/Camera-inspection-Yosef.jpg'
import cameraIns3Img from '../../images/Travis-Pic-doing-camera-inspection.jpg'
import cameraIns4Img from '../../images/Aligator-in-drain.jpg'
function CameraInspectionPhoto() {
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
              <h1>Camera Inspections</h1>
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
            data-path="/images/photo-gallery/camera-inspections/Camera-inspection-Levi.jpg"
            data-width={960}
            data-height={960}
            data-title="Levi Performing a Camera Inspection"
            data-caption=""
            data-link="http://www.watermenplumbing.com/photo-gallery/camera-inspections/?item=289403/levi%20performing%20a%20camera%20inspection"
            data-item="i"
            data-key={289403}
          >
            <a
              className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
              href="javascript:void('Gallery')"
            >
              <img
                alt="Levi Performing a Camera Inspection"
                title="Levi Performing a Camera Inspection"
                src={cameraIns1Img}
              />
              <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
                Levi Performing a Camera Inspection
              </strong>
            </a>
          </li>
          <li
            className="photo fit "
            data-path="/images/photo-gallery/camera-inspections/Camera-inspection-Yosef.jpg"
            data-width={1280}
            data-height={1280}
            data-title="Yosef Performing a Camera Inspection"
            data-caption=""
            data-link="http://www.watermenplumbing.com/photo-gallery/camera-inspections/?item=289404/yosef%20performing%20a%20camera%20inspection"
            data-item="i"
            data-key={289404}
          >
            <a
              className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
              href="javascript:void('Gallery')"
            >
              <img
                alt="Yosef Performing a Camera Inspection"
                title="Yosef Performing a Camera Inspection"
                src={cameraIns2Img}
              />
              <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
                Yosef Performing a Camera Inspection
              </strong>
            </a>
          </li>
          <li
            className="photo fit "
            data-path="/images/photo-gallery/camera-inspections/Travis-Pic-doing-camera-inspection.jpg"
            data-width={480}
            data-height={640}
            data-title="Travis Performing a Camera Inspection"
            data-caption=""
            data-link="http://www.watermenplumbing.com/photo-gallery/camera-inspections/?item=289405/travis%20performing%20a%20camera%20inspection"
            data-item="i"
            data-key={289405}
          >
            <a
              className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
              href="javascript:void('Gallery')"
            >
              <img
                alt="Travis Performing a Camera Inspection"
                title="Travis Performing a Camera Inspection"
                src={cameraIns3Img}
              />
              <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
                Travis Performing a Camera Inspection
              </strong>
            </a>
          </li>
          <li
            className="photo fit "
            data-path="/images/photo-gallery/camera-inspections/Aligator-in-drain.jpg"
            data-width={748}
            data-height={748}
            data-title="Alligator in Drain"
            data-caption=""
            data-link="http://www.watermenplumbing.com/photo-gallery/camera-inspections/?item=289406/alligator%20in%20drain"
            data-item="i"
            data-key={289406}
          >
            <a
              className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
              href="javascript:void('Gallery')"
            >
              <img
                alt="Alligator in Drain"
                title="Alligator in Drain"
                src={cameraIns4Img}
              />
              <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
                Alligator in Drain
              </strong>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </main>
  
  )
}

export default CameraInspectionPhoto