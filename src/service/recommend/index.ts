import { request } from '../index'
import {
  IBannerData,
  IHotRecommendData,
  INewAlbum,
  ITopListData
} from './types'

export function getBanners() {
  return request.get<IBannerData>({
    url: '/banner'
  })
}

// 热门推荐
export function getHotRecommends(limit = 30) {
  return request.get<IHotRecommendData>({
    url: '/personalized',
    params: {
      limit
    }
  })
}

// 首页下的新碟上架
export function getNewAlbums() {
  return request.get<INewAlbum>({
    url: '/album/newest'
  })
}

// 首页下的榜单（其中id需要通过所有榜单接口获取）
export function getPlayListDetail(idx: number) {
  return request.get({
    url: '/playlist/detail',
    params: {
      id: idx
    }
  })
}

// 所有榜单（全局调用一次，缓存歌单id）
export function getTopList() {
  return request.get<ITopListData>({
    url: '/toplist'
  })
}

// 入驻歌手
export function getSettleSinger(limit: string) {
  return request.get({
    url: '/artist/list',
    params: {
      limit
    }
  })
}

// 收藏歌曲到歌单
export function collectionSongToSongList(
  pid: string,
  tracks: string,
  op = 'add'
) {
  return request.get({
    url: '/playlist/tracks',
    params: {
      op,
      pid,
      tracks
    }
  })
}
