/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: `watermenplumbing`,
        accessToken: `MC5aa2xlRWhFQUFDWUF0c3cz.77-9VO-_vVVJ77-977-9Su-_ve-_vXLvv70477-9PBfvv71rHe-_vXfvv701QTsZ77-9XDHvv73vv71b`,
        customTypesApiToken: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoibWFjaGluZTJtYWNoaW5lIiwiZGJpZCI6IndhdGVybWVucGx1bWJpbmctMTc2MWVhOTItZDRmMC00NjNkLTk5ZDMtYjhiZjRiYWQ1MDg3XzUiLCJkYXRlIjoxNzE2MDg0Mjk3LCJkb21haW4iOiJ3YXRlcm1lbnBsdW1iaW5nIiwiYXBwTmFtZSI6IkN1c3RvbUFwaVRva2VuIiwiaWF0IjoxNzE2MDg0Mjk3fQ.uOvMPm6h-lz77RSJm2zpH_rjKYjVcVPXSnVIDGgNL24`
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/ // See below to configure properly
        }
      }
    },
  ],
}
