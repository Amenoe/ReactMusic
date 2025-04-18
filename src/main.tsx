import { createRoot } from 'react-dom/client'
import './index.css'
import '@/assets/css/index.scss'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from '@/assets/css/theme'
import '@ant-design/v5-patch-for-react-19'

import { Provider } from 'react-redux'
import App from '@/App'
import store from './store'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
  // </StrictMode>,
)
