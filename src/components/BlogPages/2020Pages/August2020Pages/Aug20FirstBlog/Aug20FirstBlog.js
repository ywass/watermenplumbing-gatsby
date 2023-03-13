import React from 'react'
import '../../../../../style/blog.css'
import HomeIcon from '../../../../../images/svg/HomeIcon.svg'
import { Link } from 'gatsby'
import aug20FirstOneImg from '../../../../../images/1-1.gif'
import aug20FirstTwoImg from '../../../../../images/2-1.jpg'
import aug20FirstThreeImg from '../../../../../images/3-1.jpg'
import aug20FirstFourImg from '../../../../../images/Capture2.png'
import aug20FirstFiveImg from '../../../../../images/plasticwhale-1-1024x654.png'
import aug20FirstSixImg from '../../../../../images/6-1024x512.jpg'
import aug20FirstSevenImg from '../../../../../images/7-1024x709.png'
function Aug20FirstBlog() {
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
            <Link to="/blog/2020" target="">
              2020
            </Link>
          </li>
          <li className="flex-middle relative">
            <Link to="/blog/2020/august" target="">
              August
            </Link>
          </li>
          <li className="flex-middle relative">
            Why is there chlorine in my water?
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
      data-key={1191191}
    >
      <div className="text-align center-800 vertical-padding-tiny">
        <header className="no-pad bottom-margin-tiny">
          <h1 itemProp="headline">Why is there chlorine in my water?</h1>
        </header>
        <span className="blog-time-style relative flex-inline-middle-center">
          <time itemProp="datePublished" content="2020-08-13">
            August 13, 2020{" "}
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
                addthis:url="http://www.watermenplumbing.com/blog/2020/august/why-is-there-chlorine-in-my-water-/"
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
                addthis:url="http://www.watermenplumbing.com/blog/2020/august/why-is-there-chlorine-in-my-water-/"
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
                addthis:url="http://www.watermenplumbing.com/blog/2020/august/why-is-there-chlorine-in-my-water-/"
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
                addthis:url="http://www.watermenplumbing.com/blog/2020/august/why-is-there-chlorine-in-my-water-/"
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
            to="/blog/2020/july/common-plumbing-emergencies-to-avoid"
            className="btn-style btn-colors"
          >
            Prev Post
          </Link>
        </li>
        <li>
          <Link
            to="/blog/2020/october/plumbers-near-me"
            className="btn-style btn-colors"
          >
            Next Post
          </Link>
        </li>
      </ul>
      <div className="bg-box vertical-padding-small side-padding top-margin post border-radius">
        <article className="content-style" itemProp="articleBody">
          <p>
            <strong>Do You Know What’s in Your Water?</strong>
          </p>
          <p>
            Did you know that you have more chlorine in your tap water then you
            do in your swimming pool(check out the water we tested&nbsp;
            <Link
              rel="nofollow"
              to="https://www.instagram.com/p/Bw-Xhgona16/?igshid=1dycpr3rp23x6"
            >
              here
            </Link>
            )? And the craziest part about that is, 2/3 of our exposure to
            chlorine is absorbed through our skin when we take a bath or shower
            because our skin absorbs chlorine 6 times faster than if we were to
            drink it.
          </p>
          <p>
            Another fun fact is that the average American drinks a little more
            than 4 cups of plain water per day. The average daily amount of
            total water Americans consume is about 13.4 cups of water per day.
            Forty-eight percent of that comes from beverages other than plain
            drinking water and 18 percent from food. While we have little
            control over the kind of water that goes into the delicious burrito
            we had for lunch or the latte we got at that awesome café in the
            morning, what we do have control over is the kind of plain water
            that comes into our house.
          </p>
          <figure>
            <img
              alt="Homer Simpson Chlorine, Eh?"
              style={{ height: 368 }}
              src={aug20FirstOneImg}
            />
          </figure>
          <p>
            <strong>
              How Does the City Ensure Our Water Stays Safe Until It Reaches Us?
            </strong>
          </p>
          <p>
            Our drinking water comes from lakes, rivers, and groundwater. The
            water then flows from intake points to a treatment plant, A typical
            water treatments process goes something likes this:
          </p>
          <ol>
            <li>
              Coagulation and flocculation – Chemicals are added to the water.
              They bind with the dirt and dissolved particles, forming larger
              particles called floc.
            </li>
            <li>
              Sedimentation – The floc is heavy, so it settles to the bottom of
              the tank.
            </li>
            <li>
              Filtration – The clear water on top passes through filters
              composed of sand, gravel, and charcoal to remove dissolved
              particles such as dust, parasites, bacteria, viruses, and
              chemicals.
            </li>
            <li>
              Disinfection – Chlorine and ammonia (chloramine) are added to kill
              parasites, bacteria, viruses, germs. Fluoride is said to be added
              to prevent tooth decay*.
            </li>
          </ol>
          <p>
            Various other chemicals can be added to adjust for hardness and pH
            levels or to prevent corrosion, based on the water source depending
            on where you are in the United States.
          </p>
          <p>
            Being that the quality of water depends highly on what city you live
            in, we wanted to dig deeper and know the specifics of what exactly
            is in the water coming out of our tap and going into our body, so we
            checked our&nbsp;
            <Link
              rel="nofollow"
              target="_blank"
              to="https://www.fortlauderdale.gov/home/showdocument?id=45959"
            >
              consumer confidence report
            </Link>
            . Some of the contaminants and disinfectants in our local water
            supply are: Chloramines, (Chlorine/ammonia), Arsenic, Barium,
            Fluoride, Nitrate, Nitrite, Sodium, Haloacetic Acids, TTH [Total
            trihalomethanes], copper, and lead.
          </p>
          <figure>
            <img
              alt="Water Filtration Infographic "
              sizes="(max-width: 475px) 100vw, 475px"
              src={aug20FirstTwoImg}
            />
          </figure>
          <p>
            <strong>
              So, What Are the Effects of These Contaminants and Disinfectants?
            </strong>
          </p>
          <p>
            <strong>Chloramine</strong>&nbsp;is a combination of chlorine and
            ammonia. Some of the effects of chloramine are airway irritation,
            wheezing, difficulty breathing, cough, chest tightness, skin
            irritation, burns to the mouth, burns to the throat and stomach.
            There have been studies that have shown high correlation between
            cancer and exposure to chlorine. Chlorine can react with naturally
            occurring organic compounds, creating what are known as disinfection
            by-products (DBPs) which are associated with kidney and liver
            problems.
          </p>
          <p>
            <strong>Arsenic</strong>&nbsp;is a carcinogen in multiple organ
            systems. It can cause serious effects of the neurologic,
            respiratory, hematologic, cardiovascular, gastrointestinal, and
            other systems.
          </p>
          <p>
            <strong>Barium</strong>&nbsp;has been found to potentially cause
            gastrointestinal disturbances and muscular weakness.
          </p>
          <p>
            <strong>Fluoride</strong>&nbsp;comes from&nbsp;
            <strong>Fluorine. *</strong>Excess exposure can lead to bone disease
            known as skeletal fluorosis, Thyroid problems, neurological
            problems, acne and skin problems, cardiovascular problems, and
            reproduction issues.
          </p>
          <p>
            <strong>Nitrate/Nitrite</strong>&nbsp;can cause an increase in
            methemoglobin levels (Methemoglobinemia is a blood disorder in which
            too little oxygen is delivered to your cells) and in severe cases,
            respiratory and heart problems and death.
          </p>
          <p>
            <strong>Sodium</strong>&nbsp;in excess can cause enlarged heart
            muscle, headaches, kidney disease, kidney stones, osteoporosis,
            stroke, heart failure, and high blood pressure.
          </p>
          <p>
            <strong>Haloacetic Acids</strong>&nbsp;(HAA5) refer to the five
            haloacetic acids most found in drinking water. At higher
            concentrations of HAAs (haloacetic acids), animal studies have shown
            toxic effects in the liver, testes, pancreas, brain, nervous system,
            heart and kidney malformations, and lower growth rate in newborns.
            HAAs are found to be a potential carcinogen. They have increased the
            incidence of liver cancer and in humans, an increase in bladder
            cancer. Some studies continue to find associations between
            increasing DBP (disinfection by-products) and growth deficits in
            newborns such as lower than normal birth weight. The cancer is
            estimated to increase by about 1 in 60,000 for every 10 years of
            exposure.
          </p>
          <p>
            <strong>TTH [Total trihalomethanes]&nbsp;</strong>are a
            cancer-causing contaminant that form during water treatment with
            chlorine and other disinfectants.
          </p>
          <p>
            <strong>Copper</strong>&nbsp;in higher than normal levels can cause
            nausea, vomiting, stomach cramps, or diarrhea
          </p>
          <p>
            <strong>Lead</strong>&nbsp;in excess can cause anemia, weakness,
            kidney and brain damage.
          </p>
          <p>
            <strong>
              Still today, chlorine remains the primary disinfectant in the
              majority of municipalities in the US, because of its effectiveness
              and low cost.
            </strong>
          </p>
          <figure>
            <img
              alt="Art - Mad Scientist "
              sizes="(max-width: 849px) 100vw, 849px"
              src={aug20FirstThreeImg}
            />
          </figure>
          <p>
            <strong>That’s Fine Because I Only Drink Bottled Water…</strong>
          </p>
          <p>
            Thanks in part to aggressive marketing, the bottled water industry
            has successfully convinced most of us that water purchased in
            bottles is a healthier alternative to tap water. However, according
            to a four-year study conducted by the Natural Resource Defense
            Council, bottled water is not necessarily cleaner or safer than most
            tap water. In fact, about 25 percent of bottled water is actually
            just bottled tap water (40 percent according to the government
            estimates).
          </p>
          <figure>
            <img
              alt="Illustration of germs in a water pitcher "
              sizes="(max-width: 872px) 100vw, 872px"
              src={aug20FirstFourImg}
            />
          </figure>
          <p>
            <strong>The Economic Cost Of Plastic</strong>
          </p>
          <p>
            Besides for a high percentage of bottled water being tap water,
            let’s shed some more light on the economic effects of plastic! Did
            you know that people around the world buy a total of one million
            plastic bottles per minute? That’s a whopping 1.5 BILLION plastic
            bottles per day. Yep. And, only about 23% of those plastic bottles
            are recycled within the US. Americans purchase about 50 billion
            bottles of water bottles per year, averaging about 13 bottles per
            month for every person in the U.S.! Single use plastics frequently
            do not make it to a landfill or are recycled. A full 32% of the 78
            million tons of plastic packaging produced annually is left to flow
            into our oceans; the equivalent of pouring one garbage truck of
            plastic into the ocean every minute. This is expected to increase
            two per minute by 2030 and four per minute by 2050. This could mean
            there will be more plastic than fish in the world’s oceans. Choosing
            to buy products that avoid the production of plastic altogether
            makes a BIG difference. Even when single-use plastics are sent to
            landfills (there are 3,091) active landfills in the U.S. alone),
            they aren’t harmless. Landfill liners can leak harmful pollutants
            into the watershed and plastics on top of landfills can be carried
            away by the wind. The best way to curb single-use plastic pollution
            is to reduce your personal plastic consumption.
          </p>
          <figure>
            <img
              alt="Beached whale with trash in its mouth."
              sizes="(max-width: 1024px) 100vw, 1024px"
              src={aug20FirstFiveImg}
            />
          </figure>
          <p>
            <strong>OUT OF POCKET COSTS</strong>
          </p>
          <p>
            Okay, so now that we’ve covered the harm that plastic does to our
            planet, let’s talk money! The average cost of a single water bottle
            is $1.45. The total cost of water sold in the United States alone is
            $11.8 billion dollars and the global annual cost is $60 billion
            dollars!&nbsp;
            <strong>Practically speaking, what does this mean?&nbsp;</strong>
            What this means is, if every person purchases 13 bottles per month
            on average (approximately a total of 156 bottles per year), the cost
            of that is approximately $18.85 per month, $226.2 per year,
            $1,131.00 after five years, and $2,262.00 after 10 years.
          </p>
          <p>
            <strong>
              What Can I Do About Avoiding Contaminants and Disinfectants and
              How Can I Reduce My Personal Plastic Consumption While Also Being
              Money Conscious?
            </strong>
          </p>
          <p>Three words. Water Filtration System.</p>
          <p>
            You may say to yourself, “I already have a water filter in my
            fridge”. While most big-name water filters can reduce contaminants
            and unpleasant odor, chloramine is much harder to filter because of
            it’s strong bond. A special type of activated carbon called
            catalytic carbon is the best tool for the job. High quality water
            filters that use catalytic carbon in their filter formulation also
            offer broad protection against other contaminants in drinking water.
            The bottom line is water is not one-size-fits-all. For example, if
            your water uses chloramine, it needs to be treated by your filter
            differently than if it uses chlorine.
          </p>
          <p>
            <strong>
              What Are the Benefits of A Whole House Water Filtration System?
            </strong>
          </p>
          <p>
            The greatest reason to buy a water filtration system is to support
            the wellbeing of you and your family. Having a viable home
            filtration system decreases contaminants and disinfectants. Less
            contaminants and disinfectants in your water means great tasting
            water at every faucet. The quality of your hair, skin and your
            allergies get better. Having a whole home water filtration system
            will reduce your plumbing costs in the long run. By reducing the
            disinfectants in your water, your plumbing system lasts longer
            because these disinfectants are corrosive and eat away at your
            fixtures (the sediments of the corrosion can seep into your drinking
            water) and it also significantly reduces scaley white deposits
            around your shower heads, faucets and fixtures . Your shampoo and
            body wash costs will go down as well because hard water makes your
            skin feel slimy in the shower and creates soap curds which makes
            washing more difficult.
          </p>
          <figure>
            <img
              alt="Illustration of bathroom interior "
              sizes="(max-width: 1024px) 100vw, 1024px"
              src={aug20FirstSixImg}
            />
          </figure>
          <p>
            <strong>Different Kinds of Water Filtration Systems:</strong>
          </p>
          <p>
            There are two different kinds of water filtration systems. There is
            a something called an under-sink water filtration system and a whole
            house water filtration system.
          </p>
          <p>
            <strong>Under-Sink Water Filtration Systems</strong>&nbsp;deals
            directly with a point of use. What this means is, this kind of
            filter is specifically designed for water you are going to drink,
            cook with and potentially connect with your refrigerator.
          </p>
          <p>
            <strong>Whole House Water Filtration Systems&nbsp;</strong>deals
            with the point of entry in the household. This means that the water
            in your entire home is being treated. Everything from the water in
            your washing machine, the water coming out of your shower head, your
            toiler water and tap water are all being filtered.
          </p>
          <figure>
            <img
              alt="Illustration of water filtration system and plumber"
              sizes="(max-width: 1024px) 100vw, 1024px"
              src={aug20FirstSevenImg}
            />
          </figure>
          <p>
            It’s pretty much that simple. At Watermen Plumbing, we have the
            knowledge, experience and resources to provide you with efficient
            whole house or point of use water filtration and conditioning.
          </p>
          <p>
            <strong>YOU SHOULD SCREEN YOUR WATER&nbsp;REGULARLY!</strong>
          </p>
          <p>
            Municipal drinking water, well water, and irrigation water
            contamination emergencies are becoming more common in the news every
            day.&nbsp; Those affected were&nbsp;
            <strong>likely confident</strong>&nbsp;that their water was
            perfectly safe.&nbsp;
          </p>
          <p>​</p>
          <p>
            It is unlikely that you will be warned that your drinking water is
            contaminated before you and your family have&nbsp;
            <strong>already consumed an unhealthy level</strong>&nbsp;of
            contaminants.
          </p>
          <p>​</p>
          <p>
            Keep yourself and your family safe by regularly screening the water
            you drink&nbsp;for lead, pesticides, bacteria, and other
            contaminants
          </p>
          <p>
            For more information, or if you have any questions, give us a call @
            954 997 5797 to speak with a &nbsp;specialist.
          </p>
          <p>Watermen Plumbing Inc.</p>
          <p>
            Specializing in residential, commercial plumbing and certified water
            filtration experts
          </p>
          <p>
            Serving an 18-mile radius from our headquarters. Serving Broward and
            Dade county.
          </p>
        </article>
      </div>
    </div>
  </section>
</main>


  )
}

export default Aug20FirstBlog