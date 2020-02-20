/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve(`src/templates/page.js`)
  const storyTemplate = path.resolve(`src/templates/story/index.js`)

  return graphql(`
    query loadPagesQuery {
      allContentfulPage {
        nodes {
          slug
          title
        }
      }
      allContentfulStory {
        nodes {
          slug
          id
          contentful_id
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const pages = result.data.allContentfulPage.nodes
    const stories = result.data.allContentfulStory.nodes

    const buildPage = (path, component, context) => {
      createPage({ path, component, context })
    }

    pages.forEach(node => buildPage(node.slug, pageTemplate, { id: node.id, title: node.title }))
    stories.forEach(node => buildPage(node.slug, storyTemplate, { id: node.id }))
  })
}