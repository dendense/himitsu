import React from "react"

import "../styles/index.scss"
import DiscordImage from "../images/discord.png"
import FacebookImage from "../images/facebook.png"

const Sidebar = () => {
  return (
    <div>
      <div className="card mb-3 bg-dark text-white">
        <div className="card-body">
          <div className="card-title text-center">Join to Our Community</div>
          <div className="row">
            <div className="col-sm facebook d-flex justify-content-center align-items-center btn">
              <a
                href="https://www.facebook.com/NaishoSubs"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src={FacebookImage}
                  alt="Facebook"
                  width="40"
                  className="p-1"
                />
              </a>
            </div>
            <div className="col-sm discord d-flex justify-content-center align-items-center btn">
              <a
                href="https://discord.gg/hWSHRb5"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src={DiscordImage}
                  alt="Discord"
                  width="40"
                  className="p-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card bg-dark text-white">
        <div className="card-body">
          <div className="card-title text-center text-uppercase">
            Advertisement
          </div>
          <img
            src="http://via.placeholder.com/320x200"
            alt="Advertise"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
