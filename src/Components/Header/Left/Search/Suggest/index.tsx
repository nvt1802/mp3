import React, { FC } from 'react'

interface ISuggestProps {}

const Suggest: React.FC<ISuggestProps> = () => {
  const arr = [1, 2, 3, 4, 5]

  const renderSuggestItem = () => {
    return arr.map((item: any, index: number) => (
      <SuggestItem key={index} label={`Suggest number ${item}`} />
    ))
  }

  return <ul className="suggest-list">{renderSuggestItem()}</ul>
}

interface ISuggestItemProps {
  label: string
}

const SuggestItem: FC<ISuggestItemProps> = ({ label }) => {
  return (
    <li className="suggest-item">
      <i className="suggest-icon"></i>
      <div className="is-oneline">
        <span>{label}</span>
      </div>
    </li>
  )
}

export default Suggest
