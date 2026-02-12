import React, { memo, useEffect } from 'react'
import TopBanner from '@/pages/discover/c-pages/recommend/components/top-banner'
import { RecommendWrapper } from './style'
import HotRecommend from './components/hot-recommend'
import NewAlbum from './components/new-album'
import PlayList from './components/play-list'
import { useStore } from '@/store'
import UserLogin from './components/user-login'
import SettleSinger from './components/settle-singer'

const Recommend: React.FC = () => {
  const {
    fetchBanners,
    fetchHotRecommend,
    fetchNewAlbum,
    fetchPlayListDetail,
    fetchTopArtist
  } = useStore()

  useEffect(() => {
    fetchBanners()
    fetchHotRecommend()
    fetchNewAlbum()
    fetchPlayListDetail()
    fetchTopArtist()
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
        <div className="right">
          <UserLogin />
          <SettleSinger />
        </div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
