import React from 'react'
import { graphql } from "gatsby"
import Layout from '../../components/layout'
import ThankYouPage from '../../components/ThankYouPage/ThankYouPage'
function index() {
  return (
    <Layout>
     <ThankYouPage/>
    </Layout>
  )
}

export default index