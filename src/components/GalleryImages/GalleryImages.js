import React from "react"
import { Link, graphql } from "gatsby"

const GalleryImagesSection = ({ slice }) => {
    const { items } = slice
    return (
        <section
            className="photo-gallery v1 light-bg bg-box-unlike ui-repeater"
            id="PhotoGallerySystemV1Gallery"
        >
            <div className="main text-align">
                <ul className="img-list flex-wrap-grid-auto-size-max-4-block-500 ps-images">
                    {items &&
                        items.map((item, index) => {
                            return (
                                <li key={index}
                                    className="photo fit scaling-img-item"
                                >
                                    <Link
                                        className="img pad-height-100 opacity-in-item box-shadow border-radius-item"
                                        to="javascript:void('Gallery')"
                                    >
                                        <img src={item.image.url} alt={item.image.alt} />
                                        {item.image.alt && (
                                        <strong className="title-style-4 title-color-4 bg-box faded transition-item side-padding-medium vertical-padding-tiny flex-middle-center text-center">
                                        {item.image.alt}
                                        </strong>
                                        )}
                                    </Link>
                                </li>
                            )
                        }
                        )}
                </ul>
            </div>
        </section>       
    )
}

export default GalleryImagesSection

export const query = graphql`
  fragment gallerypagesDataBodyImages on PrismicGallerypagesDataBodyImages {
    id
    slice_type
    items {
      image {
        url
        alt
      }
    }
  }
`
