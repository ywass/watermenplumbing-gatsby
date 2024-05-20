import React from 'react'
import { graphql } from "gatsby"
import FortLaunderdaleArea from '../../../../components/AreaWeServePage/FortLaunderdaleArea/FortLaunderdaleArea'
import Layout from '../../../../components/layout'

function index() {
  return (
    <Layout>
        <FortLaunderdaleArea/>
    </Layout>
  )
}

export default index