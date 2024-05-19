import React from 'react'
import { graphql } from "gatsby"
import Layout from '../../../../components/layout'
import WaterFilterationProductsPage from '../../../../components/WaterFilterationProductsPage/WaterFilterationPage'

function index() {
  return (
    <Layout>
        <WaterFilterationProductsPage/>
    </Layout>
  )
}

export default index