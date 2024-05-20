import React from 'react'
import { graphql } from "gatsby"
import HallandaleArea from '../../../../components/AreaWeServePage/HallandaleArea/HallandaleArea'
import Layout from '../../../../components/layout'

function index() {
  return (
    <Layout>
        <HallandaleArea/>
    </Layout>
  )
}

export default index