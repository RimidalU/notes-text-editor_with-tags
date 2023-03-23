import React, { MouseEventHandler } from 'react'
import NotesContainer from '../../components/NotesContainer/NotesContainer'
import TagsContainer from '../../components/TagsContainer/TagsContainer'

const Main = () => {

  const fakeTags = ['first', 'second', 'fsgffdsgfdg', 'second', 'fsgfsfsfgdfgdfgdfdsgfdg']

  const filterByTag = (tagName: string) => {
    console.log(tagName);
  }

  return (
    <main className='main'>
      <NotesContainer />
      <TagsContainer filterByTag={filterByTag} tags={fakeTags} />
    </main>
  )
}

export default Main