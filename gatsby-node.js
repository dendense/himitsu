const path = require("path")
const OuoPromise = require("ouo-promise");

const ouo = new OuoPromise("zPdQ4s7s");

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
              link {
                label
                url
              }
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
    res.data.allMarkdownRemark.edges.forEach(async ({ node }) => {
      let shortenedLink = await ouo.shortMany(node.frontmatter.link.map(i => i.url))
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        context: {
          shortenedLink: shortenedLink
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
