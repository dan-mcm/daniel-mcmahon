import React from "react"
import SectionHeader from "./section-header"
import Button from "../components/button"

const SocialContent = () => (
  <div style={{ padding: "1rem", textAlign: "center" }}>
    <SectionHeader
      title="Social"
      description="All things Social"
    />
    <a href="https://www.instagram.com/dan_mcm_/"><Button>Instagram</Button></a>
    <br/>
    <br/>
    <a href="https://twitter.com/dan_mcm_"><Button>Twitter</Button></a>
    <br/>
    <br/>
    <a href="https://www.linkedin.com/in/dan-mcm/"><Button>LinkedIn</Button></a>
    <br/>
    <br/>
    <a href="https://www.twitch.tv/dan_mcm_"><Button>Twitch</Button></a>
    <br/>
    <br/>
    <a href="https://steamcommunity.com/id/daniel40392"><Button>Steam</Button></a>
  </div>
)

export default SocialContent
