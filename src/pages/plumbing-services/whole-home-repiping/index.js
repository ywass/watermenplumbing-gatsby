import React from 'react'
import { graphql } from "gatsby"
import Layout from '../../../components/layout'
import WholeHomeRepipingPage from '../../../components/WholeHomeRepipingPage/WholeHomeRepipingPage'
import Seo from '../../../components/seo'
function index() {
  return (
   <Layout>
     <WholeHomeRepipingPage/>
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
query PageQueryPS11 {
  PageData : prismicPlumbingservices(uid: {eq: "whole-home-repiping"}) {
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