import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    name: 'counter',
    count: 12,
    list: []
  },
  reducers: {
    increment: (state) => {
      state.count++
    }
  }
})

export const { increment } = counterSlice.actions // 导出actions
export default counterSlice.reducer // 默认导出
