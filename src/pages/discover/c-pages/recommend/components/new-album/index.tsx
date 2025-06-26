import React, { ComponentRef, memo, PropsWithChildren, useRef } from 'react'
import { AlbumWrapper } from './style'
import AreaTop from '@/components/area-top'
import { Carousel } from 'antd'
import { useThrottleFn } from 'ahooks'
import AlbumItem from '@/components/album-item'
import { useStore } from '@/store'

interface IProps {}

const newAlbum: React.FC<PropsWithChildren<IProps>> = () => {
  const { newAlbumList } = useStore()

  // 绑定轮播图组件
  const CarouselRef = useRef<ComponentRef<typeof Carousel>>(null)

  // 轮播图切换方法（添加节流）
  const handlePrevClick = useThrottleFn(
    () => {
      CarouselRef.current?.prev()
    },
    { wait: 1600 }
  )

  const handleNextClick = useThrottleFn(
    () => {
      CarouselRef.current?.next()
    },
    { wait: 1600 }
  )

  return (
    <AlbumWrapper>
      <AreaTop title="新碟上架" moreLink="/discover/album" />

      <div className="content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={handlePrevClick.run}
        />
        <div className="banner">
          <Carousel ref={CarouselRef} dots={false} speed={1500} infinite>
            {[0, 1].map((page) => (
              <div key={page}>
                <div className="album-list">
                  {newAlbumList
                    .slice(page * 5, (page + 1) * 5)
                    .map((item) => (
                      <AlbumItem info={item} key={item.id} />
                    ))}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <button
          className="arrow arrow-right sprite_02"
          onClick={handleNextClick.run}
        />
      </div>
    </AlbumWrapper>
  )
}

export default memo(newAlbum)
