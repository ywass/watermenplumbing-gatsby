import React from 'react'
import '../../../style/blog.css'
import HomeIcon from '../../../images/svg/HomeIcon.svg'
import { Link } from 'gatsby'
function TwentyEighteenPages() {
  return (
    <main id="MainZone">
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
            <li className="flex-middle relative">2018</li>
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
            id="Form_BlogSystemV1BlogPostsYear"
            method="post"
            encType="multipart/form-data"
            action="https://www.watermenplumbing.com/blog/2018/"
            data-search={1}
          >
            <input
              type="hidden"
              name="_m_"
              defaultValue="BlogSystemV1BlogPostsYear"
            />
            <input
              type="hidden"
              className="ui-cms-input"
              id="BlogSystemV1BlogPostsYear__edit_"
              name="BlogSystemV1BlogPostsYear$_edit_"
              defaultValue=""
            />
            <input
              type="hidden"
              className="ui-cms-input"
              id="BlogSystemV1BlogPostsYear__command_"
              name="BlogSystemV1BlogPostsYear$_command_"
              defaultValue=""
            />
            <div
              className="blog-posts blog-year ui-repeater ui-ajax"
              id="BlogSystemV1BlogPostsYear"
              data-onvisible="show"
              data-loading="false"
              data-infinite="true"
              data-ajaxreplace="true"
              data-needspaging="false"
            >
              <input
                type="hidden"
                id="BlogSystemV1BlogPostsYear_HDR0_ResultsPerPage"
                autoComplete="off"
                className="ui-cms-input"
                name="BlogSystemV1BlogPostsYear$HDR0$ResultsPerPage"
                defaultValue={6}
                data-search="true"
              />
              <input
                type="hidden"
                id="BlogSystemV1BlogPostsYear_HDR0_PagingID"
                autoComplete="off"
                className="ui-cms-input"
                name="BlogSystemV1BlogPostsYear$HDR0$PagingID"
                defaultValue=""
                data-search="true"
              />
              <div className="bottom-margin-small">
                <header
                  className="text-align no-pad center-1024"
                  id="BlogSystemV1BlogPostsYearHeader"
                  data-role="thead"
                >
                  <h1>Posts in 2018</h1>
                  <svg className="header-flair" role="presentation">
                    <use href="../../includes/flair.svg#header" />
                  </svg>
                </header>
              </div>
              <ul className="flex-grid-wrap-block-800" data-role="tbody">
                
                <li
                  className="half flex- featured"
                  data-item="i"
                  data-key={1191488}
                >
                  <Link
                    className="flex-column full border-radius scaling-item bg-box relative"
                    to="/blog/2018/december/when-should-i-replace-my-toilet-"
                  >
                    <div className="flex-column-top side-padding-large vertical-padding-tiny full auto">
                      <div className="auto full">
                        <span className="blog-time-style full">
                          <time content="Dec 11, 2018">Dec 11</time>
                        </span>
                        <strong className="title-style-4 title-color-4">
                          When Should I Replace My Toilet?
                        </strong>
                        <p className="hide-800">
                          The toilet aka, water closet, aka porcelain throne, aka,
                          The John, aka the crapper. Throughout history, our
                          favorite bathroom ...
                        </p>
                      </div>
                      <span className="fit btn v2">View Article</span>
                    </div>
                  </Link>
                </li>
                <li
                  className="half flex- featured"
                  data-item="i"
                  data-key={1191485}
                >
                  <Link
                    className="flex-column full border-radius scaling-item bg-box relative"
                    to="/blog/2018/november/6-holiday-plumbing-tips-to-keep-your-plans-flowi"
                  >
                    <div className="flex-column-top side-padding-large vertical-padding-tiny full auto">
                      <div className="auto full">
                        <span className="blog-time-style full">
                          <time content="Nov 29, 2018">Nov 29</time>
                        </span>
                        <strong className="title-style-4 title-color-4">
                          6 Holiday Plumbing Tips to Keep Your Plans Flowing
                          Smoothly
                        </strong>
                        <p className="hide-800">
                          Whether you’re having family come in for the holidays or
                          you’re planning to visit them, nothing could be worse
                          than a plumbing ...
                        </p>
                      </div>
                      <span className="fit btn v2">View Article</span>
                    </div>
                  </Link>
                </li>
                <li
                  className="half flex- featured"
                  data-item="i"
                  data-key={1191482}
                >
                  <Link
                    className="flex-column full border-radius scaling-item bg-box relative"
                    to="/blog/2018/september/master-plumber-vs-plumber-in-florida-what-s-the-"
                  >
                    <div className="flex-column-top side-padding-large vertical-padding-tiny full auto">
                      <div className="auto full">
                        <span className="blog-time-style full">
                          <time content="Sep 30, 2018">Sep 30</time>
                        </span>
                        <strong className="title-style-4 title-color-4">
                          Master Plumber vs Plumber in Florida: What’s the
                          Difference?
                        </strong>
                        <p className="hide-800">
                          Wondering what the difference is between a master
                          plumber and a plumber in Florida? When you need plumbing
                          work done, knowing the ...
                        </p>
                      </div>
                      <span className="fit btn v2">View Article</span>
                    </div>
                  </Link>
                </li>
                <li
                  className="half flex- featured"
                  data-item="i"
                  data-key={1191473}
                >
                  <Link
                    className="flex-column full border-radius scaling-item bg-box relative"
                    to="/blog/2018/august/why-are-plumbers-so-expensive-"
                  >
                    <div className="flex-column-top side-padding-large vertical-padding-tiny full auto">
                      <div className="auto full">
                        <span className="blog-time-style full">
                          <time content="Aug 15, 2018">Aug 15</time>
                        </span>
                        <strong className="title-style-4 title-color-4">
                          Why Are Plumbers So Expensive?
                        </strong>
                        <p className="hide-800">
                          Was I overcharged? But the parts only cost “XYZ” … These
                          are questions many of us have when hiring a plumber. So,
                          why is it that ...
                        </p>
                      </div>
                      <span className="fit btn v2">View Article</span>
                    </div>
                  </Link>
                </li>
                <li
                  className="half flex- featured"
                  data-item="i"
                  data-key={1191478}
                >
                  <Link
                    className="flex-column full border-radius scaling-item bg-box relative"
                    to="/blog/2018/june/tankless-water-heater-pros-cons"
                  >
                    <div className="flex-column-top side-padding-large vertical-padding-tiny full auto">
                      <div className="auto full">
                        <span className="blog-time-style full">
                          <time content="Jun 20, 2018">Jun 20</time>
                        </span>
                        <strong className="title-style-4 title-color-4">
                          Tankless Water Heater: Pros &amp; Cons
                        </strong>
                        <p className="hide-800">
                          Should I switch from an electric tank water heater to an
                          electric tank-less unit? Tank-less water heaters are
                          becoming more ...
                        </p>
                      </div>
                      <span className="fit btn v2">View Article</span>
                    </div>
                  </Link>
                </li>
                <li
                  className="half flex- featured"
                  data-item="i"
                  data-key={1191466}
                >
                  <Link
                    className="flex-column full border-radius scaling-item bg-box relative"
                    to="/blog/2018/may/how-do-i-know-when-its-time-to-replace-my-garbag"
                  >
                    <div className="flex-column-top side-padding-large vertical-padding-tiny full auto">
                      <div className="auto full">
                        <span className="blog-time-style full">
                          <time content="May 10, 2018">May 10</time>
                        </span>
                        <strong className="title-style-4 title-color-4">
                          How Do I Know When Its Time to Replace My Garbage
                          Disposal?
                        </strong>
                        <p className="hide-800">
                          Many of us like to wait for our Garbage Disposals/ AKA
                          Garborators unit to stop working or leaks before we
                          replace it, but is ...
                        </p>
                      </div>
                      <span className="fit btn v2">View Article</span>
                    </div>
                  </Link>
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

export default TwentyEighteenPages