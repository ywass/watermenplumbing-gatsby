import React from "react"
import { graphql, Link } from "gatsby"
import { SliceZone } from "@prismicio/react"
import { components } from "../components/WaterFiltrationProducts"
import PageBannerSection from "../components/AreaWeServePage/PageBannerSection"
import ServicesSidebar from '../components/Elements/ServicesSidebar'
import letUsImg from '../images/Let-us.jpg'
import stayLoopImg from '../images/Stay-in-loop.jpg'
import saveServiceImg from '../images/Save-on-service.jpg'
import PanelGroupImg from "../images/values-v9-bg.jpg"
import valuesV9Img from '../images/values-v9-img.png'
import tltBdr2Img from '../images/tlt-bdr2.png'

import Layout from "../components/layout"
import Seo from "../components/seo"

const WaterFilterProductsPage = props => {

  const { services, children } = props.pageContext

  if (!props.data) return null
  const pageData = props.data.PageData
  const page = pageData?.data || {}

  const { PageData } = props.data


  const PageBanner = page?.body?.filter(item => {
    return item.slice_type === "page_banner"
  })[0]

  const PageBody = page?.body?.filter(item => {
    return item.slice_type !== "page_banner"
  })
  return (
    <Layout>
      {PageBanner && <PageBannerSection slice={PageBanner} />}
      <div className="max-w-7xl mx-auto px-4 md:py-20 py-12">
        <div className="flex gap-8 lg:flex-row flex-col water_services">
          <div className="lg:w-1/3 w-full">
          <ServicesSidebar> 
          <div className='serv_links bg-[#033996] py-4 mb-8'>
            <h2 className="py-5 px-8 text-[#ffc51a] lg:text-[2.7rem] lg:leading-tight text-3xl font1">{PageData?.data?.title?.text}</h2>
            <ul>
              {services &&
                services.map((item, index) => {
                  const slug = children
                    ? `${props.path}${item.node.uid}`
                    : `${props.path}`
                  return (
                    <li key={index}>
                      <Link to={`${slug}`}>{item.node.data.title.text}</Link>
                    </li>
                  )
                })}
            </ul>
            </div>
            </ServicesSidebar>
          </div>
          <div className="lg:w-2/3 w-full page_content">
            <SliceZone
              slices={PageBody}
              components={components}
              context={pageData}
              defaultComponent={() => null}
            />
          </div>
        </div>
      </div>
      <section
      className="cta v13 !bg-[#ecf9ff] light-bg text-left bg-image bg-box-unlike"
      id="CtaV13"
      data-onvisible="show"
    >    
      <div className="main">
        <header className="text-align center-800" id="CtaV13Header" />
        <ul
          className="cta-list flex-grid-center-block-800-auto-size-wrap-max-3-break-1024 close-gap-800 text-align"
          id="CtaV13List"
        >
          <li className="flex- fit" data-item="i">
            <Link
              className="bg-box scaling-img-item border-radius-item side-padding-medium vertical-padding-small text-center full"
              to="/photo-gallery"
            >
              <div className="img pad-height- bottom-margin">
                 <img
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                  style={{ backgroundImage: `url(${letUsImg})` }}
                  alt=""
                  role="presentation"
                /> 
              </div>
              <div className="info">
                <strong className="title-style-2 title-color-2">
                  See Us In Action
                </strong>
                <span className="btn v1 top-margin-small">View Our Gallery</span>
              </div>
            </Link>
          </li>
          <li className="flex- fit" data-item="i">
            <Link
              className="bg-box scaling-img-item border-radius-item side-padding-medium vertical-padding-small text-center full"
              to="/blog"
            >
              <div className="img pad-height- bottom-margin">
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                  style={{
                    backgroundImage: `url(${stayLoopImg})`
                  }}
                  alt=""
                  role="presentation"
                />
              </div>
              <div className="info">
                <strong className="title-style-2 title-color-2">
                  Stay In The Loop
                </strong>
                <span className="btn v1 top-margin-small">Read Our bLogs</span>
              </div>
            </Link>
          </li>
          <li className="flex- fit" data-item="i">
            <Link
              className="bg-box scaling-img-item border-radius-item side-padding-medium vertical-padding-small text-center full"
              to="/coupons"
            >
              <div className="img pad-height- bottom-margin">
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                  style={{
                    backgroundImage: `url(${saveServiceImg})`
                  }}
                  alt=""
                  role="presentation"
                />
              </div>
              <div className="info">
                <strong className="title-style-2 title-color-2">
                  Save On Services
                </strong>
                <span className="btn v1 top-margin-small">View our Offers</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>

    <section
      className="values v9 light-bg text-center bg-box-none vertical-top bg-image"
      id="ValuesV9"
      data-onvisible="show"
    >
      <Link name="valuesAnchor" />
      <picture className="img-bg" role="presentation" data-role="picture">
        <source
          media="(max-width: 500px)"
          srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          data-src="../../assets/values/values-v9-bg-mobile.jpg"
        />
        <img
         
          alt=""
          title=""
          src={PanelGroupImg}
        />
      </picture>
      <div className="main relative">
        <header className="text-align center-500" id="ValuesV9Header">
          <h4>Why Customers Choose Us?</h4>
          <strong>We Believe That Only the Best Is Good Enough, For You!</strong>
          <img src={tltBdr2Img} className="header-flair"/>
        </header>
        <div className="relative vertical-padding">
          <ul
            className="values-list flex-wrap-block-1280-spaced-between ui-repeater"
            id="ValuesV9List"
          >
            <li
              className="flex-block-500 align-items center-500 top-margin-large "
              data-item="i"
              data-key={15797}
            >
              <span className="ico-con">
                <svg
                  viewBox="0 0 24 24"
                  className="values-icon"
                  role="presentation"
                >
                  <use data-href="../../cms/svg/site/ykmkv4_n6ok.24.svg#saftey" />
                </svg>
              </span>
              <div className="info">
                <strong className="title-style-4 title-color-4">
                  Customer &amp; Employee Safety First
                </strong>
                <p>
                  We truly care about the health and safety of our staff and
                  customers. We wear full PPE gear to ensure everyone is
                  protected.
                </p>
              </div>
            </li>
            <li
              className="flex-block-500 align-items center-500 top-margin-large "
              data-item="i"
              data-key={15796}
            >
              <span className="ico-con">
                <svg
                  viewBox="0 0 24 24"
                  className="values-icon"
                  role="presentation"
                >
                  <use data-href="../../cms/svg/site/ykmkv4_n6ok.24.svg#knowledge" />
                </svg>
              </span>
              <div className="info">
                <strong className="title-style-4 title-color-4">
                  Knowledgeable &amp; Skilled Technicians
                </strong>
                <p />
                <p>
                  Our technicians undergo weekly continuing education classes and
                  are tested weekly to ensure quality control, and customer
                  satisfaction.
                </p>
                <p />
              </div>
            </li>
            <li
              className="flex-block-500 align-items center-500 top-margin-large "
              data-item="i"
              data-key={15795}
            >
              <span className="ico-con">
                <svg
                  viewBox="0 0 24 24"
                  className="values-icon"
                  role="presentation"
                >
                  <use data-href="../../cms/svg/site/ykmkv4_n6ok.24.svg#honest" />
                </svg>
              </span>
              <div className="info">
                <strong className="title-style-4 title-color-4">
                  Reliable Honest Company
                </strong>
                <p>
                  We provide peace of mind and stand behind our work with a 1-year
                  warranty.
                </p>
              </div>
            </li>
            <li
              className="flex-block-500 align-items center-500 top-margin-large "
              data-item="i"
              data-key={15794}
            >
              <span className="ico-con">
                <svg
                  viewBox="0 0 24 24"
                  className="values-icon"
                  role="presentation"
                >
                  <use data-href="../../cms/svg/site/ykmkv4_n6ok.24.svg#truck" />
                </svg>
              </span>
              <div className="info">
                <strong className="title-style-4 title-color-4">
                  Fully Stocked Trucks
                </strong>
                <p>
                  With the latest plumbing technology at our disposal, our team is
                  prepared to handle your job in one trip.
                </p>
              </div>
            </li>
          </ul>
          <picture
            className="img bg-position"
            role="presentation"
            data-role="picture"
          >
            <source
              media="(max-width: 500px)"
              srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              data-src="../../assets/values/values-v9-img-mobile.png"
            />
            <img
             
              alt=""
              src={valuesV9Img}
            />
          </picture>
        </div>
      </div>
    </section>
    
    </Layout>
  )
}

export default WaterFilterProductsPage

export const Head = props => {
  let socialImage = ""
  if (props?.data?.PageData?.data?.seo_social_image?.url) {
    const socialImageNew =
      props?.data?.PageData?.data?.seo_social_image?.url.split("?")
    socialImage = socialImageNew[0]
  }
  return (
    <Seo
      title={props?.data?.PageData?.data?.seo_title}
      description={props?.data?.PageData?.data?.seo_description}
      socialImage={socialImage && socialImage}
    />
  )
}

export const query = graphql`
  query waterFilterProductsPageQuery($id: String!) {
    PageData: prismicWaterfilterproducts(id: { eq: $id }) {
      data {
        seo_title
        seo_description
        seo_social_image {
          url
        }
        title {
          text
        }
        body {
          ...waterfilterproductsDataBodyContentonlysection
          ...waterfilterproductsDataBodyCtaSection2
          ...waterfilterproductsDataBodyPageBanner
          ...waterfilterproductsDataBodyOurProducts
          ...waterfilterproductsDataBodyContentimagesection
          ...waterfilterproductsDataBodyButtonsSection
          ...waterfilterproductsDataBodyYoutubeVideo
          ...waterfilterproductsDataBodyContentonlysection
          ...waterfilterproductsDataBodyCtaSection1
        }
      }
    }
  }
`