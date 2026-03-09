import { getSongDetail } from '@/service/player'

import { getTopList } from '@/service/recommend'
import { setLocalStorage } from '@/utils/storage'
import { StateCreator } from 'zustand'

import type { ISong } from '@/service/player/types'
import type { ITopList, ITopListData } from '@/service/recommend/types'

export interface CommonState {
  topList: ITopList[]
  volume: number
  fetchTopList: () => Promise<void>
  changeVolume: (volume: number) => void
}

export const commonStore: StateCreator<CommonState> = (set) => ({
  topList: [],
  volume: Number(localStorage.getItem('volume')) || 100,
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
  changeVolume: (volume: number) => {
    set({ volume })
    setLocalStorage('volume', volume)
  }
})
