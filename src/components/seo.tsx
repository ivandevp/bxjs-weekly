import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface Meta {
  name: string
  content: string
}

interface ISEOProps {
  title: string
  description?: string
  lang?: string
  meta?: Meta[]
}

const SEO: React.FC<ISEOProps> = ({
  description,
  lang = "es",
  meta = [],
  title,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet htmlAttributes={{ lang: "es" }}>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
    </Helmet>
  )
}

export default SEO
