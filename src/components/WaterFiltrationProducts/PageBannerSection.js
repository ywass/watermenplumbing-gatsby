import React from "react"
import { graphql } from "gatsby"
import { PrismicRichText } from "@prismicio/react"
import tltBdrImg from "../../images/tlt-bdr.png"
import PageBannerElement from "../Elements/PageBannerElement"

const PageBannerSection = ({ slice }) => {
  const { primary } = slice
  return <PageBannerElement data={primary}/>
}

export default PageBannerSection

export const query = graphql`
  fragment waterfilterproductsDataBodyPageBanner on PrismicWaterfilterproductsDataBodyPageBanner {
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
