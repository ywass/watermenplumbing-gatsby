import React from 'react'
import { graphql } from "gatsby"
import HollywoodArea from '../../../../components/AreaWeServePage/HollywoodArea/HollywoodArea'
import Layout from '../../../../components/layout'

function index() {
  return (
    <Layout>
        <HollywoodArea/>
    </Layout>
  )
}

export default index