import React from "react"
import PropTypes from "prop-types"
import dan from "../images/me.jpg"

// social media images
import insta from "../images/socialmedia/iconfinder_Instagram.png"
import linkedin from "../images/socialmedia/iconfinder_linkedin.png"
import twitter from "../images/socialmedia/iconfinder_Twitter.png"

// email
import gmail from "../images/socialmedia/iconfinder_gmail.png"

// dev images
import dev from "../images/socialmedia/iconfinder_Dev.png"
import github from "../images/socialmedia/iconfinder_Github.png"

// music images
import youtube from "../images/socialmedia/iconfinder_YouTube.png"
import spotify from "../images/socialmedia/iconfinder_Spotify.png"


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
    <h1 style={{ textAlign: "center", color: COLORS.mediumBlack }}>Daniel McMahon</h1>
    <p style={{ color: COLORS.mediumBlack, textAlign: "center", fontWeight: "bold"}}>
    Developer | Musician | Teacher
    </p>
    <div style={{ margin: 20, width: `180px`, position: "relative", textAlign: "center" }}>
      <img
        style={{borderRadius: '100%', border: '2px solid gray'}}
        src={dan}
        alt="Daniel McMahon"
      />

    </div>

    <p style={{ color: COLORS.lightGray, textAlign: "center", display: "inline-block"}}>
      <a
        style={{textDecoration: "none", display: "inline-block"}}
        href="mailto:daniel40392@gmail.com"
      >
      <img
        class="icons"
        src={gmail}
        alt="gmail"
      />
      </a>
      <a
        style={{textDecoration: "none", display: "inline-block"}}
        href="https://www.linkedin.com/in/dan-mcm/"
      >
      <img
        class="icons"
        src={linkedin}
        alt="linkedin"
      />
      </a>
      <a
        style={{textDecoration: "none", display: "inline-block"}}
        href="https://github.com/dan-mcm"
      >
      <img
        class="icons"
        src={github}
        alt="github"
      />
      </a>
      <a
        style={{textDecoration: "none", display: "inline-block"}}
        href="https://dev.to/daniel40392"
      >
      <img
        class="icons"
        src={dev}
        alt="dev"
      />
      </a>
      <a
        style={{textDecoration: "none", display: "inline-block"}}
        href="https://www.instagram.com/dan_mcm_/"
      >
        <img
          class="icons"
          src={insta}
          alt="instagram"
        />
      </a>
      <a
        style={{textDecoration: "none", display: "inline-block"}}
        href="https://twitter.com/dan_mcm_"
      >
      <img
        class="icons"
        src={twitter}
        alt="twitter"
      />
      </a>
      <a
        style={{textDecoration: "none", display: "inline-block"}}
        href="https://www.youtube.com/user/Daniel40390/featured?view_as=subscriber"
      >
      <img
        class="icons"
        src={youtube}
        alt="youtube"
      />
      </a>
      <a
        style={{textDecoration: "none", display: "inline-block"}}
        href="https://open.spotify.com/user/1155725969?si=SRKqltB5T2mYNpSPxr7CJw"
      >
      <img
        class="icons"
        src={spotify}
        alt="spotify"
      />
      </a>
      <br />
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
