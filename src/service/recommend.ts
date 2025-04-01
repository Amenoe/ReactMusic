import { IBannerData } from '@/pages/discover/c-pages/recommend'
import { request } from './index'

export function getBanners() {
  return request.get<IBannerData>({
    url: '/banner'
  })
}

// 热门推荐
export function getHotRecommends(limit: any) {
  return request.get({
    url: '/personalized',
    params: {
      limit
    }
  })
}

// 首页下的新碟上架
export function getNewAlbums() {
  return request.get({
    url: '/album/newest'
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
