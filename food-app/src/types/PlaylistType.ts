export type Playlist = {
  id: string
  name: string
  images: [
    {
      url: string
    }
  ]
}

export type Playlists = {
  items: [Playlist]
}
