import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { COLORS } from "../styles/constants"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 style={{
      color: COLORS.lightWhite,
      textAlign: "center"
    }}>
      Page not Found 💩
    </h1>
    <img style={{
      display: "block",
      marginLeft: "auto",
      marginRight: "auto"
    }}
      src="https://media1.tenor.com/images/f57f77c061d305b404fa5b5f90a3bf0d/tenor.gif?itemid=7860818"
    />
    <p style={{
      color: COLORS.lightWhite,
      textAlign: "center"
    }}>
      You just hit a route that doesn&#39;t exist... lets get you back <a href="./" style={{color: COLORS.babyBlue}}>home</a>.
    </p>
    <br/>
  </Layout>
)

export default NotFoundPage
