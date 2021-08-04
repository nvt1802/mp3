import React from 'react'
import 'Assets/Styles/Sidebar/index.scss'
import Brand from 'Components/Sidebar/Brand'
import MainMenu from 'Components/Sidebar/MainMenu'

interface IProps {}

const Sidebar: React.FC<IProps> = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <Brand />
        <MainMenu />
      </div>
    </div>
  )
}

export default Sidebar
