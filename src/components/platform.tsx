import React from "react"
import { Link } from "gatsby"
import { css, jsx } from "@emotion/core"
import { Platform } from "../types"

interface IPlatformProps {
  platform: Platform
}

const PlatformCmp: React.FC<IPlatformProps> = ({ platform }) => (
  <li
    title={platform.name}
    css={css`
      margin-right: 10px;
      padding: 10px;
      background-color: rgba(255, 255, 255, 0.4);
      height: 30px;
      box-sizing: content-box;
      border-radius: 10px;
    `}
  >
    <a
      href={platform.link}
      target="_blank"
      rel="noopener noreferrer"
      css={css`
        background-image: unset;
      `}
    >
      <img
        src={platform.logo}
        alt={platform.name}
        css={css`
          width: 30px;
        `}
      />
    </a>
  </li>
)

export default PlatformCmp
