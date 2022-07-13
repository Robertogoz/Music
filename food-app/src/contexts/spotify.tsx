import React, { createContext, ReactNode } from 'react'
import axios from 'axios'

import { AuthContext } from './auth'

type SpotifyContextProps = {
  children: ReactNode
}

// getAllPlaylists types

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

// getPlaylistData types

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

// Context Interface

interface ISpotifyContextData {
  getAllPlaylists(): Promise<Playlists>
  getPlaylistData(id: string): Promise<PlaylistData>
}

export const SpotifyContext = createContext<ISpotifyContextData>({} as ISpotifyContextData)

export function SpotifyProvider({ children }: SpotifyContextProps) {
  const { user } = React.useContext(AuthContext)

  async function getAllPlaylists(): Promise<Playlists> {
    try {
      const res = await axios.get('https://api.spotify.com/v1/me/playlists?limit=20&offset=0', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + user?.spotify_token,
        },
      })
      return res.data
    } catch (err: any) {
      throw new Error(err)
    }
  }

  async function getPlaylistData(id: string): Promise<PlaylistData> {
    try {
      const res = await axios.get(`https://api.spotify.com/v1/playlists/${id}?market=BR`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + user?.spotify_token,
        },
      })
      return res.data
    } catch (err: any) {
      throw new Error(err)
    }
  }

  return <SpotifyContext.Provider value={{ getAllPlaylists, getPlaylistData }}>{children}</SpotifyContext.Provider>
}
