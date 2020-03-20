const storiesQuery = `{
  stories: allContentfulStory {
    nodes {
      title
      englishTitle
      slug
      categories {
        id
        displayText
      }
      childContentfulStoryBodyRichTextNode {
        json
      }
    }
  }
}`

function transform(nodes) {
  return nodes.map(story => {
    const text = []

    for (const content of story.childContentfulStoryBodyRichTextNode.json.content) {
      for (const innerContent of content.content) {
        text.push(innerContent.value)
      }
    }

    return {
      title: story.title,
      slug: story.slug,
      englishTitle: story.englishTitle,
      categories: story.categories.map(category => category.displayText),
      text
    }
  })
}

const queries = [
  {
    query: storiesQuery,
    transformer: ({ data }) => transform(data.stories.nodes),
    indexName: 'Stories'
  }
]

module.exports = queries
