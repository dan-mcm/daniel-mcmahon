# Daniel McMahon (.com)

[![code setup: GatsbyJS](https://img.shields.io/badge/setup-Gatsby_JS-blueviolet.svg)](https://github.com/gatsbyjs/gatsby)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Using [Gastby JS](https://www.gatsbyjs.org/) & AWS S3 Static Site Hosting.  
A simple landing page hosted on AWS with links to all things related to me.


The minimal landing page starter comes with a few plugins installed already, but it's main focus is on staying simple and looking clean. These things are included by default:

- 🖼 Gatsby Image: images added to the `src/images` folder are automatically optimized by the `gatsby-image` plugin and can be pulled into components with lazy loading and blur up effects
- 📊 Analytics: add your Google Analytics tracking id to `gatsby-config.js` to automatically begin tracking visitors to the site
- 🗺 Sitemap: any new pages added to the site are automically assembled together into a sitemap through `gatsby-plugin-sitemap`
- 🎨 Color Theme: the `src/styles/constants.js` file contains a set of colors and default styles that are applied inline to components on the site that can be overriden with your own styles

## Prerequisites

If you do not have the Gatsby CLI installed yet, do it first.

```bash
npm install --global gatsby-cli
```

The Gatsby CLI uses Node and npm which you will also need installed. More information can be found on [GatsbyJS.org](https://www.gatsbyjs.org/tutorial/part-one/).


Navigate into the project directory and launch the site.

```bash
cd daniel-mcmahon && gatsby develop
```

The site will be opened up in your default browser on http://localhost:8000

Edit code in the `/src`, save your changes, and they'll reload instantly in the browser.

## Deploy


To create an optimized build of the site run this command

```bash
gatsby build
```

A `/public` folder will be assembled that can be deployed.

## Hosting

Hosting is handled via AWS S3 static site hosting with AMS for certificate management & CloudFront for HTTP -> HTTPS routing.
