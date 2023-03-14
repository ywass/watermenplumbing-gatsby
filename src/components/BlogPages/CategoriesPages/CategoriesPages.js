import React from 'react'
import '../../../style/blog.css'
import HomeIcon from '../../../images/svg/HomeIcon.svg'
import { Link } from 'gatsby'
function CategoriesPages() {
  return (
    <main id="MainZone">
  <section
    className="sub-banner v1 bg-image dark-bg bg-box-none text-left"
    id="SubBannerV1"
    data-onvisible="show"
  >
    <picture className="img-bg bg-position" role="presentation">
      <source
        media="(max-width: 500px)"
        srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        data-src="/assets/sub-banners/sub-banner-v1-bg-mobile.jpg"
      />
      <img
        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        alt=""
        data-src="/assets/sub-banners/sub-banner-v1-bg.jpg"
      />
    </picture>
    <div className="main">
      <div
        className="bg-box side-padding-medium vertical-padding info text-align center-500 box-flair"
        id="SubBannerV1Info"
      >
        <div className="flair-border">
          <span className="flair-1" />
          <span className="flair-2" />
          <span className="title-font title-color-1">
            <strong>Categories</strong>
          </span>
          <em className="title-color-2 subtitle">
            We’ll Treat Your Home as if It Were Our Own
          </em>
          <svg role="presentation" className="header-flair">
            <use href="../../includes/flair.svg#header" />
          </svg>
        </div>
      </div>
    </div>
  </section>
  <section className="bread-crumbs v1 bg-box-none light-bg" id="BreadCrumbsV1">
    <div className="main">
      <nav className="relative bg-box border-radius-item no-shadow">
        <ol className="flex-middle">
          <li className="flex-middle relative">
            <Link title="Go Home" aria-label="Go Home" to="/">
             <HomeIcon/>
            </Link>
          </li>
          <li className="flex-middle relative">
            <Link to="/blog" target="">
              Blog
            </Link>
          </li>
          <li className="flex-middle relative">Categories</li>
        </ol>
      </nav>
    </div>
  </section>
  <section
    className="blog-system v1 light-bg bg-box-like text-left no-padding flow-reverse svg-deco-bottom-hill-4 svg-deco-bottom-wave-bottom"
    id="BlogSystemV1"
  >
    <div id="TopZone" />
    <div className="main vertical-padding-small flex-spaced-between-block-1024-margined flex-direction">
      <div className="content-zone two-thirds" id="ContentZone">
        <form
          id="Form_BlogSystemV1BlogPostsCategories"
          method="post"
          encType="multipart/form-data"
          action="https://www.watermenplumbing.com/blog/categories/"
          data-search={1}
        >
          <input
            type="hidden"
            name="_m_"
            defaultValue="BlogSystemV1BlogPostsCategories"
          />
          <input
            type="hidden"
            className="ui-cms-input"
            id="BlogSystemV1BlogPostsCategories__edit_"
            name="BlogSystemV1BlogPostsCategories$_edit_"
            defaultValue=""
          />
          <input
            type="hidden"
            className="ui-cms-input"
            id="BlogSystemV1BlogPostsCategories__command_"
            name="BlogSystemV1BlogPostsCategories$_command_"
            defaultValue=""
          />
          <div
            className="blog-posts blog-categories ui-repeater ui-ajax"
            id="BlogSystemV1BlogPostsCategories"
            data-onvisible="show"
            data-loading="false"
            data-infinite="true"
            data-ajaxreplace="true"
            data-needspaging="false"
          >
            <input
              type="hidden"
              id="BlogSystemV1BlogPostsCategories_HDR0_ResultsPerPage"
              autoComplete="off"
              className="ui-cms-input"
              name="BlogSystemV1BlogPostsCategories$HDR0$ResultsPerPage"
              defaultValue={6}
              data-search="true"
            />
            <input
              type="hidden"
              id="BlogSystemV1BlogPostsCategories_HDR0_PagingID"
              autoComplete="off"
              className="ui-cms-input"
              name="BlogSystemV1BlogPostsCategories$HDR0$PagingID"
              defaultValue=""
              data-search="true"
            />
            <div className="bottom-margin-tiny">
              <header
                className="text-align no-pad center-1024"
                id="BlogSystemV1BlogPostsCategoriesHeader"
                data-role="thead"
              >
                <h1>Posts by Category</h1>
                <svg className="header-flair" role="presentation">
                  <use href="../../includes/flair.svg#header" />
                </svg>
              </header>
            </div>
            <ul>
              
              <li>
                <div className="divider top-margin-small bottom-margin-small flex-middle-center-spaced-between divide">
                  <Link to="/blog/categories/septic-tanks" title="Septic Tanks">
                    <strong className="title-style-3">Septic Tanks</strong>
                  </Link>
                  <span className="line auto" />
                  <Link
                    to="/blog/categories/septic-tanks"
                    className="btn-colors btn-style fit"
                    title="Septic Tanks"
                  >
                    (1) Post
                  </Link>
                </div>
                <ul className="flex-grid-wrap-block-800" data-role="tbody">
                  <li
                    className="half flex- featured"
                    data-item="i"
                    data-key={2324508}
                  >
                    <Link
                      className="flex-column full border-radius scaling-item bg-box relative"
                      to="/blog//2021/october/what-homeowners-should-know-about-septic-tanks"
                    >
                      <div
                        className="img pad-height-50 fit full"
                        role="presentation"
                      >
                        <img
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                          alt="Do all homes have septic tanks? Look for a septic tank cover in the ground"
                          data-src="../../cms/thumbnails/34/480x240/images/blog/Septic-Blog.jpg"
                        />
                      </div>
                      <div className="flex-column-top side-padding-large vertical-padding-tiny full auto">
                        <div className="auto full">
                          <span className="blog-time-style full">
                            <time content="Oct 25, 2021">Oct 25</time>
                          </span>
                          <strong className="title-style-4 title-color-4">
                            What Homeowners Should Know about Septic Tanks
                          </strong>
                          <p className="hide-800">
                            If you own a home with a septic tank or are thinking
                            about buying one, it’s important to understand how
                            this system functions on ...
                          </p>
                        </div>
                        <span className="fit btn v2">View Article</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>
             
            </ul>
          </div>
        </form>
      </div>
      <div className="side-zone third" id="SideZone">
        <aside
          className="side-nav v1 bg-box like-bg border-radius-item overflow-hidden ui-repeater"
          id="BlogSystemV1SideNavPopularPosts"
        >
          <nav>
            <header className="text-left">
              <h5>Most Popular</h5>
            </header>
            <ul role="menu">
              <li className="level-1" data-item="i" data-key={1191482}>
                <Link
                  to="/blog/2018/september/master-plumber-vs-plumber-in-florida-what-s-the-"
                  target=""
                  role="menuitem"
                >
                  Master Plumber vs Plumber in Florida: What’s the Difference?
                </Link>
              </li>
              <li className="level-1" data-item="i" data-key={1191463}>
                <Link
                  to="/blog/2017/september/5-post-hurricane-plumbing-problems-to-watch-for"
                  target=""
                  role="menuitem"
                >
                  5 Post Hurricane Plumbing Problems to Watch For
                </Link>
              </li>
              <li className="level-1" data-item="i" data-key={1191503}>
                <Link
                  to="/blog/2020/march/plumbing-maintenance-and-repair-in-your-rental-p"
                  target=""
                  role="menuitem"
                >
                  Plumbing Maintenance and Repair in Your Rental Property
                </Link>
              </li>
              <li className="level-1" data-item="i" data-key={1223080}>
                <Link
                  to="/blog/2021/march/plumbing-problems-that-can-cause-mold"
                  target=""
                  role="menuitem"
                >
                  Plumbing Problems That Can Cause Mold
                </Link>
              </li>
              <li className="level-1" data-item="i" data-key={1191189}>
                <Link
                  to="/blog/2020/november/plumbing-upgrades-that-will-increase-your-home-s"
                  target=""
                  role="menuitem"
                >
                  Plumbing Upgrades That Will Increase Your Home’s Worth
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        <aside
          className="side-nav v1 bg-box like-bg border-radius-item overflow-hidden ui-repeater"
          id="BlogSystemV1SideNavCategories"
        >
          <nav>
            <header className="text-left">
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
            <header className="text-left">
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
                    <Link
                      to="/blog/2020/november"
                      target=""
                      role="menuitem"
                    >
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
                    <Link
                      to="/blog/2019/february"
                      target=""
                      role="menuitem"
                    >
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
                    <Link
                      to="/blog/2018/december"
                      target=""
                      role="menuitem"
                    >
                      December
                      <em>(1)</em>
                    </Link>
                  </li>
                  <li className="level-2" data-item="i">
                    <Link
                      to="/blog/2018/november"
                      target=""
                      role="menuitem"
                    >
                      November
                      <em>(1)</em>
                    </Link>
                  </li>
                  <li className="level-2" data-item="i">
                    <Link
                      to="/blog/2018/september"
                      target=""
                      role="menuitem"
                    >
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
                    <Link
                      to="/blog/2017/september"
                      target=""
                      role="menuitem"
                    >
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
      </div>
    </div>
    <div id="BottomZone" />
  </section>
</main>

  )
}

export default CategoriesPages