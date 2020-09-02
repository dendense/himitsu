import React from "react"
import propTypes from "prop-types"

import "../styles/index.scss"

export default function IconText(props) {
  return (
    <div className="himitsu-icontext d-flex">
      <div className="himitsu-icon mr-1">{props.TextIcon}</div>
      <div className="himitsu-text">{props.children}</div>
    </div>
  )
}

IconText.propTypes = {
  className: propTypes.string,
}
