import React from "react"
import { graphql, navigate } from "gatsby"
import { Pagination } from "react-bootstrap"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PostGrid from "../fragments/PostGrid"

export default function pageTemplate({ data, pageContext }) {
  const { totalPages, currentPage } = pageContext
  // const itemsPerPage = pageContext.limit;

  return (
    <Layout>
      <SEO title="Homepage" />
      <div className="mt-3">
        <div className="mt-3">
          <PostGrid
            sideGap="1rem"
            titlePart="Posts"
            data={data.allMarkdownRemark.nodes}
            col={4}
          />
          <div className="d-flex justify-content-center p-4">
            <Pagination>
              <Pagination.First />
              {Array.from({ length: totalPages }).map((_, i) => {
                let url = `/page/${i + 1}`
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

export const pageQuery = graphql`
  query AllBlogPosts($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
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
  }
`
