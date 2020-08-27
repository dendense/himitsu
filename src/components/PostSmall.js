import React from "react"
import { Link } from "gatsby"

import { slugify } from "../utils/utilityFunction"
import "../styles/index.scss"

const PostSmall = ({ title, date, path, tags }) => (
  <div className="col mb-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {tags.map(tag => (
          <div className="mr-1 d-inline-flex">
            <Link to={`/tag/${slugify(tag)}`}>
              <span class="badge badge-primary text-uppercase">{tag}</span>
            </Link>
          </div>
        ))}
        <Link to={path} className="btn btn-primary">
          Read more
        </Link>
        <p className="card-text">
          <small className="text-muted">Date : {date}</small>
        </p>
      </div>
    </div>
  </div>
)

export default PostSmall
