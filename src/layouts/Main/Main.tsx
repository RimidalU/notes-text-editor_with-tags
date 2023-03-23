import React from 'react'
import { v4 as uuidv4 } from 'uuid';

import NotesContainer from '../../components/NotesContainer/NotesContainer'
import TagsContainer from '../../components/TagsContainer/TagsContainer'
import { INote } from '../../interfaces/types'

const Main = () => {

  const fakeNotes: INote[] = [
    {
      id: uuidv4(),
      name: 'first',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, aut eaque sunt illo accusantium omnis aliquid explicabo animi ipsa autem',
      tags: ['first', 'second', 'fsgffdsgfdg']
    },
    {
      id: uuidv4(),
      name: 'first',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, aut eaque sunt illo accusantium omnis aliquid explicabo animi ipsa autem',
      tags: ['first', 'second', 'fsgffdsgfdg']
    },
    {
      id: uuidv4(),
      name: 'first',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, aut eaque sunt illo accusantium omnis aliquid explicabo animi ipsa autem',
      tags: ['first', 'second', 'fsgffdsgfdg']
    },
  ]
  const fakeTags = ['first', 'second', 'fsgffdsgfdg', 'second', 'fsgfsfsfgdfgdfgdfdsgfdg']

  const filterByTag = (tagName: string) => {
    console.log(tagName);
  }

  const removeNote = (noteId: string) => {
    console.log(noteId);
  }

  const editNote = (noteId: string) => {
    console.log(noteId);
  }

  return (
    <main className='main'>
      <NotesContainer removeNote={removeNote} editNote={editNote} notes={fakeNotes} />
      <TagsContainer filterByTag={filterByTag} tags={fakeTags} />
    </main>
  )
}

export default Main