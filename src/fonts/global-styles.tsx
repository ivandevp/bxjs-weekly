import React from "react"
import { Global, css } from "@emotion/core"
import { NeutraTextBold } from "./fonts"

const GlobalStyle = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "Neutra Text";
        font-weight: 700;
        font-style: normal;
        src: url(${NeutraTextBold}) format("otf");
        font-display: swap;
      }
    `}
  />
)

export default GlobalStyle
