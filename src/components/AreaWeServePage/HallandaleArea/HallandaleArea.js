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
import AsideForm from '../../../ReuseComponents/AsideForm/AsideForm'
import valuesV9Img from '../../../images/values-v9-img.png'
import { Link } from 'gatsby'
function HallandaleArea() {
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
              <strong>Hallandale Beach</strong>
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
                  <h1>Plumbing Services in Hallandale Beach</h1>
                  <h2>Expert Plumbers in Your Neighborhood</h2>
                  <p>
                    At
                    <Link to="/"> Watermen Plumbing</Link>, we are proud
                    to offer expert plumbing services in Hallandale Beach and
                    beyond. With a 100% satisfaction guarantee, you can trust our
                    team to deliver the results you expect, and then some! “When
                    your plumbing needs care, trust Watermen to be there.”
                  </p>
                  <p>
                    <strong>
                      Contact our Hallandale Beach plumbers today at
                      <Link
                        to="tel:(954) 800-6364"
                        id="ColumnLayoutContent_1"
                        data-replace-href="tel:{F:P:Cookie:PPCP1/(954)%20800-6364}"
                      >
                        <span
                          id="ColumnLayoutContent_2"
                          data-process="replace"
                          data-replace="{F:P:Cookie:PPCP1/(954)%20800-6364}"
                        > (954) 800-6364
                        </span>
                      </Link>{" "}
                      to schedule your plumbing appointment.
                    </strong>
                  </p>
                  <h2>Do I Need a Plumber?</h2>
                  <p>
                    Homeowners often hesitate to call a professional, preferring
                    to tackle the jobs on our own, in the interest of saving
                    money, or because we don’t think the problem is really that
                    serious. However, certain jobs require a trained professional,
                    including most plumbing repairs and installations. There are a
                    few signs that indicate a plumber should take a look at the
                    problem.
                  </p>
                  <p>
                    <b>You should call a Hallandale Beach plumber when:</b>
                  </p>
                  <ul>
                    <li>You have no water at all</li>
                    <li>A pipe is leaking, even if the leak is very small</li>
                    <li>You smell gas or need a gas line installed</li>
                    <li>There is no hot water</li>
                    <li>The water pressure is low</li>
                    <li>A clog won’t clear</li>
                    <li>You have recurring clogs in one or more drains</li>
                    <li>A plumbing fixture is dripping or leaking</li>
                    <li>The basement is flooding, wet, or always damp</li>
                    <li>There is a sewer odor or sewage backup</li>
                  </ul>
                  <h2>Comprehensive Plumbing Repairs</h2>
                  <p>
                    Modern plumbing systems can be complicated, and problems can
                    be challenging to find and repair. We provide complete
                    plumbing repair services to solve all the most common issues
                    and the less frequent, and difficult to diagnose, plumbing
                    problems.
                  </p>
                  <p>
                    <b>We offer a full range of plumbing services, including: </b>
                  </p>
                  <ul>
                    <li>Drain cleaning</li>
                    <li>Septic services</li>
                    <li>Plumbing repair</li>
                    <li>Piping and repiping</li>
                    <li>Sump pumps</li>
                    <li>Gas lines</li>
                    <li>Water heaters</li>
                    <li>Water line service</li>
                    <li>Water treatment</li>
                  </ul>
                  <h2>Contact Our Plumbing Professionals</h2>
                  <p>
                    When you need plumbing help in Hallandale Beach, from plumbing
                    repairs to replacement and maintenance, Watermen Plumbing is
                    the only team to call. Our expert plumbers can determine
                    whether a simple repair will do the trick or if more dramatic
                    measures such as replacement are more appropriate. We can work
                    closely with you to choose the most cost- and time-efficient
                    path forward.
                  </p>
                  <p>
                    <b>
                      To learn more about our plumbing services in Hallandale
                      Beach, contact Watermen Plumbing now at
                      <Link
                        to="tel:(954) 800-6364"
                        id="ColumnLayoutContent_3"
                        data-replace-href="tel:{F:P:Cookie:PPCP1/(954)%20800-6364}"
                      >
                        <span
                          id="ColumnLayoutContent_4"
                          data-process="replace"
                          data-replace="{F:P:Cookie:PPCP1/(954)%20800-6364}"
                        > (954) 800-6364
                        </span>
                      </Link>
                      .
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
                <Link to="/about-us/areas-we-serve">
                  <h5>Areas We Serve</h5>
                </Link>
              </header>
              <ul className="el-tab-box" role="menu">
                <li className="level-1  ">
                  <Link
                    className="pseudo-before relative auto"
                    to="/about-us/areas-we-serve/broward-county"
                    target=""
                    role="menuitem"
                  >
                    Broward County
                  </Link>
                </li>
                <li className="level-1  ">
                  <Link
                    className="pseudo-before relative auto"
                    to="/about-us/areas-we-serve/coral-springs"
                    target=""
                    role="menuitem"
                  >
                    Coral Springs
                  </Link>
                </li>
                <li className="level-1  ">
                  <Link
                    className="pseudo-before relative auto"
                    to="/about-us/areas-we-serve/davie"
                    target=""
                    role="menuitem"
                  >
                    Davie
                  </Link>
                </li>
                <li className="level-1  ">
                  <Link
                    className="pseudo-before relative auto"
                    to="/about-us/areas-we-serve/fort-lauderdale"
                    target=""
                    role="menuitem"
                  >
                    Fort Lauderdale
                  </Link>
                </li>
                <li className="level-1  ">
                  <Link
                    className="pseudo-before relative auto"
                    to="/about-us/areas-we-serve/hollywood"
                    target=""
                    role="menuitem"
                  >
                    Hollywood
                  </Link>
                </li>
                <li className="level-1  ">
                  <Link
                    className="pseudo-before relative auto"
                    to="/about-us/areas-we-serve/miramar"
                    target=""
                    role="menuitem"
                  >
                    Miramar
                  </Link>
                </li>
                <li className="level-1  ">
                  <Link
                    className="pseudo-before relative auto"
                    to="/about-us/areas-we-serve/plantation"
                    target=""
                    role="menuitem"
                  >
                    Plantation
                  </Link>
                </li>
                <li className="level-1 selected ">
                  <Link
                    className="pseudo-before relative auto"
                    to="/about-us/areas-we-serve/hallandale-beach"
                    target=""
                    role="menuitem"
                  >
                    Hallandale Beach
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
                    backgroundImage: `url(${stayLoopImg})`
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

export default HallandaleArea