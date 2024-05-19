import React from 'react'
import { graphql } from "gatsby"
import Layout from '../../../../../../components/layout'
import Seo from '../../../../../../components/seo'
import FirstWaterSoftProductPage from '../../../../../../components/WaterFilterationProductsPage/WaterSoftProductPage/FirstWaterSoftProductPage/FirstWaterSoftProductPage'
function index() {
  return (
    <Layout>
        <FirstWaterSoftProductPage/>
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
query PageQueryPS225 {
  PageData : prismicPlumbingservices(uid: {eq: "flow-tech-dual-function-softener-filter"}) {
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