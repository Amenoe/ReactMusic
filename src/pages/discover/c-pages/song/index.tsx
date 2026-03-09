import React, { memo, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SongLeft, SongRight, SongWrapper } from './style'
import { useStore } from '@/store'
import { getSongDetail, getSongLyric } from '@/service/player'
import { parseLyric, ILyricItem } from '@/utils/format'
import { ISong } from '@/service/player/types'
import SongComment from './cpns/comment'

const Song: React.FC = () => {
  const { id } = useParams()
  const lyricContentRef = useRef<HTMLDivElement>(null)

  // 当查看的歌曲不是当前播放歌曲时的本地状态
  const [localSong, setLocalSong] = useState<ISong>()
  const [localLyric, setLocalLyric] = useState<ILyricItem[]>([])
  const [localLyricIndex, setLocalLyricIndex] = useState(0) // 如果未播放，通常为 0

  // 全局状态
  const currentSong = useStore((state) => state.currentSong)
  const currentLyric = useStore((state) => state.currentLyric)
  const lyricIndex = useStore((state) => state.lyricIndex)

  // 判断是否正在查看当前播放的歌曲
  const isCurrentSong = currentSong.id === Number(id)

  const displaySong = isCurrentSong ? currentSong : localSong
  const displayLyric = isCurrentSong ? currentLyric : localLyric
  const displayIndex = isCurrentSong ? lyricIndex : localLyricIndex

  useEffect(() => {
    if (!id) return

    // 如果不是当前歌曲，获取详情
    if (!isCurrentSong) {
      getSongDetail(Number(id)).then((res) => {
        if (res.songs && res.songs.length > 0) {
          setLocalSong(res.songs[0])
        }
      })
      getSongLyric(Number(id)).then((res) => {
        if (res.lrc && res.lrc.lyric) {
          const parsedLyric = parseLyric(res.lrc.lyric)
          setLocalLyric(parsedLyric)
        }
      })
    }
  }, [id, isCurrentSong])

  // 自动滚动逻辑
  useEffect(() => {
    if (displayIndex > 0 && lyricContentRef.current) {
      const activeLine = lyricContentRef.current.children[
        displayIndex
      ] as HTMLElement
      if (activeLine) {
        // 滚动到中间：activeLine.offsetTop - container.height/2 + activeLine.height/2
        const container = lyricContentRef.current
        const scrollSdk =
          activeLine.offsetTop -
          container.clientHeight / 2 +
          activeLine.clientHeight / 2

        container.scrollTo({
          top: scrollSdk,
          behavior: 'smooth'
        })
      }
    }
  }, [displayIndex])

  return (
    <SongWrapper>
      <div className="song-info-container">
        <div
          className="bg-overlay"
          style={{ backgroundImage: `url(${displaySong?.al?.picUrl})` }}
        ></div>
        <div className="content">
          <SongLeft>
            <div className={`image ${isCurrentSong ? 'playing' : ''}`}>
              {displaySong?.al?.picUrl && (
                <img src={displaySong.al.picUrl} alt="" />
              )}
            </div>
          </SongLeft>
          <SongRight>
            {displaySong && (
              <>
                <div className="header">
                  <div className="title">{displaySong.name}</div>
                </div>
                <div className="info-bar">
                  <div className="singer">
                    歌手：
                    {displaySong.ar?.map((item, index) => (
                      <span key={item.id}>
                        <a href="/#">{item.name}</a>
                        {index < (displaySong.ar?.length || 0) - 1 && '/'}
                      </span>
                    ))}
                  </div>
                  <div className="album">
                    所属专辑：
                    <a href="/#">{displaySong.al?.name}</a>
                  </div>
                </div>

                <div className="lyric-content" ref={lyricContentRef}>
                  {displayLyric.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={`line ${index === displayIndex ? 'active' : ''}`}
                      >
                        {item.text}
                      </div>
                    )
                  })}
                  {displayLyric.length === 0 && (
                    <div className="no-lyric">纯音乐，请欣赏</div>
                  )}
                </div>
              </>
            )}
          </SongRight>
        </div>
      </div>
      <SongComment id={Number(id)} />
    </SongWrapper>
  )
}

export default memo(Song)
