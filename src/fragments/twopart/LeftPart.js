import React from "react"
import { Link } from "gatsby"

import PostList from "../../components/PostList"
import { slugify } from "../../utils/utilityFunction"
import "../../styles/index.scss"

export default function LeftPartTags(props) {
  return (
    <div className="container-fluid container-leftpart">
      <div className="row row-leftpart">
        <div className="col d-flex align-items-center">
          <h4>{props.showtags}</h4>
        </div>
        <div className="col">
          <Link to={`/tag/${slugify(props.showtags)}`}>
            <span className="btn btn-primary btn-sm float-right">
              View More
            </span>
          </Link>
        </div>
      </div>
      <ul className="list-group post-list">
        {props.data.edges.map(post => {
          const { title, path, tags } = post.node.frontmatter
          return (
            <PostList
              key={`${title}`}
              title={title}
              path={path}
              tags={tags}
            ></PostList>
          )
        })}
      </ul>
    </div>
  )
}
