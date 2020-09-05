import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import PostGrid from "../fragments/PostGrid"
import SEO from "../components/Seo"

export default function tagsTemplate({ data, pageContext }) {
  const { tags } = pageContext
  return (
    <Layout>
      <SEO title={"Tags " + tags} keyword={tags} />
      <div className="container-fluid" style={{ marginBottom: "1rem" }}>
        <h1>Post with tags {tags}</h1>
        <PostGrid data={data.allMarkdownRemark.nodes} col={4} />
      </div>
    </Layout>
  )
}

export const tagsQuery = graphql`
  query TagsPosts($tags: String!) {
    allMarkdownRemark(filter: { frontmatter: { tags: { eq: $tags } } }) {
      nodes {
        frontmatter {
          date(formatString: "DD MMMM, YYYY")
          title
          description
          author
          path
          tags
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
