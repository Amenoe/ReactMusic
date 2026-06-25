import React, { memo, useEffect, useRef } from 'react'
import {
  PanelLeft,
  PanelRight,
  PlayListPanelWrapper,
  SongItem
} from './style'
import { useStore } from '@/store'
import dayjs from 'dayjs'
import {
  CaretRightFilled,
  CloseOutlined,
  DeleteOutlined,
  DownloadOutlined,
  FolderAddOutlined,
  LinkOutlined,
  ShareAltOutlined
} from '@ant-design/icons'

interface IProps {
  visible: boolean
  onClose: () => void
}

const PlayListPanel: React.FC<IProps> = ({ visible, onClose }) => {
  const playList = useStore((state) => state.playList)
  const currentIndex = useStore((state) => state.currentIndex)
  const currentSong = useStore((state) => state.currentSong)
  const currentLyric = useStore((state) => state.currentLyric)
  const lyricIndex = useStore((state) => state.lyricIndex)
  const removeFromPlayList = useStore((state) => state.removeFromPlayList)
  const clearPlayList = useStore((state) => state.clearPlayList)
  const playSongInList = useStore((state) => state.playSongInList)

  const lyricScrollRef = useRef<HTMLDivElement>(null)
  const justOpenedRef = useRef(false)

  // 面板打开时标记，让首次定位用 auto 立刻跳到位
  useEffect(() => {
    if (visible) justOpenedRef.current = true
  }, [visible])

  // 歌词跟随滚动
  useEffect(() => {
    if (!visible) return
    const container = lyricScrollRef.current
    if (!container) return
    const activeLine = container.querySelector<HTMLDivElement>(
      '.lyric-line.active'
    )
    if (!activeLine) return
    const offset =
      activeLine.offsetTop -
      container.clientHeight / 2 +
      activeLine.clientHeight / 2
    container.scrollTo({
      top: offset,
      behavior: justOpenedRef.current ? 'auto' : 'smooth'
    })
    justOpenedRef.current = false
  }, [lyricIndex, visible, currentLyric])

  if (!visible) return null

  const handlePlay = (index: number) => {
    playSongInList(index)
  }

  const handleRemove = (e: React.MouseEvent, index: number) => {
    e.stopPropagation()
    removeFromPlayList(index)
  }

  const stop = (e: React.MouseEvent) => e.stopPropagation()

  return (
    <PlayListPanelWrapper onClick={stop}>
      <PanelLeft>
        <div className="panel-header">
          <div className="title">
            播放列表<span className="count">({playList.length})</span>
          </div>
          <div className="actions">
            <button className="action-btn">
              <FolderAddOutlined className="icon" />
              收藏全部
            </button>
            <button className="action-btn" onClick={clearPlayList}>
              <DeleteOutlined className="icon" />
              清除
            </button>
          </div>
        </div>
        <div className="panel-list">
          {playList.length === 0 ? (
            <div className="empty-tip">还没有播放任何歌曲</div>
          ) : (
            playList.map((song, index) => (
              <SongItem
                key={song.id}
                $isActive={index === currentIndex}
                onClick={() => handlePlay(index)}
              >
                <span className="play-indicator">
                  <CaretRightFilled />
                </span>
                <span className="song-name">{song.name}</span>
                <div className="row-actions">
                  <button className="action-btn" title="收藏" onClick={stop}>
                    <FolderAddOutlined />
                  </button>
                  <button className="action-btn" title="分享" onClick={stop}>
                    <ShareAltOutlined />
                  </button>
                  <button className="action-btn" title="下载" onClick={stop}>
                    <DownloadOutlined />
                  </button>
                  <button
                    className="action-btn"
                    title="删除"
                    onClick={(e) => handleRemove(e, index)}
                  >
                    <DeleteOutlined />
                  </button>
                </div>
                <span className="song-meta song-artist">
                  {song.ar?.map((a) => a.name).join('/')}
                </span>
                <span className="song-duration">
                  {dayjs(song.dt).format('mm:ss')}
                </span>
                <button className="song-link" title="歌曲链接" onClick={stop}>
                  <LinkOutlined />
                </button>
              </SongItem>
            ))
          )}
        </div>
      </PanelLeft>
      <PanelRight>
        <div className="right-header">
          <span className="song-title">{currentSong.name || '暂无歌曲'}</span>
          <button className="close-btn" onClick={onClose}>
            <CloseOutlined />
          </button>
        </div>
        <div className="right-content">
          {currentSong.al?.picUrl && (
            <div
              className="cover-bg"
              style={{ backgroundImage: `url(${currentSong.al.picUrl})` }}
            />
          )}
          {currentLyric.length > 0 ? (
            <div className="lyric-scroll" ref={lyricScrollRef}>
              {currentLyric.map((item, i) => (
                <div
                  key={i}
                  className={`lyric-line ${i === lyricIndex ? 'active' : ''}`}
                >
                  {item.text}
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-lyric">暂无歌词</div>
          )}
        </div>
      </PanelRight>
    </PlayListPanelWrapper>
  )
}

export default memo(PlayListPanel)
