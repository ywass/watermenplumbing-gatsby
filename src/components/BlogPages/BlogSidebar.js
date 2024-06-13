import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const BlogSidebar = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      PopularPosts: allPrismicPosts(
        filter: { data: { popular_posts: { eq: true } } }
        limit: 5
      ) {
        edges {
          node {
            uid
            data {
              title {
                richText
                text
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
    }
  `)
  return (
    <>
      <aside
        className="side-nav v1 bg-box like-bg border-radius-item overflow-hidden ui-repeater mb-6"
        id="BlogSystemV1SideNavPopularPosts"
      >
        <nav>
          <header className="text-left py-6 px-8">
            <h5>Most Popular</h5>
          </header>
          <ul role="menu">
            {data.PopularPosts.edges.map((item, index) => {
              return (
                <li className="level-1" data-item="i" key={index}>
                  <Link
                    to={`/blog/${
                      item.node.data.archives_year.document.data.year
                    }/${item.node.data.archives_month.document.data.month.toLowerCase()}/${
                      item.node.uid
                    }`}
                    target=""
                    role="menuitem"
                  >
                    {item.node.data.title.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </aside>
      <aside
        className="side-nav v1 bg-box like-bg border-radius-item overflow-hidden ui-repeater mb-6"
        id="BlogSystemV1SideNavCategories"
      >
        <nav>
          <header className="text-left py-6 px-8">
            <h5>Categories</h5>
          </header>
          <ul role="menu">
            <li className="level-1" data-item="i">
              <Link
                to="/blog/categories/septic-tanks"
                target=""
                role="menuitem"
              >
                Septic Tanks
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <aside
        className="side-nav v1 bg-box like-bg border-radius-item overflow-hidden ui-repeater"
        id="BlogSystemV1SideNavArchives"
      >
        <nav>
          <header className="text-left py-6 px-8">
            <h5>Archives</h5>
          </header>
          <ul role="menu">
            <li className="level-1 always-open">
              <Link to="/blog/2022" target="" role="menuitem">
                2022
                <em>(1)</em>
              </Link>
              <ul role="menu" className="inner-list">
                <li className="level-2" data-item="i">
                  <Link to="/blog/2022/january" target="" role="menuitem">
                    January
                    <em>(1)</em>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="level-1 always-open">
              <Link to="/blog/2021" target="" role="menuitem">
                2021
                <em>(9)</em>
              </Link>
              <ul role="menu" className="inner-list">
                <li className="level-2" data-item="i">
                  <Link to="/blog/2021/october" target="" role="menuitem">
                    October
                    <em>(1)</em>
                  </Link>
                </li>
                <li className="level-2" data-item="i">
                  <Link to="/blog/2021/august" target="" role="menuitem">
                    August
                    <em>(2)</em>
                  </Link>
                </li>
                <li className="level-2" data-item="i">
                  <Link to="/blog/2021/july" target="" role="menuitem">
                    July
                    <em>(1)</em>
                  </Link>
                </li>
                <li className="level-2" data-item="i">
                  <Link to="/blog/2021/june" target="" role="menuitem">
                    June
                    <em>(1)</em>
                  </Link>
                </li>
                <li className="level-2" data-item="i">
                  <Link to="/blog/2021/april" target="" role="menuitem">
                    April
                    <em>(1)</em>
                  </Link>
                </li>
                <li className="level-2" data-item="i">
                  <Link to="/blog/2021/march" target="" role="menuitem">
                    March
                    <em>(2)</em>
                  </Link>
                </li>
                <li className="level-2" data-item="i">
                  <Link to="/blog/2021/january" target="" role="menuitem">
                    January
                    <em>(1)</em>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="level-1 always-open">
              <Link to="/blog/2020" target="" role="menuitem">
                2020
                <em>(6)</em>
              </Link>
              <ul role="menu" className="inner-list">
                <li className="level-2" data-item="i">
                  <Link to="/blog/2020/november" target="" role="menuitem">
                    November
                    <em>(1)</em>
                  </Link>
                </li>
                <li className="level-2" data-item="i">
                  <Link to="/blog/2020/october" target="" role="menuitem">
                    October
                    <em>(1)</em>
                  </Link>
                </li>
                <li className="level-2" data-item="i">
                  <Link to="/blog/2020/august" target="" role="menuitem">
                    August
                    <em>(1)</em>
                  </Link>
                </li>
                <li className="level-2" data-item="i">
                  <Link to="/blog/2020/july" target="" role="menuitem">
                    July
                    <em>(1)</em>
                  </Link>
                </li>
                <li className="level-2" data-item="i">
                  <Link to="/blog/2020/april" target="" role="menuitem">
                    April
                    <em>(1)</em>
                  </Link>
                </li>
                <li className="level-2" data-item="i">
                  <Link to="/blog/2020/march" target="" role="menuitem">
                    March
                    <em>(1)</em>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="level-1 always-open">
              <Link to="/blog/2019" target="" role="menuitem">
                2019
                <em>(5)</em>
              </Link>
              <ul role="menu" className="inner-list">
                <li className="level-2" data-item="i">
                  <Link to="/blog/2019/june" target="" role="menuitem">
                    June
                    <em>(1)</em>
                  </Link>
                </li>
                <li className="level-2" data-item="i">
                  <Link to="/blog/2019/may" target="" role="menuitem">
                    May
                    <em>(1)</em>
                  </Link>
                </li>
                <li className="level-2" data-item="i">
                  <Link to="/blog/2019/april" target="" role="menuitem">
                    April
                    <em>(1)</em>
                  </Link>
                </li>
                <li className="level-2" data-item="i">
                  <Link to="/blog/2019/february" target="" role="menuitem">
                    February
                    <em>(1)</em>
                  </Link>
                </li>
                <li className="level-2" data-item="i">
                  <Link to="/blog/2019/january" target="" role="menuitem">
                    January
                    <em>(1)</em>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="level-1 always-open">
              <Link to="/blog/2018" target="" role="menuitem">
                2018
                <em>(6)</em>
              </Link>
              <ul role="menu" className="inner-list">
                <li className="level-2" data-item="i">
                  <Link to="/blog/2018/december" target="" role="menuitem">
                    December
                    <em>(1)</em>
                  </Link>
                </li>
                <li className="level-2" data-item="i">
                  <Link to="/blog/2018/november" target="" role="menuitem">
                    November
                    <em>(1)</em>
                  </Link>
                </li>
                <li className="level-2" data-item="i">
                  <Link to="/blog/2018/september" target="" role="menuitem">
                    September
                    <em>(1)</em>
                  </Link>
                </li>
                <li className="level-2" data-item="i">
                  <Link to="/blog/2018/august" target="" role="menuitem">
                    August
                    <em>(1)</em>
                  </Link>
                </li>
                <li className="level-2" data-item="i">
                  <Link to="/blog/2018/june" target="" role="menuitem">
                    June
                    <em>(1)</em>
                  </Link>
                </li>
                <li className="level-2" data-item="i">
                  <Link to="/blog/2018/may" target="" role="menuitem">
                    May
                    <em>(1)</em>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="level-1 always-open">
              <Link to="/blog/2017" target="" role="menuitem">
                2017
                <em>(2)</em>
              </Link>
              <ul role="menu" className="inner-list">
                <li className="level-2" data-item="i">
                  <Link to="/blog/2017/september" target="" role="menuitem">
                    September
                    <em>(1)</em>
                  </Link>
                </li>
                <li className="level-2" data-item="i">
                  <Link to="/blog/2017/april" target="" role="menuitem">
                    April
                    <em>(1)</em>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  )
}
export default BlogSidebar