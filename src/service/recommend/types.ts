export interface IBannerData {
  banners: IBanners[]
  code: number
}
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

export interface IHotRecommend {
  id: number
  type: number
  name: string
  copywriter: string
  picUrl: string
  canDislike: boolean
  trackNumberUpdateTime: number
  playCount: number
  trackCount: number
  highQuality: boolean
  alg: string
}

export interface IHotRecommendData {
  code: number
  result: IHotRecommend[]
}

// 新碟上架
export interface INewAlbum {
  code: number
  albums: INewAlbumData[]
}
export interface INewAlbumData {
  name: string
  id: number
  type: string
  size: number
  picId: number
  blurPicUrl: string
  companyId: number
  pic: number
  picUrl: string
  publishTime: number
  description: string
  tags: string
  company: string
  briefDesc: string
  artist: Artist
  songs: null
  alias: any[]
  status: number
  copyrightId: number
  commentThreadId: string
  artists: Artist[]
  paid: boolean
  onSale: boolean
  picId_str: string
}

export interface Artist {
  name: string
  id: number
  picId: number
  img1v1Id: number
  briefDesc: string
  picUrl: string
  img1v1Url: string
  albumSize: number
  alias: string[]
  trans: string
  musicSize: number
  topicPerson: number
  picId_str?: string
  img1v1Id_str: string
  transNames?: string[]
}

// topList

export interface ITopListData {
  code: number
  list: ITopList[]
}
export interface ITopList {
  subscribers: any[]
  subscribed: null
  creator: null
  artists: null
  tracks: null
  updateFrequency: string
  backgroundCoverId: number
  backgroundCoverUrl: null
  titleImage: number
  coverText: null
  titleImageUrl: null
  coverImageUrl: null
  iconImageUrl: null
  englishTitle: null
  opRecommend: boolean
  recommendInfo: null
  socialPlaylistCover: null
  tsSongCount: number
  algType: null
  cloudTrackCount: number
  subscribedCount: number
  highQuality: boolean
  specialType: number
  coverImgId: number
  newImported: boolean
  anonimous: boolean
  updateTime: number
  coverImgUrl: string
  trackCount: number
  commentThreadId: string
  trackUpdateTime: number
  totalDuration: number
  playCount: number
  trackNumberUpdateTime: number
  privacy: number
  adType: number
  createTime: number
  ordered: boolean
  description: null | string
  status: number
  tags: string[]
  userId: number
  name: string
  id: number
  coverImgId_str: string
  ToplistType?: string
}
