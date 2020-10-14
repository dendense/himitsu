import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Hero from "../components/Hero"
import PostGrid from "../fragments/PostGrid"
import LabelCard from "../fragments/LabelCard"

export default function indexTemplate({ data }) {
  return (
    <Layout>
      <SEO title="Homepage" />
      <div style={{ marginTop: "2rem" }}>
        <Hero />
        <div className="container-fluid mt-3">
          <LabelCard
            link="/sakamichi"
            title="Sakamichi Series"
            color="btn-nogi"
          />
          <LabelCard
            link="/tag/musician"
            title="Musician"
            color="btn-primary"
          />
          <LabelCard
            link="/tag/Hinatazaka46"
            title="Hinatazaka46"
            color="btn-hinata"
          />
          <LabelCard
            link="/tag/music"
            title="Music"
            color="btn-donation text-white"
          />
        </div>
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
  }
`
