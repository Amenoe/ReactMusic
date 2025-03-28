import { request } from '@/service'
import React, { PropsWithChildren, useEffect, useState } from 'react'

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
  const [data, setData] = useState<IBanners[]>([])
  //发送网络请求
  // useEffect(() => {
  //   request
  //     .get<IBannerData>({
  //       url: '/banner'
  //     })
  //     .then((res) => {
  //       console.log('res', res.banners)
  //       setData(res.banners)
  //     })
  //     .catch((err) => {
  //       console.error('err', err)
  //     })
  // }, [])
  return <div></div>
}

export default Recommend
