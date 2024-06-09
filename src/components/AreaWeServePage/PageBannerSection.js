import React from "react"
import { graphql } from "gatsby"
import PageBannerElement from "../Elements/PageBannerElement"

const PageBannerSection = ({ slice }) => {
  const { primary } = slice
  return <PageBannerElement data={primary}/>
}

export default PageBannerSection

export const query = graphql`
  fragment areasweservePageBanner on PrismicAreasweserveDataBodyPageBanner {
    id
    slice_type
    primary {
      heading {
        text
        richText
      }
      sub_heading {
        richText
        text
      }
      image {
        url
        alt
        gatsbyImageData(width: 1000, layout: CONSTRAINED, formats: WEBP)
      }
    }
  }
`
