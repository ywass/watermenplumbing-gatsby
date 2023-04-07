import React from 'react'
import '../../style/sewerServices.css'
import subBannerBgImg from '../../images/sub-banner-v1-bg.jpg'
import senoirImg from '../../images/Senoir[9].jpg'
import letUsImg from '../../images/Let-us.jpg'
import stayLoopImg from '../../images/Stay-in-loop.jpg'
import saveServiceImg from '../../images/Save-on-service.jpg'
import AsideForm from '../../ReuseComponents/AsideForm/AsideForm'
import tltBdrImg from '../../images/tlt-bdr.png'
import tltBdr2Img from '../../images/tlt-bdr2.png'
import PanelGroupImg from "../../images/values-v9-bg.jpg"
import PanelGroupMobImg from "../../images/values-v9-bg-mobile.jpg"
import valuesV9Img from '../../images/values-v9-img.png'
import ctaV13Bg from '../../images/cta-v13-bg.jpeg'
import { Link } from 'gatsby'
function WaterHeatersPage() {
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
            <strong>Water Heaters</strong>
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
                <h1>Boca Raton Water Heater Repair</h1>
                <h2>
                  High-Quality Water Heater Replacement Solutions Throughout
                  Hallandale Beach, Davie, &amp; Beyond
                </h2>
                <p>
                  Is your water heater not providing enough hot water? Do you
                  have a leaking water tank?
                  <Link to="/about-us"> Watermen Plumbing Inc.
                  </Link>{" "}
                  provides same-day water heater services in Boca Raton. Our
                  fully trained and certified plumbers will quickly determine
                  the cause of your problem and ensure your system is back up
                  and running in no time.
                </p>
                <p>
                  <b>
                    Rely on our experienced technicians for all your water
                    heater needs, including:{" "}
                  </b>
                </p>
                <ul className="bullt-list v1 split flex-wrap-spaced-between-block-800">
                  <li>Water heater repair</li>
                  <li>Water heater service</li>
                  <li>Water heater replacement</li>
                  <li>Water heater installation</li>
                </ul>
                <p
                  align="center"
                  className="text-highlight v2 bg-box bordered side-padding-medium vertical-padding-tiny"
                >
                  <b>
                    We are determined to deliver the best service! Call
                    <Link
                      to="tel:(954) 800-6364"
                      id="ColumnLayoutContent_1"
                      data-replace-href="tel:{F:P:Cookie:PPCP1/(954)%20800-6364}"
                    >
                      <span
                        id="ColumnLayoutContent_2"
                        data-process="replace"
                        data-replace="{F:P:Cookie:PPCP1/(954)%20800-6364}"
                      >(954) 800-6364
                      </span>
                    </Link>{" "}
                    now to
                    <Link to="/contact-us"> schedule an appointment
                    </Link>{" "}
                    with our skilled team.
                  </b>
                </p>
                <h3>Signs Your Water Heater Requires Professional Attention</h3>
                <p>
                  Water heaters are an important element of every home. These
                  convenient systems provide an ample supply of hot water to
                  bathe, wash the laundry, cook, do the dishes, and more. If you
                  have noticed your water heater is acting unusual, it is likely
                  time to call an experienced plumber.
                </p>
                <p>
                  <b>
                    Warning signs that your water heater needs to be inspected
                    by a professional include:{" "}
                  </b>
                </p>
                <ul>
                  <li>You have inadequate hot water</li>
                  <li>Your water temperatures fluctuate on their own</li>
                  <li>Your water heater tank is leaking</li>
                  <li>You have reduced water flow</li>
                  <li>Your water heater is producing strange noises</li>
                  <li>You have smelly or discolored water</li>
                  <li>Your water heater is over 10 years old</li>
                </ul>
                <p>
                  If you are experiencing any of the above-mentioned issues, it
                  is important to address them as soon as possible. The sooner
                  you get help, the better chance you have to prevent more
                  extensive damage to your property or plumbing system. From
                  broken pilot lights and leaking tanks to faulty thermostats,
                  our plumbers can repair any water heater issue you are facing.
                </p>
                <p className="text-highlight v5 title-font side-padding">
                  When you need water heater services in Boca Raton, contact our
                  expert plumbers
                  <b>
                    <Link to="/contact-us"> online</Link>
                  </b>{" "}
                  or at
                  <b>
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
                  </b>{" "}
                  to get started today!
                </p>
                <h3>Avoiding Water Heater Problems</h3>
                <p>
                  The best way to deal with water heater problems is to stop
                  them before they start. Like other mechanical systems, water
                  heaters require regular maintenance to stay in prime
                  condition. By regularly maintaining your water heater, you can
                  minimize damage to the tank, maximize your water heater’s
                  efficiency, and extend its lifespan.
                </p>
                <p>
                  <b>
                    The most important preventative maintenance steps include:{" "}
                  </b>
                </p>
                <ul>
                  <li>Test and replace the pressure-relief valve</li>
                  <li>
                    Flush the water heater to drain sediments from the tank
                  </li>
                  <li>Inspect and replace the anode rod</li>
                </ul>
                <p>
                  At Watermen Plumbing Inc., we can take care of all of these
                  tasks for you. You should have your water heater inspected and
                  serviced at least once a year. Doing so will prevent minor
                  problems from becoming major issues and help you avoid
                  emergency situations.
                </p>
                <h3>Replacing Your Water Heater</h3>
                <p>
                  Every hot water heater will eventually come to the end of its
                  useful life. You can expect your system to last about 8 to 12
                  years before it is time to start considering installing a new
                  one. When that time comes, rely on Watermen Plumbing Inc. to
                  get the job done right. We can help you select a
                  high-efficiency system and ensure it gets installed correctly.
                  If you you want to get a jump start on your water heater
                  research to see what type of water heater would be the best
                  fit for you, check out this
                  <Link
                    target="_blank"
                    to="https://www.consumerreports.org/cro/water-heaters/buying-guide/index.htm"
                  >
                    article by Consumer Reports
                  </Link>
                  .
                </p>
                <h3>Additional Reading</h3>
                <ul>
                  <li>
                    <Link to="/blog/2021/june/5-maintenance-tips-to-avoid-plumbing-headaches"> 5 Maintenance Tips to Avoid Plumbing Headaches
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/2021/march/plumbing-problems-that-can-cause-mold"> Plumbing Problems That Can Cause Mold
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/2018/september/master-plumber-vs-plumber-in-florida-what-s-the-"> Master Plumber vs Plumber in Florida: What's the
                      Difference?
                    </Link>
                  </li>
                </ul>
                <p className="content-quote v1 bg-box unlike-bg side-padding-medium vertical-padding-tiny title-style-3 title-color-3">
                  <b>
                    Call
                    <Link
                      to="tel:(954) 800-6364"
                      id="ColumnLayoutContent_5"
                      data-replace-href="tel:{F:P:Cookie:PPCP1/(954)%20800-6364}"
                    >
                      <span
                        id="ColumnLayoutContent_6"
                        data-process="replace"
                        data-replace="{F:P:Cookie:PPCP1/(954)%20800-6364}"
                      > (954) 800-6364
                      </span>
                    </Link>{" "}
                    or
                    <Link to="/contact-us"> contact us online
                    </Link>{" "}
                    for comprehensive support from our Boca Raton water heater
                    specialists.
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
              <Link to="/plumbing-services">
                <h5> Plumbing Services</h5>
              </Link>
            </header>
            <ul className="el-tab-box" role="menu">
              <li className="level-1  active-children flex-between-middle-wrap">
                <Link
                  className="pseudo-before relative auto"
                  to="/plumbing-services/sewer-services"
                  target=""
                  role="menuitem"
                >
                  Sewer Services
                </Link>
                <svg
                  className="site-arrow el-tab  relative right-margin-tiny"
                  title="Open child menu of Sewer Services"
                >
                  <use href="../../includes/flair.svg#arrow-down" />
                </svg>
                <ul className="inner-list el-panel sliding ">
                  <li className="level-2  ">
                    <Link
                      className="pseudo-before relative auto"
                      to="/plumbing-services/sewer-services/sewer-line-installation-replacement"
                      target=""
                      role="menuitem"
                    >
                      Sewer Line Installation &amp; Replacement
                    </Link>
                  </li>
                  <li className="level-2  ">
                    <Link
                      className="pseudo-before relative auto"
                      to="/plumbing-services/sewer-services/septic-to-sewer-conversion"
                      target=""
                      role="menuitem"
                    >
                      Septic to Sewer Conversion
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="level-1  active-children flex-between-middle-wrap">
                <Link
                  className="pseudo-before relative auto"
                  to="/plumbing-services/drain-issues"
                  target=""
                  role="menuitem"
                >
                  Drain Issues
                </Link>
                <svg
                  className="site-arrow el-tab  relative right-margin-tiny"
                  title="Open child menu of Drain Issues"
                >
                  <use href="../../includes/flair.svg#arrow-down" />
                </svg>
                <ul className="inner-list el-panel sliding ">
                  <li className="level-2  ">
                    <Link
                      className="pseudo-before relative auto"
                      to="/plumbing-services/drain-issues/camera-drain-inspection"
                      target=""
                      role="menuitem"
                    >
                      Camera Drain Inspection
                    </Link>
                  </li>
                  <li className="level-2  ">
                    <Link
                      className="pseudo-before relative auto"
                      to="/plumbing-services/drain-issues/drain-cleaning-snaking"
                      target=""
                      role="menuitem"
                    >
                      Drain Cleaning Snaking
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="level-1  ">
                <Link
                  className="pseudo-before relative auto"
                  to="/plumbing-services/whole-home-repiping"
                  target=""
                  role="menuitem"
                >
                  Whole Home Repiping
                </Link>
              </li>
              <li className="level-1 selected ">
                <Link
                  className="pseudo-before relative auto"
                  to="/plumbing-services/water-heaters"
                  target=""
                  role="menuitem"
                >
                  Water Heaters
                </Link>
              </li>
              <li className="level-1  active-children flex-between-middle-wrap">
                <Link
                  className="pseudo-before relative auto"
                  to="/plumbing-services/water-filtration"
                  target=""
                  role="menuitem"
                >
                  Water Filtration
                </Link>
                <svg
                  className="site-arrow el-tab  relative right-margin-tiny"
                  title="Open child menu of Water Filtration"
                >
                  <use href="../../includes/flair.svg#arrow-down" />
                </svg>
                <ul className="inner-list el-panel sliding ">
                  <li className="level-2  active-children flex-between-middle-wrap">
                    <Link
                      className="pseudo-before relative auto"
                      to="/plumbing-services/water-filtration/water-filtration-products"
                      target=""
                      role="menuitem"
                    >
                      Water Filtration Products
                    </Link>
                    <ul className="inner-list el-panel sliding ">
                      <li className="level-3  active-children flex-between-middle-wrap">
                        <Link
                          className="pseudo-before relative auto"
                          to="/plumbing-services/water-filtration/water-filtration-products/whole-house-filtration-systems"
                          target=""
                          role="menuitem"
                        >
                          Whole House Filtration Systems
                        </Link>
                      </li>
                      <li className="level-3  active-children flex-between-middle-wrap">
                        <Link
                          className="pseudo-before relative auto"
                          to="/plumbing-services/water-filtration/water-filtration-products/drinking-water-systems"
                          target=""
                          role="menuitem"
                        >
                          Drinking Water Systems
                        </Link>
                      </li>
                      <li className="level-3  active-children flex-between-middle-wrap">
                        <Link
                          className="pseudo-before relative auto"
                          to="/plumbing-services/water-filtration/water-filtration-products/water-softeners"
                          target=""
                          role="menuitem"
                        >
                          Water Softeners
                        </Link>
                      </li>
                      <li className="level-3  active-children flex-between-middle-wrap">
                        <Link
                          className="pseudo-before relative auto"
                          to="/plumbing-services/water-filtration/water-filtration-products/anti-scale-systems"
                          target=""
                          role="menuitem"
                        >
                          Anti-Scale Systems
                        </Link>
                      </li>
                      <li className="level-3  active-children flex-between-middle-wrap">
                        <Link
                          className="pseudo-before relative auto"
                          to="/plumbing-services/water-filtration/water-filtration-products/filter-tanks"
                          target=""
                          role="menuitem"
                        >
                          Filter Tanks
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="level-1  ">
                <Link
                  className="pseudo-before relative auto"
                  to="/plumbing-services/backwater-valves"
                  target=""
                  role="menuitem"
                >
                  Backwater Valves
                </Link>
              </li>
              <li className="level-1  ">
                <Link
                  className="pseudo-before relative auto"
                  to="/plumbing-services/bathroom-plumbing-renovation-upgrade"
                  target=""
                  role="menuitem"
                >
                  Bathroom Plumbing Renovation Upgrade
                </Link>
              </li>
              <li className="level-1  ">
                <Link
                  className="pseudo-before relative auto"
                  to="/plumbing-services/commercial-plumbing"
                  target=""
                  role="menuitem"
                >
                  Commercial Plumbing
                </Link>
              </li>
              <li className="level-1  ">
                <Link
                  className="pseudo-before relative auto"
                  to="/plumbing-services/custom-home-plumbing"
                  target=""
                  role="menuitem"
                >
                  Custom Home Plumbing
                </Link>
              </li>
              <li className="level-1  ">
                <Link
                  className="pseudo-before relative auto"
                  to="/plumbing-services/leak-detection-repair"
                  target=""
                  role="menuitem"
                >
                  Leak Detection &amp; Repair
                </Link>
              </li>
              <li className="level-1  ">
                <Link
                  className="pseudo-before relative auto"
                  to="/plumbing-services/plumbing-upgrades"
                  target=""
                  role="menuitem"
                >
                  Plumbing Upgrades
                </Link>
              </li>
              <li className="level-1  ">
                <Link
                  className="pseudo-before relative auto"
                  to="/plumbing-services/thermostatic-pressure-balancing"
                  target=""
                  role="menuitem"
                >
                  Thermostatic Pressure Balancing
                </Link>
              </li>
              <li className="level-1  ">
                <Link
                  className="pseudo-before relative auto"
                  to="/plumbing-services/toilets"
                  target=""
                  role="menuitem"
                >
                  Toilets
                </Link>
              </li>
              <li className="level-1  ">
                <Link
                  className="pseudo-before relative auto"
                  to="/plumbing-services/other-services"
                  target=""
                  role="menuitem"
                >
                  Other Services
                </Link>
              </li>
              <li className="level-1  ">
                <Link
                  className="pseudo-before relative auto"
                  to="/plumbing-services/tankless-gas-water-heater"
                  target=""
                  role="menuitem"
                >
                  Tankless Gas Water Heater
                </Link>
              </li>
              <li className="level-1  ">
                <Link
                  className="pseudo-before relative auto"
                  to="/plumbing-services/tankless-electric-water-heater"
                  target=""
                  role="menuitem"
                >
                  Tankless Electric Water Heater
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
                  <use href="../../includes/flair.svg#arrow-left" />
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
                  <use href="../../includes/flair.svg#arrow-right" />
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
                style={{ backgroundImage: `url(${letUsImg})`}}
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
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                style={{
                  backgroundImage: `url(${saveServiceImg})`
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
        data-src="../../assets/values/values-v9-bg-mobile.jpg"
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
                <use data-href="../../cms/svg/site/ykmkv4_n6ok.24.svg#saftey" />
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
                <use data-href="../../cms/svg/site/ykmkv4_n6ok.24.svg#knowledge" />
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
                <use data-href="../../cms/svg/site/ykmkv4_n6ok.24.svg#honest" />
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
                <use data-href="../../cms/svg/site/ykmkv4_n6ok.24.svg#truck" />
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
            data-src="../../assets/values/values-v9-img-mobile.png"
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

export default WaterHeatersPage