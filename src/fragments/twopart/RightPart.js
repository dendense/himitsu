import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import PostList from "../../components/PostList"
import { slugify } from "../../utils/utilityFunction"
import "../../styles/index.scss"

export default props => (
  <StaticQuery
    query={graphql`
      query RightPartQuery {
        allMarkdownRemark(
          filter: { frontmatter: { tags: { in: ["Nogizaka46"] } } }
        ) {
          edges {
            node {
              frontmatter {
                tags
                path
                title
                image2 {
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
    `}
    render={data => (
      <div className="col-md">
        <div className="row">
          <div className="col-9">
            <h3>{props.labeltags}</h3>
          </div>
          <div className="col">
            <Link to={`/tag/${slugify(props.labeltags)}`}>
              <span
                className="btn btn-primary btn-sm float-right"
                style={{ marginTop: "5.4px" }}
              >
                View More
              </span>
            </Link>
          </div>
        </div>
        <ul className="list-group post-list">
          {data.allMarkdownRemark.edges.map(post => {
            const { title, path } = post.node.frontmatter
            const image2 =
              post.node.frontmatter.image2.childImageSharp.fluid.src
            return (
              <PostList
                key={`${title}`}
                title={title}
                path={path}
                image2={image2}
              ></PostList>
            )
          })}
        </ul>
      </div>
    )}
  />
)
