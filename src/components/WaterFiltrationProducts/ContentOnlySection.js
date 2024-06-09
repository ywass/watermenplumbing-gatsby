import React from 'react'
import { graphql } from 'gatsby'
import { PrismicRichText } from '@prismicio/react'

const ContentOnlySection = ({ slice }) => {
    const { primary } = slice
    const { content } = primary
    return (
        <div className='product_content'>
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
                                <h3 className="text-left !mb-2">
                                    {children}
                                </h3>
                            ),
                            heading4: ({ children }) => (
                              <h4 className="text-left !mb-4 text-[#030f26] text-[1.44rem]">
                                  {children}
                              </h4>
                          ),
                            paragraph: ({ children }) => (
                                <p className='text-left max-w-full'>
                                    {children}
                                </p>
                            ),
                            list: ({ children }) => (
                                <ul className='m-0 p-0 pl-5 mb-6'>
                                  {children}
                                </ul>
                              ),
                              listItem: ({ children }) => (
                                <li className='relative pl-6'>
                                  {children}
                                </li>
                              )
                        }}
                    />
                )}
        </div>
    )
}
export default ContentOnlySection

export const query = graphql`
  fragment waterfilterproductsDataBodyContentonlysection on PrismicWaterfilterproductsDataBodyContentonlysection {
    id
    slice_type
    primary {
        content {
          text
          richText
        }
      }
  }
`