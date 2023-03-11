import * as React from "react"
import tltBdr2Img from '../images/tlt-bdr2.png'
import Layout from "../components/layout"
import Seo from "../components/seo"
import '../style/error.css'
const NotFoundPage = () => (
  <Layout>
   <main id="MainZone">
  <section
    className="error v1 bg-image bg-box-none text-center light-bg svg-deco-bottom-hill-4 svg-deco-bottom-wave-bottom"
    id="ErrorV1"
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
        data-src="/assets/error/error-v1-bg-mobile.jpg"
      />
      <img
        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        alt=""
        data-src="/assets/error/error-v1-bg.jpg"
      />
    </picture>
    <div className="main">
      <div className="bg-box side-padding-medium vertical-padding info text-align center-800 box-flair border-radius">
        <div className="flair-border">
          <span className="flair-1" />
          <span className="flair-2" />
          <h1 className="title">404</h1>
          <em className="title-color-2 subtitle">Whoopsie Daisy!</em>
          <img src={tltBdr2Img} className="header-flair"/>
          <p className="title-style-5 title-color-5">
            Looks like something went completely wrong!
          </p>
          <div className="top-margin-small">
            <a className="btn v1" href="../../index.html">
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
