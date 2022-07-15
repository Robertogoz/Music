export interface Image {
  height?: any
  url: string
  width?: any
}

export interface Owner {
  display_name: string
  href: string
  id: string
  type: string
  uri: string
}

export interface Tracks {
  href: string
  total: number
}

export interface Item {
  collaborative: boolean
  description: string
  href: string
  id: string
  images: Image[]
  name: string
  owner: Owner
  primary_color?: any
  public?: any
  tracks: Tracks
  type: string
  uri: string
}

export interface Playlists {
  href: string
  items: Item[]
  limit: number
  next: string
  offset: number
  previous?: any
  total: number
}

export interface Recommendations {
  message: string
  playlists: Playlists
}
