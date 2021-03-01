module.exports = {
  siteMetadata: {
    title: `Daniel McMahon`,
    description: `Daniel McMahon - Developer, Musician & Teacher`,
    author: `@dmcmahon`,
    siteUrl: `https://daniel-mcmahon.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-47078105-5",
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
