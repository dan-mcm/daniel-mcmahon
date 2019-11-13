import React from "react"

import Button from "../components/button"
import SectionHeader from "./section-header"

const Contact = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Contact"
      description="Feel free to drop me an email"
    />
    <a href="mailto:daniel40392@gmail.com"><Button>Email</Button></a>
  </div>
)

export default Contact
