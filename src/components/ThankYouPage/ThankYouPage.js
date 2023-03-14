import React from 'react'
import '../../style/thankYou.css'
import thankyouBg from '../../images/thank-you-v1-bg.jpeg'
import tltBdrImg from '../../images/tlt-bdr.png'
import { Link } from 'gatsby'
function ThankYouPage() {
  return (
    <main id="MainZone">
    <section
      className="thank-you v1 bg-image dark-bg bg-box-none text-center svg-deco-bottom-hill-4 svg-deco-bottom-wave-bottom"
      id="ThankYouV1"
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
          data-src="/assets/thank-you/thank-you-v1-bg-mobile.jpg"
        />
        <img
          alt=""
          src={thankyouBg}
        />
      </picture>
      <div className="main">
        <div className="bg-box side-padding-medium vertical-padding info text-align center-800 box-flair border-radius">
          <div className="flair-border">
            <span className="flair-1" />
            <span className="flair-2" />
            <h1 className="title">Thank You</h1>
            <img src={tltBdrImg} className="header-flair" />
            <p className="title-style-5 title-color-5">
              We'll get back to you shortly!
            </p>
            <div className="top-margin-small">
              <Link className="btn v1" to="/">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  
  )
}

export default ThankYouPage