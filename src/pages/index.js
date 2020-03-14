import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styles from './index.module.css'

export default ({ data }) => {
  const page = data.contentfulHome
  const pageJson = page.childContentfulHomeBodyRichTextNode.json
  const pageHtml = documentToReactComponents(pageJson)
  return (
    <Layout>
      <SEO
        title="Simple Japanese Stories"
        unbrandedTitle="Simple Japanese Stories"
        description={page.metaDescription.metaDescription}
      />
      <section className={styles.content}>{pageHtml}</section>
    </Layout>
  )
}

export const query = graphql`
  query HomeQuery {
    contentfulHome {
      metaDescription {
        metaDescription
      }
      childContentfulHomeBodyRichTextNode {
        json
      }
    }
  }
`
