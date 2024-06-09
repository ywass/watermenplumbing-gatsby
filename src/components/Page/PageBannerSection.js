import React from 'react'
import { graphql } from 'gatsby'
import PageBannerElement from "../Elements/PageBannerElement"

const PageBannerSection = ({ slice }) => {
  const { primary } = slice
  return <PageBannerElement data={primary}/>
}

export default PageBannerSection

export const query = graphql`
  fragment pageBanner on PrismicPagesDataBodyPageBanner {
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
        gatsbyImageData(layout: FULL_WIDTH, width: 1600)
      }
    }
  }
`