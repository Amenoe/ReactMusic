import React, { memo, PropsWithChildren, Suspense, useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { NavWapper } from './style'
import { dicoverMenu } from '@/common/local-data'
import { useStore } from '@/store'

interface IProps {}

const Discover: React.FC<PropsWithChildren<IProps>> = () => {
  const { fetchTopList } = useStore()

  useEffect(() => {
    fetchTopList()
  }, [])

  return (
    <div>
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
