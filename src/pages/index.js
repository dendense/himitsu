import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Hero from "../components/Hero"
import TwoPartStyle from "../fragments/twoPartStyle"
import PostGrid from "../fragments/PostGrid"

export default function indexTemplate({ data }) {
  return (
    <Layout>
      <SEO title="Homepage" />
      <div className="mt-3">
        <Hero />
        <TwoPartStyle
          leftlabel="Music"
          moreleftlabel="Musician"
          rightlabel="Nogizaka46"
          morerightlabel="Hinatazaka46"
          data={data}
        />
        <div className="mt-3">
          <PostGrid
            sideGap="1rem"
            titlePart="Latest Posts"
            data={data.fragment1.nodes}
            col={4}
          />
        </div>
      </div>
      <div class="text-center my-4">
        <Link to="/page/1">
          <button class="btn btn-primary">Load more</button>
        </Link>
      </div>
    </Layout>
  )
}

export const IndexQuery = graphql`
  query IndexQuery {
    fragment1: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      limit: 8
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
      limit: 5
      sort: { order: DESC, fields: frontmatter___date }
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
      filter: { frontmatter: { tags: { in: ["Nogizaka46"] } } }
      limit: 5
      sort: { order: DESC, fields: frontmatter___date }
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
    fragment4: allMarkdownRemark(
      filter: { frontmatter: { tags: { in: ["Musician"] } } }
      limit: 5
      sort: { order: DESC, fields: frontmatter___date }
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
    fragment5: allMarkdownRemark(
      filter: { frontmatter: { tags: { in: ["Hinatazaka46"] } } }
      limit: 5
      sort: { order: DESC, fields: frontmatter___date }
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
