import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby";

import PostGrid from "../fragments/PostGrid";

const Sakamichi = ({ data }) => {
  return (
    <Layout>
      <h1>Sakamichi</h1>
      <div className="container">
        <PostGrid data={data.allMarkdownRemark.nodes} col={3} />
      </div>
    </Layout>
  )
}

export const SakamichiQuery = graphql`
  query sakamichiQuery {
    allMarkdownRemark(filter: {frontmatter: {tags: {in: ["Nogizaka46", "Keyakizaka46", "Hinatazaka46"]}}}) {
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

export default Sakamichi;