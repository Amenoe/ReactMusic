import { create } from 'zustand'
import { commonStore, ICommonState } from '@/store/modules/common'
import { recommendStore, RecommendState } from '@/store/modules/recommend'

type StoreState = ICommonState & RecommendState

export const useStore = create<StoreState>()((...args) => ({
  ...commonStore(...args),
  ...recommendStore(...args)
}))