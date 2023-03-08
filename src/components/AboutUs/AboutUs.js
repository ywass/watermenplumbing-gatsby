import React from 'react'
import '../../style/about.css'
import subBannerBgImg from '../../images/sub-banner-v1-bg.jpg'
import letUsImg from '../../images/Let-us.jpg'
import stayLoopImg from '../../images/Stay-in-loop.jpg'
import saveServiceImg from '../../images/Save-on-service.jpg'
import CustomerEmployeeIcon from "../../images/svg/customerEmployee.svg";
import KnowledgeAbleIcon from "../../images/svg/knowledgeAble.svg";
import ReliableHonestIcon from "../../images/svg/reliableHonest.svg";
import FullyStockIcon from "../../images/svg/fullyStock.svg";
import StarIcon from "../../images/svg/star.svg";
import tltBdrImg from '../../images/tlt-bdr.png'
import tltBdr2Img from '../../images/tlt-bdr2.png'
import PanelGroupImg from "../../images/panel-group-v5-bg.jpg"
function AboutUs() {
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
            <strong>About Us</strong>
          </span>
          <em className="title-color-2 subtitle">
            We’ll Treat Your Home as if It Were Our Own
          </em>
          <img className="header-flair" src={tltBdrImg}/>
        </div>
      </div>
    </div>
  </section>
  <section
    className="content v1 light-bg text-center bg-box-none transparent-bg large-padding"
    id="ContentV1"
    data-onvisible="show"
  >
    <div className="main thin text-align">
      <div
        className="bg-box side-padding vertical-padding-small block-no-pad box-flair border-radius"
        data-content="true"
      >
        <div className="flair-border">
          <span className="flair-1" />
          <span className="flair-2" />
          <article
            className="content-style"
            id="MainContent"
            data-content="true"
          >
            <h1 style={{ textAlign: "left" }}>About Us</h1>
            <p />
            <h2 style={{ textAlign: "left" }}>Our Mission</h2>
            <p style={{ textAlign: "left" }}>
              Watermen Plumbing is south Florida’s exclusive pluming company,
              providing top of the line service with a 100% satisfaction
              guarantee. We pride our selves on our honesty, integrity,
              professionalism, work ethic workmanship, attention to detail,
              cleanliness, organization, and caring for you, your family and
              your home. We’ll treat your home as I it was our own. We also wear
              boot covers to protect your floors. We come in very well stocked
              trucks with the latest plumbing equipment and technology, this
              enables us to get the job done right on time the first time. We
              believe that only the best is good enough! “When your plumbing
              needs care, trust Watermen to be there.”
            </p>
            <h2 style={{ textAlign: "left" }}>
              Providing Customers in Boca Raton, Hallandale Beach, Davie,
              Hollywood, and Southern Florida Plumbing Solutions They Can Trust
            </h2>
            <p style={{ textAlign: "left" }}>
              At Watermen Plumbing Inc., we consider ourselves South Florida’s
              premier
              <a href="../plumbing-services/index.html"> plumbing services
              </a>{" "}
              provider. We specialize in residential and
              <a href="../plumbing-services/commercial-plumbing/index.html"> small-scale commercial
              </a>{" "}
              plumbing services. We are proud to be known for our honesty,
              integrity, and professionalism in the industry. Our goal is to
              provide you with a level of service that is unparalleled. We have
              worked hard to build our reputation in Southern Florida as
              providers of high-quality plumbing solutions that customers can
              trust and rely on to last.
            </p>
            <p style={{ textAlign: "left" }}>
              Our specialists are customer care leaders with a toolbox of
              personal and professional skills acquired over years of success in
              the industry. Our master-level plumbers are always honing their
              skills and teaching our other specialists how to grow in their
              trade. Our experience and expertise are why customers choose to
              work with the team at Watermen Plumbing Inc., but our customer
              service and positive attitude is what keeps bringing them back. We
              go into each plumbing job happy that we can provide solutions for
              customers that make a difference in their lives. When your
              plumbing is broken, and it’s impacting the livability of your
              home, you want a service provider who can get the job done fast
              and affordably! We are the team to call.
            </p>
            <h3 style={{ textAlign: "left" }}>
              What Customers Can Expect From Watermen Plumbing Inc.
            </h3>
            <p style={{ textAlign: "left" }}>
              At Watermen Plumbing Inc., we are a solution and customer-driven
              plumbing service provider. We hope to leave each customer happy
              with the job we’ve provided. We know your home is your refuge and
              place to relax after a long day. It’s hard to relax in a home with
              leaky pipes, clogged drains, or broken water heaters, which is why
              we won’t leave until the job is done! At Watermen Plumbing, we
              offer a level of service that is above and beyond.
              <b>What is good service?</b>
              <b>
                Our team believes that good service means excellent
                communication, being punctual, being respectful, and having the
                knowledge and experience to advise our customers.
              </b>{" "}
              We guarantee all of our work with a 1-year worry-free warranty.
              You can trust the work from Watermen Plumbing Inc. because we are
              always working hard to be the best in the business.
            </p>
            <p
              style={{ textAlign: "left" }}
              className="content-quote v1 bg-box unlike-bg side-padding-medium vertical-padding-tiny title-style-3 title-color-3"
            >
              <b>
                Customers in Boca Raton, Hallandale Beach, Davie, Hollywood and
                Southern Florida can call in the experts from Watermen Plumbing
                Inc. at
                <a
                  href="tel:(954) 800-6364"
                  id="ContentV1_1"
                  data-replace-href="tel:{F:P:Cookie:PPCP1/(954)%20800-6364}"
                >
                  <span
                    id="ContentV1_2"
                    data-process="replace"
                    data-replace="{F:P:Cookie:PPCP1/(954)%20800-6364}"
                  > (954) 800-6364
                  </span>
                </a>{" "}
                for all your plumbing needs!
              </b>
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
  <section
    className="reviews v16 light-bg col-50-50 items-spaced vertical-middle text-center transparent-bg bg-box-unlike"
    id="ReviewsV16"
    data-onvisible="show"
  >
    <div className="main">
      <div
        className="bg-box border-radius side-padding vertical-padding-small box-flair flex- auto"
        data-role="scroller"
      >
        <div className="flair-border">
          <span className="flair-1" />
          <span className="flair-2" />
          <header
            className="text-align center-800"
            id="ReviewsV16ReviewsHeader"
          >
            <h4>We Care About Our Customers</h4>
            <strong>Read Our Reviews</strong>
            <img className="header-flair" src={tltBdrImg}/>
          </header>
          <div
            id="ReviewsV16ReviewsFeed"
            className="ui-repeater"
            data-role="container"
          >
            <ul className="flex-middle" data-role="list">
              <li
                className="full text-align center-800"
                data-role="item"
                data-item="i"
                data-key={3398782}
              >
                <blockquote>
                  <div className="rating-icons full bottom-margin-small">
                    <ul
                      className="stars rating5 flex-grid-small-center text-align full"
                      title="5 Star Rating"
                    >
                      <li className="fit flex-middle-center">
                       <StarIcon className="rate1"/>
                      </li>
                      <li className="fit flex-middle-center">
                       <StarIcon className="rate2"/>
                      </li>
                      <li className="fit flex-middle-center">
                      <StarIcon className="rate3"/>
                      </li>
                      <li className="fit flex-middle-center">
                      <StarIcon className="rate4"/>
                      </li>
                      <li className="fit flex-middle-center">
                      <StarIcon className="rate5"/>
                      </li>
                    </ul>
                  </div>
                  <strong className="title-style-2 title-color-2">
                    Satisfied with the experience
                  </strong>
                  <p className="caption">
                    “Called with emergency of our toilet leaking down into apt
                    below. They came same day of a holiday weekend and though
                    not cheap, at least the issue is fixed. The plumbers were
                    friendly and professional ...”
                  </p>
                  <strong className="author">- Sunshine S.</strong>
                </blockquote>
              </li>
              <li
                className="full text-align center-800"
                data-role="item"
                data-item="i"
                data-key={3390068}
              >
                <blockquote>
                  <div className="rating-icons full bottom-margin-small">
                    <ul
                      className="stars rating5 flex-grid-small-center text-align full"
                      title="5 Star Rating"
                    >
                      <li className="fit flex-middle-center">
                      <StarIcon className="rate1"/>
                      </li>
                      <li className="fit flex-middle-center">
                      <StarIcon className="rate2"/>
                      </li>
                      <li className="fit flex-middle-center">
                      <StarIcon className="rate3"/>
                      </li>
                      <li className="fit flex-middle-center">
                      <StarIcon className="rate4"/>
                      </li>
                      <li className="fit flex-middle-center">
                      <StarIcon className="rate5"/>
                      </li>
                    </ul>
                  </div>
                  <strong className="title-style-2 title-color-2">
                    Highly recommend.
                  </strong>
                  <p className="caption">
                    “Really good service. Really nice people as well which makes
                    all the difference. Came on time and the communication was
                    excellent. Texted when on their way. Super tidy as well. We
                    really appreciated ...”
                  </p>
                  <strong className="author">- Shauna G.</strong>
                </blockquote>
              </li>
              <li
                className="full text-align center-800"
                data-role="item"
                data-item="i"
                data-key={3351283}
              >
                <blockquote>
                  <div className="rating-icons full bottom-margin-small">
                    <ul
                      className="stars rating5 flex-grid-small-center text-align full"
                      title="5 Star Rating"
                    >
                      <li className="fit flex-middle-center">
                      <StarIcon className="rate1"/>
                      </li>
                      <li className="fit flex-middle-center">
                      <StarIcon className="rate2"/>
                      </li>
                      <li className="fit flex-middle-center">
                      <StarIcon className="rate3"/>
                      </li>
                      <li className="fit flex-middle-center">
                      <StarIcon className="rate4"/>
                      </li>
                      <li className="fit flex-middle-center">
                      <StarIcon className="rate5"/>
                      </li>
                    </ul>
                  </div>
                  <strong className="title-style-2 title-color-2">
                    Highly recommend this business
                  </strong>
                  <p className="caption">
                    “They were prompt and the technician worked really hard to
                    get the job of finding the source if the leak done at a fair
                    price. This will be the ONLY place i recommend to anyone.”
                  </p>
                  <strong className="author">- Charmaine</strong>
                </blockquote>
              </li>
              <li
                className="full text-align center-800"
                data-role="item"
                data-item="i"
                data-key={3311106}
              >
                <blockquote>
                  <div className="rating-icons full bottom-margin-small">
                    <ul
                      className="stars rating5 flex-grid-small-center text-align full"
                      title="5 Star Rating"
                    >
                      <li className="fit flex-middle-center">
                      <StarIcon className="rate1"/>
                      </li>
                      <li className="fit flex-middle-center">
                      <StarIcon className="rate2"/>
                      </li>
                      <li className="fit flex-middle-center">
                      <StarIcon className="rate3"/>
                      </li>
                      <li className="fit flex-middle-center">
                      <StarIcon className="rate4"/>
                      </li>
                      <li className="fit flex-middle-center">
                      <StarIcon className="rate5"/>
                      </li>
                    </ul>
                  </div>
                  <strong className="title-style-2 title-color-2">
                    I would definitely recommend Watermen Plumbing for anyone
                    looking for a reliable capable plumbing service.
                  </strong>
                  <p className="caption">
                    “I’ve hired Watermen Plumbing several times—twice for pretty
                    big jobs. Each time I have found them to be professional,
                    hardworking, and reasonable in their pricing. They come when
                    they say they will, ...”
                  </p>
                  <strong className="author">- Karen S.</strong>
                </blockquote>
              </li>
              <li
                className="full text-align center-800"
                data-role="item"
                data-item="i"
                data-key={3260362}
              >
                <blockquote>
                  <div className="rating-icons full bottom-margin-small">
                    <ul
                      className="stars rating5 flex-grid-small-center text-align full"
                      title="5 Star Rating"
                    >
                      <li className="fit flex-middle-center">
                      <StarIcon className="rate1"/>
                      </li>
                      <li className="fit flex-middle-center">
                      <StarIcon className="rate2"/>
                      </li>
                      <li className="fit flex-middle-center">
                      <StarIcon className="rate3"/>
                      </li>
                      <li className="fit flex-middle-center">
                      <StarIcon className="rate4"/>
                      </li>
                      <li className="fit flex-middle-center">
                      <StarIcon className="rate5"/>
                      </li>
                    </ul>
                  </div>
                  <strong className="title-style-2 title-color-2">
                    Highly recommend
                  </strong>
                  <p className="caption">
                    “If every business had the professionalism and integrity as
                    these folks- the world would be a nicer placer! Courteous
                    and clean, timely and efficient. They delivered on their
                    promise and were very ...”
                  </p>
                  <strong className="author">- Sara S.R.</strong>
                </blockquote>
              </li>
            </ul>
            <div
              className="scrolling-list-nav top-margin-small center-800 horizontal flex-middle text-align relative"
              data-role="arrows"
            >
              <button
                title="View previous item"
                aria-label="View previous item"
                data-action="Prev"
              >
                <svg className="site-arrow">
                  <use href="../includes/flair.svg#arrow-left" />
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
                  <use href="../includes/flair.svg#arrow-right" />
                </svg>
              </button>
            </div>
            <div id="ReviewsV16ReviewsBtnCon">
              <div className="top-margin text-align center-800">
                <a
                  href="../reviews/index.html"
                  aria-labelledby="ReviewsV16ReviewsHeader"
                  className="btn v1"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
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
        src={PanelGroupImg}
      />
      <source
        media="(max-width: 800px)"
        srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        data-src={PanelGroupImg}
      />
      <img
       
        alt=""
        src={PanelGroupImg}
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
            href="../photo-gallery/index.html"
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
            href="../blog/index.html"
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
            href="../coupons/index.html"
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
  <form
    id="Form_ContactV4"
    method="post"
    encType="multipart/form-data"
    action="https://www.watermenplumbing.com/about-us/"
  >
    <input type="hidden" name="_m_" defaultValue="ContactV4" />
    <section
      className="contact v4 light-bg bg-box-unlike col-50-50 items-spaced vertical-middle text-center flow-reverse bg-image svg-deco-bottom-hill-4 svg-deco-bottom-wave-bottom"
      id="ContactV4"
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
          data-src="../assets/contact/contact-v4-bg-mobile.jpg"
        />
        <source
          media="(max-width: 1024px)"
          srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          data-src="../assets/contact/contact-v4-bg-tablet.jpg"
        />
        <img
        
          alt=""
          src={PanelGroupImg}
        />
      </picture>
      <div className="main">
        <div className="flex-auto-responsive-margined-block-1024 align-items item-widths item-spacing flex-direction">
          <div className="bg-box side-padding vertical-padding-small box-flair border-radius">
            <div className="flair-border">
              <span className="flair-1" />
              <span className="flair-2" />
              <header className="text-left center-1024" id="ContactV4Values">
                <h4>Why Choose Us?</h4>
                <strong>
                  We Believe That Only the Best Is Good Enough, for You!
                </strong>
                <img className="header-flair" src={tltBdrImg}/>
              </header>
              <ul className="values-list ui-repeater" id="ContactV4List">
                <li
                  className="flex-top-block-500 center-500 auto top-margin-small"
                  data-item="i"
                  data-key={15797}
                >
                  <span className="ico-con">
                   <CustomerEmployeeIcon className="values-icon"/>
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
                  className="flex-top-block-500 center-500 auto top-margin-small"
                  data-item="i"
                  data-key={15796}
                >
                  <span className="ico-con">
                   <KnowledgeAbleIcon className="values-icon"/>
                  </span>
                  <div className="info">
                    <strong className="title-style-4 title-color-4">
                      Knowledgeable &amp; Skilled Technicians
                    </strong>
                    <p />
                    <p>
                      Our technicians undergo weekly continuing education
                      classes and are tested weekly to ensure quality control,
                      and customer satisfaction.
                    </p>
                    <p />
                  </div>
                </li>
                <li
                  className="flex-top-block-500 center-500 auto top-margin-small"
                  data-item="i"
                  data-key={15795}
                >
                  <span className="ico-con">
                    <ReliableHonestIcon className="values-icon"/>
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
                  className="flex-top-block-500 center-500 auto top-margin-small"
                  data-item="i"
                  data-key={15794}
                >
                  <span className="ico-con">
                   <FullyStockIcon className="values-icon"/>
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
            </div>
          </div>
          <div>
            <header className="text-align center-1024" id="ContactV4Header2">
              <h4>Ready to Get Started?</h4>
              <strong>
                Contact Us for Solutions Today &amp; Ask About Our Financing
                Options
              </strong>
             <img className="header-flair" src={tltBdr2Img}/>
            </header>
            <div id="ContactV4Form" className="ui-repeater">
              <fieldset data-item="i" data-key="">
                <ul className="flex-spaced-between-wrap-block-500">
                  <li className="half">
                    <div className="input-text">
                      <input
                        required="required"
                        type="text"
                        id="ContactV4Form_ITM0_FirstName"
                        className="ui-cms-input"
                        name="ContactV4Form$ITM0$FirstName"
                        defaultValue=""
                      />
                      <label
                        className="hide"
                        htmlFor="ContactV4Form_ITM0_FirstName"
                      >
                        First Name
                      </label>
                      <div
                        className="validation"
                        htmlFor="ContactV4Form_ITM0_FirstName"
                        data-type="valueMissing"
                      >
                        Please enter your first name.
                      </div>
                    </div>
                  </li>
                  <li className="half">
                    <div className="input-text">
                      <input
                        required="required"
                        type="text"
                        id="ContactV4Form_ITM0_LastName"
                        className="ui-cms-input"
                        name="ContactV4Form$ITM0$LastName"
                        defaultValue=""
                      />
                      <label
                        className="hide"
                        htmlFor="ContactV4Form_ITM0_LastName"
                      >
                        Last Name
                      </label>
                      <div
                        className="validation"
                        htmlFor="ContactV4Form_ITM0_LastName"
                        data-type="valueMissing"
                      >
                        Please enter your last name.
                      </div>
                    </div>
                  </li>
                  <li className="half">
                    <div className="input-text">
                      <input
                        id="ContactV4Form_ITM0_Phone"
                        type="tel"
                        pattern="[(]\d{3}[)][\s]\d{3}[\-]\d{4}"
                        className="phone-mask ui-cms-input"
                        required="required"
                        name="ContactV4Form$ITM0$Phone"
                        defaultValue=""
                      />
                      <label
                        className="hide"
                        htmlFor="ContactV4Form_ITM0_Phone"
                      >
                        Phone
                      </label>
                      <div
                        className="validation"
                        htmlFor="ContactV4Form_ITM0_Phone"
                        data-type="valueMissing"
                      >
                        Please enter your phone number.
                      </div>
                      <div
                        className="validation"
                        htmlFor="ContactV4Form_ITM0_Phone"
                        data-type="typeMismatch"
                      >
                        This isn't a valid phone number.
                      </div>
                    </div>
                  </li>
                  <li className="half">
                    <div className="input-text">
                      <input
                        required="required"
                        type="email"
                        id="ContactV4Form_ITM0_EmailAddress"
                        className="ui-cms-input"
                        name="ContactV4Form$ITM0$EmailAddress"
                        defaultValue=""
                      />
                      <label
                        className="hide"
                        htmlFor="ContactV4Form_ITM0_EmailAddress"
                      >
                        Email
                      </label>
                      <div
                        className="validation"
                        htmlFor="ContactV4Form_ITM0_EmailAddress"
                        data-type="valueMissing"
                      >
                        Please enter your email address.
                      </div>
                      <div
                        className="validation"
                        htmlFor="ContactV4Form_ITM0_EmailAddress"
                        data-type="typeMismatch"
                      >
                        This isn't a valid email address.
                      </div>
                    </div>
                  </li>
                  <li className="select">
                    <div className="input-text">
                      <select
                        id="ContactV4Form_ITM0_LeadTypeID"
                        required="required"
                        className="ui-cms-select ui-cms-input"
                        name="ContactV4Form$ITM0$LeadTypeID"
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
                        htmlFor="ContactV4Form_ITM0_LeadTypeID"
                      >
                        Are you a new customer?
                      </label>
                      <svg className="site-arrow">
                        <use href="../includes/flair.svg#arrow-down" />
                      </svg>
                      <div
                        className="validation"
                        htmlFor="ContactV4Form_ITM0_LeadTypeID"
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
                        id="ContactV4Form_ITM0_Message"
                        className="ui-cms-input"
                        name="ContactV4Form$ITM0$Message"
                        defaultValue={""}
                      />
                      <label
                        className="hide"
                        htmlFor="ContactV4Form_ITM0_Message"
                      >
                        Message
                      </label>
                      <div
                        className="validation"
                        htmlFor="ContactV4Form_ITM0_Message"
                        data-type="valueMissing"
                      >
                        Please enter a message.
                      </div>
                    </div>
                  </li>
                </ul>
              </fieldset>
              <input
                id="ContactV4Form_ITM0_FFD6"
                type="hidden"
                className="ui-cms-input"
                name="ContactV4Form$ITM0$FFD6"
                defaultValue=""
                data-item="i"
                data-key=""
              />
              <div
                className="top-margin-tiny text-align"
                data-item="i"
                data-key=""
              >
                <button
                  className="btn v1"
                  aria-labelledby="ContactV4Header2"
                  type="submit"
                  id="ContactV4Form_ITM0_ctl08"
                  name="ContactV4Form$ITM0$ctl08"
                  data-commandname="Update"
                >
                  Send Information
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </form>
</main>

  )
}

export default AboutUs