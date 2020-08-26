import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Post from "../components/Post"

const Blog = ({ data }) => (
  <Layout>
    <div className="mt-3">
      <div className="row row-cols-1 row-cols-md-3">
        {data.allMarkdownRemark.edges.map(post => {
          return (
            <Post
              title={post.node.frontmatter.title}
              author={post.node.frontmatter.author}
              date={post.node.frontmatter.date}
              description={post.node.frontmatter.description}
              path={post.node.frontmatter.path}
              image={post.node.frontmatter.image}
            ></Post>
          )
        })}
      </div>
    </div>
  </Layout>
)

export default Blog

export const AllBlogsQuery = graphql`
  query AllBlogPosts {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            title
            description
            author
            path
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
