import React, { PropsWithChildren, memo } from 'react'
import { SongsItemWrapper } from './style'
import { IHotRecommend } from '@/service/recommend/types'
import { formatCount, getImageUrl } from '@/utils/format'

interface IProps {
  info: IHotRecommend
}

const SongItem: React.FC<PropsWithChildren<IProps>> = (props) => {
  const { info } = props
  return (
    <SongsItemWrapper>
      <div className="cover-top">
        <img src={getImageUrl(info.picUrl, 140)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="headset sprite_icon"></i>
              {formatCount(info.playCount)}
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
