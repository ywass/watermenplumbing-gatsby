import React from 'react'
import { graphql, Link } from 'gatsby'
import { SliceZone } from "@prismicio/react"
import { components } from "../components/Page"
import PageBannerSection from "../components/AreaWeServePage/PageBannerSection"

import Layout from '../components/layout'
import Seo from '../components/seo'
import ServicesSidebar from '../components/Elements/ServicesSidebar'

const AreasWeServePage = (props)=>{
  const { services } = props.pageContext 

  if (!props.data) return null
  const pageData = props.data.PageData
  const page = pageData.data || {}
  const { PageData } = props.data

  const PageBanner = page.body.filter((item)=>{
    return item.slice_type==='page_banner'
  })[0]

  const PageBody = page.body.filter((item)=>{
    return item.slice_type!=='page_banner'
  })
  return(
        <Layout>
           <PageBannerSection slice={PageBanner}/>
           <div className="max-w-7xl mx-auto px-4 md:py-20 py-12">
            <div className="flex gap-8 md:flex-row flex-col services">
              <div className="md:w-1/3 w-full">
                <ServicesSidebar> 
                  <div className='serv_links bg-[#033996] py-4 mb-8'>
                  <h2 className='py-5 px-8 text-[#ffc51a] lg:text-[2.7rem] lg:leading-tight  text-3xl font1'>Areas We Serve</h2>
                  <ul>
                    {services && services.map((item, index)=>{
                      return(
                        <li key={index}>
                          <Link to={`/about-us/areas-we-serve/${item.node.uid}`}>{item.node.data.title.text}</Link>
                        </li>
                      )
                    })}
                  </ul>
                  </div>              
                </ServicesSidebar>
              </div>
              <div className="md:w-2/3 w-full page_content">
                <SliceZone
                  slices={PageBody}
                  components={components}
                  context={pageData}
                  defaultComponent={() => null}
                /> 
              </div>
            </div>
          </div> 
                    
        </Layout>
    )
}

export default AreasWeServePage;


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
  query areasWeServePageQuery($id: String!) {
    PageData: prismicAreasweserve(id: { eq: $id }) {
      data {
        seo_title
        seo_description
        seo_social_image {
            url
        }
        title{
          text
        }
        body{
            ...areasweservePageBanner
            ...areasweservePageContentonly
            ...areasweservePageCtaSection1
            ...areasweservePageCtaSection2
          }
      }
    }
  }
`