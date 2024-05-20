import React from 'react'
import { graphql } from "gatsby"
import AreaWeServePage from '../../../components/AreaWeServePage/AreaWeServePage'
import Layout from '../../../components/layout'
import Seo from '../../../components/seo'

function index() {
  return (
    <Layout>
        <AreaWeServePage/>
    </Layout>
  )
}

export default index


export const Head = (props) => {
  let socialImage =  '';
  if(props?.data?.PageData?.data?.seo_social_image?.url){
    const socialImageNew = props?.data?.PageData?.data?.seo_social_image?.url.split('?');
    socialImage = socialImageNew[0]
  }  
  return(
    <Seo title={props.data.PageData.data.seo_title} description={props.data.PageData.data.seo_description} socialImage={socialImage && socialImage} />
  )
}

export const query = graphql`
query PageQueryAreas {
  PageData : prismicPages(uid: {eq: "areas-we-serve"}) {
    data {
      seo_title
      seo_description
      seo_social_image {
        url
      }
    }
  }
}
`