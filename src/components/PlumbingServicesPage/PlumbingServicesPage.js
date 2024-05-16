import React from 'react'
import '../../style/plumbingServices.css'
import mainstageV1Img from '../../images/mainstage-v1-bg.jpeg'
import panelgroupV4Img from '../../images/panel-group-v4-bg.jpeg'
import contentV3Img from '../../images/content-v3-img.png'
import valueV9Img from '../../images/values-v9-img.png'
import tltBdrImg from '../../images/tlt-bdr.png'
import tltBdr2Img from '../../images/tlt-bdr2.png'
import CustomerEmployeeIcon from "../../images/svg/customerEmployee.svg";
import KnowledgeAbleIcon from "../../images/svg/knowledgeAble.svg";
import ReliableHonestIcon from "../../images/svg/reliableHonest.svg";
import FullyStockIcon from "../../images/svg/fullyStock.svg";
import WaterFilterationIcon from "../../images/svg/WaterFiltration.svg";
import WaterHeatersIcon from "../../images/svg/WaterHeaters.svg";
import TanklessElectricIcon from "../../images/svg/TanklessElectric.svg";
import SewerServicesIcon from "../../images/svg/SewerServices.svg";
import CustomHomeIcon from "../../images/svg/CustomHome.svg";
import CameraDrainIcon from "../../images/svg/CameraDrain.svg";
import BackwaterValves from '../../images/svg/BackwaterValves.svg'
import PlumbingUpgrades from '../../images/svg/PlumbingUpgrades.svg'
import BathroomPlumbingRenovation from '../../images/svg/BathroomPlumbingRenovation.svg'
import OtherServicesIcon from '../../images/svg/OtherServicesIcon.svg'
import CommercialPlumbing from '../../images/svg/CommercialPlumbing.svg'
import ToiletsIcon from '../../images/svg/ToiletsIcon.svg'
import LeaksIcon from '../../images/svg/LeaksIcon.svg'
import WholeHomeRepiping from '../../images/svg/WholeHomeRepiping.svg'
import ThermostaticPressure from '../../images/svg/ThermostaticPressure.svg'
import SewerInstallation from '../../images/svg/SewerInstallation.svg'
import SepticSewer from '../../images/svg/SepticSewer.svg'
import TanklessGasWater from '../../images/svg/TanklessGasWater.svg'
import { Link } from 'gatsby'
import ServicesForm from '../../ReuseComponents/AsideForm/ServicesForm'
function PlumbingServicesPage() {
  return (
<main id="MainZone">
  <section
    className="mainstage v1s bg-image dark-bg bg-box-none text-center no-padding"
    id="MainstageV1"
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
        data-src="/assets/mainstages/mainstage-v1-bg-mobile.jpg"
      />
      <source
        media="(max-width: 800px)"
        srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        data-src="/assets/mainstages/mainstage-v1-bg-tablet.jpg"
      />
      <img

        loading="lazy"
        alt=""
        src={mainstageV1Img}
      />
    </picture>
    <div className="main">
      <div className="relative box">
        <picture className="img-bg" role="presentation" data-role="picture">
          <source
            media="(max-width: 500px)"
            srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
            data-src="/assets/mainstages/mainstage-v1-img-mobile.png"
          />
          <source
            media="(max-width: 800px)"
            srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
            data-src="/assets/mainstages/mainstage-v1-img-tablet.png"
          />
          <img
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
            loading="lazy"
            alt=""
            data-src="/assets/mainstages/mainstage-v1-img.png"
          />
        </picture>
        <div className="bg-box side-padding-medium vertical-padding info text-align center-800 box-flair border-radius">
          <div className="flair-border">
            <span className="flair-1" />
            <span className="flair-2" />
            <em className="title-color-2 subtitle">
              Proudly Serving Boca Raton, Hallandale Beach, Davie, and Southern
              Florida
            </em>
            <span className="title-font title">
              <strong className="title-color-1">
                SAME-DAY SERVICE &amp; UPFRONT PRICING
              </strong>
            </span>
            <em className="title-color-2 subtitle">
              Locally Owned and Operated Since 2015
            </em>
            <img src={tltBdr2Img} className="header-flair"/>
            <p className="no-bottom-margin description">
              With state of the art plumbing technology and straightforward
              pricing, trust our reliable team to get your plumbing and water
              filtration job right!
            </p>
            <div className="top-margin">
              <ul className="flex-wrap-block-500-margined text-align center-800 close-gap-500">
                <li className="top-margin-tiny fit" data-item="i">
                  <Link
                    className="full btn v1"
                    to="https://book.housecallpro.com/book/Watermen-Plumbing-Inc/373bf5a05fc149db80dc799b751841fe"
                    target="_blank"
                  >
                    Schedule Service Today
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    className="panel-group v1 relative no-padding light-bg bg-image"
    id="PanelGroupV4"
  >
    <picture
      className="img-bg bg-position"
      role="presentation"
      data-role="picture"
    >
      <source
        media="(max-width: 500px)"
        srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        data-src="/assets/panel-groups/panel-group-v4-bg-mobile.jpg"
      />
      <source
        media="(max-width: 1024px)"
        srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        data-src="/assets/panel-groups/panel-group-v4-bg-tablet.jpg"
      />
      <img
        
        alt=""
        loading="lazy"
        src={panelgroupV4Img}
      />
    </picture>
    <div className="box" id="PanelGroupV4Zone">
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
                <h1 style={{ textAlign: "left" }}>
                  Boca Raton Plumbing Services
                </h1>
                <h2 style={{ textAlign: "left" }}>
                  Affordable Palm Beach County Plumbing &amp; Unmatched Customer
                  Service
                </h2>
                <p style={{ textAlign: "left" }}>
                  At
                  <Link to="/about-us"> Watermen Plumbing Inc. </Link>,
                  our team of licensed, trained, and certified plumbing
                  specialists are eager to provide the residents and
                  <Link to="/plumbing-services/commercial-plumbing"> business owners
                  </Link>{" "}
                  of Boca Raton, Davie, Hallandale Beach, and surrounding
                  customers a complete selection of plumbing services to address
                  everyday household problems.
                </p>
                <p style={{ textAlign: "left" }}>
                  Our dedicated team is available when you need us most! There’s
                  no plumbing job too small or large for our licensed, trained,
                  and certified team. We can help you resolve any plumbing
                  problem, whether it is a repair, upgrade, or replacement. You
                  can trust the professionals from Watermen Plumbing Inc. to get
                  your plumbing system running smoothly in no time. Customers in
                  Boca Raton can rely on the team of professionals at Watermen
                  Plumbing Inc. for your plumbing services.
                </p>
                <p className="content-quote v1 bg-box unlike-bg side-padding-medium vertical-padding-tiny title-style-3 title-color-3">
                  <strong>
                    <span style={{ fontSize: "24.9594px" }}>
                      Financing is available for our customers
                    </span>
                    . Call in the experts from Watermen Plumbing Inc. at
                    <Link
                      style={{ fontWeight: "bold" }}
                      to="tel:(954) 997-5797"
                      id="ContentV1_1"
                      data-replace-href="tel:{F:P:Cookie:PPCP1/(954)%20997-5797}"
                    >
                      <span
                        id="ContentV1_2"
                        data-process="replace"
                        data-replace="{F:P:Cookie:PPCP1/(954)%20997-5797}"
                      > (954) 997-5797
                      </span>
                    </Link>{" "}
                    or
                    <Link
                      style={{ fontWeight: "bold" }}
                      to="/contact-us"
                    >
                      contact us online
                    </Link>{" "}
                    for plumbing services in Boca Raton, Hallandale Beach, &amp;
                    Davie.
                  </strong>
                </p>
                <h3 style={{ textAlign: "left" }}>
                  Providing Major Plumbing Services to Customers in Boca Raton
                </h3>
                <p style={{ textAlign: "left" }}>
                  At Watermen Plumbing Inc., we go the extra mile to show our
                  customers how important they are to us. Our hardworking staff
                  wants to provide each customer with a positive customer
                  service experience that leaves them ready to spread the word
                  that Watermen Plumbing Inc. provides the highest level of
                  quality plumbing in Southern Florida. We know that when the
                  systems in your house aren’t working properly, you can’t relax
                  and enjoy your home.
                </p>
                <ul>
                  <li style={{ textAlign: "left" }}>
                    <b>Sewer Services</b> – Our team services your sewer lines
                    and
                    <Link to="/plumbing-services/drain-issues/drain-cleaning-snaking"> drains
                    </Link>{" "}
                    to remove clogs, stop leaks, and replace damaged piping.
                    Broken sewer lines and pipe failures are a messy business,
                    so when your sewer pipes need repair, look no further than
                    the experts at Watermen Plumbing Inc.
                  </li>
                  <li style={{ textAlign: "left" }}>
                    <b>Whole House Repiping – </b>Do you have aging pipes? Are
                    they leaking or draining slowly? You may need to have the
                    sewer piping network underneath your home replaced. A
                    <Link to="/plumbing-services/whole-home-repiping"> whole-house repiping
                    </Link>{" "}
                    job leaves you with a completely new plumbing system.
                    Repiping is typically a large-scale job. The results should
                    ensure you never need plumbing installed again.
                  </li>
                  <li style={{ textAlign: "left" }}>
                    <b>Water Heater</b> – We specialize in the repair,
                    servicing, and installation of all brands and types of
                    <Link to="/plumbing-services/water-heaters"> water heaters </Link>,
                    including tankless, traditional, gas, and electric.
                  </li>
                  <li style={{ textAlign: "left" }}>
                    <b>Water Filtration</b> – Hard water issues may not seem
                    like a service associated with plumbing, but in reality,
                    hard water is very damaging to plumbing fixtures. We can
                    inspect your system and
                    <Link to="/plumbing-services/water-filtration"> install water purification systems
                    </Link>{" "}
                    to eliminate the problem.
                  </li>
                  <li style={{ textAlign: "left" }}>
                    <b>Backwater Valves</b> -
                    <Link to="/plumbing-services/backwater-valves"> Backwater valves </Link>{" "}
                    prevent sewer waters from reentering your home once it’s
                    been sent into the sewer lines. The valve contains specialty
                    flaps that allow water to exit your home, but once the flap
                    is closed, it prevents re-entry.
                  </li>
                </ul>
                <p
                  style={{ textAlign: "left" }}
                  className="content-quote v1 bg-box unlike-bg side-padding-medium vertical-padding-tiny title-style-3 title-color-3"
                >
                  <b>
                    We offer same-day appointments and weekend emergency calls.
                    Call in the experts from Watermen Plumbing Inc. at
                    <Link
                      to="tel:(954) 997-5797"
                      id="ContentV1_3"
                      data-replace-href="tel:{F:P:Cookie:PPCP1/(954)%20997-5797}"
                    >
                      <span
                        id="ContentV1_4"
                        data-process="replace"
                        data-replace="{F:P:Cookie:PPCP1/(954)%20997-5797}"
                      > (954) 997-5797
                      </span>
                    </Link>{" "}
                    or
                    <Link to="/contact-us"> contact us online </Link>.
                  </b>
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section
        className="content v3 light-bg text-left items-overlapped bg-image vertical-middle col-60-40 bg-box-none"
        id="ContentV3"
        data-onvisible="show"
      >
        <picture className="img-bg" role="presentation" data-role="picture">
          <source
            media="(max-width: 500px)"
            srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
            data-src="/assets/content/content-v3-bg-mobile.jpg"
          />
          <source
            media="(max-width: 800px)"
            srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
            data-src="/assets/content/content-v3-bg-tablet.jpg"
          />
          <img
            
            alt=""
            src={contentV3Img}
          />
        </picture>
        <div className="main">
          <div className="flex-spaced-between-auto-responsive-margined flex-direction align-items item-spacing item-widths">
            <div className="text-align bg-box side-padding under-item vertical-padding-small box-flair border-radius">
              <div className="flair-border" data-content="true">
                <span className="flair-1" />
                <span className="flair-2" />
                <div className="overlap-padding">
                  <header
                    className="no-pad bottom-margin-tiny"
                    id="ContentV3Header"
                  >
                    <h2>Premier Customer Service in Boca Raton</h2>
                  </header>
                  <div className="content-style" id="ContentV3MainContent">
                    <p>
                      At
                      <Link to="/about-us"> Watermen Plumbing Inc </Link>
                      ., we are focused on customer service and expert
                      solutions. Our specialists and master plumbers know the
                      industry inside and out, and we never leave a job until
                      we’re certain the problem has been solved. As a
                      detailed-oriented group of problem solvers, we know how to
                      manage your job from beginning to end, and for extra
                      insurance, we even throw in a 1-year warranty that covers
                      all of our work. Our team goes above and beyond to offer
                      every customer savings opportunities and payment options
                      to work with every budget.
                    </p>
                    <p>
                      <b>
                        Our team of master plumbers and specialists are ready to
                        solve your plumbing issues in{" "}
                      </b>
                      <strong>Boca Raton</strong>,
                      <b>
                        Hallandale Beach, Davie and surrounding communities.
                        Call in the experts from Watermen Plumbing Inc. at
                        <Link
                          to="tel:(954) 997-5797"
                          id="ContentV3_1"
                          data-replace-href="tel:{F:P:Cookie:PPCP1/(954)%20997-5797}"
                        >
                          <span
                            id="ContentV3_2"
                            data-process="replace"
                            data-replace="{F:P:Cookie:PPCP1/(954)%20997-5797}"
                          > (954) 997-5797
                          </span>
                        </Link>{" "}
                        to solve all your plumbing problems!
                      </b>
                    </p>
                  </div>
                  <div id="ContentV3BtnCon">
                    <div className="top-margin-small relative">
                      <Link
                        className="btn v1"
                        to="/about-us"
                        aria-labelledby="ContentV3Header"
                      >
                        More About Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <picture
              className="over-item img bg-position pad-height- box-flair-offset border-radius"
              role="presentation"
              data-role="picture"
            >
              <source
                media="(max-width: 500px)"
                srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                data-src="/assets/content/content-v3-img-mobile.png"
              />
              <img
                
                alt=""
                src={contentV3Img}
              />
            </picture>
          </div>
        </div>
      </section>
      <section
        className="services v8 light-bg text-center bg-box-unlike large-padding"
        id="ServicesV8"
        data-onvisible="show"
      >
        <div className="main">
          <div className="bg-box side-padding vertical-padding-small box-flair border-radius">
            <div className="flair-border">
              <span className="flair-1" />
              <span className="flair-2" />
              <header className="text-align center-800" id="ServicesV8Header">
                <h4>How Can We Help You?</h4>
                <strong>
                  We are proud to offer an array of plumbing solutions. Put our
                  team to the test!
                </strong>
                <img src={tltBdr2Img} className="header-flair"/>
              </header>
              <ul
                className="services-list flex-wrap-spaced-between-block-800 ui-repeater"
                id="ServicesV8Services"
              >
                <li className="half flex-" data-item="i" data-key={54107}>
                  <Link
                    className="full flex-middle btn-style btn-color-hover full text-left"
                    to="/plumbing-services/water-filtration"
                  >
                   <WaterFilterationIcon className="right-margin-tiny fit"/>
                    <span>Water Filtration</span>
                  </Link>
                </li>
                <li className="half flex-" data-item="i" data-key={54108}>
                  <Link
                    className="full flex-middle btn-style btn-color-hover full text-left"
                    to="/plumbing-services/sewer-services/septic-to-sewer-conversion"
                  >
                    <SepticSewer className="right-margin-tiny fit"/>
                    <span>Septic to Sewer Conversion</span>
                  </Link>
                </li>
                <li className="half flex-" data-item="i" data-key={54109}>
                  <Link
                    className="full flex-middle btn-style btn-color-hover full text-left"
                    to="/plumbing-services/sewer-services/sewer-line-installation-replacement"
                  >
                    <SewerInstallation className="right-margin-tiny fit"/>
                    <span>Sewer Line Installation &amp; Replacement</span>
                  </Link>
                </li>
                <li className="half flex-" data-item="i" data-key={54111}>
                  <Link
                    className="full flex-middle btn-style btn-color-hover full text-left"
                    to="/plumbing-services/thermostatic-pressure-balancing"
                  >
                   <ThermostaticPressure className="right-margin-tiny fit"/>
                    <span>Thermostatic Pressure Balancing</span>
                  </Link>
                </li>
                <li className="half flex-" data-item="i" data-key={54112}>
                  <Link
                    className="full flex-middle btn-style btn-color-hover full text-left"
                    to="/plumbing-services/whole-home-repiping"
                  >
                    <WholeHomeRepiping className="right-margin-tiny fit"/>
                    <span>Whole Home Repiping</span>
                  </Link>
                </li>
                <li className="half flex-" data-item="i" data-key={54115}>
                  <Link
                    className="full flex-middle btn-style btn-color-hover full text-left"
                    to="/plumbing-services/leak-detection-repair"
                  >
                    <LeaksIcon className="right-margin-tiny fit"/>
                    <span>Leaks</span>
                  </Link>
                </li>
                <li className="half flex-" data-item="i" data-key={54116}>
                  <Link
                    className="full flex-middle btn-style btn-color-hover full text-left"
                    to="/plumbing-services/toilets"
                  >
                   <ToiletsIcon className="right-margin-tiny fit"/>
                    <span>Toilets</span>
                  </Link>
                </li>
                <li className="half flex-" data-item="i" data-key={54106}>
                  <Link
                    className="full flex-middle btn-style btn-color-hover full text-left"
                    to="/plumbing-services/commercial-plumbing"
                  >
                   <CommercialPlumbing className="right-margin-tiny fit"/>
                    <span>Commercial Plumbing</span>
                  </Link>
                </li>
                <li className="half flex-" data-item="i" data-key={54105}>
                  <Link
                    className="full flex-middle btn-style btn-color-hover full text-left"
                    to="/plumbing-services/other-services"
                  >
                    <OtherServicesIcon className="right-margin-tiny fit"/>
                    <span>Other Services</span>
                  </Link>
                </li>
                <li className="half flex-" data-item="i" data-key={54101}>
                  <Link
                    className="full flex-middle btn-style btn-color-hover full text-left"
                    to="/plumbing-services/water-heaters"
                  >
                  <WaterHeatersIcon className="right-margin-tiny fit"/>
                    <span>Water Heaters</span>
                  </Link>
                </li>
                <li className="half flex-" data-item="i" data-key={54113}>
                  <Link
                    className="full flex-middle btn-style btn-color-hover full text-left"
                    to="/plumbing-services/drain-issues/camera-drain-inspection"
                  >
                    <CameraDrainIcon className="right-margin-tiny fit"/>
                    <span>Camera Drain Inspection</span>
                  </Link>
                </li>
                <li className="half flex-" data-item="i" data-key={54103}>
                  <Link
                    className="full flex-middle btn-style btn-color-hover full text-left"
                    to="/plumbing-services/tankless-electric-water-heater"
                  >
                   <TanklessElectricIcon className="right-margin-tiny fit"/>
                    <span>Tankless Electric Water Heater</span>
                  </Link>
                </li>
                <li className="half flex-" data-item="i" data-key={54104}>
                  <Link
                    className="full flex-middle btn-style btn-color-hover full text-left"
                    to="/plumbing-services/tankless-gas-water-heater"
                  >
                   <TanklessGasWater className="right-margin-tiny fit"/>
                    <span>Tankless Gas Water Heater</span>
                  </Link>
                </li>
                <li className="half flex-" data-item="i" data-key={54110}>
                  <Link
                    className="full flex-middle btn-style btn-color-hover full text-left"
                    to="/plumbing-services/sewer-services"
                  >
                   <SewerServicesIcon className="right-margin-tiny fit"/>
                    <span>Sewer Services</span>
                  </Link>
                </li>
                <li className="half flex-" data-item="i" data-key={54100}>
                  <Link
                    className="full flex-middle btn-style btn-color-hover full text-left"
                    to="/plumbing-services/custom-home-plumbing"
                  >
                   <CustomHomeIcon className="right-margin-tiny fit"/>
                    <span>Custom Home Plumbing</span>
                  </Link>
                </li>
                <li className="half flex-" data-item="i" data-key={54097}>
                  <Link
                    className="full flex-middle btn-style btn-color-hover full text-left"
                    to="/plumbing-services/bathroom-plumbing-renovation-upgrade"
                  >
                   <BathroomPlumbingRenovation className="right-margin-tiny fit"/>
                    <span>Bathroom Plumbing Renovation Upgrade</span>
                  </Link>
                </li>
                <li className="half flex-" data-item="i" data-key={54102}>
                  <Link
                    className="full flex-middle btn-style btn-color-hover full text-left"
                    to="/plumbing-services/plumbing-upgrades"
                  >
                    <PlumbingUpgrades className="right-margin-tiny fit"/>
                    <span>Plumbing Upgrades</span>
                  </Link>
                </li>
                <li className="half flex-" data-item="i" data-key={54099}>
                  <Link
                    className="full flex-middle btn-style btn-color-hover full text-left"
                    to="/plumbing-services/backwater-valves"
                  >
                   <BackwaterValves className="right-margin-tiny fit"/>
                    <span>Backwater Valves</span>
                  </Link>
                </li>
              </ul>
              <div id="ServicesV8BtnCon"></div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="values v13 light-bg items-spaced col-66-33 flow-reverse bg-bottom-center text-left vertical-top medium-padding bg-box-unlike"
        id="ValuesV13"
        data-onvisible="show"
      >
        <Link name="valuesAnchor" />
        <div className="main relative">
          <div className="flex-spaced-between-auto-responsive-margined flex-direction align-items item-spacing item-widths center-800">
            <div className="over-item">
              <header className="text-align center-800" id="ValuesV13Header">
                <h4>Why Customers Choose Us?</h4>
                <strong>
                  We Believe That Only the Best Is Good Enough, for You!
                </strong>
                <img src={tltBdrImg} className="header-flair"/>
              </header>
              <ul
                className="values-list flex-wrap-grid-block-800-break-1024-auto-size-max-3 close-gap-800 ui-repeater"
                id="ValuesV13List"
              >
                <li
                  className="flex-column-center center-800 auto side-padding-small vertical-padding-tiny bg-box border-radius-item"
                  data-item="i"
                  data-key={15797}
                >
                  <div className="flex-start center-800">
                    <span className="ico-con">
                     <CustomerEmployeeIcon className="values-icon"/>
                    </span>
                  </div>
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
                  className="flex-column-center center-800 auto side-padding-small vertical-padding-tiny bg-box border-radius-item"
                  data-item="i"
                  data-key={15796}
                >
                  <div className="flex-start center-800">
                    <span className="ico-con">
                     <KnowledgeAbleIcon className="values-icon"/>
                    </span>
                  </div>
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
                  className="flex-column-center center-800 auto side-padding-small vertical-padding-tiny bg-box border-radius-item"
                  data-item="i"
                  data-key={15795}
                >
                  <div className="flex-start center-800">
                    <span className="ico-con">
                    <ReliableHonestIcon className="values-icon"/>
                    </span>
                  </div>
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
                  className="flex-column-center center-800 auto side-padding-small vertical-padding-tiny bg-box border-radius-item"
                  data-item="i"
                  data-key={15794}
                >
                  <div className="flex-start center-800">
                    <span className="ico-con">
                     <FullyStockIcon className="values-icon"/>
                    </span>
                  </div>
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
              <div id="VideoV13MoreBtn"></div>
            </div>
            <picture
              className="img pad-height- bg-position border-radius under-item"
              role="presentation"
              data-role="picture"
            >
              <source
                media="(max-width: 500px)"
                srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                data-src="/assets/values/values-v9-img-mobile.png"
              />
              <img
                
                alt=""
                src={valueV9Img}
              />
            </picture>
          </div>
        </div>
      </section>
      <ServicesForm/>
    </div>
  </section>
</main>

  )
}

export default PlumbingServicesPage