import React, { createContext, ReactNode } from 'react'
import axios from 'axios'

import { AuthContext } from './auth'
import { SearchType } from '../types/searchTypes'
import { Playlists } from '../types/PlaylistType'
import { PlaylistData } from '../types/PlaylistDataType'
import { Recommendations } from '../types/getRecommendationsType'
import { NewReleases } from '../types/getNewReleasesType'

type SpotifyContextProps = {
  children: ReactNode
}

interface ISpotifyContextData {
  getAllPlaylists(): Promise<Playlists>
  getPlaylistData(id: string): Promise<PlaylistData>
  Search(text: string): Promise<SearchType>
  getRecommendations(): Promise<Recommendations>
  getNewReleases(): Promise<NewReleases>
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

  async function Search(text: string): Promise<SearchType> {
    try {
      const res = await axios.get(
        `https://api.spotify.com/v1/search?q=${text}&type=track&market=BR&limit=10&offset=0`,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + user?.spotify_token,
          },
        }
      )
      return res.data
    } catch (err: any) {
      throw new Error(err)
    }
  }

  async function getRecommendations(): Promise<Recommendations> {
    try {
      const res = await axios.get(
        'https://api.spotify.com/v1/browse/featured-playlists?country=BR&locale=pt_BR&limit=10&offset=0',
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + user?.spotify_token,
          },
        }
      )
      return res.data
    } catch (err: any) {
      throw new Error(err)
    }
  }

  async function getNewReleases(): Promise<NewReleases> {
    try {
      const res = await axios.get('https://api.spotify.com/v1/browse/new-releases?country=BR&limit=10&offset=0', {
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

  return (
    <SpotifyContext.Provider value={{ getAllPlaylists, getPlaylistData, Search, getRecommendations, getNewReleases }}>
      {children}
    </SpotifyContext.Provider>
  )
}
