const path = require("path")
const OuoPromise = require("ouo-promise")

const ouo = new OuoPromise("zPdQ4s7s")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const indexTemplate = path.resolve("src/templates/indexTemplate.js")
  const postTemplate = path.resolve("src/templates/postTemplate.js")
  const tagsTemplate = path.resolve("src/templates/tagsTemplate.js")
  const groupTemplate = path.resolve("src/templates/groupTemplate.js")

  const groupPagesConfig = [
    { name: "Sakamichi", tags: ["Nogizaka46", "Keyakizaka46", "Hinatazaka46"] },
    { name: "Music", tags: ["Music", "Musician"] },
  ]

  return graphql(`
    query HimitsuStructure {
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
    // blog post
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
    // index containing blog list with pagination
    const totalItems = res.data.allMarkdownRemark.edges.length
    const itemsPerPage = 8
    const totalPages = Math.ceil(totalItems / itemsPerPage)
    console.log(totalItems, itemsPerPage, totalPages)
    Array.from({ length: totalPages }).forEach((val, i) => {
      createPage({
        path: i === 0 ? "/" : `/index/${i + 1}`,
        component: indexTemplate,
        context: {
          limit: itemsPerPage,
          skip: i * itemsPerPage,
          totalPages: totalPages,
          currentPage: i + 1,
        },
      })
    })
    // tag page (music, musician, nogi, concert, dll)
    res.data.allMarkdownRemark.distinct.forEach(tag => {
      createPage({
        path: `/tag/${tag.toLowerCase()}`,
        component: tagsTemplate,
        context: {
          tags: tag,
        },
      })
    })
    // group page (sakamichi, 48g, chika, dll)
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
