import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PostSmall from "../components/PostSmall"
import "../styles/index.scss"

const TestPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Testing Page" />
      <div className="row post-small">
        <div className="col-md">
          <ul className="list-group">
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
          </ul>
        </div>
        <div className="col-md">
          <ul className="list-group">
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
          </ul>
        </div>
      </div>
      <div className="mt-3">
        <div className="row row-cols-1 row-cols-md-3">
          {data.allMarkdownRemark.edges.map(post => {
            const { title, date, path, tags } = post.node.frontmatter
            return (
              <PostSmall
                key={`${date}__${title}`}
                title={title}
                date={date}
                path={path}
                tags={tags}
              ></PostSmall>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}
export default TestPage

export const SmallBlogsQuery = graphql`
  query SmallBlogPosts {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            path
            tags
          }
        }
      }
    }
  }
`
