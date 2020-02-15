require('dotenv').config()
const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Tipe Starter Blog`,
    author: `Team @Tipe`,
    description: `A starter blog demonstrating what Gatsby + Tipe can do.`,
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    {
      resolve: `@tipe/gatsby-theme-tipe`,
      options: {
        basePath: '/tipe',
        project: process.env.TIPE_PROJECT,
        environmentForSdk: process.env.TIPE_ENVIRONMENT,
        schemaPath: path.resolve('./src/tipe'),
        host: process.env.TIPE_HOST,
        apiKey: process.env.TIPE_API_KEY,
      },
    },
    {
      resolve: '@tipe/gatsby-source-tipe',
      options: {
        apiKey: process.env.TIPE_API_KEY,
        environment: process.env.TIPE_ENVIRONMENT,
        project: process.env.TIPE_PROJECT,
        host: process.env.TIPE_HOST,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
