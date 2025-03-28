import { useRoutes } from 'react-router-dom'
import routes from './router'
import { Suspense } from 'react'
import AppHeader from './components/app-header/app-header'
import AppFooter from './components/app-footer/app-footer'
import { FloatButton } from 'antd'

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
    </div>
  )
}

export default App
