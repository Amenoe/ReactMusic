import styled from 'styled-components'

export const AlbumWrapper = styled.div`
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
        display: flex;
        height: 180px;
        .album-item {
          margin-left: 12px;
          width: 118px;
          height: 150px;
          .cover {
            position: relative;
            width: 118px;
            height: 100px;
            overflow: hidden;
            margin-top: 28px;
            margin-bottom: 7px;
            box-shadow: 0px 6px 6px #d3d3d3;

            &:hover {
              .play {
                background-position: 0px -85px;
              }
            }

            img {
              width: 100px;
              height: 100px;
            }
            .play {
              display: inline-block;
              position: absolute;
              right: 10px;
              bottom: 5px;
              left: 72px;
              width: 22px;
              height: 22px;
              background-position: 0 -999999px;
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
              ${(props) => props.theme.mixin.textNoWrap}
            }
            .artist {
              color: #666666;
              ${(props) => props.theme.mixin.textNoWrap}
            }
          }
        }
      }
    }
  }
`
