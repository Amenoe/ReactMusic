import { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },

  {
    path: '/discover',
    Component: lazy(() => import('@/pages/discover/index')),
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      // 推荐
      {
        path: '/discover/recommend',
        Component: lazy(
          () => import('@/pages/discover/c-pages/recommend/recommend')
        )
      },
      // 排行榜
      {
        path: '/discover/toplist',
        Component: lazy(
          () => import('@/pages/discover/c-pages/toplist/toplist')
        )
      },
      // 歌单
      {
        path: '/discover/playlist',
        Component: lazy(
          () => import('@/pages/discover/c-pages/playlist/playlist')
        )
      },
      // 歌手
      {
        path: '/discover/artist',
        Component: lazy(() => import('@/pages/discover/c-pages/artist/artist'))
      },
      // 新碟上架
      {
        path: '/discover/album',
        Component: lazy(() => import('@/pages/discover/c-pages/album/album'))
      }
    ]
  },
  {
    path: 'mine',
    Component: lazy(() => import('@/pages/mine/index'))
  },
  {
    path: 'follow',
    Component: lazy(() => import('@/pages/follow/index'))
  },
  {
    path: 'download',
    Component: lazy(() => import('@/pages/download/index'))
  }
]

export default routes
