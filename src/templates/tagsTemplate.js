import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import PostGrid from "../fragments/PostGrid";
import SEO from "../components/Seo"

export default function Template({ data, pageContext }) {
  const { tags } = pageContext
  return (
    <Layout>
      <SEO title={"Tags " + tags} keyword={tags} />
      <div className="mt-3">
        <h1>Post with tags {tags}</h1>
        <div class="container">
          <PostGrid data={data.allMarkdownRemark.nodes} col={3} />
        </div>
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
