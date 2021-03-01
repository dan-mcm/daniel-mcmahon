import React from "react"

import { COLORS, BORDER_RADIUS } from "../styles/constants"
import blackHex from "../images/what-the-hex-dark.png"

const Button = ({ children }) => (
  <button
    style={{
      padding: ".5rem 2.5rem",
      color: COLORS.lightGray,
      fontWeight: 700,
      backgroundImage: `url(${blackHex})`,
      borderRadius: BORDER_RADIUS,
      borderWidth: 0,
      cursor: "pointer"
    }}
  >
    {children}
  </button>
)

export default Button
