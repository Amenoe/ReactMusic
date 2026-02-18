import { useRoutes } from 'react-router-dom'
import routes from './router'
import { Suspense } from 'react'
import AppHeader from './components/app-header/app-header'
import AppFooter from './components/app-footer/app-footer'
import { FloatButton } from 'antd'
import PlayerBar from './pages/player/player-bar'

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback={<div>loading...</div>}>
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
      {/* 返回顶部 */}
      <FloatButton.BackTop />
      {/* 播放工具栏 */}
      <PlayerBar />
    </div>
  )
}

export default App
