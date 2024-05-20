import React from 'react'
import { graphql } from "gatsby"
import Seo from "../../../../../components/seo"
import Jun21FirstBlog from '../../../../../components/BlogPages/2021Pages/June2021Pages/Jun21FirstBlog/Jun21FirstBlog'
import Layout from '../../../../../components/layout'
function index() {
  return (
    <Layout>
        <Jun21FirstBlog/>
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
  PageData : prismicPosts(uid: {eq: "5-maintenance-tips-to-avoid-plumbing-headaches"}) {
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