import React from 'react'
import '../../../../../style/blog.css'
import HomeIcon from '../../../../../images/svg/HomeIcon.svg'
import { Link } from 'gatsby'
import apr17FirstOneImg from '../../../../../images/kitchen-sink-replacement.jpg'
function April17FirstBlog() {
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
              <Link to="/blog/2017" target="">
                2017
              </Link>
            </li>
            <li className="flex-middle relative">
              <Link to="/blog/2017/april" target="">
                April
              </Link>
            </li>
            <li className="flex-middle relative">
              Clogged Drain: Call a Plumber or Do it Myself?
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
        data-key={1191460}
      >
        <div className="text-align center-800 vertical-padding-tiny">
          <header className="no-pad bottom-margin-tiny">
            <h1 itemProp="headline">
              Clogged Drain: Call a Plumber or Do it Myself?
            </h1>
          </header>
          <span className="blog-time-style relative flex-inline-middle-center">
            <time itemProp="datePublished" content="2017-04-30">
              April 30, 2017{" "}
            </time>
          </span>
          <div className="top-margin-tiny">
           {/*  <ul
              className="flex-grid-small-center-wrap relative text-align center-800"
              id="BlogPostPageV1SocialShareThree"
            >
              <li className="fit">
                <Link
                  className="btn-colors social-link addthis_button_facebook"
                  addthis:title=""
                  addthis:url="http://www.watermenplumbing.com/blog/2017/april/clogged-drain-call-a-plumber-or-do-it-myself-/"
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
                  addthis:url="http://www.watermenplumbing.com/blog/2017/april/clogged-drain-call-a-plumber-or-do-it-myself-/"
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
                  addthis:url="http://www.watermenplumbing.com/blog/2017/april/clogged-drain-call-a-plumber-or-do-it-myself-/"
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
                  addthis:url="http://www.watermenplumbing.com/blog/2017/april/clogged-drain-call-a-plumber-or-do-it-myself-/"
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
          <li></li>
          <li>
            <Link
              to="/blog/2017/september/5-post-hurricane-plumbing-problems-to-watch-for"
              className="btn-style btn-colors"
            >
              Next Post
            </Link>
          </li>
        </ul>
        <div className="bg-box vertical-padding-small side-padding top-margin post border-radius">
          <article className="content-style" itemProp="articleBody">
            <h3>My Drain Is Clogged What to Do?</h3>
            <p>
              <strong>
                Calling a plumber Vs Drain Chemicals
                <img
                  alt="Two basin steel kitchen sink"
                  src={apr17FirstOneImg}
                />
              </strong>
            </p>
            <p>
              So, your drain is clogged, you now have a choice to make, do you
              call a plumber, which could cost around $180.00 and up, or do you
              buy a bottle of Drano for around $8.00
            </p>
            <p>
              For most consumers the $8.00 option seems like a no-brainer, so why
              call a plumber when you can clear your drain with chemicals and save
              your money?
            </p>
            <p>
              Drano works by its corrosive ability to eat away at almost anything
              in its path through a dangerous chemical reaction, unfortunately,
              that includes your pipes as well. The chemicals will only eat enough
              of the blockage to allow itself to pass through, oftentimes leaving
              you with a seemingly clear drain, for a very short period of time.
            </p>
            <p>
              Plumbers will clear your drain using a steel cable(in the trades
              referred to as a “Snake”) that will not only remove the blockage but
              when done correctly and with the appropriate equipment and
              attachments, will prolong the life of your drain by cleaning the
              walls in the process and ensuring your drain stays clearer, longer.
            </p>
            <p>
              Consumers that pour Drain cleaners down their drain can expect to
              have the life expectancy of their drains reduced to half. The
              chemical reaction eats away at the drain which will often leave you
              with a much larger repair bill at a later date.
            </p>
            <p>
              The chemicals that are poured into your drain are extremely
              corrosive and hazardous to your health, so, if you’re not careful,
              you just might blind yourself in the process or worse!.
            </p>
            <p>
              Here’s an interesting story of someone that did just that:&nbsp;
              <Link
                rel="nofollow"
                target="_blank"
                to="https://nypost.com/2015/10/01/i-blinded-myself-on-purpose-and-have-never-been-happier/"
              >
                http://nypost.com/2015/10/01/i-blinded-myself-on-purpose-and-have-never-been-happier/
              </Link>
              )
            </p>
            <p>
              It’s important to remember that all chemicals that go down the drain
              will ultimately return to our drinking water supply.
            </p>
            <p>
              Studies show that water treatment plants are having a much harder
              time cleaning our drinking water today due to an “exaggerated amount
              of chemicals and drugs” that are being poured down the drains.
            </p>
            <p>
              In conclusion, even though the drain cleaner seems like a cheaper
              option,&nbsp;
              <Link to="/contact-us">
                calling a professional is always the best option
              </Link>
              &nbsp;to avoid any health hazards and a much larger repair bill in
              the future.
            </p>
          </article>
        </div>
      </div>
    </section>
  </main>
  
  )
}

export default April17FirstBlog