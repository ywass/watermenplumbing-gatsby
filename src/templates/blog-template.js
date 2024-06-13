import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import {Link, graphql } from 'gatsby'
import { SliceZone } from "@prismicio/react"
import { components } from "../components/BlogPages"
import BreadCrumb from "../components/Elements/Breadcrumb"

const BlogTemplate = (props) => {
  const { data } = props
  
  if (!props.data) return null
  const pageData = props.data.PageData
  const site = props.data.site
  const page = pageData.data || {}

  const bcrumb = [
    {'name':'Blog', 'link':'/blog/'},
    {'name':props.data.PageData.data.archives_year.document.data.year, 'link':'/blog/'+props.data.PageData.data.archives_year.document.data.year},
    {'name':props.data.PageData.data.archives_month.document.data.month, 'link':'/blog/'+props.data.PageData.data.archives_year.document.data.year+'/'+props.data.PageData.data.archives_month.document.data.month.toLowerCase()},
    {'name':props.data.PageData.data.title.text, 'link':null}
  ]
  return (
    <Layout>
     <BreadCrumb bcrumb={bcrumb}/>
    <section
    className="blog-post-page v1 light-bg text-center bg-box-like flow-reverse col-50-50 items-touching tiny-padding vertical-middle ui-repeater page_content"
    id="BlogPostPageV1"
    data-onvisible="show"
    data-loading="false"
    data-showhide="true"
    data-slider="true"
  >
    <div
      className="main thin bottom-margin-small"
    >
      <div className="text-align center-800 relative vertical-padding side-padding-small bg-box unlike-bg pseudo-before">
       <div className='img-bg'>
       {props.data.PageData.data.featured_image.url && (
        <img src={props.data.PageData.data.featured_image.url} alt={props.data.PageData.data.featured_image.alt} />
       )}
       </div>
           <header className="no-pad bottom-margin-tiny relative">
          <h1 itemProp="headline">
          {props.data.PageData.data.title.text}
          </h1>
        </header>
        <span className="blog-time-style relative flex-inline-middle-center">
          <time itemProp="datePublished" content="2019-04-12">
            {props.data.PageData.data.publish_date}
          </time>
        </span>
        {props.data.PageData.data.author && (
        <address
          className="title-style-5 title-color-5 relative"
          rel="author"
          itemProp="author"
          itemScope=""
          itemType="http://schema.org/Person"
        >
          By {props.data.PageData.data.author}
        </address>
        )}
        </div>
        <div className="bg-box vertical-padding-small side-padding top-margin post border-radius">
        <article className="content-style" itemProp="articleBody">
    <SliceZone
        slices={page.body}
        components={components}
        context={pageData}
        defaultComponent={() => null}
      />
      </article>
      </div>
      </div>
      </section>
    </Layout>
  )
}


export default BlogTemplate

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
  query postQuery($id: String!) {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
    PageData: prismicPosts(id: { eq: $id }) {
      data {        
        title {
          text
        }
        featured_image {
        alt
        url
      }
        publish_date
        author
        seo_title
        seo_description
        seo_social_image {
            url
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
            body{
            ...blogpageContentonly
            ...blogContentImageSlice
            ...blogImageOnlySlice
            }
      }
    }
  }
`




