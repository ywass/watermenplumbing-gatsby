import React from 'react'
import { graphql } from "gatsby"
import Layout from '../../components/layout'
import ServicesPage from '../../components/ServicesPage/ServicesPage'
function index() {
  return (
    <Layout>
     <ServicesPage/>
    </Layout>
  )
}

export default index