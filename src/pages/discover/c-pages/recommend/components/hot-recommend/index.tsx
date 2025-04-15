import React, { PropsWithChildren, memo } from 'react'
import { HotListWrapper } from './styles'
import AreaTop from '@/components/area-top'
import { shallowEqual, useSelector } from 'react-redux'
import { useAppSelector } from '@/store'
import SongItem from '@/components/song-item'

interface IProps {}

const HotRecommend: React.FC<PropsWithChildren<IProps>> = () => {
  const hotRecommendList = useAppSelector(
    (state) => state.recommend.hotRecommendList,
    shallowEqual
  )
  return (
    <HotListWrapper>
      <AreaTop
        title="热门推荐"
        keyWord={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink="/discover"
      ></AreaTop>

      <div className="hot-recommend">
        {hotRecommendList.map((item) => {
          return <SongItem key={item.id} info={item}></SongItem>
        })}
      </div>
    </HotListWrapper>
  )
}

export default memo(HotRecommend)
