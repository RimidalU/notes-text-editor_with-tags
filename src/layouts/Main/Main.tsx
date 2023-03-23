import React from 'react'
import NotesContainer from '../../components/NotesContainer/NotesContainer'
import TagsContainer from '../../components/TagsContainer/TagsContainer'

const Main = () => {
  return (
    <main className='main'>
      <NotesContainer />
      <TagsContainer />
    </main>
  )
}

export default Main