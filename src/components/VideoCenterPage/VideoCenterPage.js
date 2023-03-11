import React from 'react'
import '../../style/videoCenter.css'
import tltBdrImg from '../../images/tlt-bdr.png'
import tltBdr2Img from '../../images/tlt-bdr2.png'
import subBannerBgImg from '../../images/sub-banner-v1-bg.jpg'
function VideoCenterPage() {
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
          src={subBannerBgImg}
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
              <h1>Video Center</h1>
              <img src={tltBdrImg} className="header-flair"/>
            </header>
            <div id="SystemBannerV1BtnCon"></div>
          </div>
        </div>
      </div>
    </section>
    <section
      className="video-system v1 parent small-padding light-bg bg-box-like svg-deco-bottom-hill-4 svg-deco-bottom-wave-bottom ui-repeater"
      id="VideoSystemV1Parent"
      data-onvisible="show"
    >
      <div className="main">
        <ul>
          <li
            className="bg-box side-padding vertical-padding-tiny flex-center"
            data-item="nr"
            data-key=""
          >
            <strong className="title-style-3 text-center">
              Sorry, there are no videos at this time. If you would like more
              information, <br />
              you can contact us at{" "}
              <span
                id="VideoSystemV1Parent_1"
                data-process="replace"
                data-replace="{F:P3:Cookie:PPCP1/954-800-6364}"
              >
                954-800-6364
              </span>
              . Thank you!
            </strong>
          </li>
        </ul>
      </div>
    </section>
  </main>
  
  )
}

export default VideoCenterPage