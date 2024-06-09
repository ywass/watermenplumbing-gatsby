import React from "react"
import { graphql, Link } from "gatsby"
import { PrismicRichText } from "@prismicio/react"

const ContentImageSection = ({ slice }) => {
  const { primary } = slice
  const { content, image } = primary
  return (
    <>
      <section className="md:py-24 py-10">
        <div className="max-w-7xl mx-auto lg:px-12 px-4 grid grid-cols-2 gap-10">
          <div>
            {content?.richText && (
              <PrismicRichText
                field={content.richText}
                components={{
                  heading2: ({ children }) => (
                    <h2 className="text-left !text-[#033996] text-[2.7rem] font1 !mb-5">
                      {children}
                    </h2>
                  ),
                  heading3: ({ children }) => (
                    <h3 className="text-left !mb-2">{children}</h3>
                  ),
                  paragraph: ({ children }) => (
                    <p className="text-left max-w-full">{children}</p>
                  ),
                }}
              />
            )}
          </div>
          <img src={image.url} alt={image.alt} className='img bg-position pad-height- border-radius box-shadow over-item' />
        </div>
      </section>
    </>
  )
}
export default ContentImageSection

export const query = graphql`
  fragment plumbingservicesPageDataBodyContentimagesection on PrismicPlumbingservicepageDataBodyContentimagesection {
    id
      primary {
        button_text
        content {
          richText
          text
        }
        image {
          url
          alt
        }
      }
      slice_type
  }
`

