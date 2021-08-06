import React, { FC } from 'react'

import 'Assets/Styles/Main/index.scss'

interface IMainProps {}

const Main: FC<IMainProps> = () => {
  return (
    <div className="zm-box main-page">
      <div className="main-wrapper"></div>
    </div>
  )
}

export default Main
