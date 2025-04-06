import React, { memo, useEffect, useState } from 'react'
import TopBanner from '@/pages/discover/c-pages/recommend/components/top-banner'
import { useAppDispatch } from '@/store'
import {
  fetchBannerAction,
  fetchHotRecommendAction
} from '@/store/modules/recommend'
import { RecommendWrapper } from './style'
import HotRecommend from './components/hot-recommend'

const Recommend: React.FC = () => {
  const dispatch = useAppDispatch()

  // 获取Banner数据，会存到store中
  useEffect(() => {
    dispatch(fetchBannerAction())
    dispatch(fetchHotRecommendAction())
  }, [])
  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="content w980">
        <div className="left">
          <HotRecommend />
        </div>
        <div className="right">right</div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
