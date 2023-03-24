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

  const addNote = () => {
    const newNote = DB.getInitialState().notes[0]   //TODO: add note maker
    setData(DB.addNote(newNote))
  }

  const viewNote = (noteId: string) => {           //TODO: add note viewer
    console.log('handleNoteView' + noteId)
  }

  const getNoteTags = (noteId: string) => {
    return DB.getByNoteId(noteId)
  }

  return (
    <main className='main'>
      <NotesContainer removeNote={removeNote} editNote={editNote} viewNote={viewNote} addNote={addNote} getNoteTags={getNoteTags} notes={data.notes} />
      <TagsContainer filterByTag={filterByTag} tags={data.tags} />
    </main>
  )
}

export default Main