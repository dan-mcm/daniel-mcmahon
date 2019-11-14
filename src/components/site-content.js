import React from "react"
import SectionHeader from "./section-header"
import Button from "../components/button"

const SiteContent = () => (
  <div style={{ padding: "1rem", textAlign: "center" }}>
    <SectionHeader
      title="Sites"
      description="All things Website Related"
    />
    <a href="https://music-centre.info/"><Button>Music Centre</Button></a>
    <br/>
    <br/>
    <a href="https://dan-mcm.github.io/dnd/"><Button>DM's Toolkit</Button></a>
    <br/>
    <br/>
    <a href="https://cat-ui.herokuapp.com/"><Button>Tap the Cat</Button></a>
    <br/>
    <br/>
    <a href="https://dan-mcm.github.io/docs/"><Button>Docs</Button></a>
  </div>
)

export default SiteContent
