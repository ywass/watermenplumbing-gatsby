import React from 'react'
import '../../../../style/sewerServices.css'
import subBannerBgImg from '../../../../images/sub-banner-v1-bg.jpg'
import senoirImg from '../../../../images/Senoir[9].jpg'
import letUsImg from '../../../../images/Let-us.jpg'
import stayLoopImg from '../../../../images/Stay-in-loop.jpg'
import saveServiceImg from '../../../../images/Save-on-service.jpg'
import ctaV13Bg from '../../../../images/cta-v13-bg.jpeg'
import tltBdrImg from '../../../../images/tlt-bdr.png'
import tltBdr2Img from '../../../../images/tlt-bdr2.png'
import PanelGroupImg from "../../../../images/values-v9-bg.jpg"
import PanelGroupMobImg from "../../../../images/values-v9-bg-mobile.jpg"
import valuesV9Img from '../../../../images/values-v9-img.png'
import ironFilterImg from '../../../../images/whole-house-iron-filter-500.png'
import pdfOne from '../../../../../static/productBrochures/Iron-Filter.pdf'
import { Link } from 'gatsby'
import AsideForm from '../../../../ReuseComponents/AsideForm/AsideForm'
function FourthWholeHouseProductPage() {
  return (
    <main id="MainZone">
    <section
      className="sub-banner v1 bg-image dark-bg bg-box-none text-left"
      id="SubBannerV1"
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
        <div
          className="bg-box side-padding-medium vertical-padding info text-align center-500 box-flair"
          id="SubBannerV1Info"
        >
          <div className="flair-border">
            <span className="flair-1" />
            <span className="flair-2" />
            <span className="title-font title-color-1">
              <strong>Flow-Tech Whole-House Iron Filter</strong>
            </span>
            <em className="title-color-2 subtitle">
              We’ll Treat Your Home as if It Were Our Own
            </em>
           <img src={tltBdrImg} className="header-flair"/>
          </div>
        </div>
      </div>
    </section>
    <section
      className="two-column-layout light-bg col-66-33 vertical-padding items-spaced flow-reverse transparent-bg large-padding"
      id="TwoColumnLayout"
    >
      <div className="main flex-spaced-between-block-1024-margined item-spacing item-widths flex-direction">
        <div className="content-zone" id="ContentZone">
          <div
            className="column-layout-content transparent-bg bg-box-none light-bg"
            id="ColumnLayoutContent"
            data-onvisible="show"
          >
            <div className="bg-box side-padding-medium vertical-padding-small box-flair border-radius">
              <div className="flair-border" data-content="true">
                <span className="flair-1" />
                <span className="flair-2" />
                <div
                  className="content-style"
                  id="MainContent"
                  data-content="true"
                >
                  <h1>Flow-Tech Whole-House Iron Filter</h1>
                  <h3>
                    Model(s):
                    <strong>109853 (standard) &amp; 109854 (large)</strong>
                  </h3>
                  <p>
                    <img
                      className="media-left media-small"
                      alt="Whole House Iron Filter 500"
                      src={ironFilterImg}
                    />
                    The Whole House Iron Filters are extremely effective in
                    removing high concentrations of iron, that is easily
                    identified by the orange stain seen in sinks &amp; toilets in
                    old homes with problematic well water. Another sign that you
                    may have high concentrations of iron in your water can easily
                    be determined based on how much water your water-using
                    appliances need to run simple cycles.
                  </p>
                  <p>
                    The innovative design of an iron filter uses an unique
                    air-injection filtering technology to oxidize sulfur or iron
                    into precipitates that can be readily filtered and removed.
                    One of the best things about these Iron filters is that they
                    are environmentally safe — no toxic chemicals are used like in
                    other filtration systems. Once installed, you will have
                    iron-free water from the tap, every time.
                  </p>
                  <h4>Size Options:</h4>
                  <ul>
                    <li>
                      10x54 Tank 1.5 Cubic Feet
                      <ul>
                        <li>up to 4 bathrooms</li>
                        <li>18 Gallons per minute peak flow rate</li>
                      </ul>
                    </li>
                    <li>
                      13x54 Tank 2.0 Cubic Feet
                      <ul>
                        <li>Up to 6 bathrooms</li>
                        <li>22 Gallons per minute peak flow rate</li>
                      </ul>
                    </li>
                  </ul>
                  <p style={{ textAlign: "center" }}>
                    <a
                      className="btn v1"
                      target="_blank"
                       href={pdfOne}
                    >
                      Product Brochure
                    </a>
                    <Link
                      className="btn v1"
                      to="/contact-us"
                    >
                      Contact Us
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="side-zone" id="SideZone">
          <aside
            className="side-nav v2 border-radius-item box-shadow dark-bg"
            id="SideNavV2"
            data-onvisible="show"
          >
            <nav>
              <header className="text-left">
                <Link to="/plumbing-services/water-filtration/water-filtration-products/whole-house-filtration-systems">
                  <h5>Whole House Filtration Systems</h5>
                </Link>
              </header>
              <ul className="el-tab-box" role="menu">
                <li className="level-1  ">
                  <Link
                    className="pseudo-before relative auto"
                    to="/plumbing-services/water-filtration/water-filtration-products/whole-house-filtration-systems/flow-tech-pure-cx-carbon-whole-house-w"
                    target=""
                    role="menuitem"
                  >
                    Flow-Tech Pure CX Carbon Whole-House Water Filter
                  </Link>
                </li>
                <li className="level-1  ">
                  <Link
                    className="pseudo-before relative auto"
                    to="/plumbing-services/water-filtration/water-filtration-products/whole-house-filtration-systems/flow-tech-pure-cs-carbon-whole-house-w"
                    target=""
                    role="menuitem"
                  >
                    Flow-Tech PURE CS Carbon Whole-House Water Filter
                  </Link>
                </li>
                <li className="level-1 selected ">
                  <Link
                    className="pseudo-before relative auto"
                    to="/plumbing-services/water-filtration/water-filtration-products/whole-house-filtration-systems/flow-tech-whole-house-iron-filter"
                    target=""
                    role="menuitem"
                  >
                    Flow-Tech Whole-House Iron Filter
                  </Link>
                </li>
                <li className="level-1  ">
                  <Link
                    className="pseudo-before relative auto"
                    to="/plumbing-services/water-filtration/water-filtration-products/whole-house-filtration-systems/flow-tech-home-sulfur-filter"
                    target=""
                    role="menuitem"
                  >
                    Flow-Tech Home Sulfur Filter
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
          <AsideForm/>
          <aside
            className="side-coupon v1 light-bg transparent-bg no-shadow bg-box-unlike"
            id="SideCouponV1"
            data-onvisible="show"
            data-role="scroller"
          >
            <div
              id="SideCouponV1List"
              className="ui-repeater"
              data-role="container"
            >
              <ul className="flex-" data-role="list">
                <li
                  className="flex- coupon-style full border-radius"
                  data-role="item"
                  data-item="i"
                  data-key={7622}
                >
                  <div className="bg-box info flex-column-middle-center side-padding-large vertical-padding relative coupon-border pseudo-after text-center full">
                    <picture className="img-bg" role="presentation">
                      <source
                        media="(max-width: 500px)"
                        srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                        data-src="../../../../../images/coupons/Senoir%5b9%5d.jpg"
                      />
                      <img
                        alt=""
                        src={senoirImg}
                      />
                    </picture>
                    <div className="full side-padding-small">
                      <strong className="title">
                        <strong className="title-font">
                          10<small>%</small> Off
                        </strong>
                        <span className="title-style-2 title-color-2">
                          Veteran Discount
                        </span>
                      </strong>
                      <div className="top-margin-tiny valid note-style">
                        <small>Valid from Jan 1, 2021</small>
                        <small>- Dec 31, 2022</small>
                      </div>
                      <div className="top-margin-small auto full">
                        <Link
                          className="btn v1"
                          to="/coupons"
                          target="_blank"
                        >
                          Print
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className="flex- coupon-style full border-radius"
                  data-role="item"
                  data-item="i"
                  data-key={7223}
                >
                  <div className="bg-box info flex-column-middle-center side-padding-large vertical-padding relative coupon-border pseudo-after text-center full">
                    <picture className="img-bg" role="presentation">
                      <source
                        media="(max-width: 500px)"
                        srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                        data-src="../../../../../images/coupons/Senoir%5b9%5d.jpg"
                      />
                      <img
                        alt=""
                        src={senoirImg}
                      />
                    </picture>
                    <div className="full side-padding-small">
                      <strong className="title">
                        <strong className="title-font">
                          10<small>%</small> Off
                        </strong>
                        <span className="title-style-2 title-color-2">
                          Senior Discount
                        </span>
                      </strong>
                      <p className="title-style-5 title-color-5 top-margin-tiny no-bottom-margin description">
                        Call for more details!
                      </p>
                      <div className="top-margin-tiny valid note-style">
                        <small>Valid from Nov 1, 2020</small>
                        <small>- Dec 31, 2022</small>
                      </div>
                      <div className="top-margin-small auto full">
                        <Link
                          className="btn v1"
                          to="/coupons"
                          target="_blank"
                        >
                          Print
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div
                className="scrolling-list-nav top-margin horizontal flex-middle-center relative text-center"
                data-role="arrows"
              >
                <button
                  title="View previous item"
                  aria-label="View previous item"
                  data-action="Prev"
                >
                  <svg className="site-arrow">
                    <use href="../../../../../includes/flair.svg#arrow-left" />
                  </svg>
                </button>
                <span className="paging" data-role="paging">
                  <span data-role="page-active" /> /{" "}
                  <span data-role="page-total" />
                </span>
                <button
                  title="View next item"
                  aria-label="View next item"
                  data-action="Next"
                >
                  <svg className="site-arrow">
                    <use href="../../../../../includes/flair.svg#arrow-right" />
                  </svg>
                </button>
              </div>
              <div id="SideCouponV1BtnCon"></div>
            </div>
          </aside>
        </div>
      </div>
    </section>
    <section
      className="cta v13 light-bg text-left bg-image bg-box-unlike"
      id="CtaV13"
      data-onvisible="show"
    >
      <picture
        className="img-bg bg-position"
        role="presentation"
        data-role="picture"
      >
        <source
          media="(max-width: 500px)"
          srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          data-src="../../../../../assets/ctas/cta-v13-bg-mobile.jpg"
        />
        <source
          media="(max-width: 800px)"
          srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          data-src="../../../../../assets/ctas/cta-v13-bg-tablet.jpg"
        />
        <img
          alt=""
          src={ctaV13Bg}
        />
      </picture>
      <div className="main">
        <header className="text-align center-800" id="CtaV13Header" />
        <ul
          className="cta-list flex-grid-center-block-800-auto-size-wrap-max-3-break-1024 close-gap-800 text-align"
          id="CtaV13List"
        >
          <li className="flex- fit" data-item="i">
            <Link
              className="bg-box scaling-img-item border-radius-item side-padding-medium vertical-padding-small text-center full"
              to="/photo-gallery"
            >
              <div className="img pad-height- bottom-margin">
                <img
                  style={{
                    backgroundImage: `url(${letUsImg})`
                  }}
                  alt=""
                  role="presentation"
                />
              </div>
              <div className="info">
                <strong className="title-style-2 title-color-2">
                  See Us In Action
                </strong>
                <span className="btn v1 top-margin-small">View Our Gallery</span>
              </div>
            </Link>
          </li>
          <li className="flex- fit" data-item="i">
            <Link
              className="bg-box scaling-img-item border-radius-item side-padding-medium vertical-padding-small text-center full"
              to="/blog"
            >
              <div className="img pad-height- bottom-margin">
                <img
                  style={{
                    backgroundImage:`url(${stayLoopImg})`
                  }}
                  alt=""
                  role="presentation"
                />
              </div>
              <div className="info">
                <strong className="title-style-2 title-color-2">
                  Stay In The Loop
                </strong>
                <span className="btn v1 top-margin-small">Read Our bLogs</span>
              </div>
            </Link>
          </li>
          <li className="flex- fit" data-item="i">
            <Link
              className="bg-box scaling-img-item border-radius-item side-padding-medium vertical-padding-small text-center full"
              to="/coupons"
            >
              <div className="img pad-height- bottom-margin">
                <img
                  style={{
                    backgroundImage:`url(${saveServiceImg})`
                  }}
                  alt=""
                  role="presentation"
                />
              </div>
              <div className="info">
                <strong className="title-style-2 title-color-2">
                  Save On Services
                </strong>
                <span className="btn v1 top-margin-small">View our Offers</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
    <section
      className="values v9 light-bg text-center bg-box-none vertical-top bg-image"
      id="ValuesV9"
      data-onvisible="show"
    >
      <Link name="valuesAnchor" />
      <picture className="img-bg" role="presentation" data-role="picture">
        <source
          media="(max-width: 500px)"
          srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          data-src="../../../../../assets/values/values-v9-bg-mobile.jpg"
        />
        <img
          alt=""
          title=""
          src={PanelGroupImg}
        />
      </picture>
      <div className="main relative">
        <header className="text-align center-500" id="ValuesV9Header">
          <h4>Why Customers Choose Us?</h4>
          <strong>We Believe That Only the Best Is Good Enough, For You!</strong>
          <img src={tltBdr2Img} className="header-flair"/>
        </header>
        <div className="relative vertical-padding">
          <ul
            className="values-list flex-wrap-block-1280-spaced-between ui-repeater"
            id="ValuesV9List"
          >
            <li
              className="flex-block-500 align-items center-500 top-margin-large "
              data-item="i"
              data-key={15797}
            >
              <span className="ico-con">
                <svg
                  viewBox="0 0 24 24"
                  className="values-icon"
                  role="presentation"
                >
                  <use data-href="../../../../../cms/svg/site/ykmkv4_n6ok.24.svg#saftey" />
                </svg>
              </span>
              <div className="info">
                <strong className="title-style-4 title-color-4">
                  Customer &amp; Employee Safety First
                </strong>
                <p>
                  We truly care about the health and safety of our staff and
                  customers. We wear full PPE gear to ensure everyone is
                  protected.
                </p>
              </div>
            </li>
            <li
              className="flex-block-500 align-items center-500 top-margin-large "
              data-item="i"
              data-key={15796}
            >
              <span className="ico-con">
                <svg
                  viewBox="0 0 24 24"
                  className="values-icon"
                  role="presentation"
                >
                  <use data-href="../../../../../cms/svg/site/ykmkv4_n6ok.24.svg#knowledge" />
                </svg>
              </span>
              <div className="info">
                <strong className="title-style-4 title-color-4">
                  Knowledgeable &amp; Skilled Technicians
                </strong>
                <p />
                <p>
                  Our technicians undergo weekly continuing education classes and
                  are tested weekly to ensure quality control, and customer
                  satisfaction.
                </p>
                <p />
              </div>
            </li>
            <li
              className="flex-block-500 align-items center-500 top-margin-large "
              data-item="i"
              data-key={15795}
            >
              <span className="ico-con">
                <svg
                  viewBox="0 0 24 24"
                  className="values-icon"
                  role="presentation"
                >
                  <use data-href="../../../../../cms/svg/site/ykmkv4_n6ok.24.svg#honest" />
                </svg>
              </span>
              <div className="info">
                <strong className="title-style-4 title-color-4">
                  Reliable Honest Company
                </strong>
                <p>
                  We provide peace of mind and stand behind our work with a 1-year
                  warranty.
                </p>
              </div>
            </li>
            <li
              className="flex-block-500 align-items center-500 top-margin-large "
              data-item="i"
              data-key={15794}
            >
              <span className="ico-con">
                <svg
                  viewBox="0 0 24 24"
                  className="values-icon"
                  role="presentation"
                >
                  <use data-href="../../../../../cms/svg/site/ykmkv4_n6ok.24.svg#truck" />
                </svg>
              </span>
              <div className="info">
                <strong className="title-style-4 title-color-4">
                  Fully Stocked Trucks
                </strong>
                <p>
                  With the latest plumbing technology at our disposal, our team is
                  prepared to handle your job in one trip.
                </p>
              </div>
            </li>
          </ul>
          <picture
            className="img bg-position"
            role="presentation"
            data-role="picture"
          >
            <source
              media="(max-width: 500px)"
              srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              data-src="../../../../../assets/values/values-v9-img-mobile.png"
            />
            <img
              alt=""
              src={valuesV9Img}
            />
          </picture>
        </div>
      </div>
    </section>
  </main>
  
  
  )
}

export default FourthWholeHouseProductPage