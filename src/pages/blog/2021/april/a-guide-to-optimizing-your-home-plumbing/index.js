import React from 'react'
import { graphql } from "gatsby"
import Seo from "../../../../../components/seo"
//import Apr21FirstBlog from '../../../../../components/BlogPages/2021Pages/April2021Pages/Apr21FirstBlog/Apr21FirstBlog'
import Layout from '../../../../../components/layout'
function index() {
  return (
    <Layout>
        {/* <Apr21FirstBlog/> */}
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
query BlogPage {
  PageData : prismicPosts(uid: {eq: "a-guide-to-optimizing-your-home-plumbing"}) {
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