import React from 'react'
import ButtonBack from './ButtonBack'
import ButtonForward from './ButtonForward'
import SearchForm from './Search'

interface IProps {}

const HeaderLeft: React.FC<IProps> = () => {
  return (
    <header className="level-left">
      <ButtonBack />
      <ButtonForward />
      <SearchForm />
    </header>
  )
}

export default HeaderLeft
