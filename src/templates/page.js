import React from "react"
import Layout from '../components/Layout'
import PageHeader from "../components/page-header"

export default ({ pageContext }) => (
  <Layout>
    <PageHeader text={pageContext.title} />
  </Layout>
)
