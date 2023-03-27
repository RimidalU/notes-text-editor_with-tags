import * as DB from '../data/db'

import { INote } from "../interfaces/types";

const Filter = (list: INote[], filter: string[]): INote[] => {
    if (!filter) return list;

    const arrFeltering = filter.map(value => {
        return DB.filterByTag(value)
    })

    const result = Array.from(new Set(arrFeltering.flat()));
    return result;
};

export default Filter