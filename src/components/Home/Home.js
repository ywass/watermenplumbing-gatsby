import React, { useState } from "react";
import "../../style/home.css";
import SenoirImg from "../../images/Senoir[9].jpg";
import MainStageImg from "../../images/mainstage-v3-bg.jpg";
import PanelGroupImg from "../../images/panel-group-v5-bg.jpg";
import ServicesImg from "../../images/services-v9-img.png";
/* import ValuesImg from "../../images/values-v4-alt-bg.jpg" */
import Values2Img from "../../images/values-v13-img.png";
import ReviewsImg from "../../images/reviews-v15-img.png";
import HomeAdvisorImg from "../../images/HomeAdvisor.png";
import ToppingImg from "../../images/toppng.png";
import BBBImg from "../../images/BBB-Accredited.png";
import HiclipartImg from "../../images/hiclipart.png";
import shutter1Img from "../../images/shutterstock_3194182101.jpg";
import SpecticImg from "../../images/Septic-Blog.jpg";
import tltBdrImg from "../../images/tlt-bdr.png";
import tltBdr2Img from "../../images/tlt-bdr2.png";
/* import CouponsImg from "../../images/coupons-v10-bg.jpg" */
import KnowledgeIcon from "../../images/svg/knowledge.svg";
import FilterIcon from "../../images/svg/filter.svg";
import WaterFilterationIcon from "../../images/svg/WaterFiltration.svg";
import WaterHeatersIcon from "../../images/svg/WaterHeaters.svg";
import TanklessElectricIcon from "../../images/svg/TanklessElectric.svg";
import SewerServicesIcon from "../../images/svg/SewerServices.svg";
import CustomHomeIcon from "../../images/svg/CustomHome.svg";
import CameraDrainIcon from "../../images/svg/CameraDrain.svg";
import CustomerEmployeeIcon from "../../images/svg/customerEmployee.svg";
import KnowledgeAbleIcon from "../../images/svg/knowledgeAble.svg";
import ReliableHonestIcon from "../../images/svg/reliableHonest.svg";
import FullyStockIcon from "../../images/svg/fullyStock.svg";
import StarIcon from "../../images/svg/star.svg";
import { Link } from "gatsby";

import JotformEmbed from 'react-jotform-embed';


const onSubmit = async (event, setSubmitText) => {
  event.preventDefault();
  setSubmitText("Submitting ...");
  const formElements = [...event.currentTarget.elements];
  const isValid =
    formElements.filter((elem) => elem.name === "bot-field")[0].value === "";
  const validFormElements = isValid ? formElements : [];
  if (validFormElements.length < 1) {
    // or some other cheeky error message
    setSubmitText("It looks like you filled out too many fields!");
  } else {
    const filledOutElements = validFormElements
      .filter((elem) => !!elem.value)
      .map(
        (element) =>
          encodeURIComponent(element.name) +
          "=" +
          encodeURIComponent(element.value)
      )
      .join("&");

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: filledOutElements,
    })
      .then(() => {
        setSubmitText("Successfully submitted!");
      })
      .catch((_) => {
        setSubmitText(
          "There was an error with your submission, please email me using the address above."
        );
      });
  }
};

function Home() {
  const [submitText, setSubmitText] = useState(null);
  return (
    <main id="MainZone">
      <section
        className="mainstage v3s dark-bg bg-image no-padding vertical-middle text-left bg-box-none"
        id="CustomMainstageV3"
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
            data-src={MainStageImg}
          />
          <source
            media="(max-width: 1024px)"
            srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
            data-src={MainStageImg}
          />
          <img alt="" src={MainStageImg} />
        </picture>
        <div className="box flex-between-block-1024 flex-direction align-items">
          <div className="info text-align half vertical-padding side-padding center-500 bg-box box-flair">
            <div className="flair-border">
              <span className="flair-1" />
              <span className="flair-2" />
              <span className="title-font title">
                <strong className="title-color-1">
                  Professional Prompt &amp; Reliable Plumbers
                </strong>
              </span>
              <em className="title-color-2 subtitle">
                When Your Plumbing Needs Care Trust Watermen To Be There
              </em>
              <img className="header-flair" src={tltBdrImg} />
              <p className="no-bottom-margin description">
                Professional, friendly and well-trained! Our expert plumbing
                team is here to handle all of your plumbing needs. Specializing
                in plumbing and water filtration.
              </p>
              <div className="top-margin">
                <Link className="btn v1" to="contact-us">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <ul className="cta-list flex-grid-wrap-block-500 fourth">
            <li className="third" data-item="i">
              <Link
                className="flex-middle-block-1024 center-1024 btn-colors"
                to="/plumbing-services"
              >
                <KnowledgeIcon />
                <span className="title-font">Plumbing Services</span>
              </Link>
            </li>
            <li className="third" data-item="i">
              <Link
                className="flex-middle-block-1024 center-1024 btn-colors"
                to="/plumbing-services/water-filtration"
              >
                <FilterIcon />
                <span className="title-font">Water Filtration</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section
        className="panel-group v1 relative no-padding light-bg bg-image"
        id="PanelGroupV5"
      >
        <picture
          className="img-bg bg-position"
          role="presentation"
          data-role="picture"
        >
          <source
            media="(max-width: 500px)"
            srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
            data-src="../../images/panel-group-v5-bg-mobile.jpg"
          />
          <source
            media="(max-width: 1024px)"
            srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
            data-src="../../images/panel-group-v5-bg-tablet.jpg"
          />
          <img alt="" src={PanelGroupImg} />
        </picture>

        <div className="box" id="PanelGroupV5Zone">

        <section
              className="contact v6 light-bg bg-box-unlike col-50-50 items-spaced text-left vertical-top"
              id="ContactV6"
              data-onvisible="show"
            >
              <div className="main">
                <div className="flex-auto-responsive-margined-block-1024 align-items item-widths item-spacing flex-direction">
                  <div
                    className="text-align vertical-padding-small block-no-pad"
                    data-content="true"
                  >
                    <header
                      className="no-pad bottom-margin-tiny"
                      id="ContactV6ContentHeader"
                    >
                      <h1>Boca Raton Plumbers</h1>
                    </header>
                    <div
                      className="content-style"
                      id="ContactV6ContentMainContent"
                    >
                      <h2>
                        Providing Elite Plumbing Service in Davie, Hallandale
                        Beach, Hollywood, and Southern Florida Since 2015
                      </h2>
                      <p>
                        The team at
                        <Link to="/about-us"> Watermen Plumbing</Link> has been
                        serving customers in South Florida since 2015. We are
                        proud to serve Boca Raton, Hallandale Beach, Davie, and
                        beyond, with honest and professional
                        <Link to="/plumbing-services">
                          {" "}
                          plumbing services
                        </Link>{" "}
                        for homeowners and
                        <Link to="/plumbing-services/commercial-plumbing">
                          {" "}
                          businesses
                        </Link>{" "}
                        alike. We provide a high level of customer service and
                        expertise-driven solutions. Our team is working to prove
                        we are the best plumbing professionals in Boca Raton,
                        and we know you will agree with us after we’ve solved
                        all your plumbing headaches. We believe that in order to
                        be the best, you have to always provide the best
                        service! So, whether it’s customer service,
                        <Link to="/plumbing-services/toilets">
                          {" "}
                          toilet repairs
                        </Link>
                        , water heater installations, or general maintenance
                        calls, we will always give you our best.
                      </p>
                      <p>
                        <b>
                          We offer comprehensive plumbing services for customers
                          in{" "}
                        </b>
                        <strong>Boca Raton, Davie,</strong>
                        <strong>Hallandale Beach, </strong>
                        <b>
                          and surrounding communities. Call in the experts from
                          Watermen Plumbing Inc. at{" "}
                          <span
                            id="ContactV6_1"
                            data-process="replace"
                            data-replace="{F:P:Cookie:PPCP1/(954)%20997-5797}"
                          >
                            (954) 997-5797
                          </span>{" "}
                          or contact us online. Be sure to ask about our
                          financing options!
                        </b>
                      </p>
                    </div>
                    <div id="ContactV6BtnCon"></div>
                  </div>
                  <div className="form_blk bg-box border-radius side-padding vertical-padding-small box-flair">
                  <div className="flair-border contact_form">
                        <span className="flair-1" />
                        <span className="flair-2" />
                        <header className="text-center" id="ContactV6Header">
                          <h4>Contact Us Today</h4>
                          <img className="header-flair" src={tltBdr2Img} />
                        </header>
                  <JotformEmbed src="https://form.jotform.com/232918068868472" />
                  </div>
                    </div>
                  </div>
                  </div>
            </section>

        {/*    <form
            name="contact home"
            data-netlify="true"
            method="post"
            id="Form_ContactV6"
            data-netlify-honeypot="bot-field"
            onSubmit={(e) => onSubmit(e, setSubmitText)}
          >
            <input type="hidden" name="form-name" value="contact home" />
            <div hidden>
              <input name="bot-field" />
            </div>

            <section
              className="contact v6 light-bg bg-box-unlike col-50-50 items-spaced text-left vertical-top"
              id="ContactV6"
              data-onvisible="show"
            >
              <div className="main">
                <div className="flex-auto-responsive-margined-block-1024 align-items item-widths item-spacing flex-direction">
                  <div
                    className="text-align vertical-padding-small block-no-pad"
                    data-content="true"
                  >
                    <header
                      className="no-pad bottom-margin-tiny"
                      id="ContactV6ContentHeader"
                    >
                      <h1>Boca Raton Plumbers</h1>
                    </header>
                    <div
                      className="content-style"
                      id="ContactV6ContentMainContent"
                    >
                      <h2>
                        Providing Elite Plumbing Service in Davie, Hallandale
                        Beach, Hollywood, and Southern Florida Since 2015
                      </h2>
                      <p>
                        The team at
                        <Link to="/about-us"> Watermen Plumbing</Link> has been
                        serving customers in South Florida since 2015. We are
                        proud to serve Boca Raton, Hallandale Beach, Davie, and
                        beyond, with honest and professional
                        <Link to="/plumbing-services">
                          {" "}
                          plumbing services
                        </Link>{" "}
                        for homeowners and
                        <Link to="/plumbing-services/commercial-plumbing">
                          {" "}
                          businesses
                        </Link>{" "}
                        alike. We provide a high level of customer service and
                        expertise-driven solutions. Our team is working to prove
                        we are the best plumbing professionals in Boca Raton,
                        and we know you will agree with us after we’ve solved
                        all your plumbing headaches. We believe that in order to
                        be the best, you have to always provide the best
                        service! So, whether it’s customer service,
                        <Link to="/plumbing-services/toilets">
                          {" "}
                          toilet repairs
                        </Link>
                        , water heater installations, or general maintenance
                        calls, we will always give you our best.
                      </p>
                      <p>
                        <b>
                          We offer comprehensive plumbing services for customers
                          in{" "}
                        </b>
                        <strong>Boca Raton, Davie,</strong>
                        <strong>Hallandale Beach, </strong>
                        <b>
                          and surrounding communities. Call in the experts from
                          Watermen Plumbing Inc. at{" "}
                          <span
                            id="ContactV6_1"
                            data-process="replace"
                            data-replace="{F:P:Cookie:PPCP1/(954)%20997-5797}"
                          >
                            (954) 997-5797
                          </span>{" "}
                          or contact us online. Be sure to ask about our
                          financing options!
                        </b>
                      </p>
                    </div>
                    <div id="ContactV6BtnCon"></div>
                  </div>
                  <div className="bg-box border-radius side-padding vertical-padding-small box-flair">
                    {!submitText ? (
                      <div className="flair-border">
                        <span className="flair-1" />
                        <span className="flair-2" />
                        <header className="text-center" id="ContactV6Header">
                          <h4>Contact Us Today</h4>
                          <img className="header-flair" src={tltBdr2Img} />
                        </header>
                        
                        <JotformEmbed src="https://form.jotform.com/jsform/232918068868472" />

                        <div id="ContactV6Form" className="ui-repeater">
                          <fieldset data-item="i" data-key="">
                            <ul className="flex-spaced-between-wrap-block-500">
                              <li className="half">
                                <div className="input-text">
                                  <input
                                    required="required"
                                    type="text"
                                    id="ContactV6Form_ITM0_FirstName"
                                    className="ui-cms-input"
                                    name="ContactV6Form$ITM0$FirstName"
                                    defaultValue=""
                                    placeholder="First Name"
                                  />                               
                                  <div
                                    className="validation"
                                    htmlFor="ContactV6Form_ITM0_FirstName"
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
                                    id="ContactV6Form_ITM0_LastName"
                                    className="ui-cms-input"
                                    name="ContactV6Form$ITM0$LastName"
                                    defaultValue=""
                                    placeholder="Last Name"
                                  />
                                 
                                  <div
                                    className="validation"
                                    htmlFor="ContactV6Form_ITM0_LastName"
                                    data-type="valueMissing"
                                  >
                                    Please enter your last name.
                                  </div>
                                </div>
                              </li>
                              <li className="half">
                                <div className="input-text">
                                  <input
                                    id="ContactV6Form_ITM0_Phone"
                                    type="tel"
                                   
                                    className="phone-mask ui-cms-input"
                                    required="required"
                                    name="ContactV6Form$ITM0$Phone"
                                    defaultValue=""
                                    placeholder="Phone"
                                  />
                                
                                  <div
                                    className="validation"
                                    htmlFor="ContactV6Form_ITM0_Phone"
                                    data-type="valueMissing"
                                  >
                                    Please enter your phone number.
                                  </div>
                                  <div
                                    className="validation"
                                    htmlFor="ContactV6Form_ITM0_Phone"
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
                                    id="ContactV6Form_ITM0_EmailAddress"
                                    className="ui-cms-input"
                                    name="ContactV6Form$ITM0$EmailAddress"
                                    defaultValue=""
                                    placeholder="Email"
                                  />
                                 
                                  <div
                                    className="validation"
                                    htmlFor="ContactV6Form_ITM0_EmailAddress"
                                    data-type="valueMissing"
                                  >
                                    Please enter your email address.
                                  </div>
                                  <div
                                    className="validation"
                                    htmlFor="ContactV6Form_ITM0_EmailAddress"
                                    data-type="typeMismatch"
                                  >
                                    This isn't a valid email address.
                                  </div>
                                </div>
                              </li>
                              <li className="select">
                                <div className="input-text">
                                  <select
                                    id="ContactV6Form_ITM0_LeadTypeID"
                                    required="required"
                                    className="ui-cms-select ui-cms-input"
                                    name="ContactV6Form$ITM0$LeadTypeID"
                                    
                                  >
                                    <option value="" disabled selected>Are you a new customer?</option>
                                    <option value={1}>
                                      Yes, I am a potential new customer
                                    </option>
                                    <option value={11}>
                                      No, I'm a current existing customer
                                    </option>
                                    <option value={13}>I'm neither.</option>
                                  </select>
                               
                                  <svg className="site-arrow">
                                    <use href="includes/flair.svg#arrow-down" />
                                  </svg>
                                  <div
                                    className="validation"
                                    htmlFor="ContactV6Form_ITM0_LeadTypeID"
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
                                    id="ContactV6Form_ITM0_Message"
                                    className="ui-cms-input"
                                    name="ContactV6Form$ITM0$Message"
                                    defaultValue={""}
                                    placeholder="Message"
                                  />                              
                                  <div
                                    className="validation"
                                    htmlFor="ContactV6Form_ITM0_Message"
                                    data-type="valueMissing"
                                  >
                                    Please enter a message.
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </fieldset>
                          <input
                            id="ContactV6Form_ITM0_FFD6"
                            type="hidden"
                            className="ui-cms-input"
                            name="ContactV6Form$ITM0$FFD6"
                            defaultValue=""
                            data-item="i"
                            data-key=""
                          />
                          <div
                            className="top-margin-tiny text-center"
                            data-item="i"
                            data-key=""
                          >
                            <button
                              className="btn v1"
                              aria-labelledby="ContactV6Header"
                              type="submit"
                              id="ContactV6Form_ITM0_ctl08"
                              name="ContactV6Form$ITM0$ctl08"
                              data-commandname="Update"
                            >
                              Send Information
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <h1>Form Submitted</h1>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </form>*/}

          <section
            className="services v9 light-bg text-center items-overlapped col-60-40 vertical-middle bg-image bg-box-unlike"
            id="ServicesV9"
            data-onvisible="show"
          >
            <picture className="img-bg" role="presentation" data-role="picture">
              <source
                media="(max-width: 500px)"
                srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                data-src="../../images/services-v9-bg-mobile.jpg"
              />
              <img
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                alt=""
                data-src={ServicesImg}
              />
            </picture>
            <div className="main">
              <div className="flex-spaced-between-block-1024-margined flex-direction align-items item-spacing item-widths">
                <div className="bg-box side-padding vertical-padding-small box-flair border-radius under-item">
                  <div className="flair-border overlap-padding">
                    <span className="flair-1" />
                    <span className="flair-2" />
                    <header
                      className="text-align center-800 bottom-margin-tiny no-pad"
                      id="ServicesV9Header"
                    >
                      <h4>How Can We Help You?</h4>
                      <strong>
                        We are proud to offer an array of plumbing solutions.
                        Put our expert team to the test!
                      </strong>
                      <img className="header-flair" src={tltBdr2Img} />
                    </header>
                    <ul
                      className="services-list flex-wrap-spaced-between-block-800 top-margin-small ui-repeater"
                      id="ServicesV9Services"
                    >
                      <li className="half flex-" data-item="i" data-key={54107}>
                        <Link
                          className="full flex-middle btn-style btn-color-hover full text-left"
                          to="/plumbing-services/water-filtration"
                        >
                          <WaterFilterationIcon className="right-margin-tiny fit" />
                          <span>Water Filtration</span>
                        </Link>
                      </li>
                      <li className="half flex-" data-item="i" data-key={54101}>
                        <Link
                          className="full flex-middle btn-style btn-color-hover full text-left"
                          to="/plumbing-services/water-heaters"
                        >
                          <WaterHeatersIcon className="right-margin-tiny fit" />
                          <span>Water Heaters</span>
                        </Link>
                      </li>
                      <li className="half flex-" data-item="i" data-key={54113}>
                        <Link
                          className="full flex-middle btn-style btn-color-hover full text-left"
                          to="/plumbing-services/drain-issues/camera-drain-inspection"
                        >
                          <CameraDrainIcon className="right-margin-tiny fit" />
                          <span>Camera Drain Inspection</span>
                        </Link>
                      </li>
                      <li className="half flex-" data-item="i" data-key={54103}>
                        <Link
                          className="full flex-middle btn-style btn-color-hover full text-left"
                          to="/plumbing-services/tankless-electric-water-heater"
                        >
                          <TanklessElectricIcon className="right-margin-tiny fit" />
                          <span>Tankless Electric Water Heater</span>
                        </Link>
                      </li>
                      <li className="half flex-" data-item="i" data-key={54110}>
                        <Link
                          className="full flex-middle btn-style btn-color-hover full text-left"
                          to="/plumbing-services/sewer-services"
                        >
                          <SewerServicesIcon className="right-margin-tiny fit" />
                          <span>Sewer Services</span>
                        </Link>
                      </li>
                      <li className="half flex-" data-item="i" data-key={54100}>
                        <Link
                          className="full flex-middle btn-style btn-color-hover full text-left"
                          to="/plumbing-services/custom-home-plumbing"
                        >
                          <CustomHomeIcon className="right-margin-tiny fit" />
                          <span>Custom Home Plumbing</span>
                        </Link>
                      </li>
                    </ul>
                    <div id="ServicesV9BtnCon">
                      <div className="top-margin text-align">
                        <Link
                          className="btn v1"
                          aria-labelledby="ServicesV9Header"
                          to="/plumbing-services"
                        >
                          Additional Services
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <picture
                  className="img bg-position pad-height- border-radius box-shadow over-item"
                  role="presentation"
                  data-role="picture"
                >
                  <source media="(max-width: 500px)" src={ServicesImg} />
                  <img alt="" src={ServicesImg} />
                </picture>
              </div>
            </div>
          </section>

          
          <section
            className="values v4 alt light-bg bg-box-unlike large-padding vertical-middle col-50-50 items-spaced text-left bg-image flow-reverse"
            id="ValuesV4Alt"
            data-onvisible="show"
          >
            <picture className="img-bg" role="presentation" data-role="picture">
              <source
                media="(max-width: 500px)"
                srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                data-src="../../images/values-v4-alt-bg-mobile.jpg"
              />
              <img alt="" src={Values2Img} />
            </picture>
            <div className="main">
              <div className="flex-margined-auto-responsive-block-1024 item-spacing item-widths align-items flex-direction">
                <div>
                  <header
                    className="text-align center-500"
                    id="ValuesV4AltHeader"
                  >
                    <h4>Why Choose Us?</h4>
                    <strong>
                      We Believe That Only the Best Is Good Enough, for You!
                    </strong>
                    <img className="header-flair" src={tltBdrImg} />
                  </header>
                  <ul className="values-list ui-repeater" id="ValuesV4AltList">
                    <li
                      className="flex-top-block-500 center-500 auto side-padding-small top-margin-small"
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
                          We truly care about the health and safety of our staff
                          and customers. We wear full PPE gear to ensure
                          everyone is protected.
                        </p>
                      </div>
                    </li>
                    <li
                      className="flex-top-block-500 center-500 auto side-padding-small top-margin-small"
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
                          Our technicians undergo weekly continuing education
                          classes and are tested weekly to ensure quality
                          control, and customer satisfaction.
                        </p>
                        <p />
                      </div>
                    </li>
                    <li
                      className="flex-top-block-500 center-500 auto side-padding-small top-margin-small"
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
                          We provide peace of mind and stand behind our work
                          with a 1-year warranty.
                        </p>
                      </div>
                    </li>
                    <li
                      className="flex-top-block-500 center-500 auto side-padding-small top-margin-small"
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
                          With the latest plumbing technology at our disposal,
                          our team is prepared to handle your job in one trip.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>


                <div className="relative flex-column-end">
                  <picture
                    className="img pad-height- bottom-margin-negative bg-position box-shadow border-radius"
                    role="presentation"
                    data-role="picture"
                  >
                    <source
                      media="(max-width: 500px)"
                      srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                      data-src="../../images/values-v13-img-mobile.png"
                    />
                    <img alt="" src={Values2Img} />
                  </picture>
                  <div className="relative top-margin-negative side-padding-medium">
                    <div
                      className="bg-box text-center box-flair border-radius"
                      id="ValuesV4AltCta"
                    >
                      <div className="flair-border">
                        <span className="flair-1" />
                        <span className="flair-2" />
                        <div className="side-padding-medium vertical-padding">
                          <strong className="title-style-1 title-color-1">
                            Your Home Deserves Clean Water
                          </strong>
                          <img className="header-flair" src={tltBdr2Img} />
                          <p className="relative">
                            We pride ourselves on unmatched service and are
                            happy to offer top notch water filtration solutions
                            for your home.
                          </p>
                          <div className="text-center top-margin">
                            <Link to="/contact-us" className="btn v1">
                              Contact Us
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="reviews v15 light-bg col-50-50 items-spaced vertical-middle text-left bg-image bg-box-unlike"
            id="ReviewsV15"
            data-onvisible="show"
          >
            <picture className="img-bg" role="presentation" data-role="picture">
              <source
                media="(max-width: 500px)"
                srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                data-src="../../images/reviews-v15-bg-mobile.jpg"
              />
              <source
                media="(max-width: 1024px)"
                srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                data-src="../../images/reviews-v15-bg-tablet.jpg"
              />
              <img alt="" src={ReviewsImg} />
            </picture>
            <div className="main">
              <div className="flex-auto-responsive-margined-block-1024 align-items item-widths item-spacing flex-direction">
                <div>
                  <header
                    className="bottom-margin-tiny no-pad center-800"
                    id="ReviewsV15Header"
                  >
                    <h3>Customer Service Leaders in Boca Raton</h3>
                  </header>
                  <div
                    className="content-style center-800"
                    id="ReviewsV15Content"
                  >
                    <p>
                      Watermen Plumbing Inc. focuses on providing our customers
                      with expert solutions and unrivaled customer service. Our
                      plumbing expertise and elite customer service begin with
                      our rock-solid team of professionals. All of our
                      technicians are trained and certified by a master plumber.
                      We know our plumbing professionals are the best in the
                      business. We leave each job certain we’ve handled the
                      problem, which is why we offer a 1-year warranty on all of
                      our work. Our work is guaranteed because we know we’ve
                      done our best work.
                    </p>
                    <p>
                      We are a detailed oriented team of tenacious plumbing
                      specialists. We don’t stop until the job is done. Our
                      customer service model revolves around solving problems
                      and being respectful in everything we do for you. We will
                      never leave you waiting or disrespect your home. We leave
                      your plumbing cleaner than when we found it. You will not
                      find a more knowledgeable plumbing team in Boca Raton! We
                      have two master plumbers leading our team to success.
                    </p>
                    <p>
                      When you need emergency plumbing work, the sticker shock
                      can be very stressful. That’s not the case with Watermen
                      Plumbing Inc. We offer financing options and discounts for
                      teachers, first responders, seniors, and vets. We offer
                      the same professional response to your plumbing call,
                      whether the job is big or small. We offer weekend and
                      emergency services for those plumbing emergencies that
                      just can’t wait.
                    </p>
                  </div>
                  <div id="ReviewsV15BtnCon"></div>
                </div>
                <div>
                  <header
                    className="text-align center-800"
                    id="ReviewsV15ReviewsHeader"
                  >
                    <h4>5 Star Customer Reviews</h4>
                    <strong>Feedback From Our Happy Customers</strong>
                    <img className="header-flair" src={tltBdrImg} />
                  </header>
                  <div className="flex-column border-radius">
                    <picture
                      className="img pad-height- bg-position fit"
                      role="presentation"
                      data-role="picture"
                    >
                      <source
                        media="(max-width: 500px)"
                        srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                        data-src="../../images/reviews-v15-img-mobile.png"
                      />
                      <img alt="" src={ReviewsImg} />
                    </picture>
                    <div
                      className="bg-box no-shadow side-padding vertical-padding-small box-flair flex- auto"
                      data-role="scroller"
                    >
                      <div className="flair-border">
                        <span className="flair-1" />
                        <span className="flair-2" />
                        <div
                          id="ReviewsV15ReviewsFeed"
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
                                      <StarIcon className="rate1" />
                                    </li>
                                    <li className="fit flex-middle-center">
                                      <StarIcon className="rate2" />
                                    </li>
                                    <li className="fit flex-middle-center">
                                      <StarIcon className="rate3" />
                                    </li>
                                    <li className="fit flex-middle-center">
                                      <StarIcon className="rate4" />
                                    </li>
                                    <li className="fit flex-middle-center">
                                      <StarIcon className="rate5" />
                                    </li>
                                  </ul>
                                </div>
                                <strong className="title-style-2 title-color-2">
                                  Satisfied with the experience
                                </strong>
                                <p className="caption">
                                  “Called with emergency of our toilet leaking
                                  down into apt below. They came same day of a
                                  holiday weekend and though not cheap, at least
                                  the issue is fixed. The plumbers were friendly
                                  and professional ...”
                                </p>
                                <strong className="author">
                                  - Sunshine S.
                                </strong>
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
                                      <StarIcon className="rate1" />
                                    </li>
                                    <li className="fit flex-middle-center">
                                      <StarIcon className="rate2" />
                                    </li>
                                    <li className="fit flex-middle-center">
                                      <StarIcon className="rate3" />
                                    </li>
                                    <li className="fit flex-middle-center">
                                      <StarIcon className="rate4" />
                                    </li>
                                    <li className="fit flex-middle-center">
                                      <StarIcon className="rate5" />
                                    </li>
                                  </ul>
                                </div>
                                <strong className="title-style-2 title-color-2">
                                  Highly recommend.
                                </strong>
                                <p className="caption">
                                  “Really good service. Really nice people as
                                  well which makes all the difference. Came on
                                  time and the communication was excellent.
                                  Texted when on their way. Super tidy as well.
                                  We really appreciated ...”
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
                                      <StarIcon className="rate1" />
                                    </li>
                                    <li className="fit flex-middle-center">
                                      <StarIcon className="rate2" />
                                    </li>
                                    <li className="fit flex-middle-center">
                                      <StarIcon className="rate3" />
                                    </li>
                                    <li className="fit flex-middle-center">
                                      <StarIcon className="rate4" />
                                    </li>
                                    <li className="fit flex-middle-center">
                                      <StarIcon className="rate5" />
                                    </li>
                                  </ul>
                                </div>
                                <strong className="title-style-2 title-color-2">
                                  Highly recommend this business
                                </strong>
                                <p className="caption">
                                  “They were prompt and the technician worked
                                  really hard to get the job of finding the
                                  source if the leak done at a fair price. This
                                  will be the ONLY place i recommend to anyone.”
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
                                      <StarIcon className="rate1" />
                                    </li>
                                    <li className="fit flex-middle-center">
                                      <StarIcon className="rate2" />
                                    </li>
                                    <li className="fit flex-middle-center">
                                      <StarIcon className="rate3" />
                                    </li>
                                    <li className="fit flex-middle-center">
                                      <StarIcon className="rate4" />
                                    </li>
                                    <li className="fit flex-middle-center">
                                      <StarIcon className="rate5" />
                                    </li>
                                  </ul>
                                </div>
                                <strong className="title-style-2 title-color-2">
                                  I would definitely recommend Watermen Plumbing
                                  for anyone looking for a reliable capable
                                  plumbing service.
                                </strong>
                                <p className="caption">
                                  “I’ve hired Watermen Plumbing several
                                  times—twice for pretty big jobs. Each time I
                                  have found them to be professional,
                                  hardworking, and reasonable in their pricing.
                                  They come when they say they will, ...”
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
                                      <StarIcon className="rate1" />
                                    </li>
                                    <li className="fit flex-middle-center">
                                      <StarIcon className="rate2" />
                                    </li>
                                    <li className="fit flex-middle-center">
                                      <StarIcon className="rate3" />
                                    </li>
                                    <li className="fit flex-middle-center">
                                      <StarIcon className="rate4" />
                                    </li>
                                    <li className="fit flex-middle-center">
                                      <StarIcon className="rate5" />
                                    </li>
                                  </ul>
                                </div>
                                <strong className="title-style-2 title-color-2">
                                  Highly recommend
                                </strong>
                                <p className="caption">
                                  “If every business had the professionalism and
                                  integrity as these folks- the world would be a
                                  nicer placer! Courteous and clean, timely and
                                  efficient. They delivered on their promise and
                                  were very ...”
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
                                <use href="includes/flair.svg#arrow-left" />
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
                                <use href="includes/flair.svg#arrow-right" />
                              </svg>
                            </button>
                          </div>
                          <div id="ReviewsV15ReviewsBtnCon">
                            <div className="top-margin text-align center-800">
                              <Link
                                to="/reviews"
                                aria-labelledby="ReviewsV15ReviewsHeader"
                                className="btn v1"
                              >
                                Read More Reviews
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="coupon v10 light-bg items-touching text-center bg-image bg-box-unlike"
            id="CouponV10"
            data-onvisible="show"
            data-role="scroller"
          >
            <picture
              className="img-bg bg-position"
              role="presentation"
              data-role="picture"
            >
              <source
                media="(max-width: 500px)"
                srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                data-src="../../images/coupons-v10-bg-mobile.jpg"
              />
              <img alt="" src="../../images/coupons-v10-bg.jpg" />
            </picture>
            <div className="main">
              <header className="text-align center-800" id="CouponV10Header">
                <h4>Take Advantage Of Our Specials!</h4>
                <strong>Coupons &amp; Promotions</strong>
                <img className="header-flair" src={tltBdrImg} />
              </header>
              <div
                id="CouponV10List"
                className="ui-repeater"
                data-role="container"
              >
                <ul
                  className="flex-grid-large auto-responsive"
                  data-role="list"
                >
                  <li
                    className="coupon-style third border-radius featured flex-column"
                    data-role="item"
                    data-item="i"
                    data-key={7622}
                  >
                    <div className="coupon-border pseudo-after bg-box auto">
                      <picture className="img pad-height-" role="presentation">
                        <source media="(max-width: 500px)" src={SenoirImg} />
                        <img alt="" src={SenoirImg} />
                      </picture>
                      <div className="info side-padding-large vertical-padding-small relative text-center full">
                        <div className="full side-padding-small relative">
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
                          <div className="top-margin-small">
                            <Link
                              className="btn v1"
                              to="/coupons/print"
                              target="_blank"
                            >
                              Print
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    className="coupon-style third border-radius featured flex-column"
                    data-role="item"
                    data-item="i"
                    data-key={7223}
                  >
                    <div className="coupon-border pseudo-after bg-box auto">
                      <picture className="img pad-height-" role="presentation">
                        <source media="(max-width: 500px)" src={SenoirImg} />
                        <img alt="" src={SenoirImg} />
                      </picture>
                      <div className="info side-padding-large vertical-padding-small relative text-center full">
                        <div className="full side-padding-small relative">
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
                          <div className="top-margin-small">
                            <Link
                              className="btn v1"
                              to="/coupons/print"
                              target="_blank"
                            >
                              Print
                            </Link>
                          </div>
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
                      <use href="includes/flair.svg#arrow-left" />
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
                      <use href="includes/flair.svg#arrow-right" />
                    </svg>
                  </button>
                </div>
              </div>
              <div id="CouponV10BtnCon">
                <div className="top-margin text-center">
                  <Link
                    to="/coupons"
                    className="btn v1"
                    aria-labelledby="CouponV10Header"
                  >
                    view More Deals
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section
            className="awards v1 light-bg bg-image ui-repeater"
            id="AwardsV1"
            data-role="scroller"
            data-auto-advance="true"
            data-infinite="true"
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
                data-src="../../images/awards-v1-bg-mobile.jpg"
              />
              <img
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                alt=""
                data-src="../../images/awards-v1-bg.jpg"
              />
            </picture>
            <div className="main">
              <div className="awards-list" data-role="container">
                <ul className="flex-middle auto-responsive" data-role="list">
                  <li
                    className="fifth"
                    data-role="item"
                    data-item="i"
                    data-key={30661}
                  >
                    <div className="side-padding-medium fit text-center">
                      <img
                        alt="Home Advisor Top Rated"
                        title="Home Advisor Top Rated"
                        src={HomeAdvisorImg}
                      />
                    </div>
                  </li>
                  <li
                    className="fifth"
                    data-role="item"
                    data-item="i"
                    data-key={30662}
                  >
                    <div className="side-padding-medium fit text-center">
                      <img
                        alt="Homeadvisor -  Elite Service"
                        title="Homeadvisor -  Elite Service"
                        src={ToppingImg}
                      />
                    </div>
                  </li>
                  <li
                    className="fifth"
                    data-role="item"
                    data-item="i"
                    data-key={30663}
                  >
                    <div className="side-padding-medium fit text-center">
                      <img
                        alt="BBB Accredited A+ Rating"
                        title="BBB Accredited A+ Rating"
                        src={BBBImg}
                      />
                    </div>
                  </li>
                  <li
                    className="fifth"
                    data-role="item"
                    data-item="i"
                    data-key={30664}
                  >
                    <div className="side-padding-medium fit text-center">
                      <img
                        alt="100% Guarantee"
                        title="100% Guarantee"
                        src={HiclipartImg}
                      />
                    </div>
                  </li>
                  <li
                    className="fifth"
                    data-role="item"
                    data-item="i"
                    data-key={30994}
                  >
                    <div className="side-padding-medium fit text-center">
                      <img
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                        alt="Hollywood Chamber of Commerce"
                        title="Hollywood Chamber of Commerce"
                        data-src="../../images/HollywoodChamber-logo.png"
                      />
                    </div>
                  </li>
                  <li
                    className="fifth"
                    data-role="item"
                    data-item="i"
                    data-key={30995}
                  >
                    <div className="side-padding-medium fit text-center">
                      <img
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                        alt="Certified Flow-tech expert"
                        title="Certified Flow-tech expert"
                        data-src="../../images/flowtech.png"
                      />
                    </div>
                  </li>
                  <li
                    className="fifth"
                    data-role="item"
                    data-item="i"
                    data-key={30996}
                  >
                    <div className="side-padding-medium fit text-center">
                      <img
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                        alt="Superpro House Call Pro"
                        title="Superpro House Call Pro"
                        data-src="../../images/superhero.png"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section
            className="blog v7 light-bg text-left col-60-40 items-spaced bg-image bg-box-unlike svg-deco-bottom-hill-4 svg-deco-bottom-wave-bottom"
            id="BlogV7"
            data-onvisible="show"
          >
            <picture className="img-bg" role="presentation" data-role="picture">
              <source
                media="(max-width: 500px)"
                srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                data-src="../../images/blog-v7-bg-mobile.jpg"
              />
              <img alt="" src="../../images/blog-v7-bg.jpg" />
            </picture>
            <div className="flex-auto-responsive-block-1024-margined flex-direction item-spacing item-widths align-items main">
              <div className="relative">
                <header className="text-align center-800" id="BlogV7Header">
                  <h4>Read Our Latest Blog Posts</h4>
                  <strong>
                    Stay Updated With Tips, Tricks, and Educational Plumbing
                    Articles
                  </strong>
                  <img className="header-flair" src={tltBdrImg} />
                </header>
                <ul
                  className="blog-list flex-grid-wrap-auto-size-max-2-block-500 close-gap-500 ui-repeater"
                  id="BlogV7List"
                >
                  <li className="flex- auto" data-item="i" data-key={1302513}>
                    <Link
                      className="flex-column full border-radius-item scaling-img-item bg-box relative"
                      to="/blog/2022/january/read-this-before-you-buy-a-house-in-florida-"
                    >
                      <div
                        className="img pad-height-50 fit full"
                        role="presentation"
                      >
                        <img
                          alt="A couple (man and woman) admiring a 2-story Florida house and asking questions before purchasing"
                          src={shutter1Img}
                        />
                      </div>
                      <div className="flex-column-top side-padding-large vertical-padding-tiny full auto">
                        <div className="fit full bottom-margin-tiny">
                          <span className="blog-time-style full">
                            <time content="Jan 21, 2022">Jan 21</time>
                          </span>
                          <strong className="title-style-4 title-color-4">
                            Read This Before You Buy a House in Florida
                          </strong>
                        </div>
                        <span className="fit btn v2">View Article</span>
                      </div>
                    </Link>
                  </li>
                  <li className="flex- auto" data-item="i" data-key={1279586}>
                    <Link
                      className="flex-column full border-radius-item scaling-img-item bg-box relative"
                      to="/blog/2021/october/what-homeowners-should-know-about-septic-tanks"
                    >
                      <div
                        className="img pad-height-50 fit full"
                        role="presentation"
                      >
                        <img
                          alt="Do all homes have septic tanks? Look for a septic tank cover in the ground"
                          src={SpecticImg}
                        />
                      </div>
                      <div className="flex-column-top side-padding-large vertical-padding-tiny full auto">
                        <div className="fit full bottom-margin-tiny">
                          <span className="blog-time-style full">
                            <time content="Oct 25, 2021">Oct 25</time>
                          </span>
                          <strong className="title-style-4 title-color-4">
                            What Homeowners Should Know about Septic Tanks
                          </strong>
                        </div>
                        <span className="fit btn v2">View Article</span>
                        <div
                          className="category-list fit full ui-repeater"
                          id="BlogV7List_ITM1279586_SideBlogV1CategoryList"
                        >
                          <div className="flex-middle">
                            <svg
                              viewBox="0 0 24 24"
                              className="margin-right-small fit"
                              role="presentation"
                            >
                              <use data-href="/cms/svg/site/ykmkv4_n6ok.24.svg#ribbon" />
                            </svg>
                            <ul className="flex-wrap">
                              <li data-item="i">Septic Tanks</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
                <div id="BlogV7BtnCon">
                  <div className="top-margin text-align center-800">
                    <Link
                      className="btn v1"
                      to="/blog"
                      aria-labelledby="BlogV7Header"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <picture
                className="img pad-height- bg-position box-shadow border-radius"
                role="presentation"
                data-role="picture"
              >
                <source
                  media="(max-width: 500px)"
                  srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                  data-src="../../images/blog-v7-img-mobile.png"
                />
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                  alt=""
                  role="presentation"
                  data-src="../../images/blog-v7-img.png"
                  data-size={1920}
                />
              </picture>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Home;
