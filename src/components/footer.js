import React from "react"
import PropTypes from "prop-types"
import whiteHex from "../images/what-the-hex.png"
import { COLORS } from "../styles/constants"

const Footer = ({ siteTitle }) => (
  <footer
    style={{
      padding: "1rem",
      backgroundImage: `url(${whiteHex})`
    }}
  >
    <div
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "space-between",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 240px))",
        padding: "1rem 2rem",
        fontSize: ".85rem",
        color: COLORS.gray
      }}
    >
      <div style={{ color: COLORS.gray, fontWeight: 700 }}>
        <a
          style={{ textDecoration: "none", color: COLORS.mediumBlack }}
          href="https://github.com/dan-mcm"
        >
          Daniel McMahon
        </a>
      </div>
      <div style={{ color: COLORS.gray }}>
        © {new Date().getFullYear()}
        {` `}
        {siteTitle}
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
