const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const postTemplate = path.resolve("src/templates/blogTemplate.js")
  const tagsTemplate = path.resolve("src/templates/tagsTemplate.js")

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
        distinct(field: frontmatter___tags)
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }
    res.data.allMarkdownRemark.distinct.forEach(tag => {
      createPage({
        path: `/tag/${tag.toLowerCase()}`,
        component: tagsTemplate,
        context: {
          tags: tag,
        },
      })
    })
  })
}
