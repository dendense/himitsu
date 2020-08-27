import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 : Not Found" />
    <div className="container d-flex justify-content-center align-items-center">
      <div className="notfound-card">
        <h1>Nothing Here Lad's</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
