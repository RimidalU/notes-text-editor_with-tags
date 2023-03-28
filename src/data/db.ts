import { v4 as uuidv4 } from 'uuid';
import remoteNoteTagSanitizer from '../utils/remoteNoteTagSanitizer';

import { IcurrentNote, INote, IRootJson, ITag } from './../interfaces/types';
import initialData from './InitialData.json'

export const initialState: IRootJson = { notes: [], tags: [] }

let data: IRootJson = initialData

export const getInitialState = () => { return initialData || initialState }

//notes

export const getNote = (noteId: string) => {
    return data.notes.filter(note => note.id === noteId)[0]
}

export const removeNote = (noteId: string) => {
    const newDataSet = data.notes.filter(note => note.id !== noteId)
    const pureTags = remoteNoteTagSanitizer(data.tags, noteId, newDataSet)
    data = {
        notes: newDataSet,
        tags: [...pureTags]
    }

    return data
}

export const addNote = (note: IcurrentNote) => {

    const newNote: INote = { ...note, id: uuidv4() }
    data = {
        notes: [newNote, ...data.notes],
        tags: [...data.tags]
    }
    return data
}

export const editNote = (noteId: string, newNote: INote) => {

    const newNotesSet = data.notes.map(note => {
        return note.id === noteId ? newNote : note
    })

    data = {
        notes: newNotesSet,
        tags: [...data.tags]
    }

    return data
}

//tags

export const getTags = () => { return data.tags || [] }

export const getTag = (tagId: string) => {
    return data.tags.filter(tag => tag.id === tagId)
}

export const removeTag = (tagId: string) => {
    data = {
        notes: data.notes,
        tags: data.tags.filter(tag => tag.id !== tagId)
    }
    return data
}

export const addTag = (name: string) => {

    const currentTagInDB = data.tags.find(tag => tag.name === name)

    if (!currentTagInDB) {
        const newTag = { name, id: uuidv4() }
        data = {
            notes: data.notes,
            tags: [newTag, ...data.tags]
        }
        return newTag.id
    }
    return currentTagInDB.id
}

export const getByNoteId = (noteId: string) => {

    const currentNoteTagsId = getNote(noteId)?.tags || []

    return data.tags.filter((tag) => currentNoteTagsId.includes(tag.id));
}

export const filterByTag = (tagId: string, notesArr: INote[] = data.notes) => {
    return notesArr.filter(note => note.tags.includes(tagId))
}