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
              tags
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
    var tags = [];
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
      })
      for (let tag of node.frontmatter.tags) tags.push(tag);
    })
    tags = Array.from(new Set(tags));
    tags.forEach(tag => {
      createPage({
        path: `/tag/${tag.toLowerCase()}`,
        component: tagsTemplate,
        context: {
          tags: tag
        }
      })
    })
    res.data.allMarkdownRemark.distinct.forEach(tag => {
      createPage({
        path: `/tag/${tag.toLowerCase()}`,
        component: tagsTemplate,
        context: {
          tags: tag
        }
      })
    })
  })
}
