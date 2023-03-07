import React from 'react'
import '../../style/home.css'
import LogoImg from '../../images/Logoo.png'
import LogoImg2 from '../../images/Logo2.png'
import { Link } from 'gatsby'
function Footer() {
  return (
    <footer id="FooterZone">
    <section className="footer v1 dark-bg" id="FooterV1" universal_="true">
    <div className="main">
      <div
        className="footer-info flex-spaced-between-block-1024-margined align-items"
        itemScope=""
        itemType="http://schema.org/Plumber"
      >
        <div className="schema-info text-center fourth">
          <div className="business-info bottom-margin-tiny">
            <img
              className="dark-logo bottom-logo"
              loading="lazy"
              style={{ marginLeft: "auto", marginRight: "auto" }}
              alt="Watermen Plumbing"
              title="Watermen Plumbing"
              src={LogoImg}
            />
            <img
              className="light-logo bottom-logo"
              loading="lazy"
              style={{ marginLeft: "auto", marginRight: "auto" }}
              alt="Watermen Plumbing"
              title="Watermen Plumbing"
              src={LogoImg2}
            />
            <meta itemProp="name" content="Watermen Plumbing" />
            <meta itemProp="description" content="Boca Raton Plumbers" />
            <meta itemProp="url" content="index.html" />
            <meta itemProp="image" content="images/logos/Logo.png" />
          </div>
          <div id="FooterV1SitePhoneHeader">
            <strong className="title-style-5 title-color-5" />
          </div>
          <Link
            className="phone-link phone-number-style"
            to="tel:954-800-6364"
            id="FooterV1_1"
            data-replace-href="tel:{F:P3:Cookie:PPCP1/954-800-6364}"
          >
            <span itemProp="telephone">
              <span
                id="FooterV1_2"
                data-process="replace"
                data-replace="{F:P3:Cookie:PPCP1/954-800-6364}"
              >
                954-800-6364
              </span>
            </span>
          </Link>
          <span
            id="FooterV1_3"
            data-process="if"
            style={{ display: "none" }}
            field="{Cookie:PPCP2/}"
          >
            <br />
            <div id="FooterV1LocalPhoneHeader">
              <strong className="title-style-5 title-color-5" />
            </div>
            <Link
              className="phone-link phone-number-style"
              to="tel:"
              id="FooterV1_4"
              data-replace-href="tel:{F:P3:Cookie:PPCP2/}"
            >
              <span itemProp="telephone">
                <span
                  id="FooterV1_5"
                  data-process="replace"
                  data-replace="{F:P3:Cookie:PPCP2/}"
                />
              </span>
            </Link>
          </span>
          <div
            className="social-info top-margin-tiny ui-repeater"
            maxresults={8}
            id="FooterV1Social"
          >
            <div id="FooterV1SocialHeader">
              <strong className="title-style-5 title-color-5 social-title">
                Follow Us
              </strong>
            </div>
            <ul className="flex-grid-small-center-wrap">
              <li className="fit" data-item="i" data-key={64067}>
                <Link
                  className="btn-colors social-link"
                  to="https://g.page/Watermenplumbing?share"
                  title="Google My Business"
                  aria-label="Google My Business"
                  target="_blank"
                  rel="noopener"
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
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener"
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
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener"
                >
                  <svg viewBox="0 0 36 36">
                    <use data-href="cms/svg/admin/ufphi5p03ss.36.svg#instagram" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center" id="FooterV1OptionalBadge"></div>
        </div>
        <div className="flex-spaced-between-block-800-margined three-fourths center-800">
          <ul
            className="location-info two-thirds flex-spaced-between-wrap-block-500 ui-repeater"
            id="FooterV1AddressList"
            data-section=""
          >
            <li
              className="half"
              itemProp="address"
              itemScope=""
              itemType="http://schema.org/PostalAddress"
              data-item="i"
              data-key={20737}
            >
              <strong className="title-style-5 title-color-5">
                Boca Raton Office
              </strong>
              <div className="no-top-margin no-bottom-margin">
                <span itemProp="streetAddress">22485 Arcadia Court</span>
                <br /> <span itemProp="addressLocality">Boca Raton</span>,{" "}
                <span itemProp="addressRegion">FL</span>{" "}
                <span itemProp="postalCode">33433</span>
                <div className="flex-middle center-1024">
                  <svg
                    viewBox="0 0 36 36"
                    className="fit right-margin-tiny"
                    title="Site Icon"
                    role="presentation"
                  >
                    <use data-href="cms/svg/site/ykmkv4_n6ok.36.svg#directions" />
                  </svg>
                  <Link
                    target="_blank"
                    to="http://maps.google.com/maps?f=q&hl=en&z=15&q=22485%20Arcadia%20Court,Boca%20Raton,FL,33433"
                  >
                    Map &amp; Directions
                  </Link>
                </div>
              </div>
            </li>
          </ul>
          <nav className="footer-nav third" id="FooterV1Links">
            <div className="bottom-margin-tiny" id="FooterV1LinksHeader">
              <strong className="title-style-5 title-color-5">
                Quick Links
              </strong>
            </div>
            <ul role="menu" aria-label="Footer Navigation">
              <li role="menuitem">
                <Link to="index.html" target="">
                  Home
                </Link>
              </li>
              <li role="menuitem">
                <Link to="plumbing-services/index.html" target="">
                  Plumbing Services
                </Link>
              </li>
              <li role="menuitem">
                <Link to="reviews/index.html" target="">
                  Reviews
                </Link>
              </li>
              <li role="menuitem">
                <Link to="privacy-policy/index.html" target="">
                  Privacy Policy
                </Link>
              </li>
              <li role="menuitem">
                <Link to="site-map/index.html" target="">
                  Site Map
                </Link>
              </li>
              <li role="menuitem">
                <Link to="contact-us/index.html" target="">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>
  <section
    className="scorpion-footer light-bg tiny-padding"
    id="HSScorpionFooter"
    universal_="true"
  >
    <div className="main">
      <div className="flex-middle-spaced-between">
        <small className="info" id="HSScorpionFooterDisclaimer">
          <div>Master License# RF11067654</div>
          <p>© 2022 All Rights Reserved.</p>
        </small>
        <Link
          to="https://www.scorpion.co/home-services/"
          rel="noopener"
          className="sd-logo fit"
          target="_blank"
        >
          <img
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
            alt="Internet Marketing Experts"
            title="Internet Marketing Experts"
            data-src="/common/scorpion/logo/stack-gray.png"
          />
        </Link>
      </div>
    </div>
  </section>
</footer>

  )
}

export default Footer