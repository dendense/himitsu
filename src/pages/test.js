import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import IconText from "../components/IconText"
import "../styles/index.scss"

const TestPage = ({ data }) => {
  const _ = require("lodash")
  let x = [1, 2, 7, 10, 13, 15]
  let result = _.sampleSize(x, 4)
  console.log(result)

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
