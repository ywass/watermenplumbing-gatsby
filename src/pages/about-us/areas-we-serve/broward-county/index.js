import React from 'react'
import { graphql } from "gatsby"
import BrowardArea from '../../../../components/AreaWeServePage/BrowardArea/BrowardArea'
import Layout from '../../../../components/layout'

function index() {
  return (
   <Layout>
    <BrowardArea/>
   </Layout>
  )
}

export default index