import React from "react"
import { Link, graphql } from "gatsby"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"

import "../styles/index.scss"
import { slugify } from "../utils/utilityFunction"
import Layout from "../components/Layout"
import Sidebar from "../components/Sidebar"
import SEO from "../components/Seo"

export default function blogTemplate({ data, pageContext }) {
  const post = data.markdownRemark
  const { title, author, date, link, path, tags } = post.frontmatter
  const { shortenedLink } = pageContext

  // pas production mode, kalau disqusconfig nya sesuain sama production nya yaa~
  const disqusConfig = {
    url: `https://himitsupro.com${path}`,
    title: title,
    identifier: path.split("/").slice(-1)[0],
  }
  return (
    <Layout>
      <SEO title={title} keyword={("Idols", tags, title)} />
      <div className="row mt-3 pl-2 pr-2">
        <div className="col-md-8">
          <div className="content-bar">
            <h1>{title}</h1>
            <p>
              Posted by <b>{author}</b> on {date} |{" "}
              <CommentCount config={disqusConfig} />
            </p>
            <div
              style={{ margin: "0.5rem" }}
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            {link.length > 0 && (
              <div className="card mx-auto mt-4" style={{ maxWidth: "600px" }}>
                <div className="card-header text-center">
                  Downloadable Content
                </div>
                {link.map((i, index) => {
                  return (
                    <li key={i.label} className="list-group-item text-center">
                      <span className="font-weight-bold mr-2">[{i.label}]</span>
                      <a
                        href={shortenedLink[index]}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {shortenedLink[index]}
                      </a>
                    </li>
                  )
                })}
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
            <div style={{ marginTop: "3rem" }}>
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
        link {
          label
          url
        }
      }
      html
    }
  }
`
