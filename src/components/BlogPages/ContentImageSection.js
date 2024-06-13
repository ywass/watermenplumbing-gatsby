import * as React from 'react'
import { graphql } from 'gatsby'
import { PrismicRichText } from '@prismicio/react'

const ContentImageSection = ({ slice }) => {
  const { primary } = slice
  const { content, image, image_alignment } = primary

  return (
    <div className='w-full'>
      <div
        className={`w-full blogcontentimage mx-auto lg:flex lg:gap-10 gap-4 lg:justify-stretch justify-center items-center ${image_alignment ? 'flex-row-reverse' : 'flex-row'
          }`}
      >
        <div className='basis-1 grow '>
          <PrismicRichText
            field={content.richText}
            components={{
              heading2: ({ children }) => (
                <h2 className="text-left !text-[#033996] md:text-[2.7rem] text-4xl font1 !mb-5">
                  {children}
                </h2>
              ),
              heading3: ({ children }) => (
                <h3 className="text-left !mb-2">
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
        </div>
        <div className='basis-1 grow contentimage'>
          {image && (
            <img
              className=''
              src={image.url}
              alt={image.alt}
            />
          )}
        </div>
      </div>
    </div>
  )
}
export default ContentImageSection

export const query = graphql`
  fragment blogContentImageSlice on PrismicPostsDataBodyContentimagesection {
    id
    slice_type
    primary {
    image_alignment
        content {
          richText
          text
        }
        image {
          alt
          url
        }
    }
  }
`
