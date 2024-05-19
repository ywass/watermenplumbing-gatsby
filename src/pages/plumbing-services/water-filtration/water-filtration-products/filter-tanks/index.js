import React from 'react'
import { graphql } from "gatsby"
import Layout from '../../../../../components/layout'
import FilterTanksProductPage from '../../../../../components/WaterFilterationProductsPage/FilterTanksProductPage/FilterTanksProductPage'
function index() {
  return (
    <Layout>
      <FilterTanksProductPage/>
    </Layout>
  )
}

export default index