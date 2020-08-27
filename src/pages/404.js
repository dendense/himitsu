import React from "react"

import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import "../styles/index.scss"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 Not Found" />
    <div className="row justify-content-center align-items-center notfound">
      <div className="card text-center">
        <div className="card-header">404 Page Not Found</div>
        <div className="card-body">
          <h5 className="card-title">Nothing Here Lad's</h5>
          <p>You just hit a route that doesn&#39;t exist... the sadness</p>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
