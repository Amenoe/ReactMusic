import React, { memo, PropsWithChildren, useState } from 'react'
import {
  BarControl,
  BarOperator,
  BarPlayerInfo,
  PlayerbarWrapper
} from './style'
import { NavLink } from 'react-router-dom'
import { Slider } from 'antd'

interface IProps {}
const PlayerBar: React.FC<PropsWithChildren<IProps>> = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const handleSilderChange = (value: number) => {
    setProgress(value)
  }
  return (
    <PlayerbarWrapper className="sprite_player">
      <div className="content">
        <BarControl isPlaying={isPlaying}>
          <button className="btn sprite_player prev"></button>
          <button className="btn sprite_player play"></button>
          <button className="btn sprite_player next"></button>
        </BarControl>
        <BarPlayerInfo>
          <NavLink to="/discover/player">
            <img
              className="image"
              src="https://p2.music.126.net/5cqBvZaAFyb7lLWbicmyWA==/109951170383379551.jpg?param=34y34"
              alt=""
            />
          </NavLink>
          <div className="info">
            <div className="song">
              <a className="song-name">原色</a>
              <a className="singer-name hide">三Z-STUDIO/HOYO-MiX/于梓贝</a>
            </div>
            <div className="progress">
              <Slider
                step={0.5}
                value={progress}
                onChange={handleSilderChange}
              ></Slider>
              <div className="time">
                <div className="current">00:52</div>
                <div className="divider">/</div>
                <div className="total-time">04:35</div>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator playSequence={0}>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_player favor"></button>
            <button className="btn sprite_player share"></button>
          </div>
          <div className="right">
            <button className="btn sprite_player volume"></button>
            <button className="btn sprite_player loop"></button>
            <button className="btn sprite_player playlist"></button>
          </div>
        </BarOperator>
      </div>
    </PlayerbarWrapper>
  )
}
export default memo(PlayerBar)
