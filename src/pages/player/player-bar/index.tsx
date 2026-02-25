import React, {
  memo,
  PropsWithChildren,
  useEffect,
  useRef,
  useState
} from 'react'
import {
  BarControl,
  BarOperator,
  BarPlayerInfo,
  PlayerbarWrapper
} from './style'
import { NavLink } from 'react-router-dom'
import { Slider } from 'antd'
import { useStore } from '@/store'
import dayjs from 'dayjs'
import { getSongUrl } from '@/service/player'

interface IProps {}
const PlayerBar: React.FC<PropsWithChildren<IProps>> = () => {
  const currentSong = useStore((state) => state.currentSong)
  const audioRef = useRef<HTMLAudioElement>(null)
  const [currentTime, setCurrentTime] = useState('00:00')
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const handleSilderChange = (value: number) => {
    setProgress(value)
  }
  useEffect(() => {
    if (currentSong.id) {
      getSongUrl(currentSong.id).then((res) => {
        audioRef.current!.src = res.data[0].url

        audioRef.current
          ?.play()
          .then(() => {
            setIsPlaying(true)
            console.log('歌曲播放成功')
          })
          .catch(() => {
            setIsPlaying(false)
            console.log('歌曲播放失败')
          })
      })
    }
  }, [currentSong])

  // 处理播放按钮
  const handlePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause()
      setIsPlaying(false)
    } else {
      audioRef.current?.play()
      setIsPlaying(true)
    }
  }

  // 处理时间更新
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(dayjs(audioRef.current.currentTime * 1000).format('mm:ss'))
      setProgress(
        (audioRef.current.currentTime / audioRef.current.duration) * 100
      )
    }
  }
  return (
    <PlayerbarWrapper className="sprite_player">
      <div className="content">
        <BarControl $isplaying={isPlaying}>
          <button className="btn sprite_player prev"></button>
          <button
            className="btn sprite_player play"
            onClick={handlePlay}
          ></button>
          <button className="btn sprite_player next"></button>
        </BarControl>
        <BarPlayerInfo>
          <NavLink to="/discover/player">
            <img className="image" src={currentSong.al?.picUrl} alt="" />
          </NavLink>
          <div className="info">
            <div className="song">
              <a className="song-name">{currentSong.name}</a>
              <a className="singer-name hide">
                {currentSong.ar?.map((item) => item.name).join('/')}
              </a>
            </div>
            <div className="progress">
              <Slider value={progress} onChange={handleSilderChange}></Slider>
              <div className="time">
                <div className="current">{currentTime}</div>
                <div className="divider">/</div>
                <div className="total-time">
                  {currentSong.dt ? dayjs(currentSong.dt).format('mm:ss') : ''}
                </div>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator playsequence={0}>
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
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate}></audio>
    </PlayerbarWrapper>
  )
}
export default memo(PlayerBar)
