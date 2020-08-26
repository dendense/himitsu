import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import "./post.scss"

let alt = "himitsu-images"
const Posts = ({ title, author, date, description, path, fluid }) => (
  <div className="col mb-4">
    <div className="card">
      <Img fluid={fluid} className="card-img-top" alt={alt} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
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
