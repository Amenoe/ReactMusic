import React, { PropsWithChildren, memo } from 'react'
import { SongsItemWrapper } from './style'
import { IHotRecommend } from '@/service/recommend/types'

interface IProps {
  info: IHotRecommend
}

const SongItem: React.FC<PropsWithChildren<IProps>> = (props) => {
  const { info } = props
  return (
    <SongsItemWrapper>
      <div className="cover-top">
        <img src={info.picUrl} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="headset sprite_icon"></i>
              {info.playCount}
            </span>
            <i className="play sprite_icon"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom">{info.name}</div>
    </SongsItemWrapper>
  )
}

export default memo(SongItem)
