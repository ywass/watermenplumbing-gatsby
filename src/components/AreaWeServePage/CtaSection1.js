import React from 'react'
import { Link, graphql } from 'gatsby'
import { PrismicRichText } from '@prismicio/react'

const CtaSection1 = ({ slice }) => {
    const { primary } = slice
    const { content } = primary
    return (
        <div className='max-w-7xl mx-auto lg:px-12 px-4'>
            <div className='bg-[#002bb0] py-8 lg:px-12 px-8'>
                {content?.richText && (
                    <PrismicRichText
                        field={content.richText}
                        components={{
                            paragraph: ({ children }) => (
                                <p className='text-left max-w-full title-style-3 title-color-3 text-white mb-0'>
                                    {children}
                                </p>
                            ),
                        }}
                    />
                )}
            </div>
        </div>
    )
}
export default CtaSection1

export const query = graphql`
  fragment areasweservePageCtaSection1 on PrismicAreasweserveDataBodyCtaSection1 {
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