module.exports = {
  siteMetadata: {
    title: `Michelle Weng`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
  //   {
  //   resolve: 'gatsby-plugin-google-analytics',
  //   options: {
  //     "trackingId": ""
  //   }
  // }, 
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/favicon.png"
    }
  },
  {
    resolve: "gatsby-plugin-anchor-links",
    options: {
      offset: -125,
      duration: 900
    }
  },
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
]};