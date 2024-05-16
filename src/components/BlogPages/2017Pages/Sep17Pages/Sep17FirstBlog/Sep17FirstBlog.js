import React from 'react'
import '../../../../../style/blog.css'
import HomeIcon from '../../../../../images/svg/HomeIcon.svg'
import { Link } from 'gatsby'
import sep17FirstOneImg from '../../../../../images/camera-inspection-flooding-pipes-repair-272x300.jpg'
import sep17FirstTwoImg from '../../../../../images/waterheater-hurricane-florida-plumbing-repair-300x157.jpg'
function Sep17FirstBlog() {
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
            <Link to="/blog/2017/september" target="">
              September
            </Link>
          </li>
          <li className="flex-middle relative">
            5 Post Hurricane Plumbing Problems to Watch For
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
      data-key={1191463}
    >
      <div className="text-align center-800 vertical-padding-tiny">
        <header className="no-pad bottom-margin-tiny">
          <h1 itemProp="headline">
            5 Post Hurricane Plumbing Problems to Watch For
          </h1>
        </header>
        <span className="blog-time-style relative flex-inline-middle-center">
          <time itemProp="datePublished" content="2017-09-12">
            September 12, 2017{" "}
          </time>
        </span>
        <div className="top-margin-tiny">
          {/* <ul
            className="flex-grid-small-center-wrap relative text-align center-800"
            id="BlogPostPageV1SocialShareThree"
          >
            <li className="fit">
              <Link
                className="btn-colors social-link addthis_button_facebook"
                addthis:title=""
                addthis:url="http://www.watermenplumbing.com/blog/2017/september/5-post-hurricane-plumbing-problems-to-watch-for/"
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
                addthis:url="http://www.watermenplumbing.com/blog/2017/september/5-post-hurricane-plumbing-problems-to-watch-for/"
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
                addthis:url="http://www.watermenplumbing.com/blog/2017/september/5-post-hurricane-plumbing-problems-to-watch-for/"
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
                addthis:url="http://www.watermenplumbing.com/blog/2017/september/5-post-hurricane-plumbing-problems-to-watch-for/"
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
            to="/blog/2017/april/clogged-drain-call-a-plumber-or-do-it-myself-"
            className="btn-style btn-colors"
          >
            Prev Post
          </Link>
        </li>
        <li>
          <Link
            to="/blog/2018/may/how-do-i-know-when-its-time-to-replace-my-garbag"
            className="btn-style btn-colors"
          >
            Next Post
          </Link>
        </li>
      </ul>
      <div className="bg-box vertical-padding-small side-padding top-margin post border-radius">
        <article className="content-style" itemProp="articleBody">
          <p>
            Now that everyone is returning back to their homes after the major
            evacuation from Florida we wanted to keep you informed about some
            problems you might be coming home to.
            <img
              alt="Man cleaning flood"
              className="media-right"
              src={sep17FirstOneImg}
            />
          </p>
          <p>
            <strong>1. Toilets not draining as fast as usual?</strong>
          </p>
          <p>
            Schedule a Sewer Line Inspection – Sewer lines are located
            underground, storm surges and flooding may cause the lines to shift
            and not&nbsp;
            <Link to="/plumbing-services/drain-issues">
              drain properly
            </Link>
            . Having your sewer line inspected will help avoid any future issues
            with your drain and should be done by a professional.
          </p>
          <p>
            <strong>2. Hidden water leaks?</strong>
            <br />
            Keep an Eye Out for&nbsp;
            <Link to="/plumbing-services/leak-detection-repair">
              Water Leaks
            </Link>
            &nbsp;– It’s common for leaks to spring up after a hurricane. If the
            pipes were under stress or if parts of your home were damaged, the
            pipes could also burst or sustain damage that causes leaks.&nbsp;
            <strong>
              Inspect your water meter while no water is running in the home
            </strong>
            , if the meter is running you likely have a slab leak. These water
            leaks require immediate attention from a professional to avoid
            further flooding, damage, and an exaggerated water bill.
          </p>
          <p>
            <strong>3. Hot water not as hot?</strong>
            <br />
            Water heaters exposed to external water can be shorted out and lose
            some or all functionality. If you notice a loss in hot water, it’s
            very likely that one of the heaters elements may have shorted out.
            This can cause water to be warm but not as hot.&nbsp; The hot water
            heater isn’t an “all or nothing” device, you can lose part of its
            heating ability and it still partly work.&nbsp; We can take a look
            and inspect it for you.
          </p>
          <p>
            <strong>4. Is your gas line leaking?</strong>
            <br />
            High winds, strong precipitation, and debris flying through the air
            can also damage your gas lines. In the event of a hurricane, always
            check your gas lines for potential leaks. Signs of a gas leak
            include smelling rotten eggs or noticing a hissing sound coming from
            the line. A gas line leak is dangerous because natural gas is
            flammable and toxic to humans. If you suspect a gas leak, call for a
            fast repair and inform the gas company right away to keep your
            family safe.
          </p>
          <p>
            <strong>5. Something doesn’t seem right</strong>
            <br />
            Call a Professional – If there are any problems with your plumbing,
            you want an&nbsp;
            <Link to="/plumbing-services/custom-home-plumbing">
              upgrade
            </Link>
            ,&nbsp;or something that just doesn’t seem right, call a
            professional to take a look. We are currently doing a low fee
            discount of&nbsp;<strong>$39.95 for a house call</strong>&nbsp;to
            review your overall system and make recommendations for repair or
            let you know you have a solid plumbing system that stormed this
            hurricane well.
            <img
              alt="Post Hurricane Damage "
              className="media-right"
              src={sep17FirstTwoImg}
            />
          </p>
          <p>
            If you have any questions about something off at your home feel free
            to comment below,&nbsp;
            <Link to="/contact-us">contact us online</Link>,
            or call us at&nbsp;
            <strong>
              <span
                id="_1"
                data-process="replace"
                data-replace="{F:P:Cookie:PPCP1/(954)%20997-5797}"
              >
                (954) 997-5797
              </span>
            </strong>
            !! We do plumbing repair and upgrades for the Hollywood, Miramar,
            Pembroke Pines, Davie, Hallandale Beach, Aventura, Dania Beach,
            Miami Lakes, and Hialeah, FL area.
          </p>
        </article>
      </div>
    </div>
  </section>
</main>

  )
}

export default Sep17FirstBlog