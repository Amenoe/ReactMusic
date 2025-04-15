import {
  getBanners,
  getHotRecommends,
  getNewAlbums
} from '@/service/recommend/recommend'
import type {
  IBanners,
  IHotRecommend,
  INewAlbumData
} from '@/service/recommend/types'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface RecommendState {
  bannersList: IBanners[]
  hotRecommendList: IHotRecommend[]
  newAlbumList: INewAlbumData[]
}

const initialState: RecommendState = {
  bannersList: [],
  hotRecommendList: [],
  newAlbumList: []
}

// 获取banner数据(发送异步请求),需要在页面通过dispatch调用
// 第一个参数为Action Type 标识 ：它会被用来生成三个不同的 action type，可以在redux devtools中查看
export const fetchBannerAction = createAsyncThunk(
  'fetchBannerData',
  async (_, { dispatch }) => {
    const res = await getBanners()
    dispatch(changeBannersAction(res.banners))
    return res.banners
  }
)

// 获取热门推荐数据
export const fetchHotRecommendAction = createAsyncThunk(
  'fetchHotRecommendData',
  async (_, { dispatch }) => {
    const res = await getHotRecommends(8)
    dispatch(changeHotRecommendAction(res.result))
    return res.result
  }
)

// 获取新碟上架数据
export const fetchNewAlbumAction = createAsyncThunk(
  'fetchNewAlbumData',
  async (_, { dispatch }) => {
    const res = await getNewAlbums()
    dispatch(changeNewAlbumAction(res.albums))
    return res.albums
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
    },
    changeNewAlbumAction(state, { payload }) {
      state.newAlbumList = payload
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

export const {
  changeBannersAction,
  changeHotRecommendAction,
  changeNewAlbumAction
} = recommendSilce.actions
export default recommendSilce.reducer
