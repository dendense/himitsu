import React from "react"
import LeftPart from "./twopart/LeftPart"
import RightPart from "./twopart/RightPart"

export default function twoPartStyle() {
  return (
    <div className="mt-3">
      <div className="row post-small">
        <LeftPart labeltags="Music" />
        <RightPart labeltags="Nogizaka46" />
      </div>
    </div>
  )
}
