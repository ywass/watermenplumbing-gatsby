import React from 'react'
import { Link, graphql } from "gatsby"

import Layout from '../components/layout'
import Seo from '../components/seo'
import HomeIcon from '../images/svg/HomeIcon.svg'
import BlogSidebar from '../components/BlogPages/BlogSidebar'
import BlogItem from '../components/BlogPages/BlogItem'
import BreadCrumb from '../components/Elements/Breadcrumb'

const YearTemplate = (props) => {
  const { AllPosts, year } = props.pageContext
  const posts = AllPosts.edges.filter(item => {
    return item.node.data.archives_year.document.data.year === year
  })

  const bcrumb = [
    {'name':'Blog', 'link':'/blog/'},
    {'name':year, 'link':null},
  ]


  if (!posts) return null
  return (
    <Layout>
      <BreadCrumb bcrumb={bcrumb}/>     
      <section
        className="blog-system v1 light-bg bg-box-like text-left no-padding flow-reverse svg-deco-bottom-hill-4 svg-deco-bottom-wave-bottom"
        id="BlogSystemV1"
      >
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex gap-8 md:flex-row flex-col services">
            <div className="md:w-1/3 w-full">
              <BlogSidebar />
            </div>
            <div className="md:w-2/3 w-full">
              <div className="bottom-margin-small">
                <header
                  className="text-align no-pad center-1024"
                  id="BlogSystemV1BlogPostsYearHeader"
                  data-role="thead"
                >
                  <h1>Posts in {year}</h1>
                  <svg className="header-flair" role="presentation">
                    <use href="../../includes/flair.svg#header" />
                  </svg>
                </header>
              </div>
              <ul className="flex-grid-wrap-block-800" data-role="tbody">
                {posts &&
                  posts.map((item, index) => {
                    return (
                      <li
                        className="half flex- featured"
                        data-item="i"
                        data-key={index}
                      >
                        <BlogItem data={item}/>
                      </li>
                    )
                  })}

                
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}


export default YearTemplate

export const Head = (props) => {
  return (
    <Seo />
  )
}
