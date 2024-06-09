import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby'
import { SliceZone } from "@prismicio/react"
import { components } from "../components/Page"


const PageTemplate = (props) => {
  const { data } = props
  if (!props.data) return null
  const pageData = props.data.PageData
  const page = pageData.data || {}
  return (
    <Layout>
      <SliceZone
        slices={page.body}
        components={components}
        context={pageData}
        defaultComponent={() => null}
      />
    </Layout>
  )
}


export default PageTemplate

export const Head = (props) => {
  let socialImage =  '';
  if(props?.data?.PageData?.data?.seo_social_image?.url){
    const socialImageNew = props?.data?.PageData?.data?.seo_social_image?.url.split('?');
    socialImage = socialImageNew[0]
  }  
  return(
    <Seo title={props.data.PageData.data.seo_title} description={props.data.PageData.data.seo_description} socialImage={socialImage && socialImage} />
  )
}

export const query = graphql` 
query pageTemplateQuery($id: String!) {
  PageData: prismicPages(id: {eq: $id}) {
        data {
          seo_title
          seo_description
          body{
            ...pageBanner
            ...pageContentonly
            ...pageCtaSection1
            ...pageCustomerreviewSection
            ...pageCardsSection
            ...pageChooseusSection
            ...pagesDataBodyGallery
            ...pagesDataBodyAllreviews
            ...pagesDataBodyCoupons
            ...pagesDataBodyContact
            ...pagesDataBodyAwards

          }
        }
  }
}

`



