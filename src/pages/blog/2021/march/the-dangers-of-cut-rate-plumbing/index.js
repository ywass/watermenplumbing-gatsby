import React from 'react'
import { graphql } from "gatsby"
import Seo from "../../../../../components/seo"
import Mar21SecondBlog from '../../../../../components/BlogPages/2021Pages/March2021Pages/Mar21SecondBlog/Mar21SecondBlog'
import Layout from '../../../../../components/layout'
function index() {
  return (
    <Layout>
        <Mar21SecondBlog/>
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
    <Seo title={props.data.PageData.data.seo_title} description={props.data.PageData.data.seo_description} socialImage={socialImage} />
  )
}

export const query = graphql`
query BlogPage {
  PageData : prismicPosts(uid: {eq: "the-dangers-of-cut-rate-plumbing"}) {
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