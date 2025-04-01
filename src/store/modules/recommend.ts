import { getBanners } from '@/service/recommend'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
export interface IBanners {
  imageUrl: string
  targetId: number
  adid: null
  targetType: number
  titleColor: string
  typeTitle: string
  url: null | string
  exclusive: boolean
  monitorImpress: null
  monitorClick: null
  monitorType: null
  monitorImpressList: null
  monitorClickList: null
  monitorBlackList: null
  extMonitor: null
  extMonitorInfo: null
  adSource: null
  adLocation: null
  adDispatchJson: null
  encodeId: string
  program: null
  event: null
  video: null
  song: null
  scm: string
  bannerBizType: string
}

interface RecommendState {
  bannersList: IBanners[]
}

const initialState: RecommendState = {
  bannersList: []
}

// 获取banner数据(发送异步请求),需要在页面通过dispatch调用
export const fetchBannerDataAction = createAsyncThunk(
  'fetchBannerData',
  async (arg, { dispatch }) => {
    const res = await getBanners()
    dispatch(changeBannersAction(res.banners))
    return res.banners
  }
)

const recommendSilce = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.bannersList = payload
    }
  }
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(fetchBannerDataAction.pending, (state, action) => {
  //         console.log('pending', action.payload)
  //       })
  //       .addCase(fetchBannerDataAction.fulfilled, (state, action) => {
  //         state.bannersList = action.payload
  //       })
  //       .addCase(fetchBannerDataAction.rejected, (state, action) => {
  //         console.log('rejected', action.payload)
  //       })
  //   }
})

export const { changeBannersAction } = recommendSilce.actions
export default recommendSilce.reducer
