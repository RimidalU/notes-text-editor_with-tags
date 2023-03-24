import React, { useEffect, useState } from 'react'

import NotesContainer from '../../components/NotesContainer/NotesContainer'
import TagsContainer from '../../components/TagsContainer/TagsContainer'
import { INote, IRootJson } from '../../interfaces/types'

import * as DB from '../../data/db'

const Main = () => {
  const [data, setData] = useState<IRootJson>(DB.initialState)

  useEffect(() => {
    setData(DB.getInitialState())
  }, [])

  const filterByTag = (tagId: string) => {
    console.log(tagId);
  }

  const removeNote = (noteId: string) => {
    setData(DB.removeNote(noteId))
  }

  const editNote = (noteId: string) => {
    const newNote = DB.getInitialState().notes[0]  //TODO: add note maker
    setData(DB.editNote(noteId, newNote))
  }

  const addNote = (note: INote) => {
    const newNote = DB.getInitialState().notes[0]   //TODO: add note maker
    setData(DB.addNote(newNote))
  }

  return (
    <main className='main'>
      <NotesContainer removeNote={removeNote} editNote={editNote} notes={data.notes} />
      <TagsContainer filterByTag={filterByTag} tags={data.tags} />
    </main>
  )
}

export default Main