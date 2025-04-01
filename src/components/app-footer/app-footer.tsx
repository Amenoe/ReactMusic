import React, { memo, PropsWithChildren } from 'react'

interface IProps {}

const AppFooter: React.FC<PropsWithChildren<IProps>> = () => {
  return <h1>AppFooter</h1>
}

export default memo(AppFooter)
