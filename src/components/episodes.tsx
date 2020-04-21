import React from "react"
import { css } from "@emotion/core"
import { Episode } from "../types"
import EpisodeCmp from "./episode"

interface IEpisodesProps {
  episodes: {
    node: Episode
  }[]
}

const Episodes: React.FC<IEpisodesProps> = ({ episodes }) => (
  <ul
    css={css`
      margin-left: 0;
    `}
  >
    {episodes
      .filter(({ node }) => node.frontmatter.audio)
      .map(({ node }) => (
        <EpisodeCmp key={node.id} episode={node} />
      ))}
  </ul>
)

export default Episodes
