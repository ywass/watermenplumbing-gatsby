import React from 'react'
import { graphql } from "gatsby"
import Seo from "../../../../components/seo"
import SpecticTanksPage from '../../../../components/BlogPages/CategoriesPages/SpecticTanksPage/SpecticTanksPage'
import Layout from '../../../../components/layout'
function index() {
  return (
    <Layout>
     <SpecticTanksPage/>
    </Layout>
  )
}

export default index
