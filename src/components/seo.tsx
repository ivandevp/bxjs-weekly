import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface Meta {
  name: string
  content: string
}

interface Frontmatter {
  audio: string
  description: string
  title: string
  image: string
}

interface Fields {
  slug: string
}

interface ISEOProps {
  title?: string
  description?: string
  lang?: string
  meta?: Meta[]
  frontmatter?: Frontmatter
  fields?: Fields
  isBlogPost?: boolean
}

const SEO: React.FC<ISEOProps> = ({
  description,
  lang = "es",
  meta = [],
  title,
  fields,
  frontmatter,
  isBlogPost,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            image
          }
        }
      }
    `
  )

  const metaTitle = title || (frontmatter && frontmatter.title)
  const metaDescription =
    description ||
    (frontmatter && frontmatter.description) ||
    site.siteMetadata.description
  const url =
    fields && fields.slug
      ? `${site.siteMetadata.siteUrl}/${fields.slug}`
      : site.siteMetadata.siteUrl
  const image = (frontmatter && frontmatter.image) || site.siteMetadata.image

  return (
    <Helmet
      titleTemplate="Unexpected News Podcast - %s"
      htmlAttributes={{ lang }}
    >
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      {isBlogPost ? <meta property="og:type" content="article" /> : null}
      <meta
        property="og:title"
        content={`${site.siteMetadata.title} - ${metaTitle}`}
      />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={image} />
      {/* <meta property="fb:app_id" content={seo.social.fbAppID} /> */}
    </Helmet>
  )
}

export default SEO
