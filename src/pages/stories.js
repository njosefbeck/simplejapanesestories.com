import React, { useState } from "react"
import Layout from '../components/Layout'
import PageHeader from "../components/page-header"
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import Filters from "../components/filters"
import StoryCards from "../components/story-cards"

const filterStories = (stories, activeFilters) => {
  if (!activeFilters.length) {
    return stories
  }

  return stories.filter(story => {
    const foundCategories = []
    const categoryIds = story.categories.map(c => c.id)
    for (let id of categoryIds) {
      if (activeFilters.includes(id)) {
        foundCategories.push(id)
      }
    }
    return activeFilters.length === foundCategories.length
  })
}


export default ({ data }) => {
  const stories = data.allContentfulStory.nodes
  const categories = data.allContentfulCategory.nodes.filter(c => c.story && c.story.length)
  const [ activeFilters, setActiveFilters ] = useState([])
  const filteredStories = filterStories(stories, activeFilters)

  return (
    <Layout>
      <SEO
        title='Stories | Simple Japanese Stories'
        unbrandedTitle='Stories'
        description={'Browse all of the stories!'}
        slug='stories'
      />
      <PageHeader text="Stories" />
      <Filters
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
        categories={categories}
      />
      <StoryCards stories={filteredStories} />
    </Layout>
  )
}

export const query = graphql`
  query StoriesPageQuery {
    allContentfulStory {
      nodes {
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
    allContentfulCategory {
      nodes {
        id
        slug
        displayText
        story {
          id
        }
      }
    }
  }
`