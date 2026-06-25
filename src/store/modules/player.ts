import { getSongDetail, getSongLyric } from '@/service/player'
import { ISong } from '@/service/player/types'
import { ILyricItem, parseLyric } from '@/utils/format'
import { StateCreator } from 'zustand'

// 播放模式：0=顺序播放, 1=单曲循环, 2=随机播放
export enum PlayMode {
  SEQUENCE = 0,
  LOOP = 1,
  RANDOM = 2
}

export interface PlayerState {
  currentSong: Partial<ISong> // 当前播放的歌曲信息
  currentLyric: ILyricItem[] // 当前播放的歌曲歌词
  lyricIndex: number // 当前播放的歌词索引
  playList: ISong[] // 播放列表
  currentIndex: number // 当前播放歌曲在 playList 中的索引
  playMode: PlayMode // 播放模式
  fetchSongDetail: (id: number) => Promise<void>
  fetchSongLyric: (id: number) => Promise<void>
  changeLyricIndex: (index: number) => void
  addToPlayList: (song: ISong) => void
  removeFromPlayList: (index: number) => void
  clearPlayList: () => void
  playSongInList: (index: number) => void
  playNext: () => boolean
  playPrev: () => void
  changePlayMode: () => void
}

export const playerStore: StateCreator<PlayerState> = (set, get) => ({
  currentSong: {},
  currentLyric: [],
  lyricIndex: -1,
  playList: [],
  currentIndex: -1,
  playMode: PlayMode.SEQUENCE,
  fetchSongDetail: async (id: number) => {
    const res = await getSongDetail(id)
    set({ currentSong: res.songs[0] })
  },
  fetchSongLyric: async (id: number) => {
    const res = await getSongLyric(id)
    const lyricString = res.lrc.lyric
    const lyric = parseLyric(lyricString)
    set({ currentLyric: lyric })
  },
  changeLyricIndex: (index: number) => {
    set({ lyricIndex: index })
  },
  addToPlayList: (song: ISong) => {
    const { playList } = get()
    const existIndex = playList.findIndex((item) => item.id === song.id)
    if (existIndex !== -1) {
      set({ currentIndex: existIndex })
    } else {
      const newList = [...playList, song]
      set({ playList: newList, currentIndex: newList.length - 1 })
    }
  },
  removeFromPlayList: (index: number) => {
    const { playList, currentIndex, fetchSongDetail } = get()
    if (index < 0 || index >= playList.length) return

    const newList = playList.filter((_, i) => i !== index)

    if (newList.length === 0) {
      set({ playList: [], currentIndex: -1, currentSong: {} })
      return
    }

    let newCurrentIndex = currentIndex
    if (index < currentIndex) {
      newCurrentIndex = currentIndex - 1
    } else if (index === currentIndex) {
      newCurrentIndex = Math.min(index, newList.length - 1)
      set({ playList: newList, currentIndex: newCurrentIndex })
      fetchSongDetail(newList[newCurrentIndex].id)
      return
    }

    set({ playList: newList, currentIndex: newCurrentIndex })
  },
  clearPlayList: () => {
    set({ playList: [], currentIndex: -1, currentSong: {} })
  },
  playSongInList: (index: number) => {
    const { playList, fetchSongDetail } = get()
    if (index < 0 || index >= playList.length) return
    set({ currentIndex: index })
    fetchSongDetail(playList[index].id)
  },
  playNext: () => {
    const { playList, currentIndex, playMode, fetchSongDetail } = get()
    if (playList.length === 0) return false

    let nextIndex: number
    if (playMode === PlayMode.LOOP) {
      nextIndex = currentIndex
      set({ currentIndex: nextIndex })
      fetchSongDetail(playList[nextIndex].id)
      return true
    } else if (playMode === PlayMode.RANDOM) {
      if (playList.length === 1) {
        nextIndex = 0
      } else {
        do {
          nextIndex = Math.floor(Math.random() * playList.length)
        } while (nextIndex === currentIndex)
      }
    } else {
      nextIndex = currentIndex + 1
      if (nextIndex >= playList.length) {
        // 顺序模式播放到末尾，停止
        return false
      }
    }

    set({ currentIndex: nextIndex })
    fetchSongDetail(playList[nextIndex].id)
    return true
  },
  playPrev: () => {
    const { playList, currentIndex, playMode, fetchSongDetail } = get()
    if (playList.length === 0) return

    let prevIndex: number
    if (playMode === PlayMode.LOOP) {
      prevIndex = currentIndex
    } else if (playMode === PlayMode.RANDOM) {
      if (playList.length === 1) {
        prevIndex = 0
      } else {
        do {
          prevIndex = Math.floor(Math.random() * playList.length)
        } while (prevIndex === currentIndex)
      }
    } else {
      prevIndex = currentIndex - 1
      if (prevIndex < 0) {
        prevIndex = playList.length - 1
      }
    }

    set({ currentIndex: prevIndex })
    fetchSongDetail(playList[prevIndex].id)
  },
  changePlayMode: () => {
    const { playMode } = get()
    const nextMode = (playMode + 1) % 3
    set({ playMode: nextMode as PlayMode })
  }
})
