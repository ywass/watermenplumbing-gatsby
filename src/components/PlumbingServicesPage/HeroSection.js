import React from 'react'
import { Link, graphql } from 'gatsby'
import { PrismicRichText } from '@prismicio/react'
import tltBdr2Img from '../../images/tlt-bdr2.png'

const HeroSection = ({ slice }) => {
  const { primary } = slice
  const { heading_tag_line, heading, sub_heading, description, image, button_link, button_text } = primary
  return (
    <>
      <section
        className="mainstage v1s bg-image dark-bg bg-box-none text-center no-padding"
        id="MainstageV1"
        data-onvisible="show"
      >
        <div className='img-bg relative'>
          <img src={image.url} alt={image.alt} className='' />
        </div>
        <div className="main">
          <div className="relative box">
            <div className="bg-box side-padding-medium vertical-padding info text-align center-800 box-flair border-radius">
              <div className="flair-border">
                <span className="flair-1" />
                <span className="flair-2" />
                <em className="title-color-2 subtitle">
                  <PrismicRichText
                    field={heading_tag_line.richText}
                    components={{
                      heading3: ({ children }) => (
                        <h3 className='text-[2.333rem] text-[#ffd545]' id="">
                          {children}
                        </h3>
                      )
                    }}
                  />
                </em>
                <span className="title-font title">
                  <strong className="title-color-1">
                    <PrismicRichText
                      field={heading.richText}
                      components={{
                        heading1: ({ children }) => (
                          <h1 className='text-[6.3rem]' id="">
                            {children}
                          </h1>
                        )
                      }}
                    />
                  </strong>
                </span>
                <em className="title-color-2 subtitle">
                  <PrismicRichText
                    field={sub_heading.richText}
                    components={{
                      heading2: ({ children }) => (
                        <h2 className='text-[2.333rem] text-[#ffd545]' id="">
                          {children}
                        </h2>
                      )
                    }}
                  />
                </em>
                <img src={tltBdr2Img} className="header-flair" />
                <p className="no-bottom-margin description max-w-full">
                  {description}
                </p>
                <div className="top-margin">
                  <ul className="flex-wrap-block-500-margined text-align center-800 close-gap-500">
                    <li className="top-margin-tiny fit">
                      <Link
                        href={button_link}
                        className='full btn v1'
                      >
                        {button_text}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}
export default HeroSection

export const query = graphql`
  fragment PrismicPlumbingservicepageDataBodyPlumbingserviceherosection on PrismicPlumbingservicepageDataBodyPlumbingserviceherosection {
     id
      slice_type
      primary {
        button_text
        description
        image {
          alt
          url
        }         
        button_link
        heading_tag_line {
          richText
          text
        }
        heading {
              richText
              text
            }
            sub_heading {
              richText
              text
            }
      }
    }
 `