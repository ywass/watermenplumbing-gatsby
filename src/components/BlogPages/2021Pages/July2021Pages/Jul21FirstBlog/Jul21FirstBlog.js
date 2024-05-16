import React from 'react'
import '../../../../../style/blog.css'
import HomeIcon from '../../../../../images/svg/HomeIcon.svg'
import { Link } from 'gatsby'
import jul21FirstOneImg from '../../../../../images/shutterstock_609843980.jpg'
function Jul21FirstBlog() {
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
            <Link to="/blog/2021/july" target="">
              July
            </Link>
          </li>
          <li className="flex-middle relative">Why Are Water Heaters Round?</li>
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
      data-key={1248528}
    >
      <div className="text-align center-800 vertical-padding-tiny">
        <header className="no-pad bottom-margin-tiny">
          <h1 itemProp="headline">Why Are Water Heaters Round?</h1>
        </header>
        <span className="blog-time-style relative flex-inline-middle-center">
          <time itemProp="datePublished" content="2021-07-06">
            July 06, 2021{" "}
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
            to="/blog/2021/june/5-maintenance-tips-to-avoid-plumbing-headaches"
            className="btn-style btn-colors"
          >
            Prev Post
          </Link>
        </li>
        <li>
          <Link
            to="/blog/2021/august/protect-your-pipes-this-hurricane-season"
            className="btn-style btn-colors"
          >
            Next Post
          </Link>
        </li>
      </ul>
      <div className="bg-box vertical-padding-small side-padding top-margin post border-radius">
        <article className="content-style" itemProp="articleBody">
          <p>
            If you have a storage tank water heater, you’re probably familiar
            with this cylindrical appliance in your garage or utility closet.
            Have you ever looked at your water heater, though, and wondered why
            it’s the shape that it is?
          </p>
          <p>
            Think about it – unlike other appliances in your home, your water
            heater is designed purely for its function. Unlike your oven,
            refrigerator, or even washer and dryer, the people who designed your
            water heater didn’t have to strike a balance between aesthetics and
            optimizing performance. You might even notice that every storage
            tank water heater you’ve seen is also a cylindrical shape.
          </p>
          <p>
            So, what’s up with that? Well, when you consider what’s going on
            inside your water heater, it all makes a lot more sense.
          </p>
          <p>
            <img
              className="media-medium"
              alt=""
              src={jul21FirstOneImg}
            />
          </p>
          <h2>Pressure Distribution</h2>
          <p>
            Think about a can of soda. Just like your water heater, this is
            shaped like a cylinder. This is because a cylindrical shape is both
            practical and able to withstand the pressure exerted in all
            directions by carbonated soda. In fact, a soda can that’s just a
            tenth of a millimeter thick can contain liquid that’s held at six
            times the atmospheric pressure you’re used to breathing (about 90
            PSI)!
          </p>
          <p>
            A typical water heater is designed to hold around 150 PSI of heated
            water, which you’ll notice is considerably greater than what a soda
            can must withstand. While the water heater’s cylindrical shape does
            a good job of keeping pressure contained, too much pressure can
            breach the structure and cause an explosion. This is why water
            heaters are equipped with pressure relief valves to keep the
            pressure inside under control.
          </p>
          <h2>Heat Distribution</h2>
          <p>
            Not only is a cylindrical shape useful for evenly distributing
            pressure, but it also helps to evenly distribute heat.
          </p>
          <p>
            In a gas water heater, a burner at the bottom heats the water
            beneath it, causing it to rise. As this happens, the cooler water
            sinks toward the burner until it also gets heated and rises. This
            process works similarly in an electric water heater, which uses
            heating elements instead of a burner to distribute heat.
          </p>
          <p>
            Because of a water heater’s cylindrical shape, water will get heated
            evenly in all directions. Any other shape would either be
            impractical to keep in your home (such as a spherical tank) or
            wouldn’t be as efficient or able to withstand pressure buildup (such
            as a rectangular tank).
          </p>
          <h2>Have Another Question about Your Water Heater?</h2>
          <p>
            If you have another question about your home’s water heater, don’t
            be afraid to ask! At Watermen Plumbing, we’re proud to be of service
            to our community. Rest assured that if you have a plumbing problem
            in your home, we have the knowledge, experience, and skill it takes
            to fix it.
          </p>
          <p>
            <b>
              For more information, contact us online or call{" "}
              <span
                id="_1"
                data-process="replace"
                data-replace="{F:P:Cookie:PPCP1/(954)%20997-5797}"
              >
                (954) 997-5797
              </span>{" "}
              today!
            </b>
          </p>
        </article>
      </div>
    </div>
  </section>
</main>

  )
}

export default Jul21FirstBlog