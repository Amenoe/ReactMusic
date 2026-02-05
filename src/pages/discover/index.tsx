import React, { memo, PropsWithChildren, Suspense, useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { NavWapper } from './style'
import { dicoverMenu } from '@/common/local-data'
import SEO from '@/components/seo'
import { useStore } from '@/store'

interface IProps {}

const Discover: React.FC<PropsWithChildren<IProps>> = () => {
  const { fetchTopList } = useStore()

  useEffect(() => {
    fetchTopList()
  }, [])

  return (
    <div>
      <SEO
        title="发现音乐"
        keywords="发现音乐, 推荐, 歌单, 主播电台, 排行榜, 歌手, 新碟上架"
        description="网易云音乐发现音乐模块，为您推荐优质音乐。"
      />
      <NavWapper>
        <div className="w1100">
          <div className="nav">
            {dicoverMenu.map((item) => {
              return (
                <div className="nav-item" key={item.title}>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                  >
                    {item.title}
                  </NavLink>
                </div>
              )
            })}
          </div>
        </div>
      </NavWapper>

      <Suspense fallback={<div>loading...</div>}>
        <Outlet></Outlet>
      </Suspense>
    </div>
  )
}

export default memo(Discover)
