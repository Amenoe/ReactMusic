import { useAppSelector } from '@/store'
import { Carousel } from 'antd'
import React, { ComponentRef, memo, PropsWithChildren, useRef } from 'react'
import {
  BannerControl,
  BannerLeftWrapper,
  BannerRightWrapper,
  BannerWrapper
} from './style'
import { shallowEqual } from 'react-redux'

interface IProps {}

const topBanner: React.FC<PropsWithChildren<IProps>> = () => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0)
  const [opacity, setOpacity] = React.useState<number>(1)
  const [transition, setTransition] = React.useState<string>()
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.bannersList
    }),
    shallowEqual
  )
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
  const handleAfterChange = (current: number) => {
    if (current !== currentIndex) {
      setCurrentIndex(current)
    }
  }

  const handleBeforeChange = (current: number, next: number) => {
    setCurrentIndex(next)
    // if (current === banners.length - 1) {
    //   setCurrentIndex(0)
    // }
    console.log(current, next)
  }

  // 获取模糊的背景图片
  const bgimage =
    banners &&
    banners[currentIndex] &&
    banners[currentIndex]?.imageUrl + '?imageView&blur=40x20'

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
              afterChange={handleAfterChange}
              beforeChange={handleBeforeChange}
            >
              {banners.map((item) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img className="image" src={item.imageUrl}></img>
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
            <div className="btn" onClick={() => handlePrevClick()}></div>
            <div className="btn" onClick={() => handleNextClick()}></div>
          </BannerControl>
        </div>
      </BannerWrapper>
    </div>
  )
}

export default memo(topBanner)
