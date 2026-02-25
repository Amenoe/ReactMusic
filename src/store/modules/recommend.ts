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

    const playList = []
    for (const item of topIdList) {
      if (['飙升榜', '新歌榜', '原创榜'].includes(item.name)) {
        const res = await getPlayListDetail(item.id)
        playList.push({ name: item.name, data: res.playlist })
      }
    }
    set({ playList })
  }
})
