import React from "react"
import { Link, graphql } from "gatsby"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"

import "../styles/index.scss"
import { slugify } from "../utils/utilityFunction"
import Layout from "../components/Layout"
import Sidebar from "../components/Sidebar"
import SEO from "../components/Seo"

export default function blogTemplate({ data, pageContext }) {
  // const siteUrl = data.site.siteMetadata
  const post = data.markdownRemark
  const { title, author, date, path, tags, image, label } = post.frontmatter
  const { shortenedLink } = pageContext

  // pas production mode, kalau disqusconfig nya sesuain sama production nya yaa~
  const disqusConfig = {
    url: `https://himitsupro.com${path}`,
    title: title,
    identifier: path.split("/").slice(-1)[0],
  }
  console.log(disqusConfig)
  return (
    <Layout>
      <SEO title={title} keyword={("Idols", tags, title)} />
      <div className="row mt-3 post-body">
        <div className="col-md-8">
          <div className="content-bar">
            <h1>{title}</h1>
            <p>
              Posted by <b>{author}</b> on {date} |{" "}
              <CommentCount config={disqusConfig} />
            </p>
            {/*<div className="d-flex justify-content-center">
              <img
                src={image.childImageSharp.fluid.src}
                alt={title}
                width="100%"
                height="500px"
                style={{ objectFit: "contain" }}
              />
            </div>*/}
            <img
                src={image}
                alt={title}
                width="100%"
                height="500px"
                style={{ objectFit: "contain" }}
              />
            <div
              style={{ margin: "0.5rem" }}
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            {shortenedLink && (
              <div className="card mx-auto mt-4" style={{ maxWidth: "600px" }}>
                <div className="card-header text-center">
                  Downloadable Content
                </div>
                <li key="link1" className="list-group-item text-center">
                  <span className="font-weight-bold mr-2">[{label}]</span>
                  <a
                    href={shortenedLink}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {shortenedLink}
                  </a>
                </li>
              </div>
            )}
            <div style={{ marginTop: "2rem" }}>
              Tags :{" "}
              {tags.map(tag => (
                <div className="mr-1 d-inline-flex" key={tag}>
                  <Link to={`/tag/${slugify(tag)}`}>
                    <span className="badge badge-secondary text-uppercase">
                      {tag}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "1rem" }}>
              <Disqus config={disqusConfig} />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <Sidebar />
        </div>
      </div>
    </Layout>
  )
}

export const blogQuery = graphql`
  query BlogPerPosts($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        author
        date(formatString: "DD MMM, YYYY")
        title
        path
        tags
        label
        url
        image
      }
      html
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
