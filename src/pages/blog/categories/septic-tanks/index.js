import React from 'react'
import { graphql } from "gatsby"
import Seo from "../../../../components/seo"
import SpecticTanksPage from '../../../../components/BlogPages/CategoriesPages/SpecticTanksPage/SpecticTanksPage'
import Layout from '../../../../components/layout'
function index() {
  return (
    <Layout>
     <SpecticTanksPage/>
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
  PageData : prismicPosts(uid: {eq: "septic-tanks"}) {
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