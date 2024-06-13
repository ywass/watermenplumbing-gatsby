import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { PrismicRichText } from '@prismicio/react'
import tltBdrImg from "../../images/tlt-bdr.png";
import tltBdr2Img from "../../images/tlt-bdr2.png";

const Home5StarReviews = ({ slice }) => {
    const { primary, items } = slice
    const { content, heading, sub_heading, image, review, button_text, button_link } = primary
    return (
        <>
            <section
                className="lg:!bg-[#ecf9ff] reviews v15 light-bg col-50-50 items-spaced vertical-middle text-left bg-image bg-box-unlike sec_padding"
                id="ReviewsV15"
                data-onvisible="show"
            >
                <div className="main">
                    <div className="flex-auto-responsive-margined-block-1024 align-items item-widths item-spacing flex-direction">
                        <div>
                            <div
                                className="content-style center-800"
                                id="ReviewsV15Content"
                            >
                                <PrismicRichText
                                    field={content.richText}
                                    components={{
                                        heading3: ({ children }) => (
                                            <header
                                                className="bottom-margin-tiny no-pad center-800"
                                                id="ReviewsV15Header"
                                            >
                                                <h3 className='bottom-margin-tiny no-pad center-800' id="ReviewsV15Header">
                                                    {children}
                                                </h3>
                                            </header>
                                        ),
                                        paragraph: ({ children }) => (
                                            <p className='max-w-full'>
                                                {children}
                                            </p>
                                        )
                                    }}
                                />
                            </div>
                            <div id="ReviewsV15BtnCon"></div>
                        </div>
                        <div>
                            <header
                                className="text-align center-800"
                                id="ReviewsV15ReviewsHeader"
                            >
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
                                <strong>
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
                                </strong>
                                <img className="header-flair" src={tltBdrImg} />
                            </header>
                            <div className="flex-column border-radius">
                                <img src={image.url} alt={image.alt} className='img pad-height- bottom-margin-negative bg-position box-shadow border-radius' />
                                <div
                                    className="bg-box no-shadow side-padding vertical-padding-small box-flair flex- auto lg:!text-left !text-center"
                                    data-role="scroller"
                                >
                                    <div className="flair-border">
                                        <span className="flair-1" />
                                        <span className="flair-2" />
                                        <div
                                            id="ReviewsV15ReviewsFeed"
                                            className="ui-repeater"
                                            data-role="container"
                                        >
                                            <ul className="flex-middle" data-role="list">
                                                <li
                                                    className="full lg:!text-left !text-center"
                                                    data-role="item"
                                                    data-item="i"
                                                    data-key={3398782}
                                                >
                                                    <blockquote>
                                                        <div className="rating-icons full bottom-margin-small">
                                                            <div className='flex gap-1 mb-5 lg:justify-start justify-center'>
                                                                <svg className='text-[1.33rem]' viewBox="0 0 24 24" role="presentation" width="24" height="24"><path d="M5.295 23.025C5.079 23.025 4.865 22.959 4.682 22.825C4.342 22.578 4.183 22.151 4.278 21.742L5.928 14.608L0.425 9.811C0.108 9.534-0.013 9.096 0.118 8.696C0.247 8.296 0.603 8.013 1.019 7.977L8.271 7.351L11.105 0.629C11.267 0.241 11.646-0.01 12.065-0.01C12.485-0.01 12.864 0.241 13.027 0.628L15.86 7.351L23.112 7.977C23.53 8.013 23.885 8.296 24.015 8.696C24.144 9.096 24.023 9.534 23.707 9.811L18.204 14.608L19.853 21.742C19.948 22.151 19.788 22.578 19.449 22.825C19.107 23.072 18.652 23.09 18.296 22.874L12.065 19.093L5.835 22.874C5.669 22.974 5.481 23.025 5.295 23.025Z" fill="#FFD80A"></path></svg>
                                                                <svg className='text-[1.33rem]' viewBox="0 0 24 24" role="presentation" width="24" height="24"><path d="M5.295 23.025C5.079 23.025 4.865 22.959 4.682 22.825C4.342 22.578 4.183 22.151 4.278 21.742L5.928 14.608L0.425 9.811C0.108 9.534-0.013 9.096 0.118 8.696C0.247 8.296 0.603 8.013 1.019 7.977L8.271 7.351L11.105 0.629C11.267 0.241 11.646-0.01 12.065-0.01C12.485-0.01 12.864 0.241 13.027 0.628L15.86 7.351L23.112 7.977C23.53 8.013 23.885 8.296 24.015 8.696C24.144 9.096 24.023 9.534 23.707 9.811L18.204 14.608L19.853 21.742C19.948 22.151 19.788 22.578 19.449 22.825C19.107 23.072 18.652 23.09 18.296 22.874L12.065 19.093L5.835 22.874C5.669 22.974 5.481 23.025 5.295 23.025Z" fill="#FFD80A"></path></svg>
                                                                <svg className='text-[1.33rem]' viewBox="0 0 24 24" role="presentation" width="24" height="24"><path d="M5.295 23.025C5.079 23.025 4.865 22.959 4.682 22.825C4.342 22.578 4.183 22.151 4.278 21.742L5.928 14.608L0.425 9.811C0.108 9.534-0.013 9.096 0.118 8.696C0.247 8.296 0.603 8.013 1.019 7.977L8.271 7.351L11.105 0.629C11.267 0.241 11.646-0.01 12.065-0.01C12.485-0.01 12.864 0.241 13.027 0.628L15.86 7.351L23.112 7.977C23.53 8.013 23.885 8.296 24.015 8.696C24.144 9.096 24.023 9.534 23.707 9.811L18.204 14.608L19.853 21.742C19.948 22.151 19.788 22.578 19.449 22.825C19.107 23.072 18.652 23.09 18.296 22.874L12.065 19.093L5.835 22.874C5.669 22.974 5.481 23.025 5.295 23.025Z" fill="#FFD80A"></path></svg>
                                                                <svg className='text-[1.33rem]' viewBox="0 0 24 24" role="presentation" width="24" height="24"><path d="M5.295 23.025C5.079 23.025 4.865 22.959 4.682 22.825C4.342 22.578 4.183 22.151 4.278 21.742L5.928 14.608L0.425 9.811C0.108 9.534-0.013 9.096 0.118 8.696C0.247 8.296 0.603 8.013 1.019 7.977L8.271 7.351L11.105 0.629C11.267 0.241 11.646-0.01 12.065-0.01C12.485-0.01 12.864 0.241 13.027 0.628L15.86 7.351L23.112 7.977C23.53 8.013 23.885 8.296 24.015 8.696C24.144 9.096 24.023 9.534 23.707 9.811L18.204 14.608L19.853 21.742C19.948 22.151 19.788 22.578 19.449 22.825C19.107 23.072 18.652 23.09 18.296 22.874L12.065 19.093L5.835 22.874C5.669 22.974 5.481 23.025 5.295 23.025Z" fill="#FFD80A"></path></svg>
                                                                <svg className='text-[1.33rem]' viewBox="0 0 24 24" role="presentation" width="24" height="24"><path d="M5.295 23.025C5.079 23.025 4.865 22.959 4.682 22.825C4.342 22.578 4.183 22.151 4.278 21.742L5.928 14.608L0.425 9.811C0.108 9.534-0.013 9.096 0.118 8.696C0.247 8.296 0.603 8.013 1.019 7.977L8.271 7.351L11.105 0.629C11.267 0.241 11.646-0.01 12.065-0.01C12.485-0.01 12.864 0.241 13.027 0.628L15.86 7.351L23.112 7.977C23.53 8.013 23.885 8.296 24.015 8.696C24.144 9.096 24.023 9.534 23.707 9.811L18.204 14.608L19.853 21.742C19.948 22.151 19.788 22.578 19.449 22.825C19.107 23.072 18.652 23.09 18.296 22.874L12.065 19.093L5.835 22.874C5.669 22.974 5.481 23.025 5.295 23.025Z" fill="#FFD80A"></path></svg>
                                                            </div>
                                                            <div >
                                                                <strong className="title-style-2 title-color-2">{review.document.data.heading.text}</strong>
                                                                <PrismicRichText
                                                                    field={
                                                                        review?.document?.data?.review
                                                                            ?.richText
                                                                    }
                                                                    components={{
                                                                        paragraph: ({ children }) => (
                                                                            <p className='font-normal text-white max-w-full mb-4'>
                                                                                {children}
                                                                            </p>
                                                                        )
                                                                    }}
                                                                />
                                                                <p className='text-white max-w-full'><b>{review.document.data.reviewer}</b></p>
                                                            </div>
                                                        </div>
                                                    </blockquote>
                                                </li>
                                            </ul>
                                            <div className="top-margin">
                                                <Link
                                                    to="/reviews"
                                                    aria-labelledby="ReviewsV15ReviewsHeader"
                                                    className="btn v1"
                                                >
                                                    Read More Reviews
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home5StarReviews

export const query = graphql`
fragment home5starReviews on PrismicHomepageDataBodyHome5StarCustomerReviews {
    id
    primary {
      content {
        richText
        text
      }
      heading {
        richText
        text
      }
      image {
        url
        alt
        gatsbyImageData(layout: CONSTRAINED, width: 600)
      }
      review {
        document {
          ... on PrismicReviews {
            id
            data {
              heading {
                richText
                text
              }
              review {
                richText
                text
              }
              reviewer
            }
          }
        }
      }
      sub_heading {
        richText
        text
      }
    }
    slice_type
  
  }
  `