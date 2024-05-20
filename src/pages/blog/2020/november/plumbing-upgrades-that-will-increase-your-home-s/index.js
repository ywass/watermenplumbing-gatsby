import React from 'react'
import { graphql } from "gatsby"
import Seo from "../../../../../components/seo"
import Layout from '../../../../../components/layout'
import Nov20FirstBlog from '../../../../../components/BlogPages/2020Pages/November2020Pages/Nov20FirstBlog/Nov20FirstBlog'
function index() {
  return (
    <Layout>
        <Nov20FirstBlog/>
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
  PageData : prismicPosts(uid: {eq: "plumbing-upgrades-that-will-increase-your-home-s"}) {
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