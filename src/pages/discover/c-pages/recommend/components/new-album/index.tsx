import React, { PropsWithChildren, memo } from 'react'
import { AlbumWrapper } from './style'
import AreaTop from '@/components/area-top'

interface IProps {}

const newAlbum: React.FC<PropsWithChildren<IProps>> = () => {
  return (
    <AlbumWrapper>
      <AreaTop title="新碟上架" moreLink="/discover/album"></AreaTop>

      <div className="content">
        <div className="arrow arrow-left sprite_02"></div>
        {/* 轮播图 */}
        <div className="album-list">
          <div className="album-item"></div>
        </div>
        <div className="arrow arrow-right sprite_02"></div>
      </div>
    </AlbumWrapper>
  )
}

export default memo(newAlbum)
