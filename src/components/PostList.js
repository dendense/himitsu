import React from "react"
import { Link } from "gatsby"

import ImgTag from "../fragments/ImgTag"
import "../styles/index.scss"

export default function PostLists({ title, path, tags }) {
  let alt = "Himitsu"
  return (
    <div>
      <li className="list-group-item">
        <div className="row">
          <div className="col d-flex align-items-center">
            <ImgTag tags={tags} alt={alt} />
            {title}
          </div>
          <div className="col-sm-auto d-flex align-items-center">
            <Link to={path} className="btn btn-outline-success btn-sm ml-1">
              Read more
            </Link>
          </div>
        </div>
      </li>
    </div>
  )
}
