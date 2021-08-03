import React, { Fragment } from 'react'

import 'Assets/Styles/index.scss'

import Player from 'Components/Player'
import Sidebar from 'Components/Sidebar'

const App = () => {
  return (
    <Fragment>
      <div className="app-wrapper">
        <Sidebar />
        <Player />
      </div>
    </Fragment>
  )
}

export default App
