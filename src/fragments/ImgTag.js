import React from "react"

import nogizaka from "../../content/assets/badges/nogizaka46.png"
import hinata from "../../content/assets/badges/hinatazaka46.png"
import aks from "../../content/assets/badges/48groups.png"
import musician from "../../content/assets/badges/musician.png"
import chika from "../../content/assets/badges/chika.png"
import "../styles/index.scss"

export default function ImageTag({ tags, alt }) {
  return (
    <div>
      {tags.map(tag => {
        if (tag === "Chika") {
          return (
            <img
              src={chika}
              alt={alt}
              style={{ height: "35px" }}
              className="mr-2"
            />
          )
        }
        if (tag === "Hinatazaka46") {
          return (
            <img
              src={hinata}
              alt={alt}
              style={{ height: "35px" }}
              className="mr-2"
            />
          )
        }
        if (tag === "48Groups") {
          return (
            <img
              src={aks}
              alt={alt}
              style={{ height: "35px" }}
              className="mr-2"
            />
          )
        }
        if (tag === "Musician") {
          return (
            <img
              src={musician}
              alt={alt}
              style={{ height: "35px" }}
              className="mr-2"
            />
          )
        }
        if (tag === "Nogizaka46") {
          return (
            <img
              src={nogizaka}
              alt={alt}
              style={{ height: "35px" }}
              className="mr-2"
            />
          )
        }
        return null
      })}
    </div>
  )
}
