import React from "react"

import LogoHimitsu from "../images/himitsu-logo.png"
import "../styles/index.scss"

export default function IconText(props) {
  return (
    <div className="himitsu-icontext">
      <div className="himitsu-icon">
        <img
          alt="Himitsu Project"
          src={LogoHimitsu}
          width="30"
          height="30"
          className="d-inline-block align-top mr-2"
        />
      </div>
      <div className="himitsu-text">{props.children}</div>
    </div>
  )
}
