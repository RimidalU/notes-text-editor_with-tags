const TagDetective = (str: string): string[] => {
    const regExp = /\B#\w+/gi

    return str.match(regExp)?.map(tag => tag.slice(1)) || []
}


export default TagDetective