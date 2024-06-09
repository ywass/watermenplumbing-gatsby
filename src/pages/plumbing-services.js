import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { SliceZone } from "@prismicio/react"
import { components } from "../components/PlumbingServicesPage"
import ServicesForm from '../ReuseComponents/AsideForm/ServicesForm'

const PlumbingServices = (props) => {
  const { data } = props
  if (!props.data) return null
  const pageData = props.data.PageData
  const page = pageData.data || {}

  return (
    <Layout>
      <div className="!bg-[#ecf9ff]">
        <SliceZone
          slices={page.body}
          components={components}
          context={pageData}
          defaultComponent={() => null}
        />

        <ServicesForm />
      </div>
    </Layout>
  )
}

export default PlumbingServices


export const Head = (props) => {
  let socialImage = '';
  if (props?.data?.PageData?.data?.seo_social_image?.url) {
    const socialImageNew = props?.data?.PageData?.data?.seo_social_image?.url.split('?');
    socialImage = socialImageNew[0]
  }
  return (
    <Seo title={props.data.PageData.data.seo_title} description={props.data.PageData.data.seo_description} socialImage={socialImage && socialImage} />
  )
}

export const query = graphql`
query PageQueryPlumbingServicePage {
  PageData : prismicPlumbingservicepage {
    data {
      seo_title
      seo_description
      seo_social_image {
        url
      }
      body{
        ...PrismicPlumbingservicepageDataBodyPlumbingserviceherosection        
        ...plumbingservicesPageDataBodyHomeWhyChoose
        ...plumbingservicesPageDataBodyContentonlysection
        ...plumbingservicesPageDataBodyContentimagesection
        ...plumbingservicesPageDataBodyHomeHowCanWeHelp
        ...plumbingservicesPageDataBodyCtaSection1
        ...plumbingservicesPageDataBodyCtaSection2
      }
    }
  }
}
`