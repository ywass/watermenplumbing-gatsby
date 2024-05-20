import React from 'react'
import { graphql } from "gatsby"
import Seo from "../../../../../components/seo"
import Layout from '../../../../../components/layout'
import Sep18FirstBlog from '../../../../../components/BlogPages/2018Pages/September2018Pages/Sep18FirstBlog/Sep18FirstBlog'
function index() {
  return (
    <Layout>
        <Sep18FirstBlog/>
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
  PageData : prismicPosts(uid: {eq: "master-plumber-vs-plumber-in-florida-what-s-the-"}) {
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