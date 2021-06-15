/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `A hecking travel`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    "gatsby-transformer-sharp",
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
          name: `src`,
          path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              footnotes: true,
              gfm: true,
              maxWidth: 1000,
            },
          },
        ],
      },
    },
  ]
}
