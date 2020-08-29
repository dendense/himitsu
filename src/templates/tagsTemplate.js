import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Post from "../components/Post"
import SEO from "../components/Seo"

export default function Template({ data, pageContext }) {
  const { tags } = pageContext
  console.log(data);
  return (
    <Layout>
      <SEO title={"Tags " + tags} />
      <div className="mt-3">
        <h1>Post with tags {tags}</h1>
        <div className="row row-cols-1 row-cols-md-3">
          {data.allMarkdownRemark.nodes.map(post => {
            const {
              title,
              author,
              date,
              description,
              path,
              tags,
            } = post.frontmatter
            const image = post.frontmatter.image.childImageSharp.fluid.src
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
}

export const tagsQuery = graphql`
  query TagsPosts($tags: String!) {
    allMarkdownRemark(filter: { frontmatter: { tags: { eq: $tags } } }) {
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
