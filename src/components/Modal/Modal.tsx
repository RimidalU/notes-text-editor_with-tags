import React from 'react'
import { IcurrentNote, INote, IRootJson } from '../../interfaces/types'
import * as DB from '../../data/db'


interface ModalProps {
  open: boolean,
  currentNote?: IcurrentNote,
  setOpenModal: (isOpen: boolean) => void
  setData: (newData: IRootJson) => void
}

const Modal = ({ open, currentNote, setOpenModal, setData }: ModalProps) => {

  const noteNameValue = currentNote?.name || undefined
  const noteDescriptionValue = currentNote?.description || undefined

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();



    const newNoteName: string = (event.target as HTMLFormElement).noteName.value
    const newNoteDescription: string = (event.target as HTMLFormElement).noteDescription.value
    const newNoteTags: string[] = ['vfvdf', 'rfeeegg']
    const newNoteTagsId = newNoteTags.map(tag => {
      return DB.addTag(tag)
    })


    const newNote = {
      name: newNoteName,
      description: newNoteDescription,
      tags: newNoteTagsId
    }

    setData(DB.addNote(newNote))
    setOpenModal(false)
  }

  if (!open) {
    return null
  }
  return (
    <div className="overlay">
      <div className="modal_wrapper">
        <header>
          <h2 className="modal_title">Create a new note</h2>
          <span className='close_btn' onClick={() => setOpenModal(false)}>&#x2718;</span>
        </header>
        <form id='noteForm' className='note_form' onSubmit={handleSubmit}>
          <div className='form_group'>
            <label htmlFor="noteName">Enter note title:</label>
            <input type="text" id="noteName" name="noteName" placeholder="Enter note title" value={noteNameValue} required autoFocus />
          </div>
          <div className='form_group'>
            <label htmlFor="noteDescription">Enter note description:</label>
            <textarea id="noteDescription" name="noteDescription" placeholder="Enter note description" rows={4} cols={50} value={noteDescriptionValue} required />
          </div>
          <div className="tagsSet"></div>
          <div className="button_set">
            <button className='reset_btn' type="reset">&#x2718;</button>
            <button className='submit_btn' type="submit">&#10004;</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Modal