import React, { PropsWithChildren, memo } from 'react'
import { AreaTopWrapper } from './style'

interface IProps {
  title: string
  leftSlot?: React.ReactNode
  rightSlot?: React.ReactNode
}

const AreaTop: React.FC<PropsWithChildren<IProps>> = (props) => {
  const { title } = props
  const { leftSlot, rightSlot } = props
  return (
    <AreaTopWrapper>
      <div className="top-content sprite_02">
        <div className="left">
          <a className="title">{title}</a>
          {leftSlot}
        </div>
        <div className="right">
          {rightSlot ?? (
            <>
              <a>更多</a>
              <i className="cor sprite_02"></i>
            </>
          )}
        </div>
      </div>
    </AreaTopWrapper>
  )
}

export default memo(AreaTop)
