import React from "react"
import propTypes from "prop-types"

import "../styles/index.scss"

export default function IconText(props) {
  return (
    <div className="himitsu-icontext d-flex">
      <div className="himitsu-icon mr-1">
        {/* <img
          alt="Himitsu Project"
          src={LogoHimitsu}
          width="30"
          height="30"
          className="d-inline-block align-top mr-2"
        /> */}
        {props.SingleIcon}
      </div>
      <div className="himitsu-text">{props.children}</div>
    </div>
  )
}

IconText.propTypes = {
  className: propTypes.string,
}
