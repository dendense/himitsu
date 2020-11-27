const path = require("path")
const OuoPromise = require("ouo-promise")

const ouo = new OuoPromise("zPdQ4s7s")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve("src/templates/pageTemplate.js")
  const postTemplate = path.resolve("src/templates/postTemplate.js")
  const tagsTemplate = path.resolve("src/templates/tagsTemplate.js")
  const groupTemplate = path.resolve("src/templates/groupTemplate.js")
  const searchTemplate = path.resolve("src/templates/searchTemplate.js")

  const groupPagesConfig = [
    { name: "Sakamichi", tags: ["Nogizaka46", "Keyakizaka46", "Hinatazaka46"] },
    { name: "Music", tags: ["Music", "Musician"] },
  ]

  var data_graphql = await graphql(`
    query HimitsuStructure {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              url
            }
          }
        }
        distinct(field: frontmatter___tags)
      }
    }
  `)

  for (let edge of data_graphql.data.allMarkdownRemark.edges) {
    let { node } = edge

    // Ini kalau link / url nya banyak
    // let shortenedLink = await ouo.shortMany(
    //   node.frontmatter.link.map(i => i.url)
    // )

    // Ini kalau link / url nya satu
    shortenedLink = node.frontmatter.url
      ? await ouo.short(node.frontmatter.url)
      : undefined

    createPage({
      path: node.frontmatter.path,
      component: postTemplate,
      context: {
        shortenedLink: shortenedLink,
      },
    })
  }

  createPage({
    path: `/search`,
    component: searchTemplate,
  })

  const totalItems = data_graphql.data.allMarkdownRemark.edges.length
  const itemsPerPage = 12
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  Array.from({ length: totalPages }).forEach((val, i) => {
    createPage({
      path: `/page/${i + 1}`,
      component: pageTemplate,
      context: {
        limit: itemsPerPage,
        skip: i * itemsPerPage,
        totalPages: totalPages,
        currentPage: i + 1,
      },
    })
  })

  data_graphql.data.allMarkdownRemark.distinct.forEach(tag => {
    createPage({
      path: `/tag/${tag.toLowerCase()}`,
      component: tagsTemplate,
      context: {
        tags: tag,
      },
    })
  })

  groupPagesConfig.forEach(group => {
    createPage({
      path: `/${group.name.toLowerCase()}`,
      component: groupTemplate,
      context: {
        name: group.name,
        tags: group.tags,
      },
    })
  })
}
