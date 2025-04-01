import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counter'
import recommendReducer from './modules/recommend'
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend: recommendReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
// 确保从Redux store中获取状态时有正确的类型提示
// 利用 typeof 推断出 dispatch 的类型
export const useAppDispatch = () => useDispatch<AppDispatch>()
// 使用TypedUseSelectorHook来约束useSelector的类型
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store
