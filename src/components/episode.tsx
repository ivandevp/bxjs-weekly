import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { Episode } from "../types"

interface IEpisodeProps {
  episode: Episode
}

const EpisodeCmp: React.FC<IEpisodeProps> = ({ episode }) => (
  <li
    key={episode.id}
    css={css`
      display: flex;
      align-items: flex-start;
      background-color: #ffffff;
      background: linear-gradient(#f8f8f8, #fff);
      box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
      margin: 1rem auto;
      border-radius: 10px;
      position: relative;

      &:nth-child(2n) {
        & > div:first-child {
          order: 2;
        }

        & > div:last-child {
          order: 1;
        }
      }

      &:nth-child(2n + 1) {
        & > div > p:last-child {
          right: 15px;
        }
      }
    `}
  >
    <div
      css={css`
        flex: 1;
      `}
    >
      {episode.frontmatter.image && (
        <img src={episode.frontmatter.image} alt={episode.frontmatter.title} />
      )}
    </div>
    <div
      css={css`
        flex: 3;
        margin-left: 10px;
        margin-right: 10px;
        padding: 15px;
      `}
    >
      <h3
        css={css`
          margin-top: 0;
        `}
      >
        {episode.frontmatter.title}
      </h3>
      <p
        dangerouslySetInnerHTML={{
          __html: episode.frontmatter.description,
        }}
      />
      <p
        css={css`
          position: absolute;
          bottom: 15px;
        `}
      >
        <Link to={episode.fields.slug}>Ver más ➡️</Link>
      </p>
    </div>
  </li>
)

export default EpisodeCmp
