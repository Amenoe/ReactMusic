import { create } from 'zustand'
import { commonStore, CommonState } from '@/store/modules/common'
import { recommendStore, RecommendState } from '@/store/modules/recommend'
import { PlayerState, playerStore } from './modules/player'

type StoreState = CommonState & RecommendState & PlayerState

export const useStore = create<StoreState>()((...args) => ({
  ...commonStore(...args),
  ...recommendStore(...args),
  ...playerStore(...args)
}))
