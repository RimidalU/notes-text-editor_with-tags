import React from 'react'
import Tag from '../Tag/Tag'

interface TagsContainerProps {
  tags: string[],
  filterByTag: (tagName: string) => void
}

const TagsContainer = ({ tags, filterByTag }: TagsContainerProps) => {
  return (
    <section className='tagsContainer'>
      <h3 className="tagsContainer_name">TagsContainer</h3>
      <ul className="tags_wrapper">
        {tags && tags.map((tagName, index) => (
          <Tag filterByTag={filterByTag} tagName={tagName} key={`${tagName}-${index}`} />
        ))}
      </ul>
    </section>
  )
}

export default TagsContainer