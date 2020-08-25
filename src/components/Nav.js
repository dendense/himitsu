import React from "react"
import { Link } from "gatsby"

import "../style/scss/style.scss"
import LogoHimitsu from "../images/himitsu-logo.png"

const Nav = () => (
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link to="/">
      <a class="navbar-brand" href="/">
        <img
          src={LogoHimitsu}
          width="30"
          height="30"
          class="d-inline-block align-top mr-1"
          alt=""
          loading="lazy"
        />
        <span className="icon-text">HIMITSU PROJECT</span>
      </a>
    </Link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link
          class="nav-link"
          activeClassName="nav-link active"
          to="/sakamichi"
        >
          Sakamichi Series
        </Link>
        <Link class="nav-link" activeClassName="nav-link active" to="/48groups">
          48 Groups
        </Link>
        <Link
          class="nav-link"
          activeClassName="nav-link active"
          to="/underground"
        >
          Underground
        </Link>
        <Link class="nav-link" activeClassName="nav-link active" to="/music">
          Music
        </Link>
      </div>
    </div>
  </nav>
)

export default Nav
