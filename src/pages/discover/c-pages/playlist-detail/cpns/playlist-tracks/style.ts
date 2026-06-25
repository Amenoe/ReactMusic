import styled from 'styled-components'

export const PlaylistTracksWrapper = styled.div`
  padding: 0 30px 30px;

  .header {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 2px solid ${(props) => props.theme.color.PRIMARY_COLOR};
    margin-bottom: 0;

    h3 {
      font-size: 18px;
      font-weight: bold;
      color: #333;
      margin: 0;
      margin-right: 10px;
    }

    .count {
      font-size: 12px;
      color: #999;
    }
  }

  .track-table {
    .ant-table-thead > tr > th {
      background: #f5f5f5;
      font-size: 12px;
      color: #999;
      padding: 8px 12px;
    }

    .ant-table-tbody > tr > td {
      padding: 8px 12px;
      font-size: 12px;
      border-bottom: none;
    }

    .ant-table-tbody > tr:nth-child(even) > td {
      background: #f7f7f7;
    }

    .ant-table-tbody > tr:hover > td {
      background: #eee !important;
    }

    .play-btn {
      font-size: 16px;
      color: #999;
      cursor: pointer;
      transition: color 0.2s;

      &:hover {
        color: ${(props) => props.theme.color.PRIMARY_COLOR};
      }
    }

    .index {
      color: #999;
    }

    .song-name {
      color: #333;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    .alias {
      color: #999;
      margin-left: 5px;
    }

    a {
      color: #666;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    .duration-cell {
      position: relative;

      .duration-text {
        color: #999;
      }

      .hover-actions {
        display: none;
        gap: 12px;
        justify-content: center;

        .action-icon {
          font-size: 14px;
          color: #666;
          cursor: pointer;
          transition: color 0.2s;

          &:hover {
            color: ${(props) => props.theme.color.PRIMARY_COLOR};
          }
        }
      }
    }

    .ant-table-tbody > tr:hover .duration-text {
      display: none;
    }

    .ant-table-tbody > tr:hover .hover-actions {
      display: flex;
    }
  }
`
