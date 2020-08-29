import React from "react"
import { Link } from "gatsby"

import "../styles/index.scss"

const PostSmall = ({ title, path, image2 }) => (
  <li className="list-group-item d-flex align-items-center">
    <img
      src={image2}
      alt="nogizaka46"
      style={{ height: "35px" }}
      className="mr-2"
    />
    <span style={{ width: "59%" }}>{title}</span>
    <Link to={path} className="btn btn-outline-success btn-sm ml-1 float-right">
      Read more
    </Link>
  </li>
)

export default PostSmall
