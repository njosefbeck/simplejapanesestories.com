import React from "react"
import Layout from "../components/layout"
import PageHeader from "../components/page-header"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import StoryCards from "../components/story-cards"

export default ({ data }) => {
  const category = data.contentfulCategory

  return (
    <Layout>
      <SEO
        title={`${category.displayText} Stories | Simple Japanese Stories`}
        unbrandedTitle={`${category.displayText} Stories`}
        description={`Simple Japanese stories filed under category: ${category.displayText} `}
        slug={`category/${category.slug}`}
      />
      <PageHeader text="Stories" subHeader={`Category: ${category.displayText}`} />
      <StoryCards stories={category.story} />
    </Layout>
  )
}

export const query = graphql`
  query CategoryPageQuery($id: String!) {
    contentfulCategory(id: { eq: $id }) {
      id
      slug
      displayText
      story {
        id
        title
        englishTitle
        slug
        categories {
          id
          displayText
        }
        image {
          file {
            fluid(maxWidth: 600) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`
