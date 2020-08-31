import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import PostGrid from "../fragments/PostGrid"
import TwoPartStyled from "../fragments/twoPartStyle"
import SEO from "../components/Seo"
import Hero from "../components/Hero"

const Home = ({ data }) => (
  <Layout>
    {console.log(data)}
    <SEO title="Homepage" />
    <div className="mt-3">
      <Hero />
      <TwoPartStyled data={data} />
      <div className="mt-3">
        <PostGrid data={data.fragment1.nodes} col={4} />
      </div>
    </div>
  </Layout>
)

export default Home

export const AllBlogsQuery = graphql`
  query AllBlogPosts {
    fragment1: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
    ) {
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
    fragment2: allMarkdownRemark(
      filter: { frontmatter: { tags: { in: ["Music"] } } }
    ) {
      edges {
        node {
          frontmatter {
            tags
            path
            title
            image2 {
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
    fragment3: allMarkdownRemark(
      filter: { frontmatter: { tags: { in: ["Hinatazaka46"] } } }
    ) {
      edges {
        node {
          frontmatter {
            tags
            path
            title
            image2 {
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
  }
`
