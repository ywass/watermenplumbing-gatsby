import React from "react"
import { graphql } from "gatsby"

const YoutubeVideo = ({ slice }) => {
  const { primary } = slice
  return (
    <section className="!md:pt-16 !pb-10 !pt-10">
      <div className="max-w-7xl mx-auto lg:px-12 px-4">
        <h2>Youtube ID</h2>
      </div>
    </section>
  )
}
export default YoutubeVideo

export const query = graphql`
  fragment waterfilterproductsDataBodyYoutubeVideo on PrismicWaterfilterproductsDataBodyYoutubeVideo {
    id
    slice_type
    primary {
      youtube_video_embed_id
    }
  }
`
