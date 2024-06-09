import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { PrismicRichText } from '@prismicio/react'
import tltBdrImg from "../../images/tlt-bdr.png";
import tltBdr2Img from "../../images/tlt-bdr2.png";

const HomeOurSpecials = ({ slice }) => {
    const { primary, items } = slice
    const { heading, sub_heading } = primary
    return (
        <>
            <section
                className="coupon v10 light-bg items-touching text-center bg-image bg-box-unlike"
                id="CouponV10"
                data-onvisible="show"
                data-role="scroller"
            >
                <picture
                    className="img-bg bg-position"
                    role="presentation"
                    data-role="picture"
                >
                    <source
                        media="(max-width: 500px)"
                        srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                        data-src="../../images/coupons-v10-bg-mobile.jpg"
                    />
                    <img alt="" src="../../images/coupons-v10-bg.jpg" />
                </picture>
                <div className="main">
                    <header className="text-align center-800" id="CouponV10Header">

                        <PrismicRichText
                            field={heading.richText}
                            components={{
                                heading2: ({ children }) => (
                                    <h2 className='' id="">
                                        {children}
                                    </h2>
                                )
                            }}
                        />
                        <PrismicRichText
                            field={sub_heading.richText}
                            components={{
                                heading2: ({ children }) => (
                                    <h2 className='' id="">
                                        {children}
                                    </h2>
                                )
                            }}
                        />

                        <img className="header-flair" src={tltBdrImg} />
                    </header>
                    <div
                        id="CouponV10List"
                        className="ui-repeater"
                        data-role="container"
                    >
                        <ul
                            className="flex-grid-large auto-responsive"
                            data-role="list"
                        >
                            {items &&
                                items.map((item, index) => {
                                    return (
                                        <li className="coupon-style third border-radius featured flex-column" key={index}>
                                            <div className="coupon-border pseudo-after bg-box auto">
                                                <img src={item.coupon.document.data.image.url} alt={item.coupon.document.data.image.alt} className='w-auto text-center mx-auto my-10' />
                                                <div className="info side-padding-large vertical-padding-small relative text-center full">
                                                    <div className="full side-padding-small relative">
                                                        <strong className="title">
                                                            <strong className="title-font ">
                                                                <PrismicRichText className=""
                                                                    field={item?.coupon?.document?.data?.title?.richText}
                                                                    components={{
                                                                        paragraph: ({ children }) => (
                                                                            <p >
                                                                                {children}
                                                                            </p>
                                                                        )
                                                                    }}
                                                                />
                                                            </strong>
                                                            <PrismicRichText className=""
                                                                field={item?.coupon?.document?.data?.sub_title?.richText}
                                                                components={{
                                                                    paragraph: ({ children }) => (
                                                                        <p >
                                                                            <span className='title-style-2 title-color-2'>{children}</span>
                                                                        </p>
                                                                    )
                                                                }}
                                                            />
                                                        </strong>
                                                        <div className="top-margin-tiny valid note-style">
                                                            <div className='text-white max-w-full'> <small>{item?.coupon?.document?.data?.details}</small></div>
                                                        </div>
                                                    </div>
                                                    <div className="top-margin-small">
                                                        <Link
                                                            className="btn v1"
                                                            to="/coupons/print"
                                                            target="_blank"
                                                        >
                                                            Print
                                                        </Link>
                                                    </div>
                                                </div>

                                            </div>

                                        </li>
                                    )
                                })}



                        </ul>
                        <div
                            className="scrolling-list-nav top-margin horizontal flex-middle-center relative text-center"
                            data-role="arrows"
                        >
                            <button
                                title="View previous item"
                                aria-label="View previous item"
                                data-action="Prev"
                            >
                                <svg className="site-arrow">
                                    <use href="includes/flair.svg#arrow-left" />
                                </svg>
                            </button>
                            <span className="paging" data-role="paging">
                                <span data-role="page-active" /> /{" "}
                                <span data-role="page-total" />
                            </span>
                            <button
                                title="View next item"
                                aria-label="View next item"
                                data-action="Next"
                            >
                                <svg className="site-arrow">
                                    <use href="includes/flair.svg#arrow-right" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div id="CouponV10BtnCon">
                        <div className="top-margin text-center">
                            <Link
                                to="/coupons"
                                className="btn v1"
                                aria-labelledby="CouponV10Header"
                            >
                                view More Deals
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default HomeOurSpecials

export const query = graphql`
fragment homeOurSpecials on PrismicHomepageDataBodyHomeOurSpecials {
    id
    items {
      coupon {
        document {
          ... on PrismicCoupons {
            data {
              details
              image {
                url
                alt
                gatsbyImageData(layout: FULL_WIDTH, width: 1600)
              }
              sub_title {
                richText
                text
              }
              title {
                richText
                text
              }
            }
          }
        }
      }
    }
    primary {
      heading {
        richText
        text
      }
      sub_heading {
        richText
        text
      }
    }
    slice_type
  }

  `