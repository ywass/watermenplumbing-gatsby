import React from 'react'
import { graphql } from "gatsby"
import DrainCleaningSnakingPage from '../../../../components/DrainIssuesPage/DrainCleaningSnakingPage/DrainCleaningSnakingPage'
import Layout from '../../../../components/layout'
import Seo from '../../../../components/seo'
function index() {
  return (
   <Layout>
    <DrainCleaningSnakingPage/>
   </Layout>
  )
}

export default index