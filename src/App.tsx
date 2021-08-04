import React, { Fragment, useState } from 'react'

import 'Assets/Styles/index.scss'

import Player from 'Components/Player'
import Sidebar from 'Components/Sidebar'

import UI from 'Assets/Images/Background/iu.jpg'
import Jennie from 'Assets/Images/Background/jennie.jpg'
import Jisoo from 'Assets/Images/Background/jisoo.jpg'
import Lisa from 'Assets/Images/Background/lisa.jpg'
import Rose from 'Assets/Images/Background/rose.jpg'

const listBg = [UI, Jennie, Jisoo, Lisa, Rose]

const App = () => {
  const getBackground = () => {
    return listBg[Math.floor(Math.random() * 5)]
  }

  return (
    <Fragment>
      <div
        className="app-wrapper"
        style={{ backgroundImage: `url(${getBackground()})` }}
      >
        <Sidebar />
        <Player />
      </div>
    </Fragment>
  )
}

export default App
