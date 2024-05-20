import React from 'react'
import { graphql } from "gatsby"
import CoralArea from '../../../../components/AreaWeServePage/CoralArea/CoralArea'
import Layout from '../../../../components/layout'

function index() {
  return (
   <Layout>
    <CoralArea/>
   </Layout>
  )
}

export default index