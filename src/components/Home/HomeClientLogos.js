import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { PrismicRichText } from '@prismicio/react'
import tltBdrImg from "../../images/tlt-bdr.png";
import tltBdr2Img from "../../images/tlt-bdr2.png";

const HomeClientLogos = ({ slice }) => {
    const { primary, items } = slice
    //const { content, heading, sub_heading, title, image, button_text, button_link } = primary
    return (
        <>
            <section
                className="awards v1 light-bg bg-image ui-repeater"
                id="AwardsV1"
                data-role="scroller"
                data-auto-advance="true"
                data-infinite="true"
                data-onvisible="show"
            >
                {/* <picture
              className="img-bg bg-position"
              role="presentation"
              data-role="picture"
            >
              <source
                media="(max-width: 500px)"
                srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                data-src="../../images/awards-v1-bg-mobile.jpg"
              />
              <img
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                alt=""
                data-src="../../images/awards-v1-bg.jpg"
              />
            </picture> */}
                <div className="main">
                    <div className="awards-list" data-role="container">
                        <ul className="flex-middle auto-responsive" data-role="list">

                                {items &&
                                    items.map((item, index) => {
                                        return (
                                                <li key={index}
                                                    className="fifth"
                                                    data-role="item"
                                                    data-item="i"
                                                    data-key={30661}
                                                >
                                                     <div className="side-padding-medium fit text-center">
                                                <img src={item.logo.url} alt={item.logo.alt} className='w-auto text-center mx-auto my-10' />
                                                </div>
                                            </li>
                            )
                                })}


                    {/* <li
                                className="fifth"
                                data-role="item"
                                data-item="i"
                                data-key={30661}
                            >
                                <div className="side-padding-medium fit text-center">
                                    <img
                                        alt="Home Advisor Top Rated"
                                        title="Home Advisor Top Rated"
                                        src={HomeAdvisorImg}
                                    />
                                </div>
                            </li>
                            <li
                                className="fifth"
                                data-role="item"
                                data-item="i"
                                data-key={30662}
                            >
                                <div className="side-padding-medium fit text-center">
                                    <img
                                        alt="Homeadvisor -  Elite Service"
                                        title="Homeadvisor -  Elite Service"
                                        src={ToppingImg}
                                    />
                                </div>
                            </li>
                            <li
                                className="fifth"
                                data-role="item"
                                data-item="i"
                                data-key={30663}
                            >
                                <div className="side-padding-medium fit text-center">
                                    <img
                                        alt="BBB Accredited A+ Rating"
                                        title="BBB Accredited A+ Rating"
                                        src={BBBImg}
                                    />
                                </div>
                            </li>
                            <li
                                className="fifth"
                                data-role="item"
                                data-item="i"
                                data-key={30664}
                            >
                                <div className="side-padding-medium fit text-center">
                                    <img
                                        alt="100% Guarantee"
                                        title="100% Guarantee"
                                        src={HiclipartImg}
                                    />
                                </div>
                            </li>
                            <li
                                className="fifth"
                                data-role="item"
                                data-item="i"
                                data-key={30994}
                            >
                                <div className="side-padding-medium fit text-center">
                                    <img
                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                        alt="Hollywood Chamber of Commerce"
                                        title="Hollywood Chamber of Commerce"
                                        data-src="../../images/HollywoodChamber-logo.png"
                                    />
                                </div>
                            </li>
                            <li
                                className="fifth"
                                data-role="item"
                                data-item="i"
                                data-key={30995}
                            >
                                <div className="side-padding-medium fit text-center">
                                    <img
                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                        alt="Certified Flow-tech expert"
                                        title="Certified Flow-tech expert"
                                        data-src="../../images/flowtech.png"
                                    />
                                </div>
                            </li>
                            <li
                                className="fifth"
                                data-role="item"
                                data-item="i"
                                data-key={30996}
                            >
                                <div className="side-padding-medium fit text-center">
                                    <img
                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                        alt="Superpro House Call Pro"
                                        title="Superpro House Call Pro"
                                        data-src="../../images/superhero.png"
                                    />
                                </div>
                            </li> */}
                </ul>
            </div>
        </div >
            </section >
        </>
    )
}
export default HomeClientLogos


export const query = graphql`
fragment homeClientLogos on PrismicHomepageDataBodyHomeClientLogos {
id
items {
  logo {
    alt
    url
    gatsbyImageData(layout: CONSTRAINED, width: 400)
  }
}
slice_type
}
`