import { getBanners, getHotRecommends } from '@/service/recommend/recommend'
import type { IBanners, IHotRecommend } from '@/service/recommend/types'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface RecommendState {
  bannersList: IBanners[]
  hotRecommendList: IHotRecommend[]
}

const initialState: RecommendState = {
  bannersList: [],
  hotRecommendList: []
}

// 获取banner数据(发送异步请求),需要在页面通过dispatch调用
export const fetchBannerAction = createAsyncThunk(
  'fetchBannerData',
  async (arg, { dispatch }) => {
    const res = await getBanners()
    dispatch(changeBannersAction(res.banners))
    return res.banners
  }
)

export const fetchHotRecommendAction = createAsyncThunk(
  'fetchHotRecommendData',
  async (arg, { dispatch }) => {
    const res = await getHotRecommends(8)
    dispatch(changeHotRecommendAction(res.result))
    return res.result
  }
)

const recommendSilce = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.bannersList = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommendList = payload
    }
  }
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(fetchBannerAction.pending, (state, action) => {
  //         console.log('pending', action.payload)
  //       })
  //       .addCase(fetchBannerAction.fulfilled, (state, action) => {
  //         state.bannersList = action.payload
  //       })
  //       .addCase(fetchBannerAction.rejected, (state, action) => {
  //         console.log('rejected', action.payload)
  //       })
  //   }
})

export const { changeBannersAction, changeHotRecommendAction } =
  recommendSilce.actions
export default recommendSilce.reducer
