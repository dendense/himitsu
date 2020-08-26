import React from "react"
import { Link } from "gatsby"

import { slugify } from "../utils/utilityFunction"
import "./post.scss"

let alt = "himitsu-images"
const Posts = ({ title, author, date, description, path, image, tags }) => (
  <div className="col mb-4">
    <div className="card">
      <img src={image} className="card-img-top" alt={alt} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {tags.map(tag => (
          <div className="mr-1 d-inline-flex">
            <Link to={`/tag/${slugify(tag)}`}>
              <span class="badge badge-primary text-uppercase">{tag}</span>
            </Link>
          </div>
        ))}
        <p className="card-text">{description}</p>
        <Link to={path} className="btn btn-primary">
          Read more
        </Link>
        <p className="card-text">
          <small className="text-muted">Author : {author} | </small>
          <small className="text-muted">Date : {date}</small>
        </p>
      </div>
    </div>
  </div>
)

export default Posts
