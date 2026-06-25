import styled from 'styled-components'

export const PlayListPanelWrapper = styled.div`
  position: absolute;
  bottom: 47px;
  right: 0;
  width: 980px;
  height: 444px;
  background-color: rgba(0, 0, 0, 0.85);
  border-radius: 4px 4px 0 0;
  z-index: 100;
  display: flex;
  overflow: hidden;
  color: #ccc;
`

export const PanelLeft = styled.div`
  width: 550px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(255, 255, 255, 0.08);

  .panel-header {
    height: 44px;
    flex-shrink: 0;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.4);

    .title {
      color: #fff;
      font-size: 14px;
      font-weight: 500;

      .count {
        color: #999;
        font-weight: normal;
        margin-left: 2px;
      }
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 18px;

      .action-btn {
        background: none;
        border: none;
        color: #ccc;
        font-size: 12px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 0;

        &:hover {
          color: #fff;
        }

        .icon {
          font-size: 13px;
        }

        .anticon {
          font-size: 13px;
        }
      }
    }
  }

  .panel-list {
    flex: 1;
    overflow-y: auto;
    padding: 4px 0;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 3px;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }

  .empty-tip {
    text-align: center;
    color: #999;
    font-size: 13px;
    padding: 40px 0;
  }
`

interface ISongItemProps {
  $isActive: boolean
}

export const SongItem = styled.div<ISongItemProps>`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0 16px 0 20px;
  cursor: pointer;
  transition: background-color 0.15s;
  font-size: 12px;
  color: ${(props) => (props.$isActive ? '#fff' : '#ccc')};

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);

    .row-actions .action-btn {
      visibility: visible;
    }

    .song-meta {
      display: none;
    }

    .row-actions {
      display: flex;
    }
  }

  .play-indicator {
    width: 12px;
    flex-shrink: 0;
    color: #c20c0c;
    font-size: 12px;
    margin-right: 6px;
    display: flex;
    align-items: center;
    visibility: ${(props) => (props.$isActive ? 'visible' : 'hidden')};
  }

  .song-name {
    flex: 1;
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 12px;
  }

  .song-meta,
  .row-actions {
    width: 120px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
  }

  .row-actions {
    display: none;
    gap: 10px;
    margin-right: 8px;

    .action-btn {
      width: 16px;
      height: 16px;
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
      color: #999;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;

      &:hover {
        color: #fff;
      }
    }
  }

  .song-artist {
    width: 130px;
    flex-shrink: 0;
    color: #999;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 8px;
  }

  .song-duration {
    width: 50px;
    flex-shrink: 0;
    color: #999;
    text-align: right;
  }

  .song-link {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    margin-left: 12px;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    color: #999;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: #fff;
    }
  }
`

export const PanelRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;

  .right-header {
    height: 44px;
    flex-shrink: 0;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);
    position: relative;

    .song-title {
      color: #fff;
      font-size: 14px;
      font-weight: 500;
      max-width: 320px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .close-btn {
      position: absolute;
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      background: none;
      border: none;
      color: #999;
      font-size: 18px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        color: #fff;
      }
    }
  }

  .right-content {
    flex: 1;
    position: relative;
    overflow: hidden;

    .cover-bg {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      filter: blur(30px) brightness(0.5);
      transform: scale(1.2);
    }

    .lyric-scroll {
      position: relative;
      height: 100%;
      overflow-y: auto;
      padding: 24px 32px;
      text-align: center;

      &::-webkit-scrollbar {
        width: 6px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 3px;
      }

      .lyric-line {
        font-size: 13px;
        line-height: 28px;
        color: #b3b3b3;
        transition: color 0.2s;

        &.active {
          color: #fff;
          font-size: 14px;
          font-weight: 500;
        }
      }
    }

    .empty-lyric {
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #999;
      font-size: 13px;
    }
  }
`
