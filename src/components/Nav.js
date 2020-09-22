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
          to="/variety"
        >
          Variety
        </Link>
        <Link
          className="nav-link text-uppercase"
          activeClassName="nav-link active"
          to="/concert"
        >
          Concert
        </Link>
        <Link
          className="nav-link text-uppercase"
          activeClassName="nav-link active"
          to="/music"
        >
          Music
        </Link>
      </Nav>
      <div>
        <Link
          className="nav-link"
          style={{ cursor: "pointer" }}
          to="/search"
          activeClassName="nav-link active"
        >
          <i className="fa fa-search"></i>
        </Link>
      </div>
    </Navbar.Collapse>
  </Navbar>
)

export default Navigation
