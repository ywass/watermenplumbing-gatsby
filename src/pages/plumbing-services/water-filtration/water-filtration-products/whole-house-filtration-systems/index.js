import React from 'react'
import { graphql } from "gatsby"
import Layout from '../../../../../components/layout'
import WholeHouseFiltrationProductPage from '../../../../../components/WaterFilterationProductsPage/WholeHouseFiltrationProductPage/WholeHouseFiltrationProductPage'
function index() {
  return (
    <Layout>
       <WholeHouseFiltrationProductPage/> 
    </Layout>
  )
}

export default index