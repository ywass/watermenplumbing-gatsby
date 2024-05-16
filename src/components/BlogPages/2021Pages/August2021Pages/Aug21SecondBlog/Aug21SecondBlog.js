import React from 'react'
import '../../../../../style/blog.css'
import HomeIcon from '../../../../../images/svg/HomeIcon.svg'
import { Link } from 'gatsby'
import aug21SecondOneImg from '../../../../../images/South-Florida-Home-Banner.jpg'
import aug21SecondTwoImg from '../../../../../images/shutterstock_1901019733.jpg'
function Aug21SecondBlog() {
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
                href="/"
              >
               <HomeIcon/>
              </Link>
            </li>
            <li className="flex-middle relative">
              <Link href="/blog" target="">
                Blog
              </Link>
            </li>
            <li className="flex-middle relative">
              <Link href="/blog/2021" target="">
                2021
              </Link>
            </li>
            <li className="flex-middle relative">
              <Link to="/blog/2021/august" target="">
                August
              </Link>
            </li>
            <li className="flex-middle relative">
              What to Look for When Buying a Home in South Florida
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
        data-key={1263828}
      >
        <div className="text-align center-800 relative vertical-padding side-padding-small bg-box unlike-bg pseudo-before">
          <picture className="img-bg" role="presentation">
            <source
              media="(max-width: 500px)"
              srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              data-src="/cms/thumbnails/00/445x300/images/blog/South-Florida-Home-Banner.jpg"
            />
            <img
              alt="Front view of a typical house found in Southern Florida."
              src={aug21SecondOneImg}
            />
          </picture>
          <header className="no-pad bottom-margin-tiny relative">
            <h1 itemProp="headline">
              What to Look for When Buying a Home in South Florida
            </h1>
          </header>
          <span className="blog-time-style relative flex-inline-middle-center">
            <time itemProp="datePublished" content="2021-08-31">
              August 31, 2021{" "}
            </time>
          </span>
        </div>
        <ul className="flex-spaced-between top-margin post-paging">
          <li>
            <Link
              to="/blog/2021/august/protect-your-pipes-this-hurricane-season"
              className="btn-style btn-colors"
            >
              Prev Post
            </Link>
          </li>
          <li>
            <Link
              to="/blog/2021/october/what-homeowners-should-know-about-septic-tanks"
              className="btn-style btn-colors"
            >
              Next Post
            </Link>
          </li>
        </ul>
        <div className="bg-box vertical-padding-small side-padding top-margin post border-radius">
          <article className="content-style" itemProp="articleBody">
            <p>
              Florida has long been a hot real estate market, but that is
              especially true today with the increase in remote work
              opportunities. No longer bound by location, Americans are leaving
              colder locations with higher costs of living for the warmer, often
              less-expensive Sunshine State.
            </p>
            <p>
              Home buying is an exciting time. Buyers put together their
              checklists of must-haves and like-to-haves. From bedrooms to lot
              size, there are many things that buyers consider. Scrolling through
              photos on real estate sites is an obsession for some, critiquing
              countertop, paint, and flooring choices.
            </p>
            <p>
              A home’s esthetics are undoubtedly important, yet there are many
              things the eyes don’t necessarily see that must be considered.
              Hurricanes, tropical storms, high winds, and flooding can undermine
              plumbing systems. Pipes can shift and leak leading to a host of
              additional problems.
            </p>
            <h2>A Home’s Hidden Problems</h2>
            <p>
              A residential plumbing system is within the house’s walls,
              foundation, and surrounding property. At{" "}
              <Link target="_blank" to="/about-us">
                Watermen Plumbing
              </Link>
              , we see plumbing issues even in newer homes. Don’t let the date of
              construction fool you. Always check all aspects of the plumbing
              system.
            </p>
            <p>
              <b>
                Below are some of the specific plumbing problems to be vigilant
                about when considering buying a home:{" "}
              </b>
            </p>
            <ul>
              <li>
                <b>Water Pressure.</b> To properly check for water pressure, turn
                on all faucets at once. Improper pipe size could lead to
                less-than-optimal water pressure. In most cases, you will want a
                ¾-inch pipe from the water source to the home and a ½ -inch pipe
                from the home entry point to the faucet. If the water flowing from
                the taps is not clear, it could be a sign of erosion in the pipes.
              </li>
              <li>
                <b>Toilets.</b> Notice whether the toilet bowl rocks or moves when
                you apply weight. Also, look for discoloration around the toilet’s
                base and sponginess of the floor around it. Improper seals,
                flanges, and other issues could be the source of the problem.
                Leaks can mean the toilet isn’t draining properly. Check for clogs
                by{" "}
                <Link
                  target="_blank"
                  to="/blog/2019/february/never-flush-these-things-down-the-toilet-why"
                >
                  flushing each toilet
                </Link>
                . A constantly running toilet may mean flappers or chains need to
                be replaced.
              </li>
              <li>
                <b>Sewer.</b> A professional can use a video camera to inspect the
                pipes from the house to the street. They will look for tree roots,
                clogs, and corrosion that can create big problems in the future.
              </li>
              <li>
                <b>Septic Tanks.</b> Strong smells, standing water, and seepage
                are signs of potential headaches. A septic inspector can verify
                how effectively the system processes solids and disperses liquids.
                Septic tanks require occasional pumping, and an inspector will see
                whether the system is due for service.
              </li>
              <li>
                <b>Wells.</b> Some homes have city or other water services while
                others rely on a private well. Before buying a home, you can buy a
                testing kit to{" "}
                <Link
                  target="_blank"
                  to="/blog/2019/january/old-house-pipes-add-what-to-your-drinking-water-"
                >
                  check for harmful bacteria
                </Link>{" "}
                and other issues. If you are considering a home with a well, you
                should also find out how deep the well is and its overall
                capacity. Since the lifespan of most wells falls between 30 and 50
                years, knowing when it was drilled is important.
              </li>
              <li>
                <b>Water Heater.</b> Water heaters generally last about a decade.
                When you are considering a home, make sure to find out the age of
                the{" "}
                <Link
                  target="_blank"
                  to="/blog/2018/june/tankless-water-heater-pros-cons"
                >
                  water heater
                </Link>
                . Signs that the heater is approaching the end of its life include
                dampness and corrosion around and on the tank.
              </li>
              <li>
                <b>Faucet Leaks.</b> That drip-drip-drip of a leaking faucet can
                do more than waste water and disturb your sleep. Those little
                drops may mean you have corrosion, defective gaskets or washers,
                or harmful mineral deposits. It also can mean a problem with the
                water pressure that could develop into damage and flooding.
              </li>
              <li>
                <b>Drainage.</b> Run water in each sink and note how quickly the
                water drains. An{" "}
                <Link
                  target="_blank"
                  to="/blog/2017/april/clogged-drain-call-a-plumber-or-do-it-myself-"
                >
                  improperly draining sink
                </Link>{" "}
                can lead to bigger, more serious issues down the road. Look for
                signs of mold or leaks under the sinks.
              </li>
              <li>
                <b>Water Damage.</b> Don’t forget to investigate under the house
                in the crawl space or basement for visual evidence of water damage
                as well as musty smells that might be caused by leaks and standing
                water.
              </li>
            </ul>
            <h2>Hiring a Professional Inspector</h2>
            <p>
              Not only should you scrutinize plumbing and other aspects, but a
              professional should also fully inspect the home.
            </p>
            <p>
              <img
                alt=""
                src={aug21SecondTwoImg}
              />
            </p>
            <p>
              <b>
                In addition to plumbing, a home inspector will investigate the
                following:
              </b>
            </p>
            <ul>
              <li>Heating and Cooling Systems</li>
              <li>Electrical Systems</li>
              <li>Windows and Doors</li>
              <li>Condition of the Roof</li>
              <li>Gutters, Exterior Cladding, and Woodwork</li>
              <li>Foundation Stability</li>
              <li>Signs of Pest Infestations</li>
            </ul>
            <p>
              Waiving a home inspection can speed up the buying and closing
              process but can also leave sellers with unexpected and expensive
              repairs. Choosing to forgo a professional inspection is risky.
            </p>
            <h2>Other Considerations</h2>
            <p>
              When considering the cost of insurance for a home, make sure to
              account for additional flood insurance. Standard homeowner’s
              insurance doesn’t cover those costs. If plumbing or other damage is
              caused by floodwaters of a hurricane or storm, you may be out of
              luck without the extra coverage.
            </p>
            <p>
              Ocean-front property is beautiful. Before buying, check on the laws
              about the land. Turtle nests and other wildlife can’t be disturbed.
              Keep in mind that anything below the mean high tide line belongs to
              the state.
            </p>
            <p>
              Many homes in Florida are part of a homeowners’ association. Take
              time to understand all the neighborhood’s policies and regulations
              before you buy.
            </p>
            <h2>Expert Plumbing Solutions</h2>
            <p>
              Whether it is a leaky faucet or a whole-house repiping, you can
              trust the skilled technicians at Watermen Plumbing for all your{" "}
              <Link target="_blank" to="/plumbing-services">
                plumbing needs
              </Link>
              . We take pride in our work and exceeding customer expectations. We
              don’t cut corners and provide the highest level of service. We back
              up our work with a one-year warranty.
            </p>
            <p>
              If you want a professional opinion on the plumbing system on a home
              you are considering, or you have discovered a problem in a home you
              have already purchased, contact us right away.
            </p>
            <p>
              <b>
                Call Watermen Plumbing at{" "}
                <span
                  id="_1"
                  data-process="replace"
                  data-replace="{F:P:Cookie:PPCP1/(954)%20997-5797}"
                >
                  (954) 997-5797
                </span>{" "}
                or reach out using{" "}
                <Link target="_blank" to="/contact-us">
                  our online form
                </Link>
                .{" "}
              </b>
            </p>
          </article>
        </div>
      </div>
    </section>
  </main>
  
  )
}

export default Aug21SecondBlog