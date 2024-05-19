import React from 'react'
import { graphql } from "gatsby"
import PlantationArea from '../../../../components/AreaWeServePage/PlantationArea/PlantationArea'
import Layout from '../../../../components/layout'

function index() {
  return (
    <Layout>
        <PlantationArea/>
    </Layout>
  )
}

export default index