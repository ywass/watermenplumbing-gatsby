import React from "react";
import { useState } from "react";
import "../../style/plumbingServices.css";
import tltBdr2Img from '../../images/tlt-bdr2.png'
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
function ServicesForm() {
  const [submitText, setSubmitText] = useState(null);
  return (
    <form
      name="contact services"
      data-netlify="true"
      id="Form_ContactV4"
      method="post"
      data-netlify-honeypot="bot-field"
      onSubmit={(e) => onSubmit(e, setSubmitText)}
    >
      <input type="hidden" name="form-name" value="contact services" />
      <div hidden>
        <input name="bot-field" />
      </div>
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
                <img src={tltBdr2Img} className="header-flair" />
              </header>
              {!submitText ? (
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
                            placeholder="First Name"
                          />
                         {/*  <label
                            className="hide"
                            htmlFor="ContactV1Form_ITM0_FirstName"
                          >
                            First Name
                          </label> */}
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
                            placeholder="Last Name"
                          />
                         {/*  <label
                            className="hide"
                            htmlFor="ContactV1Form_ITM0_LastName"
                          >
                            Last Name
                          </label> */}
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
                            className="phone-mask ui-cms-input"
                            required="required"
                            name="ContactV1Form$ITM0$Phone"
                            defaultValue=""
                            placeholder="Phone"
                          />
                          {/* <label
                            className="hide"
                            htmlFor="ContactV1Form_ITM0_Phone"
                          >
                            Phone
                          </label> */}
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
                            placeholder="Email"
                          />
                          {/* <label
                            className="hide"
                            htmlFor="ContactV1Form_ITM0_EmailAddress"
                          >
                            Email
                          </label> */}
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
                            <option value="" disabled selected>Are you a new customer?</option>
                            <option value={1}>
                              Yes, I am a potential new customer
                            </option>
                            <option value={11}>
                              No, I'm a current existing customer
                            </option>
                            <option value={13}>I'm neither.</option>
                          </select>
                        {/*   <label
                            className="hide"
                            htmlFor="ContactV1Form_ITM0_LeadTypeID"
                          >
                            Are you a new customer?
                          </label> */}
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
                            placeholder=" Message"
                          />
                         {/*  <label
                            className="hide"
                            htmlFor="ContactV1Form_ITM0_Message"
                          >
                            Message
                          </label> */}
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
              ) : (
                <h1>Form Submitted</h1>
              )}
            </div>
          </div>
        </div>
      </section>
    </form>
  );
}

export default ServicesForm;
