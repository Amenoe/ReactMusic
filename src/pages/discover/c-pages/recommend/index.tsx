import React, { memo, useEffect, useState } from 'react'
import TopBanner from '@/components/top-banner'
import { useAppDispatch } from '@/store'
import { fetchBannerDataAction } from '@/store/modules/recommend'
export interface IBannerData {
  banners: IBanners[]
  code: number
}

export interface IBanners {
  imageUrl: string
  targetId: number
  adid: null
  targetType: number
  titleColor: string
  typeTitle: string
  url: null | string
  exclusive: boolean
  monitorImpress: null
  monitorClick: null
  monitorType: null
  monitorImpressList: null
  monitorClickList: null
  monitorBlackList: null
  extMonitor: null
  extMonitorInfo: null
  adSource: null
  adLocation: null
  adDispatchJson: null
  encodeId: string
  program: null
  event: null
  video: null
  song: null
  scm: string
  bannerBizType: string
}
const Recommend: React.FC = () => {
  const dispatch = useAppDispatch()

  const [data, setData] = useState<IBanners[]>([])
  // 获取Banner数据，会存到store中
  useEffect(() => {
    dispatch(fetchBannerDataAction())
  })
  return (
    <div>
      <TopBanner />
    </div>
  )
}

export default memo(Recommend)
