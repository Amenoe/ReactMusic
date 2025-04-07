import styled from 'styled-components'

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

    /* .album-list {
      display: flex;
      justify-content: space-between;
    }
    .album-item {
      width: 100px;
      height: 100px;
    } */
  }
`
