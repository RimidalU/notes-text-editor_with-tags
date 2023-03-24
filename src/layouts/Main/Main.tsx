import React, { useEffect, useState } from 'react'
// import { v4 as uuidv4 } from 'uuid';

import NotesContainer from '../../components/NotesContainer/NotesContainer'
import TagsContainer from '../../components/TagsContainer/TagsContainer'
import { IRootJson } from '../../interfaces/types'

import initialData from '../../data/InitialData.json'

const Main = () => {
  const [data, setData] = useState<IRootJson>({ notes: [], tags: [] })

  useEffect(() => {
    setData(initialData)
  }, [])

  const filterByTag = (tagId: string) => {
    console.log(tagId);
  }

  const removeNote = (noteId: string) => {
    console.log('handleNoteRemove' + noteId);
  }

  const editNote = (noteId: string) => {
    console.log('handleNoteEdit' + noteId);
  }

  return (
    <main className='main'>
      <NotesContainer removeNote={removeNote} editNote={editNote} notes={data.notes} />
      <TagsContainer filterByTag={filterByTag} tags={data.tags} />
    </main>
  )
}

export default Main