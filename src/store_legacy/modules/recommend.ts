import {
  getBanners,
  getHotRecommends,
  getNewAlbums,
  getPlayListDetail
} from '@/service/recommend'
import type {
  IBanners,
  IHotRecommend,
  INewAlbumData
} from '@/service/recommend/types'
import { getLocalStorage } from '@/utils/storage'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface RecommendState {
  bannersList: IBanners[]
  hotRecommendList: IHotRecommend[]
  newAlbumList: INewAlbumData[]
  playList: any[]
}

// 初始化state
const initialState: RecommendState = {
  bannersList: [],
  hotRecommendList: [],
  newAlbumList: [],
  playList: []
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

// 获取歌单详情(飙升榜,新歌榜,原创榜)
export const fetchPlayListDetailAction = createAsyncThunk(
  'fetchPlayListDetailData',
  async (_, { dispatch }) => {
    getLocalStorage('topIdList').forEach(async (item: any) => {
      if (item.name === '飙升榜') {
        const res = await getPlayListDetail(item.id)
        dispatch(changePlayListAction(res.playlist))
      }
      if (item.name === '新歌榜') {
        const res1 = await getPlayListDetail(item.id)
      }
      if (item.name === '原创榜') {
        const res2 = await getPlayListDetail(item.id)
      }
    })
    return null
  }
)

const recommendSlice = createSlice({
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
    },
    changePlayListAction(state, { payload }) {
      state.playList = payload
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
  changeNewAlbumAction,
  changePlayListAction
} = recommendSlice.actions
export default recommendSlice.reducer
