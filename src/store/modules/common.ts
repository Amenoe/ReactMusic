import { getTopList } from '@/service/recommend'
import { ITopList, ITopListData } from '@/service/recommend/types'
import { setLocalStorage } from '@/utils/storage'
import { StateCreator } from 'zustand'

export interface ICommonState {
  topList: ITopList[]
  fetchTopList: () => Promise<void>
}

export const commonStore: StateCreator<ICommonState> = (set) => ({
  topList: [],
  fetchTopList: async () => {
    const res = await getTopList()
    set({ topList: res.list })
    const data = res.list.map((item: ITopList) => ({
      name: item.name,
      id: item.id
    }))

    setLocalStorage('topIdList', data)
  }
})
