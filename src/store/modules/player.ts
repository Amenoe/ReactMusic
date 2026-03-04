import { getSongDetail } from '@/service/player'
import { ISong } from '@/service/player/types'
import { StateCreator } from 'zustand'

export interface PlayerState {
  currentSong: Partial<ISong> // 当前播放的歌曲信息
  fetchSongDetail: (id: number) => Promise<void>
}

export const playerStore: StateCreator<PlayerState> = (set) => ({
  currentSong: {},
  fetchSongDetail: async (id: number) => {
    const res = await getSongDetail(id)
    set({ currentSong: res.songs[0] })
  }
})
