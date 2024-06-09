import React from 'react'
import { Link, graphql } from 'gatsby'
import { PrismicRichText } from '@prismicio/react'
import tltBdr2Img from "../../images/tlt-bdr2.png";
import JotformEmbed from 'react-jotform-embed';

const ContactSection = ({ slice }) => {
    const { primary } = slice
    const { heading, content, map_embed_link } = primary
    return (

        <section
            className="contact-system v1 light-bg text-center bg-box-like col-50-50 items-touching"
            id="ContactSystemV1"
            data-onvisible="show"
        >

            <div className="main thin text-align">
                <header
                    className="no-pad bottom-margin-tiny center-800"
                    id="ContactSystemV1Header"
                >
                    <h1>{heading.text}</h1>
                    <img src={tltBdr2Img} className="header-flair" />
                </header>
                <div
                    className="content-style relative bottom-margin"
                    id="ContactSystemV1Content"
                >
                    <PrismicRichText className=""
                        field={content?.richText}
                        components={{
                            paragraph: ({ children }) => (
                                <p className='max-w-full'>
                                    {children}
                                </p>
                            )
                        }}
                    />
                </div>
            </div>
            <div className="main top-margin-small">
                <div className="flex-auto-responsive-margined flex-direction align-items item-widths item-spacing">
                    <div
                        className="bg-box side-padding-small vertical-padding-small under-item border-radius ui-repeater"
                        id="ContactSystemV1Form"
                    >
                        <div className="flair-border contact_form" data-item="i" data-key="">
                            <JotformEmbed src="https://form.jotform.com/232918068868472" />
                        </div>
                    </div>
                    <div
                        className="map-container over-item relative border-radius ui-repeater ui-ajax"
                        id="ContactSystemV1Map"
                        data-ajaxreplace="true"
                    >
                        <div
                            className="imap"
                            data-map='{"draggable":true,"scrollwheel":false,"zoomControl":true}'
                            data-minlat="25.9935053"
                            data-maxlat="25.9935053"
                            data-minlng="-80.1695817"
                            data-maxlng="-80.1695817"
                        >
                            <iframe
                                frameborder="0"
                                className=" w-full h-96 md:h-[650px] md:ml-5"
                                scrolling="no"
                                src={map_embed_link}
                                title="  8171 Yonge Street Suite 321 Thornhill, ON L3T 2C6."
                                aria-label="  8171 Yonge Street Suite 321 Thornhill, ON L3T 2C6."
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>


                </div>
            </div>
        </section>

    )
}
export default ContactSection

export const query = graphql`
    fragment pagesDataBodyContact on PrismicPagesDataBodyContact {
        id
        slice_type
         primary {
            heading {
                text
            }
            content {
                richText
                text
            }
            map_embed_link
            }


    }
`

