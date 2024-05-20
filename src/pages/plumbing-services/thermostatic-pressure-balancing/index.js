import React from 'react'
import { graphql } from "gatsby"
import Layout from '../../../components/layout'
import ThermoPressurePage from '../../../components/ThermoPressurePage/ThermoPressurePage'
import Seo from '../../../components/seo'
function index() {
  return (
    <Layout>
        <ThermoPressurePage/>
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
query PageQueryPS8 {
  PageData : prismicPlumbingservices(uid: {eq: "thermostatic-pressure-balancing"}) {
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