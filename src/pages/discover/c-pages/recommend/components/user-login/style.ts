import styled from 'styled-components'
import sprite_02 from '@/assets/img/sprite_02.png'
export const UserLoginWrapper = styled.div`
  .user-login {
    width: 250px;
    &-top {
      margin-top: 5px;
      img {
        width: 100%;
        height: 100%;
        cursor: pointer;
      }
    }

    .user-login-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 10px;
      background: url(${sprite_02}) no-repeat 0 9999px;
      background-position: 0 0;
      margin-right: 3px;
      height: 126px;
      p {
        width: 205px;
        margin: 0 auto;
        line-height: 22px;
        margin-top: 10px;
        color: #666;
      }
      .user-login-content-btn {
        margin-top: 15px;
        > a {
          width: 100px;
          height: 31px;
          line-height: 31px;
          display: block;
          text-align: center;
          border-radius: 4px;
          text-decoration: none;
          color: #fff;
          background: linear-gradient(#df4340, #b0271e);
          text-shadow: 0 1px 0 #b0271e;
        }
      }
    }
  }
`
