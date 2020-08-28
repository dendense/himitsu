import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PostSmall from "../components/PostSmall"
import NogiBadge from "../images/nogizaka46.png"
import HinaBadge from "../images/hinatazaka46.png"
import "../styles/index.scss"

const TestPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Testing Page" />
      <div className="row post-small">
        <div className="col-md">
          <h1 className="h3 text-uppercase">Nogizaka46</h1>
          <ul className="list-group post-list">
            <li class="list-group-item d-flex align-items-center">
              <img
                src={NogiBadge}
                alt="nogizaka46"
                style={{ height: "35px" }}
                className="mr-2"
              />
              <span style={{ width: "100%" }}>
                Nogizaka Underconstruction Ep.225
              </span>
              <button class="btn btn-outline-success float-right">
                Details
              </button>
            </li>
            <li class="list-group-item d-flex align-items-center">
              <img
                src={NogiBadge}
                alt="nogizaka46"
                style={{ height: "35px" }}
                className="mr-2"
              />
              <span style={{ width: "100%" }}>
                Nogizaka Underconstruction Ep.225
              </span>
              <button class="btn btn-outline-success float-right">
                Details
              </button>
            </li>
            <li class="list-group-item d-flex align-items-center">
              <img
                src={NogiBadge}
                alt="nogizaka46"
                style={{ height: "35px" }}
                className="mr-2"
              />
              <span style={{ width: "100%" }}>
                Nogizaka Underconstruction Ep.225
              </span>
              <button class="btn btn-outline-success float-right">
                Details
              </button>
            </li>
            <li class="list-group-item d-flex align-items-center">
              <img
                src={NogiBadge}
                alt="nogizaka46"
                style={{ height: "35px" }}
                className="mr-2"
              />
              <span style={{ width: "100%" }}>
                Nogizaka Underconstruction Ep.225
              </span>
              <button class="btn btn-outline-success float-right">
                Details
              </button>
            </li>
            <li class="list-group-item d-flex align-items-center">
              <img
                src={NogiBadge}
                alt="nogizaka46"
                style={{ height: "35px" }}
                className="mr-2"
              />
              <span style={{ width: "100%" }}>
                Nogizaka Underconstruction Ep.225
              </span>
              <button class="btn btn-outline-success float-right">
                Details
              </button>
            </li>
            <li class="list-group-item d-flex align-items-center">
              <img
                src={NogiBadge}
                alt="nogizaka46"
                style={{ height: "35px" }}
                className="mr-2"
              />
              <span style={{ width: "100%" }}>
                Nogizaka Underconstruction Ep.225
              </span>
              <button class="btn btn-outline-success float-right">
                Details
              </button>
            </li>
            <li class="list-group-item d-flex align-items-center">
              <img
                src={NogiBadge}
                alt="nogizaka46"
                style={{ height: "35px" }}
                className="mr-2"
              />
              <span style={{ width: "100%" }}>
                Nogizaka Underconstruction Ep.225
              </span>
              <button class="btn btn-outline-success float-right">
                Details
              </button>
            </li>
          </ul>
        </div>
        <div className="col-md">
          <h1 className="h3 text-uppercase">Hinatazaka46</h1>
          <ul className="list-group post-list">
            <li class="list-group-item d-flex align-items-center">
              <img
                src={HinaBadge}
                alt="hinatazaka46"
                style={{ height: "35px" }}
                className="mr-2"
              />
              <span style={{ width: "100%" }}>Hina Bingo! Ep.225</span>
              <button class="btn btn-outline-success float-right">
                Details
              </button>
            </li>
            <li class="list-group-item d-flex align-items-center">
              <img
                src={HinaBadge}
                alt="hinatazaka46"
                style={{ height: "35px" }}
                className="mr-2"
              />
              <span style={{ width: "100%" }}>Hina Bingo! Ep.225</span>
              <button class="btn btn-outline-success float-right">
                Details
              </button>
            </li>
            <li class="list-group-item d-flex align-items-center">
              <img
                src={HinaBadge}
                alt="hinatazaka46"
                style={{ height: "35px" }}
                className="mr-2"
              />
              <span style={{ width: "100%" }}>Hina Bingo! Ep.225</span>
              <button class="btn btn-outline-success float-right">
                Details
              </button>
            </li>
            <li class="list-group-item d-flex align-items-center">
              <img
                src={HinaBadge}
                alt="hinatazaka46"
                style={{ height: "35px" }}
                className="mr-2"
              />
              <span style={{ width: "100%" }}>Hina Bingo! Ep.225</span>
              <button class="btn btn-outline-success float-right">
                Details
              </button>
            </li>
            <li class="list-group-item d-flex align-items-center">
              <img
                src={HinaBadge}
                alt="hinatazaka46"
                style={{ height: "35px" }}
                className="mr-2"
              />
              <span style={{ width: "100%" }}>Hina Bingo! Ep.225</span>
              <button class="btn btn-outline-success float-right">
                Details
              </button>
            </li>
            <li class="list-group-item d-flex align-items-center">
              <img
                src={HinaBadge}
                alt="hinatazaka46"
                style={{ height: "35px" }}
                className="mr-2"
              />
              <span style={{ width: "100%" }}>Hina Bingo! Ep.225</span>
              <button class="btn btn-outline-success float-right">
                Details
              </button>
            </li>
            <li class="list-group-item d-flex align-items-center">
              <img
                src={HinaBadge}
                alt="hinatazaka46"
                style={{ height: "35px" }}
                className="mr-2"
              />
              <span style={{ width: "100%" }}>Hina Bingo! Ep.225</span>
              <button class="btn btn-outline-success float-right">
                Details
              </button>
            </li>
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

export const PerTagsQuery = graphql`
  query PerTagsQuery {
    allMarkdownRemark(filter: { frontmatter: { tags: { in: ["Musician"] } } }) {
      edges {
        node {
          frontmatter {
            tags
            path
            title
          }
        }
      }
    }
  }
`
