import React from "react"

import IconText from "../components/IconText"
import "../styles/index.scss"

export default function Footer(props) {
  return (
    <div className="container-fluid d-flex justify-content-between align-items-center himitsu-footer mt-3">
      <div>
        <IconText SingleIcon="H">HIMITSU MEDIA</IconText>
      </div>
      <div className="d-flex">
        <div className="mr-2">
          <IconText SingleIcon="🖥️">Copyright 2020 Himitsu Project</IconText>
        </div>
        <div>
          <IconText SingleIcon="❤️">Made With Love</IconText>
        </div>
      </div>
    </div>
  )
}
