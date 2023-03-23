import React, { MouseEventHandler } from 'react'

interface TagProps {
  tagName: string,
  filterByTag: (tagName: string) => void
}

const Tag = ({ tagName, filterByTag }: TagProps) => {

  const heandleFilterByTag = () => {
    filterByTag(tagName)
  }

  return (
    <li className='tag' onClick={heandleFilterByTag}>
      <b>&#35;</b>
      <div>{tagName}</div>
    </li>
  )
}

export default Tag