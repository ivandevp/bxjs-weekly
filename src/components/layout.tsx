import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css, jsx } from "@emotion/core"

import Header from "./header"
import "./layout.css"

interface ILayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        siteDescription={data.site.siteMetadata.description}
      />
      <div
        css={css`
          margin: 0 auto;
          max-width: 960px;
          padding: 0 1rem;
        `}
      >
        <main>{children}</main>
        <footer
          css={css`
            text-align: center;
            margin: 20px 0;
          `}
        >
          {new Date().getFullYear()} © Unexpected News Podcast. Creado por{" "}
          <a
            href="https://twitter.com/ivandevp"
            target="_blank"
            rel="noopener norreferrer"
          >
            @ivandevp
          </a>{" "}
          con
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          <div>
            Iconos diseñados por{" "}
            <a
              href="https://www.flaticon.es/autores/smashicons"
              title="Smashicons"
              target="_blank"
              rel="noopener norreferrer"
            >
              Smashicons
            </a>{" "}
            from{" "}
            <a
              href="https://www.flaticon.es/"
              title="Flaticon"
              target="_blank"
              rel="noopener norreferrer"
            >
              www.flaticon.es
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Layout
