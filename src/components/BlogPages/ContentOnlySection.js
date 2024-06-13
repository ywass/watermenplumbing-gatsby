import React from 'react'
import { graphql } from 'gatsby'
import { PrismicRichText } from '@prismicio/react'

const ContentOnlySection = ({ slice }) => {
    const { primary } = slice
    const { content } = primary
    return (
        <>
            {content?.richText && (
                <PrismicRichText
                    field={content.richText}
                    components={{
                        heading2: ({ children }) => (
                            <h2 className="text-left !text-[#033996] md:text-[2.7rem] text-4xl font1 !mb-5">
                                {children}
                            </h2>
                        ),
                        heading3: ({ children }) => (
                            <h3 className="text-left !mb-3">
                                {children}
                            </h3>
                        ),
                        heading4: ({ children }) => (
                            <h4 className="text-left !mb-2">
                                {children}
                            </h4>
                        ),
                        paragraph: ({ children }) => (
                            <p className='text-left max-w-full'>
                                {children}
                            </p>
                        ),
                        list: ({ children }) => (
                            <ul className='m-0 !p-0 mb-6'>
                                {children}
                            </ul>
                        ),
                        listItem: ({ children }) => (
                            <li className='relative pl-6 text-left'>
                                {children}
                            </li>
                        )

                    }}
                />
            )}
        </>
    )
}
export default ContentOnlySection

export const query = graphql`
  fragment blogpageContentonly on PrismicPostsDataBodyContentonlysection {
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