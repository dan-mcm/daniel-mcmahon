import React from "react"
import SectionHeader from "./section-header"
import Button from "../components/button"

const TechContent = () => (
  <div style={{ padding: "1rem", textAlign: "center" }}>
    <SectionHeader
      title="Tech"
      description="All things Technical"
    />
    <a href="https://github.com/dan-mcm"><Button>GitHub</Button></a>
    <br/>
    <br/>
    <a href="https://dev.to/dan_mcm_"><Button>Tech Blog</Button></a>
    <br/>
  </div>
)

export default TechContent
