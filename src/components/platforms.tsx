import React from "react"
import { css } from "@emotion/core"
import PlatformCmp from "./platform"
import { Platform } from "../types"

interface IPlatformsProps {
  platforms: Platform[]
}

const Platforms: React.FC<IPlatformsProps> = ({ platforms }) => {
  return (
    <ul
      css={css`
        list-style: none;
        padding-left: 0;
        display: flex;
      `}
    >
      {platforms.map((platform) => {
        return <PlatformCmp key={platform.id} platform={platform} />
      })}
    </ul>
  )
}

export default Platforms
