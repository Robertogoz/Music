export interface Image {
  height: number
  url: string
  width: number
}

export interface Image2 {
  height: number
  url: string
  width: number
}

export interface Album {
  images: Image2[]
  name: string
}

export interface Artist {
  id: string
  name: string
}

export interface Track {
  album: Album
  artists: Artist[]
  id: string
  name: string
}

export interface Item {
  track: Track
}

export interface Tracks {
  items: Item[]
}

export interface PlaylistData {
  images: Image[]
  name: string
  tracks: Tracks
}
