import React from 'react'
import { Link, graphql } from 'gatsby'
import { PrismicRichText } from '@prismicio/react'

const GallerySection = ({ slice }) => {
    const { items } = slice
    return (
        <section
            className="photo-gallery v2 light-bg bg-box-unlike text-left ui-repeater ui-ajax"
        >
            <div className="main text-align">
                <div className='grid md:grid-cols-3 gap-4'>
                    {items &&
                        items.map((item, index) => {
                            return (
                                <Link key={index}
                                    className="img pad-height-100 opacity-in-item box-shadow border-radius-item h-[450px]"
                                    to={`/photo-gallery/${item?.gallery?.document?.uid}`}
                                >
                                      <img src={item.gallery.document.data.gallery_main_image.url} alt={item.gallery.document.data.gallery_main_image.alt} />
                                    <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
                                        <PrismicRichText
                                            field={item.gallery.document.data.title.richText}
                                            components={{
                                                heading1: ({ children }) => (
                                                    <h1 className="!font2 !text-[1.444rem]">
                                                        {children}
                                                    </h1>
                                                ),
                                            }}
                                        />
                                    </strong>
                                </Link>
                            )
                        }
                        )}
                </div>
            </div>
        </section>
    )

}

export default GallerySection

export const query = graphql`
  fragment pagesDataBodyGallery on PrismicPagesDataBodyGallery {
    id
    slice_type
    items {
        gallery {
          document {
            ... on PrismicGallerypages {
              id
              uid
              data {
                gallery_main_image {
                    url
                    alt
                  gatsbyImageData(layout: CONSTRAINED, width: 600)
                }
                title {
                    text
                    richText
                  }
              }
            }
          }
        }
      }
  }
  `

