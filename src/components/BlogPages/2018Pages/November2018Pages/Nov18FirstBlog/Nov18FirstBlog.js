import React from 'react'
import '../../../../../style/blog.css'
import HomeIcon from '../../../../../images/svg/HomeIcon.svg'
import { Link } from 'gatsby'
import nov18FirstOneImg from '../../../../../images/6-Holiday-Plumbing-Tips.jpg'
function Nov18FirstBlog() {
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
            <Link to="/blog/2018/november" target="">
              November
            </Link>
          </li>
          <li className="flex-middle relative">
            6 Holiday Plumbing Tips to Keep Your Plans Flowing Smoothly
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
      data-key={1191485}
    >
      <div className="text-align center-800 vertical-padding-tiny">
        <header className="no-pad bottom-margin-tiny">
          <h1 itemProp="headline">
            6 Holiday Plumbing Tips to Keep Your Plans Flowing Smoothly
          </h1>
        </header>
        <span className="blog-time-style relative flex-inline-middle-center">
          <time itemProp="datePublished" content="2018-11-29">
            November 29, 2018{" "}
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
                addthis:url="http://www.watermenplumbing.com/blog/2018/november/6-holiday-plumbing-tips-to-keep-your-plans-flowi/"
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
                addthis:url="http://www.watermenplumbing.com/blog/2018/november/6-holiday-plumbing-tips-to-keep-your-plans-flowi/"
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
                addthis:url="http://www.watermenplumbing.com/blog/2018/november/6-holiday-plumbing-tips-to-keep-your-plans-flowi/"
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
                addthis:url="http://www.watermenplumbing.com/blog/2018/november/6-holiday-plumbing-tips-to-keep-your-plans-flowi/"
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
            to="/blog/2018/september/master-plumber-vs-plumber-in-florida-what-s-the-"
            className="btn-style btn-colors"
          >
            Prev Post
          </Link>
        </li>
        <li>
          <Link
            to="/blog/2018/december/when-should-i-replace-my-toilet-"
            className="btn-style btn-colors"
          >
            Next Post
          </Link>
        </li>
      </ul>
      <div className="bg-box vertical-padding-small side-padding top-margin post border-radius">
        <article className="content-style" itemProp="articleBody">
          <p>
            Whether you’re having family come in for the holidays or you’re
            planning to visit them, nothing could be worse than a plumbing
            problem to clog up your good times. No one wants a house full of
            guests and a broken toilet or to come home from a beautiful visit to
            relatives to find a pipe has burst.&nbsp;
            <img
              alt="Girl sipping starbucks drink in winter"
              width={542}
              height={305}
              src={nov18FirstOneImg}
            />
          </p>
          <p>
            Stressing out about what could go wrong isn’t the answer either.
            Instead, follow these 6 tips to keeping your plumbing flowing during
            the holiday season.
          </p>
          <ol>
            <li>
              <strong>Check your faucets</strong>
            </li>
          </ol>
          <p>
            A leaky faucet isn’t just annoying. It’s also a huge waste of water.
            Likely, it’s your O-ring or washer. Having that repaired is a great
            way to end that dripping and watch your water bill shrink in size.
          </p>
          <ol start={2}>
            <li>
              <strong>Don’t be stingy about the heat</strong>
            </li>
          </ol>
          <p>
            It’s true that heating costs can add up, but even here in Florida,
            shivering it out during the holidays can lead&nbsp;to pipes that
            freeze. When temperatures cause water to freeze into ice, it expands
            and creates pressure in the pipe. This can lead to bursting. Avoid
            that by ensuring your home never dips below 55 degrees on the
            inside.
          </p>
          <ol start={3}>
            <li>
              <strong>Check your sump pump</strong>
            </li>
          </ol>
          <p>
            The cold rain in a Florida winter can cause problems for your sump
            pump. Also, because they are not used as often here, they are much
            more likely to seize up and stop working just when you need them to
            be there for you. You can pour water into the sump pump tank until
            you see it at the right level. The pump should kick on, but if it
            doesn’t, it needs to be repaired. Has it done now before it gets too
            cold?
          </p>
          <ol start={4}>
            <li>
              <strong>Don’t forget your outdoor faucets</strong>
            </li>
          </ol>
          <p>
            In the summer, it’s easy to get lazy about bringing the hose in. But
            in Florida winter, that hose needs to come off and you need to close
            the shut-off valve on your outdoor attachments. You certainly don’t
            want a leak or burst pipe there either.
          </p>
          <ol start={5}>
            <li>
              <strong>Use insulation on your pipes</strong>
            </li>
          </ol>
          <p>
            One way to prevent burst pipes in cold temperatures is to use foam
            insulation on any exposed pipes you see in your home. It will keep
            them safe from cold air and prevent the most common winter plumbing
            problem.
          </p>
          <ol start={6}>
            <li>
              <strong>Use a water heater sleeve</strong>
            </li>
          </ol>
          <p>
            Your water heater works harder in the winter to keep your water
            warm. You can use a special water heater insulation sleeve to keep
            it protected from the cold air while making it more efficient so
            that none of your holiday guests will have to take a cold shower.
          </p>
          <p>
            Watermen Plumbing in Hallandale Beach FL is here for you with more
            tips and tricks for smooth-flowing plumbing during the holidays.
            Schedule an&nbsp;
            <Link to="/contact-us">
              appointment today online
            </Link>
            &nbsp;or call us at&nbsp;
            <strong>
              <span
                id="_1"
                data-process="replace"
                data-replace="{F:P:Cookie:PPCP1/(954)%20997-5797}"
              >
                (954) 997-5797
              </span>
            </strong>
            &nbsp;to make sure your plumbing is holiday-ready!
          </p>
        </article>
      </div>
    </div>
  </section>
</main>

  )
}

export default Nov18FirstBlog