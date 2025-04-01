import React, {
  memo,
  PropsWithChildren,
  Suspense,
  useContext,
  useEffect
} from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { shallowEqual } from 'react-redux'
import { useAppSelector } from '@/store'
import { NavWapper } from './style'
import { dicoverMenu } from '@/common/local-data'
interface IProps {}

const Discover: React.FC<PropsWithChildren<IProps>> = () => {
  // const counter = useAppSelector((state) => state.counter, shallowEqual)

  return (
    <div>
      {/* <h1>{counter.name}</h1>
      <h1>{counter.count}</h1> */}
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
