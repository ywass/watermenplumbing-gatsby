import * as React from 'react'
import { graphql } from 'gatsby'

const ImageOnlySection = ({ slice }) => {
  const { primary } = slice
  const { image } = primary
  return (
      <div className='mx-auto text-center'>
      <img src={image.url} alt={image.alt} />
      </div>
  )
}
export default ImageOnlySection

export const query = graphql`
  fragment blogImageOnlySlice on PrismicPostsDataBodyImagesection {
    id
    slice_type
    primary {
      image {
        url
        alt
      }
    }
  }
`
