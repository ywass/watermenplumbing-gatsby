import React from "react";
import { useState } from "react";
import "../../style/areaWeServe.css";

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
function AsideForm() {
  const [submitText, setSubmitText] = useState(null);
  return (
    <form
      name="contact aside"
      data-netlify="true"
      id="Form_ContactV4"
      method="post"
      data-netlify-honeypot="bot-field"
      onSubmit={(e) => onSubmit(e, setSubmitText)}
    >
      <input type="hidden" name="form-name" value="contact aside" />
      <div hidden>
        <input name="bot-field" />
      </div>
      <aside
        className="side-contact v1 side-padding-large text-left vertical-padding-tiny border-radius box-shadow dark-bg"
        id="SideContactV1"
        data-onvisible="show"
      >
        <header
          className="text-align bottom-margin-small no-pad"
          id="SideContactV1Header"
        >
          <h5>Contact Us Today</h5>
          <p>Complete the form below to connect with our plumbing team!</p>
        </header>
        {!submitText ? (
          <div id="SideContactV1Form" className="ui-repeater">
            <fieldset data-item="i" data-key="">
              <ul>
                <li>
                  <div className="input-text">
                    <input
                      required="required"
                      type="text"
                      id="SideContactV1Form_ITM0_FirstName"
                      className="ui-cms-input"
                      name="SideContactV1Form$ITM0$FirstName"
                      defaultValue=""
                    />
                    <label htmlFor="SideContactV1Form_ITM0_FirstName">
                      First Name
                    </label>
                    <div
                      className="validation"
                      htmlFor="SideContactV1Form_ITM0_FirstName"
                      data-type="valueMissing"
                    >
                      Please enter your first name.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="input-text">
                    <input
                      required="required"
                      type="text"
                      id="SideContactV1Form_ITM0_LastName"
                      className="ui-cms-input"
                      name="SideContactV1Form$ITM0$LastName"
                      defaultValue=""
                    />
                    <label htmlFor="SideContactV1Form_ITM0_LastName">
                      Last Name
                    </label>
                    <div
                      className="validation"
                      htmlFor="SideContactV1Form_ITM0_LastName"
                      data-type="valueMissing"
                    >
                      Please enter your last name.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="input-text">
                    <input
                      id="SideContactV1Form_ITM0_Phone"
                      type="tel"
                      pattern="[(]\d{3}[)][\s]\d{3}[\-]\d{4}"
                      className="phone-mask ui-cms-input"
                      required="required"
                      name="SideContactV1Form$ITM0$Phone"
                      defaultValue=""
                    />
                    <label htmlFor="SideContactV1Form_ITM0_Phone">Phone</label>
                    <div
                      className="validation"
                      htmlFor="SideContactV1Form_ITM0_Phone"
                      data-type="valueMissing"
                    >
                      Please enter your phone number.
                    </div>
                    <div
                      className="validation"
                      htmlFor="SideContactV1Form_ITM0_Phone"
                      data-type="typeMismatch"
                    >
                      This isn't a valid phone number.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="input-text">
                    <input
                      required="required"
                      type="email"
                      id="SideContactV1Form_ITM0_EmailAddress"
                      className="ui-cms-input"
                      name="SideContactV1Form$ITM0$EmailAddress"
                      defaultValue=""
                    />
                    <label htmlFor="SideContactV1Form_ITM0_EmailAddress">
                      Email
                    </label>
                    <div
                      className="validation"
                      htmlFor="SideContactV1Form_ITM0_EmailAddress"
                      data-type="valueMissing"
                    >
                      Please enter your email address.
                    </div>
                    <div
                      className="validation"
                      htmlFor="SideContactV1Form_ITM0_EmailAddress"
                      data-type="typeMismatch"
                    >
                      This isn't a valid email address.
                    </div>
                  </div>
                </li>
                <li className="select">
                  <div className="input-text">
                    <select
                      id="SideContactV1Form_ITM0_LeadTypeID"
                      required="required"
                      className="ui-cms-select ui-cms-input"
                      name="SideContactV1Form$ITM0$LeadTypeID"
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
                      htmlFor="SideContactV1Form_ITM0_LeadTypeID"
                    >
                      Are you a new customer?
                    </label>
                    <dropDownIcon className="site-arrow" />
                    <div
                      className="validation"
                      htmlFor="SideContactV1Form_ITM0_LeadTypeID"
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
                      id="SideContactV1Form_ITM0_Message"
                      className="ui-cms-input"
                      name="SideContactV1Form$ITM0$Message"
                      defaultValue={""}
                    />
                    <label
                      className="hide"
                      htmlFor="SideContactV1Form_ITM0_Message"
                    >
                      Message
                    </label>
                    <div
                      className="validation"
                      htmlFor="SideContactV1Form_ITM0_Message"
                      data-type="valueMissing"
                    >
                      Please enter a message.
                    </div>
                  </div>
                </li>
              </ul>
            </fieldset>
            <input
              id="SideContactV1Form_ITM0_FFD6"
              type="hidden"
              className="ui-cms-input"
              name="SideContactV1Form$ITM0$FFD6"
              defaultValue=""
              data-item="i"
              data-key=""
            />
            <div className="text-align" data-item="i" data-key="">
              <button
                className="btn v1"
                type="submit"
                id="SideContactV1Form_ITM0_ctl08"
                name="SideContactV1Form$ITM0$ctl08"
              >
                Send
              </button>
            </div>
          </div>
        ) : (
          <h1>Form Submitted</h1>
        )}
      </aside>
    </form>
  );
}

export default AsideForm;
