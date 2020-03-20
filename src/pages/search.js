import React from "react"
import Layout from "../components/layout"
import PageHeader from "../components/page-header"
import Search from "../components/search"

export default () => (
  <Layout>
    <PageHeader text="Search" />
    <Search />
  </Layout>
)
