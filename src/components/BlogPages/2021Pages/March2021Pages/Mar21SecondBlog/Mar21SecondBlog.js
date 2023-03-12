import React from 'react'
import '../../../../../style/blog.css'
import HomeIcon from '../../../../../images/svg/HomeIcon.svg'
import marSecondOneImg from '../../../../../images/Bad-Plumbing-Banner.jpg'
import marSecondTwoImg from '../../../../../images/shutterstock_1013760838.jpg'
import { Link } from 'gatsby'
function Mar21SecondBlog() {
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
              The Dangers of Cut-Rate Plumbing
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
        data-key={1217141}
      >
        <div className="text-align center-800 relative vertical-padding side-padding-small bg-box unlike-bg pseudo-before">
          <picture className="img-bg" role="presentation">
            <source
              media="(max-width: 500px)"
              srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              data-src="/cms/thumbnails/00/445x300/images/blog/Bad-Plumbing-Banner.jpg"
            />
            <img
              alt="Animated graphic of a flooded bathroom due to poor plumbing."
              src={marSecondOneImg}
            />
          </picture>
          <header className="no-pad bottom-margin-tiny relative">
            <h1 itemProp="headline">The Dangers of Cut-Rate Plumbing</h1>
          </header>
          <span className="blog-time-style relative flex-inline-middle-center">
            <time itemProp="datePublished" content="2021-03-05">
              March 05, 2021{" "}
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
              to="/blog/2021/january/benefits-of-hiring-a-professional-plumber"
              className="btn-style btn-colors"
            >
              Prev Post
            </Link>
          </li>
          <li>
            <Link
              to="/blog/2021/march/plumbing-problems-that-can-cause-mold"
              className="btn-style btn-colors"
            >
              Next Post
            </Link>
          </li>
        </ul>
        <div className="bg-box vertical-padding-small side-padding top-margin post border-radius">
          <article className="content-style" itemProp="articleBody">
            <p>
              Cutting corners is a bad idea when it comes to important things like
              your plumbing. In our DIY culture, where you can learn anything
              online, everyone thinks they can do what plumbers do. In reality,
              plumbing is quite complicated, and it’s one area of construction
              where many technicians consistently fail standards. Plumbing is a
              messy job, and not all plumbers are created equal. Where some
              plumbers cut corners, others go above and beyond to get the job done
              right. In the quest to save money on home improvement projects and
              simple repairs, many homeowners allow inexperienced or unscrupulous
              technicians handle their plumbing installations, repairs, and
              maintenance. If you don’t know what to look for, you may not know
              you’ve been the victim of shoddy plumbing. Homeowners could be left
              with thousands of dollars of household damage from flooding due to
              incorrect placement. These damages can require tear-out of damaged
              fixtures and major home restorations.
            </p>
            <p>
              <img
                alt=""
                src={marSecondTwoImg}
              />
            </p>
            <h2>4 Signs of You’ve Experienced Substandard Plumbing</h2>
            <p>
              There are signs your plumbing repairs are substandard, and you
              should consider bringing in another plumbing professional.
            </p>
            <ol>
              <li>
                <b>Unsecured Fixtures</b>: If your shower head wobbles, your
                faucets jiggle, or your drains shift around, you’re seeing the
                signs your plumbing is not secured. Your pipes should be mounted
                and attached to the wall, and if your fixtures attached to your
                pipes are moving around, something is not secured behind your
                walls. Plumbing fixtures shouldn’t move around when you open and
                close valves.
              </li>
            </ol>
            <ol start={2}>
              <li>
                <b>Sloppy Caulking and Measurements</b>: When you see large
                amounts of caulk, it’s a sign of poor measuring and piping. When
                the pipe connected to a fixture is too long, a plumber cutting
                corners will try to hide the problem by over caulking the area.
                The final product will look shoddy and unprofessional. Caulking
                can mold and begin to look unkempt and require immediate
                replacement.
              </li>
            </ol>
            <ol start={3}>
              <li>
                <b>Low-Quality Fixtures:</b> When you hire a plumber to replace
                your fixtures, you trust them to source quality products and
                goods. Disreputable technicians will cut corners on the quality of
                your fixtures adding the expenses to labor costs. Cheap plumbing
                fixtures will give you more problems than they will solve. A good
                and reputable plumber will find the best quality fixtures within
                your price point and install your new plumbing using best
                practices.
              </li>
            </ol>
            <ol start={4}>
              <li>
                <b>Sloppy Work; Poor Attention to Details</b>: Professional work
                should look like it. When a plumber is gluing and sealing your
                pipes, and the work looks shabby, it’s liable to haunt you later.
                Shaving money off the final bill is not worth cutting corners on
                the details. All it takes for your home to flood from shoddy
                plumbing is poorly glued angled joints or a missing seal. Quality
                plumbers understand the importance of protecting your pipes, which
                is why sealing, gluing, and plating is a priority. Protecting your
                pipes is critical to ensuring you don’t end up with water damage
                and a flooded home.
              </li>
            </ol>
            <h3>How Bargain Plumbing Can Lead to Major Damages</h3>
            <p>
              A plumber who cuts corners and forgets the details can make a
              mistake working on your pipes and cause thousands of dollars in
              damages. A careless plumber trying to save you money by doing the
              bare minimum can leave your home open to every type of calamity,
              from floods to fires.
            </p>
            <p>
              Looking for savings is not a bad thing. Most people have budgets,
              and new plumbing can be an expensive household repair or upgrade to
              your home. While looking for a bargain, don’t make the mistake of
              allowing an inexperienced or disreputable plumber to convince you
              that the details don’t matter. Good and reliable plumbing is in the
              details.
            </p>
            <p>
              <b>Some other dangers from poor plumbing include: </b>
            </p>
            <ul>
              <li>Faulty Wiring (Electrocution)</li>
              <li>Poisoning (Gas or Chemical Leaks)</li>
              <li>Biohazards (Sewage Spills/Leaks)</li>
            </ul>
            <p>
              If you recently had plumbing work completed that wasn’t up to
              quality standards, don’t sit around waiting for it to fail. Your
              home and the safety of your family are worth it! Your first concern
              when hiring a plumber should be the quality of services received and
              their reputation in the community. At Watermen Plumbing, we can help
              repair any substandard plumbing work installed in your home.{" "}
              <b>
                Call in our plumbing experts at{" "}
                <span
                  id="_1"
                  data-process="replace"
                  data-replace="{F:P:Cookie:PPCP1/(954)%20800-6364}"
                >
                  (954) 800-6364
                </span>{" "}
                or contact us online.
              </b>
            </p>
          </article>
        </div>
      </div>
    </section>
  </main>
  
  )
}

export default Mar21SecondBlog