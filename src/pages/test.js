import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import IconText from "../components/IconText"
import "../styles/index.scss"

const TestPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Testing Page" />
      <div className=" mt-5 d-flex justify-content-center align-items-center bg-dark">
        <IconText>HIMITSU PROJECT</IconText>
      </div>
    </Layout>
  )
}
export default TestPage
