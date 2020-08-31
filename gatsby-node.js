const path = require("path")
const OuoPromise = require("ouo-promise")

const ouo = new OuoPromise("zPdQ4s7s")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const postTemplate = path.resolve("src/templates/blogTemplate.js")
  const tagsTemplate = path.resolve("src/templates/tagsTemplate.js")
  const groupTemplate = path.resolve("src/templates/groupTemplate.js")

  const groupPagesConfig = [
    { name: "Sakamichi", tags: ["Nogizaka46", "Keyakizaka46", "Hinatazaka46"] },
    { name: "Music", tags: ["Music", "Musician"] },
  ]

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
      let shortenedLink = await ouo.shortMany(
        node.frontmatter.link.map(i => i.url)
      )
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        context: {
          shortenedLink: shortenedLink,
        },
      })
    })
    res.data.allMarkdownRemark.distinct.forEach(tag => {
      createPage({
        path: `/tag/${tag.toLowerCase()}`,
        component: tagsTemplate,
        context: {
          tags: tag,
        },
      })
    })
    groupPagesConfig.forEach(group => {
      console.log(group)
      createPage({
        path: `/${group.name.toLowerCase()}`,
        component: groupTemplate,
        context: {
          name: group.name,
          tags: group.tags,
        },
      })
    })
  })
}
