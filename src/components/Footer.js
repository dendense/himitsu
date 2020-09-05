import React from "react"

import IconText from "../components/IconText"
import "../styles/index.scss"

export default function Footer(props) {
  return (
    <div style={{ position: 'absolute', 'bottom': 0, width: '100%' }}>
      <div className="container-fluid himitsu-footer">
        <div className="row p-3">
          <div className="col-sm p-1">
            <IconText TextIcon="H">HIMITSU MEDIA</IconText>
          </div>
          <div className="col-auto p-1">
            <IconText TextIcon="💖">Made With Love</IconText>
          </div>
        </div>
      </div>
    </div>
  )
}
