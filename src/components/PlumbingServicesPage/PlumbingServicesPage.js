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
                  <a
                    className="full btn v1"
                    href="https://book.housecallpro.com/book/Watermen-Plumbing-Inc/373bf5a05fc149db80dc799b751841fe"
                    target="_blank"
                  >
                    Schedule Service Today
                  </a>
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
                  <a href="../about-us/index.html"> Watermen Plumbing Inc. </a>,
                  our team of licensed, trained, and certified plumbing
                  specialists are eager to provide the residents and
                  <a href="commercial-plumbing/index.html"> business owners
                  </a>{" "}
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
                    <a
                      style={{ fontWeight: "bold" }}
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
                    or
                    <a
                      style={{ fontWeight: "bold" }}
                      href="../contact-us/index.html"
                    >
                      contact us online
                    </a>{" "}
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
                    <a href="drain-issues/drain-cleaning-snaking/index.html"> drains
                    </a>{" "}
                    to remove clogs, stop leaks, and replace damaged piping.
                    Broken sewer lines and pipe failures are a messy business,
                    so when your sewer pipes need repair, look no further than
                    the experts at Watermen Plumbing Inc.
                  </li>
                  <li style={{ textAlign: "left" }}>
                    <b>Whole House Repiping – </b>Do you have aging pipes? Are
                    they leaking or draining slowly? You may need to have the
                    sewer piping network underneath your home replaced. A
                    <a href="whole-home-repiping/index.html"> whole-house repiping
                    </a>{" "}
                    job leaves you with a completely new plumbing system.
                    Repiping is typically a large-scale job. The results should
                    ensure you never need plumbing installed again.
                  </li>
                  <li style={{ textAlign: "left" }}>
                    <b>Water Heater</b> – We specialize in the repair,
                    servicing, and installation of all brands and types of
                    <a href="water-heaters/index.html"> water heaters </a>,
                    including tankless, traditional, gas, and electric.
                  </li>
                  <li style={{ textAlign: "left" }}>
                    <b>Water Filtration</b> – Hard water issues may not seem
                    like a service associated with plumbing, but in reality,
                    hard water is very damaging to plumbing fixtures. We can
                    inspect your system and
                    <a href="water-filtration/index.html"> install water purification systems
                    </a>{" "}
                    to eliminate the problem.
                  </li>
                  <li style={{ textAlign: "left" }}>
                    <b>Backwater Valves</b> -
                    <a href="backwater-valves/index.html"> Backwater valves </a>{" "}
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
                    <a
                      href="tel:(954) 800-6364"
                      id="ContentV1_3"
                      data-replace-href="tel:{F:P:Cookie:PPCP1/(954)%20800-6364}"
                    >
                      <span
                        id="ContentV1_4"
                        data-process="replace"
                        data-replace="{F:P:Cookie:PPCP1/(954)%20800-6364}"
                      > (954) 800-6364
                      </span>
                    </a>{" "}
                    or
                    <a href="../contact-us/index.html"> contact us online </a>.
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
                      <a href="../about-us/index.html"> Watermen Plumbing Inc </a>
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
                        <a
                          href="tel:(954) 800-6364"
                          id="ContentV3_1"
                          data-replace-href="tel:{F:P:Cookie:PPCP1/(954)%20800-6364}"
                        >
                          <span
                            id="ContentV3_2"
                            data-process="replace"
                            data-replace="{F:P:Cookie:PPCP1/(954)%20800-6364}"
                          > (954) 800-6364
                          </span>
                        </a>{" "}
                        to solve all your plumbing problems!
                      </b>
                    </p>
                  </div>
                  <div id="ContentV3BtnCon">
                    <div className="top-margin-small relative">
                      <a
                        className="btn v1"
                        href="../about-us/index.html"
                        aria-labelledby="ContentV3Header"
                      >
                        More About Us
                      </a>
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
                  <a
                    className="full flex-middle btn-style btn-color-hover full text-left"
                    href="water-filtration/index.html"
                  >
                   <WaterFilterationIcon className="right-margin-tiny fit"/>
                    <span>Water Filtration</span>
                  </a>
                </li>
                <li className="half flex-" data-item="i" data-key={54108}>
                  <a
                    className="full flex-middle btn-style btn-color-hover full text-left"
                    href="sewer-services/septic-to-sewer-conversion/index.html"
                  >
                    <SepticSewer className="right-margin-tiny fit"/>
                    <span>Septic to Sewer Conversion</span>
                  </a>
                </li>
                <li className="half flex-" data-item="i" data-key={54109}>
                  <a
                    className="full flex-middle btn-style btn-color-hover full text-left"
                    href="sewer-services/sewer-line-installation-replacement/index.html"
                  >
                    <SewerInstallation className="right-margin-tiny fit"/>
                    <span>Sewer Line Installation &amp; Replacement</span>
                  </a>
                </li>
                <li className="half flex-" data-item="i" data-key={54111}>
                  <a
                    className="full flex-middle btn-style btn-color-hover full text-left"
                    href="thermostatic-pressure-balancing/index.html"
                  >
                   <ThermostaticPressure className="right-margin-tiny fit"/>
                    <span>Thermostatic Pressure Balancing</span>
                  </a>
                </li>
                <li className="half flex-" data-item="i" data-key={54112}>
                  <a
                    className="full flex-middle btn-style btn-color-hover full text-left"
                    href="whole-home-repiping/index.html"
                  >
                    <WholeHomeRepiping className="right-margin-tiny fit"/>
                    <span>Whole Home Repiping</span>
                  </a>
                </li>
                <li className="half flex-" data-item="i" data-key={54115}>
                  <a
                    className="full flex-middle btn-style btn-color-hover full text-left"
                    href="leak-detection-repair/index.html"
                  >
                    <LeaksIcon className="right-margin-tiny fit"/>
                    <span>Leaks</span>
                  </a>
                </li>
                <li className="half flex-" data-item="i" data-key={54116}>
                  <a
                    className="full flex-middle btn-style btn-color-hover full text-left"
                    href="toilets/index.html"
                  >
                   <ToiletsIcon className="right-margin-tiny fit"/>
                    <span>Toilets</span>
                  </a>
                </li>
                <li className="half flex-" data-item="i" data-key={54106}>
                  <a
                    className="full flex-middle btn-style btn-color-hover full text-left"
                    href="commercial-plumbing/index.html"
                  >
                   <CommercialPlumbing className="right-margin-tiny fit"/>
                    <span>Commercial Plumbing</span>
                  </a>
                </li>
                <li className="half flex-" data-item="i" data-key={54105}>
                  <a
                    className="full flex-middle btn-style btn-color-hover full text-left"
                    href="other-services/index.html"
                  >
                    <OtherServicesIcon className="right-margin-tiny fit"/>
                    <span>Other Services</span>
                  </a>
                </li>
                <li className="half flex-" data-item="i" data-key={54101}>
                  <a
                    className="full flex-middle btn-style btn-color-hover full text-left"
                    href="water-heaters/index.html"
                  >
                  <WaterHeatersIcon className="right-margin-tiny fit"/>
                    <span>Water Heaters</span>
                  </a>
                </li>
                <li className="half flex-" data-item="i" data-key={54113}>
                  <a
                    className="full flex-middle btn-style btn-color-hover full text-left"
                    href="drain-issues/camera-drain-inspection/index.html"
                  >
                    <CameraDrainIcon className="right-margin-tiny fit"/>
                    <span>Camera Drain Inspection</span>
                  </a>
                </li>
                <li className="half flex-" data-item="i" data-key={54103}>
                  <a
                    className="full flex-middle btn-style btn-color-hover full text-left"
                    href="tankless-electric-water-heater/index.html"
                  >
                   <TanklessElectricIcon className="right-margin-tiny fit"/>
                    <span>Tankless Electric Water Heater</span>
                  </a>
                </li>
                <li className="half flex-" data-item="i" data-key={54104}>
                  <a
                    className="full flex-middle btn-style btn-color-hover full text-left"
                    href="tankless-gas-water-heater/index.html"
                  >
                   <TanklessGasWater className="right-margin-tiny fit"/>
                    <span>Tankless Gas Water Heater</span>
                  </a>
                </li>
                <li className="half flex-" data-item="i" data-key={54110}>
                  <a
                    className="full flex-middle btn-style btn-color-hover full text-left"
                    href="sewer-services/index.html"
                  >
                   <SewerServicesIcon className="right-margin-tiny fit"/>
                    <span>Sewer Services</span>
                  </a>
                </li>
                <li className="half flex-" data-item="i" data-key={54100}>
                  <a
                    className="full flex-middle btn-style btn-color-hover full text-left"
                    href="custom-home-plumbing/index.html"
                  >
                   <CustomHomeIcon className="right-margin-tiny fit"/>
                    <span>Custom Home Plumbing</span>
                  </a>
                </li>
                <li className="half flex-" data-item="i" data-key={54097}>
                  <a
                    className="full flex-middle btn-style btn-color-hover full text-left"
                    href="bathroom-plumbing-renovation-upgrade/index.html"
                  >
                   <BathroomPlumbingRenovation className="right-margin-tiny fit"/>
                    <span>Bathroom Plumbing Renovation Upgrade</span>
                  </a>
                </li>
                <li className="half flex-" data-item="i" data-key={54102}>
                  <a
                    className="full flex-middle btn-style btn-color-hover full text-left"
                    href="plumbing-upgrades/index.html"
                  >
                    <PlumbingUpgrades className="right-margin-tiny fit"/>
                    <span>Plumbing Upgrades</span>
                  </a>
                </li>
                <li className="half flex-" data-item="i" data-key={54099}>
                  <a
                    className="full flex-middle btn-style btn-color-hover full text-left"
                    href="backwater-valves/index.html"
                  >
                   <BackwaterValves className="right-margin-tiny fit"/>
                    <span>Backwater Valves</span>
                  </a>
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
        <a name="valuesAnchor" />
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
      <form
        id="Form_ContactV1"
        method="post"
        encType="multipart/form-data"
        action="https://www.watermenplumbing.com/plumbing-services/"
      >
        <input type="hidden" name="_m_" defaultValue="ContactV1" />
        <section
          className="contact v1 bg-image bg-box-none text-center light-bg medium-padding bg-top-center svg-deco-bottom-hill-4 svg-deco-bottom-wave-bottom"
          id="ContactV1"
          data-onvisible="show"
        >
          <a name="contactAnchor" />
          <picture
            className="img-bg bg-position"
            role="presentation"
            data-role="picture"
          >
            <source
              media="(max-width: 500px)"
              srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              data-src="/assets/contact/contact-v1-bg-mobile.jpg"
            />
            <source
              media="(max-width: 800px)"
              srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              data-src="/assets/contact/contact-v1-bg-tablet.jpg"
            />
            <img
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              alt=""
              data-src="/assets/contact/contact-v1-bg.jpg"
            />
          </picture>
          <div className="main">
            <div className="bg-box border-radius side-padding vertical-padding-small box-flair">
              <div className="flair-border">
                <span className="flair-1" />
                <span className="flair-2" />
                <header className="text-align center-800" id="ContactV1Header">
                  <h4>Request Your Plumbing Service Today</h4>
                  <strong>
                    Complete the Form to Connect With Our Plumbing Team
                  </strong>
                  <img src={tltBdr2Img} className="header-flair"/>
                </header>
                <div id="ContactV1Form" className="ui-repeater">
                  <fieldset data-item="i" data-key="">
                    <ul className="flex-spaced-between-wrap-block-500">
                      <li className="half">
                        <div className="input-text">
                          <input
                            required="required"
                            type="text"
                            id="ContactV1Form_ITM0_FirstName"
                            className="ui-cms-input"
                            name="ContactV1Form$ITM0$FirstName"
                            defaultValue=""
                          />
                          <label
                            className="hide"
                            htmlFor="ContactV1Form_ITM0_FirstName"
                          >
                            First Name
                          </label>
                          <div
                            className="validation"
                            htmlFor="ContactV1Form_ITM0_FirstName"
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
                            id="ContactV1Form_ITM0_LastName"
                            className="ui-cms-input"
                            name="ContactV1Form$ITM0$LastName"
                            defaultValue=""
                          />
                          <label
                            className="hide"
                            htmlFor="ContactV1Form_ITM0_LastName"
                          >
                            Last Name
                          </label>
                          <div
                            className="validation"
                            htmlFor="ContactV1Form_ITM0_LastName"
                            data-type="valueMissing"
                          >
                            Please enter your last name.
                          </div>
                        </div>
                      </li>
                      <li className="half">
                        <div className="input-text">
                          <input
                            id="ContactV1Form_ITM0_Phone"
                            type="tel"
                            pattern="[(]\d{3}[)][\s]\d{3}[\-]\d{4}"
                            className="phone-mask ui-cms-input"
                            required="required"
                            name="ContactV1Form$ITM0$Phone"
                            defaultValue=""
                          />
                          <label
                            className="hide"
                            htmlFor="ContactV1Form_ITM0_Phone"
                          >
                            Phone
                          </label>
                          <div
                            className="validation"
                            htmlFor="ContactV1Form_ITM0_Phone"
                            data-type="valueMissing"
                          >
                            Please enter your phone number.
                          </div>
                          <div
                            className="validation"
                            htmlFor="ContactV1Form_ITM0_Phone"
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
                            id="ContactV1Form_ITM0_EmailAddress"
                            className="ui-cms-input"
                            name="ContactV1Form$ITM0$EmailAddress"
                            defaultValue=""
                          />
                          <label
                            className="hide"
                            htmlFor="ContactV1Form_ITM0_EmailAddress"
                          >
                            Email
                          </label>
                          <div
                            className="validation"
                            htmlFor="ContactV1Form_ITM0_EmailAddress"
                            data-type="valueMissing"
                          >
                            Please enter your email address.
                          </div>
                          <div
                            className="validation"
                            htmlFor="ContactV1Form_ITM0_EmailAddress"
                            data-type="typeMismatch"
                          >
                            This isn't a valid email address.
                          </div>
                        </div>
                      </li>
                      <li className="select">
                        <div className="input-text">
                          <select
                            id="ContactV1Form_ITM0_LeadTypeID"
                            required="required"
                            className="ui-cms-select ui-cms-input"
                            name="ContactV1Form$ITM0$LeadTypeID"
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
                            htmlFor="ContactV1Form_ITM0_LeadTypeID"
                          >
                            Are you a new customer?
                          </label>
                          <svg className="site-arrow">
                            <use href="../includes/flair.svg#arrow-down" />
                          </svg>
                          <div
                            className="validation"
                            htmlFor="ContactV1Form_ITM0_LeadTypeID"
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
                            id="ContactV1Form_ITM0_Message"
                            className="ui-cms-input"
                            name="ContactV1Form$ITM0$Message"
                            defaultValue={""}
                          />
                          <label
                            className="hide"
                            htmlFor="ContactV1Form_ITM0_Message"
                          >
                            Message
                          </label>
                          <div
                            className="validation"
                            htmlFor="ContactV1Form_ITM0_Message"
                            data-type="valueMissing"
                          >
                            Please enter a message.
                          </div>
                        </div>
                      </li>
                    </ul>
                  </fieldset>
                  <input
                    id="ContactV1Form_ITM0_FFD6"
                    type="hidden"
                    className="ui-cms-input"
                    name="ContactV1Form$ITM0$FFD6"
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
                      aria-labelledby="ContactV1Header"
                      type="submit"
                      id="ContactV1Form_ITM0_ctl08"
                      name="ContactV1Form$ITM0$ctl08"
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
    </div>
  </section>
</main>

  )
}

export default PlumbingServicesPage