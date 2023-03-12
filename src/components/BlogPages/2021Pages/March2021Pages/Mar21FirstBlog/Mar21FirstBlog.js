import React from 'react'
import '../../../../../style/blog.css'
import HomeIcon from '../../../../../images/svg/HomeIcon.svg'
import { Link } from 'gatsby'
import marFirstOneImg from '../../../../../images/Mold-Blog-Banner.jpg'
import marFirstTwoImg from '../../../../../images/Mold-under-sink.jpg'
import marFirstThreeImg from '../../../../../images/hidden-moisture.jpg'

function Mar21FirstBlog() {
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
            <Link to="/blog/2021/march" target="">
              March
            </Link>
          </li>
          <li className="flex-middle relative">
            Plumbing Problems That Can Cause Mold
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
      data-key={1223080}
    >
      <div className="text-align center-800 relative vertical-padding side-padding-small bg-box unlike-bg pseudo-before">
        <picture className="img-bg" role="presentation">
          <source
            media="(max-width: 500px)"
            srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
            data-src="/cms/thumbnails/00/445x300/images/blog/Mold-Blog-Banner.jpg"
          />
          <img
            alt="Mold damaged baseboard in a house due to leaking plumbing"
            src={marFirstOneImg}
          />
        </picture>
        <header className="no-pad bottom-margin-tiny relative">
          <h1 itemProp="headline">Plumbing Problems That Can Cause Mold</h1>
        </header>
        <span className="blog-time-style relative flex-inline-middle-center">
          <time itemProp="datePublished" content="2021-03-22">
            March 22, 2021{" "}
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
          <span itemProp="name">Watermen Plumbing Inc.</span>
        </address>
      </div>
      <ul className="flex-spaced-between top-margin post-paging">
        <li>
          <Link
            to="/blog/2021/march/the-dangers-of-cut-rate-plumbing"
            className="btn-style btn-colors"
          >
            Prev Post
          </Link>
        </li>
        <li>
          <Link
            to="/blog/2021/april/a-guide-to-optimizing-your-home-plumbing"
            className="btn-style btn-colors"
          >
            Next Post
          </Link>
        </li>
      </ul>
      <div className="bg-box vertical-padding-small side-padding top-margin post border-radius">
        <article className="content-style" itemProp="articleBody">
          <p>
            Damaged plumbing, water-soaked surfaces, marginal exposure to
            sunlight, and low relative humidity are the perfect conditions for
            mold to take hold in any part of your home. Of all these factors,
            problems with a home’s plumbing system are the most significant.
            Damaged plumbing sets the scene for the other conditions to become
            present, but it is also the one factor that homeowners have the most
            control over.
          </p>
          <p>
            It is unavoidable that some sections of your home will receive less
            sun exposure than others. This fact alone, however, does not make
            such areas right for mold growth if{" "}
            <Link
              to="https://cfmoldinspect.com/eliminating-indoor-moisture/"
              target="_blank"
            >
              poor ventilation and moisture-laden air
            </Link>{" "}
            are not also present. In every part of your home where there is a
            high probability for mold growth, the primary trigger for that event
            will always be excessive moisture. The most likely source of that
            water is damage to any part of the home’s plumbing.
          </p>
          <p>
            Plumbing problems in the home equals a greater likelihood of mold.
            Therefore, to prevent mold, you have to avoid plumbing problems.
            That sounds simple enough, but the challenge is that an average home
            has more than a hundred feet of plumbing. Monitoring the whole
            length of it is not always possible.
          </p>
          <p>
            What can help is knowing the types of plumbing problems that are
            most likely to result in mold and mildew growth. If you also notice
            the area where these problems frequently occur, preventing mold
            invasion of your home will be easy.
          </p>
          <p>
            Below are the plumbing issues that most commonly predispose your
            home to mold.
          </p>
          <h2>
            <img
              className="media-right media-medium"
              alt="mold under a kitchen sink due to leaking plumbing"
              src={marFirstTwoImg}
            />
            Leaks Beneath a Kitchen Sink
          </h2>
          <p>
            You might think it would be easy to tell if a pipe below your sink
            was leaking. You would either expect to hear the sound of falling
            water or the floor around the sink to be wet. However, you will only
            see these signs if the area is not enclosed or used for storage.
            Under-sink sites are one of our favorite places for hiding kitchen
            stuff while keeping them within reach. Also,{" "}
            <Link to="https://www.thespruce.com/inexpensive-kitchen-updates-4158938">
              to improve the kitchen’s aesthetics
            </Link>
            , homeowners will enclose this area to hide ugly piping. If the
            underneath area of your sink is an enclosure or used for storing
            items, leaks there will be harder to detect, and mold growth will
            become a real possibility.
          </p>
          <h2>Standing Water</h2>
          <p>
            Familiar events that lead to standing water in the home are clogged
            drains and blocked sewers. More often than not, these happen in the
            bathroom. Any plumbing problem that causes water to drain slowly
            gives it time to penetrate below the surface of the adjoining areas.
            Water seeps into the flooring, walls, and tile spaces, where it can
            remain and produce conditions necessary for mold growth. It is
            difficult to detect this issue. That is because once the standing
            water drains, homeowners assume that the problem is over. What they
            don’t realize is that some water goes into the walls and flooring
            instead of the drain.
          </p>
          <h2>Basement Moisture</h2>
          <p>
            Moisture in the basement may happen as a result of plumbing issues
            or adverse weather. Basements are naturally more humid than the rest
            of the home because they often have poor ventilation and very little
            sunlight coming into them. Additionally, many of the home’s
            water-bearing features pass through the basement, such as
            pressurized hot or cold water supply lines, sumps, and drain pipes.
            Furthermore, the basement has exposure to water from rainfall and
            snowmelt. These factors join forces to increase the probability of
            water pooling and plumbing problems in the basement and the onset of
            conditions that predispose the area to mold.
          </p>
          <h2>
            <img
              className="media-right media-medium"
              alt="mold displayed along a baseboard and lower portion of the walls in a corner of a room."
              src={marFirstThreeImg}
            />
            Hidden Leaks
          </h2>
          <p>
            There is no lack of opportunities for plumbing leaks to happen in
            some out-of-sight area of the home since a decent part of the home’s
            piping runs through its walls. When pipe bursts happen inside the
            walls, they don’t leave a pool of water as a tell-tale sign of the
            incident. The water is released into and absorbed by the surrounding
            drywall and insulation. The only signs of the leak may be walls that
            are uncharacteristically cool or very slightly discolored. However,
            if the leaking pipe is in a hidden area of the wall, detection
            becomes even more difficult. The best way to keep ahead of this
            problem is through regular inspections and timely maintenance.
          </p>
          <h2>Any Kind of Flooding</h2>
          <p>
            Most of the house building materials are porous; they absorb and
            retain water. During home flooding following human error or natural
            events, the building soaks up water. The longer the home stays
            flooded, the more time the water has to work its way into the home.
            But after removing the floodwater and cleaning, the water absorbed
            by the home’s surfaces and contents is not automatically released.
            Instead, it will remain trapped in the walls, floors, wooden
            structures, and other materials in the home. Over time, that water
            leads to deterioration of the building and also creates room for
            mold growth.
          </p>
          <h2>Do You Need a Plumber’s Help?</h2>
          <p>
            When you need help with your home’s plumbing, Watermen Plumbing,
            Inc. can be there to help. It’s never a comforting sign to notice
            mold growth in your home or a plumbing problem, but signs of one can
            be signs of the other. Get the help you need when your plumbing’s
            acting up by contacting us today to schedule an appointment.
          </p>
          <p>
            <b>
              Get in touch with Watermen Plumbing, Inc. by{" "}
              <Link to="/contact-us">
                connecting with us online
              </Link>{" "}
              or by calling{" "}
              <Link
                to="tel:(954) 800-6364"
                id="_1"
                data-replace-href="tel:{F:P:Cookie:PPCP1/(954)%20800-6364}"
              >
                <span
                  id="_2"
                  data-process="replace"
                  data-replace="{F:P:Cookie:PPCP1/(954)%20800-6364}"
                >
                  (954) 800-6364
                </span>
              </Link>
              .
            </b>
          </p>
        </article>
      </div>
    </div>
  </section>
</main>

  )
}

export default Mar21FirstBlog