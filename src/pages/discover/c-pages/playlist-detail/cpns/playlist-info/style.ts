import styled from 'styled-components'

export const PlaylistInfoWrapper = styled.div`
  display: flex;
  padding: 40px 30px;

  .cover {
    width: 200px;
    height: 200px;
    margin-right: 30px;
    flex-shrink: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 4px;
    }
  }

  .info {
    flex: 1;

    .title {
      display: flex;
      align-items: center;
      margin-bottom: 12px;

      .tag {
        display: inline-block;
        padding: 2px 8px;
        border: 1px solid ${(props) => props.theme.color.PRIMARY_COLOR};
        color: ${(props) => props.theme.color.PRIMARY_COLOR};
        font-size: 12px;
        margin-right: 10px;
        border-radius: 2px;
      }

      h2 {
        font-size: 20px;
        font-weight: bold;
        color: #333;
        margin: 0;
      }
    }

    .creator {
      display: flex;
      align-items: center;
      margin-bottom: 12px;

      .avatar {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        margin-right: 10px;
      }

      .name {
        color: #0c73c2;
        font-size: 14px;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .tags {
      font-size: 12px;
      color: #666;
      margin-bottom: 8px;

      .tag-item {
        display: inline-block;
        padding: 2px 10px;
        border: 1px solid #d9d9d9;
        border-radius: 20px;
        margin-right: 8px;
        color: #0c73c2;
        cursor: pointer;

        &:hover {
          border-color: #0c73c2;
        }
      }
    }

    .desc {
      font-size: 12px;
      color: #666;
      margin-bottom: 15px;
      max-height: 60px;
      overflow: hidden;

      .text {
        color: #333;
      }
    }

    .actions {
      display: flex;
      gap: 10px;
      margin-bottom: 15px;

      button {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 6px 16px;
        border: 1px solid #d9d9d9;
        border-radius: 20px;
        background: #fff;
        color: #333;
        font-size: 12px;
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background: #f5f5f5;
        }

        i {
          font-size: 14px;
        }
      }

      .play-all {
        background: ${(props) => props.theme.color.PRIMARY_COLOR};
        color: #fff;
        border-color: ${(props) => props.theme.color.PRIMARY_COLOR};

        &:hover {
          background: #a50b0b;
        }
      }
    }

    .stats {
      font-size: 12px;
      color: #999;

      span {
        margin-right: 20px;
      }
    }
  }
`
