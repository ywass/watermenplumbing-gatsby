import React from 'react'
import { graphql } from "gatsby"
import Layout from '../../../components/layout'
import ToiletsPage from '../../../components/ToiletsPage/ToiletsPage'
import Seo from '../../../components/seo'
function index() {
  return (
    <Layout>
     <ToiletsPage/>
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
query PageQueryPS9 {
  PageData : prismicPlumbingservices(uid: {eq: "toilets"}) {
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