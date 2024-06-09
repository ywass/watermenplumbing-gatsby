import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'
import { PrismicRichText } from '@prismicio/react'

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

const AllReviewsSection = ({ slice }) => {
  const [leaveReview, setLeaveReview] = useState(false);
  const [submitText, setSubmitText] = useState(null);
  const { primary, items } = slice
  const { heading } = primary
  return (
    <>
      <form
        name="contact review"
        data-netlify="true"
        method="post"
        id="Form_ContactV6"
        data-netlify-honeypot="bot-field"
        onSubmit={(e) => onSubmit(e, setSubmitText)}
      >
        <input type="hidden" name="form-name" value="contact review" />
        <div hidden>
          <input name="bot-field" />
        </div>

        <section
          className="reviews-system leave-review v1 light-bg bg-box-like tiny-padding"
          id="LeaveReviewV1"
        >
          <div className="main">
            <div
              className="review-btn add-review text-center vertical-padding-tiny side-padding-small"
              tabIndex={0}
              data-role="btn"
              onClick={() => setLeaveReview((prevState) => !prevState)}
            >
              <svg style={{ marginLeft: "auto", marginRight: "auto" }} viewBox="0 0 36 36" class="top-margin-tiny text-[2.5rem]" role="presentation" title="Quote Icon" data-use="/cms/svg/site/ykmkv4_n6ok.36.svg#quotes" width="39" height="39"><path d="M8.013 15.466a8.045 8.045 0 0 1 6.48 1.483a7.661 7.661 0 0 1 0.231 12.059a8.034 8.034 0 0 1-5.245 1.86a9.036 9.036 0 0 1-7.602-4.26a14.634 14.634 0 0 1-1.877-6.96c0.309-6.651 3.214-11.288 8.768-13.765a11.187 11.187 0 0 1 2.006-0.557l0.977-0.137a1.55 1.55 0 0 1 1.954 1.62v1.628a1.607 1.607 0 0 1-1.483 1.62c-2.983 0.549-4.217 1.997-4.551 5.451m4.354-8.957c-6.583 0.969-10.071 7.225-10.302 13.174a10.971 10.971 0 0 0 1.568 6.034a7.495 7.495 0 0 0 6.265 3.48a6.613 6.613 0 0 0 4.148-1.466a6.055 6.055 0 0 0-0.231-9.514a6.322 6.322 0 0 0-5.245-1.166a1.573 1.573 0 0 1-0.549 0.077a1.614 1.614 0 0 1-1.646-1.543a2.571 2.571 0 0 1 0-0.771c0.394-3.326 1.568-5.648 5.794-6.42 0.163 0 0.163-0.077 0.163-0.077m14.476 7.105a8.038 8.038 0 0 1 6.48 1.483a7.661 7.661 0 0 1 0.231 12.059a8.002 8.002 0 0 1-5.245 1.86a9.021 9.021 0 0 1-7.594-4.26a14.731 14.731 0 0 1-1.886-6.96c0.317-6.651 3.214-11.288 8.777-13.765a11.097 11.097 0 0 1 1.997-0.557l0.977-0.137a1.55 1.55 0 0 1 1.954 1.62v1.628a1.607 1.607 0 0 1-1.483 1.62c-2.974 0.549-4.217 1.997-4.551 5.451m4.363-8.957c-6.591 0.969-10.071 7.225-10.311 13.174a10.971 10.971 0 0 0 1.568 6.034a7.495 7.495 0 0 0 6.265 3.48a6.613 6.613 0 0 0 4.148-1.466a6.055 6.055 0 0 0-0.231-9.514a6.322 6.322 0 0 0-5.245-1.166a1.573 1.573 0 0 1-0.549 0.077a1.614 1.614 0 0 1-1.646-1.543a2.571 2.571 0 0 1 0-0.771c0.394-3.326 1.568-5.648 5.794-6.42 0.154 0 0.154-0.077 0.154-0.077" fill="#ECA900"></path></svg>
              <strong className="title-style-3">{heading.text}</strong>
            </div>
            {leaveReview &&
              <div
                className="add-review-form bg-box vertical-padding side-padding ui-repeater"
                id="ReviewForm"
                data-role="panel"
              >
                {!submitText ? (<>
                  <div className="flex-between-middle" data-item="i" data-key="">
                    <h2>Write a Review</h2>
                    <span
                      className="cancel review-btn"
                      tabIndex={0}
                      data-role="btn"
                      onClick={() => setLeaveReview(false)}
                    >
                      Cancel
                    </span>
                  </div>
                  <fieldset data-item="i" data-key="">
                    <ul className="flex-wrap-between-spaced-grid-block-800">
                      <li className="full">
                        <label htmlFor="ReviewForm_ITM0_Rating">
                          Rating Your Experience:
                        </label>
                        <div className="input-text">
                          <ul
                            id="ReviewForm_ITM0_Rating"
                            className="star-rating flex-left ui-cms-select ui-cms-input flex justify-end !flex-row-reverse"
                          >
                            <li className='w-auto pb-0'>
                              <input
                                type="radio"
                                defaultValue={5}
                                required="required"
                                id="ReviewForm_ITM0_Rating_0"
                                name="ReviewForm$ITM0$Rating"
                              />
                              <label
                                className="ui-star"
                                htmlFor="ReviewForm_ITM0_Rating_0"
                              >
                                <svg className="filled" viewBox="0 0 24 24">
                                  <path d="M5.295 23.025C5.079 23.025 4.865 22.959 4.682 22.825C4.342 22.578 4.183 22.151 4.278 21.742L5.928 14.608L0.425 9.811C0.108 9.534-0.013 9.096 0.118 8.696C0.247 8.296 0.603 8.013 1.019 7.977L8.271 7.351L11.105 0.629C11.267 0.241 11.646-0.01 12.065-0.01C12.485-0.01 12.864 0.241 13.027 0.628L15.86 7.351L23.112 7.977C23.53 8.013 23.885 8.296 24.015 8.696C24.144 9.096 24.023 9.534 23.707 9.811L18.204 14.608L19.853 21.742C19.948 22.151 19.788 22.578 19.449 22.825C19.107 23.072 18.652 23.09 18.296 22.874L12.065 19.093L5.835 22.874C5.669 22.974 5.481 23.025 5.295 23.025Z" />
                                </svg>
                                <svg className="outline" viewBox="0 0 24 24">
                                  <path d="M12.005 1.336c0.031 0 0.047 0 0.073 0.065l2.555 6.57l0.303 0.781l0.835 0.065l6.783 0.53a0.099 0.099 0 0 1 0.089 0.091a0.199 0.199 0 0 1-0.049 0.223l-5.173 4.589l-0.593 0.527l0.181 0.773l1.605 6.884a0.183 0.183 0 0 1-0.026 0.159a0.11 0.11 0 0 1-0.082 0.054a0.04 0.04 0 0 1-0.017 0l-5.773-3.734l-0.722-0.467l-0.722 0.467l-5.782 3.736c-0.021 0.014-0.033 0.019-0.033 0.019a0.133 0.133 0 0 1-0.07-0.056a0.185 0.185 0 0 1-0.017-0.162l1.608-6.9l0.181-0.773l-0.593-0.527l-5.178-4.594a0.169 0.169 0 0 1-0.047-0.199a0.138 0.138 0 0 1 0.091-0.11l6.783-0.527l0.835-0.065l0.303-0.781l2.545-6.544a0.115 0.115 0 0 1 0.108-0.094m0-1.334a1.437 1.437 0 0 0-1.339 0.917l-2.555 6.57l-6.783 0.527a1.517 1.517 0 0 0-0.818 2.641l5.173 4.589l-1.608 6.9A1.477 1.477-537.322 0 0 5.456 24.001a1.381 1.381 0 0 0 0.764-0.237l5.773-3.734l5.773 3.734a1.348 1.348 0 0 0 0.739 0.225a1.495 1.495 0 0 0 1.407-1.843l-1.61-6.9l5.173-4.589A1.514 1.514-537.322 0 0 22.655 8.016l-6.781-0.53l-2.555-6.57A1.39 1.39-537.322 0 0 12.005 0.003h0Z" />
                                </svg>
                              </label>
                            </li>
                            <li className='w-auto pb-0'>
                              <input
                                type="radio"
                                defaultValue={4}
                                required="required"
                                id="ReviewForm_ITM0_Rating_1"
                                name="ReviewForm$ITM0$Rating"
                              />
                              <label
                                className="ui-star"
                                htmlFor="ReviewForm_ITM0_Rating_1"
                              >
                                <svg className="filled" viewBox="0 0 24 24">
                                  <path d="M5.295 23.025C5.079 23.025 4.865 22.959 4.682 22.825C4.342 22.578 4.183 22.151 4.278 21.742L5.928 14.608L0.425 9.811C0.108 9.534-0.013 9.096 0.118 8.696C0.247 8.296 0.603 8.013 1.019 7.977L8.271 7.351L11.105 0.629C11.267 0.241 11.646-0.01 12.065-0.01C12.485-0.01 12.864 0.241 13.027 0.628L15.86 7.351L23.112 7.977C23.53 8.013 23.885 8.296 24.015 8.696C24.144 9.096 24.023 9.534 23.707 9.811L18.204 14.608L19.853 21.742C19.948 22.151 19.788 22.578 19.449 22.825C19.107 23.072 18.652 23.09 18.296 22.874L12.065 19.093L5.835 22.874C5.669 22.974 5.481 23.025 5.295 23.025Z" />
                                </svg>
                                <svg className="outline" viewBox="0 0 24 24">
                                  <path d="M12.005 1.336c0.031 0 0.047 0 0.073 0.065l2.555 6.57l0.303 0.781l0.835 0.065l6.783 0.53a0.099 0.099 0 0 1 0.089 0.091a0.199 0.199 0 0 1-0.049 0.223l-5.173 4.589l-0.593 0.527l0.181 0.773l1.605 6.884a0.183 0.183 0 0 1-0.026 0.159a0.11 0.11 0 0 1-0.082 0.054a0.04 0.04 0 0 1-0.017 0l-5.773-3.734l-0.722-0.467l-0.722 0.467l-5.782 3.736c-0.021 0.014-0.033 0.019-0.033 0.019a0.133 0.133 0 0 1-0.07-0.056a0.185 0.185 0 0 1-0.017-0.162l1.608-6.9l0.181-0.773l-0.593-0.527l-5.178-4.594a0.169 0.169 0 0 1-0.047-0.199a0.138 0.138 0 0 1 0.091-0.11l6.783-0.527l0.835-0.065l0.303-0.781l2.545-6.544a0.115 0.115 0 0 1 0.108-0.094m0-1.334a1.437 1.437 0 0 0-1.339 0.917l-2.555 6.57l-6.783 0.527a1.517 1.517 0 0 0-0.818 2.641l5.173 4.589l-1.608 6.9A1.477 1.477-537.322 0 0 5.456 24.001a1.381 1.381 0 0 0 0.764-0.237l5.773-3.734l5.773 3.734a1.348 1.348 0 0 0 0.739 0.225a1.495 1.495 0 0 0 1.407-1.843l-1.61-6.9l5.173-4.589A1.514 1.514-537.322 0 0 22.655 8.016l-6.781-0.53l-2.555-6.57A1.39 1.39-537.322 0 0 12.005 0.003h0Z" />
                                </svg>
                              </label>
                            </li>
                            <li className='w-auto pb-0'>
                              <input
                                type="radio"
                                defaultValue={3}
                                required="required"
                                id="ReviewForm_ITM0_Rating_2"
                                name="ReviewForm$ITM0$Rating"
                              />
                              <label
                                className="ui-star"
                                htmlFor="ReviewForm_ITM0_Rating_2"
                              >
                                <svg className="filled" viewBox="0 0 24 24">
                                  <path d="M5.295 23.025C5.079 23.025 4.865 22.959 4.682 22.825C4.342 22.578 4.183 22.151 4.278 21.742L5.928 14.608L0.425 9.811C0.108 9.534-0.013 9.096 0.118 8.696C0.247 8.296 0.603 8.013 1.019 7.977L8.271 7.351L11.105 0.629C11.267 0.241 11.646-0.01 12.065-0.01C12.485-0.01 12.864 0.241 13.027 0.628L15.86 7.351L23.112 7.977C23.53 8.013 23.885 8.296 24.015 8.696C24.144 9.096 24.023 9.534 23.707 9.811L18.204 14.608L19.853 21.742C19.948 22.151 19.788 22.578 19.449 22.825C19.107 23.072 18.652 23.09 18.296 22.874L12.065 19.093L5.835 22.874C5.669 22.974 5.481 23.025 5.295 23.025Z" />
                                </svg>
                                <svg className="outline" viewBox="0 0 24 24">
                                  <path d="M12.005 1.336c0.031 0 0.047 0 0.073 0.065l2.555 6.57l0.303 0.781l0.835 0.065l6.783 0.53a0.099 0.099 0 0 1 0.089 0.091a0.199 0.199 0 0 1-0.049 0.223l-5.173 4.589l-0.593 0.527l0.181 0.773l1.605 6.884a0.183 0.183 0 0 1-0.026 0.159a0.11 0.11 0 0 1-0.082 0.054a0.04 0.04 0 0 1-0.017 0l-5.773-3.734l-0.722-0.467l-0.722 0.467l-5.782 3.736c-0.021 0.014-0.033 0.019-0.033 0.019a0.133 0.133 0 0 1-0.07-0.056a0.185 0.185 0 0 1-0.017-0.162l1.608-6.9l0.181-0.773l-0.593-0.527l-5.178-4.594a0.169 0.169 0 0 1-0.047-0.199a0.138 0.138 0 0 1 0.091-0.11l6.783-0.527l0.835-0.065l0.303-0.781l2.545-6.544a0.115 0.115 0 0 1 0.108-0.094m0-1.334a1.437 1.437 0 0 0-1.339 0.917l-2.555 6.57l-6.783 0.527a1.517 1.517 0 0 0-0.818 2.641l5.173 4.589l-1.608 6.9A1.477 1.477-537.322 0 0 5.456 24.001a1.381 1.381 0 0 0 0.764-0.237l5.773-3.734l5.773 3.734a1.348 1.348 0 0 0 0.739 0.225a1.495 1.495 0 0 0 1.407-1.843l-1.61-6.9l5.173-4.589A1.514 1.514-537.322 0 0 22.655 8.016l-6.781-0.53l-2.555-6.57A1.39 1.39-537.322 0 0 12.005 0.003h0Z" />
                                </svg>
                              </label>
                            </li>
                            <li className='w-auto pb-0'>
                              <input
                                type="radio"
                                defaultValue={2}
                                required="required"
                                id="ReviewForm_ITM0_Rating_3"
                                name="ReviewForm$ITM0$Rating"
                              />
                              <label
                                className="ui-star"
                                htmlFor="ReviewForm_ITM0_Rating_3"
                              >
                                <svg className="filled" viewBox="0 0 24 24">
                                  <path d="M5.295 23.025C5.079 23.025 4.865 22.959 4.682 22.825C4.342 22.578 4.183 22.151 4.278 21.742L5.928 14.608L0.425 9.811C0.108 9.534-0.013 9.096 0.118 8.696C0.247 8.296 0.603 8.013 1.019 7.977L8.271 7.351L11.105 0.629C11.267 0.241 11.646-0.01 12.065-0.01C12.485-0.01 12.864 0.241 13.027 0.628L15.86 7.351L23.112 7.977C23.53 8.013 23.885 8.296 24.015 8.696C24.144 9.096 24.023 9.534 23.707 9.811L18.204 14.608L19.853 21.742C19.948 22.151 19.788 22.578 19.449 22.825C19.107 23.072 18.652 23.09 18.296 22.874L12.065 19.093L5.835 22.874C5.669 22.974 5.481 23.025 5.295 23.025Z" />
                                </svg>
                                <svg className="outline" viewBox="0 0 24 24">
                                  <path d="M12.005 1.336c0.031 0 0.047 0 0.073 0.065l2.555 6.57l0.303 0.781l0.835 0.065l6.783 0.53a0.099 0.099 0 0 1 0.089 0.091a0.199 0.199 0 0 1-0.049 0.223l-5.173 4.589l-0.593 0.527l0.181 0.773l1.605 6.884a0.183 0.183 0 0 1-0.026 0.159a0.11 0.11 0 0 1-0.082 0.054a0.04 0.04 0 0 1-0.017 0l-5.773-3.734l-0.722-0.467l-0.722 0.467l-5.782 3.736c-0.021 0.014-0.033 0.019-0.033 0.019a0.133 0.133 0 0 1-0.07-0.056a0.185 0.185 0 0 1-0.017-0.162l1.608-6.9l0.181-0.773l-0.593-0.527l-5.178-4.594a0.169 0.169 0 0 1-0.047-0.199a0.138 0.138 0 0 1 0.091-0.11l6.783-0.527l0.835-0.065l0.303-0.781l2.545-6.544a0.115 0.115 0 0 1 0.108-0.094m0-1.334a1.437 1.437 0 0 0-1.339 0.917l-2.555 6.57l-6.783 0.527a1.517 1.517 0 0 0-0.818 2.641l5.173 4.589l-1.608 6.9A1.477 1.477-537.322 0 0 5.456 24.001a1.381 1.381 0 0 0 0.764-0.237l5.773-3.734l5.773 3.734a1.348 1.348 0 0 0 0.739 0.225a1.495 1.495 0 0 0 1.407-1.843l-1.61-6.9l5.173-4.589A1.514 1.514-537.322 0 0 22.655 8.016l-6.781-0.53l-2.555-6.57A1.39 1.39-537.322 0 0 12.005 0.003h0Z" />
                                </svg>
                              </label>
                            </li>
                            <li className='w-auto pb-0'>
                              <input
                                type="radio"
                                defaultValue={1}
                                required="required"
                                id="ReviewForm_ITM0_Rating_4"
                                name="ReviewForm$ITM0$Rating"
                              />
                              <label
                                className="ui-star "
                                htmlFor="ReviewForm_ITM0_Rating_4"
                              >
                                <svg className="filled" viewBox="0 0 24 24">
                                  <path d="M5.295 23.025C5.079 23.025 4.865 22.959 4.682 22.825C4.342 22.578 4.183 22.151 4.278 21.742L5.928 14.608L0.425 9.811C0.108 9.534-0.013 9.096 0.118 8.696C0.247 8.296 0.603 8.013 1.019 7.977L8.271 7.351L11.105 0.629C11.267 0.241 11.646-0.01 12.065-0.01C12.485-0.01 12.864 0.241 13.027 0.628L15.86 7.351L23.112 7.977C23.53 8.013 23.885 8.296 24.015 8.696C24.144 9.096 24.023 9.534 23.707 9.811L18.204 14.608L19.853 21.742C19.948 22.151 19.788 22.578 19.449 22.825C19.107 23.072 18.652 23.09 18.296 22.874L12.065 19.093L5.835 22.874C5.669 22.974 5.481 23.025 5.295 23.025Z" />
                                </svg>
                                <svg className="outline" viewBox="0 0 24 24">
                                  <path d="M12.005 1.336c0.031 0 0.047 0 0.073 0.065l2.555 6.57l0.303 0.781l0.835 0.065l6.783 0.53a0.099 0.099 0 0 1 0.089 0.091a0.199 0.199 0 0 1-0.049 0.223l-5.173 4.589l-0.593 0.527l0.181 0.773l1.605 6.884a0.183 0.183 0 0 1-0.026 0.159a0.11 0.11 0 0 1-0.082 0.054a0.04 0.04 0 0 1-0.017 0l-5.773-3.734l-0.722-0.467l-0.722 0.467l-5.782 3.736c-0.021 0.014-0.033 0.019-0.033 0.019a0.133 0.133 0 0 1-0.07-0.056a0.185 0.185 0 0 1-0.017-0.162l1.608-6.9l0.181-0.773l-0.593-0.527l-5.178-4.594a0.169 0.169 0 0 1-0.047-0.199a0.138 0.138 0 0 1 0.091-0.11l6.783-0.527l0.835-0.065l0.303-0.781l2.545-6.544a0.115 0.115 0 0 1 0.108-0.094m0-1.334a1.437 1.437 0 0 0-1.339 0.917l-2.555 6.57l-6.783 0.527a1.517 1.517 0 0 0-0.818 2.641l5.173 4.589l-1.608 6.9A1.477 1.477-537.322 0 0 5.456 24.001a1.381 1.381 0 0 0 0.764-0.237l5.773-3.734l5.773 3.734a1.348 1.348 0 0 0 0.739 0.225a1.495 1.495 0 0 0 1.407-1.843l-1.61-6.9l5.173-4.589A1.514 1.514-537.322 0 0 22.655 8.016l-6.781-0.53l-2.555-6.57A1.39 1.39-537.322 0 0 12.005 0.003h0Z" />
                                </svg>
                              </label>
                            </li>
                          </ul>
                          <div className="validation">
                            Please select your rating.
                          </div>
                        </div>
                      </li>
                      <li className="half">
                        <label
                          className="hide"
                          htmlFor="ReviewForm_ITM0_DisplayName"
                        >
                          Display Name:
                        </label>
                        <div className="input-text">
                          <input
                            placeholder="Display Name"
                            id="ReviewForm_ITM0_DisplayName"
                            type="text"
                            className="form ui-cms-input"
                            name="ReviewForm$ITM0$DisplayName"
                            defaultValue=""
                          />
                          <div
                            className="validation"
                            htmlFor="ReviewForm_ITM0_DisplayName"
                            data-type="valueMissing"
                          >
                            Please enter a name for display.
                          </div>
                        </div>
                      </li>
                      <li className="half">
                        <label className="hide" htmlFor="ReviewForm_ITM0_Quote">
                          Quote:{" "}
                        </label>
                        <div className="input-text">
                          <input
                            placeholder="Quote"
                            id="ReviewForm_ITM0_Quote"
                            type="text"
                            className="form ui-cms-input"
                            required="required"
                            name="ReviewForm$ITM0$Quote"
                            defaultValue=""
                            data-alert="* - required"
                          />
                          <div
                            className="validation"
                            htmlFor="ReviewForm_ITM0_Quote"
                            data-type="valueMissing"
                          >
                            Please write a quote.
                          </div>
                        </div>
                      </li>
                      <li className="half">
                        <label className="hide" htmlFor="ReviewForm_ITM0_City">
                          City:
                        </label>
                        <div className="input-text ReviewField">
                          <input
                            id="ReviewForm_ITM0_City"
                            placeholder="City"
                            type="text"
                            className="form ui-cms-input"
                            required="required"
                            name="ReviewForm$ITM0$City"
                            defaultValue=""
                            data-alert="* - required"
                          />
                          <div
                            className="validation"
                            htmlFor="ReviewForm_ITM0_City"
                            data-type="valueMissing"
                          >
                            Please enter your city name.
                          </div>
                        </div>
                      </li>
                      <li className="half">
                        <label className="hide" htmlFor="ReviewForm_ITM0_State">
                          State:
                        </label>
                        <div className="input-text ReviewField">
                          <select
                            id="ReviewForm_ITM0_State"
                            className="form ui-cms-select ui-cms-input"
                            required="required"
                            name="ReviewForm$ITM0$State"
                            data-alert="* - required"
                          >
                            <option value="">- Select State - </option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IT">International</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="DC">Washington, DC</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                            <option value="GU">Guam</option>
                          </select>
                          <div
                            className="validation"
                            htmlFor="ReviewForm_ITM0_City"
                            data-type="valueMissing"
                          >
                            Please select your state.
                          </div>
                        </div>
                      </li>
                      <li className="full">
                        <label
                          className="hide"
                          htmlFor="ReviewForm_ITM0_ReviewText"
                        >
                          Review:
                        </label>
                        <div className="input-text">
                          <textarea
                            placeholder="Review"
                            id="ReviewForm_ITM0_ReviewText"
                            className="form ui-cms-input"
                            required="required"
                            name="ReviewForm$ITM0$ReviewText"
                            data-alert="* - required"
                            defaultValue={""}
                          />
                          <div
                            className="validation"
                            htmlFor="ReviewForm_ITM0_ReviewText"
                            data-type="valueMissing"
                          >
                            Please enter your review.
                          </div>
                        </div>
                      </li>
                      <li className="full">
                        <label className="hide" htmlFor="ReviewForm_ITM0_Email">
                          Email:
                          <small>
                            Optional, will only be used to communicate with you as
                            needed.{" "}
                          </small>
                        </label>
                        <div className="input-text">
                          <input
                            placeholder="Email"
                            id="ReviewForm_ITM0_Email"
                            type="text"
                            className="form ui-cms-input"
                            name="ReviewForm$ITM0$Email"
                            defaultValue=""
                          />
                        </div>
                      </li>
                    </ul>
                  </fieldset>
                  <div className="auth save" data-item="i" data-key="">
                    <input
                      id="ReviewForm_ITM0_FFD6"
                      type="hidden"
                      className="ui-cms-input"
                      name="ReviewForm$ITM0$FFD6"
                      defaultValue=""
                    />
                    <button
                      className="btn v1 top-margin-small"
                      type="submit"
                      id="ReviewForm_ITM0_ctl09"
                      name="ReviewForm$ITM0$ctl09"

                    >
                      Submit Review
                    </button>
                  </div>
                </>) : (
                  <h1>Form Submitted</h1>
                )}
              </div>}
          </div>
        </section>
      </form>
      <section
        className="reviews-system v1 light-bg bg-box-stylized svg-deco-bottom-hill-4 svg-deco-bottom-wave-bottom ui-repeater"
        id="ReviewSystemV1"
        data-onvisible="show"
      >
        <div className="main">
          <ul className="flex-grid-large-wrap-block-800 close-gap-800 results-19">
            {items &&
              items.map((item, index) => {
                return (
                  <li
                    className="half flex- bg-box border-radius-item overflow-hidden"
                    data-item="i"
                    data-key={3398782}
                  >
                    <blockquote className="flex-column-between full relative">
                      <div className="info auto side-padding-large vertical-padding-small">
                        <strong className="title-style-2 title-color-2">
                          {item.reviews.document.data.heading.text}
                        </strong>
                        <svg class="quote-icon top-margin-tiny" viewBox="0 0 36 36" role="presentation" title="Quote Icon" data-use="/cms/svg/site/ykmkv4_n6ok.36.svg#quotes" width="39" height="39"><path d="M8.013 15.466a8.045 8.045 0 0 1 6.48 1.483a7.661 7.661 0 0 1 0.231 12.059a8.034 8.034 0 0 1-5.245 1.86a9.036 9.036 0 0 1-7.602-4.26a14.634 14.634 0 0 1-1.877-6.96c0.309-6.651 3.214-11.288 8.768-13.765a11.187 11.187 0 0 1 2.006-0.557l0.977-0.137a1.55 1.55 0 0 1 1.954 1.62v1.628a1.607 1.607 0 0 1-1.483 1.62c-2.983 0.549-4.217 1.997-4.551 5.451m4.354-8.957c-6.583 0.969-10.071 7.225-10.302 13.174a10.971 10.971 0 0 0 1.568 6.034a7.495 7.495 0 0 0 6.265 3.48a6.613 6.613 0 0 0 4.148-1.466a6.055 6.055 0 0 0-0.231-9.514a6.322 6.322 0 0 0-5.245-1.166a1.573 1.573 0 0 1-0.549 0.077a1.614 1.614 0 0 1-1.646-1.543a2.571 2.571 0 0 1 0-0.771c0.394-3.326 1.568-5.648 5.794-6.42 0.163 0 0.163-0.077 0.163-0.077m14.476 7.105a8.038 8.038 0 0 1 6.48 1.483a7.661 7.661 0 0 1 0.231 12.059a8.002 8.002 0 0 1-5.245 1.86a9.021 9.021 0 0 1-7.594-4.26a14.731 14.731 0 0 1-1.886-6.96c0.317-6.651 3.214-11.288 8.777-13.765a11.097 11.097 0 0 1 1.997-0.557l0.977-0.137a1.55 1.55 0 0 1 1.954 1.62v1.628a1.607 1.607 0 0 1-1.483 1.62c-2.974 0.549-4.217 1.997-4.551 5.451m4.363-8.957c-6.591 0.969-10.071 7.225-10.311 13.174a10.971 10.971 0 0 0 1.568 6.034a7.495 7.495 0 0 0 6.265 3.48a6.613 6.613 0 0 0 4.148-1.466a6.055 6.055 0 0 0-0.231-9.514a6.322 6.322 0 0 0-5.245-1.166a1.573 1.573 0 0 1-0.549 0.077a1.614 1.614 0 0 1-1.646-1.543a2.571 2.571 0 0 1 0-0.771c0.394-3.326 1.568-5.648 5.794-6.42 0.154 0 0.154-0.077 0.154-0.077" fill="#ECA900"></path></svg>
                        <div className="content-style">
                          <PrismicRichText
                            field={
                              item?.reviews?.document?.data?.review
                                ?.richText
                            }
                            components={{
                              paragraph: ({ children }) => (
                                <p className=''>
                                  {children}
                                </p>
                              )
                            }}
                          />
                          <p className="title-style-5 title-color-5 no-bottom-margin">
                            {item.reviews.document.data.reviewer}
                          </p>
                        </div>
                      </div>
                      <div className="bg-white !flex justify-center gap-1 side-padding-large vertical-padding-tiny">
                        <svg className='text-[1.33rem]' viewBox="0 0 24 24" role="presentation" width="24" height="24"><path d="M5.295 23.025C5.079 23.025 4.865 22.959 4.682 22.825C4.342 22.578 4.183 22.151 4.278 21.742L5.928 14.608L0.425 9.811C0.108 9.534-0.013 9.096 0.118 8.696C0.247 8.296 0.603 8.013 1.019 7.977L8.271 7.351L11.105 0.629C11.267 0.241 11.646-0.01 12.065-0.01C12.485-0.01 12.864 0.241 13.027 0.628L15.86 7.351L23.112 7.977C23.53 8.013 23.885 8.296 24.015 8.696C24.144 9.096 24.023 9.534 23.707 9.811L18.204 14.608L19.853 21.742C19.948 22.151 19.788 22.578 19.449 22.825C19.107 23.072 18.652 23.09 18.296 22.874L12.065 19.093L5.835 22.874C5.669 22.974 5.481 23.025 5.295 23.025Z" fill="#FFD80A"></path></svg>
                        <svg className='text-[1.33rem]' viewBox="0 0 24 24" role="presentation" width="24" height="24"><path d="M5.295 23.025C5.079 23.025 4.865 22.959 4.682 22.825C4.342 22.578 4.183 22.151 4.278 21.742L5.928 14.608L0.425 9.811C0.108 9.534-0.013 9.096 0.118 8.696C0.247 8.296 0.603 8.013 1.019 7.977L8.271 7.351L11.105 0.629C11.267 0.241 11.646-0.01 12.065-0.01C12.485-0.01 12.864 0.241 13.027 0.628L15.86 7.351L23.112 7.977C23.53 8.013 23.885 8.296 24.015 8.696C24.144 9.096 24.023 9.534 23.707 9.811L18.204 14.608L19.853 21.742C19.948 22.151 19.788 22.578 19.449 22.825C19.107 23.072 18.652 23.09 18.296 22.874L12.065 19.093L5.835 22.874C5.669 22.974 5.481 23.025 5.295 23.025Z" fill="#FFD80A"></path></svg>
                        <svg className='text-[1.33rem]' viewBox="0 0 24 24" role="presentation" width="24" height="24"><path d="M5.295 23.025C5.079 23.025 4.865 22.959 4.682 22.825C4.342 22.578 4.183 22.151 4.278 21.742L5.928 14.608L0.425 9.811C0.108 9.534-0.013 9.096 0.118 8.696C0.247 8.296 0.603 8.013 1.019 7.977L8.271 7.351L11.105 0.629C11.267 0.241 11.646-0.01 12.065-0.01C12.485-0.01 12.864 0.241 13.027 0.628L15.86 7.351L23.112 7.977C23.53 8.013 23.885 8.296 24.015 8.696C24.144 9.096 24.023 9.534 23.707 9.811L18.204 14.608L19.853 21.742C19.948 22.151 19.788 22.578 19.449 22.825C19.107 23.072 18.652 23.09 18.296 22.874L12.065 19.093L5.835 22.874C5.669 22.974 5.481 23.025 5.295 23.025Z" fill="#FFD80A"></path></svg>
                        <svg className='text-[1.33rem]' viewBox="0 0 24 24" role="presentation" width="24" height="24"><path d="M5.295 23.025C5.079 23.025 4.865 22.959 4.682 22.825C4.342 22.578 4.183 22.151 4.278 21.742L5.928 14.608L0.425 9.811C0.108 9.534-0.013 9.096 0.118 8.696C0.247 8.296 0.603 8.013 1.019 7.977L8.271 7.351L11.105 0.629C11.267 0.241 11.646-0.01 12.065-0.01C12.485-0.01 12.864 0.241 13.027 0.628L15.86 7.351L23.112 7.977C23.53 8.013 23.885 8.296 24.015 8.696C24.144 9.096 24.023 9.534 23.707 9.811L18.204 14.608L19.853 21.742C19.948 22.151 19.788 22.578 19.449 22.825C19.107 23.072 18.652 23.09 18.296 22.874L12.065 19.093L5.835 22.874C5.669 22.974 5.481 23.025 5.295 23.025Z" fill="#FFD80A"></path></svg>
                        <svg className='text-[1.33rem]' viewBox="0 0 24 24" role="presentation" width="24" height="24"><path d="M5.295 23.025C5.079 23.025 4.865 22.959 4.682 22.825C4.342 22.578 4.183 22.151 4.278 21.742L5.928 14.608L0.425 9.811C0.108 9.534-0.013 9.096 0.118 8.696C0.247 8.296 0.603 8.013 1.019 7.977L8.271 7.351L11.105 0.629C11.267 0.241 11.646-0.01 12.065-0.01C12.485-0.01 12.864 0.241 13.027 0.628L15.86 7.351L23.112 7.977C23.53 8.013 23.885 8.296 24.015 8.696C24.144 9.096 24.023 9.534 23.707 9.811L18.204 14.608L19.853 21.742C19.948 22.151 19.788 22.578 19.449 22.825C19.107 23.072 18.652 23.09 18.296 22.874L12.065 19.093L5.835 22.874C5.669 22.974 5.481 23.025 5.295 23.025Z" fill="#FFD80A"></path></svg>

                      </div>
                    </blockquote>
                  </li>
                )
              })}
           

          </ul>
        </div>
      </section>
    </>
   
  )
}
export default AllReviewsSection

export const query = graphql`
  fragment pagesDataBodyAllreviews on PrismicPagesDataBodyAllreviews {
    id
    slice_type
          primary {
            heading {
              text
            }
        }
           
          items {
            reviews {
              document {
                ... on PrismicReviews {
                  id
                  data {
                    heading {
                      richText
                      text
                    }
                    review {
                      richText
                      text
                    }
                    reviewer
                  }
                }
              }
            }
          }
    }
 `