import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    name: 'counter',
    count: 12,
    list: []
  },
  reducers: {}
})

export default counterSlice.reducer
