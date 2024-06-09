import React from 'react'
import { graphql } from 'gatsby'
import { PrismicRichText } from '@prismicio/react'

const ContentOnlySection = ({ slice }) => {
    const { primary } = slice
    const { content } = primary
    return (
        <section className='!md:pt-16 !pb-10 !pt-10'>
            <div className="max-w-7xl mx-auto lg:px-12 px-4">
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
                            paragraph: ({ children }) => (
                                <p className='text-left max-w-full'>
                                    {children}
                                </p>
                            ),
                        }}
                    />
                )}
            </div>
        </section>
    )
}
export default ContentOnlySection

export const query = graphql`
  fragment areasweservePageContentonly on PrismicAreasweserveDataBodyContentonlysection {
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