import React from 'react'
import { useState } from 'react'
import '../../style/reviews.css'
import QuoteIcon from '../../images/svg/QuoteIcon.svg'
import subBannerBgImg from '../../images/sub-banner-v1-bg.jpg'
import tltBdrImg from '../../images/tlt-bdr.png'
import StarIcon from "../../images/svg/star.svg";
function ReviewsPage() {
  const [leaveReview,setLeaveReview] = useState(false)
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
            <h1>Reviews</h1>
            <img src={tltBdrImg} className="header-flair"/>
          </header>
          <div id="SystemBannerV1BtnCon"></div>
        </div>
      </div>
    </div>
  </section>
  <form
  netlify
    id="Form_LeaveReviewV1"
    method="post"
    encType="multipart/form-data"
    action="https://www.watermenplumbing.com/reviews/"
  >
    <input type="hidden" name="_m_" defaultValue="LeaveReviewV1" />
    <section
      className="reviews-system leave-review v1 light-bg bg-box-like tiny-padding"
      id="LeaveReviewV1"
    >
      <div className="main">
        <div
          className="review-btn add-review text-center vertical-padding-tiny side-padding-small"
          tabIndex={0}
          data-role="btn"
          onClick={()=>setLeaveReview(prevState=>!prevState)}
        >
          <QuoteIcon style={{marginLeft:'auto',marginRight:'auto'}}/>
          <strong className="title-style-3">Leave a Review</strong>
        </div>
        {leaveReview &&<div
          className="add-review-form bg-box vertical-padding side-padding ui-repeater"
          id="ReviewForm"
          data-role="panel"
        >
          <div className="flex-between-middle" data-item="i" data-key="">
            <h2>Write a Review</h2>
            <span className="cancel review-btn" tabIndex={0} data-role="btn" 
            onClick={()=>setLeaveReview(false)}
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
                    className="star-rating flex-left ui-cms-select ui-cms-input"
                  >
                    <li>
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
                    <li>
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
                    <li>
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
                    <li>
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
                    <li>
                      <input
                        type="radio"
                        defaultValue={1}
                        required="required"
                        id="ReviewForm_ITM0_Rating_4"
                        name="ReviewForm$ITM0$Rating"
                      />
                      <label
                        className="ui-star"
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
                  <div className="validation">Please select your rating.</div>
                </div>
              </li>
              <li className="half">
                <label className="hide" htmlFor="ReviewForm_ITM0_DisplayName">
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
                <label className="hide" htmlFor="ReviewForm_ITM0_ReviewText">
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
              data-commandname="Update"
            >
              Submit Review
            </button>
          </div>
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
        <li
          className="half flex- bg-box border-radius-item overflow-hidden"
          data-item="i"
          data-key={3398782}
        >
          <blockquote className="flex-column-between full relative">
            <div className="info auto side-padding-large vertical-padding-small">
              <strong className="title-style-2 title-color-2">
                Satisfied with the experience
              </strong>
             <QuoteIcon  className="quote-icon top-margin-tiny"/>
              <div className="content-style">
                Called with emergency of our toilet leaking down into apt below.
                They came same day of a holiday weekend and though not cheap, at
                least the issue is fixed. The plumbers were friendly and
                professional and we are satisfied with the experience.
              </div>
              <p className="title-style-5 title-color-5 no-bottom-margin">
                - Sunshine S.
              </p>
              <div className="author-info">
                <em className="top-margin-tiny">FL</em>
              </div>
            </div>
            <div className="rating-icons full side-padding-large vertical-padding-tiny">
              <ul
                className="stars rating5 flex-grid-small-center full"
                title="5 Star Rating"
              >
                <li className="fit flex-middle-center">
                 <StarIcon className="rate1"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate2"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate3"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate4"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate5"/>
                </li>
              </ul>
            </div>
          </blockquote>
        </li>
        <li
          className="half flex- bg-box border-radius-item overflow-hidden"
          data-item="i"
          data-key={3390068}
        >
          <blockquote className="flex-column-between full relative">
            <div className="info auto side-padding-large vertical-padding-small">
              <strong className="title-style-2 title-color-2">
                Highly recommend.
              </strong>
             <QuoteIcon  className="quote-icon top-margin-tiny"/>
              <div className="content-style">
                Really good service. Really nice people as well which makes all
                the difference. Came on time and the communication was
                excellent. Texted when on their way. Super tidy as well. We
                really appreciated the work that was done.
              </div>
              <p className="title-style-5 title-color-5 no-bottom-margin">
                - Shauna G.
              </p>
              <div className="author-info">
                <em className="top-margin-tiny">FL</em>
              </div>
            </div>
            <div className="rating-icons full side-padding-large vertical-padding-tiny">
              <ul
                className="stars rating5 flex-grid-small-center full"
                title="5 Star Rating"
              >
                <li className="fit flex-middle-center">
                <StarIcon className="rate1"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate2"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate3"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate4"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate5"/>
                </li>
              </ul>
            </div>
          </blockquote>
        </li>
        <li
          className="half flex- bg-box border-radius-item overflow-hidden"
          data-item="i"
          data-key={3351283}
        >
          <blockquote className="flex-column-between full relative">
            <div className="info auto side-padding-large vertical-padding-small">
              <strong className="title-style-2 title-color-2">
                Highly recommend this business
              </strong>
              <QuoteIcon  className="quote-icon top-margin-tiny"/>
              <div className="content-style">
                They were prompt and the technician worked really hard to get
                the job of finding the source if the leak done at a fair price.
                This will be the ONLY place i recommend to anyone.
              </div>
              <p className="title-style-5 title-color-5 no-bottom-margin">
                - Charmaine
              </p>
              <div className="author-info">
                <em className="top-margin-tiny">FL</em>
              </div>
            </div>
            <div className="rating-icons full side-padding-large vertical-padding-tiny">
              <ul
                className="stars rating5 flex-grid-small-center full"
                title="5 Star Rating"
              >
                <li className="fit flex-middle-center">
                <StarIcon className="rate1"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate2"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate3"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate4"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate5"/>
                </li>
              </ul>
            </div>
          </blockquote>
        </li>
        <li
          className="half flex- bg-box border-radius-item overflow-hidden"
          data-item="i"
          data-key={3311106}
        >
          <blockquote className="flex-column-between full relative">
            <div className="info auto side-padding-large vertical-padding-small">
              <strong className="title-style-2 title-color-2">
                I would definitely recommend Watermen Plumbing for anyone
                looking for a reliable capable plumbing service.
              </strong>
              <QuoteIcon  className="quote-icon top-margin-tiny"/>
              <div className="content-style">
                I’ve hired Watermen Plumbing several times—twice for pretty big
                jobs. Each time I have found them to be professional,
                hardworking, and reasonable in their pricing. They come when
                they say they will, they listen to what work is needed, give
                options, and provide a price that they stick with. They are
                respectful of property, wearing booties in the house, laying
                drop cloths, etc.. They clean up after themselves and leave
                thing as clean as (or cleaner than) they found them. I also like
                that they have an apprenticeship program. On the last job they
                did for me, an apprentice came along to assist. He was so
                positive about the program and the opportunity to learn the
                trade. As a former teacher, I appreciate that.
              </div>
              <p className="title-style-5 title-color-5 no-bottom-margin">
                - Karen S.
              </p>
              <div className="author-info">
                <em className="top-margin-tiny">FL</em>
              </div>
            </div>
            <div className="rating-icons full side-padding-large vertical-padding-tiny">
              <ul
                className="stars rating5 flex-grid-small-center full"
                title="5 Star Rating"
              >
                <li className="fit flex-middle-center">
                <StarIcon className="rate1"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate2"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate3"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate4"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate5"/>
                </li>
              </ul>
            </div>
          </blockquote>
        </li>
        <li
          className="half flex- bg-box border-radius-item overflow-hidden"
          data-item="i"
          data-key={3260362}
        >
          <blockquote className="flex-column-between full relative">
            <div className="info auto side-padding-large vertical-padding-small">
              <strong className="title-style-2 title-color-2">
                Highly recommend
              </strong>
              <QuoteIcon  className="quote-icon top-margin-tiny"/>
              <div className="content-style">
                If every business had the professionalism and integrity as these
                folks- the world would be a nicer placer! Courteous and clean,
                timely and efficient. They delivered on their promise and were
                very patient with my complicated building admin office, going
                above and beyond to schedule the toilet replacement a d make it
                work for all parties involved. Do not try to “save some money”
                hiring elsewhere when you may regret it later. Worth the
                investment.
              </div>
              <p className="title-style-5 title-color-5 no-bottom-margin">
                - Sara S.R.
              </p>
              <div className="author-info">
                <em className="top-margin-tiny">FL</em>
              </div>
            </div>
            <div className="rating-icons full side-padding-large vertical-padding-tiny">
              <ul
                className="stars rating5 flex-grid-small-center full"
                title="5 Star Rating"
              >
                <li className="fit flex-middle-center">
                <StarIcon className="rate1"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate2"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate3"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate4"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate5"/>
                </li>
              </ul>
            </div>
          </blockquote>
        </li>
        <li
          className="half flex- bg-box border-radius-item overflow-hidden"
          data-item="i"
          data-key={2978042}
        >
          <blockquote className="flex-column-between full relative">
            <div className="info auto side-padding-large vertical-padding-small">
              <strong className="title-style-2 title-color-2">
                I was impressed with the service.
              </strong>
              <QuoteIcon  className="quote-icon top-margin-tiny"/>
              <div className="content-style">
                The customer service was excellent both on the phone and in
                person. I was advised via text what technician was responding
                and when they would arrive. Everything was explained to me prior
                to completing the work. Safety precautions were observed.
              </div>
              <p className="title-style-5 title-color-5 no-bottom-margin">
                - Mimi S.P.
              </p>
              <div className="author-info">
                <em className="top-margin-tiny">FL</em>
              </div>
            </div>
            <div className="rating-icons full side-padding-large vertical-padding-tiny">
            <ul
                className="stars rating5 flex-grid-small-center full"
                title="5 Star Rating"
              >
                <li className="fit flex-middle-center">
                <StarIcon className="rate1"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate2"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate3"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate4"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate5"/>
                </li>
              </ul>
            </div>
          </blockquote>
        </li>
        <li
          className="half flex- bg-box border-radius-item overflow-hidden"
          data-item="i"
          data-key={2972239}
        >
          <blockquote className="flex-column-between full relative">
            <div className="info auto side-padding-large vertical-padding-small">
              <strong className="title-style-2 title-color-2">
                Highly recommended!
              </strong>
              <QuoteIcon  className="quote-icon top-margin-tiny"/>
              <div className="content-style">
                On-time and professional. Complex faucet replacement was done
                efficiently and quickly, with zero mess afterwards!
              </div>
              <p className="title-style-5 title-color-5 no-bottom-margin">
                - John L.
              </p>
              <div className="author-info">
                <em className="top-margin-tiny">FL</em>
              </div>
            </div>
            <div className="rating-icons full side-padding-large vertical-padding-tiny">
            <ul
                className="stars rating5 flex-grid-small-center full"
                title="5 Star Rating"
              >
                <li className="fit flex-middle-center">
                <StarIcon className="rate1"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate2"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate3"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate4"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate5"/>
                </li>
              </ul>
            </div>
          </blockquote>
        </li>
        <li
          className="half flex- bg-box border-radius-item overflow-hidden"
          data-item="i"
          data-key={2972243}
        >
          <blockquote className="flex-column-between full relative">
            <div className="info auto side-padding-large vertical-padding-small">
              <strong className="title-style-2 title-color-2">
                Very Professional
              </strong>
              <QuoteIcon  className="quote-icon top-margin-tiny"/>
              <div className="content-style">You can depend on them.</div>
              <p className="title-style-5 title-color-5 no-bottom-margin">
                - Douglas D.
              </p>
              <div className="author-info">
                <em className="top-margin-tiny">FL</em>
              </div>
            </div>
            <div className="rating-icons full side-padding-large vertical-padding-tiny">
            <ul
                className="stars rating5 flex-grid-small-center full"
                title="5 Star Rating"
              >
                <li className="fit flex-middle-center">
                <StarIcon className="rate1"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate2"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate3"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate4"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate5"/>
                </li>
              </ul>
            </div>
          </blockquote>
        </li>
        <li
          className="half flex- bg-box border-radius-item overflow-hidden"
          data-item="i"
          data-key={2972242}
        >
          <blockquote className="flex-column-between full relative">
            <div className="info auto side-padding-large vertical-padding-small">
              <strong className="title-style-2 title-color-2">
                Professional from the very first contact to the very last email!
              </strong>
               <QuoteIcon  className="quote-icon top-margin-tiny"/>
              <div className="content-style">
                Quality service installing quality product and you should put
                them at the very top of your call list the next time you need a
                plumber.
              </div>
              <p className="title-style-5 title-color-5 no-bottom-margin">
                - Charles K.
              </p>
              <div className="author-info">
                <em className="top-margin-tiny">FL</em>
              </div>
            </div>
            <div className="rating-icons full side-padding-large vertical-padding-tiny">
               <ul
                className="stars rating5 flex-grid-small-center full"
                title="5 Star Rating"
              >
                <li className="fit flex-middle-center">
                <StarIcon className="rate1"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate2"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate3"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate4"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate5"/>
                </li>
              </ul>
            </div>
          </blockquote>
        </li>
        <li
          className="half flex- bg-box border-radius-item overflow-hidden"
          data-item="i"
          data-key={2875224}
        >
          <blockquote className="flex-column-between full relative">
            <div className="info auto side-padding-large vertical-padding-small">
              <strong className="title-style-2 title-color-2">
                Highly Recommend!
              </strong>
               <QuoteIcon  className="quote-icon top-margin-tiny"/>
              <div className="content-style">
                Excellent service! I ran into a couple of situations where parts
                needed to be ordered, etc., they took care of everything. Sharp
                on the time they set the appointments for. The price is
                reasonable.&nbsp; From now on, I know who to call. Not the
                ghostbusters, but the Watermen!
              </div>
              <p className="title-style-5 title-color-5 no-bottom-margin">
                - Past Customer
              </p>
            </div>
            <div className="rating-icons full side-padding-large vertical-padding-tiny">
               <ul
                className="stars rating5 flex-grid-small-center full"
                title="5 Star Rating"
              >
                <li className="fit flex-middle-center">
                <StarIcon className="rate1"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate2"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate3"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate4"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate5"/>
                </li>
              </ul>
            </div>
          </blockquote>
        </li>
        <li
          className="half flex- bg-box border-radius-item overflow-hidden"
          data-item="i"
          data-key={2914140}
        >
          <blockquote className="flex-column-between full relative">
            <div className="info auto side-padding-large vertical-padding-small">
              <strong className="title-style-2 title-color-2">
                Very Satisfied!
              </strong>
               <QuoteIcon  className="quote-icon top-margin-tiny"/>
              <div className="content-style">
                <p>
                  I've used them twice - great professionals. I would recommend
                  them for the person who insists on top quality workmanship.
                </p>
              </div>
              <p className="title-style-5 title-color-5 no-bottom-margin">
                - Art A.
              </p>
            </div>
            <div className="rating-icons full side-padding-large vertical-padding-tiny">
               <ul
                className="stars rating5 flex-grid-small-center full"
                title="5 Star Rating"
              >
                <li className="fit flex-middle-center">
                <StarIcon className="rate1"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate2"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate3"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate4"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate5"/>
                </li>
              </ul>
            </div>
          </blockquote>
        </li>
        <li
          className="half flex- bg-box border-radius-item overflow-hidden"
          data-item="i"
          data-key={2914141}
        >
          <blockquote className="flex-column-between full relative">
            <div className="info auto side-padding-large vertical-padding-small">
              <strong className="title-style-2 title-color-2">
                Highly Recommend!
              </strong>
               <QuoteIcon  className="quote-icon top-margin-tiny"/>
              <div className="content-style">
                <p>
                  Excellent service. Careful and methodical. Very fast response.
                  Thanks!
                </p>
              </div>
              <p className="title-style-5 title-color-5 no-bottom-margin">
                - Jacobo R.
              </p>
            </div>
            <div className="rating-icons full side-padding-large vertical-padding-tiny">
               <ul
                className="stars rating5 flex-grid-small-center full"
                title="5 Star Rating"
              >
                <li className="fit flex-middle-center">
                <StarIcon className="rate1"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate2"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate3"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate4"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate5"/>
                </li>
              </ul>
            </div>
          </blockquote>
        </li>
        <li
          className="half flex- bg-box border-radius-item overflow-hidden"
          data-item="i"
          data-key={2914142}
        >
          <blockquote className="flex-column-between full relative">
            <div className="info auto side-padding-large vertical-padding-small">
              <strong className="title-style-2 title-color-2">
                Customer for life!
              </strong>
               <QuoteIcon  className="quote-icon top-margin-tiny"/>
              <div className="content-style">
                Not only is he our Plumber but one of our Tenants, Yosef is very
                accurate with his recommendations and estimates. I highly
                recommend Watermen Plumbing! Great work and very professional.
              </div>
              <p className="title-style-5 title-color-5 no-bottom-margin">
                - Nancy R.
              </p>
            </div>
            <div className="rating-icons full side-padding-large vertical-padding-tiny">
               <ul
                className="stars rating5 flex-grid-small-center full"
                title="5 Star Rating"
              >
                <li className="fit flex-middle-center">
                <StarIcon className="rate1"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate2"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate3"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate4"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate5"/>
                </li>
              </ul>
            </div>
          </blockquote>
        </li>
        <li
          className="half flex- bg-box border-radius-item overflow-hidden"
          data-item="i"
          data-key={2914145}
        >
          <blockquote className="flex-column-between full relative">
            <div className="info auto side-padding-large vertical-padding-small">
              <strong className="title-style-2 title-color-2">
                Reliable &amp; Honest
              </strong>
               <QuoteIcon  className="quote-icon top-margin-tiny"/>
              <div className="content-style">
                Reliable company as there are very few around. Always on time,
                and needless to say their work quality is second to none. I have
                used them several times and just called them to be part of my
                bathroom remodeling project. Tonight I will sleep with peace of
                mind.
              </div>
              <p className="title-style-5 title-color-5 no-bottom-margin">
                - Ramiro M.
              </p>
            </div>
            <div className="rating-icons full side-padding-large vertical-padding-tiny">
               <ul
                className="stars rating5 flex-grid-small-center full"
                title="5 Star Rating"
              >
                <li className="fit flex-middle-center">
                <StarIcon className="rate1"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate2"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate3"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate4"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate5"/>
                </li>
              </ul>
            </div>
          </blockquote>
        </li>
        <li
          className="half flex- bg-box border-radius-item overflow-hidden"
          data-item="i"
          data-key={2914144}
        >
          <blockquote className="flex-column-between full relative">
            <div className="info auto side-padding-large vertical-padding-small">
              <strong className="title-style-2 title-color-2">
                Best Plumbers in Town
              </strong>
               <QuoteIcon  className="quote-icon top-margin-tiny"/>
              <div className="content-style">
                <p>
                  What a wonderful and professional operation. In the future, we
                  will always call Watermen!
                </p>
              </div>
              <p className="title-style-5 title-color-5 no-bottom-margin">
                - Laban Y.
              </p>
            </div>
            <div className="rating-icons full side-padding-large vertical-padding-tiny">
               <ul
                className="stars rating5 flex-grid-small-center full"
                title="5 Star Rating"
              >
                <li className="fit flex-middle-center">
                <StarIcon className="rate1"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate2"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate3"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate4"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate5"/>
                </li>
              </ul>
            </div>
          </blockquote>
        </li>
        <li
          className="half flex- bg-box border-radius-item overflow-hidden"
          data-item="i"
          data-key={2914143}
        >
          <blockquote className="flex-column-between full relative">
            <div className="info auto side-padding-large vertical-padding-small">
              <strong className="title-style-2 title-color-2">
                Highly Recommend!
              </strong>
               <QuoteIcon  className="quote-icon top-margin-tiny"/>
              <div className="content-style">
                <p>
                  Prompt and professional. Great communication! I highly
                  recommend their services!
                </p>
              </div>
              <p className="title-style-5 title-color-5 no-bottom-margin">
                - Lindsay M.
              </p>
            </div>
            <div className="rating-icons full side-padding-large vertical-padding-tiny">
               <ul
                className="stars rating5 flex-grid-small-center full"
                title="5 Star Rating"
              >
                <li className="fit flex-middle-center">
                <StarIcon className="rate1"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate2"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate3"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate4"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate5"/>
                </li>
              </ul>
            </div>
          </blockquote>
        </li>
        <li
          className="half flex- bg-box border-radius-item overflow-hidden"
          data-item="i"
          data-key={2914151}
        >
          <blockquote className="flex-column-between full relative">
            <div className="info auto side-padding-large vertical-padding-small">
              <strong className="title-style-2 title-color-2">
                Friendly staff!
              </strong>
               <QuoteIcon  className="quote-icon top-margin-tiny"/>
              <div className="content-style">
                They were very professional and they come at the exact given
                time everything was processed and explain clearly. Most of all
                they were very affordable.
              </div>
              <p className="title-style-5 title-color-5 no-bottom-margin">
                - Dovi W.
              </p>
            </div>
            <div className="rating-icons full side-padding-large vertical-padding-tiny">
               <ul
                className="stars rating5 flex-grid-small-center full"
                title="5 Star Rating"
              >
                <li className="fit flex-middle-center">
                <StarIcon className="rate1"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate2"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate3"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate4"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate5"/>
                </li>
              </ul>
            </div>
          </blockquote>
        </li>
        <li
          className="half flex- bg-box border-radius-item overflow-hidden"
          data-item="i"
          data-key={2914147}
        >
          <blockquote className="flex-column-between full relative">
            <div className="info auto side-padding-large vertical-padding-small">
              <strong className="title-style-2 title-color-2">
                Simply the best!
              </strong>
               <QuoteIcon  className="quote-icon top-margin-tiny"/>
              <div className="content-style">
                Honest &amp; Good! Very professional! I’ve used many plumbers
                over the years, but he is the best!
              </div>
              <p className="title-style-5 title-color-5 no-bottom-margin">
                - Mendy T.
              </p>
            </div>
            <div className="rating-icons full side-padding-large vertical-padding-tiny">
               <ul
                className="stars rating5 flex-grid-small-center full"
                title="5 Star Rating"
              >
                <li className="fit flex-middle-center">
                <StarIcon className="rate1"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate2"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate3"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate4"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate5"/>
                </li>
              </ul>
            </div>
          </blockquote>
        </li>
        <li
          className="half flex- bg-box border-radius-item overflow-hidden"
          data-item="i"
          data-key={2914149}
        >
          <blockquote className="flex-column-between full relative">
            <div className="info auto side-padding-large vertical-padding-small">
              <strong className="title-style-2 title-color-2">
                Very Professional
              </strong>
               <QuoteIcon  className="quote-icon top-margin-tiny"/>
              <div className="content-style">
                The absolute best! Uses high-grade equipment that lasts forever!
                Very professional, nice, and every job he did for me turned out
                perfect!! Highly recommend!
              </div>
              <p className="title-style-5 title-color-5 no-bottom-margin">
                - Leelee E.
              </p>
            </div>
            <div className="rating-icons full side-padding-large vertical-padding-tiny">
               <ul
                className="stars rating5 flex-grid-small-center full"
                title="5 Star Rating"
              >
                <li className="fit flex-middle-center">
                <StarIcon className="rate1"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate2"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate3"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate4"/>
                </li>
                <li className="fit flex-middle-center">
                <StarIcon className="rate5"/>
                </li>
              </ul>
            </div>
          </blockquote>
        </li>
      </ul>
    </div>
  </section>
</main>

  )
}

export default ReviewsPage