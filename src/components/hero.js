import React from "react"
import PropTypes from "prop-types"
import dan from "../images/dan.png"
import { COLORS } from "../styles/constants"

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "2rem",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
        opacity: 1,
      }}
    />
    <h1 style={{ textAlign: "center", color: COLORS.lightGray }}>Daniel McMahon</h1>
    <div style={{ margin: 20, width: `200px`, position: "relative" }}>
      <img
        style={{borderRadius: '100%', border: '2px solid white'}}
        src={dan}
        alt="Daniel McMahon"
      />
    </div>
    <p style={{ color: COLORS.lightGray, textAlign: "center", fontWeight: "bold"}}>
    👨‍💻 Software Engineer 👨‍💻 <br/><br/>
    🎹 Musician 🎹<br/><br/>
    👨‍🏫 Educator 👨‍🏫
    </p>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
