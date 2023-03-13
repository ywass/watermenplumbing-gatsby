import React from 'react'
import '../../../../../style/blog.css'
import HomeIcon from '../../../../../images/svg/HomeIcon.svg'
import { Link } from 'gatsby'
import sep18FirstOneImg from '../../../../../images/master-plumber-florida.jpg'
import sep18FirstTwoImg from '../../../../../images/bathroom-remodel-florida-hallandale-beach.jpg'
function Sep18FirstBlog() {
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
              <Link to="/blog/2018" target="">
                2018
              </Link>
            </li>
            <li className="flex-middle relative">
              <Link to="/blog/2018/september" target="">
                September
              </Link>
            </li>
            <li className="flex-middle relative">
              Master Plumber vs Plumber in Florida: What’s the Difference?
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
        data-key={1191482}
      >
        <div className="text-align center-800 vertical-padding-tiny">
          <header className="no-pad bottom-margin-tiny">
            <h1 itemProp="headline">
              Master Plumber vs Plumber in Florida: What’s the Difference?
            </h1>
          </header>
          <span className="blog-time-style relative flex-inline-middle-center">
            <time itemProp="datePublished" content="2018-09-30">
              September 30, 2018{" "}
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
                  addthis:url="http://www.watermenplumbing.com/blog/2018/september/master-plumber-vs-plumber-in-florida-what-s-the-/"
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
                  addthis:url="http://www.watermenplumbing.com/blog/2018/september/master-plumber-vs-plumber-in-florida-what-s-the-/"
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
                  addthis:url="http://www.watermenplumbing.com/blog/2018/september/master-plumber-vs-plumber-in-florida-what-s-the-/"
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
                  addthis:url="http://www.watermenplumbing.com/blog/2018/september/master-plumber-vs-plumber-in-florida-what-s-the-/"
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
              to="/blog/2018/august/why-are-plumbers-so-expensive-"
              className="btn-style btn-colors"
            >
              Prev Post
            </Link>
          </li>
          <li>
            <Link
              to="/blog/2018/november/6-holiday-plumbing-tips-to-keep-your-plans-flowi"
              className="btn-style btn-colors"
            >
              Next Post
            </Link>
          </li>
        </ul>
        <div className="bg-box vertical-padding-small side-padding top-margin post border-radius">
          <article className="content-style" itemProp="articleBody">
            <p>
              Wondering what the difference is between a master plumber and a
              plumber in Florida? When you need plumbing work done, knowing the
              difference helps to ensure you’re making the right decision when
              hiring someone for the job.
            </p>
            <p>
              It’s not just about a difference in licensing. There are
              certifications that vary by state as well. One of the most important
              differences between these two titles though is that master plumbers
              have much more experience. They are also usually more familiar with
              managing businesses and can handle the biggest plumbing problems.
              <img
                alt="Master plumber written on chalkboard. What is a Journeyman Plumber?"
                className="media-right"
                width={582}
                height={320}
                src={sep18FirstOneImg}
              />
            </p>
            <h3>
              <strong>What is a Journeyman Plumber?</strong>
            </h3>
            <p>
              A plumber, known as a journeyman plumber, has less experience and
              tends to focus on the plumbing parts of their job. To become a
              journeyman plumber, one must be able to fix blockages, install pipes
              and fixtures in compliance with building codes, work with all types
              of plumbing systems, plan and develop systems for new construction,
              retrofit plumbing in existing homes and buildings, and understand
              how to handle environmental issues, to name a few.
            </p>
            <p>
              Plumbers generally start out as trainees or apprentice plumbers that
              work with a master plumber to gain their experience as they work
              toward one day being certified as a master plumber themselves. As
              time goes on, a master plumber will likely supervise less. To earn
              the title of a master plumber, the journeyman plumber must pass an
              exam that varies by state.
            </p>
            <p>
              <img
                alt="Fancy bathroom worked on by a journeyman plumber"
                className="media-left"
                width={591}
                height={325}
                src={sep18FirstTwoImg}
              />
            </p>
            <h3>
              <strong>What is a Master Plumber?</strong>
            </h3>
            <p>
              In Florida, obtaining a plumber’s license requires that one must
              have at least four years of experience to get the journeyman
              plumbing license, be 18 years of age or older, pass the exam, and
              complete an apprenticeship. To move on to the master plumber level,
              a journeyman plumber must get a contractor’s license and a plumber’s
              license. This means&nbsp;<strong>7 years minimum experience</strong>
              &nbsp;with 2 of those years&nbsp;being&nbsp;spent serving as a
              journeyman plumber.
            </p>
            <p>
              For those looking to obtain a license at the master plumber level,
              you must obtain both your contractor’s and plumber’s license. The
              plumber’s license requires you to have the appropriate training to
              qualify, at least seven years’ experience, two of which must be
              spent as a journeyman. A contractor’s license is also required for
              you to do business in the state.
            </p>
            <p>
              Master plumbers can’t get their license in Florida until they have
              proof of insurance. This is good news for Floridians who need
              plumbing work done. While you should never hire anyone for any type
              of&nbsp;handiwork, plumbing included, without proper proof of
              insurance, credentials, or certifications, it’s good to know that a
              real master plumber isn’t allowed to operate without them.
            </p>
            <p>
              Do you have a residential or commercial plumbing problem in
              Hollywood, Miramar, Pembroke Pines, Davie, Hallandale Beach,
              Aventura, Dania Beach, Miami Lakes, or Fort Lauderdale, Florida?
              Contact Watermen Plumbing today&nbsp;
              <Link to="/contact-us">online here</Link>&nbsp;or
              call&nbsp;
              <strong>
                <span
                  id="_1"
                  data-process="replace"
                  data-replace="{F:P:Cookie:PPCP1/(954)%20800-6364}"
                >
                  (954) 800-6364
                </span>
              </strong>
              &nbsp;for expert service from master plumbers who know how to handle
              any plumbing job, big or small! Our work is 100% guaranteed!!
            </p>
          </article>
        </div>
      </div>
    </section>
  </main>
  
  )
}

export default Sep18FirstBlog