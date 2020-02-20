import React from "react"
import styles from './story.module.css'
import Layout from '../../components/Layout'
import { graphql } from 'gatsby'

export default ({ data }) => {
  const story = data.contentfulStory
  return (
    <Layout>
      <article className={styles.story}>
        <header style={{background: "linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), url('./images/sakura_blossoms.jpeg') no-repeat center center/cover;" }}>
          <h1>{story.title}</h1>
          <h2>{story.englishTitle}</h2>
        </header>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query StoryPageQuery($id: String!) {
    contentfulStory(id: {eq: $id }) {
      title
      englishTitle
    }
  }
`