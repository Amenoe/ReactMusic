import React, { memo, PropsWithChildren } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { HeaderLeft, HeaderRight, HeaderWapper } from './style'
import { SearchOutlined } from '@ant-design/icons'

interface IProps {}

import { headerLinks } from '@/common/local-data.ts'
import { Button, Input } from 'antd'

const AppHeader: React.FC<PropsWithChildren<IProps>> = () => {
  const location = useLocation()
  return (
    <HeaderWapper>
      <div className="content w1100">
        <HeaderLeft>
          <h1>
            <a href="/" className="logo sprite_01">
              网易云音乐
            </a>
          </h1>
          <div className="header-group">
            {headerLinks.map((item) => {
              return (
                <NavLink
                  key={item.title}
                  to={item.link}
                  className={({ isActive }) =>
                    [isActive ? 'link-active' : '', 'header-item'].join(' ')
                  }
                >
                  <em>{item.title}</em>
                  <i className="icon"></i>
                </NavLink>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            prefix={<SearchOutlined />}
            placeholder="音乐/视频/电台/用户"
          />

          <Button
            className="creator"
            href="https://music.163.com/#/creatorcenter"
          >
            创作者中心
          </Button>
          <a className="login">登录</a>
        </HeaderRight>
      </div>
      <div
        // className={`divider ${location.pathname.includes('/discover') ? 'hide' : ''}`}
        className="divider"
      ></div>
    </HeaderWapper>
  )
}

export default memo(AppHeader)
