import React, { FC, Fragment, useRef } from 'react'

import 'Assets/Styles/Header/search.scss'
import Suggest from './Suggest'
import { useState } from 'react'
import { useEffect } from 'react'

interface ISearchFormProps {}

const SearchForm: FC<ISearchFormProps> = () => {
  const [searcFocus, setSearchFocus] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.addEventListener('focusin',handleOnFocusIn)
    inputRef.current?.addEventListener('focusout',handleOnFocusOut)
  })

  const handleOnFocusIn = () => {
    setSearchFocus(true)
  }

  const handleOnFocusOut = () => {
    setSearchFocus(false)
  }

  return (
    <Fragment>
      <form className="search">
        <div className={`search-container ${searcFocus && 'is-collapse'}`}>
          <button className="btn-search">
            <i className="ic-search" />
          </button>
          <div className="search-wrapper">
            <input
              ref={inputRef}
              type="text"
              placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV…"
              onFocus={handleOnFocusIn}
            />
          </div>
        </div>
        {searcFocus && <Suggest />}
      </form>
    </Fragment>
  )
}

export default SearchForm
