import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

interface IButtonBackProps {}

const ButtonBack: FC<IButtonBackProps> = () => {
  const history = useHistory()

  const handleClickBack = () => {
    history.goBack()
  }

  return (
    <button className="btn-header" onClick={handleClickBack}>
      <i className="icon-header ic-back"></i>
    </button>
  )
}

export default ButtonBack
