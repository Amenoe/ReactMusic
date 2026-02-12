import { FC, memo, ReactNode } from 'react'
import { SettleSingerWrapper } from './style'
import vipCardImg from '@/assets/img/dis_vip_card.png'
import { useStore } from '@/store'

interface IProps {
  children?: ReactNode
}
const SettleSinger: FC<IProps> = () => {
  const topArtistList = useStore((state) => {
    return state.topArtists
  })
  console.log(topArtistList, 1)

  return (
    <SettleSingerWrapper>
      <div className="settle-singer">
        <div className="singer-header">
          <span>入驻歌手</span>
          <a href="">查看全部 &gt;</a>
        </div>
        <div className="singer-content">
          {topArtistList.map((item: any) => {
            return (
              <div className="singer-item" key={item.id}>
                <img src={`${item.img1v1Url}?param=62y62`} alt="" />
                <div className="info">
                  <h4>{item.name}</h4>
                  <p>这是简介</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className="settle-singer-btn">申请成为网易音乐人</div>
      </div>
    </SettleSingerWrapper>
  )
}

export default memo(SettleSinger)
