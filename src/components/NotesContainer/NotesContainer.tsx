import React from 'react'
import { INote, ITag } from '../../interfaces/types'
import Note from '../Note/Note'

interface NotesContainerProps {
  notes: INote[],
  editNote: (noteId: string) => void,
  removeNote: (noteId: string) => void,
  viewNote: (noteId: string) => void
  getNoteTags: (noteId: string) => ITag[]
}

const NotesContainer = ({ notes, getNoteTags, removeNote, editNote, viewNote }: NotesContainerProps) => {

  return (
    <section className='notesContainer'>
      <h3 className="notesContainer_name">NotesContainer</h3>
      <ul className="notes_wrapper">
        {notes && notes.map((note) => (
          <Note removeNote={removeNote} viewNote={viewNote} editNote={editNote} note={note} getNoteTags={getNoteTags} key={note.id} />
        ))}
      </ul>
    </section>
  )
}

export default NotesContainer