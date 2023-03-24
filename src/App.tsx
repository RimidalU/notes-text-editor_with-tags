import './App.scss'
import Header from './layouts/Header/Header'
import Footer from './layouts/Footer/Footer'
import Main from './layouts/Main/Main'
import Modal from './components/Modal/Modal'
import { useEffect, useState } from 'react'
import { IRootJson } from './interfaces/types'
import * as DB from './data/db'


function App() {
  const [openModal, setOpenModal] = useState<boolean>(false)
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

  const viewNote = (noteId: string) => {           //TODO: add note viewer
    console.log('handleNoteView' + noteId)
  }

  const getNoteTags = (noteId: string) => {
    return DB.getByNoteId(noteId)
  }

  const handleTogleModal = (isOpen: boolean) => {
    setOpenModal(isOpen)
  }

  const handleaddNote = (): void => {
    setOpenModal(true)
  }

  const handleaEditNote = (): void => {
    setOpenModal(true)
  }

  return (
    <div className="App">
      <Header />
      <Main data={data} editNote={handleaEditNote} addNote={handleaddNote} getNoteTags={getNoteTags} viewNote={viewNote} filterByTag={filterByTag} removeNote={removeNote} />
      <Footer />
      <Modal open={openModal} setOpenModal={handleTogleModal} setData={setData} />
    </div>
  )
}

export default App