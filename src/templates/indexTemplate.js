import React from "react"
import { graphql, navigate } from "gatsby"
import { Pagination } from "react-bootstrap"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Hero from "../components/Hero"
import TwoPartStyle from "../fragments/twoPartStyle"
import PostGrid from "../fragments/PostGrid"

export default function indexTemplate({ data, pageContext }) {
  const { totalPages, currentPage } = pageContext
  // const itemsPerPage = pageContext.limit;

  return (
    <Layout>
      <SEO title="Homepage" />
      <div className="mt-3">
        <Hero />
        <TwoPartStyle leftlabel="Music" rightlabel="Hinatazaka46" data={data} />
        <div className="mt-3">
          <PostGrid
            sideGap="1rem"
            titlePart="Latest Posts"
            data={data.fragment1.nodes}
            col={4}
          />
          <div className="d-flex justify-content-center p-4">
            <Pagination>
              <Pagination.First />
              {Array.from({ length: totalPages }).map((_, i) => {
                let url = i === 0 ? "/" : `/index/${i + 1}`
                return (
                  <Pagination.Item
                    active={i + 1 === currentPage}
                    onClick={() => {
                      navigate(url)
                    }}
                    key={i + 1}
                  >
                    {i + 1}
                  </Pagination.Item>
                )
              })}
              <Pagination.Last />
            </Pagination>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const IndexQuery = graphql`
  query AllBlogPosts($skip: Int!, $limit: Int!) {
    fragment1: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      limit: $limit
      skip: $skip
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
