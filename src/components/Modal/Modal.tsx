import React, { useEffect, useState } from 'react'
import { INote, IRootJson, ITag } from '../../interfaces/types'
import * as DB from '../../data/db'
import Tag from '../Tag/Tag'
import TagDetective from '../../utils/tagDetective'
import ContenteditableTextarea from '../ContenteditableTextarea/ContenteditableTextarea'
import highlighter from '../../utils/highlighter'

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
  const [newTags, setNewTags] = useState<string[]>([])
  const [descriptionWithBacklight, setDescriptionWithBacklight] = useState<string | undefined>(description)


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

  useEffect(() => {
    const timeout = setTimeout(() => {
      description && setNewTags([... new Set(TagDetective(description))])
      setDescription(description);
      setDescriptionWithBacklight(highlighter(description || ''))
    }, 600);
    return () => {
      clearTimeout(timeout);
    };
  }, [description]);

  const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const updateDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newNoteTagsId = newTags.map(tag => {
      return DB.addTag(tag)
    })

    const newNote = {
      id: currentNote?.id || '',
      name: name || '',
      description: description || '',
      tags: newNoteTagsId
    }

    currentNote?.id ? setData(DB.editNote(currentNote.id, newNote)) : setData(DB.addNote(newNote))
    handleCloseModal()
  }

  const handleReset = () => {
    setName('')
    setDescription('')
    setNewTags([])
  }

  const handleCloseModal = () => {
    setNewTags([])
    setOpenModal(false)
  }

  const setContentDesc = (evtText: any) => {
    // setDescription(evtText.html)
  }

  if (!open) {
    return null
  }
  return (
    <div className="overlay">
      <div className="modal_wrapper">
        <header>
          <h2 className="modal_title">Create a new note</h2>
          <span className='close_btn' onClick={handleCloseModal}>&#x2718;</span>
        </header>
        <form id='noteForm' className='note_form' onSubmit={handleSubmit} onReset={handleReset}>
          <div className='form_group'>
            <label htmlFor="noteName">Enter note title:</label>
            <input type="text" id="noteName" name="noteName" placeholder={"Enter note title"} onChange={updateName} value={name} required autoFocus />
          </div>
          <div className='form_group'>
            <label htmlFor="noteDescription">Enter note description:</label>
            <textarea id="noteDescription" name="noteDescription" placeholder="Enter note description" rows={4} wrap="soft" cols={50} onChange={updateDescription} value={description} required />
            <ContenteditableTextarea text={descriptionWithBacklight || ''} setContentDesc={setContentDesc} />
          </div>
          {newTags.length > 0 && <div className="tagsSet newSet">
            {newTags.map((tag, index) => (
              <Tag tag={{ name: tag, id: index.toString() }} key={index} />
            ))}
          </div>}
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