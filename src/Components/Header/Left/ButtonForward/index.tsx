import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

interface IButtonForwardProps {}

const ButtonForward: FC<IButtonForwardProps> = () => {
  const history = useHistory()

  const handleClickForward = () => {
    history.goForward()
  }

  return (
    <button className="btn-header" onClick={handleClickForward}>
      <i className="icon-header ic-forward"></i>
    </button>
  )
}

export default ButtonForward
