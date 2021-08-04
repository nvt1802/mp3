import React from 'react'
import 'Assets/Styles/Sidebar/index.scss'

interface IProps {}

const Sidebar: React.FC<IProps> = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <nav className="navbar">
          <div className="navbar-brand">
            <div>
              <button className="btn button">
                <div className="zmp3-logo"></div>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
