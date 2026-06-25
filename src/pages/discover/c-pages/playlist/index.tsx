import React, { memo, useEffect, useState } from 'react'
import { PlaylistWrapper } from './style'
import { getTopPlaylist } from '@/service/recommend'
import { ITopPlaylistItem } from '@/service/recommend/types'
import { formatCount } from '@/utils/format'
import { PlayCircleOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const Playlist: React.FC = () => {
  const [playlists, setPlaylists] = useState<ITopPlaylistItem[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    getTopPlaylist(50).then((res) => {
      setPlaylists(res.playlists || [])
    })
  }, [])

  const handlePlaylistClick = (id: number) => {
    navigate(`/discover/playlist/${id}`)
  }

  return (
    <PlaylistWrapper>
      <div className="header">
        <h3>热门歌单</h3>
      </div>
      <div className="playlist-grid">
        {playlists.map((item) => (
          <div
            className="playlist-card"
            key={item.id}
            onClick={() => handlePlaylistClick(item.id)}
          >
            <div className="cover">
              <img src={item.coverImgUrl} alt="" />
              <div className="play-count">
                <PlayCircleOutlined />
                <span>{formatCount(item.playCount)}</span>
              </div>
            </div>
            <div className="name">{item.name}</div>
            <div className="creator">
              by {item.creator?.nickname}
            </div>
          </div>
        ))}
      </div>
    </PlaylistWrapper>
  )
}

export default memo(Playlist)
