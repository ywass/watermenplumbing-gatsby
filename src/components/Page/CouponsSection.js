import React from 'react'
import { Link, graphql } from 'gatsby'
import { PrismicRichText } from '@prismicio/react'

const CouponsSection = ({ slice }) => {
    const { items } = slice
    return (
        <section
            className="coupons-system v2 light-bg bg-box-unlike col-50-50 items-touching text-center svg-deco-bottom-hill-4 svg-deco-bottom-wave-bottom ui-repeater ui-ajax"
            id="CouponsSystemV2"
            data-onvisible="show"
            data-loading="false"
            data-infinite="true"
            data-ajaxreplace="true"
            data-needspaging="false"
        >
            <div className="main">
                <ul
                    className="flex-grid-large-wrap-block-800 close-gap-800"
                    data-role="tbody"
                >
                    {items &&
                        items.map((item, index) => {
                            return (
                                <li key={index}
                                    className="type-1 flex- coupon-style half border-radius"
                                    data-item="i"
                                    data-key={7622}
                                >
                                    <div className="bg-box info flex-column-middle-center side-padding-large vertical-padding-small relative coupon-border pseudo-after text-center full">
                                        <div className="relative flex-column full">
                                            <div className="fit full">
                                                <strong className="full relative full title-style-1 title-color-1 title !font2">
                                                    <strong>
                                                        <PrismicRichText className=""
                                                            field={item?.coupon?.document?.data?.title?.richText}
                                                            components={{
                                                                heading2: ({ children }) => (
                                                                    <h2 className='!font-bold !font2 mb-2 full relative full title-style-1 title-color-1 title'>
                                                                        {children}
                                                                    </h2>
                                                                )
                                                            }}
                                                        />
                                                    </strong>
                                                    <span className="relative title-style-2 title-color-2">
                                                        <PrismicRichText className=""
                                                            field={item?.coupon?.document?.data?.sub_title?.richText}
                                                            components={{
                                                                paragraph: ({ children }) => (
                                                                    <p>
                                                                        {children}
                                                                    </p>
                                                                )
                                                            }}
                                                        />
                                                    </span>
                                                </strong>
                                            </div>
                                            <div className="fit full top-margin-tiny valid note-style">
                                                <span>{item?.coupon?.document?.data?.details}</span>
                                            </div>
                                            <div className="top-margin-small relative auto full">
                                                <Link
                                                    className="btn v1"
                                                    href="#"
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
            </div>
        </section>
    )
}

export default CouponsSection


export const query = graphql`
fragment pagesDataBodyCoupons on PrismicPagesDataBodyCoupons {
id
slice_type
    items {
        coupon {
            document {
            ... on PrismicCoupons {
                id
                data {
                title {
                    text
                    richText
                }
                sub_title {
                    text
                    richText
                }
                details
                image {
                    url
                    alt
                }
                }
            }
            }
        }
    }
}
`
