import React from 'react'
import '../../style/contactUs.css'
import map from '../../images/map-img.jpg'
import tltBdrImg from '../../images/tlt-bdr.png'
import tltBdr2Img from '../../images/tlt-bdr2.png'
function ContactUsPage() {
  return (
    <main id="MainZone">
  <form
  netlify
    id="Form_ContactSystemV1"
    method="post"
    encType="multipart/form-data"
    action="https://www.watermenplumbing.com/contact-us/"
    data-search={1}
  >
    <input type="hidden" name="_m_" defaultValue="ContactSystemV1" />
    <section
      className="contact-system v1 light-bg text-center bg-box-like col-50-50 items-touching"
      id="ContactSystemV1"
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
          data-src="/assets/contact/contact-system-v1-bg-mobile.jpg"
        />
        <source
          media="(max-width: 800px)"
          srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          data-src="/assets/contact/contact-system-v1-bg-tablet.jpg"
        />
        <img
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          alt=""
          data-src="/assets/contact/contact-system-v1-bg.jpg"
        />
      </picture>
      <div className="main thin text-align">
        <header
          className="no-pad bottom-margin-tiny center-800"
          id="ContactSystemV1Header"
        >
          <h1>Contact Watermen Plumbing Today!</h1>
         <img src={tltBdr2Img} className="header-flair"/>
        </header>
        <div
          className="content-style relative bottom-margin"
          id="ContactSystemV1Content"
        >
          At Watermen Plumbing Inc., we are proud to offer our customers in
          Hallandale Beach, Davie, Boca Raton, and beyond, with high-quality
          plumbing services they can trust. Selecting a plumber is easy when
          you’ve experienced the work ethic and commitment to excellence
          exhibited by the talented team of professionals at Watermen Plumbing
          Inc. We work hard to offer our customers the products and services
          they need when they need them.
        </div>
      </div>
      <div className="main top-margin-small">
        <div className="flex-auto-responsive-margined flex-direction align-items item-widths item-spacing">
          <div
            className="bg-box side-padding-small vertical-padding-small under-item border-radius ui-repeater"
            id="ContactSystemV1Form"
          >
            <div className="flair-border" data-item="i" data-key="">
              <span className="flair-1" />
              <span className="flair-2" />
              <div className="overlap-padding">
                <fieldset>
                  <ul className="flex-spaced-between-wrap-block-500">
                    <li className="half">
                      <div className="input-text">
                        <input
                          required="required"
                          type="text"
                          id="ContactSystemV1Form_ITM0_FirstName"
                          className="ui-cms-input"
                          name="ContactSystemV1Form$ITM0$FirstName"
                          defaultValue=""
                        />
                        <label
                          className="hide"
                          htmlFor="ContactSystemV1Form_ITM0_FirstName"
                        >
                          First Name
                        </label>
                        <div
                          className="validation"
                          htmlFor="ContactSystemV1Form_ITM0_FirstName"
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
                          id="ContactSystemV1Form_ITM0_LastName"
                          className="ui-cms-input"
                          name="ContactSystemV1Form$ITM0$LastName"
                          defaultValue=""
                        />
                        <label
                          className="hide"
                          htmlFor="ContactSystemV1Form_ITM0_LastName"
                        >
                          Last Name
                        </label>
                        <div
                          className="validation"
                          htmlFor="ContactSystemV1Form_ITM0_LastName"
                          data-type="valueMissing"
                        >
                          Please enter your last name.
                        </div>
                      </div>
                    </li>
                    <li className="half">
                      <div className="input-text">
                        <input
                          id="ContactSystemV1Form_ITM0_Phone"
                          type="tel"
                          pattern="[(]\d{3}[)][\s]\d{3}[\-]\d{4}"
                          className="phone-mask ui-cms-input"
                          required="required"
                          name="ContactSystemV1Form$ITM0$Phone"
                          defaultValue=""
                        />
                        <label htmlFor="ContactSystemV1Form_ITM0_Phone">
                          Phone
                        </label>
                        <div
                          className="validation"
                          htmlFor="ContactSystemV1Form_ITM0_Phone"
                          data-type="valueMissing"
                        >
                          Please enter your phone number.
                        </div>
                        <div
                          className="validation"
                          htmlFor="ContactSystemV1Form_ITM0_Phone"
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
                          id="ContactSystemV1Form_ITM0_EmailAddress"
                          className="ui-cms-input"
                          name="ContactSystemV1Form$ITM0$EmailAddress"
                          defaultValue=""
                        />
                        <label
                          className="hide"
                          htmlFor="ContactSystemV1Form_ITM0_EmailAddress"
                        >
                          Email
                        </label>
                        <div
                          className="validation"
                          htmlFor="ContactSystemV1Form_ITM0_EmailAddress"
                          data-type="valueMissing"
                        >
                          Please enter your email address.
                        </div>
                        <div
                          className="validation"
                          htmlFor="ContactSystemV1Form_ITM0_EmailAddress"
                          data-type="typeMismatch"
                        >
                          This isn't a valid email address.
                        </div>
                      </div>
                    </li>
                    <li className="select">
                      <div className="input-text">
                        <select
                          id="ContactSystemV1Form_ITM0_LeadTypeID"
                          required="required"
                          className="ui-cms-select ui-cms-input"
                          name="ContactSystemV1Form$ITM0$LeadTypeID"
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
                          htmlFor="ContactSystemV1Form_ITM0_LeadTypeID"
                        >
                          Are you a new customer?
                        </label>
                        <svg className="site-arrow">
                          <use href="../includes/flair.svg#arrow-down" />
                        </svg>
                        <div
                          className="validation"
                          htmlFor="ContactSystemV1Form_ITM0_LeadTypeID"
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
                          id="ContactSystemV1Form_ITM0_Message"
                          className="ui-cms-input"
                          name="ContactSystemV1Form$ITM0$Message"
                          defaultValue={""}
                        />
                        <label
                          className="hide"
                          htmlFor="ContactSystemV1Form_ITM0_Message"
                        >
                          Message
                        </label>
                        <div
                          className="validation"
                          htmlFor="ContactSystemV1Form_ITM0_Message"
                          data-type="valueMissing"
                        >
                          Please enter a message.
                        </div>
                      </div>
                    </li>
                  </ul>
                </fieldset>
                <input
                  id="ContactSystemV1Form_ITM0_FFD6"
                  type="hidden"
                  className="ui-cms-input"
                  name="ContactSystemV1Form$ITM0$FFD6"
                  defaultValue=""
                />
                <div className="top-margin-tiny text-align">
                  <button
                    className="btn v1"
                    aria-labelledby="ContactSystemV1Header"
                    type="submit"
                    id="ContactSystemV1Form_ITM0_ctl08"
                    name="ContactSystemV1Form$ITM0$ctl08"
                    data-commandname="Update"
                  >
                    Send Information
                  </button>
                </div>
              </div>
            </div>
          </div>
          <input
            type="hidden"
            className="ui-cms-input"
            id="ContactSystemV1Map__edit_"
            name="ContactSystemV1Map$_edit_"
            defaultValue=""
          />
          <input
            type="hidden"
            className="ui-cms-input"
            id="ContactSystemV1Map__command_"
            name="ContactSystemV1Map$_command_"
            defaultValue=""
          />
          <div
            className="map-container over-item relative border-radius ui-repeater ui-ajax"
            id="ContactSystemV1Map"
            data-ajaxreplace="true"
          >
            <div
              className="imap"
              data-map='{"draggable":true,"scrollwheel":false,"zoomControl":true}'
              data-minlat="25.9935053"
              data-maxlat="25.9935053"
              data-minlng="-80.1695817"
              data-maxlng="-80.1695817"
            >
            <img src={map}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </form>
</main>

  )
}

export default ContactUsPage