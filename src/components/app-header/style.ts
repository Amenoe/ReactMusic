import styled from 'styled-components'
import sprite_01 from '@/assets/img/sprite_01.png'

const THEME_BACKGROUND_COLOR = '#242221'

export const HeaderWapper = styled.div`
  width: 100%;
  background-color: ${THEME_BACKGROUND_COLOR};
  height: 75px;
  font-size: 14px;
  color: #fff;
  /* 内容区域 */
  .content {
    display: flex;
    justify-content: space-between;
  }
  .divider {
    height: 5px;
    background-color: #c20c0c;
  }

  /* .hide {
    display: none !important;
  } */
`

export const HeaderLeft = styled.div`
  display: flex;
  color: #ccc;
  .logo {
    display: inline-block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    text-indent: -9999px;
  }

  .header-group {
    display: flex;
    font-size: 14px;

    .header-item {
      color: #ccc;
      position: relative;
      padding: 0 19px;
      height: 70px;
      text-align: center;
      line-height: 70px;

      &:hover {
        text-decoration: none;
        background-color: #000;
      }

      /* 为最后一个header-item添加hot图标 */
      &:last-of-type::after {
        position: absolute;
        content: ' ';
        width: 28px;
        height: 19px;
        background-image: url(${sprite_01});
        background-position: -192px 0;
        top: 20px;
        right: -20px;
      }
    }

    /* NavLink活跃状态 */
    .link-active {
      color: #fff;
      background-color: #000;
      /* 下面的小三角 */
      .icon {
        position: absolute;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-image: url(${sprite_01});
        background-position: 254px 0;
      }
    }
  }
`

export const HeaderRight = styled.div`
  display: flex;
  color: #787878;
  font-size: 12px;
  align-items: center;

  > .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;
    font-size: 12px;
  }

  > .creator {
    background-color: ${THEME_BACKGROUND_COLOR};
    color: #fff;
    margin-left: 12px;
    text-decoration: none;
    border-radius: 32px;
    font-size: 12px;
    border: 1px solid #4f4f4f;
    color: #ccc;

    &:hover {
      text-decoration: none;
      color: #fff !important;
      border-color: #fff !important;
      background: ${THEME_BACKGROUND_COLOR} !important;
    }
  }

  > .login {
    margin-left: 20px;
    cursor: pointer;
  }
`
