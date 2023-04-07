import React from 'react'
import '../../../style/areaWeServe.css'
import subBannerBgImg from '../../../images/sub-banner-v1-bg.jpg'
import senoirImg from '../../../images/Senoir[9].jpg'
import letUsImg from '../../../images/Let-us.jpg'
import stayLoopImg from '../../../images/Stay-in-loop.jpg'
import saveServiceImg from '../../../images/Save-on-service.jpg'

import ctaV13Bg from '../../../images/cta-v13-bg.jpeg'
import tltBdrImg from '../../../images/tlt-bdr.png'
import tltBdr2Img from '../../../images/tlt-bdr2.png'
import PanelGroupImg from "../../../images/values-v9-bg.jpg"

import valuesV9Img from '../../../images/values-v9-img.png'
import { Link } from 'gatsby'
import AsideForm from '../../../ReuseComponents/AsideForm/AsideForm'
function PlantationArea() {
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
              <strong>Plantation</strong>
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
                  <h1>Quality Plumbing Services in Plantation</h1>
                  <h2>Watermen Plumbing Inc. is a Name You Can Trust!</h2>
                  <p>
                    Our professional plumbers serving Plantation are trained to
                    provide you with all the residential and commercial plumbing
                    services that you could possibly need to keep your home or
                    office running smoothly. We pride ourselves on offering
                    superior customer service that always comes with a smile. Our
                    customer service representatives are available to answer any
                    questions you might have about our services or to schedule
                    service for you. You can reach one of our representatives by
                    calling 954-800-6364.
                  </p>
                  <p>
                    <b>
                      We offer many different types of plumbing services,
                      including:
                    </b>
                  </p>
                  <ul>
                    <li>
                      <a href="/plumbing-services/bathroom-plumbing-renovation-upgrade">
                        Complete &amp; partial remodels
                      </a>
                    </li>
                    <li>
                      <a href="/plumbing-services/custom-home-plumbing">
                        Full-service plumbing installation
                      </a>
                    </li>
                    <li>
                      <a href="/plumbing-services/tankless-gas-water-heater">
                        Tankless water heaters
                      </a>
                    </li>
                    <li>Commercial &amp; residential plumbing repairs</li>
                    <li>
                      <a href="/plumbing-services/drain-issues">
                        Drain cleaning &amp; clearing services
                      </a>
                    </li>
                    <li>
                      <a href="/plumbing-services/leak-detection-repair">
                        Leak detection &amp; repair services
                      </a>
                    </li>
                    <li>Faucet repair/installation/replacement</li>
                  </ul>
                  <p>
                    When you hire Watermen Plumbing Inc., you can relax knowing
                    your project is in the hands of experienced professionals.
                    We’re so confident in our work, we even offer a 1-year
                    worry-free guarantee!
                  </p>
                  <h2>How to Tell If Your Home’s Plumbing Has a Mystery Leak</h2>
                  <p>
                    Water is constantly moving through the plumbing behind walls,
                    under floors, and even in your backyard. This means there can
                    always be leaks which are worse than you’d think. Water may be
                    present in one area but often will be coming from an entirely
                    different location (leaks can travel). With our experience and
                    extensive knowledge of how the plumbing system works we can
                    faster locate and repair leaks, with minimal damage to your
                    home!
                  </p>
                  <p>
                    Here's what to watch for if you suspect your plumbing sprung a
                    leak:
                  </p>
                  <ul>
                    <li>
                      <b>Compare water bills: </b>Compare this month’s utility
                      bill to last month’s. Is it noticeably higher? Leaky
                      plumbing might be at fault.
                    </li>
                    <li>
                      <b>Watch your water meter: </b>First, turn off all the water
                      in your house including any lawn or garden irrigation. Next,
                      look at the meter’s leak indicator. It’s a little wheel on
                      the face of the unit. If it’s spinning, your home is using
                      water. That means you have a leak.
                    </li>
                    <li>
                      <b>Inspect for warm or wet spots on the floor: </b>Warm or
                      damp spots on your floor indicate a slab leak. This means
                      pipes in the foundation of the home have a pinhole leak.
                    </li>
                    <li>
                      <b>Listen for a hissing sound: </b>Hissing is typically a
                      sign of high-water pressure, which can cause leaks in
                      plumbing fixtures. Residential water lines should have a
                      pressure between 45-80 pounds per square inch.
                    </li>
                  </ul>
                  <p>
                    Leaks not only waste water (and money), but they’re also
                    destructive, causing mold, mildew and water damage. In extreme
                    cases, they can even damage your home’s foundation. We help
                    homeowners find and fix those pesky leaks!
                  </p>
                  <h2>Rely on Watermen Plumbing Inc.</h2>
                  <p>
                    Since the beginning, we have focused on expert solutions and
                    customer service. Our specialists and master plumbers know the
                    industry inside and out, and we never leave a job until we’re
                    certain the problem has been solved. As a detailed-oriented
                    group of problem solvers, we know how to manage your job from
                    beginning to end, including installation, inspection, cleaning
                    up, and after care.
                  </p>
                  <p align="center">
                    <b>
                      You deserve better plumbing!
                      <a href="/contact-us"> Contact Watermen Plumbing Inc.
                      </a>{" "}
                      today!
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
                <a href="/about-us/areas-we-serve">
                  <h5>Areas We Serve</h5>
                </a>
              </header>
              <ul className="el-tab-box" role="menu">
                <li className="level-1  ">
                  <a
                    className="pseudo-before relative auto"
                    href="/about-us/areas-we-serve/broward-county"
                    target=""
                    role="menuitem"
                  >
                    Broward County
                  </a>
                </li>
                <li className="level-1  ">
                  <a
                    className="pseudo-before relative auto"
                    href="/about-us/areas-we-serve/coral-springs"
                    target=""
                    role="menuitem"
                  >
                    Coral Springs
                  </a>
                </li>
                <li className="level-1  ">
                  <a
                    className="pseudo-before relative auto"
                    href="/about-us/areas-we-serve/davie"
                    target=""
                    role="menuitem"
                  >
                    Davie
                  </a>
                </li>
                <li className="level-1  ">
                  <a
                    className="pseudo-before relative auto"
                    href="/about-us/areas-we-serve/fort-lauderdale"
                    target=""
                    role="menuitem"
                  >
                    Fort Lauderdale
                  </a>
                </li>
                <li className="level-1  ">
                  <a
                    className="pseudo-before relative auto"
                    href="/about-us/areas-we-serve/hollywood"
                    target=""
                    role="menuitem"
                  >
                    Hollywood
                  </a>
                </li>
                <li className="level-1  ">
                  <a
                    className="pseudo-before relative auto"
                    href="/about-us/areas-we-serve/miramar"
                    target=""
                    role="menuitem"
                  >
                    Miramar
                  </a>
                </li>
                <li className="level-1 selected ">
                  <a
                    className="pseudo-before relative auto"
                    href="/about-us/areas-we-serve/plantation"
                    target=""
                    role="menuitem"
                  >
                    Plantation
                  </a>
                </li>
                <li className="level-1  ">
                  <a
                    className="pseudo-before relative auto"
                    href="/about-us/areas-we-serve/hallandale-beach"
                    target=""
                    role="menuitem"
                  >
                    Hallandale Beach
                  </a>
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
                        <a
                          className="btn v1"
                          href="/coupons"
                          target="_blank"
                        >
                          Print
                        </a>
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
                        <a
                          className="btn v1"
                          href="/coupons"
                          target="_blank"
                        >
                          Print
                        </a>
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
            <a
              className="bg-box scaling-img-item border-radius-item side-padding-medium vertical-padding-small text-center full"
              href="/photo-gallery"
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
            </a>
          </li>
          <li className="flex- fit" data-item="i">
            <a
              className="bg-box scaling-img-item border-radius-item side-padding-medium vertical-padding-small text-center full"
              href="/blog"
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
            </a>
          </li>
          <li className="flex- fit" data-item="i">
            <a
              className="bg-box scaling-img-item border-radius-item side-padding-medium vertical-padding-small text-center full"
              href="/coupons"
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
            </a>
          </li>
        </ul>
      </div>
    </section>
    <section
      className="values v9 light-bg text-center bg-box-none vertical-top bg-image"
      id="ValuesV9"
      data-onvisible="show"
    >
      <a name="valuesAnchor" />
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

export default PlantationArea