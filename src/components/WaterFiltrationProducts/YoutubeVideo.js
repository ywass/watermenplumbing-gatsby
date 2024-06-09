import React from "react"
import { graphql } from "gatsby"

const YoutubeVideo = ({ slice }) => {
  const { primary } = slice
  const { youtube_video_embed_id } = primary
  return (
    <div className='video mb-6'>
    <iframe width="560" height="315" 
    src={youtube_video_embed_id}
     title="YouTube video player" frameborder="0" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
     referrerpolicy="strict-origin-when-cross-origin" 
     allowfullscreen></iframe>
</div>
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
