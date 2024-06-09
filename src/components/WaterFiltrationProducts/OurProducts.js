import React from 'react'
import { Link, graphql } from 'gatsby'
import { PrismicRichText } from '@prismicio/react'

const CtaSection1 = ({ slice }) => {
  const { primary, items } = slice
  const { heading } = primary
  return (
    <div>
      <h2 className='text-[#030f26] text-[1.778rem] my-3'> {heading.text}</h2>
      {items &&
        items.map((item, index) => {
          return (
            <div key={index} className='flex sm:flex-row flex-col gap-6 mb-6 ourproducts'>
              <div className="sm:w-1/5 w-full">
                <img src={item.image.url} alt={item.image.alt} />
              </div>
              <div className='sm:w-4/5 w-full'>
                <PrismicRichText
                  field={item.product_details.richText}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="cf">
                        {children}
                      </p>
                    ),
                  }}
                />
              </div>
            </div>
          )
        })}
    </div>
  )
}
export default CtaSection1

export const query = graphql`
  fragment waterfilterproductsDataBodyOurProducts on PrismicWaterfilterproductsDataBodyOurProducts {
    id
    slice_type
        primary {
            heading {
              text
            }
          }
            items {
        product_details {
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