import React, { FC } from 'react'

interface IButtonForwardProps {}

const ButtonForward: FC<IButtonForwardProps> = () => {
  return (
    <button className="btn-header">
      <i className="icon-header ic-forward"></i>
    </button>
  )
}

export default ButtonForward
