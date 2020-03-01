import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { graphql } from "gatsby"
import PageHeader from "../../components/page-header"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styles from "./page.module.css";

export default ({ data }) => {
  const page = data.contentfulPage
  const pageJson = page.childContentfulPageBodyRichTextNode.json
  const pageHtml = documentToReactComponents(pageJson)
  return (
    <Layout>
      <SEO
        title={`${page.title} | Simple Japanese Stories`}
        unbrandedTitle={page.title}
        description={page.metaDescription.metaDescription}
        slug={page.slug}
      />
      <PageHeader text={page.title} />
      <section className={styles.content}>{pageHtml}</section>
    </Layout>
  )
}

export const query = graphql`
  query PageQuery($id: String!) {
    contentfulPage(id: { eq: $id }) {
      slug
      title
      metaDescription {
        metaDescription
      }
      childContentfulPageBodyRichTextNode {
        json
      }
    }
  }
`
