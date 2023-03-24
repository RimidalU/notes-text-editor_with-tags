import React from 'react'
import { ITag } from '../../interfaces/types'

interface TagProps {
  tag: ITag,
  filterByTag?: (tagId: string) => void
}

const Tag = ({ tag, filterByTag }: TagProps) => {

  const heandleFilterByTag = () => {
    filterByTag && filterByTag(tag.id)
  }

  return (
    <li className='tag' onClick={heandleFilterByTag}>
      <b>&#35;</b>
      <div>{tag.name}</div>
    </li>
  )
}

export default Tag