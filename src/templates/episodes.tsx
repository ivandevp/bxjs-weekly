import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO frontmatter={post.frontmatter} fields={post.fields} isBlogPost />
      <div>
        <div
          dangerouslySetInnerHTML={{ __html: post.frontmatter.audio }}
          css={css`
            margin: 1em 0;

            & > iframe {
              width: 100%;
              height: 100%;
              margin-bottom: 0;
            }
          `}
        />
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          css={css`
            & h1 {
              margin-top: 0;
            }
          `}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        audio
        title
        description
        image
      }
      fields {
        slug
      }
    }
  }
`
