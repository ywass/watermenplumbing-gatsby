import React from 'react'
import '../../style/photoGallery.css'
import tltBdrImg from '../../images/tlt-bdr.png'
import tltBdr2Img from '../../images/tlt-bdr2.png'
import subBannerBgImg from '../../images/sub-banner-v1-bg.jpg'
import bathRenoOneImg from '../../images/Sloaped-shower-floor.jpg'
import bathReno2Img from '../../images/Tub-instalation.jpg'
import bathReno3Img from '../../images/Vanity-drains-and-water-supply-piping-prepaired.jpg'
import bathReno4Img from '../../images/20170417_203913966_iOS.jpg'
import bathReno5Img from '../../images/complete-tub-instalation-with-faucet-and-tile-work.jpg'
import bathReno6Img from '../../images/Free-standing-tub.jpg'
import bathReno7Img from '../../images/Shower-liner-water-proofing.jpg'
import bathReno8Img from '../../images/Shower-valve-trim-instalation.jpg'
import bathReno9Img from '../../images/Shower-waterproofing-faucet-isntall-and-final.jpg'
import bathReno10Img from '../../images/43h.jpg'
import bathReno11Img from '../../images/42h.jpg'
import bathReno12Img from '../../images/ps6.jpg'
import bathReno13Img from '../../images/ps7.jpg'
import bathReno14Img from '../../images/1of1.jpg'
import bathReno15Img from '../../images/44h.jpg'
import bathReno16Img from '../../images/as1of2.jpg'
import bathReno17Img from '../../images/as2of2.jpg'
import bathReno18Img from '../../images/ps0.jpg'
import bathReno19Img from '../../images/ps1.jpg'
import bathReno20Img from '../../images/ps2.jpg'
import bathReno21Img from '../../images/ps3.jpg'
import bathReno22Img from '../../images/ps4.jpg'
import bathReno23Img from '../../images/ps5.jpg'
import { Link } from 'gatsby'
function BathPlumbingRenoPhoto() {
  return (
    <main id="MainZone">
  <section
    className="system-banner v1 bg-image dark-bg bg-box-none text-left"
    id="SystemBannerV1"
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
      <div className="bg-box side-padding-medium vertical-padding info text-align box-flair">
        <div className="flair-border">
          <span className="flair-1" />
          <span className="flair-2" />
          <header className="no-pad center-800" id="SystemBannerV1Info">
            <h1>Bathroom Plumbing &amp; Renovations</h1>
            <img src={tltBdrImg} className="header-flair"/>
          </header>
          <div id="SystemBannerV1BtnCon"></div>
        </div>
      </div>
    </div>
  </section>
  <section
    className="photo-gallery v1 light-bg bg-box-unlike ui-repeater"
    id="PhotoGallerySystemV1Gallery"
  >
    <div className="main">
      <ul className="img-list flex-wrap-grid-auto-size-max-4-block-500 ps-images">
        <li
          className="photo fit "
          data-path="/images/photo-gallery/bathroom-plumbing-renovations/Sloaped-shower-floor.jpg"
          data-width={746}
          data-height={1000}
          data-title="Sloped Shower Floor"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/bathroom-plumbing-renovations/?item=289348/sloped%20shower%20floor"
          data-item="i"
          data-key={289348}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
             
              alt="Sloped Shower Floor"
              title="Sloped Shower Floor"
              src={bathRenoOneImg}
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Sloped Shower Floor
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/bathroom-plumbing-renovations/Tub-instalation.jpg"
          data-width={960}
          data-height={960}
          data-title="Tub Installation"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/bathroom-plumbing-renovations/?item=289349/tub%20installation"
          data-item="i"
          data-key={289349}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
             
              alt="Tub Installation"
              title="Tub Installation"
              src={bathReno2Img}
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Tub Installation
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/bathroom-plumbing-renovations/Vanity-drains-and-water-supply-piping-prepaired.jpg"
          data-width={1000}
          data-height={746}
          data-title="Vanity Drains and Water Supply Piping"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/bathroom-plumbing-renovations/?item=289350/vanity%20drains%20and%20water%20supply%20piping"
          data-item="i"
          data-key={289350}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
              src={bathReno3Img}
            
              alt="Vanity Drains and Water Supply Piping"
              title="Vanity Drains and Water Supply Piping"
             
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Vanity Drains and Water Supply Piping
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/bathroom-plumbing-renovations/20170417_203913966_iOS.jpg"
          data-width={3024}
          data-height={4032}
          data-title="Complete Tub Installation with Faucet and Tile Work"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/bathroom-plumbing-renovations/?item=289351/complete%20tub%20installation%20with%20faucet%20and%20tile%20work"
          data-item="i"
          data-key={289351}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
             
              alt="Complete Tub Installation with Faucet and Tile Work"
              title="Complete Tub Installation with Faucet and Tile Work"
              src={bathReno4Img}
/>
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Complete Tub Installation with Faucet and Tile Work
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/bathroom-plumbing-renovations/complete-tub-instalation-with-faucet-and-tile-work.jpg"
          data-width={746}
          data-height={1000}
          data-title="Complete Tub Installation with Faucet and Tile Work"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/bathroom-plumbing-renovations/?item=289352/complete%20tub%20installation%20with%20faucet%20and%20tile%20work"
          data-item="i"
          data-key={289352}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
              src={bathReno5Img}
              alt="Complete Tub Installation with Faucet and Tile Work"
              title="Complete Tub Installation with Faucet and Tile Work"
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Complete Tub Installation with Faucet and Tile Work
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/bathroom-plumbing-renovations/Free-standing-tub.jpg"
          data-width={1000}
          data-height={750}
          data-title="Free Standing Tub"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/bathroom-plumbing-renovations/?item=289353/free%20standing%20tub"
          data-item="i"
          data-key={289353}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
              src={bathReno6Img}
              alt="Free Standing Tub"
              title="Free Standing Tub"
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Free Standing Tub
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/bathroom-plumbing-renovations/Shower-liner-water-proofing.jpg"
          data-width={640}
          data-height={480}
          data-title="Shower Liner Waterproofing"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/bathroom-plumbing-renovations/?item=289354/shower%20liner%20waterproofing"
          data-item="i"
          data-key={289354}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
               src={bathReno7Img}
              alt="Shower Liner Waterproofing"
              title="Shower Liner Waterproofing"
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Shower Liner Waterproofing
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/bathroom-plumbing-renovations/Shower-valve-trim-instalation.jpg"
          data-width={746}
          data-height={1000}
          data-title="Shower Valve Trim Installation"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/bathroom-plumbing-renovations/?item=289355/shower%20valve%20trim%20installation"
          data-item="i"
          data-key={289355}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
              src={bathReno8Img}
              alt="Shower Valve Trim Installation"
              title="Shower Valve Trim Installation"
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Shower Valve Trim Installation
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/bathroom-plumbing-renovations/Shower-waterproofing-faucet-isntall-and-final.jpg"
          data-width={1000}
          data-height={1000}
          data-title="Shower Waterproofing, Faucet Install, and Final Product"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/bathroom-plumbing-renovations/?item=289356/shower%20waterproofing%2C%20faucet%20install%2C%20and%20final%20product"
          data-item="i"
          data-key={289356}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
              src={bathReno9Img}
              alt="Shower Waterproofing, Faucet Install, and Final Product"
              title="Shower Waterproofing, Faucet Install, and Final Product"
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Shower Waterproofing, Faucet Install, and Final Product
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/bathroom-plumbing-renovations/43h.jpg"
          data-width={720}
          data-height={960}
          data-title="Shower Head to Slide Bar Installation"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/bathroom-plumbing-renovations/?item=289357/shower%20head%20to%20slide%20bar%20installation"
          data-item="i"
          data-key={289357}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
               src={bathReno10Img}
              alt="Shower Head to Slide Bar Installation"
              title="Shower Head to Slide Bar Installation"
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Shower Head to Slide Bar Installation
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/bathroom-plumbing-renovations/42h.jpg"
          data-width={720}
          data-height={960}
          data-title="Shower Head to Slide Bar Installation"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/bathroom-plumbing-renovations/?item=289358/shower%20head%20to%20slide%20bar%20installation"
          data-item="i"
          data-key={289358}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
              src={bathReno11Img}
              alt="Shower Head to Slide Bar Installation"
              title="Shower Head to Slide Bar Installation"
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Shower Head to Slide Bar Installation
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/bathroom-plumbing-renovations/ps6.jpg"
          data-width={720}
          data-height={960}
          data-title="Shower Faucet Replacement"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/bathroom-plumbing-renovations/?item=289359/shower%20faucet%20replacement"
          data-item="i"
          data-key={289359}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
              src={bathReno12Img}
              alt="Shower Faucet Replacement"
              title="Shower Faucet Replacement"
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Shower Faucet Replacement
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/bathroom-plumbing-renovations/ps7.jpg"
          data-width={720}
          data-height={960}
          data-title="Shower Faucet Replacement"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/bathroom-plumbing-renovations/?item=289360/shower%20faucet%20replacement"
          data-item="i"
          data-key={289360}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
               src={bathReno13Img}
              alt="Shower Faucet Replacement"
              title="Shower Faucet Replacement"
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Shower Faucet Replacement
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/bathroom-plumbing-renovations/1of1.jpg"
          data-width={1000}
          data-height={1000}
          data-title="Shower Faucet Replacement"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/bathroom-plumbing-renovations/?item=289361/shower%20faucet%20replacement"
          data-item="i"
          data-key={289361}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
            src={bathReno14Img}
              alt="Shower Faucet Replacement"
              title="Shower Faucet Replacement"
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Shower Faucet Replacement
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/bathroom-plumbing-renovations/44h.jpg"
          data-width={960}
          data-height={960}
          data-title="Shower Faucet Replacement"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/bathroom-plumbing-renovations/?item=289362/shower%20faucet%20replacement"
          data-item="i"
          data-key={289362}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
                     src={bathReno15Img}
              alt="Shower Faucet Replacement"
              title="Shower Faucet Replacement"
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Shower Faucet Replacement
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/bathroom-plumbing-renovations/as1of2.jpg"
          data-width={720}
          data-height={960}
          data-title="Shower Faucet Replacement"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/bathroom-plumbing-renovations/?item=289363/shower%20faucet%20replacement"
          data-item="i"
          data-key={289363}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
               src={bathReno16Img}
              alt="Shower Faucet Replacement"
              title="Shower Faucet Replacement"
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Shower Faucet Replacement
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/bathroom-plumbing-renovations/as2of2.jpg"
          data-width={720}
          data-height={960}
          data-title="Shower Faucet Replacement"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/bathroom-plumbing-renovations/?item=289364/shower%20faucet%20replacement"
          data-item="i"
          data-key={289364}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
                src={bathReno17Img}
              alt="Shower Faucet Replacement"
              title="Shower Faucet Replacement"
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Shower Faucet Replacement
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/bathroom-plumbing-renovations/ps0.jpg"
          data-width={960}
          data-height={960}
          data-title="Shower Faucet Replacement"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/bathroom-plumbing-renovations/?item=289365/shower%20faucet%20replacement"
          data-item="i"
          data-key={289365}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
               src={bathReno18Img}
              alt="Shower Faucet Replacement"
              title="Shower Faucet Replacement"
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Shower Faucet Replacement
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/bathroom-plumbing-renovations/ps1.jpg"
          data-width={720}
          data-height={960}
          data-title="Shower Faucet Replacement"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/bathroom-plumbing-renovations/?item=289366/shower%20faucet%20replacement"
          data-item="i"
          data-key={289366}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
              src={bathReno19Img}
              alt="Shower Faucet Replacement"
              title="Shower Faucet Replacement"
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Shower Faucet Replacement
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/bathroom-plumbing-renovations/ps2.jpg"
          data-width={960}
          data-height={720}
          data-title="Shower Faucet Replacement"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/bathroom-plumbing-renovations/?item=289367/shower%20faucet%20replacement"
          data-item="i"
          data-key={289367}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
              src={bathReno20Img}
              alt="Shower Faucet Replacement"
              title="Shower Faucet Replacement"
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Shower Faucet Replacement
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/bathroom-plumbing-renovations/ps3.jpg"
          data-width={720}
          data-height={960}
          data-title="Shower Faucet Replacement"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/bathroom-plumbing-renovations/?item=289368/shower%20faucet%20replacement"
          data-item="i"
          data-key={289368}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
              src={bathReno21Img}
              alt="Shower Faucet Replacement"
              title="Shower Faucet Replacement"
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Shower Faucet Replacement
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/bathroom-plumbing-renovations/ps4.jpg"
          data-width={960}
          data-height={720}
          data-title="Shower Faucet Replacement"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/bathroom-plumbing-renovations/?item=289369/shower%20faucet%20replacement"
          data-item="i"
          data-key={289369}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
             src={bathReno22Img}
              alt="Shower Faucet Replacement"
              title="Shower Faucet Replacement"
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Shower Faucet Replacement
            </strong>
          </Link>
        </li>
        <li
          className="photo fit "
          data-path="/images/photo-gallery/bathroom-plumbing-renovations/ps5.jpg"
          data-width={200}
          data-height={200}
          data-title="Shower Faucet Replacement"
          data-caption=""
          data-link="http://www.watermenplumbing.com/photo-gallery/bathroom-plumbing-renovations/?item=289370/shower%20faucet%20replacement"
          data-item="i"
          data-key={289370}
        >
          <Link
            className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
            to="javascript:void('Gallery')"
          >
            <img
             src={bathReno23Img}
              alt="Shower Faucet Replacement"
              title="Shower Faucet Replacement"
            />
            <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
              Shower Faucet Replacement
            </strong>
          </Link>
        </li>
      </ul>
    </div>
  </section>
</main>

  )
}

export default BathPlumbingRenoPhoto