import React, { memo, PropsWithChildren } from 'react'
import { HotListWrapper } from './styles'
import AreaTop from '@/components/area-top'
import { useStore } from '@/store'
import SongItem from '@/components/song-item'

interface IProps {}

const HotRecommend: React.FC<PropsWithChildren<IProps>> = () => {
  const { hotRecommendList } = useStore()

  return (
    <HotListWrapper>
      <AreaTop
        title="热门推荐"
        keyWord={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink="/discover"
      />

      <div className="hot-recommend">
        {hotRecommendList.map((item) => (
          <SongItem key={item.id} info={item} />
        ))}
      </div>
    </HotListWrapper>
  )
}

export default memo(HotRecommend)
