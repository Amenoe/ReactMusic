import styled from 'styled-components'

export const AreaTopWrapper = styled.div`
  width: 100%;
  .top-content {
    height: 33px;
    padding: 0 10px 0 34px;
    background-position: -225px -156px;
    border-bottom: 2px solid #c10d0c;
  }

  .left {
    .title {
      float: left;
      font-size: 20px;
      font-weight: normal;
      line-height: 28px;
      color: #333;

      &:hover {
        text-decoration: none;
      }
    }
    /* 热门推荐的tab */
    .tab {
      float: left;
      color: #666;
      margin: 9px 0 0 20px;
      .item {
        line-height: 14px;

        &:last-child {
          .line {
            display: none;
          }
        }
      }
    }
    /* 二级标题 */
    .sub {
      float: left;
      color: #666;
      margin: 9px 0 0 20px;
    }
  }

  .right {
    float: right;
    margin-top: 9px;
    > a {
      color: #666;
    }

    > i {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      vertical-align: middle;
      background-position: 0 -240px;
    }
  }
`
