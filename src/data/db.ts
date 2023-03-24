import { v4 as uuidv4 } from 'uuid';

import { INote, IRootJson, ITag } from './../interfaces/types';
import initialData from './InitialData.json'

export const initialState: IRootJson = { notes: [], tags: [] }

let data: IRootJson = initialData

export const getInitialState = () => { return initialData || initialState }

//notes

export const getNote = (noteId: string) => {
    return data.notes.filter(note => note.id === noteId)[0]
}

export const removeNote = (noteId: string) => {
    data = {
        notes: data.notes.filter(note => note.id !== noteId),
        tags: data.tags
    }
    return data
}

export const addNote = (note: INote) => {
    const newNote = { ...note, id: uuidv4() }
    data = {
        notes: [newNote, ...data.notes],
        tags: data.tags
    }
    return data
}

export const editNote = (noteId: string, newNote: INote) => {

    const newNotesSet = data.notes.map(note => {
        return note.id === noteId ? newNote : note
    })

    data = {
        notes: newNotesSet,
        tags: data.tags
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

export const addTag = (tag: ITag) => {
    const newTag = { ...tag, id: uuidv4() }
    data = {
        notes: data.notes,
        tags: [newTag, ...data.tags]
    }
    return data
}

export const getByNoteId = (noteId: string) => {

    const currentNoteTagsId = getNote(noteId).tags

    return data.tags.filter((tag) => currentNoteTagsId.includes(tag.id));
}