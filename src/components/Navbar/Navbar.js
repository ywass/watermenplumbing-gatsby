import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import  '../../style/home.css'
import LogoImg from '../../images/Logoo.png'
import LogoImg2 from '../../images/Logo2.png'
import SearchIcon from '../../images/svg/search.svg'
import FloaterIcon from '../../images/svg/footer-access.svg'
function Navbar() {
  const [openMenu,setOpenMenu] = useState(false)
  return (
<header id="HeaderZone">
  <nav
    className="accessibility-options v1 dark-bg transparent-bg bg-box-like"
    id="AccessibilityOptionsV1"
    data-action="panel"
    data-showhide="true"
  >
  
  {!openMenu && <FloaterIcon
      
      className="floater"
     
  
      onClick={()=>setOpenMenu(true)}
    />
      }
  {openMenu &&
    <ul
      className="accessibility-menu bg-box"
      data-accessibility-menu="true"
      data-role="panel"
    >
      <li>
        <button
          className="full flex-middle btn-color-hover"
          title="Close the accessibility options menu"
          data-role="btn"
          data-type="close"
          onClick={()=>setOpenMenu(false)}
        >
          <svg viewBox="0 0 36 36" className="accessibility-icon">
            <use data-href="/cms/svg/site/ykmkv4_n6ok.36.svg#accessibility_hide" />
          </svg>
          Close
        </button>
      </li>
      <li>
        <button
          className="full flex-middle btn-color-hover"
          data-action="content"
        >
          <svg viewBox="0 0 36 36" className="accessibility-icon">
            <use data-href="/cms/svg/site/ykmkv4_n6ok.36.svg#accessibility_skip_to_co" />
          </svg>
          Skip to Content
        </button>
      </li>
      <li>
        <button
          className="full flex-middle btn-color-hover"
          data-action="highContrast"
        >
          <svg viewBox="0 0 36 36" className="accessibility-icon">
            <use data-href="/cms/svg/site/ykmkv4_n6ok.36.svg#accessibility_high_contr" />
          </svg>
          High Contrast
        </button>
      </li>
      <li>
        <button
          className="full flex-middle btn-color-hover"
          data-action="largeText"
        >
          <svg viewBox="0 0 36 36" className="accessibility-icon">
            <use data-href="/cms/svg/site/ykmkv4_n6ok.36.svg#accessibility_text_size" />
          </svg>
          Increase Text Size
        </button>
      </li>
      <li>
        <button
          className="full flex-middle btn-color-hover"
          data-action="clear"
        >
          <svg viewBox="0 0 36 36" className="accessibility-icon">
            <use data-href="/cms/svg/site/ykmkv4_n6ok.36.svg#accessibility_clear_all" />
          </svg>
          Clear All
        </button>
      </li>
    </ul>
}
  </nav>
  <div
    className="header v11-alt show light-bg bg-box-unlike"
    id="CustomHeaderV11Alt"
    universal_="true"
  >
    <a name="SiteTop" />
    <div
      className="nav-bar flex-spaced-between-block-800 center-800"
      id="HeaderV11AltTopNavigation"
    >
      <div className="box side-padding-small vertical-padding-tiny flex- max-logo">
     
        <Link className="top-logo fit flex-middle center-800" to="/">
          <img
            className="dark-logo mb-0"
            alt="Watermen Plumbing"
            title="Watermen Plumbing"
            src={LogoImg}
          />
          <img
            className="light-logo mb-0"
            alt="Watermen Plumbing"
            title="Watermen Plumbing"
            src={LogoImg2}
          />
        </Link>
      </div>
      <div className="flex-column auto">
        <div className="top-bar bg-box side-padding-small flex-middle-spaced-end full">
          <a
            className="btn v1 margin-right hide-500"
            href="mailto:info@watermenplumbing.com"
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            Now Hiring
          </a>
          <nav
            className="flex- hide-1280 secondary-nav right-margin-large"
            aria-label="Quick Links"
            id="HeaderV11AltQuickLinks"
          >
            <ul className="flex-middle">
              <li>
                <Link to="/blog" style={{ textDecoration: 'none' }}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/photo-gallery" target="" style={{ textDecoration: 'none' }}>
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact-us" target="" style={{ textDecoration: 'none' }}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
          <p className='mb-0 phone'>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/></svg> */}
            Call us : <a href="tel:(954) 997-5797">(954) 997-5797</a>

          </p>
          <span
            id="HeaderV11AltTopNavigation_HDR0_CustomHeaderV11Alt_1"
            data-process="if"
            style={{ display: "none" }}
            field="{Cookie:PPCP1/9548006364}"
          >
            <div
              className="phones flex-middle-spaced-between-block-800 center-800"
              id="HeaderV11AltPhoneLinks"
            >
              <div>
                <strong className="phone-tagline title-font title-color-5">
                  Request Service Today
                </strong>
                <Link
                  className="phone-number-style"
                  to="tel:954-997-5797"
                  id="CustomHeaderV11Alt_2"
                  data-replace-href="tel:{F:P3:Cookie:PPCP1/954-997-5797}"
                  style={{ textDecoration: 'none' }}
                >
                  <span
                    id="CustomHeaderV11Alt_3"
                    data-process="replace"
                    data-replace="{F:P3:Cookie:PPCP1/954-997-5797}"
                  >
                    954-997-5797
                  </span>
                </Link>
              </div>
              <span
                id="HeaderV11AltTopNavigation_HDR0_CustomHeaderV11Alt_4"
                data-process="if"
                style={{ display: "none" }}
                field="{Cookie:PPCP2/}"
              >
                <span className="right-margin left-margin-small hide-800">
                  |
                </span>
                <div>
                  <Link
                    className="phone-number-style"
                    to="tel:"
                    id="CustomHeaderV11Alt_5"
                    data-replace-href="tel:{F:P3:Cookie:PPCP2/}"
                    style={{ textDecoration: 'none' }}
                  >
                    <span
                      id="CustomHeaderV11Alt_6"
                      data-process="replace"
                      data-replace="{F:P3:Cookie:PPCP2/}"
                    />
                  </Link>
                </div>
              </span>
            </div>
          </span>
          <Link
            className="search-link btn-colors hide-500 border-radius fit left-margin-large"
            to="/site-search"
            title="Search Our Site"
            aria-label="Search Our Site"
            style={{ textDecoration: 'none' }}
          >
            <SearchIcon/>
          </Link>
        </div>
        <div className="bottom-bar side-padding-small flex-between-middle auto full">
          <nav className="top-nav side-padding-small vertical-padding auto stretch flex- hide-1024">
            <ul
              className="flex- auto"
              role="menubar"
              aria-label="Top Navigation"
            >
              <li
                className="selected flex-block-1024 auto relative"
                role="menuitem"
              >
                <Link
                  className="flex-middle-center-block-1024 auto center-1024"
                  to="/"
                  target=""
                  style={{ textDecoration: 'none' }}
                >
                  Home
                </Link>
              </li>
              <li className=" flex-block-1024 auto relative" role="menuitem">
                <Link
                  className="flex-middle-center-block-1024 auto center-1024"
                  to="/about-us"
                  target=""
                  style={{ textDecoration: 'none' }}
                >
                  About Us
                </Link>
                <ul className="fly-nav ui-scroll bg-box like-bg" role="menu">
                  <li className="" role="menuitem">
                    <Link
                      className="btn-color-hover"
                      to="/about-us/areas-we-serve"
                      target=""
                      style={{ textDecoration: 'none' }}
                    >
                      Areas We Serve
                    </Link>
                  </li>
                </ul>
              </li>
              <li className=" flex-block-1024 auto relative" role="menuitem">
                <Link
                  className="flex-middle-center-block-1024 auto center-1024"
                  to="/plumbing-services"
                  target=""
                  style={{ textDecoration: 'none' }}
                >
                  Plumbing Services
                </Link>
                <ul className="fly-nav ui-scroll bg-box like-bg" role="menu">
                  <li className="" role="menuitem">
                    <Link
                      className="btn-color-hover"
                      to="/plumbing-services/sewer-services"
                      target=""
                      style={{ textDecoration: 'none' }}
                    >
                      Sewer Services
                    </Link>
                  </li>
                  <li className="" role="menuitem">
                    <Link
                      className="btn-color-hover"
                      to="/plumbing-services/drain-issues"
                      target=""
                      style={{ textDecoration: 'none' }}
                    >
                      Drain Issues
                    </Link>
                  </li>
                  <li className="" role="menuitem">
                    <Link
                      className="btn-color-hover"
                      to="/plumbing-services/whole-home-repiping"
                      target=""
                      style={{ textDecoration: 'none' }}
                    >
                      Whole Home Repiping
                    </Link>
                  </li>
                  <li className="" role="menuitem">
                    <Link
                      className="btn-color-hover"
                      to="/plumbing-services/water-heaters"
                      target=""
                      style={{ textDecoration: 'none' }}
                    >
                      Water Heaters
                    </Link>
                  </li>
                  <li className="" role="menuitem">
                    <Link
                      className="btn-color-hover"
                      to="/plumbing-services/water-filtration"
                      target=""
                      style={{ textDecoration: 'none' }}
                    >
                      Water Filtration
                    </Link>
                  </li>
                  <li className="" role="menuitem">
                    <Link
                      className="btn-color-hover"
                      to="/plumbing-services/backwater-valves"
                      target=""
                      style={{ textDecoration: 'none' }}
                    >
                      Backwater Valves
                    </Link>
                  </li>
                  <li className="" role="menuitem">
                    <Link
                      className="btn-color-hover"
                      to="/plumbing-services/bathroom-plumbing-renovation-upgrade"
                      target=""
                      style={{ textDecoration: 'none' }}
                    >
                      Bathroom Plumbing Renovation Upgrade
                    </Link>
                  </li>
                  <li className="" role="menuitem">
                    <Link
                      className="btn-color-hover"
                      to="/plumbing-services/commercial-plumbing"
                      target=""
                      style={{ textDecoration: 'none' }}
                    >
                      Commercial Plumbing
                    </Link>
                  </li>
                  <li className="" role="menuitem">
                    <Link
                      className="btn-color-hover"
                      to="/plumbing-services/custom-home-plumbing"
                      target=""
                      style={{ textDecoration: 'none' }}
                    >
                      Custom Home Plumbing
                    </Link>
                  </li>
                  <li className="" role="menuitem">
                    <Link
                      className="btn-color-hover"
                      to="/plumbing-services/leak-detection-repair"
                      target=""
                      style={{ textDecoration: 'none' }}
                    >
                      Leak Detection &amp; Repair
                    </Link>
                  </li>
                  <li className="" role="menuitem">
                    <Link
                      className="btn-color-hover"
                      to="/plumbing-services/plumbing-upgrades"
                      target=""
                      style={{ textDecoration: 'none' }}
                    >
                      Plumbing Upgrades
                    </Link>
                  </li>
                  <li className="" role="menuitem">
                    <Link
                      className="btn-color-hover"
                      to="/plumbing-services/thermostatic-pressure-balancing"
                      target=""
                      style={{ textDecoration: 'none' }}
                    >
                      Thermostatic Pressure Balancing
                    </Link>
                  </li>
                  <li className="" role="menuitem">
                    <Link
                      className="btn-color-hover"
                      to="/plumbing-services/toilets"
                      target=""
                      style={{ textDecoration: 'none' }}
                    >
                      Toilets
                    </Link>
                  </li>
                  <li className="" role="menuitem">
                    <Link
                      className="btn-color-hover"
                      to="/plumbing-services/other-services"
                      target=""
                      style={{ textDecoration: 'none' }}
                    >
                      Other Services
                    </Link>
                  </li>
                  <li className="" role="menuitem">
                    <Link
                      className="btn-color-hover"
                      to="/plumbing-services/tankless-gas-water-heater"
                      target=""
                      style={{ textDecoration: 'none' }}
                    >
                      Tankless Gas Water Heater
                    </Link>
                  </li>
                  <li className="" role="menuitem">
                    <Link
                      className="btn-color-hover"
                      to="/plumbing-services/tankless-electric-water-heater"
                      target=""
                      style={{ textDecoration: 'none' }}
                    >
                      Tankless Electric Water Heater
                    </Link>
                  </li>
                </ul>
              </li>
              <li className=" flex-block-1024 auto relative" role="menuitem">
                <Link
                  className="flex-middle-center-block-1024 auto center-1024"
                  to="/plumbing-services/water-filtration"
                  target=""
                  style={{ textDecoration: 'none' }}
                >
                  Water Filtration
                </Link>
                <ul className="fly-nav ui-scroll bg-box like-bg" role="menu">
                  <li className="" role="menuitem">
                    <Link
                      className="btn-color-hover"
                      to="/plumbing-services/water-filtration/water-filtration-products"
                      target=""
                      style={{ textDecoration: 'none' }}
                    >
                      Water Filtration Products
                    </Link>
                  </li>
                </ul>
              </li>
              <li className=" flex-block-1024 auto relative" role="menuitem">
                <Link
                  className="flex-middle-center-block-1024 auto center-1024"
                  to="/coupons"
                  target=""
                  style={{ textDecoration: 'none' }}
                >
                  Coupons
                </Link>
              </li>
              <li className=" flex-block-1024 auto relative" role="menuitem">
                <Link
                  className="flex-middle-center-block-1024 auto center-1024"
                  to="/reviews"
                  target=""
                  style={{ textDecoration: 'none' }}
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </nav>
          <div
            className="cta fit left-margin-large right-margin-large vertical-padding-tiny flex-middle"
            id="HeaderV11AltCta"
          >
            <Link
              className="btn v1"
              to="https://book.housecallpro.com/book/Watermen-Plumbing-Inc/373bf5a05fc149db80dc799b751841fe?v2=true"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              BOOK ONLINE
            </Link>
            <Link
              className="btn v1 hiring top-margin"
              to="https://watermenplumbing.applicantlist.com/jobs/"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              Now Hiring
            </Link>
          </div>
          <button
            className="menu-btn desktop hide-800 btn-colors top-margin-small bottom-margin-small"
            title="Main Menu"
            aria-label="Main Menu"
            type="button"
            data-role="btn"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </div>
    <div className="nav-box bg-box flex-block-800" data-role="panel">
      <nav className="half flex- auto side-padding-medium vertical-padding-large">
        <div className="auto nav relative ui-scroll el-tab-box">
          <ul
            className="bottom-margin-small"
            aria-label="Quick Links Mobile"
            id="HeaderV11AltQuickLinksMobile"
          >
            <li className="  relative">
              <Link
                to="/blog"
                className="title-style-4 title-color-4"
                target=""
                style={{ textDecoration: 'none' }}
              >
                Blog
              </Link>
            </li>
            <li className="top-margin-small  relative">
              <Link
                to="/photo-gallery"
                className="title-style-4 title-color-4"
                target=""
                style={{ textDecoration: 'none' }}
              >
                Photo Gallery
              </Link>
            </li>
            <li className="top-margin-small  relative">
              <Link
                to="/contact-us"
                className="title-style-4 title-color-4"
                target=""
                style={{ textDecoration: 'none' }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <ul
            role="menubar"
            aria-label="Top Navigation"
            id="HeaderV11AltMobileNavigation"
          >
            <li className="  selected  relative" role="menuitem">
              <Link
                to="/"
                className="title-style-4 title-color-4"
                target=""
                style={{ textDecoration: 'none' }}
              >
                Home
              </Link>
            </li>
            <li
              className="top-margin-small   flex-middle-wrap relative"
              role="menuitem"
            >
              <Link
                to="/about-us"
                className="title-style-4 title-color-4"
                target=""
                style={{ textDecoration: 'none' }}
              >
                About Us
              </Link>
              <svg
                className="site-arrow el-tab relative"
                title="Open child menu of About Us"
              >
                <use href="includes/flair.svg#arrow-down" />
              </svg>
              <ul
                className="full bg-box like-bg no-shadow vertical-padding-tiny top-margin-tiny el-panel sliding"
                style={{ display: "none" }}
                role="menu"
              >
                <li className="" role="menuitem">
                  <Link
                    className="btn-color-hover"
                    to="/about-us/areas-we-serve"
                    target=""
                    style={{ textDecoration: 'none' }}
                  >
                    Areas We Serve
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className="top-margin-small   flex-middle-wrap relative"
              role="menuitem"
            >
              <Link
                to="/plumbing-services"
                className="title-style-4 title-color-4"
                target=""
                style={{ textDecoration: 'none' }}
              >
                Plumbing Services
              </Link>
              <svg
                className="site-arrow el-tab relative"
                title="Open child menu of Plumbing Services"
              >
                <use href="includes/flair.svg#arrow-down" />
              </svg>
              <ul
                className="full bg-box like-bg no-shadow vertical-padding-tiny top-margin-tiny el-panel sliding"
                style={{ display: "none" }}
                role="menu"
              >
                <li className="" role="menuitem">
                  <Link
                    className="btn-color-hover"
                    to="/plumbing-services/sewer-services"
                    target=""
                    style={{ textDecoration: 'none' }}
                  >
                    Sewer Services
                  </Link>
                </li>
                <li className="" role="menuitem">
                  <Link
                    className="btn-color-hover"
                    to="/plumbing-services/drain-issues"
                    target=""
                  >
                    Drain Issues
                  </Link>
                </li>
                <li className="" role="menuitem">
                  <Link
                    className="btn-color-hover"
                    to="/plumbing-services/whole-home-repiping"
                    target=""
                    style={{ textDecoration: 'none' }}
                  >
                    Whole Home Repiping
                  </Link>
                </li>
                <li className="" role="menuitem">
                  <Link
                    className="btn-color-hover"
                    to="/plumbing-services/water-heaters"
                    target=""
                    style={{ textDecoration: 'none' }}
                  >
                    Water Heaters
                  </Link>
                </li>
                <li className="" role="menuitem">
                  <Link
                    className="btn-color-hover"
                    to="/plumbing-services/water-filtration"
                    target=""
                    style={{ textDecoration: 'none' }}
                  >
                    Water Filtration
                  </Link>
                </li>
                <li className="" role="menuitem">
                  <Link
                    className="btn-color-hover"
                    to="/plumbing-services/backwater-valves"
                    target=""
                    style={{ textDecoration: 'none' }}
                  >
                    Backwater Valves
                  </Link>
                </li>
                <li className="" role="menuitem">
                  <Link
                    className="btn-color-hover"
                    to="/plumbing-services/bathroom-plumbing-renovation-upgrade"
                    target=""
                    style={{ textDecoration: 'none' }}
                  >
                    Bathroom Plumbing Renovation Upgrade
                  </Link>
                </li>
                <li className="" role="menuitem">
                  <Link
                    className="btn-color-hover"
                    to="/plumbing-services/commercial-plumbing"
                    target=""
                    style={{ textDecoration: 'none' }}
                  >
                    Commercial Plumbing
                  </Link>
                </li>
                <li className="" role="menuitem">
                  <Link
                    className="btn-color-hover"
                    to="/plumbing-services/custom-home-plumbing"
                    target=""
                    style={{ textDecoration: 'none' }}
                  >
                    Custom Home Plumbing
                  </Link>
                </li>
                <li className="" role="menuitem">
                  <Link
                    className="btn-color-hover"
                    to="/plumbing-services/leak-detection-repair"
                    target=""
                    style={{ textDecoration: 'none' }}
                  >
                    Leak Detection &amp; Repair
                  </Link>
                </li>
                <li className="" role="menuitem">
                  <Link
                    className="btn-color-hover"
                    to="/plumbing-services/plumbing-upgrades"
                    target=""
                    style={{ textDecoration: 'none' }}
                  >
                    Plumbing Upgrades
                  </Link>
                </li>
                <li className="" role="menuitem">
                  <Link
                    className="btn-color-hover"
                    to="/plumbing-services/thermostatic-pressure-balancing"
                    target=""
                    style={{ textDecoration: 'none' }}
                  >
                    Thermostatic Pressure Balancing
                  </Link>
                </li>
                <li className="" role="menuitem">
                  <Link
                    className="btn-color-hover"
                    to="/plumbing-services/toilets"
                    target=""
                    style={{ textDecoration: 'none' }}
                  >
                    Toilets
                  </Link>
                </li>
                <li className="" role="menuitem">
                  <Link
                    className="btn-color-hover"
                    to="/plumbing-services/other-services"
                    target=""
                    style={{ textDecoration: 'none' }}
                  >
                    Other Services
                  </Link>
                </li>
                <li className="" role="menuitem">
                  <Link
                    className="btn-color-hover"
                    to="/plumbing-services/tankless-gas-water-heater"
                    target=""
                    style={{ textDecoration: 'none' }}
                  >
                    Tankless Gas Water Heater
                  </Link>
                </li>
                <li className="" role="menuitem">
                  <Link
                    className="btn-color-hover"
                    to="/plumbing-services/tankless-electric-water-heater"
                    target=""
                    style={{ textDecoration: 'none' }}
                  >
                    Tankless Electric Water Heater
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className="top-margin-small   flex-middle-wrap relative"
              role="menuitem"
            >
              <Link
                to="/plumbing-services/water-filtration"
                className="title-style-4 title-color-4"
                target=""
                style={{ textDecoration: 'none' }}
              >
                Water Filtration
              </Link>
              <svg
                className="site-arrow el-tab relative"
                title="Open child menu of Water Filtration"
              >
                <use href="includes/flair.svg#arrow-down" />
              </svg>
              <ul
                className="full bg-box like-bg no-shadow vertical-padding-tiny top-margin-tiny el-panel sliding"
                style={{ display: "none" }}
                role="menu"
              >
                <li className="" role="menuitem">
                  <Link
                    className="btn-color-hover"
                    to="/plumbing-services/water-filtration/water-filtration-products"
                    target=""
                    style={{ textDecoration: 'none' }}
                  >
                    Water Filtration Products
                  </Link>
                </li>
              </ul>
            </li>
            <li className="top-margin-small    relative" role="menuitem">
              <Link
                to="/coupons"
                className="title-style-4 title-color-4"
                target=""
                style={{ textDecoration: 'none' }}
              >
                Coupons
              </Link>
            </li>
            <li className="top-margin-small    relative" role="menuitem">
              <Link
                to="/reviews"
                className="title-style-4 title-color-4"
                target=""
                style={{ textDecoration: 'none' }}
              >
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="half bg-box like-bg side-padding-medium vertical-padding-large business-info">
        <div id="HeaderV11AltLocationInfo" className="ui-repeater">
          <div data-item="i" data-key={13320}>
            <Link className="btn v1" to="/locations" style={{ textDecoration: 'none' }}>
              View Our Locations
            </Link>
          </div>
        </div>
        <nav
          className="social-media top-margin-large ui-repeater"
          id="HeaderV11AltSocial"
        >
          <strong className="title-style-4 bottom-margin-tiny">
            Follow Us
          </strong>
          <ul className="flex-grid-small-wrap">
            <li className="fit" data-item="i" data-key={64067}>
              <Link
                className="btn-colors social-link"
                to="https://g.page/Watermenplumbing?share"
                title="Google My Business"
                target="_blank"
                rel="nofollow noopener"
                style={{ textDecoration: 'none' }}
              >
                <svg viewBox="0 0 36 36">
                  <use data-href="cms/svg/admin/ufphi5p03ss.36.svg#google_plus" />
                </svg>
              </Link>
            </li>
            <li className="fit" data-item="i" data-key={64068}>
              <Link
                className="btn-colors social-link"
                to="https://www.facebook.com/Watermenplumbing/"
                title="Facebook"
                target="_blank"
                rel="nofollow noopener"
                style={{ textDecoration: 'none' }}
              >
                <svg viewBox="0 0 36 36">
                  <use data-href="cms/svg/admin/ufphi5p03ss.36.svg#facebook" />
                </svg>
              </Link>
            </li>
            <li className="fit" data-item="i" data-key={64518}>
              <Link
                className="btn-colors social-link"
                to="https://www.instagram.com/watermenplumbing/"
                title="Instagram"
                target="_blank"
                rel="nofollow noopener"
                style={{ textDecoration: 'none' }}
              >
                <svg viewBox="0 0 36 36">
                  <use data-href="cms/svg/admin/ufphi5p03ss.36.svg#instagram" />
                </svg>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="top-margin-large">
          <Link className="search-link btn v1" to="/site-search" style={{ textDecoration: 'none' }}>
            Search Our Site
          </Link>
        </div>
      </div>
    </div>
    <button
      className="menu-btn mobile btn-colors"
      title="Main Menu"
      aria-label="Main Menu"
      type="button"
      data-role="btn"
    >
      <span />
      <span />
      <span />
    </button>
  </div>
</header>

  )
}

export default Navbar