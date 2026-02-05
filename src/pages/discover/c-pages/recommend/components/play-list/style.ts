import styled from 'styled-components'
import recommendTopBg from '@/assets/img/recommend-top-bg.png'
import sprite2 from '@/assets/img/sprite_02.png'

export const PlayListWrapper = styled.div`
  .content {
    height: 472px;
    background: url(${recommendTopBg});
    margin-top: 20px;
    padding-left: 1px;
    display: flex;
  }
  .play {
    background: url(${sprite2}) no-repeat 0 9999px;
    background-position: -267px -205px;
  }

  .collect {
    background: url(${sprite2}) no-repeat 0 9999px;
    background-position: -300px -205px;
  }
  .add {
    background: url(${sprite2}) no-repeat 0 9999px;
    background-position: 0 -700px;
  }

  .list {
    width: 230px;
    > .top {
      padding: 20px 0 0 19px;
      display: flex;
      > .top-img1 {
        width: 80px;
        height: 80px;
        background: linear-gradient(
          -45deg,
          rgb(131, 126, 219),
          rgb(155, 126, 241)
        );
        &::after {
          content: '飙升榜';
          position: relative;
          top: 30px;
          left: 20px;
          font-size: 14px;
          font-weight: bold;
          color: #fff;
        }
      }
      > .top-img2 {
        width: 80px;
        height: 80px;
        background: linear-gradient(
          -45deg,
          rgba(139, 224, 157, 1),
          rgba(157, 216, 191, 1)
        );
        &::after {
          content: '新歌榜';
          position: relative;
          top: 30px;
          left: 20px;
          font-size: 14px;
          font-weight: bold;
          color: #fff;
        }
      }
      > .top-img3 {
        width: 80px;
        height: 80px;
        background: linear-gradient(
          -45deg,
          rgb(140, 205, 236),
          rgb(135, 209, 241)
        );
        &::after {
          content: '原创榜';
          position: relative;
          top: 30px;
          left: 20px;
          font-size: 14px;
          font-weight: bold;
          color: #fff;
        }
      }
      > .top-content {
        margin-left: 10px;
        margin-top: 10px;
        > a {
          font-size: 14px;
          font-weight: bold;
          color: #333;
        }
        .btn {
          margin-top: 10px;
          > a {
            display: inline-block;
            width: 22px;
            height: 22px;
            margin-right: 10px;
          }
        }
      }
    }
  }

  .list-content {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    .item {
      display: flex;
      height: 32px;
      .no {
        width: 35px;
        height: 32px;
        text-align: center;
        color: #666;
        font-size: 16px;
        line-height: 32px;
      }
      .no-top {
        color: #c10d0c;
      }
      .title {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        line-height: 32px;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`
