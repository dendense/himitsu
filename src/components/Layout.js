import React from "react"
import PropTypes from "prop-types"

import Nav from "./Nav"

const Layout = ({ children }) => (
  <div>
    <Nav />
    <div className="container-fluid">{children}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
