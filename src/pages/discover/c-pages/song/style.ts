import styled from 'styled-components'

export const SongWrapper = styled.div`
  position: relative;
  width: 980px;
  margin: 0 auto;
  min-height: 700px;
  background-color: #f5f5f5;
  overflow: hidden;

  .song-info-container {
    position: relative;

    .bg-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      filter: blur(60px);
      opacity: 0.5;
      z-index: 1;
    }

    .content {
      position: relative;
      display: flex;
      width: 980px;
      margin: 0 auto;
      padding: 40px 0;
      z-index: 2;
    }
  }
`

export const SongLeft = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  padding-top: 60px;

  .image {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 298px;
    height: 298px;
    border-radius: 50%;
    background: radial-gradient(circle, #333 0%, #000 100%);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border: 10px solid rgba(255, 255, 255, 0.1);

    /* Animation state */
    &.playing {
      animation: rotate 20s linear infinite;
    }

    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

export const SongRight = styled.div`
  flex: 1;
  padding-left: 60px;

  .header {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    .title {
      font-size: 24px;
      font-weight: bold;
      color: #333;
    }
  }

  .info-bar {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 30px;

    .singer,
    .album {
      color: #666;
      font-size: 12px;

      a {
        color: #0c73c2;
        margin: 0 5px;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .lyric-content {
    height: 400px;
    overflow-y: auto;
    padding-right: 20px;
    border-right: 1px solid rgba(0, 0, 0, 0.05);

    .line {
      min-height: 30px;
      line-height: 30px;
      color: #333;
      font-size: 14px;
      transition: all 0.3s;
      text-align: left;

      &.active {
        color: #c20c0c;
        font-size: 16px;
        font-weight: bold;
        text-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
      }
    }

    .no-lyric {
      margin-top: 50px;
      text-align: center;
      color: #999;
    }

    /* Custom Scrollbar */
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.1);
      border-radius: 4px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
  }
`
