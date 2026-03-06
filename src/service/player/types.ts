export interface ISongDetail {
  songs: ISong[]
  privileges: Privilege[]
  code: number
}

export interface ISong {
  name: string
  mainTitle: any
  additionalTitle: any
  id: number
  pst: number
  t: number
  ar: Ar[]
  alia: any[]
  pop: number
  st: number
  rt: string
  fee: number
  v: number
  crbt: any
  cf: string
  al: Al
  dt: number
  h: H
  m: M
  l: L
  sq: any
  hr: any
  a: any
  cd: string
  no: number
  rtUrl: any
  ftype: number
  rtUrls: any[]
  djId: number
  copyright: number
  s_id: number
  mark: number
  originCoverType: number
  originSongSimpleData: any
  tagPicList: any
  resourceState: boolean
  version: number
  songJumpInfo: any
  entertainmentTags: any
  awardTags: any
  displayTags: any
  markTags: any[]
  single: number
  noCopyrightRcmd: any
  mv: number
  cp: number
  rtype: number
  rurl: any
  mst: number
  publishTime: number
  tns: string[]
}

export interface Ar {
  id: number
  name: string
  tns: any[]
  alias: any[]
}

export interface Al {
  id: number
  name: string
  picUrl: string
  tns: any[]
  pic_str: string
  pic: number
}

export interface H {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

export interface M {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

export interface L {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

export interface Privilege {
  id: number
  fee: number
  payed: number
  st: number
  pl: number
  dl: number
  sp: number
  cp: number
  subp: number
  cs: boolean
  maxbr: number
  fl: number
  toast: boolean
  flag: number
  preSell: boolean
  playMaxbr: number
  downloadMaxbr: number
  maxBrLevel: string
  playMaxBrLevel: string
  downloadMaxBrLevel: string
  plLevel: string
  dlLevel: string
  flLevel: string
  rscl: any
  freeTrialPrivilege: FreeTrialPrivilege
  rightSource: number
  chargeInfoList: ChargeInfoList[]
  code: number
  message: any
  plLevels: any
  dlLevels: any
  ignoreCache: any
  bd: any
}

export interface FreeTrialPrivilege {
  resConsumable: boolean
  userConsumable: boolean
  listenType: any
  cannotListenReason: any
  playReason: any
  freeLimitTagType: any
}

export interface ChargeInfoList {
  rate: number
  chargeUrl: any
  chargeMessage: any
  chargeType: number
}

// ------------------------------------------------------------

export interface ISongUrl {
  data: Daum[]
  code: number
}

export interface Daum {
  id: number
  url: string
  br: number
  size: number
  md5: string
  code: number
  expi: number
  type: string
  gain: number
  peak: number
  closedGain: number
  closedPeak: number
  fee: number
  uf: any
  payed: number
  flag: number
  canExtend: boolean
  freeTrialInfo: any
  level: string
  encodeType: string
  channelLayout: any
  freeTrialPrivilege: FreeTrialPrivilege
  freeTimeTrialPrivilege: FreeTimeTrialPrivilege
  urlSource: number
  rightSource: number
  podcastCtrp: any
  effectTypes: any
  time: number
  message: any
  levelConfuse: any
  musicId: string
  accompany: any
  sr: number
  auEff: any
  immerseType: any
  beatType: number
}

export interface FreeTrialPrivilege {
  resConsumable: boolean
  userConsumable: boolean
  listenType: any
  cannotListenReason: any
  playReason: any
  freeLimitTagType: any
}

export interface FreeTimeTrialPrivilege {
  resConsumable: boolean
  userConsumable: boolean
  type: number
  remainTime: number
}

export interface ILyric {
  lrc: Lrc
  code: number
}

export interface Lrc {
  lyric: string
}

export interface ISongComment {
  topComments: any[]
  hotComments: any[]
  comments: IComment[]
  total: number
  more: boolean
  code: number
}

export interface IComment {
  user: {
    nickname: string
    avatarUrl: string
    userId: number
    vipType: number
  }
  commentId: number
  content: string
  time: number
  timeStr: string
  likedCount: number
  liked: boolean
}
