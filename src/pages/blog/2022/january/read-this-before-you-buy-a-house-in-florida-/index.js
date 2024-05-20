import React from 'react'
import { graphql } from "gatsby"
import Seo from "../../../../../components/seo"
import Layout from '../../../../../components/layout'
import Jan22FirstBlog from '../../../../../components/BlogPages/2022Pages/January2022Pages/Jan22FirstBlog/Jan22FirstBlog'
function index() {
  return (
    <Layout>
      <Jan22FirstBlog/>
    </Layout>
  )
}

export default index

export const Head = (props) => {
  let socialImage =  '';
  if(props.data.PageData.data.seo_social_image.url){
    const socialImageNew = props.data.PageData.data.seo_social_image.url.split('?');
    socialImage = socialImageNew[0]
  }  
  return(
    <Seo title={props.data.PageData.data.seo_title} description={props.data.PageData.data.seo_description} socialImage={socialImage} />
  )
}

export const query = graphql`
query BlogPage {
  PageData : prismicPosts(uid: {eq: "read-this-before-you-buy-a-house-in-florida-"}) {
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