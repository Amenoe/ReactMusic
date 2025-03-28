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

      {
        path: '/discover/recommend',
        Component: lazy(() => import('@/pages/discover/c-pages/recommend'))
      },
      {
        path: '/discover/ranking',
        Component: lazy(() => import('@/pages/discover/c-pages/ranking'))
      },
      {
        path: '/discover/songs',
        Component: lazy(() => import('@/pages/discover/c-pages/songs'))
      },
      {
        path: '/discover/artist',
        Component: lazy(() => import('@/pages/discover/c-pages/artist'))
      },
      {
        path: '/discover/news',
        Component: lazy(() => import('@/pages/discover/c-pages/news'))
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
