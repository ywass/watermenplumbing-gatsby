import React from 'react'
import { graphql } from "gatsby"
import Layout from '../../../../../components/layout'
import AntiScaleProductPage from '../../../../../components/WaterFilterationProductsPage/AntiScaleProductPage/AntiScaleProductPage'
function index() {
  return (
    <Layout>
        <AntiScaleProductPage/>
    </Layout>
  )
}

export default index