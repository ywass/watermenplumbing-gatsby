import React from 'react'
import { graphql } from 'gatsby'

const HomeClientLogos = ({ slice }) => {
    const { items } = slice
    return (
        <>
            <section
                className="lg:!bg-[#ecf9ff] awards v1 light-bg bg-image ui-repeater"
                id="AwardsV1"
                data-role="scroller"
                data-auto-advance="true"
                data-infinite="true"
                data-onvisible="show"
            >
                <div className="main">
                    <div className="awards-list flex items-center justify-center" data-role="container">
                        <ul className="w-full flex-middle auto-responsive" data-role="list">

                            {items &&
                                items.map((item, index) => {
                                    return (
                                        <li key={index}
                                            className="third"
                                            data-role="item"
                                            data-item="i"
                                            data-key={30661}
                                        >
                                            <div className="side-padding-medium fit text-center">
                                                <img src={item.logo.url} alt={item.logo.alt} className='w-auto text-center mx-auto' />
                                            </div>
                                        </li>
                                    )
                                })}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
export default HomeClientLogos

export const query = graphql`
  fragment homeClientLogos on PrismicHomepageDataBodyHomeClientLogos {
    id
    slice_type
    items {
        logo {
            alt
            url
        }   
    }
  }
`