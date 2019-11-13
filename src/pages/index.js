import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import TechContent from "../components/tech-content"
import SiteContent from "../components/site-content"
import SocialContent from "../components/social-content"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Hero />
    <TechContent />
    <SiteContent />
    <SocialContent />
    <Contact />
  </Layout>
)

export default IndexPage
