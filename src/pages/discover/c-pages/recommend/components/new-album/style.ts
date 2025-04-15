import styled from 'styled-components'
import moduleName from '@/assets/img/sprite_cover.png'

export const AlbumWrapper = styled.div`
  margin-top: 35px;
  > .content {
    height: 186px;
    margin: 20px 0 37px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .arrow {
      width: 17px;
      height: 17px;
      cursor: pointer;
    }
    .arrow-left {
      background-position: -260px -75px;
      &:hover {
        background-position: -280px -75px;
      }
    }
    .arrow-right {
      background-position: -300px -75px;
      &:hover {
        background-position: -320px -75px;
      }
    }

    .banner {
      flex: 1;
      overflow: hidden;

      .album-list {
        display: flex !important;
        height: 180px;
        .album-item {
          margin-left: 12px;
          .cover {
            position: relative;
            width: 118px;
            height: 100px;
            overflow: hidden;
            margin-top: 28px;
            margin-bottom: 7px;
            img {
              width: 100px;
              height: 100px;
            }
            .msk {
              position: absolute;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
              background-position: 0 -570px;
              text-indent: -9999px;
            }
          }
          .info {
            font-size: 12px;
            width: 100px;
            .name {
              color: #000000;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
            .artist {
              color: #666666;
            }
          }
        }
      }
    }
  }
`
