import React from "react"

import { COLORS } from "../styles/constants"

const SectionHeader = ({ title, description }) => (
  <>
    <h2 style={{ color: COLORS.mediumBlack }}>{title}</h2>
    <p style={{ color: COLORS.mediumGray }}>{description}</p>
  </>
)

export default SectionHeader
