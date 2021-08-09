import React from 'react'
import { Route } from 'react-router-dom'

import HomePage from 'Pages/Home'
import MyMusicPage from 'Pages/MyMusic'
import RadioPage from 'Pages/Radio'

const routes = [
  {
    path: '/',
    exact: true,
    component: (props: any) => <HomePage {...props} />,
  },
  {
    path: '/my-music',
    exact: true,
    component: (props: any) => <MyMusicPage {...props} />,
  },
  {
    path: '/radio',
    exact: true,
    component: (props: any) => <RadioPage {...props} />,
  },
]

export default routes

export const RouteWithSubRoutes = (route: any) => {
  return (
    <>
      <Route
        path={route.path}
        exact={route.exact}
        render={(props) => (
          <>
            <route.component {...props} {...route} routes={route.routes} />
          </>
        )}
      />
    </>
  )
}
