import { getSongDetail, getSongLyric } from '@/service/player'
import { ISong } from '@/service/player/types'
import { ILyricItem, parseLyric } from '@/utils/format'
import { StateCreator } from 'zustand'

export interface PlayerState {
  currentSong: Partial<ISong> // 当前播放的歌曲信息
  currentLyric: ILyricItem[] // 当前播放的歌曲歌词
  lyricIndex: number // 当前播放的歌词索引
  fetchSongDetail: (id: number) => Promise<void>
  fetchSongLyric: (id: number) => Promise<void>
}

export const playerStore: StateCreator<PlayerState> = (set) => ({
  currentSong: {},
  currentLyric: [],
  lyricIndex: -1,
  fetchSongDetail: async (id: number) => {
    const res = await getSongDetail(id)
    set({ currentSong: res.songs[0] })
  },
  fetchSongLyric: async (id: number) => {
    const res = await getSongLyric(id)
    const lyricString = res.lrc.lyric
    // 对歌词进行解析
    const lyric = parseLyric(lyricString)
    console.log(lyric, 'lyric')

    set({ currentLyric: lyric })
  }
})
