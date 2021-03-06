import React, { Fragment, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Divider from 'Components/Layout/Divider'

const paths = [
  {
    path: '/my-music',
    name: 'Cá Nhân',
    icon: 'icon-personal',
  },
  {
    path: '/',
    name: 'Khám Phá',
    icon: 'icon-discover',
  },
  {
    path: '/radio',
    name: 'Radio',
    icon: 'icon-radio',
  },
]

const MainMenu = () => {
  const location = useLocation()
  const [currentPath, setCurrentPath] = React.useState('/')

  useEffect(() => {
    setCurrentPath(location.pathname)
  }, [location])

  return (
    <Fragment>
      <nav className="navbar-main">
        <ul className="navbar-menu">
          {paths.map((item: any, index: number) => {
            return (
              <li
                key={index}
                className={`navbar-item ${
                  currentPath === item?.path ? 'is-active' : ''
                }`}
              >
                <Link title="Cá Nhân" to={item?.path}>
                  <i className={`icon-sidebar ${item?.icon}`} />
                  <span>{item?.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
        <Divider />
      </nav>
      <nav className="navbar-main-bottom">
        <Divider />
        <ul className="navbar-menu-bottom">
          <li className="navbar-item-bottom">
            <Link to="/">
              <i className="icon-sidebar icon-themes" />
            </Link>
          </li>
          <li className="navbar-item-bottom">
            <Link to="/">
              <i className="icon-sidebar icon-settings" />
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  )
}

export default MainMenu
