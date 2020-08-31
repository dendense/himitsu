import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/Seo"
import PostGrid from "../fragments/PostGrid"
import Layout from "../components/Layout"

export default function Template({ data, pageContext }) {
  const { name } = pageContext
  return (
    <Layout>
      <SEO title={name} keyword={name} />
      <h1>{name}</h1>
      <div className="container">
        <PostGrid data={data.allMarkdownRemark.nodes} col={3} />
      </div>
    </Layout>
  )
}

export const GroupQuery = graphql`
  query groupQuery($tags: [String]!) {
    allMarkdownRemark(filter: { frontmatter: { tags: { in: $tags } } }) {
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
