import { Platform } from "../types"

import AnchorIcon from "../images/platforms/anchor.png"
import SpotifyIcon from "../images/platforms/spotify.png"
import ApplePodcastsIcon from "../images/platforms/apple.png"
import GooglePodcastsIcon from "../images/platforms/google.png"
import RSSIcon from "../images/platforms/rss.svg"

const podcastPlatforms: Platform[] = [
  {
    id: "anchor",
    name: "Anchor.fm",
    link: "https://anchor.fm/unexpected-news",
    logo: AnchorIcon,
  },
  {
    id: "spotify",
    name: "Spotify",
    link: "https://open.spotify.com/show/10QbPaeLMdTMOEemPAXaA2",
    logo: SpotifyIcon,
  },
  {
    id: "apple",
    name: "Apple Podcasts",
    link:
      "https://podcasts.apple.com/pe/podcast/unexpected-news-podcast/id1498647039",
    logo: ApplePodcastsIcon,
  },
  {
    id: "google",
    name: "Google Podcasts",
    link:
      "https://podcasts.google.com/?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8xM2M0OGRmNC9wb2RjYXN0L3Jzcw%3D%3D",
    logo: GooglePodcastsIcon,
  },
  {
    id: "rss",
    name: "RSS Feed",
    link: "https://anchor.fm/s/13c48df4/podcast/rss",
    logo: RSSIcon,
  },
]

export default podcastPlatforms
