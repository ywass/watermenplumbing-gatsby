import React from 'react'
import '../../style/coupons.css'
import subBannerBgImg from '../../images/sub-banner-v1-bg.jpg'
import { Link } from 'gatsby'
function CouponsPage() {
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
            <h1>Coupons</h1>
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
    id="Form_CouponsSystemV2"
    method="post"
    encType="multipart/form-data"
    action="https://www.watermenplumbing.com/coupons/"
    data-search={1}
  >
    <input type="hidden" name="_m_" defaultValue="CouponsSystemV2" />
    <input
      type="hidden"
      className="ui-cms-input"
      id="CouponsSystemV2__edit_"
      name="CouponsSystemV2$_edit_"
      defaultValue=""
    />
    <input
      type="hidden"
      className="ui-cms-input"
      id="CouponsSystemV2__command_"
      name="CouponsSystemV2$_command_"
      defaultValue=""
    />
    <section
      className="coupons-system v2 light-bg bg-box-unlike col-50-50 items-touching text-center svg-deco-bottom-hill-4 svg-deco-bottom-wave-bottom ui-repeater ui-ajax"
      id="CouponsSystemV2"
      data-onvisible="show"
      data-loading="false"
      data-infinite="true"
      data-ajaxreplace="true"
      data-needspaging="false"
    >
      <input
        type="hidden"
        id="CouponsSystemV2_HDR0_ResultsPerPage"
        autoComplete="off"
        className="ui-cms-input"
        name="CouponsSystemV2$HDR0$ResultsPerPage"
        defaultValue={6}
        data-search="true"
      />
      <input
        type="hidden"
        id="CouponsSystemV2_HDR0_PagingID"
        autoComplete="off"
        className="ui-cms-input"
        name="CouponsSystemV2$HDR0$PagingID"
        defaultValue=""
        data-search="true"
      />
      <div className="main">
        <ul
          className="flex-grid-large-wrap-block-800 close-gap-800"
          data-role="tbody"
        >
        
          <li
            className="type-1 flex- coupon-style half border-radius"
            data-item="i"
            data-key={7622}
          >
            <div className="bg-box info flex-column-middle-center side-padding-large vertical-padding-small relative coupon-border pseudo-after text-center full">
              <picture className="img-bg" role="presentation">
                <source
                  media="(max-width: 500px)"
                  srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                  data-src="../images/coupons/Senoir%5b9%5d.jpg"
                />
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                  alt=""
                  data-src="../images/coupons/Senoir%5b9%5d.jpg"
                />
              </picture>
              <div className="relative flex-column full">
                <div className="fit full">
                  <strong className="full relative full title-style-1 title-color-1 title">
                    <strong>
                      10<small>%</small> Off
                    </strong>
                    <span className="relative title-style-2 title-color-2">
                      Veteran Discount
                    </span>
                  </strong>
                </div>
                <div className="fit full top-margin-tiny valid note-style">
                  <span>Valid from Jan 1, 2021</span>
                  <span>- Dec 31, 2022</span>
                </div>
                <div className="top-margin-small relative auto full">
                  <Link
                    className="btn v1"
                    href="#"
                    target="_blank"
                  >
                    Print
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li
            className="type-1 flex- coupon-style half border-radius"
            data-item="i"
            data-key={7223}
          >
            <div className="bg-box info flex-column-middle-center side-padding-large vertical-padding-small relative coupon-border pseudo-after text-center full">
              <picture className="img-bg" role="presentation">
                <source
                  media="(max-width: 500px)"
                  srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                  data-src="../images/coupons/Senoir%5b9%5d.jpg"
                />
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                  alt=""
                  data-src="../images/coupons/Senoir%5b9%5d.jpg"
                />
              </picture>
              <div className="relative flex-column full">
                <div className="fit full">
                  <strong className="full relative full title-style-1 title-color-1 title">
                    <strong>
                      10<small>%</small> Off
                    </strong>
                    <span className="relative title-style-2 title-color-2">
                      Senior Discount
                    </span>
                  </strong>
                </div>
                <p className="title-style-5 title-color-5 relative fit full top-margin-tiny no-bottom-margin description">
                  Call for more details!
                </p>
                <div className="fit full top-margin-tiny valid note-style">
                  <span>Valid from Nov 1, 2020</span>
                  <span>- Dec 31, 2022</span>
                </div>
                <div className="top-margin-small relative auto full">
                  <Link
                    className="btn v1"
                    href="#"
                    target="_blank"
                  >
                    Print
                  </Link>
                </div>
              </div>
            </div>
          </li>
         
        </ul>
      </div>
    </section>
  </form>
</main>

  )
}

export default CouponsPage