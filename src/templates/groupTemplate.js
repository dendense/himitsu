import React from "react"
import { graphql } from "gatsby"

import "../styles/index.scss"
import SEO from "../components/Seo"
import PostGrid from "../fragments/PostGrid"
import Layout from "../components/Layout"

export default function groupTemplate({ data, pageContext }) {
  const { name } = pageContext

  var posts = []
  for (let node of data.allMarkdownRemark.nodes) {
    if (!posts.map(i => i.frontmatter.path).includes(node.frontmatter.path)) {
      posts.push(node)
    }
  }

  return (
    <Layout>
      <SEO title={name} keyword={name} />
      <h2 className="my-2">Page of {name}</h2>
      <div className="container-fluid">
        <PostGrid data={posts} col={4} />
      </div>
    </Layout>
  )
}

export const GroupQuery = graphql`
  query groupQuery($tags: [String]!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { tags: { in: $tags } } }
    ) {
      nodes {
        frontmatter {
          title
          tags
          path
          author
          date(formatString: "YYYY-MM-DD")
          description
          image {
            childImageSharp {
              fluid(maxWidth: 500) {
                src
              }
            }
          }
        }
      }
    }
  }
`
