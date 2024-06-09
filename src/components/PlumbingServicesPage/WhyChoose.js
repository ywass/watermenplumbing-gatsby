import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { PrismicRichText } from '@prismicio/react'
import tltBdrImg from "../../images/tlt-bdr.png";
import tltBdr2Img from "../../images/tlt-bdr2.png";

const WhyChoosePSection = ({ slice }) => {
  const { primary, items } = slice
  const { why_choose_heading, why_choose_sub_heading, image } = primary
  return (
    <>
      <section
        className="!bg-[#ecf9ff] values v4 alt light-bg bg-box-unlike large-padding vertical-middle col-50-50 items-spaced text-left bg-image flow-reverse"
        id="ValuesV4Alt"
        data-onvisible="show"
      >

        <div className="main">
          <div className="grid grid-cols-3 gap-10">
            <img src={image.url} alt={image.alt} className='img my-auto bg-position pad-height- border-radius box-shadow over-item' />
            <div className='md:col-span-2'>
              <header
                className="text-align center-500"
                id="ValuesV4AltHeader"
              >
                <PrismicRichText
                  field={why_choose_heading.richText}
                  components={{
                    heading2: ({ children }) => (
                      <h2 className='' id="">
                        {children}
                      </h2>
                    )
                  }}
                />
                <strong>
                  <PrismicRichText
                    field={why_choose_sub_heading.richText}
                    components={{
                      heading2: ({ children }) => (
                        <h2 className='mb-4' id="">
                          {children}
                        </h2>
                      )
                    }}
                  />
                </strong>
                <img className="header-flair" src={tltBdrImg} />
              </header>

              <ul
                className="values-list ui-repeater grid md:grid-cols-2 gap-6 items-center" id="ValuesV4AltList"
              >
                {items && items.map((item, index) => {
                  return (
                    <li key={index} className="flex-column-center px-10 center-800 auto side-padding-small vertical-padding-tiny bg-box border-radius-item">
                      <span className="ico-con">
                        22
                      </span>
                      <div className="info">
                        <strong className="title-style-4 title-color-4">
                          {item.title1}
                        </strong>
                        <p>{item.description}</p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="relative flex-column-end">
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
export default WhyChoosePSection


export const query = graphql`
fragment plumbingservicesPageDataBodyHomeWhyChoose on PrismicPlumbingservicepageDataBodyHomeWhyChoose {
    id
    items {
      description
      icon
      title1
    }
    primary {
      image {
        url
        alt
      }
      why_choose_heading {
        richText
        text
      }
      why_choose_sub_heading {
        richText
        text
      }
    }
    slice_type
  }
  `