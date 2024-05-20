import React from 'react'
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import PlumbingServicesPage from '../../components/PlumbingServicesPage/PlumbingServicesPage'
import Seo from '../../components/seo'
function PlumbingServices() {
  return (
    <Layout>
        <PlumbingServicesPage/>
    </Layout>
  )
}

export default PlumbingServices


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
query PageQueryPlumbingServices {
  PageData : prismicPages(uid: {eq: "plumbing-services"}) {
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