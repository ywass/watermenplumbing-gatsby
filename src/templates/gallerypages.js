import React from "react"
import { graphql } from "gatsby"
import { SliceZone } from "@prismicio/react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { components } from "../components/GalleryImages"
import GalleryPageBannerElement from "../components/Elements/GalleryPageBannerElement"

const GalleryPageTemplate = props => {
  if (!props.data) return null
  const { bgImage } = props.data
  const pageData = props.data.PageData
  const page = pageData.data || {}

  const title = page.title.text

  return (
    <Layout>
      <GalleryPageBannerElement title={title} image={bgImage.publicURL}/>
      <SliceZone
        slices={page.body}
        components={components}
        context={pageData}
        defaultComponent={() => null}
      />
    </Layout>
  )
}

export default GalleryPageTemplate

export const Head = props => {
  let socialImage = ""
  if (props?.data?.PageData?.data?.seo_social_image?.url) {
    const socialImageNew =
      props?.data?.PageData?.data?.seo_social_image?.url.split("?")
    socialImage = socialImageNew[0]
  }
  return (
    <Seo
      title={props.data.PageData.data.seo_title}
      description={props.data.PageData.data.seo_description}
      socialImage={socialImage && socialImage}
    />
  )
}

export const query = graphql`
  query GalleryPageQuery($id: String!) {
    bgImage: file(relativePath: {eq: "sub-banner-v1-bg.jpg"}) {
      publicURL
    }
    PageData: prismicGallerypages(id: { eq: $id }) {
      data {
        seo_title
        seo_description
        title{
          text
        }
        body {
          ...gallerypagesDataBodyImages
        }
      }
    }
  }
`
