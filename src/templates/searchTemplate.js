import React, { useState } from 'react'
import { graphql } from "gatsby";
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import PostList from "../components/PostList"


export default function SearchTemplate({ data }) {
    const [state, setState] = useState({
        filteredData: data.allMarkdownRemark.nodes,
        query: ""
    })

    const handleSearch = event => {
        const query = event.target.value
        const posts = data.allMarkdownRemark.nodes || []

        const filteredData = posts.filter(post => {
            const { description, title, tags } = post.frontmatter
            return (
                description.toLowerCase().includes(query.toLowerCase()) ||
                title.toLowerCase().includes(query.toLowerCase()) ||
                (tags &&
                    tags.join("")
                    .toLowerCase()
                    .includes(query.toLowerCase())
                )
            )
        })
        setState({ query, filteredData })
    }

    const { filteredData, query } = state
    const posts = filteredData

    return (
        <Layout>
            <SEO title="Search" />
            <div className="mt-3">
                <div className="mb-3">
                    <input class="form-control" type="text"
                        placeholder="Search something..."
                        onChange={handleSearch} />
                </div>
                <ul className="list-group post-list">
                    {query && posts.slice(0, 4).map(post => {
                        const { title, path } = post.frontmatter
                        const image2 = post.frontmatter.image2.childImageSharp.fluid.src
                        return (
                            <PostList
                                key={title}
                                title={title}
                                path={path}
                                image2={image2}
                            />
                        )
                    })}
                    {!query && (
                        <div className="font-weight-bold text-center text-muted"
                            style={{ fontSize: '1.5rem', padding: '100px 0px' }}
                        >
                            No Result
                        </div>
                    )}
                </ul>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query searchQuery {
        allMarkdownRemark (
            sort: { order: DESC, fields: frontmatter___date }
        ) {
            nodes {
                frontmatter {
                    date(formatString: "DD MMMM, YYYY")
                    title
                    description
                    author
                    path
                    tags
                    image2 {
                        childImageSharp {
                            fluid(maxWidth: 500) {
                                src
                            }
                        }
                    }
                }
            }
        }
    }
`