import React from 'react'
import { graphql } from "gatsby"
import DavieArea from '../../../../components/AreaWeServePage/DavieArea/DavieArea'
import Layout from '../../../../components/layout'

function index() {
  return (
    <Layout>
        <DavieArea/>
    </Layout>
  )
}

export default index