import React, {
  ComponentRef,
  PropsWithChildren,
  memo,
  useEffect,
  useRef
} from 'react'
import { AlbumWrapper } from './style'
import AreaTop from '@/components/area-top'
import { useAppSelector } from '@/store'
import { Carousel } from 'antd'
import { shallowEqual } from 'react-redux'
import { getImageUrl } from '@/utils/format'
import { useDebounceFn, useThrottleFn } from 'ahooks'

interface IProps {}

const newAlbum: React.FC<PropsWithChildren<IProps>> = () => {
  const newAlbumList = useAppSelector((state) => {
    return state.recommend.newAlbumList
  }, shallowEqual)

  console.log(newAlbumList)

  // 绑定轮播图组件，需要定义类型
  const CarouselRef = useRef<ComponentRef<typeof Carousel>>(null)
  // 轮播图切换方法
  // 不清楚为啥会会倒退，增加防抖
  const handlePrevClick = useThrottleFn(
    () => {
      CarouselRef.current?.prev()
      console.log('prev')
    },
    {
      wait: 1600
    }
  )
  const handleNextClick = useThrottleFn(
    () => {
      CarouselRef.current?.next()
      console.log('next')
    },
    {
      wait: 1600
    }
  )
  return (
    <AlbumWrapper>
      <AreaTop title="新碟上架" moreLink="/discover/album"></AreaTop>

      <div className="content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={() => handlePrevClick.run()}
        ></button>
        {/* 轮播图 */}
        <div className="banner">
          <Carousel ref={CarouselRef} dots={false} speed={1500} infinite>
            {[0, 1].map((item) => {
              return (
                <div className="album-list" key={item}>
                  {newAlbumList.slice(item * 5, (item + 1) * 5).map((item) => {
                    return (
                      <div className="album-item" key={item.id}>
                        <div className="cover">
                          <img
                            src={getImageUrl(item.picUrl, 100, 100)}
                            alt=""
                          />
                          <a href="" className="msk sprite_cover"></a>
                        </div>
                        <div className="info">
                          <p className="name">{item.name}</p>
                          <p className="artist">{item.artist.name}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </Carousel>
        </div>
        <button
          className="arrow arrow-right sprite_02"
          onClick={() => handleNextClick.run()}
        ></button>
      </div>
    </AlbumWrapper>
  )
}

export default memo(newAlbum)
