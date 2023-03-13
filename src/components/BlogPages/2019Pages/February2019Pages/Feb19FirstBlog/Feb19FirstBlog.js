import React from 'react'
import '../../../../../style/blog.css'
import HomeIcon from '../../../../../images/svg/HomeIcon.svg'
import { Link } from 'gatsby'
import feb19FirstOneImg from '../../../../../images/backed-up-toilets-list-300x169.jpg'
function Feb19FirstBlog() {
  return (
    <main id="MainZone">
  <section
    className="bread-crumbs v1 thin bg-box-none light-bg"
    id="BreadCrumbsV1Thin"
  >
    <div className="main thin">
      <nav className="relative bg-box border-radius-item no-shadow">
        <ol className="flex-middle">
          <li className="flex-middle relative">
            <Link
              title="Go Home"
              aria-label="Go Home"
              to="/"
            >
             <HomeIcon/>
            </Link>
          </li>
          <li className="flex-middle relative">
            <Link to="/blog" target="">
              Blog
            </Link>
          </li>
          <li className="flex-middle relative">
            <Link to="/blog/2019" target="">
              2019
            </Link>
          </li>
          <li className="flex-middle relative">
            <Link to="/blog/2019/february" target="">
              February
            </Link>
          </li>
          <li className="flex-middle relative">
            Never Flush These Things Down the Toilet &amp; Why
          </li>
        </ol>
      </nav>
    </div>
  </section>
  <section
    className="blog-post-page v1 light-bg text-center bg-box-like flow-reverse col-50-50 items-touching tiny-padding vertical-middle ui-repeater"
    id="BlogPostPageV1"
    data-onvisible="show"
    data-loading="false"
    data-showhide="true"
    data-slider="true"
  >
    <div
      className="main thin bottom-margin-small"
      data-item="i"
      data-key={1191497}
    >
      <div className="text-align center-800 vertical-padding-tiny">
        <header className="no-pad bottom-margin-tiny">
          <h1 itemProp="headline">
            Never Flush These Things Down the Toilet &amp; Why
          </h1>
        </header>
        <span className="blog-time-style relative flex-inline-middle-center">
          <time itemProp="datePublished" content="2019-02-26">
            February 26, 2019{" "}
          </time>
        </span>
        <div className="top-margin-tiny">
        {/*   <ul
            className="flex-grid-small-center-wrap relative text-align center-800"
            id="BlogPostPageV1SocialShareThree"
          >
            <li className="fit">
              <Link
                className="btn-colors social-link addthis_button_facebook"
                addthis:title=""
                addthis:url="http://www.watermenplumbing.com/blog/2019/february/never-flush-these-things-down-the-toilet-why/"
              >
                <svg viewBox="0 0 36 36">
                  <use data-href="/cms/svg/admin/ufphi5p03ss.36.svg#facebook" />
                </svg>
              </Link>
            </li>
            <li className="fit">
              <Link
                className="btn-colors social-link addthis_button_twitter"
                addthis:title=""
                addthis:url="http://www.watermenplumbing.com/blog/2019/february/never-flush-these-things-down-the-toilet-why/"
              >
                <svg viewBox="0 0 36 36">
                  <use data-href="/cms/svg/admin/ufphi5p03ss.36.svg#twitter" />
                </svg>
              </Link>
            </li>
            <li className="fit">
              <Link
                className="btn-colors social-link addthis_button_pinterest_share"
                addthis:title=""
                addthis:url="http://www.watermenplumbing.com/blog/2019/february/never-flush-these-things-down-the-toilet-why/"
              >
                <svg viewBox="0 0 36 36">
                  <use data-href="/cms/svg/admin/ufphi5p03ss.36.svg#pinterest" />
                </svg>
              </Link>
            </li>
            <li className="fit">
              <Link
                className="btn-colors social-link addthis_button_linkedin"
                addthis:title=""
                addthis:url="http://www.watermenplumbing.com/blog/2019/february/never-flush-these-things-down-the-toilet-why/"
              >
                <svg viewBox="0 0 36 36">
                  <use data-href="/cms/svg/admin/ufphi5p03ss.36.svg#linkedin" />
                </svg>
              </Link>
            </li>
          </ul> */}
        </div>
      </div>
      <ul className="flex-spaced-between top-margin post-paging">
        <li>
          <Link
            to="/blog/2019/january/old-house-pipes-add-what-to-your-drinking-water-"
            className="btn-style btn-colors"
          >
            Prev Post
          </Link>
        </li>
        <li>
          <Link
            to="/blog/2019/april/florida-school-plumbing-problems-warning-"
            className="btn-style btn-colors"
          >
            Next Post
          </Link>
        </li>
      </ul>
      <div className="bg-box vertical-padding-small side-padding top-margin post border-radius">
        <article className="content-style" itemProp="articleBody">
          <p>
            Some things just don’t flush! Did you know that your home or place
            of work uses a network of pipes to dispose of sewage? This means
            that everything you put down a drain, be it a toilet, shower, or
            kitchen sink, wastewater enters a pipe which is then directed
            through pumps to the city’s regional wastewater plant for treatment.
            <img
              alt="Traffic"
              className="media-right"
              src={feb19FirstOneImg}
            />
          </p>
          <p>
            Pipes, mechanical pumps and if you have a septic tank, drain fields,
            can all become clogged and damaged by items that should not be
            disposed of in your drains and toilets. These clogs and damages cost
            you money as a homeowner, renter, or taxpayer!&nbsp;Costs May show
            up as higher utility bills, plumbing and maintenance bills,
            increased rent or association fees, or even fines from the city,
            county, or state. Clogs can also cause sewage to back up into your
            homes, spill onto streets, lawns, or parking lots. Never a pretty
            sight.
          </p>
          <p>
            It’s important to remember that our wastewater treatment plants are
            not designed to treat toxic chemicals that are poured into drains.
            In turn, these harmful agents get re-introduced into our fragile
            environment.
          </p>
          <p>
            Watch what you flush! It’s a toilet, not a trash can! Here are some
            common items that are overlooked and should not be put down drains
            or toilets.
          </p>
          <ol>
            <li>Diapers</li>
            <li>“Disposable” baby wipes</li>
            <li>Towels/Rags</li>
            <li>Paper Towels</li>
            <li>Hygiene products</li>
            <li>Birth control products</li>
            <li>Chemicals</li>
            <li>Fat, cooking oils, grease</li>
            <li>Paint</li>
            <li>Gasoline</li>
            <li>Medication</li>
            <li>Garbage</li>
            <li>Plastics</li>
            <li>Kitty Litter</li>
          </ol>
        </article>
      </div>
    </div>
  </section>
</main>

  )
}

export default Feb19FirstBlog