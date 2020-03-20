import React from "react"
import Layout from "../components/layout"
import SEO from "../../components/seo"
import PageHeader from "../components/page-header"
import Search from "../components/search"

export default () => (
  <Layout>
    <SEO
      title='Search | Simple Japanese Stories'
      unbrandedTitle='Search'
      description='Search through available stories for a particular Japanese or English phrase or word.'
      slug='search'
    />
    <PageHeader text="Search" />
    <Search />
  </Layout>
)
