import React from "react"

import { COLORS, BORDER_RADIUS } from "../styles/constants"
import "../styles/button.css"
import whiteHex from "../images/what-the-hex.png"

const Button = ({ children }) => (
  <button
    style={{
      padding: ".5rem 2.5rem",
      color: COLORS.mediumBlack,
      fontWeight: 700,
      backgroundImage: `url(${whiteHex})`,
      borderRadius: BORDER_RADIUS,
      borderWidth: 0,
      cursor: "pointer",
    }}
  >
    {children}
  </button>
)

export default Button
