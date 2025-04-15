import React, { PropsWithChildren, memo } from 'react'
import { AlbumItemWrapper } from './style'
import { INewAlbumData } from '@/service/recommend/types'
import { formatCount, getImageUrl } from '@/utils/format'

interface IProps {
  info: INewAlbumData
}

const AlbumItem: React.FC<PropsWithChildren<IProps>> = (props) => {
  const { info } = props
  return (
    <AlbumItemWrapper>
      <div className="album-item" key={info.id}>
        <div className="cover">
          <img src={getImageUrl(info.picUrl, 100, 100)} alt="" />
          <a href="" className="msk sprite_cover "></a>
          <i className="play sprite_icon "></i>
        </div>
        <div className="info">
          <p className="name">{info.name}</p>
          <p className="artist">{info.artist.name}</p>
        </div>
      </div>
    </AlbumItemWrapper>
  )
}

export default memo(AlbumItem)
