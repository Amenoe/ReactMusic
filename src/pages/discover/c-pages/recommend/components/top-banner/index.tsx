import React, { ComponentRef, memo, PropsWithChildren, useRef } from 'react'
import { Carousel } from 'antd'
import {
  BannerControl,
  BannerLeftWrapper,
  BannerRightWrapper,
  BannerWrapper
} from './style'
import { useStore } from '@/store'

interface IProps {}

const topBanner: React.FC<PropsWithChildren<IProps>> = () => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0)
  const { bannersList } = useStore()

  // 绑定轮播图组件，需要定义类型
  const CarouselRef = useRef<ComponentRef<typeof Carousel>>(null)

  // 轮播图切换方法
  const handlePrevClick = () => {
    CarouselRef.current?.prev()
  }
  const handleNextClick = () => {
    CarouselRef.current?.next()
  }

  // 轮播图切换回调
  const handleBeforeChange = (current: number, next: number) => {
    setCurrentIndex(next)
  }

  // 获取模糊的背景图片
  const bgimage =
    bannersList &&
    bannersList[currentIndex] &&
    bannersList[currentIndex]?.imageUrl + '?imageView&blur=40x20'

  return (
    <div>
      <BannerWrapper bgimage={bgimage}>
        <div className="banner w980">
          <BannerLeftWrapper>
            <Carousel
              infinite
              autoplay
              autoplaySpeed={5000}
              speed={1000}
              effect="fade"
              ref={CarouselRef}
              beforeChange={handleBeforeChange}
            >
              {bannersList.map((item) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                  </div>
                )
              })}
            </Carousel>
          </BannerLeftWrapper>
          <BannerRightWrapper>
            <div className="download">
              <a href="/download" className="btn">
                下载客户端
              </a>
              <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
            </div>
            <span className="shadow"></span>
            <span className="shadowr"></span>
          </BannerRightWrapper>
          <BannerControl>
            <div className="btn" onClick={handlePrevClick}></div>
            <div className="btn" onClick={handleNextClick}></div>
          </BannerControl>
        </div>
      </BannerWrapper>
    </div>
  )
}

export default memo(topBanner)
