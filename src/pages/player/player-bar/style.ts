import styled from 'styled-components'

import progress_bar from '@/assets/img/progress_bar.png'
import sprite_icon from '@/assets/img/sprite_icon.png'
import playbar_sprite from '@/assets/img/playbar_sprite.png'
import pip_icon from '@/assets/img/pip_icon.png'

export const PlayerbarWrapper = styled.div`
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  bottom: -45px;
  height: 53px;
  background-position: 0 0;
  background-repeat: repeat;
  transition: bottom 0.3s;

  &:hover {
    bottom: 0;
  }


  .content {
    width: 1030px;
    display: flex;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 47px;
    align-content: center;
  }

  /* 进入 */
  .playlist-enter,
  .playlist-appear {
    opacity: 0;
    transform: scale(0.6);
  }
  /* 执行动画 */
  .playlist-enter-active,
  .playlist-appear-active {
    transition:
      opacity 300ms,
      transform 300ms;
    opacity: 1;
    transform: scale(1);
  }

  /* 离开 */
  .playlist-exit {
    opacity: 1;
    transform: scale(1);
  }

  .playlist-exit-active {
    opacity: 0;
    transform: scale(0.6);
    transition:
      opacity 300ms,
      transform 300ms;
  }

  .playlist-exit-done {
    opacity: 0;
  }
`

interface IBarControlProps {
  isPlaying: boolean
}
export const BarControl = styled.div<IBarControlProps>`
  display: flex;
  align-items: center;

  .prev,
  .next,
  .play {
    width: 28px;
    height: 28px;
    margin-right: 8px;
    margin-top: 5px;
    cursor: pointer;
  }

  .prev {
    background-position: 0 -130px;

    &:hover {
      background-position: -30px -130px;
    }
  }

  .play {
    width: 36px;
    height: 36px;
    /* 动态的传递 */
    background-position: 0 ${(props) => (props.isPlaying ? '-165px' : '-204px')};
    margin-top: 0;

    &:hover {
      /* 动态的传递 */
      background-position: -40px
        ${(props) => (props.isPlaying ? '-165px' : '-204px')};
    }
  }

  .next {
    background-position: -80px -130px;

    &:hover {
      background-position: -110px -130px;
    }
  }
`

export const BarPlayerInfo = styled.div`
  display: flex;
  margin-left: 20px;
  .image {
    width: 34px;
    height: 35px;
    border-radius: 5px;
    overflow: hidden;
    margin: 6px 15px 0 0;
  }

  .info {
    width: 581px;
    .song {
      display: flex;
      width: 100%;
      height: 28px;
      overflow: hidden;
      line-height: 28px;
      .song-name {
        color: #fff;
      }
      .singer-name {
        max-width: 220px;
        color: #9b9b9b;
        margin-left: 15px;
      }
    }
    .progress {
      display: flex;
      align-items: center;
      position: relative;

      .ant-slider {
        width: 493px;
        height: 9px;
        margin-top: -1px;
        z-index: 100;

        .ant-slider-rail,
        .ant-slider-track,
        .ant-slider-step {
          height: 9px;
        }

        .ant-slider-rail {
          background: url(${progress_bar}) 0 0;
        }

        .ant-slider-track {
          background: url(${progress_bar});
          background-position: left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          position: absolute;
          background: url(${sprite_icon});
          background-position: 0 -250px;
          top: -5px;
          margin-left: -5px;
          &::after {
            display: none;
          }
          &::before {
            display: none;
          }
        }
      }
    }
    .time {
      display: flex;
      width: 60px;
      color: #a1a1a1;
      position: absolute;
      top: -2px;
      right: 10px;
      .divider {
        margin: 0 4px;
        color: #797979;
      }

      .total-time {
        color: #797979;
      }
    }
  }
`

interface IBarOperatorProps {
  playSequence: number
}
export const BarOperator = styled.div<IBarOperatorProps>`
  display: flex;
  margin-left: 20px;

  .btn {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  .pip {
    background: url(${pip_icon}) no-repeat 0 9999px;
    background-position: 0 0;
    &:hover {
      background-position: 0 -25px;
    }
  }

  .favor {
    background-position: -88px -163px;
    &:hover {
      color: #ccc;
    }
  }

  .share {
    background-position: -114px -163px;
  }

  .left {
    width: 87px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .anticon-download {
    cursor: pointer;
    padding: 1px 6px;
    font-size: 19px;
    color: #adadad;
  }

  .right {
    display: flex;
    align-items: center;
    gap: 5px;
    width: 126px;
    padding-left: 13px;
    background-position: -147px -240px;

    .volume {
      background-position: -2px -248px;
    }

    .loop {
      background-position: ${(props) => {
        switch (props.playSequence) {
          case 1:
            return '-66px -248px;'
          case 2:
            return '-66px -344px;'
          default:
            return '-3px -344px;'
        }
      }};

      /* &.ant-popover-open {
        background-color: red !important;
      } */
    }

    .playlist {
      /* position: relative; */
      padding-left: 18px;
      text-align: center;
      color: #ccc;
      width: 59px;
      background-position: -42px -68px;
    }
  }

  .top-volume {
    position: absolute;
    top: -117px;
    left: 65px;
    clear: both;
    width: 32px;
    height: 113px;
    overflow: hidden;
    padding: 10px;
    background-position: 0 -503px;

    /* ant design Slider style change */
    .ant-slider-vertical {
      margin: 0;
      .ant-slider-rail {
        background-color: transparent;
      }

      .ant-slider-track {
        background: url(${playbar_sprite}) no-repeat 0 9999px;
        background-position: -40px bottom;
      }

      .ant-slider-handle {
        border: 0;
        background: url(${sprite_icon});
        background-position: -42px -250px;
      }
    }
  }
`
