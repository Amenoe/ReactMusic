import React, {
  PropsWithChildren,
  Suspense,
  useContext,
  useEffect
} from 'react'
import { Link, Outlet } from 'react-router-dom'
import { shallowEqual } from 'react-redux'
import { useAppSelector } from '@/store'
interface IProps {}

const Discover: React.FC<PropsWithChildren<IProps>> = () => {
  // const counter = useAppSelector((state) => state.counter, shallowEqual)

  return (
    <div>
      {/* <h1>{counter.name}</h1>
      <h1>{counter.count}</h1> */}

      <Link to="/discover/recommend">Recommend</Link>
      <Link to="/discover/ranking">Ranking</Link>
      <Link to="songs">Songs</Link>
      <Link to="artist">Artist</Link>
      <Link to="news">News</Link>
      <Suspense fallback={<div>loading...</div>}>
        <Outlet></Outlet>
      </Suspense>
    </div>
  )
}

export default Discover
