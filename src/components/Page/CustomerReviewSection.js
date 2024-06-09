import React from 'react'
import { Link, graphql } from 'gatsby'
import { PrismicRichText } from '@prismicio/react'
import tltBdrImg from '../../images/tlt-bdr.png'

const CustomerReviewSection = ({ slice }) => {
  const { primary, items } = slice
  const { heading, sub_heading, button_text, button_link } = primary
  return (
    <div className='max-w-7xl mx-auto px-4 mt-32 mb-20'>
      <div className='bg-[#002bb0] py-12 lg:px-12 px-8 text-center'>
        <PrismicRichText
          field={heading.richText}
          components={{
            heading2: ({ children }) => (
              <h2 className="text-white text-center font1 text-[2.7rem] mb-2">
                {children}
              </h2>
            ),
          }}
        />
        <PrismicRichText
          field={sub_heading.richText}
          components={{
            heading3: ({ children }) => (
              <h3 className="text-[#ffd545] text-center text-[1.778rem]">
                {children}
              </h3>
            ),
          }}
        />
        <img className="header-flair" src={tltBdrImg} />
        <div className='mt-10'>
          <div className='flex justify-center gap-1 mb-5'>
            <svg className='text-[1.33rem]' viewBox="0 0 24 24" role="presentation" width="24" height="24"><path d="M5.295 23.025C5.079 23.025 4.865 22.959 4.682 22.825C4.342 22.578 4.183 22.151 4.278 21.742L5.928 14.608L0.425 9.811C0.108 9.534-0.013 9.096 0.118 8.696C0.247 8.296 0.603 8.013 1.019 7.977L8.271 7.351L11.105 0.629C11.267 0.241 11.646-0.01 12.065-0.01C12.485-0.01 12.864 0.241 13.027 0.628L15.86 7.351L23.112 7.977C23.53 8.013 23.885 8.296 24.015 8.696C24.144 9.096 24.023 9.534 23.707 9.811L18.204 14.608L19.853 21.742C19.948 22.151 19.788 22.578 19.449 22.825C19.107 23.072 18.652 23.09 18.296 22.874L12.065 19.093L5.835 22.874C5.669 22.974 5.481 23.025 5.295 23.025Z" fill="#FFD80A"></path></svg>
            <svg className='text-[1.33rem]' viewBox="0 0 24 24" role="presentation" width="24" height="24"><path d="M5.295 23.025C5.079 23.025 4.865 22.959 4.682 22.825C4.342 22.578 4.183 22.151 4.278 21.742L5.928 14.608L0.425 9.811C0.108 9.534-0.013 9.096 0.118 8.696C0.247 8.296 0.603 8.013 1.019 7.977L8.271 7.351L11.105 0.629C11.267 0.241 11.646-0.01 12.065-0.01C12.485-0.01 12.864 0.241 13.027 0.628L15.86 7.351L23.112 7.977C23.53 8.013 23.885 8.296 24.015 8.696C24.144 9.096 24.023 9.534 23.707 9.811L18.204 14.608L19.853 21.742C19.948 22.151 19.788 22.578 19.449 22.825C19.107 23.072 18.652 23.09 18.296 22.874L12.065 19.093L5.835 22.874C5.669 22.974 5.481 23.025 5.295 23.025Z" fill="#FFD80A"></path></svg>
            <svg className='text-[1.33rem]' viewBox="0 0 24 24" role="presentation" width="24" height="24"><path d="M5.295 23.025C5.079 23.025 4.865 22.959 4.682 22.825C4.342 22.578 4.183 22.151 4.278 21.742L5.928 14.608L0.425 9.811C0.108 9.534-0.013 9.096 0.118 8.696C0.247 8.296 0.603 8.013 1.019 7.977L8.271 7.351L11.105 0.629C11.267 0.241 11.646-0.01 12.065-0.01C12.485-0.01 12.864 0.241 13.027 0.628L15.86 7.351L23.112 7.977C23.53 8.013 23.885 8.296 24.015 8.696C24.144 9.096 24.023 9.534 23.707 9.811L18.204 14.608L19.853 21.742C19.948 22.151 19.788 22.578 19.449 22.825C19.107 23.072 18.652 23.09 18.296 22.874L12.065 19.093L5.835 22.874C5.669 22.974 5.481 23.025 5.295 23.025Z" fill="#FFD80A"></path></svg>
            <svg className='text-[1.33rem]' viewBox="0 0 24 24" role="presentation" width="24" height="24"><path d="M5.295 23.025C5.079 23.025 4.865 22.959 4.682 22.825C4.342 22.578 4.183 22.151 4.278 21.742L5.928 14.608L0.425 9.811C0.108 9.534-0.013 9.096 0.118 8.696C0.247 8.296 0.603 8.013 1.019 7.977L8.271 7.351L11.105 0.629C11.267 0.241 11.646-0.01 12.065-0.01C12.485-0.01 12.864 0.241 13.027 0.628L15.86 7.351L23.112 7.977C23.53 8.013 23.885 8.296 24.015 8.696C24.144 9.096 24.023 9.534 23.707 9.811L18.204 14.608L19.853 21.742C19.948 22.151 19.788 22.578 19.449 22.825C19.107 23.072 18.652 23.09 18.296 22.874L12.065 19.093L5.835 22.874C5.669 22.974 5.481 23.025 5.295 23.025Z" fill="#FFD80A"></path></svg>
            <svg className='text-[1.33rem]' viewBox="0 0 24 24" role="presentation" width="24" height="24"><path d="M5.295 23.025C5.079 23.025 4.865 22.959 4.682 22.825C4.342 22.578 4.183 22.151 4.278 21.742L5.928 14.608L0.425 9.811C0.108 9.534-0.013 9.096 0.118 8.696C0.247 8.296 0.603 8.013 1.019 7.977L8.271 7.351L11.105 0.629C11.267 0.241 11.646-0.01 12.065-0.01C12.485-0.01 12.864 0.241 13.027 0.628L15.86 7.351L23.112 7.977C23.53 8.013 23.885 8.296 24.015 8.696C24.144 9.096 24.023 9.534 23.707 9.811L18.204 14.608L19.853 21.742C19.948 22.151 19.788 22.578 19.449 22.825C19.107 23.072 18.652 23.09 18.296 22.874L12.065 19.093L5.835 22.874C5.669 22.974 5.481 23.025 5.295 23.025Z" fill="#FFD80A"></path></svg>
          </div>
          {items &&
            items.map((item, index) => {
              return (
                <div key={index}>
                  <h3 className='text-[#ffd545] text-[1.75rem] mb-2'>{item.reviews.document.data.heading.text}</h3>
                  <PrismicRichText
                    field={
                      item?.reviews?.document?.data?.review
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
                   <p className='text-white max-w-full'><b>{item.reviews.document.data.reviewer}</b></p>
                </div>
              )
            })}
                <Link
                  to={`/${button_link.slug}`}
                  aria-labelledby="ReviewsV16ReviewsHeader"
                  className="my-8 inline-block btn v1 bg-[#eca900] hover:bg-white text-[#030f26]"
                >
                  {button_text}
                </Link>
              </div>
        </div>
        </div>
  )
}
export default CustomerReviewSection

export const query = graphql`
  fragment pageCustomerreviewSection on PrismicPagesDataBodyCustomerReviewsSection1 {
    id
    slice_type
          primary {
            heading {
              richText
              text
            }
            sub_heading {
              richText
              text
            }
            button_text
            button_link {
              slug
            }
          }
          items {
            reviews {
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
          }
    }
 `