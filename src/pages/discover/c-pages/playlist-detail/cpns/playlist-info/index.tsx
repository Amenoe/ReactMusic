import React, { memo } from 'react'
import { PlaylistInfoWrapper } from './style'
import { formatCount } from '@/utils/format'
import {
  PlayCircleOutlined,
  FolderAddOutlined,
  ShareAltOutlined,
  DownloadOutlined
} from '@ant-design/icons'
import { useStore } from '@/store'
import { ISong } from '@/service/player/types'

interface IProps {
  playlist: any
}

const PlaylistInfo: React.FC<IProps> = (props) => {
  const { playlist } = props
  const addToPlayList = useStore((state) => state.addToPlayList)
  const fetchSongDetail = useStore((state) => state.fetchSongDetail)

  const creator = playlist.creator || {}
  const tags: string[] = playlist.tags || []

  // 播放全部
  const handlePlayAll = () => {
    const tracks: ISong[] = playlist.tracks || []
    if (tracks.length > 0) {
      tracks.forEach((song) => addToPlayList(song))
      fetchSongDetail(tracks[0].id)
    }
  }

  return (
    <PlaylistInfoWrapper>
      <div className="cover">
        <img src={playlist.coverImgUrl} alt="" />
      </div>
      <div className="info">
        <div className="title">
          <span className="tag">歌单</span>
          <h2>{playlist.name}</h2>
        </div>
        <div className="creator">
          <img className="avatar" src={creator.avatarUrl} alt="" />
          <span className="name">{creator.nickname}</span>
        </div>
        {tags.length > 0 && (
          <div className="tags">
            标签：
            {tags.map((tag: string) => (
              <span className="tag-item" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
        {playlist.description && (
          <div className="desc">
            介绍：
            <span className="text">{playlist.description}</span>
          </div>
        )}
        <div className="actions">
          <button className="play-all" onClick={handlePlayAll}>
            <PlayCircleOutlined />
            播放全部
          </button>
          <button className="action-btn">
            <FolderAddOutlined />
            收藏 ({formatCount(playlist.subscribedCount)})
          </button>
          <button className="action-btn">
            <ShareAltOutlined />
            分享
          </button>
          <button className="action-btn">
            <DownloadOutlined />
            下载
          </button>
        </div>
        <div className="stats">
          <span>播放：{formatCount(playlist.playCount)}</span>
          <span>收藏：{formatCount(playlist.subscribedCount)}</span>
        </div>
      </div>
    </PlaylistInfoWrapper>
  )
}

export default memo(PlaylistInfo)
