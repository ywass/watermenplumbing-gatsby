import React from 'react'
import { graphql } from "gatsby"
import Layout from '../../../../../components/layout'
import WaterSoftProductPage from '../../../../../components/WaterFilterationProductsPage/WaterSoftProductPage/WaterSoftProductPage'
function index() {
  return (
    <Layout>
       <WaterSoftProductPage/> 
    </Layout>
  )
}

export default index