import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GlobalStyles from "../fonts/global-styles"

const IndexPage = () => (
  <Layout>
    <SEO title="Unexpected News Podcast" />
    <GlobalStyles />
    <h1>Hola banda!</h1>
    <p>Aquí encontrarán los episodios del Podcast.</p>
  </Layout>
)

export default IndexPage
