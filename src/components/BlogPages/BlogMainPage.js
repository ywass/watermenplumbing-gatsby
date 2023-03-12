import React from 'react'
import '../../style/blog.css'
import blogMainOneImg from '../../images/shutterstock_3194182101.jpg'
function BlogMainPage() {
  return (
    <main id="MainZone">
  <section className="bread-crumbs v1 bg-box-none light-bg" id="BreadCrumbsV1">
    <div className="main">
      <nav className="relative bg-box border-radius-item no-shadow">
        <ol className="flex-middle">
          <li className="flex-middle relative">
            <a title="Go Home" aria-label="Go Home" href="../index.html">
              <svg viewBox="0 0 36 36" alt="Home Icon" role="presentation">
                <use data-href="/cms/svg/site/ykmkv4_n6ok.36.svg#home" />
              </svg>
            </a>
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
    <div id="TopZone" />
    <div className="main vertical-padding-small flex-spaced-between-block-1024-margined flex-direction">
      <div className="content-zone two-thirds" id="ContentZone">
        <form
          id="Form_BlogSystemV1BlogPostsHome"
          method="post"
          encType="multipart/form-data"
          action="https://www.watermenplumbing.com/blog/"
          data-search={1}
        >
          <input
            type="hidden"
            name="_m_"
            defaultValue="BlogSystemV1BlogPostsHome"
          />
          <input
            type="hidden"
            className="ui-cms-input"
            id="BlogSystemV1BlogPostsHome__edit_"
            name="BlogSystemV1BlogPostsHome$_edit_"
            defaultValue=""
          />
          <input
            type="hidden"
            className="ui-cms-input"
            id="BlogSystemV1BlogPostsHome__command_"
            name="BlogSystemV1BlogPostsHome$_command_"
            defaultValue=""
          />
          <div
            className="blog-posts blog-home ui-repeater ui-ajax"
            id="BlogSystemV1BlogPostsHome"
            data-onvisible="show"
            data-loading="false"
            data-infinite="true"
            data-ajaxreplace="true"
          >
            <input
              type="hidden"
              id="BlogSystemV1BlogPostsHome_HDR0_ResultsPerPage"
              autoComplete="off"
              className="ui-cms-input"
              name="BlogSystemV1BlogPostsHome$HDR0$ResultsPerPage"
              defaultValue={6}
              data-search="true"
            />
            <input
              type="hidden"
              id="BlogSystemV1BlogPostsHome_HDR0_PagingID"
              autoComplete="off"
              className="ui-cms-input"
              name="BlogSystemV1BlogPostsHome$HDR0$PagingID"
              defaultValue=""
              data-search="true"
            />
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
            <ul className="flex-grid-wrap-block-800" data-role="tbody">
              
              <li
                className="half flex- featured"
                data-item="i"
                data-key={1302513}
              >
                <a
                  className="flex-column full border-radius scaling-item bg-box relative"
                  href="2022/january/read-this-before-you-buy-a-house-in-florida-/index.html"
                >
                  <div
                    className="img pad-height-50 fit full"
                    role="presentation"
                  >
                    <img
                      alt="A couple (man and woman) admiring a 2-story Florida house and asking questions before purchasing"
                      src={blogMainOneImg}
                    />
                  </div>
                  <div className="flex-column-top side-padding-large vertical-padding-tiny full auto">
                    <div className="auto full">
                      <span className="blog-time-style full">
                        <time content="Jan 21, 2022">Jan 21</time>
                      </span>
                      <strong className="title-style-4 title-color-4">
                        Read This Before You Buy a House in Florida
                      </strong>
                      <p className="hide-800">
                        Moving can be expensive, especially if you’re moving
                        from out of state. Whether they’re moving for family
                        reasons, a lifestyle ...
                      </p>
                    </div>
                    <span className="fit btn v2">View Article</span>
                  </div>
                </a>
              </li>
              <li
                className="half flex- featured"
                data-item="i"
                data-key={1279586}
              >
                <a
                  className="flex-column full border-radius scaling-item bg-box relative"
                  href="2021/october/what-homeowners-should-know-about-septic-tanks/index.html"
                >
                  <div
                    className="img pad-height-50 fit full"
                    role="presentation"
                  >
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                      alt="Do all homes have septic tanks? Look for a septic tank cover in the ground"
                      data-src="../cms/thumbnails/34/480x240/images/blog/Septic-Blog.jpg"
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
                        about buying one, it’s important to understand how this
                        system functions on ...
                      </p>
                    </div>
                    <span className="fit btn v2">View Article</span>
                  </div>
                </a>
              </li>
              <li
                className="half flex- featured"
                data-item="i"
                data-key={1263828}
              >
                <a
                  className="flex-column full border-radius scaling-item bg-box relative"
                  href="2021/august/what-to-look-for-when-buying-a-home-in-south-flo/index.html"
                >
                  <div
                    className="img pad-height-50 fit full"
                    role="presentation"
                  >
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                      alt="Front view of a typical house found in Southern Florida."
                      data-src="../cms/thumbnails/34/480x240/images/blog/South-Florida-Home-Banner.jpg"
                    />
                  </div>
                  <div className="flex-column-top side-padding-large vertical-padding-tiny full auto">
                    <div className="auto full">
                      <span className="blog-time-style full">
                        <time content="Aug 31, 2021">Aug 31</time>
                      </span>
                      <strong className="title-style-4 title-color-4">
                        What to Look for When Buying a Home in South Florida
                      </strong>
                      <p className="hide-800">
                        Florida has long been a hot real estate market, but that
                        is especially true today with the increase in remote
                        work opportunities. ...
                      </p>
                    </div>
                    <span className="fit btn v2">View Article</span>
                  </div>
                </a>
              </li>
              <li
                className="half flex- featured"
                data-item="i"
                data-key={1258441}
              >
                <a
                  className="flex-column full border-radius scaling-item bg-box relative"
                  href="2021/august/protect-your-pipes-this-hurricane-season/index.html"
                >
                  <div
                    className="img pad-height-50 fit full"
                    role="presentation"
                  >
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                      alt="Flooded Florida neighborhood street."
                      data-src="../cms/thumbnails/34/480x240/images/blog/Florida-Hurricane-Flooding.jpg"
                    />
                  </div>
                  <div className="flex-column-top side-padding-large vertical-padding-tiny full auto">
                    <div className="auto full">
                      <span className="blog-time-style full">
                        <time content="Aug 13, 2021">Aug 13</time>
                      </span>
                      <strong className="title-style-4 title-color-4">
                        Protect Your Pipes this Hurricane Season
                      </strong>
                      <p className="hide-800">
                        We’re in the middle of hurricane season and NOAA’s
                        Climate Prediction Center says that atmospheric and
                        oceanic conditions remain ...
                      </p>
                    </div>
                    <span className="fit btn v2">View Article</span>
                  </div>
                </a>
              </li>
              <li
                className="half flex- featured"
                data-item="i"
                data-key={1248528}
              >
                <a
                  className="flex-column full border-radius scaling-item bg-box relative"
                  href="2021/july/why-are-water-heaters-round-/index.html"
                >
                  <div className="flex-column-top side-padding-large vertical-padding-tiny full auto">
                    <div className="auto full">
                      <span className="blog-time-style full">
                        <time content="Jul 6, 2021">Jul 06</time>
                      </span>
                      <strong className="title-style-4 title-color-4">
                        Why Are Water Heaters Round?
                      </strong>
                      <p className="hide-800">
                        If you have a storage tank water heater, you’re probably
                        familiar with this cylindrical appliance in your garage
                        or utility ...
                      </p>
                    </div>
                    <span className="fit btn v2">View Article</span>
                  </div>
                </a>
              </li>
              <li
                className="half flex- featured"
                data-item="i"
                data-key={1241879}
              >
                <a
                  className="flex-column full border-radius scaling-item bg-box relative"
                  href="2021/june/5-maintenance-tips-to-avoid-plumbing-headaches/index.html"
                >
                  <div
                    className="img pad-height-50 fit full"
                    role="presentation"
                  >
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                      alt="Cartoon flooded laundry room/basement"
                      data-src="../cms/thumbnails/34/480x240/images/blog/Flooded-Laundry-Room.jpg"
                    />
                  </div>
                  <div className="flex-column-top side-padding-large vertical-padding-tiny full auto">
                    <div className="auto full">
                      <span className="blog-time-style full">
                        <time content="Jun 7, 2021">Jun 07</time>
                      </span>
                      <strong className="title-style-4 title-color-4">
                        5 Maintenance Tips to Avoid Plumbing Headaches
                      </strong>
                      <p className="hide-800">
                        Caring for your home’s plumbing system can seem
                        daunting. Your plumbing is the workhorse of all the
                        systems in your house. It ...
                      </p>
                    </div>
                    <span className="fit btn v2">View Article</span>
                  </div>
                </a>
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
                <a
                  href="2018/september/master-plumber-vs-plumber-in-florida-what-s-the-/index.html"
                  target=""
                  role="menuitem"
                >
                  Master Plumber vs Plumber in Florida: What’s the Difference?
                </a>
              </li>
              <li className="level-1" data-item="i" data-key={1191463}>
                <a
                  href="2017/september/5-post-hurricane-plumbing-problems-to-watch-for/index.html"
                  target=""
                  role="menuitem"
                >
                  5 Post Hurricane Plumbing Problems to Watch For
                </a>
              </li>
              <li className="level-1" data-item="i" data-key={1191503}>
                <a
                  href="2020/march/plumbing-maintenance-and-repair-in-your-rental-p/index.html"
                  target=""
                  role="menuitem"
                >
                  Plumbing Maintenance and Repair in Your Rental Property
                </a>
              </li>
              <li className="level-1" data-item="i" data-key={1223080}>
                <a
                  href="2021/march/plumbing-problems-that-can-cause-mold/index.html"
                  target=""
                  role="menuitem"
                >
                  Plumbing Problems That Can Cause Mold
                </a>
              </li>
              <li className="level-1" data-item="i" data-key={1191189}>
                <a
                  href="2020/november/plumbing-upgrades-that-will-increase-your-home-s/index.html"
                  target=""
                  role="menuitem"
                >
                  Plumbing Upgrades That Will Increase Your Home’s Worth
                </a>
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
                <a
                  href="categories/septic-tanks/index.html"
                  target=""
                  role="menuitem"
                >
                  Septic Tanks
                </a>
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
                <a href="2022/index.html" target="" role="menuitem">
                  2022
                  <em>(1)</em>
                </a>
                <ul role="menu" className="inner-list">
                  <li className="level-2" data-item="i">
                    <a href="2022/january/index.html" target="" role="menuitem">
                      January
                      <em>(1)</em>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="level-1 always-open">
                <a href="2021/index.html" target="" role="menuitem">
                  2021
                  <em>(9)</em>
                </a>
                <ul role="menu" className="inner-list">
                  <li className="level-2" data-item="i">
                    <a href="2021/october/index.html" target="" role="menuitem">
                      October
                      <em>(1)</em>
                    </a>
                  </li>
                  <li className="level-2" data-item="i">
                    <a href="2021/august/index.html" target="" role="menuitem">
                      August
                      <em>(2)</em>
                    </a>
                  </li>
                  <li className="level-2" data-item="i">
                    <a href="2021/july/index.html" target="" role="menuitem">
                      July
                      <em>(1)</em>
                    </a>
                  </li>
                  <li className="level-2" data-item="i">
                    <a href="2021/june/index.html" target="" role="menuitem">
                      June
                      <em>(1)</em>
                    </a>
                  </li>
                  <li className="level-2" data-item="i">
                    <a href="2021/april/index.html" target="" role="menuitem">
                      April
                      <em>(1)</em>
                    </a>
                  </li>
                  <li className="level-2" data-item="i">
                    <a href="2021/march/index.html" target="" role="menuitem">
                      March
                      <em>(2)</em>
                    </a>
                  </li>
                  <li className="level-2" data-item="i">
                    <a href="2021/january/index.html" target="" role="menuitem">
                      January
                      <em>(1)</em>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="level-1 always-open">
                <a href="2020/index.html" target="" role="menuitem">
                  2020
                  <em>(6)</em>
                </a>
                <ul role="menu" className="inner-list">
                  <li className="level-2" data-item="i">
                    <a
                      href="2020/november/index.html"
                      target=""
                      role="menuitem"
                    >
                      November
                      <em>(1)</em>
                    </a>
                  </li>
                  <li className="level-2" data-item="i">
                    <a href="2020/october/index.html" target="" role="menuitem">
                      October
                      <em>(1)</em>
                    </a>
                  </li>
                  <li className="level-2" data-item="i">
                    <a href="2020/august/index.html" target="" role="menuitem">
                      August
                      <em>(1)</em>
                    </a>
                  </li>
                  <li className="level-2" data-item="i">
                    <a href="2020/july/index.html" target="" role="menuitem">
                      July
                      <em>(1)</em>
                    </a>
                  </li>
                  <li className="level-2" data-item="i">
                    <a href="2020/april/index.html" target="" role="menuitem">
                      April
                      <em>(1)</em>
                    </a>
                  </li>
                  <li className="level-2" data-item="i">
                    <a href="2020/march/index.html" target="" role="menuitem">
                      March
                      <em>(1)</em>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="level-1 always-open">
                <a href="2019/index.html" target="" role="menuitem">
                  2019
                  <em>(5)</em>
                </a>
                <ul role="menu" className="inner-list">
                  <li className="level-2" data-item="i">
                    <a href="2019/june/index.html" target="" role="menuitem">
                      June
                      <em>(1)</em>
                    </a>
                  </li>
                  <li className="level-2" data-item="i">
                    <a href="2019/may/index.html" target="" role="menuitem">
                      May
                      <em>(1)</em>
                    </a>
                  </li>
                  <li className="level-2" data-item="i">
                    <a href="2019/april/index.html" target="" role="menuitem">
                      April
                      <em>(1)</em>
                    </a>
                  </li>
                  <li className="level-2" data-item="i">
                    <a
                      href="2019/february/index.html"
                      target=""
                      role="menuitem"
                    >
                      February
                      <em>(1)</em>
                    </a>
                  </li>
                  <li className="level-2" data-item="i">
                    <a href="2019/january/index.html" target="" role="menuitem">
                      January
                      <em>(1)</em>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="level-1 always-open">
                <a href="2018/index.html" target="" role="menuitem">
                  2018
                  <em>(6)</em>
                </a>
                <ul role="menu" className="inner-list">
                  <li className="level-2" data-item="i">
                    <a
                      href="2018/december/index.html"
                      target=""
                      role="menuitem"
                    >
                      December
                      <em>(1)</em>
                    </a>
                  </li>
                  <li className="level-2" data-item="i">
                    <a
                      href="2018/november/index.html"
                      target=""
                      role="menuitem"
                    >
                      November
                      <em>(1)</em>
                    </a>
                  </li>
                  <li className="level-2" data-item="i">
                    <a
                      href="2018/september/index.html"
                      target=""
                      role="menuitem"
                    >
                      September
                      <em>(1)</em>
                    </a>
                  </li>
                  <li className="level-2" data-item="i">
                    <a href="2018/august/index.html" target="" role="menuitem">
                      August
                      <em>(1)</em>
                    </a>
                  </li>
                  <li className="level-2" data-item="i">
                    <a href="2018/june/index.html" target="" role="menuitem">
                      June
                      <em>(1)</em>
                    </a>
                  </li>
                  <li className="level-2" data-item="i">
                    <a href="2018/may/index.html" target="" role="menuitem">
                      May
                      <em>(1)</em>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="level-1 always-open">
                <a href="2017/index.html" target="" role="menuitem">
                  2017
                  <em>(2)</em>
                </a>
                <ul role="menu" className="inner-list">
                  <li className="level-2" data-item="i">
                    <a
                      href="2017/september/index.html"
                      target=""
                      role="menuitem"
                    >
                      September
                      <em>(1)</em>
                    </a>
                  </li>
                  <li className="level-2" data-item="i">
                    <a href="2017/april/index.html" target="" role="menuitem">
                      April
                      <em>(1)</em>
                    </a>
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

export default BlogMainPage