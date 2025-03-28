import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counter'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

export type IState = ReturnType<typeof store.getState>

export const useAppSelector: TypedUseSelectorHook<IState> = useSelector

export default store
