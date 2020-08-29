import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PostSmall from "../components/PostSmall"
import "../styles/index.scss"

const TestPage = ({ data }) => {
  let labeltags = "Music"
  return (
    <Layout>
      <SEO title="Testing Page" />
      <div className="mt-3">
        <div className="row post-small">
          <div className="col-md">
            <div className="row">
              <div className="col-9">
                <h3>{labeltags}</h3>
              </div>
              <div className="col">
                <Link to="/tag/musician">
                  <span
                    className="btn btn-primary btn-sm float-right"
                    style={{ marginTop: "5.4px" }}
                  >
                    View More
                  </span>
                </Link>
              </div>
            </div>
            <ul className="list-group post-list">
              {data.allMarkdownRemark.edges.map(post => {
                const { title, path } = post.node.frontmatter
                const image2 =
                  post.node.frontmatter.image2.childImageSharp.fluid.src
                return (
                  <PostSmall
                    key={`${title}`}
                    title={title}
                    path={path}
                    image2={image2}
                  ></PostSmall>
                )
              })}
            </ul>
          </div>
          <div className="col-md">
            <div className="row">
              <div className="col-9">
                <h3>{labeltags}</h3>
              </div>
              <div className="col">
                <Link to="/tag/musician">
                  <span
                    className="btn btn-primary btn-sm float-right"
                    style={{ marginTop: "5.4px" }}
                  >
                    View More
                  </span>
                </Link>
              </div>
            </div>
            <ul className="list-group post-list">
              {data.allMarkdownRemark.edges.map(post => {
                const { title, path } = post.node.frontmatter
                const image2 =
                  post.node.frontmatter.image2.childImageSharp.fluid.src
                return (
                  <PostSmall
                    key={`${title}`}
                    title={title}
                    path={path}
                    image2={image2}
                  ></PostSmall>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default TestPage

export const PerTagsQuery = graphql`
  query PerTagsQuery {
    allMarkdownRemark(filter: { frontmatter: { tags: { in: ["Music"] } } }) {
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
