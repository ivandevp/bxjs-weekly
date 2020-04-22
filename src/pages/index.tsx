import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Episodes from "../components/episodes"
import GlobalStyles from "../fonts/global-styles"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Unexpected News Podcast" />
    <GlobalStyles />

    <Episodes episodes={data.allMarkdownRemark.edges} />
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            date(formatString: "MMMM DD, YYYY")
            image
            audio
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
