import React from 'react'
import { useHistory } from 'react-router-dom'

const Brand = () => {
  const history = useHistory()

  const handleClick = () => {
    history.push('/')
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div>
          <button className="btn button">
            <div className="zmp3-logo" onClick={handleClick}></div>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Brand
