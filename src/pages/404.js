import React from "react"
import { Link } from "gatsby"

import NotFoundImg from "../images/notfound.png"
import SEO from "../components/Seo"
import "../styles/index.scss"

const NotFoundPage = () => (
  <div className="container mt-5">
    <SEO title="404 Not Found" />
    <div className="card text-center">
      <div className="card-header">404 Page Not Found</div>
      <div className="card-body">
        <img src={NotFoundImg} alt="404 Not Found" className="notfound-img" />
        <h5 className="card-title">Nothing Here Lads</h5>
        <p>You just hit a route that doesn&#39;t exist... the sadness</p>
        <Link to="/" className="btn btn-dark">
          Back to Home
        </Link>
      </div>
    </div>
  </div>
)

export default NotFoundPage
