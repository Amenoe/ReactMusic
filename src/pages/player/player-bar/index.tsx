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
import { ConfigProvider, Slider } from 'antd'
import { useStore } from '@/store'
import dayjs from 'dayjs'
import { getSongUrl } from '@/service/player'
import classNames from 'classnames'
import { useAsyncEffect, useClickAway } from 'ahooks'

interface IProps {}
const PlayerBar: React.FC<PropsWithChildren<IProps>> = () => {
  const currentSong = useStore((state) => state.currentSong)
  const currentLyric = useStore((state) => state.currentLyric)
  const lyricIndex = useStore((state) => state.lyricIndex)
  const fetchSongLyric = useStore((state) => state.fetchSongLyric)
  const changeLyricIndex = useStore((state) => state.changeLyricIndex)
  const volume = useStore((state) => state.volume)
  const changeVolume = useStore((state) => state.changeVolume)

  const audioRef = useRef<HTMLAudioElement>(null)
  const [currentTime, setCurrentTime] = useState('00:00')
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isVolumeBarShow, setIsVolumeBarShow] = useState(false)

  // 点击空白处，音量条消失
  const volumeRef = useRef<HTMLDivElement>(null)
  useClickAway(() => {
    setIsVolumeBarShow(false)
  }, volumeRef)

  const [isLock, setIsLock] = useState(false)
  // 处理进度条改变
  const handleSilderChange = (value: number) => {
    setProgress(value)
    if (audioRef.current) {
      audioRef.current.currentTime = (value / 100) * audioRef.current.duration
    }
  }

  // 处理音量改变
  const handleVolumeChange = (value: number) => {
    changeVolume(value)
  }

  // 音量改变时，同步audio音量
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100
    }
  }, [volume])

  useAsyncEffect(async () => {
    // 播放歌曲
    if (currentSong.id) {
      fetchSongLyric(currentSong.id)
      const urlData = await getSongUrl(currentSong.id)

      audioRef.current!.src = urlData.data[0].url
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

  // 处理时间更新(audio自动执行)
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentTimeVal = audioRef.current.currentTime * 1000
      setCurrentTime(dayjs(currentTimeVal).format('mm:ss'))
      // 按照歌曲信息的长度来计算，不然会出现vip播放30s问题
      setProgress(
        currentSong.dt
          ? (audioRef.current.currentTime / (currentSong.dt / 1000)) * 100
          : 0
      )

      // 匹配歌词
      let i = 0
      for (; i < currentLyric.length; i++) {
        const lyricTime = currentLyric[i].time
        if (currentTimeVal < lyricTime) {
          break
        }
      }
      const finalIndex = i - 1
      if (finalIndex !== lyricIndex) {
        changeLyricIndex(finalIndex)
      }

      //TODO 播放结束且为列表最后一首改为暂停
      if (audioRef.current.currentTime === audioRef.current.duration) {
        setIsPlaying(false)
      }
    }
  }

  const showVolumeBar = () => {
    setIsVolumeBarShow(!isVolumeBarShow)
  }
  return (
    <PlayerbarWrapper $islock={isLock} className="sprite_player">
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
          <NavLink to={`/discover/song/${currentSong.id}`}>
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
              <Slider
                step={0.2}
                tooltip={{ formatter: null }}
                value={progress}
                onChange={handleSilderChange}
              ></Slider>
              <div className="time">
                <div className="current">{currentTime}</div>
                <div className="divider">/</div>
                <div className="total-time">
                  {currentSong.dt
                    ? dayjs(currentSong.dt).format('mm:ss')
                    : '00:00'}
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
            <div className="volume-container" ref={volumeRef}>
              {isVolumeBarShow && (
                <ConfigProvider
                  theme={{
                    components: {
                      Slider: {
                        handleActiveColor: '#c20c0c',
                        handleActiveOutlineColor: 'rgba(194, 12, 12, 0.2)'
                      }
                    }
                  }}
                >
                  <Slider
                    classNames={{
                      root: 'volume-bar',
                      track: 'volume-track',
                      handle: 'volume-handle'
                    }}
                    vertical
                    value={volume}
                    onChange={handleVolumeChange}
                  />
                </ConfigProvider>
              )}
              <button
                className="btn sprite_player volume"
                onClick={showVolumeBar}
              ></button>
            </div>
            <button className="btn sprite_player loop"></button>
            <button className="btn sprite_player playlist"></button>
          </div>
        </BarOperator>
      </div>
      <div className="sprite_player lock-bg">
        <button
          className={classNames(
            'sprite_player',
            'lock',
            isLock ? 'lock-active' : ''
          )}
          onClick={() => setIsLock(!isLock)}
        ></button>
      </div>
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate}></audio>
    </PlayerbarWrapper>
  )
}
export default memo(PlayerBar)
