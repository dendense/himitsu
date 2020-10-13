import React from "react"
import { Link } from "gatsby"

import "../styles/index.scss"

const LabelGrid = props => (
  <Link to={props.link}>
    <div type="button" className="btn btn-primary btn-lg mr-2">
      {props.title}
    </div>
  </Link>
)
export default LabelGrid
