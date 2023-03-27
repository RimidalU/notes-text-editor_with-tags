import React, { useState } from 'react'
import { ITag } from '../../interfaces/types'

interface TagProps {
  tag: ITag,
  filterByTag?: (tagId: string) => void
}

const Tag = ({ tag, filterByTag }: TagProps) => {

  const [isActive, setActive] = useState(false);

  const ToggleClass = () => {
    filterByTag && setActive(!isActive);
  };

  const heandleFilterByTag = () => {
    filterByTag && filterByTag(tag.id)
    ToggleClass()
  }

  return (
    <li className={isActive ? "active tag" : "tag"} onClick={heandleFilterByTag}>
      <b>&#35;</b>
      <div>{tag.name}</div>
    </li>
  )
}

export default Tag