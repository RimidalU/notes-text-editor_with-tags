import React from 'react'
import { INote } from '../../interfaces/types'
import Tag from '../Tag/Tag'

interface NoteProps {
  note: INote,
  editNote: (note: string) => void,
  removeNote: (note: string) => void
}

const Note = ({ note, removeNote, editNote }: NoteProps) => {

  const handleNoteView = () => {
    console.log('handleNoteView')
  }

  const handleRemoveNote = () => {
    removeNote(note.id)
    console.log('handleNoteRemove')
  }

  const handleEditNote = () => {
    editNote(note.id)
    console.log('handleNoteEdit')
  }

  return (
    <li className='note' >
      <div onClick={handleNoteView}>
        <h2 className="note_name">{note.name}</h2>
        <p className="note_description">{note.description}</p>
        <ul className="note_tags_wrapper">
          {note.tags && note.tags.map((tagName, index) => (
            <Tag tagName={tagName} key={`${tagName}-${index}`} />
          ))}
        </ul>
      </div>
      <div className="button_set">
        <span className='edit_note' onClick={handleEditNote}>&#x270e;</span>
        <span className='remove_note' onClick={handleRemoveNote}>&#x2718;</span>
      </div>
    </li>
  )
}

export default Note