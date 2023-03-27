import React, { useEffect, useState } from 'react'
import { INote, IRootJson, ITag } from '../../interfaces/types'
import * as DB from '../../data/db'
import Tag from '../Tag/Tag'

interface ModalProps {
  open: boolean,
  currentNote?: INote,
  setOpenModal: (isOpen: boolean) => void
  setData: (newData: IRootJson) => void
}

const Modal = ({ open, currentNote, setOpenModal, setData }: ModalProps) => {
  const [name, setName] = useState<string | undefined>(undefined)
  const [description, setDescription] = useState<string | undefined>(undefined)
  const [tags, setTags] = useState<ITag[]>([])

  const newNoteTags: string[] = ['vfvdf', 'rfeeegg']   // add usestae 

  useEffect(() => {
    setName(currentNote?.name || undefined)
    setDescription(currentNote?.description || undefined)

    let ItemTags = currentNote?.tags && currentNote?.tags.map(tagId => {
      return DB.getTag(tagId)[0]
    })

    setTags(ItemTags || [])
  }, [open])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setName(name);
    }, 600);
    return () => {
      clearTimeout(timeout);
    };
  }, [name]);

  const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDescription(description);
    }, 600);
    return () => {
      clearTimeout(timeout);
    };
  }, [description]);

  const updateDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newNoteTagsId = newNoteTags.map(tag => {
      return DB.addTag(tag)
    })

    const newNote = {
      name: name || '',
      description: description || "",
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
            <input type="text" id="noteName" name="noteName" placeholder={"Enter note title"} onChange={updateName} value={name} required autoFocus />
          </div>
          <div className='form_group'>
            <label htmlFor="noteDescription">Enter note description:</label>
            <textarea id="noteDescription" name="noteDescription" placeholder="Enter note description" rows={4} cols={50} onChange={updateDescription} value={description} required />
          </div>
          <div className="tagsSet">
            {tags && tags.map(tag => (
              <Tag tag={tag} key={tag.id} />
            ))}
          </div>
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