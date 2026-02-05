import AreaTop from '@/components/area-top'
import React, { PropsWithChildren, memo } from 'react'
import { PlayListWrapper } from './style'
import { useStore } from '@/store'

interface IProps {}

const PlayList: React.FC<PropsWithChildren<IProps>> = () => {
  const playList = useStore((state) => state.playList)
  return (
    <PlayListWrapper>
      <AreaTop
        title="榜单"
        titleLink="/discover/toplist"
        moreLink="/discover/toplist"
      ></AreaTop>
      <div className="content">
        {playList.map((item, index) => {
          return (
            <div className="list">
              <div className="top">
                <div className={`top-img${index + 1}`}></div>
                <div className="top-content">
                  <a href="">{item.name}</a>
                  <div className="btn">
                    <a href="" className="play"></a>
                    <a href="" className="collect"></a>
                  </div>
                </div>
              </div>
              <div className="list-content">
                {item.data.tracks.slice(0, 10).map((item: any, index) => {
                  return (
                    <div className="item" key={item.id}>
                      <div className={`no ${index < 3 ? 'no-top' : ''}`}>
                        {index + 1}
                      </div>
                      <div className="title">{item.name}</div>
                      <div className="item-btn">
                        <div className="play"></div>
                        <div className="collect"></div>
                      </div>
                    </div>
                  )
                })}
                <div className="item item-last">
                  <a
                    className="title"
                    style={{
                      width: '100%',
                      textAlign: 'right',
                      marginRight: '32px',
                      color: '#333'
                    }}
                    href={`/discover/toplist?id=19723756`}
                  >
                    查看全部 &gt;
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </PlayListWrapper>
  )
}

export default memo(PlayList)
