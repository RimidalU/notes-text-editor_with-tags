import * as DB from '../data/db'
import { INote, ITag } from '../interfaces/types'

const remoteNoteTagSanitizer = (tags: ITag[], noteId: string, newDataSet: INote[]) => {
    const tagsCurrentNote = DB.getByNoteId(noteId).map(tag => tag.id)

    const unusedTags = tagsCurrentNote.map(tagId => {
        if (!DB.filterByTag(tagId, newDataSet).length) {
            return tagId
        }
        return null
    })

    unusedTags.map(unusedTag => { return tags = tags.filter(tag => tag.id !== unusedTag) })
    return tags
}

export default remoteNoteTagSanitizer