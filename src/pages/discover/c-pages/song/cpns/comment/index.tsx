import React, { memo, useEffect, useState } from 'react'
import { CommentWrapper } from './style'
import { getSongComment } from '@/service/player'
import { ISongComment } from '@/service/player/types'
import dayjs from 'dayjs'
import {
  LikeOutlined,
  MessageOutlined,
  ShareAltOutlined,
  EditOutlined
} from '@ant-design/icons'
import { Pagination } from 'antd'
import { formatCount } from '@/utils/format'

interface IProps {
  id: number
}

const SongComment: React.FC<IProps> = (props) => {
  const { id } = props
  const [commentData, setCommentData] = useState<ISongComment>()
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    if (!id) return
    // Offset calculation: (page - 1) * limit
    getSongComment(id, 20, (currentPage - 1) * 20).then((res) => {
      setCommentData(res)
    })
  }, [id, currentPage])

  // Reset page when song ID changes
  useEffect(() => {
    setCurrentPage(1)
  }, [id])

  return (
    <CommentWrapper>
      <div className="header">
        <span className="title">全部评论</span>
        <span className="count">{commentData?.total || 0}</span>
      </div>

      <div className="comment-list">
        {/* Hot Comments - Only show on first page */}
        {currentPage === 1 &&
          commentData?.hotComments &&
          commentData.hotComments.length > 0 && (
            <>
              <div className="comment-title">精彩评论</div>
              {commentData.hotComments.map((item) => (
                <div className="comment-item" key={item.commentId}>
                  <img className="avatar" src={item.user.avatarUrl} alt="" />
                  <div className="content-info">
                    <div className="user-info">
                      <span className="nickname">{item.user.nickname}</span>
                      {item.user.vipType > 0 && (
                        <span className="vip-tag">VIP</span>
                      )}
                    </div>
                    <div className="text">{item.content}</div>
                    <div className="footer-info">
                      <span className="time">
                        {dayjs(item.time).format('MM-DD HH:mm')}
                      </span>
                      <div className="operations">
                        <div className="op-item">
                          <LikeOutlined />
                          <span>{formatCount(item.likedCount)}</span>
                        </div>
                        <div className="op-item">
                          <ShareAltOutlined />
                        </div>
                        <div className="op-item">
                          <MessageOutlined />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}

        {/* Regular Comments */}
        <div className="comment-title">最新评论({commentData?.total || 0})</div>
        {commentData?.comments?.map((item) => (
          <div className="comment-item" key={item.commentId}>
            <img className="avatar" src={item.user.avatarUrl} alt="" />
            <div className="content-info">
              <div className="user-info">
                <span className="nickname">{item.user.nickname}</span>
                {item.user.vipType > 0 && <span className="vip-tag">VIP</span>}
              </div>
              <div className="text">{item.content}</div>
              <div className="footer-info">
                <span className="time">
                  {dayjs(item.time).format('MM-DD HH:mm')}
                </span>
                <div className="operations">
                  <div className="op-item">
                    <LikeOutlined />
                    <span>{formatCount(item.likedCount)}</span>
                  </div>
                  <div className="op-item">
                    <ShareAltOutlined />
                  </div>
                  <div className="op-item">
                    <MessageOutlined />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <Pagination
          current={currentPage}
          total={commentData?.total}
          pageSize={20}
          showSizeChanger={false}
          onChange={(page) => setCurrentPage(page)}
        />
      </div>

      <div className="publish-btn-container">
        <div className="publish-btn">
          <EditOutlined />
          发布评论
        </div>
      </div>
    </CommentWrapper>
  )
}

export default memo(SongComment)
