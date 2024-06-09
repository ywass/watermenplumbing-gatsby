import React from 'react'
import { Link, graphql } from 'gatsby'
import { PrismicRichText } from '@prismicio/react'
import award1Img from '../../images/HomeAdvisor.png'


const AwardsSection = ({ slice }) => {
    const { items } = slice
    return (
        <section
            className="awards-system v1 light-bg bg-box-like text-left ui-repeater"
            id="AwardsSystemV1"
            data-onvisible="show"
        >
            <div className="main">
                <ul>
                    {items &&
                        items.map((item, index) => {
                            return (
                                <li key={index}
                                    className="flex-block-800-margined-middle flex-direction mb-12"
                                    data-item="i"
                                    data-key={30661}
                                >
                                    <div className="over-item flex-center-800 relative fit">
                                        <img src={item.image.url} alt={item.image.alt} className="img staff-img full" />
                                    </div>
                                    <div className="bg-box side-padding vertical-padding-small border-radius text-align center-800 under-item auto">
                                        <div className="overlap-padding">
                                            <h3>{item.title1.text}</h3>
                                            <svg className="header-flair" role="presentation">
                                                <use href="../includes/flair.svg#header" />
                                            </svg>
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

export default AwardsSection


export const query = graphql`
    fragment pagesDataBodyAwards on PrismicPagesDataBodyAwards {
        id
        slice_type
         items {
            title1 {
                text
            }
            image {
                url
                alt
            }
        }

    }
`