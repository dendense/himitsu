import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Post from "../components/Post"

const Home = ({ data }) => (
  <Layout>
    {console.log(data)}
    <div className="mt-3">
      <div className="row row-cols-1 row-cols-md-3">
        {data.allMarkdownRemark.edges.map(post => {
          const {
            title,
            author,
            date,
            description,
            path,
          } = post.node.frontmatter
          const image = post.node.frontmatter.image.childImageSharp.fluid.src
          return (
            <Post
              title={title}
              author={author}
              date={date}
              description={description}
              path={path}
              image={image}
            ></Post>
          )
        })}
      </div>
    </div>
  </Layout>
)

export default Home

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
