import './App.scss'
import Header from './layouts/Header/Header'
import Footer from './layouts/Footer/Footer'
import Main from './layouts/Main/Main'
import Modal from './components/Modal/Modal'
import { useEffect, useState } from 'react'
import { INote, IRootJson } from './interfaces/types'
import * as DB from './data/db'


function App() {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [data, setData] = useState<IRootJson>(DB.initialState)
  const [modalItemId, setModalItemId] = useState<INote | undefined>(undefined)

  useEffect(() => {
    setData(DB.getInitialState())
  }, [])


  const filterByTag = (tagId: string) => {
    console.log(tagId);
  }

  const removeNote = (noteId: string) => {
    setData(DB.removeNote(noteId))
  }

  const viewNote = (noteId: string) => {           //TODO: add note viewer
    console.log('handleNoteView' + noteId)
  }

  const getNoteTags = (noteId: string) => {
    return DB.getByNoteId(noteId)
  }

  const handleTogleModal = (isOpen: boolean) => {
    setOpenModal(isOpen)
    setModalItemId(undefined)
  }

  const handleaddNote = (): void => {
    setModalItemId(undefined)
    setOpenModal(true)
  }

  const handleaEditNote = (noteId: string): void => {
    const noteToEdit = DB.getNote(noteId)
    setModalItemId(noteToEdit)
    setOpenModal(true)
  }

  return (
    <div className="App">
      <Header />
      <Main data={data} editNote={handleaEditNote} addNote={handleaddNote} getNoteTags={getNoteTags} viewNote={viewNote} filterByTag={filterByTag} removeNote={removeNote} />
      <Footer />
      <Modal open={openModal} currentNote={modalItemId} setOpenModal={handleTogleModal} setData={setData} />
    </div>
  )
}

export default App