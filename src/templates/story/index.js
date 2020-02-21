import React, { useState } from "react"
import styles from './story.module.css'
import Layout from '../../components/Layout'
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { Furigana } from 'gem-furigana'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const English = ({ text, isHidden }) => {
  const display = isHidden ? { display: 'none' } : {}
  return (
    <p className={styles.translation} style={display}>{text}</p>
  )
}

const Japanese = ({ text }) => {
  const furigana = new Furigana(text[0])
  return <p dangerouslySetInnerHTML={{__html: furigana.ReadingHtml}} />
}

const Paragraph = ({ node, text, isEnglishHidden }) => {
  
  if (!node.content[0].marks.length) {
    return <Japanese text={text} />
  }

  return <English text={text} isHidden={isEnglishHidden} />
}

export default ({ data }) => {
  const [ isEnglishHidden, setIsEnglishHidden ] = useState(true)
  const story = data.contentfulStory
  const imageStack = [
    //`linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75))`,
    story.image.file.fluid
  ]
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Paragraph
          node={node}
          text={children}
          isEnglishHidden={isEnglishHidden}
        />
      )
    }
  }
  const storyJson = story.childContentfulStoryBodyRichTextNode.json
  const storyHtml = documentToReactComponents(storyJson, options)
  return (
    <Layout>
      <article className={styles.story}>
        <BackgroundImage
          Tag="header"
          className={styles.header}
          fluid={imageStack}
          backgroundColor={`#eee`}
        >
          <h1>{story.title}</h1>
          <h2>{story.englishTitle}</h2>
        </BackgroundImage>
        <section className={styles.content}>
          {storyHtml}
        </section>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query StoryPageQuery($id: String!) {
    contentfulStory(id: {eq: $id }) {
      title
      englishTitle
      childContentfulStoryBodyRichTextNode {
        json
      }
      image {
        file {
          fluid(quality: 90, maxWidth: 800) {
            src
            srcSet
            srcSetWebp
            srcWebp
          }
        }
      }
    }
  }
`