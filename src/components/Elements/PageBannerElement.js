import React from "react"
import { PrismicRichText } from "@prismicio/react"
import tltBdrImg from "../../images/tlt-bdr.png"

const PageBannerElement = ({ data }) => {
  const { heading, sub_heading, image } = data

  const bgImage = image.url ? image.url : image.url
  return (
    <section
      style={{'--image-url': `url(${bgImage})`}}
      className="sub-banner bg-cover bg-no-repeat bg-center v1 bg-image dark-bg bg-box-none text-left bg-[image:var(--image-url)]"
      id="SubBannerV1"
      data-onvisible="show"
    >
      <div   className='max-w-7xl mx-auto px-4' >
        <div
          className="bg-box side-padding-medium vertical-padding info text-align center-500 box-flair"
          id="SubBannerV1Info"
        >
          <div className="flair-border">
            <span className="title-font title-color-1 mb-2">
              {heading.richText && (
                  <strong>
                    <PrismicRichText
                      field={heading.richText}
                      components={{
                        heading1: ({ children }) => (
                          <h1 className="">
                            {children}
                          </h1>
                        ),
      
                      }}
                    />
                  </strong>
              )}            
            </span>
            {sub_heading.richText && (
                <PrismicRichText
                  field={sub_heading.richText}
                  components={{
                    heading3: ({ children }) => (
                      <h3 className="title-color-2 subtitle">
                        {children}
                      </h3>
                    ),

                  }}
                />
            )}
            
            <img className="header-flair" src={tltBdrImg}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageBannerElement