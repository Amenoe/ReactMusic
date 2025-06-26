import {
  getBanners,
  getHotRecommends,
  getNewAlbums,
  getPlayListDetail
} from '@/service/recommend'
import type {
  IBanners,
  IHotRecommend,
  INewAlbumData
} from '@/service/recommend/types'
import { getLocalStorage } from '@/utils/storage'
import { StateCreator } from 'zustand'

export interface RecommendState {
  bannersList: IBanners[]
  hotRecommendList: IHotRecommend[]
  newAlbumList: INewAlbumData[]
  playList: any[]
  fetchBanners: () => Promise<void>
  fetchHotRecommend: () => Promise<void>
  fetchNewAlbum: () => Promise<void>
  fetchPlayListDetail: () => Promise<void>
}

export const recommendStore: StateCreator<RecommendState> = (set) => ({
  bannersList: [],
  hotRecommendList: [],
  newAlbumList: [],
  playList: [],

  fetchBanners: async () => {
    const res = await getBanners()
    set({ bannersList: res.banners })
  },

  fetchHotRecommend: async () => {
    const res = await getHotRecommends(8)
    set({ hotRecommendList: res.result })
  },

  fetchNewAlbum: async () => {
    const res = await getNewAlbums()
    set({ newAlbumList: res.albums })
  },

  fetchPlayListDetail: async () => {
    const topIdList = getLocalStorage('topIdList')
    if (!topIdList) return

    for (const item of topIdList) {
      if (item.name === '飙升榜') {
        const res = await getPlayListDetail(item.id)
        set({ playList: res.playlist })
      }
      // 其他榜单数据获取逻辑保持不变
      if (item.name === '新歌榜') {
        await getPlayListDetail(item.id)
      }
      if (item.name === '原创榜') {
        await getPlayListDetail(item.id)
      }
    }
  }
})