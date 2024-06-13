import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { PrismicRichText } from '@prismicio/react'
import tltBdr2Img from "../../images/tlt-bdr2.png";
import ServicesImg from "../../images/services-v9-img.png";

const HomecanWeHelpSection = ({ slice }) => {
    const { primary, items } = slice
    const { content, title1, heading, sub_heading, image, button_text, button_link } = primary
    return (
        <>
            <section
                className="lg:!bg-[#ecf9ff] services v9 light-bg text-center items-overlapped col-60-40 vertical-middle bg-image bg-box-unlike sec_padding"
                id="ServicesV9"
                data-onvisible="show"
            >
                <picture className="img-bg" role="presentation" data-role="picture">
                    <source
                        media="(max-width: 500px)"
                        srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                        data-src="../../images/services-v9-bg-mobile.jpg"
                    />
                    <img
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                        alt=""
                        data-src={ServicesImg}
                    />9
                </picture>
                <div className="main">
                    <div className="flex-spaced-between-block-1024-margined flex-direction align-items item-spacing item-widths">
                        <div className="bg-box side-padding vertical-padding-small box-flair border-radius under-item">
                            <div className="flair-border overlap-padding">
                                <span className="flair-1" />
                                <span className="flair-2" />
                                <header
                                    className="text-align center-800 bottom-margin-tiny no-pad"
                                    id="ServicesV9Header"
                                >
                                    <h4> {heading.text}</h4>
                                    <strong>
                                        {sub_heading.text}
                                    </strong>
                                    <img className="header-flair" src={tltBdr2Img} />
                                </header>
                                <ul
                                    className="services-list flex-wrap-spaced-between-block-800 top-margin-small ui-repeater"
                                    id="ServicesV9Services"
                                >
                                    {items && items.map((item, index) => {
                                        return (
                                            <li key={index} className="half flex-">
                                                <Link
                                                    className="full flex-middle btn-style btn-color-hover full text-left"
                                                    to="/"
                                                >
                                                    <span>{item.title1}</span>
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                                <div id="ServicesV9BtnCon">
                                    <div className="top-margin text-align">
                                        <Link
                                            href={button_link}
                                            className='btn v1'
                                        >
                                            {button_text}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={image.url} alt={image.alt} className='img bg-position pad-height- border-radius box-shadow over-item' />
                    </div>
                </div>
            </section>
        </>
    )
}
export default HomecanWeHelpSection


export const query = graphql`
fragment homecanWeHelpSlice on PrismicHomepageDataBodyHomeHowCanWeHelp {
    id
    items {
      icon
      title1
    }
    slice_type
    primary {
      button_text
      image {
        alt
        url
        gatsbyImageData(layout: CONSTRAINED, width: 600)
      }
      heading {
        text
        richText
      }
      sub_heading {
        richText
        text
      }
    }
  }
  `