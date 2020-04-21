/** Distribution platform for podcast */
export declare interface Platform {
  id: string
  name: string
  logo: string
  link: string
}

export declare interface Episode {
  id: string
  frontmatter: {
    title: string
    description: string
    date: string
    image: string
    audio: string
    path: string
  }
}
