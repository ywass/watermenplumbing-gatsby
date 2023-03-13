import React from 'react'
import '../../../style/blog.css'
import HomeIcon from '../../../images/svg/HomeIcon.svg'
import { Link } from 'gatsby'
function TwentyTwentyPages() {
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
          <li className="flex-middle relative">2020</li>
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
          action="https://www.watermenplumbing.com/blog/2020/"
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
                <h1>Posts in 2020</h1>
                <svg className="header-flair" role="presentation">
                  <use href="../../includes/flair.svg#header" />
                </svg>
              </header>
            </div>
            <ul className="flex-grid-wrap-block-800" data-role="tbody">
             
              <li
                className="half flex- featured"
                data-item="i"
                data-key={1191189}
              >
                <Link
                  className="flex-column full border-radius scaling-item bg-box relative"
                  to="/blog/2020/november/plumbing-upgrades-that-will-increase-your-home-s"
                >
                  <div
                    className="img pad-height-50 fit full"
                    role="presentation"
                  >
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                      alt="Interior home kitchen"
                      data-src="../../cms/thumbnails/34/480x240/assets/blogs/inside-house-wall-window-preview.jpg"
                    />
                  </div>
                  <div className="flex-column-top side-padding-large vertical-padding-tiny full auto">
                    <div className="auto full">
                      <span className="blog-time-style full">
                        <time content="Nov 11, 2020">Nov 11</time>
                      </span>
                      <strong className="title-style-4 title-color-4">
                        Plumbing Upgrades That Will Increase Your Home’s Worth
                      </strong>
                      <p className="hide-800">
                        If you are getting ready to put your home on the market,
                        it is almost certain that you are also thinking of doing
                        some renovations ...
                      </p>
                    </div>
                    <span className="fit btn v2">View Article</span>
                  </div>
                </Link>
              </li>
              <li
                className="half flex- featured"
                data-item="i"
                data-key={1191190}
              >
                <Link
                  className="flex-column full border-radius scaling-item bg-box relative"
                  to="/blog/2020/october/plumbers-near-me"
                >
                  <div
                    className="img pad-height-50 fit full"
                    role="presentation"
                  >
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                      alt="Living room flooded"
                      data-src="../../cms/thumbnails/34/480x240/assets/blogs/4870761033_fe0e8bb7e3_z.jpg"
                    />
                  </div>
                  <div className="flex-column-top side-padding-large vertical-padding-tiny full auto">
                    <div className="auto full">
                      <span className="blog-time-style full">
                        <time content="Oct 2, 2020">Oct 02</time>
                      </span>
                      <strong className="title-style-4 title-color-4">
                        Plumbers Near Me
                      </strong>
                      <p className="hide-800">
                        Are you looking to prevent plumbing problems in your
                        home? The intensity of rain in Florida differs from
                        states situated farther ...
                      </p>
                    </div>
                    <span className="fit btn v2">View Article</span>
                  </div>
                </Link>
              </li>
              <li
                className="half flex- featured"
                data-item="i"
                data-key={1191191}
              >
                <Link
                  className="flex-column full border-radius scaling-item bg-box relative"
                  to="/blog/2020/august/why-is-there-chlorine-in-my-water-"
                >
                  <div className="flex-column-top side-padding-large vertical-padding-tiny full auto">
                    <div className="auto full">
                      <span className="blog-time-style full">
                        <time content="Aug 13, 2020">Aug 13</time>
                      </span>
                      <strong className="title-style-4 title-color-4">
                        Why is there chlorine in my water?
                      </strong>
                      <p className="hide-800">
                        Do You Know What’s in Your Water? Did you know that you
                        have more chlorine in your tap water then you do in your
                        swimming ...
                      </p>
                    </div>
                    <span className="fit btn v2">View Article</span>
                  </div>
                </Link>
              </li>
              <li
                className="half flex- featured"
                data-item="i"
                data-key={1191506}
              >
                <Link
                  className="flex-column full border-radius scaling-item bg-box relative"
                  to="/blog/2020/july/common-plumbing-emergencies-to-avoid"
                >
                  <div className="flex-column-top side-padding-large vertical-padding-tiny full auto">
                    <div className="auto full">
                      <span className="blog-time-style full">
                        <time content="Jul 12, 2020">Jul 12</time>
                      </span>
                      <strong className="title-style-4 title-color-4">
                        Common Plumbing Emergencies to Avoid
                      </strong>
                      <p className="hide-800">
                        Plumbing is probably the most undervalued component of a
                        home. It makes much of what we call modern housing
                        possible. On-demand ...
                      </p>
                    </div>
                    <span className="fit btn v2">View Article</span>
                  </div>
                </Link>
              </li>
              <li
                className="half flex- featured"
                data-item="i"
                data-key={1191505}
              >
                <Link
                  className="flex-column full border-radius scaling-item bg-box relative"
                  to="/blog/2020/april/how-can-i-be-proactive-to-avoid-issues-with-my-p"
                >
                  <div className="flex-column-top side-padding-large vertical-padding-tiny full auto">
                    <div className="auto full">
                      <span className="blog-time-style full">
                        <time content="Apr 29, 2020">Apr 29</time>
                      </span>
                      <strong className="title-style-4 title-color-4">
                        How Can I Be Proactive to Avoid Issues With My Plumbing?
                      </strong>
                      <p className="hide-800">
                        5 Tips to Help Maintain Your Plumbing With so many of us
                        staying home as much as possible, our plumbing systems
                        are being put to ...
                      </p>
                    </div>
                    <span className="fit btn v2">View Article</span>
                  </div>
                </Link>
              </li>
              <li
                className="half flex- featured"
                data-item="i"
                data-key={1191503}
              >
                <Link
                  className="flex-column full border-radius scaling-item bg-box relative"
                  to="/blog/2020/march/plumbing-maintenance-and-repair-in-your-rental-p"
                >
                  <div className="flex-column-top side-padding-large vertical-padding-tiny full auto">
                    <div className="auto full">
                      <span className="blog-time-style full">
                        <time content="Mar 3, 2020">Mar 03</time>
                      </span>
                      <strong className="title-style-4 title-color-4">
                        Plumbing Maintenance and Repair in Your Rental Property
                      </strong>
                      <p className="hide-800">
                        As a landlord, the responsibility of ensuring the
                        property is in a good state of repair is solely yours.
                        That said, from the ...
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

export default TwentyTwentyPages