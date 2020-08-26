import React from "react"
import PropTypes from "prop-types"

import Nav from "./Nav"

const Layout = ({ children }) => (
  <div className="layout-himitsu">
    <Nav />
    <main className="container-fluid">{children}</main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
