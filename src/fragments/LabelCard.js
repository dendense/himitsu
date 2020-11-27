import React from "react"
import { Link } from "gatsby"

import "../styles/index.scss"

const LabelCard = props => (
  <Link to={props.link}>
    <div type="button" className={`btn btn-lg mr-2 mb-2 ${props.color}`}>
      {props.title}
    </div>
  </Link>
)
export default LabelCard
