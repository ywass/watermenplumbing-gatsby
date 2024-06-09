import React from "react"
import { graphql } from "gatsby"
import { PrismicRichText } from "@prismicio/react"

const ContentImageSection = ({ slice }) => {
  const { primary } = slice
  const { content, image } = primary
  return (
    <div className='flex sm:flex-row flex-col gap-6 contentimage'>
      <div className="sm:w-4/5 w-full">
        <PrismicRichText
          field={content.richText}
          components={{
            paragraph: ({ children }) => (
              <p className="text-left max-w-full">{children}</p>
            ),
          }}
        />
      </div>
      <div className="sm:w-1/5 w-full">
        <img src={image.url} alt={image.alt} />
      </div>
    </div>
  )
}
export default ContentImageSection

export const query = graphql`
  fragment waterfilterproductsDataBodyContentimagesection on PrismicWaterfilterproductsDataBodyContentimagesection {
    id
    slice_type
    primary {
      content {
        text
        richText
      }
      image {
        url
        alt
      }
    }
  }
`
