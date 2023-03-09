import React from 'react'
import '../../style/sewerServices.css'
import subBannerBgImg from '../../images/sub-banner-v1-bg.jpg'
import senoirImg from '../../images/Senoir[9].jpg'
import letUsImg from '../../images/Let-us.jpg'
import stayLoopImg from '../../images/Stay-in-loop.jpg'
import saveServiceImg from '../../images/Save-on-service.jpg'
import otherLeakyCeilingImg from "../../images/leaky-ceiling-roof-repair-hollywood-fl.jpg"
import tltBdrImg from '../../images/tlt-bdr.png'
import tltBdr2Img from '../../images/tlt-bdr2.png'
import PanelGroupImg from "../../images/values-v9-bg.jpg"
import PanelGroupMobImg from "../../images/values-v9-bg-mobile.jpg"
import valuesV9Img from '../../images/values-v9-img.png'
import ctaV13Bg from '../../images/cta-v13-bg.jpeg'
function OtherServicesPage() {
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
            <strong>Other Services</strong>
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
                <h1>Other Plumbing Services in Boca Raton</h1>
                <h2>
                  Watermen Plumbing Inc. in Palm Beach County Making Your
                  Satisfaction Our Priority
                </h2>
                <h3>Disposal</h3>
                <p>
                  Our goal is to never leave a mess, and that means
                  consolidating the garbage. Fortunately, if you don’t want to
                  deal with large items/bags we can do it for you. @$45.00 per
                  large garbage bag.
                </p>
                <h3>Pick Up &amp; Delivery</h3>
                <p>
                  Have a certain fixture in mind but it’s too heavy, or perhaps
                  you simply don’t have the time to pick it up? We offer a
                  reduced rate of $40.00 per delivery (depending on the time of
                  commute and distance)
                </p>
                <h3>Quotes/ Consultations</h3>
                <p>
                  If you’re thinking of doing a project but need advice or are
                  concerned with costs or perhaps you would like information on
                  how to deal with a plumbing issue give us a call, for a
                  limited time only and receive a free quote. *
                </p>
                <p>
                  <img
                    className="media-medium"
                    alt="Tech standing with one foot on ladder"
                    src={otherLeakyCeilingImg}
                  />
                </p>
                <p className="content-quote v1 bg-box unlike-bg side-padding-medium vertical-padding-tiny title-style-3 title-color-3">
                  <strong>Not sure if we do it or not?</strong>
                  <b>
                    It's simple, if it's water-related, call Watermen Plumbing
                    Inc. at
                    <a
                      href="tel:(954) 800-6364"
                      id="ColumnLayoutContent_1"
                      data-replace-href="tel:{F:P:Cookie:PPCP1/(954)%20800-6364}"
                    >
                      <span
                        id="ColumnLayoutContent_2"
                        data-process="replace"
                        data-replace="{F:P:Cookie:PPCP1/(954)%20800-6364}"
                      > (954) 800-6364
                      </span>
                    </a>{" "}
                    or fill out our
                    <a href="../../contact-us/index.html"> online contact form
                    </a>
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
              <a href="../index.html">
                <h5> Plumbing Services</h5>
              </a>
            </header>
            <ul className="el-tab-box" role="menu">
              <li className="level-1  active-children flex-between-middle-wrap">
                <a
                  className="pseudo-before relative auto"
                  href="../sewer-services/index.html"
                  target=""
                  role="menuitem"
                >
                  Sewer Services
                </a>
                <svg
                  className="site-arrow el-tab  relative right-margin-tiny"
                  title="Open child menu of Sewer Services"
                >
                  <use href="../../includes/flair.svg#arrow-down" />
                </svg>
                <ul className="inner-list el-panel sliding ">
                  <li className="level-2  ">
                    <a
                      className="pseudo-before relative auto"
                      href="../sewer-services/sewer-line-installation-replacement/index.html"
                      target=""
                      role="menuitem"
                    >
                      Sewer Line Installation &amp; Replacement
                    </a>
                  </li>
                  <li className="level-2  ">
                    <a
                      className="pseudo-before relative auto"
                      href="../sewer-services/septic-to-sewer-conversion/index.html"
                      target=""
                      role="menuitem"
                    >
                      Septic to Sewer Conversion
                    </a>
                  </li>
                </ul>
              </li>
              <li className="level-1  active-children flex-between-middle-wrap">
                <a
                  className="pseudo-before relative auto"
                  href="../drain-issues/index.html"
                  target=""
                  role="menuitem"
                >
                  Drain Issues
                </a>
                <svg
                  className="site-arrow el-tab  relative right-margin-tiny"
                  title="Open child menu of Drain Issues"
                >
                  <use href="../../includes/flair.svg#arrow-down" />
                </svg>
                <ul className="inner-list el-panel sliding ">
                  <li className="level-2  ">
                    <a
                      className="pseudo-before relative auto"
                      href="../drain-issues/camera-drain-inspection/index.html"
                      target=""
                      role="menuitem"
                    >
                      Camera Drain Inspection
                    </a>
                  </li>
                  <li className="level-2  ">
                    <a
                      className="pseudo-before relative auto"
                      href="../drain-issues/drain-cleaning-snaking/index.html"
                      target=""
                      role="menuitem"
                    >
                      Drain Cleaning Snaking
                    </a>
                  </li>
                </ul>
              </li>
              <li className="level-1  ">
                <a
                  className="pseudo-before relative auto"
                  href="../whole-home-repiping/index.html"
                  target=""
                  role="menuitem"
                >
                  Whole Home Repiping
                </a>
              </li>
              <li className="level-1  ">
                <a
                  className="pseudo-before relative auto"
                  href="../water-heaters/index.html"
                  target=""
                  role="menuitem"
                >
                  Water Heaters
                </a>
              </li>
              <li className="level-1  active-children flex-between-middle-wrap">
                <a
                  className="pseudo-before relative auto"
                  href="../water-filtration/index.html"
                  target=""
                  role="menuitem"
                >
                  Water Filtration
                </a>
                <svg
                  className="site-arrow el-tab  relative right-margin-tiny"
                  title="Open child menu of Water Filtration"
                >
                  <use href="../../includes/flair.svg#arrow-down" />
                </svg>
                <ul className="inner-list el-panel sliding ">
                  <li className="level-2  active-children flex-between-middle-wrap">
                    <a
                      className="pseudo-before relative auto"
                      href="../water-filtration/water-filtration-products/index.html"
                      target=""
                      role="menuitem"
                    >
                      Water Filtration Products
                    </a>
                    <ul className="inner-list el-panel sliding ">
                      <li className="level-3  active-children flex-between-middle-wrap">
                        <a
                          className="pseudo-before relative auto"
                          href="../water-filtration/water-filtration-products/whole-house-filtration-systems/index.html"
                          target=""
                          role="menuitem"
                        >
                          Whole House Filtration Systems
                        </a>
                      </li>
                      <li className="level-3  active-children flex-between-middle-wrap">
                        <a
                          className="pseudo-before relative auto"
                          href="../water-filtration/water-filtration-products/drinking-water-systems/index.html"
                          target=""
                          role="menuitem"
                        >
                          Drinking Water Systems
                        </a>
                      </li>
                      <li className="level-3  active-children flex-between-middle-wrap">
                        <a
                          className="pseudo-before relative auto"
                          href="../water-filtration/water-filtration-products/water-softeners/index.html"
                          target=""
                          role="menuitem"
                        >
                          Water Softeners
                        </a>
                      </li>
                      <li className="level-3  active-children flex-between-middle-wrap">
                        <a
                          className="pseudo-before relative auto"
                          href="../water-filtration/water-filtration-products/anti-scale-systems/index.html"
                          target=""
                          role="menuitem"
                        >
                          Anti-Scale Systems
                        </a>
                      </li>
                      <li className="level-3  active-children flex-between-middle-wrap">
                        <a
                          className="pseudo-before relative auto"
                          href="../water-filtration/water-filtration-products/filter-tanks/index.html"
                          target=""
                          role="menuitem"
                        >
                          Filter Tanks
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="level-1  ">
                <a
                  className="pseudo-before relative auto"
                  href="../backwater-valves/index.html"
                  target=""
                  role="menuitem"
                >
                  Backwater Valves
                </a>
              </li>
              <li className="level-1  ">
                <a
                  className="pseudo-before relative auto"
                  href="../bathroom-plumbing-renovation-upgrade/index.html"
                  target=""
                  role="menuitem"
                >
                  Bathroom Plumbing Renovation Upgrade
                </a>
              </li>
              <li className="level-1  ">
                <a
                  className="pseudo-before relative auto"
                  href="../commercial-plumbing/index.html"
                  target=""
                  role="menuitem"
                >
                  Commercial Plumbing
                </a>
              </li>
              <li className="level-1  ">
                <a
                  className="pseudo-before relative auto"
                  href="../custom-home-plumbing/index.html"
                  target=""
                  role="menuitem"
                >
                  Custom Home Plumbing
                </a>
              </li>
              <li className="level-1  ">
                <a
                  className="pseudo-before relative auto"
                  href="../leak-detection-repair/index.html"
                  target=""
                  role="menuitem"
                >
                  Leak Detection &amp; Repair
                </a>
              </li>
              <li className="level-1  ">
                <a
                  className="pseudo-before relative auto"
                  href="../plumbing-upgrades/index.html"
                  target=""
                  role="menuitem"
                >
                  Plumbing Upgrades
                </a>
              </li>
              <li className="level-1  ">
                <a
                  className="pseudo-before relative auto"
                  href="../thermostatic-pressure-balancing/index.html"
                  target=""
                  role="menuitem"
                >
                  Thermostatic Pressure Balancing
                </a>
              </li>
              <li className="level-1  ">
                <a
                  className="pseudo-before relative auto"
                  href="../toilets/index.html"
                  target=""
                  role="menuitem"
                >
                  Toilets
                </a>
              </li>
              <li className="level-1 selected ">
                <a
                  className="pseudo-before relative auto"
                  href="index.html"
                  target=""
                  role="menuitem"
                >
                  Other Services
                </a>
              </li>
              <li className="level-1  ">
                <a
                  className="pseudo-before relative auto"
                  href="../tankless-gas-water-heater/index.html"
                  target=""
                  role="menuitem"
                >
                  Tankless Gas Water Heater
                </a>
              </li>
              <li className="level-1  ">
                <a
                  className="pseudo-before relative auto"
                  href="../tankless-electric-water-heater/index.html"
                  target=""
                  role="menuitem"
                >
                  Tankless Electric Water Heater
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <form
          id="Form_SideContactV1"
          method="post"
          encType="multipart/form-data"
          action="https://www.watermenplumbing.com/plumbing-services/other-services/"
        >
          <input type="hidden" name="_m_" defaultValue="SideContactV1" />
          <aside
            className="side-contact v1 side-padding-large text-left vertical-padding-tiny border-radius box-shadow dark-bg"
            id="SideContactV1"
            data-onvisible="show"
          >
            <header
              className="text-align bottom-margin-small no-pad"
              id="SideContactV1Header"
            >
              <h5>Contact Us Today</h5>
              <p>Complete the form below to connect with our plumbing team!</p>
            </header>
            <div id="SideContactV1Form" className="ui-repeater">
              <fieldset data-item="i" data-key="">
                <ul>
                  <li>
                    <div className="input-text">
                      <input
                        required="required"
                        type="text"
                        id="SideContactV1Form_ITM0_FirstName"
                        className="ui-cms-input"
                        name="SideContactV1Form$ITM0$FirstName"
                        defaultValue=""
                      />
                      <label htmlFor="SideContactV1Form_ITM0_FirstName">
                        First Name
                      </label>
                      <div
                        className="validation"
                        htmlFor="SideContactV1Form_ITM0_FirstName"
                        data-type="valueMissing"
                      >
                        Please enter your first name.
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="input-text">
                      <input
                        required="required"
                        type="text"
                        id="SideContactV1Form_ITM0_LastName"
                        className="ui-cms-input"
                        name="SideContactV1Form$ITM0$LastName"
                        defaultValue=""
                      />
                      <label htmlFor="SideContactV1Form_ITM0_LastName">
                        Last Name
                      </label>
                      <div
                        className="validation"
                        htmlFor="SideContactV1Form_ITM0_LastName"
                        data-type="valueMissing"
                      >
                        Please enter your last name.
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="input-text">
                      <input
                        id="SideContactV1Form_ITM0_Phone"
                        type="tel"
                        pattern="[(]\d{3}[)][\s]\d{3}[\-]\d{4}"
                        className="phone-mask ui-cms-input"
                        required="required"
                        name="SideContactV1Form$ITM0$Phone"
                        defaultValue=""
                      />
                      <label htmlFor="SideContactV1Form_ITM0_Phone">
                        Phone
                      </label>
                      <div
                        className="validation"
                        htmlFor="SideContactV1Form_ITM0_Phone"
                        data-type="valueMissing"
                      >
                        Please enter your phone number.
                      </div>
                      <div
                        className="validation"
                        htmlFor="SideContactV1Form_ITM0_Phone"
                        data-type="typeMismatch"
                      >
                        This isn't a valid phone number.
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="input-text">
                      <input
                        required="required"
                        type="email"
                        id="SideContactV1Form_ITM0_EmailAddress"
                        className="ui-cms-input"
                        name="SideContactV1Form$ITM0$EmailAddress"
                        defaultValue=""
                      />
                      <label htmlFor="SideContactV1Form_ITM0_EmailAddress">
                        Email
                      </label>
                      <div
                        className="validation"
                        htmlFor="SideContactV1Form_ITM0_EmailAddress"
                        data-type="valueMissing"
                      >
                        Please enter your email address.
                      </div>
                      <div
                        className="validation"
                        htmlFor="SideContactV1Form_ITM0_EmailAddress"
                        data-type="typeMismatch"
                      >
                        This isn't a valid email address.
                      </div>
                    </div>
                  </li>
                  <li className="select">
                    <div className="input-text">
                      <select
                        id="SideContactV1Form_ITM0_LeadTypeID"
                        required="required"
                        className="ui-cms-select ui-cms-input"
                        name="SideContactV1Form$ITM0$LeadTypeID"
                      >
                        <option value="" />
                        <option value={1}>
                          Yes, I am a potential new customer
                        </option>
                        <option value={11}>
                          No, I'm a current existing customer
                        </option>
                        <option value={13}>I'm neither.</option>
                      </select>
                      <label
                        className="hide"
                        htmlFor="SideContactV1Form_ITM0_LeadTypeID"
                      >
                        Are you a new customer?
                      </label>
                      <svg className="site-arrow">
                        <use href="../../includes/flair.svg#arrow-down" />
                      </svg>
                      <div
                        className="validation"
                        htmlFor="SideContactV1Form_ITM0_LeadTypeID"
                        data-type="valueMissing"
                      >
                        Please make a selection.
                      </div>
                    </div>
                  </li>
                  <li className="message">
                    <div className="input-text">
                      <textarea
                        required="required"
                        type="text"
                        id="SideContactV1Form_ITM0_Message"
                        className="ui-cms-input"
                        name="SideContactV1Form$ITM0$Message"
                        defaultValue={""}
                      />
                      <label
                        className="hide"
                        htmlFor="SideContactV1Form_ITM0_Message"
                      >
                        Message
                      </label>
                      <div
                        className="validation"
                        htmlFor="SideContactV1Form_ITM0_Message"
                        data-type="valueMissing"
                      >
                        Please enter a message.
                      </div>
                    </div>
                  </li>
                </ul>
              </fieldset>
              <input
                id="SideContactV1Form_ITM0_FFD6"
                type="hidden"
                className="ui-cms-input"
                name="SideContactV1Form$ITM0$FFD6"
                defaultValue=""
                data-item="i"
                data-key=""
              />
              <div className="text-align" data-item="i" data-key="">
                <button
                  className="btn v1"
                  type="submit"
                  id="SideContactV1Form_ITM0_ctl08"
                  name="SideContactV1Form$ITM0$ctl08"
                  data-commandname="Update"
                >
                  Send
                </button>
              </div>
            </div>
          </aside>
        </form>
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
                        href="../../coupons/print/index0a09.html?id=7622"
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
                        href="../../coupons/print/index9f4e.html?id=7223"
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
          <a
            className="bg-box scaling-img-item border-radius-item side-padding-medium vertical-padding-small text-center full"
            href="../../photo-gallery/index.html"
          >
            <div className="img pad-height- bottom-margin">
              <img
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                style={{ backgroundImage: `url(${letUsImg})` }}
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
            href="../../blog/index.html"
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
          </a>
        </li>
        <li className="flex- fit" data-item="i">
          <a
            className="bg-box scaling-img-item border-radius-item side-padding-medium vertical-padding-small text-center full"
            href="../../coupons/index.html"
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

export default OtherServicesPage