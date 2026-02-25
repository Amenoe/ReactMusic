import { getSongDetail } from '@/service/player'

import { getTopList } from '@/service/recommend'
import { setLocalStorage } from '@/utils/storage'
import { StateCreator } from 'zustand'

import type { ISong } from '@/service/player/types'
import type { ITopList, ITopListData } from '@/service/recommend/types'

export interface ICommonState {
  topList: ITopList[]
  currentSong: Partial<ISong> // 当前播放的歌曲信息
  fetchTopList: () => Promise<void>
  fetchSongDetail: (id: number) => Promise<void>
}

export const commonStore: StateCreator<ICommonState> = (set) => ({
  currentSong: {},
  topList: [],
  fetchTopList: async () => {
    const res = await getTopList()
    set({ topList: res.list })
    const data = res.list.map((item) => {
      return {
        name: item.name,
        id: item.id
      }
    })
    setLocalStorage('topIdList', data)
  },

  fetchSongDetail: async (id: number) => {
    const res = await getSongDetail(id)
    set({ currentSong: res.songs[0] })
  }
})
