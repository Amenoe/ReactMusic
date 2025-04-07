import React, { PropsWithChildren, memo } from 'react'
import { AreaTopWrapper } from './style'

interface IProps {
  title: string
  leftSlot?: React.ReactNode
  rightSlot?: React.ReactNode
  keyWord?: string[]
  moreText?: string
  moreLink?: string
  titleLink?: string
}

const AreaTop: React.FC<PropsWithChildren<IProps>> = (props) => {
  const { title } = props
  const {
    leftSlot,
    rightSlot,
    keyWord = [],
    moreText = '更多',
    moreLink = '/',
    titleLink = ''
  } = props
  return (
    <AreaTopWrapper>
      <div className="top-content sprite_02">
        <div className="left">
          <a className="title" href={titleLink}>
            {title}
          </a>
          {leftSlot ?? (
            <div className="tab">
              {keyWord.map((item) => {
                return (
                  <span key={item} className="item">
                    <a>{item}</a>
                    <span className="line">|</span>
                  </span>
                )
              })}
            </div>
          )}
        </div>
        <div className="right">
          {rightSlot ?? (
            <>
              <a href={moreLink}>{moreText}</a>
              <i className="cor sprite_02"></i>
            </>
          )}
        </div>
      </div>
    </AreaTopWrapper>
  )
}

export default memo(AreaTop)
