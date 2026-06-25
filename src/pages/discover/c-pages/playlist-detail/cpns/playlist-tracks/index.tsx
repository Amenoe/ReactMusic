import React, { memo } from 'react'
import { PlaylistTracksWrapper } from './style'
import { ISong } from '@/service/player/types'
import { useStore } from '@/store'
import { Table } from 'antd'
import type { TableProps } from 'antd'
import {
  PlayCircleOutlined,
  FolderAddOutlined,
  HeartOutlined,
  ShareAltOutlined,
  DownloadOutlined
} from '@ant-design/icons'

interface IProps {
  tracks: ISong[]
}

const PlaylistTracks: React.FC<IProps> = (props) => {
  const { tracks } = props
  const addToPlayList = useStore((state) => state.addToPlayList)
  const fetchSongDetail = useStore((state) => state.fetchSongDetail)

  const handlePlaySong = (song: ISong) => {
    addToPlayList(song)
    fetchSongDetail(song.id)
  }

  const formatDuration = (dt: number) => {
    const minutes = Math.floor(dt / 1000 / 60)
    const seconds = Math.floor((dt / 1000) % 60)
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  const columns: TableProps<ISong>['columns'] = [
    {
      title: '',
      dataIndex: 'id',
      key: 'play',
      width: 40,
      align: 'center',
      render: (_: number, record: ISong) => (
        <PlayCircleOutlined
          className="play-btn"
          onClick={() => handlePlaySong(record)}
        />
      )
    },
    {
      title: '#',
      key: 'index',
      width: 40,
      align: 'center',
      render: (_: unknown, __: ISong, index: number) => (
        <span className="index">{index + 1}</span>
      )
    },
    {
      title: '标题',
      dataIndex: 'name',
      key: 'title',
      render: (name: string, record: ISong) => (
        <>
          <span className="song-name">{name}</span>
          {record.alia && record.alia.length > 0 && (
            <span className="alias">（{record.alia[0]}）</span>
          )}
        </>
      )
    },
    {
      title: '歌手',
      dataIndex: 'ar',
      key: 'artist',
      width: 200,
      render: (ar: ISong['ar']) =>
        ar?.map((artist, i) => (
          <span key={artist.id}>
            <a href="/#">{artist.name}</a>
            {i < (ar?.length || 0) - 1 && '/'}
          </span>
        ))
    },
    {
      title: '专辑',
      dataIndex: 'al',
      key: 'album',
      width: 200,
      render: (al: ISong['al']) => <a href="/#">{al?.name}</a>
    },
    {
      title: '时长',
      dataIndex: 'dt',
      key: 'duration',
      width: 100,
      align: 'center',
      render: (dt: number, record: ISong) => (
        <div className="duration-cell">
          <span className="duration-text">{formatDuration(dt)}</span>
          <div className="hover-actions">
            <FolderAddOutlined
              className="action-icon"
              title="添加到播放列表"
              onClick={() => addToPlayList(record)}
            />
            <HeartOutlined className="action-icon" title="收藏" />
            <ShareAltOutlined className="action-icon" title="分享" />
            <DownloadOutlined className="action-icon" title="下载" />
          </div>
        </div>
      )
    }
  ]

  return (
    <PlaylistTracksWrapper>
      <div className="header">
        <h3>歌曲列表</h3>
        <span className="count">{tracks.length}首歌</span>
      </div>
      <Table<ISong>
        className="track-table"
        columns={columns}
        dataSource={tracks}
        rowKey="id"
        pagination={false}
        size="small"
        onRow={(record) => ({
          onDoubleClick: () => handlePlaySong(record)
        })}
      />
    </PlaylistTracksWrapper>
  )
}

export default memo(PlaylistTracks)
