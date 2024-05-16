import React from 'react'
import '../../../../../style/blog.css'
import HomeIcon from '../../../../../images/svg/HomeIcon.svg'
import one22Img from '../../../../../images/shutterstock_319418210[1].jpg'
import two22Img from '../../../../../images/shutterstock_1742376911[1].jpg'
import three22Img from '../../../../../images/9r_1xl37fe_.gif'
import four22Img from '../../../../../images/shutterstock_708778108[1].jpg'
import five22Img from '../../../../../images/Screenshot_105.jpg'
import { Link } from 'gatsby'
function Jan22FirstBlog() {
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
            <Link to="/blog/2022" target="">
              2022
            </Link>
          </li>
          <li className="flex-middle relative">
            <Link to="/blog/2022/january" target="">
              January
            </Link>
          </li>
          <li className="flex-middle relative">
            Read This Before You Buy a House in Florida
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
      data-key={1302513}
    >
      <div className="text-align center-800 relative vertical-padding side-padding-small bg-box unlike-bg pseudo-before">
        <picture className="img-bg" role="presentation">
          <source
            media="(max-width: 500px)"
            srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
            data-src="/cms/thumbnails/00/445x300/images/blog/shutterstock_319418210[1].jpg"
          />
          <img
           
            alt="A couple (man and woman) admiring a 2-story Florida house and asking questions before purchasing"
            src={one22Img}
          />
        </picture>
        <header className="no-pad bottom-margin-tiny relative">
          <h1 itemProp="headline">
            Read This Before You Buy a House in Florida
          </h1>
        </header>
        <span className="blog-time-style relative flex-inline-middle-center">
          <time itemProp="datePublished" content="2022-01-21">
            January 21, 2022{" "}
          </time>
        </span>
        <address
          className="title-style-5 title-color-5 relative"
          rel="author"
          itemProp="author"
          itemScope=""
          itemType="http://schema.org/Person"
        >
          By
          <span itemProp="name">Watermen Plumbing</span>
        </address>
      </div>
      <ul className="flex-spaced-between top-margin post-paging">
        <li>
          <Link
            to="/blog/2021/october/what-homeowners-should-know-about-septic-tanks"
            className="btn-style btn-colors"
          >
            Prev Post
          </Link>
        </li>
        <li></li>
      </ul>
      <div className="bg-box vertical-padding-small side-padding top-margin post border-radius">
        <article className="content-style" itemProp="articleBody">
          <p>
            Moving can be expensive, especially if you’re moving from out of
            state. Whether they’re moving for family reasons, a lifestyle
            change, a new job, or economic reasons, people are flocking to the
            Sunshine State. According to{" "}
            <Link target="_blank" to="https://www.move.org/moving-stats-facts/">
              research by Move.org
            </Link>{" "}
            and the U.S. Census Bureau, 27.1 million Americans moved in 2021,
            and Florida was the #1 state people moved to (as it was in 2020 as
            well).
          </p>
          <h2>​5 Questions to Ask When Buying a House in Florida</h2>
          <p>
            Navigating a hot real estate market is hard because while the home
            inventory is low, there is a lot of competition. Buyers may feel
            stressed or rushed concerning finding their dream home, and they may
            just jump on any deals. To avoid making a rushed decision and having
            to deal with unexpected costs, here are 5 important questions you
            should ask before buying a home.&nbsp;
          </p>
          <h3>Is My House in a Flood Zone?</h3>
          <p>
            <img
              className="media-small"
              alt=""
              src={two22Img}
            />
          </p>
          <div>
            <img
              width={15}
              title="Click and drag to move"
              height={15}
              role="presentation"
              draggable="true"
              alt=""
              src={three22Img}
            />
            ​
            <p>
              A flood zone is an area where water will pool during torrential
              rainfalls.{" "}
              <b>
                Buying a house in a flood zone can mean having to budget for
                additional costs and needs, such as:
              </b>
            </p>
            <ul>
              <li>
                <b>Flood insurance.</b> To secure a mortgage loan, your lender
                may require that you purchase flood insurance.
              </li>
              <li>
                <b>Protective measures.</b> While living in a flood zone doesn’t
                mean you need to panic at the sight of heavy rain, you should
                learn what to expect in the event of a flood and how you can
                protect your home (i.e. installing a backup battery for your
                sump pump, having sandbags on hand, etc.).
              </li>
            </ul>
            <p>
              To find out if a home is located in a flood zone, you can use the
              flood risk maps provided by the{" "}
              <Link target="_blank" to="https://www.fema.gov/flood-maps">
                Federal Emergency Management Agency (FEMA)
              </Link>{" "}
              and{" "}
              <Link
                target="_blank"
                to="https://floodfactor.com/state/florida/12_fsid"
              >
                Flood Factor
              </Link>
              . While you can use FEMA’s map to research your insurance risks,
              Flood Factor can be used to assess the likelihood of flooding in
              the future.
            </p>
          </div>
          <h3>What Are My Drains Made Of?</h3>
          <p>
            Until about the late ‘70s, drains were made from cast iron. These
            drains have a life span of 50 years, and most iron drains are now
            either corroded, eroded, cracked, or collapsed, which can cause
            backups. Drains installed today are made from Polyvinylchloride
            (PVC), and they have a much longer lifespan. However, if they are
            not installed correctly, they won’t do you much good and can cause
            backups as well.
          </p>
          <p>
            Replacing drains is a very costly and intrusive process.
            <b>
              {" "}
              Before purchasing a house, to avoid unexpected, costly repairs,
              you should:{" "}
            </b>
          </p>
          <ul>
            <li>
              <b>Have a home inspection contingency in your sales contract.</b>{" "}
              Typically, home inspections are not required, and buyers may skip
              the inspection to save time and money. However, you can include a
              time period, in your contract, for which you can have a
              professional inspection performed. A home inspector will look for
              drainage issues throughout the home.
            </li>
            <li>
              <b>Reach out to Watermen Plumbing.</b> We offer{" "}
              <Link
                target="_blank"
                to="/plumbing-services/drain-issues/camera-drain-inspection"
              >
                camera drain inspections
              </Link>{" "}
              to potential homeowners so that you can have a clear picture/video
              of what plumbing issues you may inherit.
            </li>
          </ul>
          <h3>Is the House Running on a Septic or Sewer System?</h3>
          <p>
            <img
              alt=""
              className="media-small"
              src={four22Img}
            />
          </p>
          <p>
            While both systems have their advantages and disadvantages, many
            homeowners do not maintain their septic tanks, which means a buyer
            inherits the stress of getting repairs done. These repairs can also
            be costly and involved. Be sure to have an inspection done of the
            septic tank (when they are full and accepting additional sewage) and
            leeching beds. Beware of tanks that are empty as this may indicate a
            problem with the drain field.
          </p>
          <p>
            Please be advised: Septic tanks should not be confused with holding
            tanks. While both store the wastewater from your home, a holding
            tank needs to be emptied once it reaches its capacity. A septic tank
            system treats your wastewater and empties itself into the drain
            field, and this system only needs to be pumped annually.
          </p>
          <h3>What Condition Are the Current Plumbing Fixtures in?</h3>
          <p>
            You should know your pipework before you move in, so you can avoid
            having to deal with costly repairs, restoration work, and/or mold
            remediation that may be needed after a water leak. Leaks can be
            caused by faulty, worn, or unmaintained valves. If you hired a home
            inspector, they should check for leaks and drainage issues. However,
            sometimes these issues only become apparent once you settle in, and
            depending on the severity of the leak, you and your family may have
            to temporarily move out of the house while work is being done.
          </p>
          <h3>Was This House “Flipped”?</h3>
          <p>
            It’s very convenient to move into a house that has been updated, but
            sometimes this can be a big red flag. Many flipped properties may
            look good on the outside but it’s what’s on the inside that really
            counts. There are home flippers who will get a house that’s in bad
            shape and spend a minimal amount of money to make it look good on
            the surface for maximum resale. You may find yourself having to tear
            everything down and do it from scratch, which often costs double.
          </p>
          <p>
            <img alt="" src={five22Img} />
          </p>
          <h2>How We Can Help Homeowners</h2>
          <p>
            We understand that buying a home and/or having to deal with plumbing
            issues can be stressful, which is why we are happy to help clients
            come up with solutions for plumbing needs, such as:
          </p>
          <ul>
            <li>
              <Link
                target="_blank"
                to="/plumbing-services/sewer-services"
              >
                Sewer services
              </Link>{" "}
              (i.e. installation, repair, conversion, etc.)&nbsp;
            </li>
            <li>
              <Link
                target="_blank"
                to="/plumbing-services/drain-issues"
              >
                Drain services
              </Link>{" "}
              (i.e. inspection, cleaning, or snaking)&nbsp;
            </li>
            <li>
              <Link
                target="_blank"
                to="/plumbing-services/whole-home-repiping"
              >
                Whole-home repiping
              </Link>
              &nbsp;
            </li>
            <li>
              <Link
                target="_blank"
                to="/plumbing-services/plumbing-upgrades"
              >
                Plumbing upgrades
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                to="/plumbing-services/custom-home-plumbing"
              >
                Custom home plumbing
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                to="/plumbing-services/leak-detection-repair"
              >
                Leak detection and repairs
              </Link>
            </li>
            <li>
              <Link to="/plumbing-services/toilets">
                Toilet services
              </Link>{" "}
              (i.e. repairs, replacements, etc.)&nbsp;
            </li>
            <li>
              <Link
                target="_blank"
                to="/plumbing-services/other-services"
              >
                And more
              </Link>
            </li>
          </ul>
          <p>
            <b>
              Known for our professional, high-quality service, and innovation,
              the experienced technicians at Watermen Plumbing are equipped to
              help you with your plumbing needs—whether you need help evaluating
              a home’s plumbing system, re-piping a home, fixing a broken water
              heater, etc.{" "}
              <Link target="_blank" to="/contact-us">
                Contact Watermen Plumbing online
              </Link>{" "}
              or at{" "}
              <span
                id="_1"
                data-process="replace"
                data-replace="{F:P:Cookie:PPCP1/(954)%20997-5797}"
              >
                (954) 997-5797
              </span>{" "}
              to book a service today.
            </b>
          </p>
        </article>
      </div>
    </div>
  </section>
</main>

  )
}

export default Jan22FirstBlog