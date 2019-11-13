module.exports = {
  siteMetadata: {
    title: `Daniel McMahon`,
    description: `Daniel McMahon - Software Engineer, Musician & Educator`,
    author: `@dmcmahon`,
    siteUrl: `https://daniel-mcmahon.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
