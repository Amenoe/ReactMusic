import { FC, memo, ReactNode } from 'react'
import { UserLoginWrapper } from './style'
import vipCardImg from '@/assets/img/dis_vip_card.png'

interface IProps {
  children?: ReactNode
}
const UserLogin: FC<IProps> = () => {
  return (
    <UserLoginWrapper>
      <div className="user-login">
        <div className="user-login-top">
          <img src={vipCardImg} alt="" />
        </div>
        <div className="user-login-content">
          <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
          <div className="user-login-content-btn">
            <a href="">用户登录</a>
          </div>
        </div>
      </div>
    </UserLoginWrapper>
  )
}

export default memo(UserLogin)
