import React from 'react'
import '../../style/awardsAccolades.css'
import tltBdrImg from '../../images/tlt-bdr.png'
import tltBdr2Img from '../../images/tlt-bdr2.png'
import subBannerBgImg from '../../images/sub-banner-v1-bg.jpg'
import award1Img from '../../images/HomeAdvisor.png'
import award2Img from '../../images/toppng.png'
import award3Img from '../../images/BBB-Accredited.png'
import award4Img from '../../images/hiclipart.png'
import award5Img from '../../images/2018[1].png'
import award6Img from '../../images/HollywoodChamber-logo.png'
import award7Img from '../../images/flowtech.png'
import award8Img from '../../images/superhero.png'
function AwardsAccoladesPage() {
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
            <h1>Awards &amp; Accolades</h1>
            <img src={tltBdrImg} className="header-flair"/>
          </header>
          <div id="SystemBannerV1BtnCon"></div>
        </div>
      </div>
    </div>
  </section>
  <section
    className="awards-system v1 light-bg bg-box-like text-left ui-repeater"
    id="AwardsSystemV1"
    data-onvisible="show"
  >
    <div className="main">
      <ul>
        <li
          className="flex-block-800-margined-middle flex-direction "
          data-item="i"
          data-key={30661}
        >
          <div className="over-item flex-center-800 relative fit">
            <picture className="img staff-img full">
              <source
                media="(max-width: 500px)"
                srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                data-src="/images/awards/HomeAdvisor.png"
              />
              <img
                alt="Home Advisor Top Rated"
                title="Home Advisor Top Rated"
                src={award1Img}
              />
            </picture>
          </div>
          <div className="bg-box side-padding vertical-padding-small border-radius text-align center-800 under-item auto">
            <div className="overlap-padding">
              <h3>Home Advisor Top Rated</h3>
              <svg className="header-flair" role="presentation">
                <use href="../includes/flair.svg#header" />
              </svg>
            </div>
          </div>
        </li>
        <li
          className="flex-block-800-margined-middle flex-direction top-margin-large"
          data-item="i"
          data-key={30662}
        >
          <div className="over-item flex-center-800 relative fit">
            <picture className="img staff-img full">
              <source
                media="(max-width: 500px)"
                srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                data-src="/images/accolades/toppng.png"
              />
              <img
                alt="Homeadvisor -  Elite Service"
                title="Homeadvisor -  Elite Service"
                src={award2Img}
              />
            </picture>
          </div>
          <div className="bg-box side-padding vertical-padding-small border-radius text-align center-800 under-item auto">
            <div className="overlap-padding">
              <h3>Homeadvisor - Elite Service</h3>
              <svg className="header-flair" role="presentation">
                <use href="../includes/flair.svg#header" />
              </svg>
            </div>
          </div>
        </li>
        <li
          className="flex-block-800-margined-middle flex-direction top-margin-large"
          data-item="i"
          data-key={30663}
        >
          <div className="over-item flex-center-800 relative fit">
            <picture className="img staff-img full">
              <source
                media="(max-width: 500px)"
                srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                data-src="/images/awards/BBB-Accredited.png"
              />
              <img
                alt="BBB Accredited A+ Rating"
                title="BBB Accredited A+ Rating"
                src={award3Img}
              />
            </picture>
          </div>
          <div className="bg-box side-padding vertical-padding-small border-radius text-align center-800 under-item auto">
            <div className="overlap-padding">
              <h3>BBB Accredited A+ Rating</h3>
              <svg className="header-flair" role="presentation">
                <use href="../includes/flair.svg#header" />
              </svg>
            </div>
          </div>
        </li>
        <li
          className="flex-block-800-margined-middle flex-direction top-margin-large"
          data-item="i"
          data-key={30664}
        >
          <div className="over-item flex-center-800 relative fit">
            <picture className="img staff-img full">
              <source
                media="(max-width: 500px)"
                srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                data-src="/images/accolades/hiclipart.png"
              />
              <img
                alt="100% Guarantee"
                title="100% Guarantee"
                src={award4Img}
              />
            </picture>
          </div>
          <div className="bg-box side-padding vertical-padding-small border-radius text-align center-800 under-item auto">
            <div className="overlap-padding">
              <h3>100% Guarantee</h3>
              <svg className="header-flair" role="presentation">
                <use href="../includes/flair.svg#header" />
              </svg>
            </div>
          </div>
        </li>
        <li
          className="flex-block-800-margined-middle flex-direction top-margin-large"
          data-item="i"
          data-key={30993}
        >
          <div className="over-item flex-center-800 relative fit">
            <picture className="img staff-img full">
              <source
                media="(max-width: 500px)"
                srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                data-src="/images/accolades/2018[1].png"
              />
              <img
                alt="Superpro 2018"
                title="Superpro 2018"
                src={award5Img}
              />
            </picture>
          </div>
          <div className="bg-box side-padding vertical-padding-small border-radius text-align center-800 under-item auto">
            <div className="overlap-padding">
              <h3>Superpro 2018</h3>
              <svg className="header-flair" role="presentation">
                <use href="../includes/flair.svg#header" />
              </svg>
            </div>
          </div>
        </li>
        <li
          className="flex-block-800-margined-middle flex-direction top-margin-large"
          data-item="i"
          data-key={30994}
        >
          <div className="over-item flex-center-800 relative fit">
            <picture className="img staff-img full">
              <source
                media="(max-width: 500px)"
                srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                data-src="/images/accolades/HollywoodChamber-logo.png"
              />
              <img
                alt="Hollywood Chamber of Commerce"
                title="Hollywood Chamber of Commerce"
                src={award6Img}
              />
            </picture>
          </div>
          <div className="bg-box side-padding vertical-padding-small border-radius text-align center-800 under-item auto">
            <div className="overlap-padding">
              <h3>Hollywood Chamber of Commerce</h3>
              <svg className="header-flair" role="presentation">
                <use href="../includes/flair.svg#header" />
              </svg>
            </div>
          </div>
        </li>
        <li
          className="flex-block-800-margined-middle flex-direction top-margin-large"
          data-item="i"
          data-key={30995}
        >
          <div className="over-item flex-center-800 relative fit">
            <picture className="img staff-img full">
              <source
                media="(max-width: 500px)"
                srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                data-src="/images/accolades/flowtech.png"
              />
              <img
                alt="Certified Flow-tech expert"
                title="Certified Flow-tech expert"
                src={award7Img}
              />
            </picture>
          </div>
          <div className="bg-box side-padding vertical-padding-small border-radius text-align center-800 under-item auto">
            <div className="overlap-padding">
              <h3>Certified Flow-tech expert</h3>
              <svg className="header-flair" role="presentation">
                <use href="../includes/flair.svg#header" />
              </svg>
            </div>
          </div>
        </li>
        <li
          className="flex-block-800-margined-middle flex-direction top-margin-large"
          data-item="i"
          data-key={30996}
        >
          <div className="over-item flex-center-800 relative fit">
            <picture className="img staff-img full">
              <source
                media="(max-width: 500px)"
                srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                data-src="/images/accolades/superhero.png"
              />
              <img
                alt="Superpro House Call Pro"
                title="Superpro House Call Pro"
                src={award8Img}
              />
            </picture>
          </div>
          <div className="bg-box side-padding vertical-padding-small border-radius text-align center-800 under-item auto">
            <div className="overlap-padding">
              <h3>Superpro House Call Pro</h3>
              <svg className="header-flair" role="presentation">
                <use href="../includes/flair.svg#header" />
              </svg>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</main>

  )
}

export default AwardsAccoladesPage