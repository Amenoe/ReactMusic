import { getSongDetail } from '@/service/player'

import { getTopList } from '@/service/recommend'
import { setLocalStorage } from '@/utils/storage'
import { StateCreator } from 'zustand'

import type { ISong } from '@/service/player/types'
import type { ITopList, ITopListData } from '@/service/recommend/types'

export interface CommonState {
  topList: ITopList[]
  fetchTopList: () => Promise<void>
}

export const commonStore: StateCreator<CommonState> = (set) => ({
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
  }
})
