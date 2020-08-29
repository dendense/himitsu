import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import TwoPartStyled from "../fragments/twoPartStyle"
import "../styles/index.scss"

const TestPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Testing Page" />
      <div className="mt-3">
        <TwoPartStyled />
      </div>
    </Layout>
  )
}
export default TestPage
