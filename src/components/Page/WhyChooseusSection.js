import React from 'react'
import { graphql } from 'gatsby'
import { PrismicRichText } from '@prismicio/react'
import tltBdrImg from '../../images/tlt-bdr.png'
import JotformEmbed from 'react-jotform-embed';
import tltBdr2Img from '../../images/tlt-bdr2.png'

const WhyChooseusSection = ({ slice }) => {
    const { primary, items } = slice
    const { heading, sub_heading } = primary
    return (

        <section
            className="!bg-[#ecf9ff] contact v4 light-bg bg-box-unlike col-50-50 items-spaced vertical-middle text-center flow-reverse bg-image svg-deco-bottom-hill-4 svg-deco-bottom-wave-bottom"
        >
            <div className="main">
                <div className="flex-auto-responsive-margined-block-1024 align-items item-widths item-spacing flex-direction">
                    <div className="bg-box side-padding vertical-padding-small box-flair border-radius">
                        <div className="flair-border">
                            <span className="flair-1" />
                            <span className="flair-2" />
                            <header className="text-left center-1024" id="ContactV4Values">
                                <PrismicRichText
                                    field={heading.richText}
                                    components={{
                                        heading2: ({ children }) => (
                                            <h2>
                                                {children}
                                            </h2>
                                        ),
                                    }}
                                />
                                <strong>
                                    <PrismicRichText
                                        field={sub_heading.richText}
                                        components={{
                                            heading3: ({ children }) => (
                                                <h3>
                                                    {children}
                                                </h3>
                                            ),
                                        }}
                                    />
                                </strong>
                                <img className="header-flair" src={tltBdrImg} />
                            </header>

                            <ul className="values-list ui-repeater" id="ContactV4List">
                                {items &&
                                    items.map((item, index) => {
                                        return (
                                            <li key={index}
                                                className="flex-top-block-500 center-500 auto top-margin-small"
                                                data-item="i"
                                                data-key={15797}
                                            >
                                                <span className="ico-con">
                                                    icon
                                                </span>
                                                <div className="info">
                                                    <strong className="title-style-4 title-color-4">
                                                        {item.title1.text}
                                                    </strong>
                                                    <p>
                                                       {item.description}
                                                    </p>
                                                </div>
                                            </li>
                                        )
                                    })}
                            </ul>
                          
                        </div>
                    </div>
                    <div>
                        <header className="text-align center-1024" id="ContactV4Header2">
                            <h4>Ready to Get Started?</h4>
                            <strong>
                                Contact Us for Solutions Today &amp; Ask About Our Financing
                                Options
                            </strong>
                            <img className="header-flair" src={tltBdr2Img} />
                        </header>
                        <div id="ContactV4Form" className="ui-repeater contact_form">
                            <JotformEmbed src="https://form.jotform.com/232918068868472" />
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}
export default WhyChooseusSection

export const query = graphql`
  fragment pageChooseusSection on PrismicPagesDataBodyWhychooseuswithform {
    id
    slice_type
    primary {
        heading {
          text
          richText
        }
        sub_heading {
          text
          richText
        }
        button_text
        button_link {
          slug
        }
      }  
        items {
            title1{
                text
            }
            icon
            description
            } 
  }
`