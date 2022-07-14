export interface Image {
  height: number
  url: string
  width: number
}

export interface Album {
  album_type: string
  href: string
  id: string
  images: Image[]
  name: string
  release_date: string
  release_date_precision: string
  total_tracks: number
  type: string
}

export interface Artist {
  href: string
  id: string
  name: string
  type: string
}

export interface Item {
  album: Album
  artists: Artist[]
  explicit: boolean
  href: string
  id: string
  name: string
  popularity: number
  type: string
}

export interface Tracks {
  href: string
  items: Item[]
  limit: number
  next: string
  offset: number
  previous?: any
  total: number
}

export interface SearchType {
  tracks: Tracks
}
