import React from "react"
import { Link, graphql } from "gatsby"

const ButtonsSection = ({ slice }) => {
  const { items } = slice
  return (
    <div className="flex sm:flex-nowrap flex-wrap justify-center mt-8">
      {items &&
        items.map((item, index) => {
          return (
            <div key={index} >
              <Link
                className="btn v1 inline-block btn v1 bg-[#eca900] hover:bg-[#002bb0] text-[#030f26] hover:text-white"
                to=""
              >
                {item.button_text}
              </Link>
            </div>
          )
        })}
    </div>
  )
}
export default ButtonsSection

export const query = graphql`
  fragment waterfilterproductsDataBodyButtonsSection on PrismicWaterfilterproductsDataBodyButtonsSection {
    id
    slice_type
    items {
        button_text
        button_link {
          slug
        }
    }
  }
`
