import styled from 'styled-components'

export const SettleSingerWrapper = styled.div`
  margin-top: 10px;

  .settle-singer {
    margin-top: 15px;
  }
  .singer-header {
    display: flex;
    justify-content: space-between;
    height: 23px;
    margin: 0 20px;
    border-bottom: 1px solid #ccc;
    color: #333;
    span {
      font-weight: bold;
    }
    a {
      color: #666;
      text-decoration: none;
    }
  }
  .singer-content {
    &::after {
      content: '';
      display: block;
      clear: both;
    }
    .singer-item {
      margin: 14px 20px 0px 20px;
      margin-top: 14px;
      float: left;
      width: 210px;
      height: 62px;
      background: #fafafa;
      img {
        float: left;
      }
      .info {
        float: left;
        width: 133px;
        height: 60px;
        padding-left: 14px;
        border: 1px solid #e9e9e9;
        border-left: none;
        h4 {
          display: block;
          font-size: 14px;
          font-weight: bold;
          margin-top: 8px;
          line-height: 20px;
        }
        p {
          margin-top: 8px;
        }
      }
    }
  }

  .settle-singer-btn {
    cursor: pointer;
    width: 210px;
    margin: 0 20px;
    margin-top: 14px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #f6f6f6;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-weight: bold;
    &:hover {
      background-color: #fafafa;
    }
  }
`
