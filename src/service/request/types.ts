import type {
  AxiosResponse,
  AxiosRequestConfig,
  InternalAxiosRequestConfig
} from 'axios'

//接口拦截器
export interface RequestInterceptors {
  requestInterceptor?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig //请求拦截
  requestInterceptorCatch?: (error: any) => any //请求失败拦截

  // responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptor?: (response: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any //请求失败拦截
}

//自定义接口，用来替换传入参数的类型，可以传入拦截器
export interface RequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptors
  showLoading?: boolean
}

// 整个响应对象的类型
export interface ResultData<T> {
  [key: string]: T | number
  code: number
}
