import React from 'react'
import { graphql } from "gatsby"
import Seo from "../../../../../components/seo"
import Layout from '../../../../../components/layout'
import Jul20FirstBlog from '../../../../../components/BlogPages/2020Pages/July2020Pages/Jul20FirstBlog/Jul20FirstBlog'
function index() {
  return (
    <Layout>
        <Jul20FirstBlog/>
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
  PageData : prismicPosts(uid: {eq: "common-plumbing-emergencies-to-avoid"}) {
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