import React, { useState } from "react"
import styles from './story.module.css'
import Layout from '../../components/Layout'
import SEO from '../../components/seo'
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { Furigana } from 'gem-furigana'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import HorizontalRule from "../../components/horizontal-rule"
import Actions from "../../components/actions"
import Button from '../../components/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import Categories from "../../components/categories"

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
  const title = new Furigana(story.title)
  const englishToggleText  = isEnglishHidden ? 'Show English' : 'Hide English'
  const imageStack = [
    `linear-gradient(rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0.65))`,
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
      <SEO
        title={`${story.englishTitle} | Simple Japanese Stories`}
        unbrandedTitle={story.englishTitle}
        description={story.metaDescription.metaDescription}
        slug={story.slug}
      />
      <article className={styles.story}>
        <BackgroundImage
          tag="header"
          className={styles.header}
          fluid={imageStack}
          backgroundColor={`#eee`}
        >
          <h1 dangerouslySetInnerHTML={{__html: title.ReadingHtml}} />
          <h2>{story.englishTitle}</h2>
        </BackgroundImage>
        <Actions>
          <Button
            text={englishToggleText}
            onClick={() => setIsEnglishHidden(!isEnglishHidden)}
          />
          <Button
            link={`https://twitter.com/intent/tweet?url=https://simplejapanesestories.com/${story.slug}&text=Just read a great story by @simplejapanese!`}
            text='Tweet'
            icon={<FontAwesomeIcon icon={faTwitter} />}
          />
        </Actions>
        <HorizontalRule />
        <section className={styles.content}>
          {storyHtml}
        </section>
        <HorizontalRule />
        <Categories categories={story.categories} />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query StoryPageQuery($id: String!) {
    contentfulStory(id: {eq: $id }) {
      slug
      title
      englishTitle
      metaDescription {
        metaDescription
      }
      categories {
        id
        slug
        displayText
      }
      childContentfulStoryBodyRichTextNode {
        json
      }
      image {
        file {
          fluid(maxWidth: 800) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`