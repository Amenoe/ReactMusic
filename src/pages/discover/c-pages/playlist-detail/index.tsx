import React, { memo, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PlaylistDetailWrapper } from './style'
import { getPlayListDetail, getPlaylistComment } from '@/service/recommend'
import { IPlaylistCommentData } from '@/service/recommend/types'
import PlaylistInfo from './cpns/playlist-info'
import PlaylistTracks from './cpns/playlist-tracks'
import PlaylistComment from './cpns/playlist-comment'

const PlaylistDetail: React.FC = () => {
  const { id } = useParams()
  const [playlistData, setPlaylistData] = useState<any>(null)
  const [commentData, setCommentData] = useState<IPlaylistCommentData>()
  const [commentPage, setCommentPage] = useState(1)

  useEffect(() => {
    if (!id) return
    getPlayListDetail(Number(id)).then((res) => {
      setPlaylistData(res.playlist)
    })
  }, [id])

  useEffect(() => {
    if (!id) return
    getPlaylistComment(Number(id), 20, (commentPage - 1) * 20).then((res) => {
      setCommentData(res)
    })
  }, [id, commentPage])

  useEffect(() => {
    setCommentPage(1)
  }, [id])

  if (!playlistData) return null

  return (
    <PlaylistDetailWrapper>
      <PlaylistInfo playlist={playlistData} />
      <PlaylistTracks tracks={playlistData.tracks || []} />
      <PlaylistComment
        commentData={commentData}
        currentPage={commentPage}
        onPageChange={setCommentPage}
      />
    </PlaylistDetailWrapper>
  )
}

export default memo(PlaylistDetail)
