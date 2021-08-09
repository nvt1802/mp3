import React from 'react'
import { Link } from 'react-router-dom'

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
  const [currentPath, setCurrentPath] = React.useState('/')

  const handleClick = (value: any) => {
    setCurrentPath(value)
  }

  return (
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
              <Link
                title="Cá Nhân"
                to={item?.path}
                onClick={() => handleClick(item?.path)}
              >
                <i className={`icon-sidebar ${item?.icon}`} />
                <span>{item?.name}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default MainMenu
