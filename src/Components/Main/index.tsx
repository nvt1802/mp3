import React, { FC, Fragment } from 'react'

import 'Assets/Styles/Main/index.scss'
interface IMainProps {
  children: any
}

const Main: FC<IMainProps> = ({ children = <Fragment /> }) => {
  return (
    <div className="zm-box main-page">
      <div className="main-wrapper">
        <div className="page">{children}</div>
      </div>
    </div>
  )
}

export default Main
