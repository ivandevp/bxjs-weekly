import React from "react"
import { Link } from "gatsby"
import { css, jsx } from "@emotion/core"
import Platforms from "./platforms"
import PodcastIcon from "../images/podcast.svg"
import podcastPlatforms from "../data/podcast-platforms"

interface IHeaderProps {
  siteTitle: string
  siteDescription: string
}

const Header: React.FC<IHeaderProps> = ({ siteTitle, siteDescription }) => (
  <header
    css={css`
      background-color: #323330;
      padding: 40px 0;
    `}
  >
    <div
      css={css`
        margin: 0 auto;
        max-width: 960px;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <div>
          <h1
            css={css`
              margin: 0;
              color: #f0db4f;
              font-family: "Neutra Text", "sans-serif";
            `}
          >
            <Link
              to="/"
              css={css`
                color: inherit;
                text-decoration: none;
                text-shadow: unset;
                background-image: unset;
              `}
            >
              {siteTitle}
            </Link>
          </h1>

          <p
            css={css`
              color: white;
              margin-top: 10px;
            `}
          >
            {siteDescription}
          </p>
        </div>
        <div
          css={css`
            width: 100px;
          `}
        >
          <img src={PodcastIcon} alt="Podcast" />
        </div>
      </div>
      <Platforms platforms={podcastPlatforms} />
    </div>
  </header>
)

export default Header
