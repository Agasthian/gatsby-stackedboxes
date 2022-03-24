/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */


require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Stacked Boxes`,
    description: `A young architecture firm from Chennai`,
    author: `Agasthian`,
    siteUrl: "https://www.stackedboxes.in/",
    social: {
      facebook: "StackedBoxes",
      instagram: "StackedBoxes",
      twitter: "StackedBoxes",
      email: "stackedboxes@stackedboxes.in",
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-styled-components",
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve:`gatsby-transformer-remark`,
      // options:{
      //   plugin:[
      //     {
      //       resolve:'gatsby-remark',
      //       options:{
      //         maxWidth:590,
      //       }
      //     }
      //   ]
      // }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Neuton\:300,400`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: 'fy8kjy39',
        dataset: 'production',
        watchMode:true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
}
