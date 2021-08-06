import React from 'react'

import 'Assets/Styles/Header/index.scss'
import HeaderLeft from './Left'
import HeaderRight from './Right'

interface IProps {}

const Header: React.FC<IProps> = () => {
  return (
    <header className="header is-sticky">
      <div className="level">
        <HeaderLeft />
        <HeaderRight />
      </div>
    </header>
  )
}

export default Header
