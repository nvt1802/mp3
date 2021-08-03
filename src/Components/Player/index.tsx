import React, { Fragment } from 'react'
import LeftControl from 'Components/Player/Controls/Left'
import CenterControl from 'Components/Player/Controls/Center'
import RightControl from 'Components/Player/Controls/Right'

import 'Assets/Styles/Player/index.scss'

interface IProps {}

const Player: React.FC<IProps> = () => {
  return (
    <Fragment>
      <div className="zm-section now-playing-bar">
        <div className="player-controls">
          <div className="level player-controls__container">
            <LeftControl />
            <CenterControl />
            <RightControl />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Player
