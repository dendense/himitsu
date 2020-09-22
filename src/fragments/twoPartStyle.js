import React from "react"
import LeftPart from "./twopart/LeftPart"
import RightPart from "./twopart/RightPart"

export default function twoPartStyle(props) {
  return (
    <div>
      <div className="mt-3 ml-3 mr-3">
        <div className="row post-list">
          <LeftPart showtags={props.leftlabel} data={props.data.fragment2} />
          <RightPart showtags={props.rightlabel} data={props.data.fragment3} />
        </div>
      </div>
      <div className="mt-3 ml-3 mr-3">
        <div className="row post-list">
          <LeftPart
            showtags={props.moreleftlabel}
            data={props.data.fragment4}
          />
          <RightPart
            showtags={props.morerightlabel}
            data={props.data.fragment5}
          />
        </div>
      </div>
    </div>
  )
}
