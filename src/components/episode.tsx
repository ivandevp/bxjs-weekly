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
      /* align-items: flex-start; */
      align-items: center;
      background-color: #ffffff;
      background: linear-gradient(#f8f8f8, #fff);
      box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
      margin: 1rem auto;
      border-radius: 10px;
      position: relative;

      @media (max-width: 576px) {
        flex-direction: column;
      }

      & img {
        padding: 0.5rem;
      }

      &:nth-of-type(2n) {
        & > div:first-of-type {
          order: 2;
          @media (max-width: 576px) {
            flex-direction: column;
            max-height: 21rem;
            order: 0;
          }
        }

        & > div:last-of-type {
          order: 1;

          @media (min-width: 577px) and (max-width: 768px) {
            & > p {
              text-align: left;
            }
          }
        }
      }

      &:nth-of-type(2n + 1) {
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
      <div
        dangerouslySetInnerHTML={{
          __html: episode.frontmatter.description,
        }}
        css={css`
          margin-bottom: 30px;
        `}
      />
      <p
        css={css`
          position: absolute;
          bottom: 15px;

          @media (max-width: 768px) {
            position: static;
            text-align: right;
          }
        `}
      >
        <Link to={episode.fields.slug}>Ver más ➡️</Link>
      </p>
    </div>
  </li>
)

export default EpisodeCmp
