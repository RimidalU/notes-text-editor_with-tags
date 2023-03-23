import React from 'react'
import { INote } from '../../interfaces/types'
import Note from '../Note/Note'

interface NotesContainerProps {
  notes: INote[],
  editNote: (note: string) => void,
  removeNote: (note: string) => void
}

const NotesContainer = ({ notes, removeNote, editNote }: NotesContainerProps) => {
  return (
    <section className='notesContainer'>
      <h3 className="notesContainer_name">NotesContainer</h3>
      <ul className="notes_wrapper">
        {notes && notes.map((note) => (
          <Note removeNote={removeNote} editNote={editNote} note={note} key={note.id} />
        ))}
      </ul>
    </section>
  )
}

export default NotesContainer