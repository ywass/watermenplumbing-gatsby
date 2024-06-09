import React from 'react'
import { graphql } from 'gatsby'
import { PrismicRichText } from '@prismicio/react'

const ContentOnlySection = ({ slice }) => {
    const { primary } = slice
    const { content } = primary
    return (
        <section className='!md:pt-16 !pb-10 !pt-10 service_content'>
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
                            list: ({ children }) => (
                                <ul className='m-0 p-0 pl-5'>
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
        </section>
    )
}
export default ContentOnlySection

export const query = graphql`
  fragment plumbingservicesPageDataBodyContentonlysection on PrismicPlumbingservicepageDataBodyContentonlysection {
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