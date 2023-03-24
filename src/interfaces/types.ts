export interface IRootJson {
    tags: ITag[]
    notes: INote[]
}

export interface ITag {
    id: string
    name: string
}

export interface INote {
    id: string
    name: string
    description: string
    tags: string[]
}
