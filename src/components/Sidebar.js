import React from "react"
import { StaticQuery, graphql } from "gatsby"

import "../styles/index.scss"
import PostList from "../components/PostList"
import DiscordImage from "../images/discord.png"
import FacebookImage from "../images/facebook.png"

const Sidebar = () => {
  return (
    <div>
      <div className="card mb-3 bg-light">
        <div className="card-body">
          <div className="card-title text-center">Join to Our Community</div>
          <div className="row">
            <div className="col-sm facebook d-flex justify-content-center align-items-center btn">
              <a
                href="https://www.facebook.com/NaishoSubs"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src={FacebookImage}
                  alt="Facebook"
                  width="40"
                  className="p-1"
                />
              </a>
            </div>
            <div className="col-sm discord d-flex justify-content-center align-items-center btn">
              <a
                href="https://discord.gg/hWSHRb5"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src={DiscordImage}
                  alt="Discord"
                  width="40"
                  className="p-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-header">
          <h5>Featured Post</h5>
        </div>
        <div className="card-body">
          <StaticQuery
            query={graphql`
              {
                allMarkdownRemark(limit: 4, sort: { fields: id }) {
                  edges {
                    node {
                      frontmatter {
                        path
                        title
                      }
                    }
                  }
                }
              }
            `}
            render={data => {
              const _ = require("lodash")
              const randomizePost = data.allMarkdownRemark.edges.map(post => {
                const { title, path } = post.node.frontmatter
                return (
                  <PostList
                    key={`${title}`}
                    title={title}
                    path={path}
                  ></PostList>
                )
              })
              let result = _.sampleSize(randomizePost, 4)
              return <ul className="list-group post-list">{result}</ul>
            }}
          />
        </div>
      </div>
      <div className="card bg-dark mb-3 text-white">
        <div className="card-body">
          <div className="card-title text-center text-uppercase">
            Advertisement
          </div>
          <img
            src="https://via.placeholder.com/320x200"
            alt="Advertise"
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div className="card bg-light" style={{ marginBottom: "1rem" }}>
        <div className="card-body">
          <a
            type="link"
            className="container-fluid btn btn-donation text-white"
            href="https://trakteer.id/dendense-project"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fa fa-heart" /> Support Us on Trakteer!
          </a>
          <a
            type="link"
            className="container-fluid btn btn-warning mt-2"
            href="https://forms.gle/EJWqRyfLTUTV58Dp9"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i class="fa fa-flag" /> Report Error Links
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
