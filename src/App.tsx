import './App.scss'
import Header from './layouts/Header/Header'
import Footer from './layouts/Footer/Footer'
import Main from './layouts/Main/Main'
import Modal from './components/Modal/Modal'
import { useEffect, useState } from 'react'
import { INote, IRootJson } from './interfaces/types'
import * as DB from './data/db'
import Filter from './utils/filter'


function App() {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [data, setData] = useState<IRootJson>(DB.initialState)
  const [modalItemId, setModalItemId] = useState<INote | undefined>(undefined)
  const [filterValues, setfilterValues] = useState<string[]>([])
  const [filteredList, setFilteredList] = useState<IRootJson>(data);

  useEffect(() => {
    setData(DB.getInitialState())
  }, [])

  useEffect(() => {
    const filteringData = Filter(data.notes, filterValues)
    setFilteredList({
      notes: filterValues.length ? filteringData : data.notes,
      tags: data.tags
    });
  }, [data.notes, filterValues]);

  const filterByTag = (tagId: string) => {
    const newFilter = filterValues.includes(tagId) ? filterValues.filter(item => item !== tagId) : [...filterValues, tagId]
    setfilterValues(newFilter)
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
      <Main data={filteredList} editNote={handleaEditNote} addNote={handleaddNote} getNoteTags={getNoteTags} viewNote={viewNote} filterByTag={filterByTag} removeNote={removeNote} />
      <Footer />
      <Modal open={openModal} currentNote={modalItemId} setOpenModal={handleTogleModal} setData={setData} />
    </div>
  )
}

export default App