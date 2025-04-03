import React, { PropsWithChildren, memo } from 'react'
import { HotListWrapper } from './styles'
import AreaTop from '@/components/area-top'

interface IProps {}

const HotRecommend: React.FC<PropsWithChildren<IProps>> = () => {
  return (
    <HotListWrapper>
      <AreaTop
        title="热门推荐"
        leftSlot={
          <div className="tab">
            {['华语', '流行', '摇滚', '民谣', '电子'].map((item, index) => {
              return (
                <span key={item} className="item">
                  <a>{item}</a>
                  {index === 4 ? '' : <span className="line">|</span>}
                </span>
              )
            })}
          </div>
        }
      ></AreaTop>
    </HotListWrapper>
  )
}

export default memo(HotRecommend)
