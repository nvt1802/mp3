import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import routes, { RouteWithSubRoutes } from 'Pages/route'

import 'Assets/Styles/index.scss'

import Player from 'Components/Player'
import Sidebar from 'Components/Sidebar'

import UI from 'Assets/Images/Background/iu.jpg'
import Main from 'Components/Main'
import Header from 'Components/Header'

const App = (props: any) => {
  return (
    <Fragment>
      <Router>
        <div className="app-wrapper" style={{ backgroundImage: `url(${UI})` }}>
          <Header />
          <Sidebar />
          <Main>
            <Switch>
              {routes.map((route: any, i: number) => (
                <RouteWithSubRoutes key={i} {...route} {...props} />
              ))}
            </Switch>
          </Main>
          <Player />
        </div>
      </Router>
    </Fragment>
  )
}

export default App
