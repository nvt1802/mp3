import React, { FC } from 'react'

interface IButtonBackProps {}

const ButtonBack: FC<IButtonBackProps> = () => {
  return (
    <button className="btn-header">
      <i className="icon-header ic-back"></i>
    </button>
  )
}

export default ButtonBack
