import React from 'react'
import { ITag } from '../../interfaces/types'
import Tag from '../Tag/Tag'

interface TagsContainerProps {
  tags: ITag[],
  filterByTag?: (tagId: string) => void
}

const TagsContainer = ({ tags, filterByTag }: TagsContainerProps) => {

  return (
    <section className='tagsContainer'>
      <h3 className="tagsContainer_name">Tags</h3>
      <ul className="tags_wrapper">
        {tags && tags.map(tag => (
          <Tag filterByTag={filterByTag} tag={tag} key={tag.id} />
        ))}
      </ul>
    </section>
  )
}

export default TagsContainer