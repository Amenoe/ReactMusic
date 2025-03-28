import Request from '@/service/request'
import { message } from 'antd'

export const request = new Request({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 10000,
  showLoading: true,
  interceptors: {
    requestInterceptor(config) {
      config.headers['Content-Type'] = 'application/json'
      config.withCredentials = true
      return config
    },

    responseInterceptor(config) {
      console.log(1, config)
      // 处理后端返回的code
      if (config.data.code === 200) {
        message.success('请求成功')
        return config.data
      } else {
        message.error('请求失败')
        return config.data
      }
    },

    responseInterceptorCatch(error) {
      const { status, data } = error.response
      if (status === 500) {
        message.error('服务器异常')
      } else if (status >= 400) {
        message.error(`${status} ${data}`)
      }
      return error.response //这里返回的也是在this.instance.request.then中接收
    }
  }
})
