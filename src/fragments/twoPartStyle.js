import React from "react"
import LeftPart from "./twopart/LeftPart"
import RightPart from "./twopart/RightPart"

export default function twoPartStyle(props) {
  return (
    <div className="mt-3">
      <div className="row post-small">
        <LeftPart showtags="Hinatazaka46" data={props.data.fragment3} />
        <RightPart showtags="Musician" data={props.data.fragment2} />
      </div>
    </div>
  )
}
