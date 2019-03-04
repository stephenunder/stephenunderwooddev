import React from "react";
import { css } from "glamor";

const Header = ({ siteTitle }) => (
  <div
    {...css({
      background: "#2EEC96",
      marginBottom: "1.45rem",
      position: "relative",
      zIndex: 10,
    })}
  >
    <div
      {...css({
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      <h1
        {...css({margin: 0, fontWeight: "normal", color: "111"})}>
        {siteTitle}
      </h1>
    </div>
  </div>
)

export default Header;
