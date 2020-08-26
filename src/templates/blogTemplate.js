import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

export default function Template({ data }) {
  const post = data.markdownRemark
  const { title, author, date } = post.frontmatter

  return (
    <Layout>
      <div className="row mt-3">
        <div className="col-md-8">
          <div className>
            <h1>{title}</h1>
            <div className="featured-image"></div>
            <p>
              Posted by {author} on {date}
            </p>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
        <div className="col-md-4">
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.4)",
            }}
          ></div>
        </div>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        author
        date
        title
        path
      }
      html
    }
  }
`