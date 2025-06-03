import React, { PropsWithChildren, memo } from 'react'

interface IProps {}

const PlayListItem: React.FC<PropsWithChildren<IProps>> = () => {
  return <div>PlayListItem</div>
}

export default memo(PlayListItem)
