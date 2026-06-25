import styled from 'styled-components'

export const PlaylistWrapper = styled.div`
  width: 980px;
  margin: 0 auto;
  min-height: 700px;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-top: none;
  padding: 20px 30px;

  .header {
    padding-bottom: 15px;
    border-bottom: 2px solid ${(props) => props.theme.color.PRIMARY_COLOR};
    margin-bottom: 20px;

    h3 {
      font-size: 18px;
      font-weight: bold;
      color: #333;
      margin: 0;
    }
  }

  .playlist-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;

    .playlist-card {
      cursor: pointer;

      &:hover .name {
        color: ${(props) => props.theme.color.PRIMARY_COLOR};
      }

      .cover {
        position: relative;
        width: 100%;
        padding-top: 100%;
        margin-bottom: 8px;

        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 4px;
        }

        .play-count {
          position: absolute;
          top: 5px;
          right: 8px;
          display: flex;
          align-items: center;
          font-size: 12px;
          color: #fff;
          text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);

          i {
            margin-right: 3px;
          }
        }
      }

      .name {
        font-size: 14px;
        color: #333;
        line-height: 1.4;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        transition: color 0.2s;
      }

      .creator {
        font-size: 12px;
        color: #999;
        margin-top: 4px;
      }
    }
  }
`
