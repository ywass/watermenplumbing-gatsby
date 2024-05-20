import React from 'react'
import { graphql } from "gatsby"
import MiramarArea from '../../../../components/AreaWeServePage/MiramarArea/MiramarArea'
import Layout from '../../../../components/layout'

function index() {
  return (
    <Layout>
        <MiramarArea/>
    </Layout>
  )
}

export default index