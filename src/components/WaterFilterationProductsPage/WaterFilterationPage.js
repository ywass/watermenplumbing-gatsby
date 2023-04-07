import React from 'react'
import '../../style/sewerServices.css'
import subBannerBgImg from '../../images/sub-banner-v1-bg.jpg'
import senoirImg from '../../images/Senoir[9].jpg'
import letUsImg from '../../images/Let-us.jpg'
import stayLoopImg from '../../images/Stay-in-loop.jpg'
import saveServiceImg from '../../images/Save-on-service.jpg'

import tltBdrImg from '../../images/tlt-bdr.png'
import tltBdr2Img from '../../images/tlt-bdr2.png'
import PanelGroupImg from "../../images/values-v9-bg.jpg"
import PanelGroupMobImg from "../../images/values-v9-bg-mobile.jpg"
import valuesV9Img from '../../images/values-v9-img.png'
import ctaV13Bg from '../../images/cta-v13-bg.jpeg'
import wholeHouseThumb from '../../images/Whole-House-Filter-Thumbnail.jpg'
import rosThumb from '../../images/ROS-thumbnail.png'
import softThumb from '../../images/softener-500-thumbnail.png'
import antiThumb from '../../images/anti-scale-thumbnail.png'
import filterThumb from '../../images/filter-tank-500-thumbnail.png'
import uvFilter from '../../images/uv-filter.jpg'
import { Link } from 'gatsby'
import AsideForm from '../../ReuseComponents/AsideForm/AsideForm'
function WaterFilterationProductsPage() {
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
            <strong>Water Filtration Products</strong>
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
                <h1>Water Filtration Products in Boca Raton</h1>
                <p>
                  At
                  <Link to="/about-us"> Watermen Plumbing Inc.
                  </Link>
                  , we consider ourselves South Florida’s premier
                  <Link to="/plumbing-services"> plumbing services</Link> provider, and
                  we couldn’t be the best without providing the best products.
                  In addition to being punctual, respectful and knowledgeable,
                  we use top-of-the-line products from Plumber’s Choice.
                </p>
                <p>
                  Since 2015, our professional, prompt and reliable plumbers
                  have specialized in both plumbing and water filtration. We
                  make sure your repairs and upgrades last, and we couldn’t do
                  that without the products on this page.
                </p>
                <p>
                  <b>
                    To learn more about the elite plumbing services we offer and
                    the products we provide, please call us at{" "}
                    <span
                      id="ColumnLayoutContent_1"
                      data-process="replace"
                      data-replace="{F:P:Cookie:PPCP1/(954)%20800-6364}"
                    > (954) 800-6364
                    </span>{" "}
                    today.
                  </b>
                </p>
                <h2>Our Products</h2>
                <p className="cf">
                  <b>
                    <img
                      className="media-left"
                      alt="Whole House Filter Thumbnail"
                      src={wholeHouseThumb}
                    />
                    Whole House Filtration Systems:
                  </b>{" "}
                  Fish and frogs are sensitive to the water they live in, so why
                  shouldn’t you be? Our whole house filters and filtration
                  systems remove the undesirable chemicals, disinfectant
                  by-products and organic contaminants found in tap water – in
                  every room of your house.
                  <br />
                  <Link to="/plumbing-services/water-filtration/water-filtration-products/whole-house-filtration-systems"> View Products
                  </Link>
                </p>
                <p className="cf">
                  <b>
                    <img
                      className="media-left"
                      alt="ROS Thumbnail"
                      src={rosThumb}
                    />
                    Drinking Water Systems:
                  </b>{" "}
                  For crisp drinking water, tea, coffee, ice cubes and juice,
                  explore our selection of drinking water systems. With brands
                  like AlwaysFresh®, you can have tap water without that
                  unpleasant taste and order of chlorine, and some units slide
                  right underneath your sink.
                  <br />
                  <Link to="/plumbing-services/water-filtration/water-filtration-products/drinking-water-systems"> View Products</Link>
                </p>
                <p className="cf">
                  <b>
                    <img
                      className="media-left"
                      alt="Softener 500 Thumbnail"
                      src={softThumb}
                    />
                    Water Softeners:{" "}
                  </b>
                  When water contains a high amount of dissolved mineral
                  content, it is considered “hard,” and you might be able to
                  tell via stains on your dishes and lime scale buildup. Water
                  softeners are similar to anti-scale systems because they help
                  these stains and buildup disappear. Explore our selection of
                  water softeners and combination products.
                  <br />
                  <Link to="/plumbing-services/water-filtartion/water-filtration-products/water-softeners"> View Products</Link>
                </p>
                <p className="cf">
                  <b>
                    <img
                      className="media-left"
                      alt="Anti Scale Thumbnail"
                      src={antiThumb}
                    />
                    Anti-Scale Systems:{" "}
                  </b>
                  Lime scale clogs pipes, makes your water heater less effective
                  and leaves rings on your tub, fixtures and even dishes. With
                  products like the Flow-Tech Home MAX Anti-Scale System, we can
                  help you improve flow, efficiency, and cleanliness throughout
                  your entire home.
                  <br />
                  <Link to="/plumbing-services/water-filtration/water-filtration-products/anti-scale-systems"> View Products</Link>
                </p>
                <p className="cf">
                  <b>
                    <img
                      className="media-left"
                      alt="Filter Tank 500 Thumbnail"
                      src={filterThumb}
                    />
                    Filter Tanks:{" "}
                  </b>
                  If you’re already using filters, and you’re tired of replacing
                  them, consider a filter tank instead. Filter tanks work just
                  like filters, but you won’t have to replace them as often.
                  <br />
                  <Link to="/plumbing-services/water-filtration/water-filtration-products/filter-tanks"> View Products</Link>
                </p>
                <p className="cf">
                  <b>
                    <img
                      className="media-left"
                      alt="Filter Tank 500 Thumbnail"
                      width={167}
                      height={132}
                      src={uvFilter}
                    />
                    UV Filter:{" "}
                  </b>
                  UV filtration utilizes products that either emit UV light or
                  those that absorb them. It will then be used as a filter for
                  the water because the UV light will eliminate bacteria,
                  viruses, parasites, and cysts. The commonly used treatment for
                  tap water is chlorine.
                  <br />
                  <Link to="/plumbing-services/water-filtration/water-filtration-products/filter-tanks"> View Products</Link>
                </p>
                <p className="cf">
                  <b>Flo by Moen: </b>Bring smart plumbing to your home with Flo
                  by Moen. This Smart Home system is the first water security
                  system that monitors and protects your home from leaks and
                  water damage with a single smart water valve, no additional
                  sensors needed. Designed by plumbing and tech industry
                  professionals, Flo by Moen is installed on the main water
                  supply line of the home. Through the Flo by Moen mobile app or
                  your web browser, you can see live water use, including water
                  flow rates, pressure and even temperature. If the smart water
                  valve detects an issue (e.g. high pressure, freezing water or
                  a small leak) it will alert you through the app so you can fix
                  it before that issue causes damage. If there's a catastrophic
                  failure, like a burst pipe or someone leaves the water
                  running, you'll be alerted in the app allowing you to shut the
                  water off - no matter where you are.
                  <br />
                  View Products
                </p>
                <p
                  style={{ textAlign: "center" }}
                  className="text-highlight v1 bg-box unlike-bg side-padding-medium vertical-padding-tiny"
                >
                  <b>
                    Call our expert team at{" "}
                    <span
                      id="ColumnLayoutContent_2"
                      data-process="replace"
                      data-replace="{F:P:Cookie:PPCP1/(954)%20800-6364}"
                    > (954) 800-6364
                    </span>{" "}
                    or
                    <Link to="/contact-us"> send us your information
                    </Link>{" "}
                    online so we can find the brand and product that works best
                    for you and send our fully stocked trucks and reliable
                    technicians out for professional installation.
                  </b>
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
              <Link to="/plumbing-services/water-filtration/water-filtration-products">
                <h5> Water Filtration Products</h5>
              </Link>
            </header>
            <ul className="el-tab-box" role="menu">
              <li className="level-1  active-children flex-between-middle-wrap">
                <Link
                  className="pseudo-before relative auto"
                  to="/plumbing-services/water-filtration/water-filtration-products/whole-house-filtration-systems"
                  target=""
                  role="menuitem"
                >
                  Whole House Filtration Systems
                </Link>
                <svg
                  className="site-arrow el-tab  relative right-margin-tiny"
                  title="Open child menu of Whole House Filtration Systems"
                >
                  <use href="../../../includes/flair.svg#arrow-down" />
                </svg>
                <ul className="inner-list el-panel sliding ">
                  <li className="level-2  ">
                    <Link
                      className="pseudo-before relative auto"
                      to="/plumbing-services/water-filtration/water-filtration-products/whole-house-filtration-systems/flow-tech-pure-cx-carbon-whole-house-w"
                      target=""
                      role="menuitem"
                    >
                      Flow-Tech Pure CX Carbon Whole-House Water Filter
                    </Link>
                  </li>
                  <li className="level-2  ">
                    <Link
                      className="pseudo-before relative auto"
                      to="/plumbing-services/water-filtration/water-filtration-products/whole-house-filtration-systems/flow-tech-pure-cs-carbon-whole-house-w"
                      target=""
                      role="menuitem"
                    >
                      Flow-Tech PURE CS Carbon Whole-House Water Filter
                    </Link>
                  </li>
                  <li className="level-2  ">
                    <Link
                      className="pseudo-before relative auto"
                      to="/plumbing-services/water-filtration/water-filtration-products/whole-house-filtration-systems/flow-tech-whole-house-iron-filter"
                      target=""
                      role="menuitem"
                    >
                      Flow-Tech Whole-House Iron Filter
                    </Link>
                  </li>
                  <li className="level-2  ">
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
              </li>
              <li className="level-1  active-children flex-between-middle-wrap">
                <Link
                  className="pseudo-before relative auto"
                  to="/plumbing-services/water-filtration/water-filtration-products/drinking-water-systems"
                  target=""
                  role="menuitem"
                >
                  Drinking Water Systems
                </Link>
                <svg
                  className="site-arrow el-tab  relative right-margin-tiny"
                  title="Open child menu of Drinking Water Systems"
                >
                  <use href="../../../includes/flair.svg#arrow-down" />
                </svg>
                <ul className="inner-list el-panel sliding ">
                  <li className="level-2  ">
                    <Link
                      className="pseudo-before relative auto"
                      to="/plumbing-services/water-filtration/water-filtration-products/drinking-water-systems/alwaysfresh-drinking-water-system"
                      target=""
                      role="menuitem"
                    >
                      AlwaysFresh® Drinking Water System
                    </Link>
                  </li>
                  <li className="level-2  ">
                    <Link
                      className="pseudo-before relative auto"
                      to="/plumbing-services/water-filtration/water-filtration-products/drinking-water-systems/reverse-osmosis-drinking-water-system"
                      target=""
                      role="menuitem"
                    >
                      Reverse Osmosis Drinking Water System
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="level-1  active-children flex-between-middle-wrap">
                <Link
                  className="pseudo-before relative auto"
                  to="/plumbing-services/water-filtration/water-filtration-products/water-softeners"
                  target=""
                  role="menuitem"
                >
                  Water Softeners
                </Link>
                <svg
                  className="site-arrow el-tab  relative right-margin-tiny"
                  title="Open child menu of Water Softeners"
                >
                  <use href="../../../includes/flair.svg#arrow-down" />
                </svg>
                <ul className="inner-list el-panel sliding ">
                  <li className="level-2  ">
                    <Link
                      className="pseudo-before relative auto"
                      to="/plumbing-services/water-filtration/water-filtration-products/water-softeners/flow-tech-dual-function-softener-filter"
                      target=""
                      role="menuitem"
                    >
                      Flow-Tech Dual Function Softener/Filter
                    </Link>
                  </li>
                  <li className="level-2  ">
                    <Link
                      className="pseudo-before relative auto"
                      to="/plumbing-services/water-filtration/water-filtration-products/water-softeners/flow-tech-ion-exchange-water-softener"
                      target=""
                      role="menuitem"
                    >
                      Flow-Tech Ion Exchange Water Softener
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="level-1  active-children flex-between-middle-wrap">
                <Link
                  className="pseudo-before relative auto"
                  to="/plumbing-services/water-filtration/water-filtration-products/anti-scale-systems"
                  target=""
                  role="menuitem"
                >
                  Anti-Scale Systems
                </Link>
                <svg
                  className="site-arrow el-tab  relative right-margin-tiny"
                  title="Open child menu of Anti-Scale Systems"
                >
                  <use href="../../../includes/flair.svg#arrow-down" />
                </svg>
                <ul className="inner-list el-panel sliding ">
                  <li className="level-2  ">
                    <Link
                      className="pseudo-before relative auto"
                      to="/plumbing-services/water-filtration/water-filtration-products/anti-scale-systems/flow-tech-home-max-anti-scale-system"
                      target=""
                      role="menuitem"
                    >
                      Flow-Tech Home MAX Anti-Scale System
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="level-1  active-children flex-between-middle-wrap">
                <Link
                  className="pseudo-before relative auto"
                  to="/plumbing-services/water-filtration/water-filtration-products/filter-tanks"
                  target=""
                  role="menuitem"
                >
                  Filter Tanks
                </Link>
                <svg
                  className="site-arrow el-tab  relative right-margin-tiny"
                  title="Open child menu of Filter Tanks"
                >
                  <use href="../../../includes/flair.svg#arrow-down" />
                </svg>
                <ul className="inner-list el-panel sliding ">
                  <li className="level-2  ">
                    <Link
                      className="pseudo-before relative auto"
                      to="/plumbing-services/water-filtration/water-filtration-products/filter-tanks/one-cartridge-filter-tank"
                      target=""
                      role="menuitem"
                    >
                      One™ Cartridge Filter Tank
                    </Link>
                  </li>
                </ul>
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
                      data-src="/images/coupons/Senoir[9].jpg"
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
                      data-src="/images/coupons/Senoir[9].jpg"
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
                  <use href="../../../includes/flair.svg#arrow-left" />
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
                  <use href="../../../includes/flair.svg#arrow-right" />
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
        data-src="/assets/ctas/cta-v13-bg-mobile.jpg"
      />
      <source
        media="(max-width: 800px)"
        srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        data-src="/assets/ctas/cta-v13-bg-tablet.jpg"
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
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
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
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                style={{
                  backgroundImage:  `url(${stayLoopImg})`
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
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                style={{
                  backgroundImage:
                  `url(${saveServiceImg})`
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
        data-src="../../../assets/values/values-v9-bg-mobile.jpg"
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
                <use data-href="../../../cms/svg/site/ykmkv4_n6ok.24.svg#saftey" />
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
                <use data-href="../../../cms/svg/site/ykmkv4_n6ok.24.svg#knowledge" />
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
                <use data-href="../../../cms/svg/site/ykmkv4_n6ok.24.svg#honest" />
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
                <use data-href="../../../cms/svg/site/ykmkv4_n6ok.24.svg#truck" />
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
            data-src="../../../assets/values/values-v9-img-mobile.png"
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

export default WaterFilterationProductsPage