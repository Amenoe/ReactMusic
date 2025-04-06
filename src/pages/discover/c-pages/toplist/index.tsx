import AreaTop from '@/components/area-top'
import React, { PropsWithChildren } from 'react'

interface IProps {}

const Ranking: React.FC<PropsWithChildren<IProps>> = () => {
  return (
    <div>
      <AreaTop
        title="热门推荐"
        leftSlot={<div className="sub">123</div>}
      ></AreaTop>
    </div>
  )
}

export default Ranking
