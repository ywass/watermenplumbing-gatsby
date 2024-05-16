import React from "react";
import "../../style/areaWeServe.css";
import subBannerBgImg from "../../images/sub-banner-v1-bg.jpg";
import senoirImg from "../../images/Senoir[9].jpg";
import letUsImg from "../../images/Let-us.jpg";
import stayLoopImg from "../../images/Stay-in-loop.jpg";
import saveServiceImg from "../../images/Save-on-service.jpg";
import CustomerEmployeeIcon from "../../images/svg/customerEmployee.svg";
import KnowledgeAbleIcon from "../../images/svg/knowledgeAble.svg";
import ReliableHonestIcon from "../../images/svg/reliableHonest.svg";
import FullyStockIcon from "../../images/svg/fullyStock.svg";
import StarIcon from "../../images/svg/star.svg";
import dropDownIcon from "../../images/svg/dropdown.svg";
import tltBdrImg from "../../images/tlt-bdr.png";
import tltBdr2Img from "../../images/tlt-bdr2.png";
import PanelGroupImg from "../../images/values-v9-bg.jpg";
import PanelGroupMobImg from "../../images/values-v9-bg-mobile.jpg";
import valuesV9Img from "../../images/values-v9-img.png";
import { Link } from "gatsby";
import AsideForm from "../../ReuseComponents/AsideForm/AsideForm";

function AreaWeServePage() {
 
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
          <img alt="" src={subBannerBgImg} />
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
                <strong>Areas We Serve</strong>
              </span>
              <em className="title-color-2 subtitle">
                We’ll Treat Your Home as if It Were Our Own
              </em>
              <img src={tltBdrImg} className="header-flair" />
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
                    <h1>Areas We Serve</h1>
                    <h2>Proudly Serving Palm Beach County and Beyond</h2>
                    <p>
                      Since 2015, Watermen Plumbing Inc. has proudly served
                      South Florida with reliable and honest plumbing solutions.
                      We offer a wide variety of services for our customers. It
                      doesn’t matter if it’s a maintenance call, repair service,
                      or installation, our team can do it all. Our Broward
                      County plumbing professionals offer the highest level of
                      service to both residential and commercial customers.
                    </p>
                    <p>
                      In the last six years, our team has expanded its coverage.
                      We are now able to serve even more customers across the
                      greater Ft. Lauderdale area.
                    </p>
                    <p>
                      <strong>
                        Here’s a list of the following areas we offer plumbing
                        services:
                      </strong>
                    </p>
                    <ul>
                      <li>
                        <Link
                          target="_blank"
                          to="/about-us/areas-we-serve/broward-county"
                        >
                          Broward County
                        </Link>
                      </li>
                      <li>
                        <Link to="/about-us/areas-we-servehallandale-beach">
                          Hallandale Beach
                        </Link>
                      </li>
                      <li>
                        <Link
                          target="_blank"
                          to="/about-us/areas-we-serve/davie"
                        >
                          Davie
                        </Link>
                      </li>
                      <li>
                        <Link
                          target="_blank"
                          to="/about-us/areas-we-serve/coral-springs"
                        >
                          Coral Springs
                        </Link>
                      </li>
                      <li>
                        <Link
                          target="_blank"
                          to="/about-us/areas-we-serve/hollywood"
                        >
                          Hollywood
                        </Link>
                      </li>
                      <li>
                        <Link
                          target="_blank"
                          to="/about-us/areas-we-serve/plantation"
                        >
                          Plantation
                        </Link>
                      </li>
                      <li>
                        <Link
                          target="_blank"
                          to="/about-us/areas-we-serve/fort-lauderdale"
                        >
                          Ft. Lauderdale
                        </Link>
                      </li>
                      <li>
                        <Link
                          target="_blank"
                          to="/about-us/areas-we-serve/miramar"
                        >
                          Miramar
                        </Link>
                      </li>
                    </ul>
                    <h2>The Watermen Plumbing, Inc. Difference</h2>
                    <p>
                      When it comes to plumbing services, Watermen Plumbing Inc.
                      has become an obvious choice for Ft. Lauderdale area
                      residents. Here are a few deciding factors that make us
                      the best in the business:
                    </p>
                    <p>
                      <b>Safety First</b> – Before we start any job, our
                      technicians gear up to protect our customers. Safety is
                      our number one priority. Without it, a job shouldn’t take
                      place.
                    </p>
                    <p>
                      <b>Experienced Technicians</b> – Providing expert insight
                      is part of what makes our service stand out. We can take
                      on some of the most complex problems and still deliver
                      desirable solutions.
                    </p>
                    <p>
                      <b>Reliable Service</b> – Even if you encounter an
                      emergency problem, our team will show up. We put our
                      client’s needs before anything else.
                    </p>
                    <p>
                      <b>Fully-Equipped Trucks</b> – Having access to some of
                      the industry’s best tools and materials allows us to work
                      effectively. Our customers can be confident that they’re
                      getting the best treatment.
                    </p>
                    <h3>Our One-Year Guarantee</h3>
                    <p>
                      At Watermen Plumbing Inc., our team focuses on providing
                      clients with industry-leading solutions. We’re committed
                      to being the best and that’s why we treat each customer’s
                      needs with a detailed approach. Each member of our team is
                      a licensed plumbing professional who knows what it takes
                      to solve the most complicated issues. Because we’re so
                      confident in our process, we offer a one-year warranty on
                      all completed work. If our solution doesn’t fix your
                      problem for the year to come, you’ll receive complimentary
                      service until the issue is resolved.
                    </p>
                    <h3>Emergency Services</h3>
                    <p>
                      Sometimes life throws us a curveball. That’s why at
                      Watermen Plumbing, Inc. our team offers accelerated
                      emergency services. Plumbing issues can throw a wrench in
                      plans for any household or business. Our top priority is
                      to immediately assess an emergency issue and find a
                      solution that can help a customer return to a normal
                      routine.
                    </p>
                    <p>
                      Worried about high prices for unplanned service visits? At
                      Watermen Plumbing Inc., we offer a variety of financing
                      options, so you don’t have to pay in full upfront! Plus,
                      our team offers discounts for first responders, military
                      veterans, teachers, seniors, and more!
                    </p>
                    <p align="center">
                      <b>
                        Have a plumbing issue? Need to schedule a maintenance
                        check-up?{" "}
                      </b>
                      <Link to="/about-us/areas-we-serve/contact-us">
                        <b> Contact us </b>
                      </Link>
                      <b>online, or give us a call:</b>
                      <b>(954) 997-5797!</b>
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
                        <img alt="" src={senoirImg} />
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
                            to="../../coupons/print/index0a09.html?id=7622"
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
                        <img alt="" src={senoirImg} />
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
                            to="../../coupons/print/index9f4e.html?id=7223"
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
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
            alt=""
            data-src="/assets/ctas/cta-v13-bg.jpg"
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
                    style={{ backgroundImage: `url(${letUsImg})` }}
                    alt=""
                    role="presentation"
                  />
                </div>
                <div className="info">
                  <strong className="title-style-2 title-color-2">
                    See Us In Action
                  </strong>
                  <span className="btn v1 top-margin-small">
                    View Our Gallery
                  </span>
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
                      backgroundImage: `url(${stayLoopImg})`,
                    }}
                    alt=""
                    role="presentation"
                  />
                </div>
                <div className="info">
                  <strong className="title-style-2 title-color-2">
                    Stay In The Loop
                  </strong>
                  <span className="btn v1 top-margin-small">
                    Read Our bLogs
                  </span>
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
                      backgroundImage: `url(${saveServiceImg})`,
                    }}
                    alt=""
                    role="presentation"
                  />
                </div>
                <div className="info">
                  <strong className="title-style-2 title-color-2">
                    Save On Services
                  </strong>
                  <span className="btn v1 top-margin-small">
                    View our Offers
                  </span>
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
          <img alt="" title="" src={PanelGroupImg} />
        </picture>
        <div className="main relative">
          <header className="text-align center-500" id="ValuesV9Header">
            <h4>Why Customers Choose Us?</h4>
            <strong>
              We Believe That Only the Best Is Good Enough, For You!
            </strong>
            <img className="header-flair" src={tltBdr2Img} />
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
                  <CustomerEmployeeIcon className="values-icon" />
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
                  <KnowledgeAbleIcon className="values-icon" />
                </span>
                <div className="info">
                  <strong className="title-style-4 title-color-4">
                    Knowledgeable &amp; Skilled Technicians
                  </strong>
                  <p />
                  <p>
                    Our technicians undergo weekly continuing education classes
                    and are tested weekly to ensure quality control, and
                    customer satisfaction.
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
                  <ReliableHonestIcon className="values-icon" />
                </span>
                <div className="info">
                  <strong className="title-style-4 title-color-4">
                    Reliable Honest Company
                  </strong>
                  <p>
                    We provide peace of mind and stand behind our work with a
                    1-year warranty.
                  </p>
                </div>
              </li>
              <li
                className="flex-block-500 align-items center-500 top-margin-large "
                data-item="i"
                data-key={15794}
              >
                <span className="ico-con">
                  <FullyStockIcon className="values-icon" />
                </span>
                <div className="info">
                  <strong className="title-style-4 title-color-4">
                    Fully Stocked Trucks
                  </strong>
                  <p>
                    With the latest plumbing technology at our disposal, our
                    team is prepared to handle your job in one trip.
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
              <img alt="" src={valuesV9Img} />
            </picture>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AreaWeServePage;
