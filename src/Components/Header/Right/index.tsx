import React from 'react'

interface IProps {}

const HeaderRight: React.FC<IProps> = () => {
  return (
    <header className="level-right">
      <div className="setting-item">
        <button className="level-right setting-item zm-btn">
          <i className="icon-level-right themes"></i>
        </button>
      </div>
      <div className="setting-item">
        <button className="level-right setting-item zm-btn">
          <i className="icon-level-right settings"></i>
        </button>
      </div>
    </header>
  )
}

export default HeaderRight
