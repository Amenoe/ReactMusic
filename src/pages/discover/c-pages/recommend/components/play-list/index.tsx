import AreaTop from '@/components/area-top'
import React, { PropsWithChildren, memo, useState } from 'react'
import { PlayListWrapper } from './style'
import { useStore } from '@/store'

interface IProps {}

const PlayList: React.FC<PropsWithChildren<IProps>> = () => {
  const playList = useStore((state) => state.playList)
  const fetchSongDetail = useStore((state) => state.fetchSongDetail)
  const [curIndex, setCurIndex] = useState(-1)
  const setShowOper = (index: number) => {
    setCurIndex(index)
  }

  const handleClickPlay = (id: number) => {
    fetchSongDetail(id)
  }
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
            <div className="list" key={item.name}>
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
                {item.data.tracks.slice(0, 10).map((track: any, i) => {
                  return (
                    <div
                      className="item"
                      key={track.id}
                      onMouseOver={() => setShowOper(track.id + index + i)}
                      onMouseOut={() => setShowOper(-1)}
                    >
                      <div className={`no ${i < 3 ? 'no-top' : ''}`}>
                        {i + 1}
                      </div>
                      <div className="title">{track.name}</div>
                      <div
                        className={`oper ${track.id + index + i === curIndex ? 'show' : ''}`}
                      >
                        <a
                          className="play_item"
                          title="播放"
                          onClick={() => handleClickPlay(track.id)}
                        ></a>
                        <a className="add_item" title="添加到播放列表"></a>
                        <a className="collect_item" title="收藏"></a>
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
