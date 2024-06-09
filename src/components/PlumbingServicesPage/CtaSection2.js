import React from 'react'
import { Link, graphql } from 'gatsby'
import { PrismicRichText } from '@prismicio/react'

const CtaSection2 = ({ slice }) => {
    const { primary } = slice
    const { content } = primary
    return (
        <div className='ctasection2 text-highlight v2 bg-box bordered side-padding-medium vertical-padding-tiny border-[#cc6461] mb-8'>
                {content?.richText && (
                    <PrismicRichText
                        field={content.richText}
                        components={{
                            paragraph: ({ children }) => (
                                <p className=' mb-0 font-bold text-center'>
                                    {children}
                                </p>
                            ),
                        }}
                    />
                )}
            </div>
    )
}
export default CtaSection2

export const query = graphql`
  fragment plumbingservicesPageDataBodyCtaSection2 on PrismicPlumbingservicepageDataBodyCtaSection2 {
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