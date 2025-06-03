import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { RequestConfig, RequestInterceptors, ResultData } from './types'

//TODO ElLogin无效
const DEFAULT_LOADING = false

//通过类来封装，有更强的封装性
class Request {
  instance: AxiosInstance //变量，类型是Axios提供的AxiosInstance
  interceptors?: RequestInterceptors //变量，用来保存拦截器
  loadingInstance?: any
  showLoading: boolean

  //要求传入的配置，这样可以通过配置生成不同的实例
  constructor(config: RequestConfig) {
    this.instance = axios.create(config) //创建axios实例
    this.interceptors = config.interceptors //保存实例的拦截器
    this.showLoading = config.showLoading ?? DEFAULT_LOADING //创建实例的时候，如果没有传入showLoading，默认关闭

    this.setupInterceptor()
  }
  setupInterceptor(): void {
    //添加实例拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      //在2xx范围内的任何状态代码都会触发此函数，这里主要用于处理响应数据
      this.interceptors?.responseInterceptor,
      //任何超出2xx范围的状态码都会触发此函数，这里主要用于处理响应错误
      this.interceptors?.responseInterceptorCatch
    )

    //添加全局的拦截器，后添加的先执行
    this.instance.interceptors.request.use(
      (config) => {
        //是否要开启加载动画
        if (this.showLoading) {
        }
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        //请求到数据将loading移除
        this.loadingInstance?.close()
        return res
      },
      (err) => {
        this.loadingInstance?.close()
        return err
      }
    )
  }

  //发送网络请求的方法
  request<T = any>(config: RequestConfig): Promise<T> {
    if (config.showLoading) {
      this.showLoading = true
    }

    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res)
          this.showLoading = false
        })
        .catch((err) => {
          reject(err)
          this.showLoading = false
        })
    })
  }

  get<T = any>(config: RequestConfig): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }

  post<T = any>(config: RequestConfig): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }

  delete<T = any>(config: RequestConfig): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: RequestConfig): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default Request
