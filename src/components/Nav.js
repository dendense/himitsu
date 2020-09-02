import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"

import "../styles/index.scss"
import IconText from "./IconText"

const Navigation = () => (
  <Navbar expand="lg" className="himitsu-navbar">
    <Link to="/">
      <Navbar.Brand>
        <IconText TextIcon="H">HIMITSU PROJECT</IconText>
      </Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link
          className="nav-link text-uppercase"
          activeClassName="nav-link active"
          to="/sakamichi"
        >
          Sakamichi Series
        </Link>
        <Link
          className="nav-link text-uppercase"
          activeClassName="nav-link active"
          to="/48groups"
        >
          48 Groups
        </Link>
        <Link
          className="nav-link text-uppercase"
          activeClassName="nav-link active"
          to="/underground"
        >
          Underground
        </Link>
        <Link
          className="nav-link text-uppercase"
          activeClassName="nav-link active"
          to="/music"
        >
          Music
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Navigation
