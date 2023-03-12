import React from 'react'
import '../../../../../style/blog.css'
import HomeIcon from '../../../../../images/svg/HomeIcon.svg'
import { Link } from 'gatsby'
import aug21FirstOneImg from '../../../../../images/Florida-Hurricane-Flooding.jpg'
import aug21FirstTwoImg from '../../../../../images/shutterstock_1457655791.jpg'
import aug21FirstThreeImg from '../../../../../images/shutterstock_231995860.jpg'
function Aug21FirstBlog() {
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
              <Link to="/blog/2021" target="">
                2021
              </Link>
            </li>
            <li className="flex-middle relative">
              <Link to="/blog/2021/august" target="">
                August
              </Link>
            </li>
            <li className="flex-middle relative">
              Protect Your Pipes this Hurricane Season
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
        data-key={1258441}
      >
        <div className="text-align center-800 relative vertical-padding side-padding-small bg-box unlike-bg pseudo-before">
          <picture className="img-bg" role="presentation">
            <source
              media="(max-width: 500px)"
              srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              data-src="/cms/thumbnails/00/445x300/images/blog/Florida-Hurricane-Flooding.jpg"
            />
            <img
              alt="Flooded Florida neighborhood street."
              src={aug21FirstOneImg}
            />
          </picture>
          <header className="no-pad bottom-margin-tiny relative">
            <h1 itemProp="headline">Protect Your Pipes this Hurricane Season</h1>
          </header>
          <span className="blog-time-style relative flex-inline-middle-center">
            <time itemProp="datePublished" content="2021-08-13">
              August 13, 2021{" "}
            </time>
          </span>
        </div>
        <ul className="flex-spaced-between top-margin post-paging">
          <li>
            <Link
              to="/blog/2021/july/why-are-water-heaters-round-"
              className="btn-style btn-colors"
            >
              Prev Post
            </Link>
          </li>
          <li>
            <Link
              to="/blog/2021/august/what-to-look-for-when-buying-a-home-in-south-flo"
              className="btn-style btn-colors"
            >
              Next Post
            </Link>
          </li>
        </ul>
        <div className="bg-box vertical-padding-small side-padding top-margin post border-radius">
          <article className="content-style" itemProp="articleBody">
            <p>
              We’re in the middle of hurricane season and NOAA’s Climate
              Prediction Center says that atmospheric and oceanic conditions
              remain conducive for an{" "}
              <Link
                target="_blank"
                to="https://www.cpc.ncep.noaa.gov/products/outlooks/hurricane.shtml"
              >
                above-average hurricane season
              </Link>{" "}
              in 2021.
            </p>
            <p>
              The latest outlook predicts 15 to 21 named storms (winds of 39 mph
              or greater) and 7 to 10 hurricanes (winds of 74 mph or greater),
              with 3 to 5 of them becoming major hurricanes (Category 3, 4, or 5
              with winds 111 mph or greater).
            </p>
            <p>
              With this kind of forecast, it’s important to take steps to keep
              your plumbing system healthy before and after the storms that we are
              prone to experience here in Florida.
            </p>
            <p>
              <img
                className="media-right media-medium"
                alt=""
                src={aug21FirstTwoImg}
              />
            </p>
            <h2>Pre-Storm Planning</h2>
            <p>
              Since there is no way to predict how bad any particular storm will
              be at your home, it is always safest to assume your house will be
              subjected to high winds, flooding, and debris. A hurricane will
              exacerbate any existing problem. Common problems turn into
              destructive problems under the extreme conditions of tropical storms
              and hurricanes.{" "}
              <b>
                If you have any questions about the current health of your
                plumbing, one of our experienced technicians at Watermen Plumbing
                can inspect your plumbing for red-flag issues.
              </b>
            </p>
            <p>
              <b>
                When you are preparing for a storm, consider taking the following
                steps:
              </b>
            </p>
            <ul>
              <li>
                <b>Check outdoor drains for debris.</b> During normal daily
                weather, it is common for debris to gather around and in the
                drains. When a drain is already clogged with trash, it cannot
                handle the additional water and rubbish that comes with heavy rain
                and possible floodwaters.
              </li>
              <li>
                <b>Turn off your main water valve.</b> Turning off the valve can
                protect your water from external contamination. Open the tap
                farthest away from the mainline so that air can still get into the
                plumbing system. Buy plenty of drinkable water to have on hand and
                fill your bathtub with water to use when you need to flush the
                toilet.
              </li>
              <li>
                <b>Turn off your hot water heater.</b> Leaving the hot water
                heater on puts undue pressure on your system.
              </li>
            </ul>
            <h2>Post-Storm Inspection</h2>
            <p>
              When it is safe to be outside after the storm, inspect your outside
              drains again for debris. Cleaning your yard of debris will help keep
              that rubbish from eventually ending up in your drains. Check whether
              your water main valve is in good working order.
            </p>
            <h2>Signs of Plumbing Problems</h2>
            <p>
              Once you turn on your main water valve and hot water heater, it is
              important to look for signs of{" "}
              <Link
                target="_blank"
                to="/blog/2017/september/5-post-hurricane-plumbing-problems-to-watch-for"
              >
                damage to your pipes and plumbing system
              </Link>
              , despite any preventative efforts you may have taken.
            </p>
            <p>
              <b>
                You should call the experts at Watermen Plumbing if you notice any
                of the following:
              </b>
            </p>
            <ul>
              <li>
                <b>Gurgling noises in your pipes or toilet.</b> These noises are
                signs that air is trapped in your pipes and having trouble getting
                past a blockage. This could be caused by either a clog or a broken
                pipe.
              </li>
              <li>
                <b>Your hot water heater malfunctions.</b> Having a professional
                look at a malfunctioning water heater is critical because trying
                to use a damaged hot water heater can cause fires. The heater can
                even explode. Only a professional should inspect a water heater
                that is underwater.
              </li>
              <li>
                <b>Multiple clogged drains.</b> When{" "}
                <Link
                  target="_blank"
                  to="/blog/2017/april/clogged-drain-call-a-plumber-or-do-it-myself-"
                >
                  several drains are clogged
                </Link>
                , especially those in areas you don’t use as often, it is a sign
                of a larger problem, and you most likely have debris in your
                pipes.
              </li>
              <li>
                <b>Sewage backing up in your toilets.</b> When you have sewage in
                your toilets, bathtubs, or sinks, you need to contact a Watermen
                Plumbing technician right away. This{" "}
                <Link
                  target="_blank"
                  to="/blog/2020/july/common-plumbing-emergencies-to-avoid"
                >
                  plumbing emergency
                </Link>{" "}
                isn’t just unsightly and foul smelling. It is also dangerous,
                often contaminated with bacteria and other harmful substances.
              </li>
              <li>
                <b>Leaking pipes.</b> Not all leaks are immediately evident or
                visible to the eye. If the number on your water meter continues to
                increase but you have no water running, this is a sign that you
                have a leak. Sometimes pipes shift in the ground due to flooding
                causing leaks big and small.
              </li>
            </ul>
            <p>
              <img
                alt=""
                src={aug21FirstThreeImg}
              />
            </p>
            <h2>Time for Professional Plumbing Services</h2>
            <p>
              Our plumbing professionals at Watermen Plumbing can help you
              optimize your plumbing system before the storm and repair any damage
              that resulted.
            </p>
            <p>
              We’ve been serving homeowners and businesses in Hallandale Beach and
              the surrounding communities since 2015. Our plumbing expertise is
              top-notch, and we pride ourselves on providing amazing customer
              service.
            </p>
            <p>
              <b>Count on us for all your plumbing needs, including:</b>
            </p>
            <ul>
              <li>Leaks</li>
              <li>Water Heaters</li>
              <li>
                <Link
                  target="_blank"
                  to="/blog/2018/june/tankless-water-heater-pros-cons"
                >
                  Tankless Water Heaters
                </Link>
              </li>
              <li>Sewer Line Installation and Replacement</li>
              <li>
                <Link
                  target="_blank"
                  to="/blog/2020/november/plumbing-upgrades-that-will-increase-your-home-s"
                >
                  Plumbing Upgrades
                </Link>
              </li>
              <li>Backwater Valves</li>
              <li>Custom Home Plumbing</li>
              <li>Commercial Plumbing</li>
              <li>Water Filtration Products</li>
            </ul>
            <p>
              <b>Whether your plumbing system needs repairs or </b>
              <Link
                target="_blank"
                to="/blog/2021/june/5-maintenance-tips-to-avoid-plumbing-headaches"
              >
                <b>maintenance</b>
              </Link>
              <b>
                , we can handle projects of all sizes. Call us today at{" "}
                <span
                  id="_1"
                  data-process="replace"
                  data-replace="{F:P:Cookie:PPCP1/(954)%20800-6364}"
                >
                  (954) 800-6364
                </span>{" "}
                or reach us through{" "}
              </b>
              <Link target="_blank" to="/contact-us">
                <b>our online form</b>
              </Link>
              <b>. </b>
            </p>
          </article>
        </div>
      </div>
    </section>
  </main>
  
  )
}

export default Aug21FirstBlog