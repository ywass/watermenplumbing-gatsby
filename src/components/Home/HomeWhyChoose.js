import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { PrismicRichText } from '@prismicio/react'
import tltBdrImg from "../../images/tlt-bdr.png";
import tltBdr2Img from "../../images/tlt-bdr2.png";

const WhyChooseSection = ({ slice }) => {
  const { primary, items } = slice
  const { content, home_deserves_heading, home_deserves_description, why_choose_heading, why_choose_sub_heading, image, button_text, button_link } = primary
  return (
    <>
      <section
        className="!bg-[#ecf9ff] values v4 alt light-bg bg-box-unlike large-padding vertical-middle col-50-50 items-spaced text-left bg-image flow-reverse"
        id="ValuesV4Alt"
        data-onvisible="show"
      >
        {/* <GatsbyImage
                image={getImage(image)}
                alt={'Watermen Plumbing'}
                className='img-bg'
            />  */}
        {/* <picture className="img-bg" role="presentation" data-role="picture">
              <source
                media="(max-width: 500px)"
                srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                data-src="../../images/values-v4-alt-bg-mobile.jpg"
              />
               
            <img alt="" src={Values2Img} /> 
            </picture> */}

        <div className="main">
          <div className="flex-margined-auto-responsive-block-1024 item-spacing item-widths align-items flex-direction">
            <div>
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
                className="values-list ui-repeater" id="ValuesV4AltList"
              >               
                {items && items.map((item, index) => {
                  return (
                    <li key={index} className="flex-top-block-500 center-500 auto side-padding-small top-margin-small">
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
              <img src={image.url} alt={image.alt} className='img pad-height- bottom-margin-negative bg-position box-shadow border-radius' />
              {/* <GatsbyImage
                image={getImage(image)}
                alt={'Watermen Plumbing'}
                className='img pad-height- bottom-margin-negative bg-position box-shadow border-radius'
              /> */}
             
              <div className="relative top-margin-negative side-padding-medium">
                <div
                  className="bg-box text-center box-flair border-radius"
                  id="ValuesV4AltCta"
                >
                  <div className="flair-border">
                    <span className="flair-1" />
                    <span className="flair-2" />
                    <div className="side-padding-medium vertical-padding">
                      <strong className="title-style-1 title-color-1">
                        {home_deserves_heading.text}
                      </strong>

                      <img className="header-flair" src={tltBdr2Img} />

                      {home_deserves_description}
                    
                      <div className="text-center top-margin">
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
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
export default WhyChooseSection


export const query = graphql`
fragment homeWhyChooseSlice on PrismicHomepageDataBodyHomeWhyChoose {
    id
    items {
      description
      icon
      title1
    }
    primary {
      button_text
      home_deserves_description
      home_deserves_heading {
        richText
        text
      }
      image {
        url
        alt
        gatsbyImageData(layout: CONSTRAINED, width: 600)
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