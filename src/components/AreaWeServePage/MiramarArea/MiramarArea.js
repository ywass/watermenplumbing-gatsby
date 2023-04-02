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
function MiramarArea() {
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
              <strong>Miramar</strong>
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
                  <h1>Plumbing Services in Miramar, FL</h1>
                  <h3>
                    Courteous, Punctual, and Professional Services for Every
                    Customer
                  </h3>
                  <p>
                    Every day, the team at Watermen Plumbing works hard to be the
                    best in the business. We want to provide the best customer
                    experience, from our initial conversation to when we shake
                    hands at the end of the job. Our master-level plumbers can
                    handle even the most complex plumbing projects.
                  </p>
                  <h3>Services We Provide in Miramar</h3>
                  <p>
                    <b>
                      Our fully trained and certified plumbers can tackle the
                      spectrum of plumbing concerns, including these listed below:{" "}
                    </b>
                  </p>
                  <ul>
                    <li>
                      <b>
                        <Link
                          target="_blank"
                          to="/plumbing-services/backwater-valves"
                        >
                          Backwater Valves.
                        </Link>{" "}
                      </b>
                      Backwater valves are usually required in homes that are
                      below the water table to help keep sewage from back up into
                      the home. These valves must be maintained and sometimes
                      replaced. If your home has a sump pump, having a backwater
                      valve installed will provide extra protection against a
                      sewage backup.
                    </li>
                    <li>
                      <b>
                        <Link
                          target="_blank"
                          to="/plumbing-services/drain-issues"
                        >
                          Drain Issues.
                        </Link>{" "}
                      </b>
                      Pouring liquid drain cleaner down your faucet doesn’t always
                      do the trick. When your drains won’t clear and repeatedly
                      clog, we will examine why this is happening and can repair
                      the problem.
                    </li>
                    <li>
                      <b>
                        <Link
                          target="_blank"
                          to="/plumbing-services/leak-detection-repair"
                        >
                          Leak Detection and Repair.
                        </Link>{" "}
                      </b>
                      A small leak can lead to huge repairs if not repaired in a
                      timely manner. Not only does a leak waste money, but leaks
                      can also lead to water stains, mold, and mildew. These
                      problems are unsightly and can trigger allergies and other
                      health issues.
                    </li>
                    <li>
                      <b>
                        <Link
                          target="_blank"
                          to="/plumbing-services/sewer-services"
                        >
                          Sewer Services.
                        </Link>{" "}
                      </b>
                      The pipes in your home are not the only ones under the
                      homeowner’s responsibility. The pipes that leave your house
                      and connect to the public sewer line are also the
                      homeowner’s responsibility. For some Miramar homes, this
                      infrastructure is aging and being blocked by tree roots and
                      other debris. Call on us to investigate the source of your
                      problem if you are experiencing backups and overflows in
                      your home. We can also help you
                      <Link to="/plumbing-services/sewer-services/septic-to-sewer-conversion">
                        convert an old septic system
                      </Link>{" "}
                      to connect with a municipal sewer line.
                    </li>
                    <li>
                      <b>
                        <Link
                          target="_blank"
                          to="/plumbing-services/water-heaters"
                        >
                          Water Heaters.
                        </Link>{" "}
                      </b>
                      Some things aren’t meant to last forever. Your water heater
                      is one of them. If you are noticing leaks, reduced water
                      flow, strange noises, or discolored water, call Watermen
                      Plumbing to inspect your water heater. Whether it is repair
                      or replacement, we can handle the job. We can also install
                      <Link to="/plumbing-services/tankless-gas-water-heater">
                        tankless water heaters
                      </Link>{" "}
                      (electric and gas). These water heaters have lower monthly
                      energy costs and are more compact than traditional water
                      heaters.
                    </li>
                    <li>
                      <b>
                        <Link
                          target="_blank"
                          to="/plumbing-services/water-filtration"
                        >
                          Water Filtration.
                        </Link>{" "}
                      </b>
                      We all need to drink plenty of water each day. That healthy
                      habit is hard to keep when you don’t like the smell or taste
                      of your water. A water filtration system can improve the
                      taste and smell of your water, but that’s just the start.
                      The system can filter out bacteria and microbes as well as
                      chemicals and metals. Clean water helps your body run better
                      and extends the life of appliances that use water.
                    </li>
                    <li>
                      <b>
                        <Link
                          target="_blank"
                          to="/plumbing-services/whole-home-repiping"
                        >
                          Whole Home Repiping
                        </Link>
                        .{" "}
                      </b>
                      Older pipes are susceptible to failure and to contaminating
                      the water you use for cooking, showering, and brushing your
                      teeth. We have the know-how to bring your entire home up to
                      code with the most up-to-date materials available. Safer and
                      more reliable, you will have peace of mind when those
                      dangerous pipes are gone. But we don’t just rehab the
                      plumbing in existing homes. We also bring our same
                      outstanding customer service to new construction jobs.
                    </li>
                  </ul>
                  <h3>Commercial Plumbing Services</h3>
                  <p>
                    The same know-how and professionalism we bring to residential
                    projects are brought to our commercial plumbing services as
                    well. Businesses have many of the same issues that can pop up
                    in our homes: leaks, backed-up toilets, inconsistent water
                    pressure, poor water quality, and more. We can take care of
                    all these nuisances.
                  </p>
                  <p>
                    Whether your business needs boiler room repairs or new toilets
                    installed, we can take on any plumbing job. No project is too
                    small or too large for our expert team.
                  </p>
                  <h2>
                    Call Watermen Plumbing for Your Miramar Home &amp; Commercial
                    Plumbing Needs
                  </h2>
                  <p>
                    Plumbing is the unsung hero of modern life. It’s often taken
                    for granted until it doesn’t work. When toilets won’t flush,
                    leaks ruin the floors, or sewage backs up into the home, not
                    having a properly working plumbing system can be disastrous.
                  </p>
                  <p>
                    Call on Watermen Plumbing to investigate the root of the
                    problem and provide the solution. We are so sure of our work
                    that we offer a 1-year warranty on everything we do. Some
                    plumbing problems are emergencies. We know that so we offer
                    same-day service!
                  </p>
                  <p>
                    <b>
                      Call us today at{" "}
                      <span
                        id="ColumnLayoutContent_1"
                        data-process="replace"
                        data-replace="{F:P:Cookie:PPCP1/(954)%20800-6364}"
                      > (954) 800-6364
                      </span>{" "}
                      or
                      <Link target="_blank" to="/contact-us"> reach out online
                      </Link>
                      . Check out
                      <Link target="_blank" to="/reviews"> what some of our customers have to say
                      </Link>
                      !
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
                <li className="level-1 selected ">
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
                <li className="level-1  ">
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
          <form
            netlify
            id="Form_SideContactV1"
            method="post"
            encType="multipart/form-data"
            action="https://www.watermenplumbing.com/about-us/areas-we-serve/miramar/"
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
                          <use href="../../../includes/flair.svg#arrow-down" />
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
                    backgroundImage:`url(${letUsImg})`
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

export default MiramarArea