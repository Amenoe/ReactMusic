import React, { memo } from 'react'
import { Helmet } from 'react-helmet-async'

interface IProps {
  title?: string
  description?: string
  keywords?: string
}

const SEO: React.FC<IProps> = (props) => {
  const { title, description, keywords } = props

  return (
    <Helmet>
      {title && <title>{title} - 网易云音乐</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
    </Helmet>
  )
}

export default memo(SEO)
