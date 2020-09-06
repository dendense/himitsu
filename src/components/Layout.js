import React from "react"
import PropTypes from "prop-types"

import Nav from "./Nav"
import Footer from "./Footer"

const Layout = ({ children }) => (
  <div style={{ minHeight: "100vh", position: "relative" }}>
    <Nav />
    <div
      className="container-fluid himitsu-body"
      style={{ paddingBottom: "100px" }}
    >
      {children}
    </div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
