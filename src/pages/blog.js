import React from 'react'
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'
import HomeIcon from '../images/svg/HomeIcon.svg'
import BlogSidebar from '../components/BlogPages/BlogSidebar'
import BlogIndex from '../components/BlogPages/BlogIndex'


const Blog = (props) => {
  const { data } = props
  const { allPrismicPosts } = data

  if (!allPrismicPosts) return null
  return (
    <Layout>
      <section className="bread-crumbs v1 bg-box-none light-bg !py-4" id="BreadCrumbsV1">
        <div className="main">
          <nav className="relative bg-box border-radius-item no-shadow border border-[#cc6461] !py-3 overflow-hidden">
            <ol className="flex-middle">
              <li className="flex-middle relative">
                <Link title="Go Home" aria-label="Go Home" to="/">
                  <HomeIcon />
                </Link>
              </li>
              <li className="flex-middle relative">Blog</li>
            </ol>
          </nav>
        </div>
      </section>
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
                  id="BlogSystemV1BlogPostsHomeHeader"
                  data-role="thead"
                >
                  <h1>Recent News</h1>
                  <svg className="header-flair" role="presentation">
                    <use href="../includes/flair.svg#header" />
                  </svg>
                </header>
              </div>
              <BlogIndex data={allPrismicPosts.edges} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query {
    allPrismicPosts(sort: { last_publication_date : DESC }) {
    edges {
      node {
      uid
      last_publication_date
        data {  
          popular_posts   
          publish_date
          title {
            richText
            text
          }
          short_description {
            richText
            text
          }
          archives_year  {
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
        }
      }
    }
  }
  }
`




