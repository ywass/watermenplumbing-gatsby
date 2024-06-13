import React from 'react'
import { Link, graphql } from 'gatsby'
import { PrismicRichText } from '@prismicio/react'
import tltBdrImg from "../../images/tlt-bdr.png";
import KnowledgeIcon from "../../images/svg/knowledge.svg";
import FilterIcon from "../../images/svg/filter.svg";

const HeroSection = ({ slice }) => {
    const { primary } = slice
    const { content, heading, sub_heading, image, button_text, button_link } = primary
    return (
        <section
            className="mainstage v3s dark-bg bg-image no-padding vertical-middle text-left bg-box-none"
            id="CustomMainstageV3"
            data-onvisible="show"
        >
            <div className='img-bg bg-position lg:block hidden'>
              <img src={image.url} alt={image.alt}  />
              </div>           
            <div className="box flex-between-block-1024 flex-direction align-items">
                <div className="info text-align half vertical-padding side-padding center-500 bg-box box-flair">
                    <div className="flair-border">                     
                        <span className="title-font title">
                            <strong className="title-color-1">                           
                                {heading.text}
                            </strong>
                        </span>
                        <em className="title-color-2 subtitle">                       
                            {sub_heading.text}
                        </em>
                        <img className="header-flair" src={tltBdrImg} />
                        {content?.richText && (
                            <PrismicRichText
                                field={content.richText}
                                components={{
                                    paragraph: ({ children }) => (
                                        <p className='no-bottom-margin description'>
                                            {children}
                                        </p>
                                    )
                                }}
                            />
                        )}
                        <div className="top-margin">
                            <Link
                                href={button_link}
                                className='btn v1'
                            >
                                {button_text}
                            </Link>
                        </div>
                    </div>
                </div>
                <ul className="cta-list flex-grid-wrap-block-500 fourth">
                    <li className="third" data-item="i">
                        <Link
                            className="flex-middle-block-1024 center-1024 btn-colors"
                            to="/plumbing-services"
                        >
                            <KnowledgeIcon />
                            <span className="title-font">Plumbing Services</span>
                        </Link>
                    </li>
                    <li className="third" data-item="i">
                        <Link
                            className="flex-middle-block-1024 center-1024 btn-colors"
                            to="/plumbing-services/water-filtration"
                        >
                             <FilterIcon />
                            <span className="title-font">Water Filtration</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default HeroSection


export const query = graphql`
fragment homeHeroSlice on PrismicHomepageDataBodyHomeHeroSection {
    id
    slice_type
    primary {
        button_text
        content {
            richText
          }
        heading {
            richText
          text
        }
        sub_heading {
          text
        }
        image {
            url
            alt
            gatsbyImageData(layout: FULL_WIDTH, width: 1600)
          }
      }
  }
  `