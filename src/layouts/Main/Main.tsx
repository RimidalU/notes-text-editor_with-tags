import React from 'react'

import NotesContainer from '../../components/NotesContainer/NotesContainer'
import TagsContainer from '../../components/TagsContainer/TagsContainer'

import { IRootJson, ITag } from '../../interfaces/types'

interface MainProps {
  editNote: (noteId: string) => void,
  addNote: () => void,
  filterByTag?: (tagId: string) => void,
  removeNote: (noteId: string) => void,
  viewNote: (noteId: string) => void,
  getNoteTags: (noteId: string) => ITag[],
  data: IRootJson
}

const Main = ({ addNote, editNote, filterByTag, removeNote, viewNote, getNoteTags, data }: MainProps) => {

  return (
    <main className='main'>
      <NotesContainer removeNote={removeNote} editNote={editNote} viewNote={viewNote} addNote={addNote} getNoteTags={getNoteTags} notes={data.notes} />
      <TagsContainer filterByTag={filterByTag} tags={data.tags} />
    </main>
  )
}

export default Main