import React from 'react'
import { graphql } from "gatsby"
import Layout from '../../../../../../components/layout'
import Seo from '../../../../../../components/seo'
import ThirdWholeHouseProductPage from '../../../../../../components/WaterFilterationProductsPage/WholeHouseFiltrationProductPage/ThirdWholeHouseProductPage/ThirdWholeHouseProductPage'
function index() {
  return (
    <Layout>
        <ThirdWholeHouseProductPage/>
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
query PageQueryPS226 {
  PageData : prismicPlumbingservices(uid: {eq: "flow-tech-pure-cx-carbon-whole-house-w"}) {
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