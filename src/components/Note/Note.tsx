import React from 'react'
import { INote, ITag } from '../../interfaces/types'
import Tag from '../Tag/Tag'

interface NoteProps {
  note: INote,
  editNote: (noteId: string) => void,
  removeNote: (noteId: string) => void,
  viewNote: (noteId: string) => void,
  getNoteTags: (noteId: string) => ITag[],
}

const Note = ({ note, removeNote, editNote, viewNote, getNoteTags }: NoteProps) => {

  const handleNoteView = () => {
    viewNote(note.id)
  }

  const handleRemoveNote = () => {
    removeNote(note.id)
  }

  const handleEditNote = () => {
    editNote(note.id)
  }

  const noteTags = getNoteTags(note.id)

  return (
    <li className='note' >
      <div onClick={handleNoteView}>
        <h2 className="note_name">{note.name}</h2>
        <p className="note_description">{note.description}</p>
        <ul className="note_tags_wrapper">
          {noteTags && noteTags.map((noteTag) => (
            <Tag tag={noteTag} key={noteTag.id} />                    // filterByTag={filterByTag} ??
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