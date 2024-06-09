import React from 'react'
import { Link, graphql } from 'gatsby'

const CardsSection = ({ slice }) => {
    const { items } = slice
    return (
        <section
            className="!bg-[#ecf9ff] cta v13 light-bg text-left bg-image bg-box-unlike"
        >
            <div className="main">
                <header className="text-align center-800" id="CtaV13Header" />
                <ul
                    className="cta-list flex-grid-center-block-800-auto-size-wrap-max-3-break-1024 close-gap-800 text-align"
                    id="CtaV13List"
                >
                    {items &&
                        items.map((item, index) => {
                            return (
                                <li key={index} className="flex- fit">
                                    <Link
                                        className="bg-box scaling-img-item border-radius-item side-padding-medium vertical-padding-small text-center full"
                                        to={`/${item.button_link.slug}`}
                                    >
                                        <div className="img pad-height- bottom-margin">
                                        <img src={item.image.url} alt={item.image.alt} />
                                        </div>
                                        <div className="info">
                                            <strong className="title-style-2 title-color-2">
                                                {item.title1.text}
                                            </strong>
                                            <span className="btn v1 top-margin-small"> {item.button_text}</span>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })}
                </ul>
            </div>
        </section>

    )
}
export default CardsSection

export const query = graphql`
  fragment pageCardsSection on PrismicPagesDataBodyCardsSection1 {
    id
    slice_type
    items {
        title1 {
          richText
          text
        }
        image {
            url
            alt
          gatsbyImageData(layout: CONSTRAINED, width: 600)
        }
        button_text
        button_link {
          slug
        }
      }
  }
  `