import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { PrismicRichText } from '@prismicio/react'
import tltBdr2Img from "../../images/tlt-bdr2.png";
import PanelGroupImg from "../../images/panel-group-v5-bg.jpg";
import JotformEmbed from 'react-jotform-embed';

const HomeContentWithForm = ({ slice }) => {
    const { primary } = slice
    const { content,image } = primary
    return (
        <section
            className="panel-group v1 relative no-padding light-bg bg-image"
            id="PanelGroupV5"
        >
            <picture
                className="img-bg bg-position"
                role="presentation"
                data-role="picture"
            >
                <source
                    media="(max-width: 500px)"
                    srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                    data-src="../../images/panel-group-v5-bg-mobile.jpg"
                />
                <source
                    media="(max-width: 1024px)"
                    srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                    data-src="../../images/panel-group-v5-bg-tablet.jpg"
                />
                <img alt="" src={PanelGroupImg} />
            </picture>

            <div className="box" id="PanelGroupV5Zone">
                <section
                    className="contact v6 light-bg bg-box-unlike col-50-50 items-spaced text-left vertical-top sec_padding"
                    id="ContactV6"
                    data-onvisible="show"
                >
                    <div className="main">
                        <div className="flex-auto-responsive-margined-block-1024 align-items item-widths item-spacing flex-direction">
                            <div
                                className="text-align vertical-padding-small block-no-pad"
                                data-content="true"
                            >
                                {content?.richText && (
                                    <PrismicRichText
                                        field={content.richText}
                                        components={{
                                            heading1: ({ children }) => (
                                                <h1 className='no-pad bottom-margin-tiny' id="ContactV6ContentHeader">
                                                    {children}
                                                </h1>
                                            ),
                                            heading2: ({ children }) => (
                                                <h2 className="text-[1.778rem] text-[#030f26]" id="ContactV6ContentMainContent">
                                                    {children}
                                                </h2>
                                            ),
                                            paragraph: ({ children }) => (
                                                <p className='max-w-full'>
                                                    {children}
                                                </p>
                                            )
                                        }}
                                    />
                                )}
                                
                                {/* <div
                                    className="content-style"
                                    id="ContactV6ContentMainContent"
                                >
                                    {content?.richText && (
                                        <PrismicRichText
                                            field={content.richText}
                                            components={{
                                                heading2: ({ children }) => (
                                                    <h2 >
                                                        {children}
                                                    </h2>
                                                )
                                            }}
                                        />
                                    )}
                                </div> */}
                                {/* <header
                                    className="no-pad bottom-margin-tiny"
                                    id="ContactV6ContentHeader"
                                >
                                    <h1>Boca Raton Plumbers</h1>
                                </header> */}
                                {/* <div
                                    className="content-style"
                                    id="ContactV6ContentMainContent"
                                >
                                    <h2>
                                        Providing Elite Plumbing Service in Davie, Hallandale
                                        Beach, Hollywood, and Southern Florida Since 2015
                                    </h2>
                                    <p>
                                        The team at
                                        <Link to="/about-us"> Watermen Plumbing</Link> has been
                                        serving customers in South Florida since 2015. We are
                                        proud to serve Boca Raton, Hallandale Beach, Davie, and
                                        beyond, with honest and professional
                                        <Link to="/plumbing-services">
                                            {" "}
                                            plumbing services
                                        </Link>{" "}
                                        for homeowners and
                                        <Link to="/plumbing-services/commercial-plumbing">
                                            {" "}
                                            businesses
                                        </Link>{" "}
                                        alike. We provide a high level of customer service and
                                        expertise-driven solutions. Our team is working to prove
                                        we are the best plumbing professionals in Boca Raton,
                                        and we know you will agree with us after we’ve solved
                                        all your plumbing headaches. We believe that in order to
                                        be the best, you have to always provide the best
                                        service! So, whether it’s customer service,
                                        <Link to="/plumbing-services/toilets">
                                            {" "}
                                            toilet repairs
                                        </Link>
                                        , water heater installations, or general maintenance
                                        calls, we will always give you our best.
                                    </p>
                                    <p>
                                        <b>
                                            We offer comprehensive plumbing services for customers
                                            in{" "}
                                        </b>
                                        <strong>Boca Raton, Davie,</strong>
                                        <strong>Hallandale Beach, </strong>
                                        <b>
                                            and surrounding communities. Call in the experts from
                                            Watermen Plumbing Inc. at{" "}
                                            <span
                                                id="ContactV6_1"
                                                data-process="replace"
                                                data-replace="{F:P:Cookie:PPCP1/(954)%20997-5797}"
                                            >
                                                (954) 997-5797
                                            </span>{" "}
                                            or contact us online. Be sure to ask about our
                                            financing options!
                                        </b>
                                    </p>
                                </div> */}
                                <div id="ContactV6BtnCon"></div>
                            </div>
                            <div className="form_blk bg-box border-radius side-padding vertical-padding-small box-flair">
                                <div className="flair-border contact_form">
                                    <span className="flair-1" />
                                    <span className="flair-2" />
                                    <header className="text-center" id="ContactV6Header">
                                        <h4>Contact Us Today</h4>
                                        <img className="header-flair" src={tltBdr2Img} />
                                    </header>
                                    <JotformEmbed src="https://form.jotform.com/232918068868472" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}
export default HomeContentWithForm


export const query = graphql`
fragment homeContentWithFormSlice on PrismicHomepageDataBodyHomeContentWithForm {
    id
    primary {
        content {
            richText
        }
    }
    slice_type        
        }
  `