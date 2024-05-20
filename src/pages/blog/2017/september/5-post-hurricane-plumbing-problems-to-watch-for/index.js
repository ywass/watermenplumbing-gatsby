import React from 'react'
import { graphql } from "gatsby"
import Seo from "../../../../../components/seo"
import Layout from '../../../../../components/layout'
import Sep17FirstBlog from '../../../../../components/BlogPages/2017Pages/Sep17Pages/Sep17FirstBlog/Sep17FirstBlog'
function index() {
  return (
    <Layout>
        <Sep17FirstBlog/>
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
  PageData : prismicPosts(uid: {eq: "5-post-hurricane-plumbing-problems-to-watch-for"}) {
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