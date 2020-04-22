module.exports = {
  siteMetadata: {
    title: `Unexpected News Podcast`,
    description: `Resumen semanal de noticias de JavaScript en español.`,
    author: `Ivan Medina - @ivandevp`,
    siteUrl: `https://podcast.unexpected.dev`,
    image: `https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded_episode400/3216485/3216485-1581407940323-0fa7a9a249951.jpg`,
    social: {
      fbAppId: "112538417095047",
      twitter: "@unexpectednewsp",
    },
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `unexpected-news-podcast`,
        short_name: `unp`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `episodes`,
        path: `${__dirname}/episodios`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-remark-images`,
    },
    `gatsby-remark-lazy-load`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
