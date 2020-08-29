import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"

import LogoHimitsu from "../images/himitsu-logo.png"

const Navigation = ({ tags }) => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Link to="/">
      <Navbar.Brand>
        <img
          alt="Himitsu Project"
          src={LogoHimitsu}
          width="30"
          height="30"
          className="d-inline-block align-top mr-2"
        />
        HIMITSU PROJECT
      </Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
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
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Navigation
