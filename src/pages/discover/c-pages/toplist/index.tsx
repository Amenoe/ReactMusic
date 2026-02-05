import AreaTop from '@/components/area-top'
import React, { PropsWithChildren } from 'react'
import { useSearchParams } from 'react-router-dom'

interface IProps {}

const Ranking: React.FC<PropsWithChildren<IProps>> = () => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id')
  return (
    <div>
      <AreaTop
        title="热门推荐"
        leftSlot={<div className="sub">{id}</div>}
      ></AreaTop>
      {id}
    </div>
  )
}

export default Ranking
