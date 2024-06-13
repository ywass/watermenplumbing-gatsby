import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { SliceZone } from "@prismicio/react"
import { components } from "../components/Home"


const IndexPage = (props) => {

  const { data } = props
  if (!props.data) return null
  const AllPosts = props.data.AllPosts
  const AllYears = props.data.AllYears
  const AllMonths = props.data.AllMonths
  const pageData = props.data.PageData
  const page = pageData?.data || {}


  const postByYear = []

  AllYears.edges.map((item)=>{
    postByYear[item.node.data.year] = AllPosts.edges.filter((post)=>{
      return post.node.data.archives_year.document.data.year===item.node.data.year
    })
  })


  return (
    <Layout>
      <div className="!bg-[#ecf9ff]">
      <SliceZone
        slices={page.body}
        components={components}
        context={pageData}
        defaultComponent={() => null}
      />
      </div>
    </Layout>
  )
}


export const Head = (props) => {
  let socialImage =  '';
  if(props?.data?.PageData?.data?.seo_social_image?.url){
    const socialImageNew = props?.data?.PageData?.data?.seo_social_image?.url.split('?');
    socialImage = socialImageNew[0]
  }  
  return(
    <Seo title={props?.data?.PageData?.data?.seo_title} description={props?.data?.PageData?.data?.seo_description} socialImage={socialImage && socialImage} />
  )
}

export default IndexPage

export const query = graphql`
query pageQuery{
  AllMonths : allPrismicArchivesMonth(sort: {data: {month_id: ASC}}) {
    edges {
      node {
        data {
          month
        }
      }
    }
  }
  AllYears : allPrismicArchivesYear(sort: {data: {year: DESC}}) {
    edges {
      node {
        data {
          year
        }
      }
    }
  }
AllPosts : allPrismicPosts {
    edges {
      node {
        uid
        id
        data {
          archives_month {
            document {
              ... on PrismicArchivesMonth {
                id
                data {
                  month
                }
              }
            }
          }
          archives_year {
            document {
              ... on PrismicArchivesYear {
                id
                data {
                  year
                }
              }
            }
          }
        }
      }
    }
  }
PageData: prismicHomepage {
  data {
      seo_title
      seo_description
      seo_social_image {
        url
      }
   body{
    ...homeHeroSlice
    ...homeContentWithFormSlice
    ...homecanWeHelpSlice
    ...homeWhyChooseSlice
    ...home5starReviews
    ...homeOurSpecials
    ...homeClientLogos
  }
}
}
}
`