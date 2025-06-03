import AreaTop from '@/components/area-top'
import React, { PropsWithChildren, memo } from 'react'
import { PlayListWrapper } from './style'

interface IProps {}

const PlayList: React.FC<PropsWithChildren<IProps>> = () => {
  return (
    <PlayListWrapper>
      <AreaTop
        title="榜单"
        titleLink="/discover/toplist"
        moreLink="/discover/toplist"
      ></AreaTop>
      <div className="content">
        <div className="list">
          <div className="top">12</div>
        </div>
        <div className="list">
          <div className="top">123</div>
        </div>
        <div className="list">
          <div className="top">123</div>
        </div>
      </div>
    </PlayListWrapper>
  )
}

export default memo(PlayList)
