import React from "react"
import { graphql } from "gatsby"

const ButtonsSection = ({ slice }) => {
  const { items } = slice
  return (
    <section className="!md:pt-16 !pb-10 !pt-10">
      <div className="max-w-7xl mx-auto lg:px-12 px-4">
        <h2>Buttons Here</h2>
      </div>
    </section>
  )
}
export default ButtonsSection

export const query = graphql`
  fragment plumbingservicesDataBodyButtonsSection on PrismicPlumbingservicesDataBodyButtonsSection {
    id
    slice_type
    items {
            button_text
          }
  }
`
