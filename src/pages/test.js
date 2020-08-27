import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const TestPage = () => {
  return (
    <Layout>
      <SEO title="Testing Page" />
      <div>
        <div className="card">
          <a href="https://facebook.com" rel="noreferer">
            <i className="fab fa-discord" />
          </a>
        </div>
      </div>
    </Layout>
  )
}
export default TestPage
