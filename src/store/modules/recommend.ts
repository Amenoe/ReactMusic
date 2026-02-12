import {
  getBanners,
  getHotRecommends,
  getNewAlbums,
  getPlayListDetail,
  getSettleSinger
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
  playList: { name: ''; data: { tracks: [] } }[] // 榜单数据
  topArtists: [] // 入驻歌手
  fetchBanners: () => Promise<void>
  fetchTopArtist: () => Promise<void>
  fetchHotRecommend: () => Promise<void>
  fetchNewAlbum: () => Promise<void>
  fetchPlayListDetail: () => Promise<void>
}

export const recommendStore: StateCreator<RecommendState> = (set) => ({
  bannersList: [], //首页banner
  hotRecommendList: [], // 热门推荐
  newAlbumList: [], // 新碟上架
  playList: [], // 榜单数据
  topArtists: [], // 入驻歌手

  fetchBanners: async () => {
    const res = await getBanners()
    set({ bannersList: res.banners })
  },

  fetchTopArtist: async () => {
    const res = await getSettleSinger(5)
    set({ topArtists: res.artists })
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
        set((state) => ({
          playList: [...state.playList, { name: item.name, data: res.playlist }]
        }))
      }
      // 其他榜单数据获取逻辑保持不变
      if (item.name === '新歌榜') {
        const res = await getPlayListDetail(item.id)
        set((state) => ({
          playList: [...state.playList, { name: item.name, data: res.playlist }]
        }))
      }
      if (item.name === '原创榜') {
        const res = await getPlayListDetail(item.id)
        set((state) => ({
          playList: [...state.playList, { name: item.name, data: res.playlist }]
        }))
      }
    }
  }
})
