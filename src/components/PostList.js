import React from "react"
import { Link } from "gatsby"

import "../styles/index.scss"

const PostSmall = ({ title, path, image2 }) => (
  <li className="list-group-item">
    <div className="row">
      <div className="col d-flex align-items-center">
        <img
          src={image2}
          alt="nogizaka46"
          style={{ height: "35px" }}
          className="mr-2"
        />
        <span>{title}</span>
      </div>
      <div className="col-sm-auto d-flex align-items-center">
        <Link to={path} className="btn btn-outline-success btn-sm ml-1">
          Read more
        </Link>
      </div>
    </div>
  </li>
)

export default PostSmall
