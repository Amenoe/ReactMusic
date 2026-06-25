import React, { memo } from 'react'
import { PlaylistCommentWrapper } from './style'
import { IPlaylistCommentData } from '@/service/recommend/types'
import { formatCount } from '@/utils/format'
import dayjs from 'dayjs'
import { Pagination } from 'antd'
import {
  LikeOutlined,
  MessageOutlined,
  ShareAltOutlined
} from '@ant-design/icons'

interface IProps {
  commentData?: IPlaylistCommentData
  currentPage: number
  onPageChange: (page: number) => void
}

const PlaylistComment: React.FC<IProps> = (props) => {
  const { commentData, currentPage, onPageChange } = props

  return (
    <PlaylistCommentWrapper>
      <div className="header">
        <span className="title">评论</span>
        <span className="count">共{commentData?.total || 0}条评论</span>
      </div>

      {/* 精彩评论 - 仅首页显示 */}
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

      {/* 最新评论 */}
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

      {/* 分页 */}
      <div className="pagination">
        <Pagination
          current={currentPage}
          total={commentData?.total}
          pageSize={20}
          showSizeChanger={false}
          onChange={onPageChange}
        />
      </div>
    </PlaylistCommentWrapper>
  )
}

export default memo(PlaylistComment)
