import React, { memo, useEffect, useState } from 'react'
import TopBanner from '@/pages/discover/c-pages/recommend/components/top-banner'
import { useAppDispatch } from '@/store'
import {
  fetchBannerAction,
  fetchHotRecommendAction,
  fetchNewAlbumAction,
  fetchPlayListDetailAction
} from '@/store/modules/recommend'
import { RecommendWrapper } from './style'
import HotRecommend from './components/hot-recommend'
import NewAlbum from './components/new-album'
import PlayList from './components/play-list'

const Recommend: React.FC = () => {
  const dispatch = useAppDispatch()

  // 获取Banner数据，会存到store中
  useEffect(() => {
    dispatch(fetchBannerAction())
    dispatch(fetchHotRecommendAction())
    dispatch(fetchNewAlbumAction())
    dispatch(fetchPlayListDetailAction())
  }, [])
  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="content w980">
        <div className="left">
          <HotRecommend />
          <NewAlbum />
          <PlayList />
        </div>
        <div className="right">right</div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
