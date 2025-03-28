import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  console.log(env)

  return {
    plugins: [react()],
    base: env.VITE_BASE_URL,
    resolve: {
      alias: {
        // 获取绝对路径src
        '@': path.resolve(__dirname, './src'),
        assets: path.resolve(__dirname, './src/assets')
      }
    },
    server: {
      port: 8011,
      proxy: {
        [env.VITE_BASE_API]: {
          target: 'http://codercba.com:9002',
          changeOrigin: true,
          rewrite: (path) => path.replace(env.VITE_BASE_API, '')
        }
      }
    }
  }
})
