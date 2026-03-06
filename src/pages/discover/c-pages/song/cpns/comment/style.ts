import styled from 'styled-components'

export const CommentWrapper = styled.div`
  margin-top: 40px;
  padding: 0 30px 40px;
  color: #333;

  .header {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid #cfcfcf;
    margin-bottom: 20px;

    .title {
      font-size: 18px;
      font-weight: bold;
      margin-right: 10px;
      color: #333;
    }

    .count {
      font-size: 12px;
      color: #666;
    }
  }

  .comment-title {
    font-size: 14px;
    font-weight: bold;
    color: #333;
    margin-top: 20px;
    margin-bottom: 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid #cfcfcf;
  }

  .comment-list {
    .comment-item {
      display: flex;
      padding: 15px 0;
      border-bottom: 1px solid #eee;

      .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 15px;
        flex-shrink: 0;
      }

      .content-info {
        flex: 1;

        .user-info {
          display: flex;
          align-items: center;
          margin-bottom: 8px;

          .nickname {
            color: #0c73c2;
            font-size: 14px;
            margin-right: 8px;
            cursor: pointer;
          }

          .vip-tag {
            background: #333;
            color: #e6bd85;
            padding: 1px 4px;
            border-radius: 2px;
            font-size: 10px;
            font-style: italic;
          }
        }

        .text {
          font-size: 14px;
          line-height: 1.6;
          color: #333;
          margin-bottom: 10px;
          white-space: pre-wrap;
        }

        .footer-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          color: #999;

          .operations {
            display: flex;
            align-items: center;
            gap: 20px;

            .op-item {
              display: flex;
              align-items: center;
              cursor: pointer;
              transition: color 0.2s;

              &:hover {
                color: #666;
              }

              i {
                font-size: 16px;
                margin-right: 4px;
              }
            }
          }
        }
      }
    }
  }

  .publish-btn-container {
    display: flex;
    justify-content: center;
    margin-top: 30px;

    .publish-btn {
      display: flex;
      align-items: center;
      padding: 10px 30px;
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 25px;
      color: #333;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        background: #f0f0f0;
      }

      i {
        margin-right: 8px;
      }
    }
  }

  .pagination {
    margin-top: 30px;
    display: flex;
    justify-content: center;

    .ant-pagination-item {
      background: #fff;
      border: 1px solid #d9d9d9;
      a {
        color: #333;
      }
      &-active {
        background: #1890ff;
        border-color: #1890ff;
        a {
          color: #fff;
        }
      }
    }
    .ant-pagination-prev,
    .ant-pagination-next,
    .ant-pagination-jump-prev,
    .ant-pagination-jump-next {
      .ant-pagination-item-link {
        background: #fff;
        border: 1px solid #d9d9d9;
        color: #333;
      }
    }
  }
`
