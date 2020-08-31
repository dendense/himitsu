import React from "react"
import LeftPart from "./twopart/LeftPart"
import RightPart from "./twopart/RightPart"

export default function twoPartStyle(props) {
  return (
    <div className="mt-3">
      <div className="row post-small">
        <LeftPart showtags={props.leftlabel} data={props.data.fragment2} />
        <RightPart showtags={props.rightlabel} data={props.data.fragment3} />
      </div>
    </div>
  )
}
