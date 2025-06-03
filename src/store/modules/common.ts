import { getTopList } from '@/service/recommend'
import { ITopListData } from '@/service/recommend/types'
import { setLocalStorage } from '@/utils/storage'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface ICommonState {
  topList: ITopListData[]
}

const initialState: ICommonState = {
  topList: []
}

export const fetchTopListAction = createAsyncThunk(
  'fetchTopList',
  async (_, { dispatch }) => {
    const res = await getTopList()
    dispatch(changeTopListAction(res.list))
    return res.list
  }
)

const commonSilce = createSlice({
  name: 'common',
  initialState,
  reducers: {
    changeTopListAction(state, { payload }) {
      state.topList = payload
      const data = payload.map((item: any) => {
        return {
          name: item.name,
          id: item.id
        }
      })
      setLocalStorage('topIdList', data)
    }
  }
})

export const { changeTopListAction } = commonSilce.actions
export default commonSilce.reducer
