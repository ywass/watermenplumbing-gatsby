import React from "react"
import { PrismicRichText } from "@prismicio/react"
import tltBdrImg from "../../images/tlt-bdr.png"

const GalleryPageBannerElement = ({ title, image }) => {
  return (
    <section
      style={{ "--image-url": `url(${image})` }}
      className="sub-banner bg-cover bg-no-repeat bg-center v1 bg-image dark-bg bg-box-none text-left bg-[image:var(--image-url)]"
      id="SubBannerV1"
      data-onvisible="show"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div
          className="bg-box side-padding-medium vertical-padding info text-align center-500 box-flair"
          id="SubBannerV1Info"
        >
          <div className="flair-border">
            <span className="title-font title-color-1 mb-2">
              <h1 className="">{title}</h1>
            </span>

            <img className="header-flair" src={tltBdrImg} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GalleryPageBannerElement