import { createRoot } from 'react-dom/client'
import './index.css'
import '@/assets/css/index.scss'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import '@ant-design/v5-patch-for-react-19'

import { Provider } from 'react-redux'
import App from '@/App'
import store from './store'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <Provider store={store}>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </Provider>
  // </StrictMode>,
)
