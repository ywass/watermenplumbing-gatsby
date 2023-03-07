/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"


import "./layout.css"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import Home from "./Home/Home"

const Layout = ({ children }) => {

  return (
    <>
     
      <div>
        <Navbar/>
        <div>
          <Home/>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default Layout
