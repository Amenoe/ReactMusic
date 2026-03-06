import { request } from '../index'
import { ILyric, ISongDetail, ISongUrl, ISongComment } from './types'

/**
 * 获取歌曲详情
 * @param ids 音乐id，用逗号分隔
 * @returns
 */
export function getSongDetail(ids: number): Promise<ISongDetail> {
  return request.get({
    url: '/song/detail',
    params: {
      ids
    }
  })
}

export function getSongUrl(id: number): Promise<ISongUrl> {
  return request.get({
    url: '/song/url/v1',
    params: {
      id,
      level: 'exhigh'
    }
  })
}

export function getSongLyric(id: number): Promise<ILyric> {
  return request.get({
    url: '/lyric',
    params: {
      id
    }
  })
}

export function getSongComment(
  id: number,
  limit = 20,
  offset = 0
): Promise<ISongComment> {
  return request.get({
    url: '/comment/music',
    params: {
      id,
      limit,
      offset
    }
  })
}

