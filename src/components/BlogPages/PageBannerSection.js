import React from 'react'
import { graphql } from 'gatsby'

const PageBannerSection = ({ slice }) => {
  const { primary } = slice
  return(
    <div className="text-align center-800 relative vertical-padding side-padding-small bg-box unlike-bg pseudo-before">
    {/* <picture className="img-bg" role="presentation">
      <source
        media="(max-width: 500px)"
        srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        data-src="/cms/thumbnails/00/445x300/images/blog/shutterstock_319418210[1].jpg"
      />
      <img
       
        alt="A couple (man and woman) admiring a 2-story Florida house and asking questions before purchasing"
        src={one22Img}
      />
    </picture> */}
    <header className="no-pad bottom-margin-tiny relative">
      <h1 itemProp="headline">
        Read This Before You Buy a House in Florida
      </h1>
    </header>
    <span className="blog-time-style relative flex-inline-middle-center">
      <time itemProp="datePublished" content="2022-01-21">
        January 21, 2022{" "}
      </time>
    </span>
    <address
      className="title-style-5 title-color-5 relative"
      rel="author"
      itemProp="author"
      itemScope=""
      itemType="http://schema.org/Person"
    >
      By
      <span itemProp="name">Watermen Plumbing</span>
    </address>
  </div>

  )
}

export default PageBannerSection

export const query = graphql`
  fragment blogfeaturedimage on PrismicPostsDataBodyFeaturedImage {
    id
    slice_type
    primary {
                featured_image {
                  url
                  alt
                }
              }
      title {
            text
            richText
          }
          publish_date
          author
    
    
  }
`