import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Post from "../components/Post"
import SEO from "../components/Seo"

const Home = ({ data }) => (
  <Layout>
    <SEO title="Homepage" />
    <div className="mt-3">
      <div className="row row-cols-1 row-cols-md-3">
        {data.allMarkdownRemark.edges.map(post => {
          const {
            title,
            author,
            date,
            description,
            path,
            tags,
          } = post.node.frontmatter
          const image = post.node.frontmatter.image.childImageSharp.fluid.src
          return (
            <Post
              key={`${date}__${title}`}
              title={title}
              author={author}
              date={date}
              description={description}
              path={path}
              image={image}
              tags={tags}
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
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
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
  }
`
