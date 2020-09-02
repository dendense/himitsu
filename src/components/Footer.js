import React from "react"

import IconText from "../components/IconText"
import "../styles/index.scss"

export default function Footer(props) {
  return (
    <div class="container-fluid himitsu-footer">
      <div className="row p-3">
        <div class="col-sm p-1">
          <IconText TextIcon="H">HIMITSU MEDIA</IconText>
        </div>
        <div class="col-auto p-1">
          <IconText TextIcon="💖">Made With Love</IconText>
        </div>
      </div>
    </div>
  )
}
